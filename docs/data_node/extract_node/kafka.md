---
title: Kafka
sidebar_position: 4
---
## Overview

The Kafka extract node support read data from kafka. 

## Configuration
the Dashboard has not supported extracting data from Kafka for this version, 
you can create Kafka data streams from the background via the [Command-line Tools](user_guide/command_line_tools.md).

## Extract node params

|  Option | Required  |  Default |  Type | Description  |
|---|---|---|---|---|
|id|required|(none)|String|Identifier for node|
|name|optional|(none)|String|Node name|
|fields|required|(none)|`List<FieldInfo>`|Table fields|
|watermarkField|optional|(none)|WatermarkField|Defines the field for generating watermarks|
|properties|optional|(none)|Map<String, String>|This can set other properties for connector params|
|  topic | required  |  (none) | String  | The Kafka topic name to read|
|   bootstrapServers| required  |  (none) | String  | Comma separated list of Kafka brokers |
|  format | required  |  (none) | Format  | It includes `json`,`avro`,`debezium-json`,`canal-json-inlong`,`csv` |
|kafkaScanStartupMode| required|(none)|KafkaScanStartupMode |It includes `earliest-offset` and `latest-offset`|
|primaryKey|optional|(none)|String|It decides use what connector, there value will use upsert kafka, empty value will use kafka|
|groupId|optional|null|String|Consumer group id. We suggest that set it by self|

# Dependency

We can find Kafka connector dependency `sort-connector-kafka-1.2.0-incubating-SNAPSHOT.jar` after Inlong maven packaging. 

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
    'properties.group.id' = 'testGroup',
    'scan.startup.mode' = 'earliest-offset',
    'format' = 'csv'
)

```
* connector is upsert kafka :
```sql
CREATE TABLE kafkaTable (
    `id` INT,
    `name` STRINTG
) WITH (
    'connector' = 'upsert-kafka',
    'topic' = 'user',
    'properties.bootstrap.servers' = 'localhost:9092',
    'properties.group.id' = 'testGroup',
    'scan.startup.mode' = 'earliest-offset',
    'key.format' = 'csv',
    'value.format' = 'csv'
)
```
