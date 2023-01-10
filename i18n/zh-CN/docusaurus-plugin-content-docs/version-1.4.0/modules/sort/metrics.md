---
title: 监控指标
sidebar_position: 4
---

## 概览

我们为节点增加了指标计算。 用户添加 with 选项 `inlong.metric` 后 Sort 会计算指标，`inlong.metric` 选项的值由三部分构成：`groupId&streamId&nodeId`。
用户可以使用 [metric reporter](https://nightlies.apache.org/flink/flink-docs-release-1.13/zh/docs/deployment/metric_reporters/) 去上报数据。

## 指标

### 支持的 extract 节点

#### 支持节点级别指标

| 指标名 | extract 节点 | 描述 |
|-------------|--------------|-------------|
| groupId_streamId_nodeId_numRecordsIn | kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc | 输入记录数 |
| groupId_streamId_nodeId_numBytesIn | kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc | 输入字节数 |
| groupId_streamId_nodeId_numRecordsInPerSecond | kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc | 每秒输入记录数 |
| groupId_streamId_nodeId_numBytesInPerSecond | kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc | 每秒输入字节数 |

#### 支持表级别指标
它是用于整库同步场景

| metric name | extract node | description |
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

### 支持的 load 节点

#### 支持节点级别指标

| 指标名 | load 节点 | 描述 |
|-------------|-----------|-------------|
| groupId_streamId_nodeId_numRecordsOut | clickhouse,elasticsearch,greenplum,hbase,<br/>hdfs,hive,iceberg,kafka,<br/>mysql,oracle,postgresql,sqlserver,tdsql-postgresql | 输出记录数 |
| groupId_streamId_nodeId_numBytesOut |  clickhouse,elasticsearch,greenplum,hbase,<br/>hdfs,hive,iceberg,kafka,<br/>mysql,oracle,postgresql,sqlserver,tdsql-postgresql | 输出字节数 |
| groupId_streamId_nodeId_numRecordsOutPerSecond |  clickhouse,elasticsearch,greenplum,<br/>hbase,hdfs,hive,iceberg,<br/>kafka,mysql,oracle,postgresql,sqlserver,tdsql-postgresql | 每秒输出记录数 |
| groupId_streamId_nodeId_numBytesOutPerSecond |  clickhouse,elasticsearch,greenplum,<br/>hbase,hdfs,hive,iceberg,kafka,<br/>mysql,oracle,postgresql,sqlserver,tdsql-postgresql | 每秒输出字节数 |
| groupId_streamId_nodeId_dirtyRecordsOut |  clickhouse,elasticsearch,greenplum,hbase,<br/>hdfs,hive,iceberg,kafka,mysql,<br/>oracle,postgresql,sqlserver,tdsql-postgresql | output records |
| groupId_streamId_nodeId_dirtyBytesOut |  clickhouse,elasticsearch,greenplum,hbase,<br/>hdfs,hive,iceberg,kafka,mysql,<br/>oracle,postgresql,sqlserver,tdsql-postgresql | output bytes |

#### 支持表级别指标

| metric name | load node | description |
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

## 用法

这里将介绍一个同步MYSQL数据到PostgreSQL的例子，同时介绍指标的使用。

* flink sql 的使用
```sql

 create table `table_groupId_streamId_nodeId1`(
     `id` INT,
    `name` INT,
    `age` STRING,
    PRIMARY KEY(`id`) NOT ENFORCED)
    WITH (
        'connector' = 'mysql-cdc-inlong',
        'hostname' = 'xxxx',
        'username' = 'xxx',
        'password' = 'xxx',
        'database-name' = 'test',
        'scan.incremental.snapshot.enabled' = 'true',
        'server-time-zone' = 'GMT+8',
        'table-name' = 'user',
        'inlong.metric' = 'mysqlGroup&mysqlStream&mysqlNode1'
);

 CREATE TABLE `table_groupId_streamId_nodeId2`(
     PRIMARY KEY (`id`) NOT ENFORCED,
     `id` INT,
     `name` STRING,
     `age` INT)
     WITH (
         'connector' = 'jdbc-inlong',
         'url' = 'jdbc:postgresql://ip:5432/postgres',
         'username' = 'postgres',
         'password' = 'inlong',
         'table-name' = 'public.user',
         'inlong.metric' = 'pggroup&pgStream&pgNode'
         );

 INSERT INTO `table_groupId_streamId_nodeId2`
 SELECT
     `id`,
     `name`,
     `age`
 FROM `table_groupId_streamId_nodeId1`;
```

* 我们可以在flink-conf.yaml中添加metric report配置

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


