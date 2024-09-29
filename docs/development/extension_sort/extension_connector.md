---
title: Sort Extension Connector
sidebar_position: 1
---

# How to Extend Extract Node and Load Node Types

## Extending Extract & Load Node

### Introduction

The Extract nodes is a set of Source Connectors based on <a href="https://flink.apache.org/">Apache Flink<sup>®</sup></a> used to extract data from different source systems.
The Load nodes is a set of Sink Connectors based on <a href="https://flink.apache.org/">Apache Flink<sup>®</sup></a> used to load data into different storage systems.

When Apache InLong Sort starts, it translates a set of Extract and Load Node configurations into corresponding Flink SQL and submits them to the Flink cluster, initiating the data extraction and loading tasks specified by the user.

### Adding Extract & Load Node Definitions

To customize an `Extract Node`, you need to inherit the `org.apache.inlong.sort.protocol.node.ExtractNode` class, and to customize a `Load Node`, you need to inherit the `org.apache.inlong.sort.protocol.node.LoadNode` class. Both must selectively implement methods from the `org.apache.inlong.sort.protocol.node.Node` interface.

| Method Name | Meaning | Default Value |
|--------------------|------------------|--------------------------|
| getId              | Get node ID           | Inlong StreamSource Id   |
| getName            | Get node name            | Inlong StreamSource Name |
| getFields          | Get field information           | Fields defined by Inlong Stream      |
| getProperties      | Get additional node properties         | Empty Map                    |
| tableOptions       | Get Flink SQL table properties | Additional node properties                   |
| genTableName       | Generate Flink SQL table name  | No default value                     |
| getPrimaryKey      | Get primary key             | null                     |
| getPartitionFields | Get partition fields           | null                     | 

Additionally, Sort has added two extra interfaces, `InlongMetric` and `Metadata`, to support richer semantics.

#### InlongMetric
If a custom node needs to report Inlong metrics, it must implement the `org.apache.inlong.sort.protocol.InlongMetric` interface.<br>
When Sort parses the configuration, it adds the startup parameter `'inlong.metric.labels' = 'groupId={g}&streamId={s}&nodeId={n}'` to the table option, which is used to configure Inlong Audit.<br>
For details, see [How to Integrate Inlong Audit into Custom Connector](#jump1)

#### Metadata
If a custom node needs to specify a field as a Flink SQL Metadata field, it must implement the `org.apache.inlong.sort.protocol.Metadata` interface.
Sort will automatically mark the corresponding field as Metadata when parsing the configuration.

## Extending Apache Flink Connector

Sort is implemented based on Apache Flink version 1.15. For information on how to extend the Apache Flink Connector, refer to <a href="https://nightlies.apache.org/flink/flink-docs-release-1.15/zh/docs/dev/table/sourcessinks/">User-defined Sources & Sinks</a>

## <span id="jump1">How to Integrate Inlong Audit into Custom Connector</span>
Inlong Sort encapsulates the metric reporting process in the `org.apache.inlong.sort.base.metric.SourceExactlyMetric` and `org.apache.inlong.sort.base.metric.SinkExactlyMetric` classes. Developers only need to initialize the corresponding `Metric` object according to the Source/Sink type to implement metric reporting.

The common practice is to pass parameters such as the InLong Audit address when constructing the Source/Sink, and initialize the `SourceExactlyMetric/SinkExactlyMetric` object when calling the open() method to initialize the Source/Sink operator. After processing the actual data, call the corresponding audit reporting method.

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
        if (sinkExactlyPropagateMetric != null) {
            sinkExactlyPropagateMetric.invoke(1, getDataSize(value), schemaUtils.getDataTime(data));
        }
    }
```
