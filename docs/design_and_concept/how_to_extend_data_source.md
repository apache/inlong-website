---
title: Extended Data Source
sidebar_position: 6
---

## Overview

Inlong is aimed at create dataflow between different data sources, now Inlong has support several universal data sources such as **MySQL**, **Apache Kafka**, **ClickHouse** on Input/Output respectively,
You can refer to [data_node](https://inlong.apache.org/docs/next/data_node/extract_node/auto_push) for specific information.
We Plan to support more data sources in the future, and this article is a development manual to extend data sources.

## Extend Data Extract Node

In order to extend an input data sources , also refered to **extract node** in Inlong. We take **MySQL_BINLOG** for example.

- Develop extract node plugin in sort, refer to [how_to_write_plugin_sort](https://inlong.apache.org/docs/next/design_and_concept/how_to_write_plugin_sort)
- Add **TaskType** in `org.apache.inlong.common.enums.TaskTypeEnum`
```java
public enum TaskTypeEnum {

    DATABASE_MIGRATION(0),
    SQL(1),
    BINLOG(2),
    FILE(3),
    KAFKA(4),
    PULSAR(5),
    POSTGRES(6),
    ORACLE(7),
    SQLSERVER(8),
    MONGODB(9),
    ...
```
- Add **SourceType** in `org.apache.inlong.manager.common.enums.SourceType`
```java
public enum SourceType {

    AUTO_PUSH("AUTO_PUSH", null),
    FILE("FILE", TaskTypeEnum.FILE),
    SQL("SQL", TaskTypeEnum.SQL),
    BINLOG("BINLOG", TaskTypeEnum.BINLOG),
    KAFKA("KAFKA", TaskTypeEnum.KAFKA),
    PULSAR("PULSAR", TaskTypeEnum.PULSAR),
    POSTGRES("POSTGRES", TaskTypeEnum.POSTGRES),
    ORACLE("ORACLE", TaskTypeEnum.ORACLE),
    SQLSERVER("SQLSERVER", TaskTypeEnum.SQLSERVER),
    MONGODB("MONGO", TaskTypeEnum.MONGODB),
    ...
```
- Create new package under package path: `org.apache.inlong.manager.common.pojo.source`, develop every entity class needed.
  ![](img/Binlog_Entity_Class.png)
- Create Operation class for new data source under package path: `org.apache.inlong.manager.service.source`.
  ![](img/Binlog_Operation.png)
- Transfer data source to **ExtractNode** supported in **Sort**
```java
public class ExtractNodeUtils {
    
    public static ExtractNode createExtractNode(StreamSource sourceInfo) {
        SourceType sourceType = SourceType.forType(sourceInfo.getSourceType());
        switch (sourceType) {
            case BINLOG:
                return createExtractNode((MySQLBinlogSource) sourceInfo);
            case KAFKA:
                return createExtractNode((KafkaSource) sourceInfo);
            case PULSAR:
                return createExtractNode((PulsarSource) sourceInfo);
            case POSTGRES:
                return createExtractNode((PostgresSource) sourceInfo);
            case ORACLE:
                return createExtractNode((OracleSource) sourceInfo);
            case SQLSERVER:
                return createExtractNode((SqlServerSource) sourceInfo);
            case MONGODB:
                return createExtractNode((MongoDBSource) sourceInfo);
            default:
                throw new IllegalArgumentException(
                        String.format("Unsupported sourceType=%s to create extractNode", sourceType));
        }
    }
    ...
```
## Extend Data Load Node
The way to extend data sink is nearly the same with data source
- Develop load node plugin in sort, refer to [how_to_write_plugin_sort](https://inlong.apache.org/docs/next/design_and_concept/how_to_write_plugin_sort)
- Add **SinkType** in `org.apache.inlong.manager.common.enums.SinkType`
```java
public enum SinkType {

    HIVE,
    KAFKA,
    ICEBERG,
    CLICKHOUSE,
    HBASE,
    POSTGRES,
    ELASTICSEARCH,
    SQLSERVER,
    HDFS,
    GREENPLUM,
    ...
```
- Create new package under package path: `org.apache.inlong.manager.common.pojo.sink`, develop every entity class needed.
  ![](img/Kafka_Entity_Class.png)
- Create Operation class for new data source under package path: `org.apache.inlong.manager.service.sink`.
  ![](img/Kafka_Operation.png)
- Transfer data sink to **LoadNode** supported in **Sort**
```java
public class LoadNodeUtils {

    /**
     * Create load node from the stream sink info.
     */
    public static LoadNode createLoadNode(StreamSink streamSink) {
        SinkType sinkType = SinkType.forType(streamSink.getSinkType());
        switch (sinkType) {
            case KAFKA:
                return createLoadNode((KafkaSink) streamSink);
            case HIVE:
                return createLoadNode((HiveSink) streamSink);
            case HBASE:
                return createLoadNode((HBaseSink) streamSink);
            case POSTGRES:
                return createLoadNode((PostgresSink) streamSink);
            case CLICKHOUSE:
                return createLoadNode((ClickHouseSink) streamSink);
            case ICEBERG:
                return createLoadNode((IcebergSink) streamSink);
            case SQLSERVER:
                return createLoadNode((SqlServerSink) streamSink);
            case ELASTICSEARCH:
                return createLoadNode((ElasticsearchSink) streamSink);
            case HDFS:
                return createLoadNode((HdfsSink) streamSink);
            case GREENPLUM:
                return createLoadNode((GreenplumSink) streamSink);
            case MYSQL:
                return createLoadNode((MySQLSink) streamSink);
            default:
                throw new BusinessException(String.format("Unsupported sinkType=%s to create load node", sinkType));
        }
    }
   ...
```
