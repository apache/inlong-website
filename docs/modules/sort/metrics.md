---
title: Monitor Metrics
sidebar_position: 4
---

## Overview

We add metric computing for node. Sort will compute metric when user just need add with option `inlong.metric` that includes `groupId&streamId&nodeId`.
Sort will export metric by flink metric group, So user can use [metric reporter](https://nightlies.apache.org/flink/flink-docs-release-1.13/zh/docs/deployment/metric_reporters/) to get metric data.

## Metric

### supporting extract node

| metric name | extract node | description |
|-------------|--------------|-------------|
| groupId_streamId_nodeId_numRecordsIn | kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc | input records number |
| groupId_streamId_nodeId_numBytesIn | kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc | input bytes number |
| groupId_streamId_nodeId_numRecordsInPerSecond | kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc | input records per second |
| groupId_streamId_nodeId_numBytesInPerSecond | kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc | input bytes number per second |

### supporting load node

| metric name | load node | description |
|-------------|-----------|-------------|
| groupId_streamId_nodeId_numRecordsOut | clickhouse,elasticsearch,greenplum,hbase,<br/>hdfs,hive,iceberg,kafka,mysql,<br/>oracle,postgresql,sqlserver,tdsql-postgresql | out records number |
| groupId_streamId_nodeId_numBytesOut |  clickhouse,elasticsearch,greenplum,hbase,<br/>hdfs,hive,iceberg,kafka,mysql,<br/>oracle,postgresql,sqlserver,tdsql-postgresql | output byte number |
| groupId_streamId_nodeId_numRecordsOutPerSecond |  clickhouse,elasticsearch,greenplum,hbase,<br/>hdfs,hive,iceberg,kafka,mysql,<br/>oracle,postgresql,sqlserver,tdsql-postgresql | output records per second |
| groupId_streamId_nodeId_numBytesOutPerSecond |  clickhouse,elasticsearch,greenplum,hbase,<br/>hdfs,hive,iceberg,kafka,mysql,<br/>oracle,postgresql,sqlserver,tdsql-postgresql | output bytes  per second |

## Usage

One example about sync mysql data to postgresql data. And We will introduce usage of metric.

* use flink sql
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

* We can add metric report in flink-conf.yaml

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


