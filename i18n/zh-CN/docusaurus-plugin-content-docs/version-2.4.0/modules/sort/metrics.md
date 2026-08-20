---
title: 监控指标
sidebar_position: 4
---

## 概览

我们为节点增加了指标计算。 用户添加 with 选项 `inlong.metric.labels` 后 Sort 会计算指标，`inlong.metric.labels` 选项的值由三部分构成：groupId=`{groupId}`&streamId=`{streamId}`&nodeId=`{nodeId}`。
用户可以使用 [metric reporter](https://nightlies.apache.org/flink/flink-docs-release-1.13/zh/docs/deployment/metric_reporters/) 去上报数据。

## 指标

### 支持的 extract 节点

| 指标名 | Extract 节点 | 描述 |
|-------------|--------------|-------------|
| groupId_streamId_nodeId_numRecordsIn | kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc | 输入记录数 |
| groupId_streamId_nodeId_numBytesIn | kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc | 输入字节数 |
| groupId_streamId_nodeId_numRecordsInPerSecond | kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc | 每秒输入记录数 |
| groupId_streamId_nodeId_numBytesInPerSecond | kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc | 每秒输入字节数 |

#### 支持表级别指标
它是用于整库同步场景

| 指标名 | Extract 节点 | 描述 |
|-------------|--------------|-------------|
| groupId_streamId_nodeId_database_table_numRecordsIn | mysql-cdc | 输入记录数 |
| groupId_streamId_nodeId_database_schema_table_numRecordsIn | oracle-cdc,postgresql-cdc | 输入记录数 |
| groupId_streamId_nodeId_database_collection_numRecordsIn | mongodb-cdc | 输入记录数 |
| groupId_streamId_nodeId_database_table_numBytesIn | mysql-cdc | 输入字节数 |
| groupId_streamId_nodeId_database_schema_table_numBytesIn | oracle-cdc,postgresql-cdc | 输入字节数 |
| groupId_streamId_nodeId_database_collection_numBytesIn | mongodb-cdc | 输入字节数 |
| groupId_streamId_nodeId_database_table_numRecordsInPerSecond | mysql-cdc | 每秒输入记录数 |
| groupId_streamId_nodeId_database_schema_table_numRecordsInPerSecond | oracle-cdc,postgresql-cdc | 每秒输入记录数 |
| groupId_streamId_nodeId_database_collection_numRecordsInPerSecond | mongodb-cdc | 每秒输入记录数 |
| groupId_streamId_nodeId_database_table_numBytesInPerSecond | mysql-cdc | 每秒输入字节数 |
| groupId_streamId_nodeId_database_schema_table_numBytesInPerSecond | oracle-cdc,postgresql-cdc | 每秒输入字节数 |
| groupId_streamId_nodeId_database_collection_numBytesInPerSecond | mongodb-cdc | 每秒输入字节数 |
| groupId_streamId_nodeId_database_collection_numSnapshotCreate | postgresql-cdc,pulsar,mongodb-cdc,sqlserver-cdc | 尝试创建Checkpoint数 |
| groupId_streamId_nodeId_database_collection_numSnapshotError | postgresql-cdc,pulsar,mongodb-cdc,sqlserver-cdc | 创建Checkpoint异常数 |
| groupId_streamId_nodeId_database_collection_numSnapshotComplete | postgresql-cdc,pulsar,mongodb-cdc,sqlserver-cdc | 创建Checkpoint成功数 |
| groupId_streamId_nodeId_database_collection_snapshotToCheckpointTimeLag | postgresql-cdc,pulsar,mongodb-cdc,sqlserver-cdc | 从开始创建Checkpoint到完成创建延迟（毫秒） |
| groupId_streamId_nodeId_database_collection_numDeserializeSuccess | postgresql-cdc,pulsar,mongodb-cdc,sqlserver-cdc | 反序列化成功数 |
| groupId_streamId_nodeId_database_collection_numDeserializeSuccess | postgresql-cdc,pulsar,mongodb-cdc,sqlserver-cdc | 反序列化异常数 |
| groupId_streamId_nodeId_database_collection_deserializeTimeLag | postgresql-cdc,pulsar,mongodb-cdc,sqlserver-cdc | 反序列化延迟（毫秒） |

### 支持的 load 节点

| 指标名 | Load 节点 | 描述 |
|-------------|-----------|-------------|
| groupId_streamId_nodeId_numRecordsOut | clickhouse,elasticsearch,greenplum,hbase,<br/>hdfs,hive,iceberg,kafka,<br/>mysql,oracle,postgresql,sqlserver,tdsql-postgresql | 输出记录数 |
| groupId_streamId_nodeId_numBytesOut |  clickhouse,elasticsearch,greenplum,hbase,<br/>hdfs,hive,iceberg,kafka,<br/>mysql,oracle,postgresql,sqlserver,tdsql-postgresql | 输出字节数 |
| groupId_streamId_nodeId_numRecordsOutPerSecond |  clickhouse,elasticsearch,greenplum,<br/>hbase,hdfs,hive,iceberg,<br/>kafka,mysql,oracle,postgresql,sqlserver,tdsql-postgresql | 每秒输出记录数 |
| groupId_streamId_nodeId_numBytesOutPerSecond |  clickhouse,elasticsearch,greenplum,<br/>hbase,hdfs,hive,iceberg,kafka,<br/>mysql,oracle,postgresql,sqlserver,tdsql-postgresql | 每秒输出字节数 |
| groupId_streamId_nodeId_dirtyRecordsOut |  clickhouse,elasticsearch,greenplum,hbase,<br/>hdfs,hive,iceberg,kafka,mysql,<br/>oracle,postgresql,sqlserver,tdsql-postgresql | 输出脏数据记录数 |
| groupId_streamId_nodeId_dirtyBytesOut |  clickhouse,elasticsearch,greenplum,hbase,<br/>hdfs,hive,iceberg,kafka,mysql,<br/>oracle,postgresql,sqlserver,tdsql-postgresql | 输出脏数据字节数 |


### 支持表级别指标
它是用于整库同步场景

| 指标名 | Load node | 描述 |
|-------------|-----------|-------------|
| groupId_streamId_nodeId_database_table_numRecordsOut | doris,iceberg,starRocks | 输出记录数据 |
| groupId_streamId_nodeId_database_schema_table_numRecordsOut | postgresql | 输出记录数据 |
| groupId_streamId_nodeId_topic_numRecordsOut | kafka | 输出记录数据 |
| groupId_streamId_nodeId_database_table_numBytesOut | doris,iceberg,starRocks | 输出字节数据 |
| groupId_streamId_nodeId_database_schema_table_numBytesOut | postgresql | 输出字节数据 |
| groupId_streamId_nodeId_topic_numBytesOut | kafka | 输出字节数据 |
| groupId_streamId_nodeId_database_table_numRecordsOutPerSecond | doris,iceberg,starRocks | 每秒记录数据 |
| groupId_streamId_nodeId_database_schema_table_numRecordsOutPerSecond | postgresql | 每秒记录数据 |
| groupId_streamId_nodeId_topic_numRecordsOutPerSecond | kafka | 每秒记录数据 |
| groupId_streamId_nodeId_database_table_numBytesOutPerSecond | doris,iceberg,starRocks | 每秒输出字节数量 |
| groupId_streamId_nodeId_database_schema_table_numBytesOutPerSecond | postgresql | 每秒输出字节数量 |
| groupId_streamId_nodeId_topic_numBytesOutPerSecond | kafka | 每秒输出字节数量 |
| groupId_streamId_nodeId_database_table_dirtyRecordsOut | doris,iceberg,starRocks | 输出脏数据记录数 |
| groupId_streamId_nodeId_database_schema_table_dirtyRecordsOut | postgresql | 输出脏数据记录数 |
| groupId_streamId_nodeId_topic_dirtyRecordsOut | kafka | 输出脏数据记录数 |
| groupId_streamId_nodeId_database_table_dirtyBytesOut | doris,iceberg,starRocks | 输出脏数据字节数据 |
| groupId_streamId_nodeId_database_schema_table_dirtyBytesOut | postgresql | 输出脏数据字节数据 |
| groupId_streamId_nodeId_topic_dirtyBytesOut | kafka | 输出脏数据字节数据 |
| groupId_streamId_nodeId_numSerializeSuccess |  starRocks | 序列化成功数 |
| groupId_streamId_nodeId_numSerializeError |  starRocks | 序列化异常数 |
| groupId_streamId_nodeId_serializeTimeLag |  starRocks | 序列化延迟（毫秒） |
| groupId_streamId_nodeId_numSnapshotCreate |  starRocks | 尝试创建Checkpoint数 |
| groupId_streamId_nodeId_numSnapshotError |  starRocks | 创建Checkpoint异常数 |
| groupId_streamId_nodeId_numSnapshotComplete |  starRocks | 创建Checkpoint成功数 |
| groupId_streamId_nodeId_snapshotToCheckpointTimeLag |  starRocks | 从开始创建Checkpoint到完成创建延迟（毫秒） |

## 用法

这里将介绍一个同步 MYSQL 数据到 PostgreSQL 的例子，同时介绍指标的使用。

* flink sql 的使用
```sql
CREATE TABLE `table_groupId_streamId_nodeId1` (
    `id` INT,
    `name` INT,
    `age` STRING,
    PRIMARY KEY (`id`) NOT ENFORCED
) WITH (
    'connector' = 'mysql-cdc-inlong',
    'hostname' = 'xxxx',
    'username' = 'xxx',
    'password' = 'xxx',
    'database-name' = 'test',
    'scan.incremental.snapshot.enabled' = 'true',
    'server-time-zone' = 'GMT+8',
    'table-name' = 'user',
    'inlong.metric.labels' = 'groupId=xxgroup&streamId=xxstream&nodeId=xxnode'
);

CREATE TABLE `table_groupId_streamId_nodeId2` (
    `id` INT,
    `name` STRING,
    `age` INT,
    PRIMARY KEY (`id`) NOT ENFORCED
) WITH (
    'connector' = 'jdbc-inlong',
    'url' = 'jdbc:postgresql://ip:5432/postgres',
    'username' = 'postgres',
    'password' = 'inlong',
    'table-name' = 'public.user',
    'inlong.metric.labels' = 'groupId=pggroup&streamId=pgStream&nodeId=pgNode'
);

INSERT INTO `table_groupId_streamId_nodeId2`
SELECT
    `id`,
    `name`,
    `age`
FROM `table_groupId_streamId_nodeId1`;
```

* 要将指标上报到外部系统，我们可以在 flink-conf.yaml 中添加 metric report 配置（以`Prometheus`为例）

```yaml
metric.reporters: promgateway
metrics.reporter.promgateway.class: org.apache.flink.metrics.prometheus.PrometheusPushGatewayReporter
metrics.reporter.promgateway.host: ip
metrics.reporter.promgateway.port: 9091
metrics.reporter.promgateway.interval: 60 SECONDS
```
`ip` 和 `port` 是你的 [pushgateway](https://github.com/prometheus/pushgateway/releases) 的配置。

* 执行上面的sql后，我们可以访问 pushgateway 的 url: http://ip:port

当我们使用的 metric report 是 `org.apache.flink.metrics.prometheus.PrometheusPushGatewayReporter` 指标名将添加前缀 `flink_taskmanager_job_task_operator`。  
我们可以看到完整的指标名如下:    
 `flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numRecordsIn`,  
 `flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numBytesIn`,  
 `flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numRecordsInPerSecond`,  
 `flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numBytesInPerSecond`,  
 `flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numRecordsOut`,  
 `flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numBytesOut`,  
 `flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numRecordsOutPerSecond`,  
 `flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numBytesOutPerSecond`.


