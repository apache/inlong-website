---
title: Monitor Metrics
sidebar_position: 4
---

## Overview

We add metric computing for node. Sort will compute metric when user just need add with option `inlong.metric.labels` that includes groupId=`{groupId}`&streamId=`{streamId}`&nodeId=`{nodeId}`.
Sort will export metric by flink metric group, So user can use [metric reporter](https://nightlies.apache.org/flink/flink-docs-release-1.13/zh/docs/deployment/metric_reporters/) to get metric data.

## Metric

### Supporting extract node

#### Node level metric

| metric name | extract node | description |
|-------------|--------------|-------------|
| groupId_streamId_nodeId_numRecordsIn | kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc | input records number |
| groupId_streamId_nodeId_numBytesIn | kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc | input bytes number |
| groupId_streamId_nodeId_numRecordsInPerSecond | kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc | input records per second |
| groupId_streamId_nodeId_numBytesInPerSecond | kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc | input bytes number per second |

#### Table level metric
 It is used for all database sync.

| Metric name | Extract node | Description |
|-------------|--------------|-------------|
| groupId_streamId_nodeId_database_table_numRecordsIn | mysql-cdc | input records number |
| groupId_streamId_nodeId_database_schema_table_numRecordsIn | oracle-cdc,postgresql-cdc | input records number |
| groupId_streamId_nodeId_database_collection_numRecordsIn | mongodb-cdc | input records number |
| groupId_streamId_nodeId_database_table_numBytesIn | mysql-cdc | input records number |
| groupId_streamId_nodeId_database_schema_table_numBytesIn | oracle-cdc,postgresql-cdc | input records number |
| groupId_streamId_nodeId_database_collection_numBytesIn | mongodb-cdc | input bytes number |
| groupId_streamId_nodeId_database_table_numRecordsInPerSecond | mysql-cdc | input records number per second |
| groupId_streamId_nodeId_database_schema_table_numRecordsInPerSecond | oracle-cdc,postgresql-cdc | input records number per second |
| groupId_streamId_nodeId_database_collection_numRecordsInPerSecond | mongodb-cdc | input records number per second |
| groupId_streamId_nodeId_database_table_numBytesInPerSecond | mysql-cdc | input bytes number per second |
| groupId_streamId_nodeId_database_schema_table_numBytesInPerSecond | oracle-cdc,postgresql-cdc | input bytes number per second |
| groupId_streamId_nodeId_database_collection_numBytesInPerSecond | mongodb-cdc | input bytes number per second |
| groupId_streamId_nodeId_database_collection_numSnapshotCreate | postgresql-cdc,pulsar,mongodb-cdc,sqlserver-cdc | checkpoint creation attempt number | 
| groupId_streamId_nodeId_database_collection_numSnapshotError | postgresql-cdc,pulsar,mongodb-cdc,sqlserver-cdc | checkpoint creation exception number |
| groupId_streamId_nodeId_database_collection_numSnapshotComplete | postgresql-cdc,pulsar,mongodb-cdc,sqlserver-cdc | successful checkpoint creation number |
| groupId_streamId_nodeId_database_collection_snapshotToCheckpointTimeLag | postgresql-cdc,pulsar,mongodb-cdc,sqlserver-cdc | time lag from start to completion of checkpoint creation (ms) |
| groupId_streamId_nodeId_database_collection_numDeserializeSuccess | postgresql-cdc,pulsar,mongodb-cdc,sqlserver-cdc | successful deserialization number | 
| groupId_streamId_nodeId_database_collection_numDeserializeError | postgresql-cdc,pulsar,mongodb-cdc,sqlserver-cdc | deserialization error number | 
| groupId_streamId_nodeId_database_collection_deserializeTimeLag | postgresql-cdc,pulsar,mongodb-cdc,sqlserver-cdc | deserialization time lag (ms) |
### Supporting load node

#### Node level metric

| Metric name | Load node | Description |
|-------------|-----------|-------------|
| groupId_streamId_nodeId_numRecordsOut | clickhouse,elasticsearch,greenplum,hbase,<br/>hdfs,hive,iceberg,kafka,mysql,<br/>oracle,postgresql,sqlserver,tdsql-postgresql | out records number |
| groupId_streamId_nodeId_numBytesOut |  clickhouse,elasticsearch,greenplum,hbase,<br/>hdfs,hive,iceberg,kafka,mysql,<br/>oracle,postgresql,sqlserver,tdsql-postgresql | output byte number |
| groupId_streamId_nodeId_numRecordsOutPerSecond |  clickhouse,elasticsearch,greenplum,hbase,<br/>hdfs,hive,iceberg,kafka,mysql,<br/>oracle,postgresql,sqlserver,tdsql-postgresql | output records per second |
| groupId_streamId_nodeId_numBytesOutPerSecond |  clickhouse,elasticsearch,greenplum,hbase,<br/>hdfs,hive,iceberg,kafka,mysql,<br/>oracle,postgresql,sqlserver,tdsql-postgresql | output bytes  per second |
| groupId_streamId_nodeId_dirtyRecordsOut |  clickhouse,elasticsearch,greenplum,hbase,<br/>hdfs,hive,iceberg,kafka,mysql,<br/>oracle,postgresql,sqlserver,tdsql-postgresql | output records |
| groupId_streamId_nodeId_dirtyBytesOut |  clickhouse,elasticsearch,greenplum,hbase,<br/>hdfs,hive,iceberg,kafka,mysql,<br/>oracle,postgresql,sqlserver,tdsql-postgresql | output bytes |

#### Table level metric

| Metric name | Load node | Description |
|-------------|-----------|-------------|
| groupId_streamId_nodeId_database_table_numRecordsOut | doris,iceberg,starRocks | out records number |
| groupId_streamId_nodeId_database_schema_table_numRecordsOut | postgresql | out records number |
| groupId_streamId_nodeId_topic_numRecordsOut | kafka | out records number |
| groupId_streamId_nodeId_database_table_numBytesOut | doris,iceberg,starRocks | out byte number |
| groupId_streamId_nodeId_database_schema_table_numBytesOut | postgresql | out byte number |
| groupId_streamId_nodeId_topic_numBytesOut | kafka | out byte number |
| groupId_streamId_nodeId_database_table_numRecordsOutPerSecond | doris,iceberg,starRocks | out records number per second |
| groupId_streamId_nodeId_database_schema_table_numRecordsOutPerSecond | postgresql | out records number per second |
| groupId_streamId_nodeId_topic_numRecordsOutPerSecond | kafka | out records number per second |
| groupId_streamId_nodeId_database_table_numBytesOutPerSecond | doris,iceberg,starRocks | out bytes number per second |
| groupId_streamId_nodeId_database_schema_table_numBytesOutPerSecond | postgresql | out bytes number per second |
| groupId_streamId_nodeId_topic_numBytesOutPerSecond | kafka | out bytes number per second |
| groupId_streamId_nodeId_database_table_dirtyRecordsOut | doris,iceberg,starRocks | out records number |
| groupId_streamId_nodeId_database_schema_table_dirtyRecordsOut | postgresql | out records number |
| groupId_streamId_nodeId_topic_dirtyRecordsOut | kafka | out records number |
| groupId_streamId_nodeId_database_table_dirtyBytesOut | doris,iceberg,starRocks | out byte number |
| groupId_streamId_nodeId_database_schema_table_dirtyBytesOut | postgresql | out byte number |
| groupId_streamId_nodeId_topic_dirtyBytesOut | kafka | out byte number |
| groupId_streamId_nodeId_numSerializeSuccess |  starRocks |  successful deserialization number |
| groupId_streamId_nodeId_numSerializeError |  starRocks | deserialization exception number |
| groupId_streamId_nodeId_serializeTimeLag |  starRocks | serialization time lag (ms) |
| groupId_streamId_nodeId_numSnapshotCreate |  starRocks | checkpoint creation attempt number |
| groupId_streamId_nodeId_numSnapshotError |  starRocks | checkpoint creation exception number |
| groupId_streamId_nodeId_numSnapshotComplete |  starRocks | successful checkpoint creation number |
| groupId_streamId_nodeId_snapshotToCheckpointTimeLag |  starRocks | time lag from start to completion of checkpoint creation (ms) |

## Usage

One example about sync mysql data to postgresql data. And We will introduce usage of metric.

* use flink sql
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

* To report the metrics to an external system, we can add metric report in flink-conf.yaml. Take the `Prometheus` reporter as an example.

```yaml
metric.reporters: promgateway
metrics.reporter.promgateway.class: org.apache.flink.metrics.prometheus.PrometheusPushGatewayReporter
metrics.reporter.promgateway.host: ip
metrics.reporter.promgateway.port: 9091
metrics.reporter.promgateway.interval: 60 SECONDS
```
`ip` and `port` is your [pushgateway](https://github.com/prometheus/pushgateway/releases) setting. 

* We can visit http://ip:port of pushgateway after execute flink sql.
Metric name will add prefix `flink_taskmanager_job_task_operator` when metric report is `org.apache.flink.metrics.prometheus.PrometheusPushGatewayReporter`.  
We can see full metric name:  
 `flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numRecordsIn`,  
 `flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numBytesIn`,  
 `flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numRecordsInPerSecond`,  
 `flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numBytesInPerSecond`,  
 `flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numRecordsOut`,  
 `flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numBytesOut`,  
 `flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numRecordsOutPerSecond`,  
 `flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numBytesOutPerSecond`.


