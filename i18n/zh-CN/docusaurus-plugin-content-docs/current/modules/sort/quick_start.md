---
title: 安装部署
sidebar_position: 2
---

## 配置flink运行环境
当前inlong-sort是基于flink的一个应用，因此运行inlong-sort应用前，需要准备好[flink 环境](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/deployment/overview/)。

由于当前inlong-sort依赖的是flink1.13.5版本，因此在下载部署包时，请选择`flink-1.13.5-bin-scala_2.11.tgz`

flink环境配置完成后，可以通过浏览器访问flink的web ui，对应的地址是`/{flink部署路径}/conf/masters`文件中的地址

## 准备安装文件
安装文件在`inlong-sort`目录。

## 启动inlong-sort应用
有了上述编译阶段产出的jar包后，就可以启动inlong-sort的应用了。提交方式可以参考[如何提交flink作业](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/deployment/cli/#submitting-a-job)。

示例：
```
./bin/flink run -c org.apache.inlong.sort.singletenant.flink.Entrance inlong-sort/sort-[version].jar \
--cluster-id debezium2hive --dataflow.info.file /YOUR_DATAFLOW_INFO_DIR/debezium-to-hive.json \
--source.type pulsar --sink.type hive --sink.hive.rolling-policy.rollover-interval 60000 \
--metrics.audit.proxy.hosts 127.0.0.1:10081 --sink.hive.rolling-policy.check-interval 30000
```

注意：

- `-c org.apache.inlong.sort.singletenant.flink.Entrance` 表示main class name

- `inlong-sort/sort-[version].jar` 为编译阶段产出的jar包

## 必要的配置
- `--cluster-id` 用来唯一标识一个inlong-sort作业，同inlong-manager中`sort.appName`配置一致
- `--dataflow.info.file` 流配置文件路径
- `--source.type` 数据源的种类, 当前支持："pulsar"
- `--sink.type` 存储系统的种类，当前支持："clickhouse"、"hive"、"iceberg"、"kafka"
- `--metrics.audit.proxy.hosts` audit proxy 地址用于上报审计指标数据

**启动参数配置示例**
```
--cluster-id debezium2kafka-canal --dataflow.info.file /YOUR_DATAFLOW_INFO_DIR/debezium-to-kafka-canal.json \
--source.type pulsar --sink.type kafka
```

## 所有支持的配置
| 配置名                                        |  是否必须  |     默认值     | 描述                                                |
|--------------------------------------------|:------:|:-----------:|---------------------------------------------------|
| cluster-id                                 |   Y    |     NA      | 用来唯一标识一个inlong-sort作业                             |
| source.type                                |   Y    |     NA      | 数据源的种类, 当前支持"pulsar"                              |
| sink.type                                  |   Y    |     NA      | 存储系统的种类，当前支持"clickhouse"、"hive"、"iceberg"和"kafka" |
| source.parallelism                         |   N    |      1      | source的并行度                                        |
| deserialization.parallelism                |   N    |      1      | deserialization的并行度                               |
| transformation.parallelism                 |   N    |      1      | transformation的并行度                                |
| sink.parallelism                           |   N    |      1      | sink的并行度                                          |
| checkpoint.interval                        |   N    |   600000    | checkpoint间隔，单位：毫秒                                |
| min.pause.between.checkpoints.ms           |   N    |     500     | checkpoint之间的最小间隔，单位：毫秒                           |
| checkpoint.timeout.ms                      |   N    |   600000    | checkpoint超时时间，单位：毫秒                              |
| sink.field.type.string.nullable            |   N    |    false    | string类型的sink field是否可以为空                         |
| sink.field.type.int.nullable               |   N    |    true     | int类型的sink field是否可以为空                            |
| sink.field.type.short.nullable             |   N    |    true     | short类型的sink field是否可以为空                          |
| sink.field.type.long.nullable              |   N    |    true     | long类型的sink field是否可以为空                           |
| sink.hive.rolling-policy.file-size         |   N    |  134217728  | 写hive时的文件滚动大小，单位：字节                               |
| sink.hive.rolling-policy.rollover-interval |   N    |   1800000   | 写hive时的文件滚动时间间隔，单位：毫秒                             |
| sink.hive.rolling-policy.check-interval    |   N    |    60000    | 写hive时的文件滚动检查间隔，单位：毫秒                             |