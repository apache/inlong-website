---
title: 监控指标
sidebar_position: 4
---

## 概览

我们为节点增加了指标计算。 用户添加 with 选项 `inlong.metric` 后 Sort 会计算指标，`inlong.metric` 选项的值由三部分构成：`groupId&streamId&nodeId`。
用户可以使用 [metric reporter](https://nightlies.apache.org/flink/flink-docs-release-1.13/zh/docs/deployment/metric_reporters/) 去上报数据。

## 指标

### 支持的 extract 节点

| 指标名 | extract 节点 | 描述 |
|-------------|--------------|-------------|
| groupId_streamId_nodeId_numRecordsIn | kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc | 输入记录数 |
| groupId_streamId_nodeId_numBytesIn | kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc | 输入字节数 |
| groupId_streamId_nodeId_numRecordsInPerSecond | kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc | 每秒输入记录数 |
| groupId_streamId_nodeId_numBytesInPerSecond | kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc | 每秒输入字节数 |

### 支持的 load 节点

| 指标名 | load 节点 | 描述 |
|-------------|-----------|-------------|
| groupId_streamId_nodeId_numRecordsOut | clickhouse,elasticsearch,greenplum,hbase,<br/>hdfs,hive,iceberg,kafka,<br/>mysql,oracle,postgresql,sqlserver,tdsql-postgresql | 输出记录数 |
| groupId_streamId_nodeId_numBytesOut |  clickhouse,elasticsearch,greenplum,hbase,<br/>hdfs,hive,iceberg,kafka,<br/>mysql,oracle,postgresql,sqlserver,tdsql-postgresql | 输出字节数 |
| groupId_streamId_nodeId_numRecordsOutPerSecond |  clickhouse,elasticsearch,greenplum,<br/>hbase,hdfs,hive,iceberg,<br/>kafka,mysql,oracle,postgresql,sqlserver,tdsql-postgresql | 每秒输出记录数 |
| groupId_streamId_nodeId_numBytesOutPerSecond |  clickhouse,elasticsearch,greenplum,<br/>hbase,hdfs,hive,iceberg,kafka,<br/>mysql,oracle,postgresql,sqlserver,tdsql-postgresql | 每秒输出字节数 |

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


