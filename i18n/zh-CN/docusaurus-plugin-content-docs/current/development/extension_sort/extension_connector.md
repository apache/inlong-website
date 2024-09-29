---
title: Sort 扩展 Connector
sidebar_position: 1
---

# 如何扩展 Extract Node 和 Load Node 类型

## 扩展 Extract & Load Node

### 简介

Extract 节点是基于 <a href="https://flink.apache.org/">Apache Flink<sup>®</sup></a> 的
Source Connectors 用于从不同的源系统抽取数据。
Load 节点是基于 <a href="https://flink.apache.org/">Apache Flink<sup>®</sup></a> 的 Sink
Connectors 用于将数据加载到不同的存储系统。

Apache InLong Sort 启动时通过将一组 Extract 和 Load Node 配置翻译成对应的 Flink SQL 并提交到 Flink
集群，拉起用户指定的数据抽取和入库任务。

### 增加 Extract & Load Node 定义

自定义 `Extract Node` 需要继承 `org.apache.inlong.sort.protocol.node.ExtractNode`
类，自定义 `Load Node` 需要继承 `org.apache.inlong.sort.protocol.node.LoadNode` 类，
两者都至少需要选择性实现 `org.apache.inlong.sort.protocol.node.Node` 接口中的方法

| 方法名                | 含义               | 默认值                      |
|--------------------|------------------|--------------------------|
| getId              | 获取节点ID           | Inlong StreamSource Id   |
| getName            | 获取节点名            | Inlong StreamSource Name |
| getFields          | 获取字段信息           | Inlong Stream 定义的字段      |
| getProperties      | 获取节点额外属性         | 空 Map                    |
| tableOptions       | 获取 Flink SQL 表属性 | 节点额外属性                   |
| genTableName       | 生成 Flink SQL 表名  | 无默认值                     |
| getPrimaryKey      | 获取主键             | null                     |
| getPartitionFields | 获取分区字段           | null                     | 

同时，Sort 还增加了 `InlongMetric` 和 `Metadata` 两个额外的接口用来支持更丰富的语义。

#### InlongMetric
如果自定义节点需要上报 Inlong 指标，则需要实现 `org.apache.inlong.sort.protocol.InlongMetric` 接口。
Inlong Sort 解析配置时会向 table option 中增加 
`'inlong.metric.labels' = 'groupId={g}&streamId={s}&nodeId={n}'` 启动参数，并以此来配置 Inlong Audit。
详情请查看
[如何集成 Inlong Audit 到自定义 Connector](#jump1)

#### Metadata
如果自定义节点需要指定某个字段为 Flink SQL 的 Metadata 字段，则需要实现 `org.apache.inlong.sort.protocol.Metadata` 接口。
Inlong Sort 解析配置时会自动将对应的字段标记为 Metadata。

## 扩展 Apache Flink Connector

Sort 基于 Apache Flink 1.15 版本实现。如何扩展 Apache Flink Connector
可以参考 <a href="https://nightlies.apache.org/flink/flink-docs-release-1.15/zh/docs/dev/table/sourcessinks/">
User-defined Sources & Sinks</a>

## <span id="jump1">如何集成 Inlong Audit 到自定义 Connector</span>
Inlong Sort 将指标上报的流程封装在了 `org.apache.inlong.sort.base.metric.SourceExactlyMetric` 
和 `org.apache.inlong.sort.base.metric.SinkExactlyMetric` 类中。开发者只需要根据 Source/Sink 类型初始化对应的 `Metric` 对象，则可以实现指标上报。

通常的做法是在构造 Source/Sink 时传递例如 InLong Audit 地址，在初始化 Source/Sink 算子调用 open() 方法时进行初始化 `SourceExactlyMetric/SinkExactlyMetric` 对象。
在处理实际数据后再调用对应的审计上报方法。

```
public class StarRocksDynamicSinkFunctionV2<T> extends StarRocksDynamicSinkFunctionBase<T> {

    private static final long serialVersionUID = 1L;
    private static final Logger log = LoggerFactory.getLogger(StarRocksDynamicSinkFunctionV2.class);

    private transient SinkExactlyMetric sinkExactlyMetric;

    private String inlongMetric;
    private String auditHostAndPorts;
    private String auditKeys;
    private String stateKey;

    public StarRocksDynamicSinkFunctionV2(StarRocksSinkOptions sinkOptions,
            TableSchema schema,
            StarRocksIRowTransformer<T> rowTransformer, String inlongMetric,
            String auditHostAndPorts, String auditKeys) {
        this.sinkOptions = sinkOptions;
        
        // pass the params of inlong audit
        this.auditHostAndPorts = auditHostAndPorts;
        this.inlongMetric = inlongMetric;
        this.auditKeys = auditKeys;
    }

    @Override
    public void open(Configuration parameters) {

        // init SinkExactlyMetric in open()
        MetricOption metricOption = MetricOption.builder().withInlongLabels(inlongMetric)
                .withAuditAddress(auditHostAndPorts)
                .withAuditKeys(auditKeys)
                .build();

        if (metricOption != null) {
            sinkExactlyMetric = new SinkExactlyMetric(metricOption, getRuntimeContext().getMetricGroup());
        }
    }
    
    @Override
    public void invoke(T value, Context context)
            throws IOException, ClassNotFoundException, JSQLParserException {
        Object[] data = rowTransformer.transform(value, sinkOptions.supportUpsertDelete());

        sinkManager.write(
                null,
                sinkOptions.getDatabaseName(),
                sinkOptions.getTableName(),
                serializer.serialize(schemaUtils.filterOutTimeField(data)));

        // output audit after write data to sink
        if (sinkExactlyMetric != null) {
            sinkExactlyMetric.invoke(1, getDataSize(value), schemaUtils.getDataTime(data));
        }
    }
```

