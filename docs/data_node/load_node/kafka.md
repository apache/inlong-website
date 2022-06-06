---
title: Kafka
sidebar_position: 5
---
## Overview

The Kafka load node support write data to kafka.

## Configuration
When creating a data flow, select `Kafka` for the data stream direction, and click "Add" to configure it.

![Kafka Configuration](img/kafka.png)

## Load node params
|  Option | Required  |  Default |  Type | Description  |
|---|---|---|---|---|
|id|required|(none)|String|Identifier for node|
|name|optional|(none)|String|Node name
|fields|required|(none)|`List<FieldInfo>`|Table fields|
|fieldRelations|required|(none)|`List<FieldRelation>`|Defines the relation between fields from input to output field|
|properties|optional|(none)|Map<String, String>|This can set other properties for connector params|
|topic | required  |  (none) | String  | The Kafka topic name to write|
|bootstrapServers| required  |  (none) | String  | Comma separated list of Kafka brokers |
|format | required  |  (none) | Format  | It includes `json`,`avro`,`debezium-json`,`canal-json-inlong`,`csv` |
|primaryKey|optional|(none)|String|It decides use what connector, not empty value and format is `json`,`avro` and `csv`  will use upsert kafka, not empty value and format is `debezium-json`,`canal-json-inlong`  will use kafka-inlong, empty value will use kafka|

## Dependency

We can find Kafka connector dependency `sort-connector-kafka-1.2.0-incubating-SNAPSHOT.jar` after Inlong maven package.

## How to use in Flink SQL

* connector is kafka :
```sql
CREATE TABLE kafkaTable (
    `id` INT,
    `name` STRINTG
) WITH (
    'connector' = 'kafka',
    'topic' = 'user',
    'properties.bootstrap.servers' = 'localhost:9092',
    'format' = 'csv'
)

```
* connector is upsert kafka :
```sql
CREATE TABLE kafkaTable (
    PRIMARY KEY (`id`) NOT ENFORCED,
    `id` INT,
    `name` STRINTG
) WITH (
    'connector' = 'upsert-kafka',
    'topic' = 'user',
    'properties.bootstrap.servers' = 'localhost:9092',
    'key.format' = 'csv',
    'value.format' = 'csv'
)
```
* connector is kafka inlong :  
 It supports write metadata for `canal-json-inlong`  

  |  Metadata field | Description  | 
  |---|---|
  |meta.table_name | Name of the table that contain the row  | 
  |meta.database_name | Name of the database that contain the row  |
  |meta.op_ts| It indicates the time that the change was made in the database. If the record is read from snapshot of the table instead of the binlog, the value is always 0|
  |meta.op_type|Operation type, INSERT/UPDATE/DELETE|
  |meta.batch_id|Not important, a simple increment counter|
  |meta.is_ddl|Source does not emit ddl data, value is false|
  |meta.update_before|The update-before data for UPDATE record|
  |meta.mysql_type|MySQL field type|
  |meta.pk_names|Primary key|
  |meta.sql|empty string|
  |meta.sql_type|SQL field type|
  |meta.ts|The ts_ms field is used to store the information about the local time at which the connector processed/generated the event|
 
```sql
CREATE TABLE kafkaTable (
    PRIMARY KEY (`id`) NOT ENFORCED,
    `id` INT,
    `name` STRINTG
) WITH (
    'connector' = 'kafka-inlong',
    'topic' = 'user',
    'properties.bootstrap.servers' = 'localhost:9092',
    'key.format' = 'canal-json-inlong',
    'value.format' = 'canal-json-inlong'
)
```
