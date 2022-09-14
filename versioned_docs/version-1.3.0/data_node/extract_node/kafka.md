---
title: Kafka
sidebar_position: 4
---

import {siteVariables} from '../../version';

## Overview

The `Kafka Extract Node` supports to read data from Kafka topics. It can support read data in the normal fashion and read data in the
upsert fashion. The `upsert-kafka` connector produces a `changelog stream`, where each data record represents an `update` or 
`delete` event. The `kafka-inlong` connector can read data and metadata.  

## Supported Version

| Extract Node                | Kafka version |                                                                                                                                                                                                                                                                                                                                                                                           
|-----------------------------|---------------|
| [Kafka](./kafka.md)         | 0.10+         |  

## Dependencies  

In order to set up the `Kafka Extract Node`, the following provides dependency information for both projects using a
build automation tool (such as Maven or SBT) and SQL Client with Sort Connectors JAR bundles.

### Maven dependency

<pre><code parentName="pre">
{`<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-kafka</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
`}
</code></pre>

## How to create a Kafka Extract Node

### Usage for SQL API

The example below shows how to create a Kafka Extract Node with `Flink SQL` :
* connector is `kafka-inlong`
```sql
-- Set checkpoint every 3000 milliseconds                       
Flink SQL> SET 'execution.checkpointing.interval' = '3s';   

-- Create a Kafka table 'kafka_extract_node' in Flink SQL
Flink SQL> CREATE TABLE kafka_extract_node (
           `id` INT,
           `name` STRINTG
           ) WITH (
           'connector' = 'kafka-inlong',
           'topic' = 'user',
           'properties.bootstrap.servers' = 'localhost:9092',
           'properties.group.id' = 'testGroup',
           'scan.startup.mode' = 'earliest-offset',
           'format' = 'csv'
           )
  
-- Read data
Flink SQL> SELECT * FROM kafka_extract_node;
```
* connector is `upsert-kafka`
```sql
-- Set checkpoint every 3000 milliseconds                       
Flink SQL> SET 'execution.checkpointing.interval' = '3s';

-- Create a Kafka table 'kafka_extract_node' in Flink SQL
Flink SQL> CREATE TABLE kafka_extract_node (
          `id` INT,
          `name` STRINTG,
           PRIMARY KEY (`id`) NOT ENFORCED
          ) WITH (
          'connector' = 'upsert-kafka-inlong',
          'topic' = 'user',
          'properties.bootstrap.servers' = 'localhost:9092',
          'properties.group.id' = 'testGroup',
          'scan.startup.mode' = 'earliest-offset',
          'key.format' = 'csv',
          'value.format' = 'csv'
          )
    
-- Read data
Flink SQL> SELECT * FROM kafka_extract_node;       
```
### Usage for InLong Dashboard

TODO: It will be supported in the future.

### Usage for InLong Manager Client

TODO: It will be supported in the future.

## Kafka Extract Node Options

| Option | Required | Default | Type | Description |
|---------|----------|---------|------|------------|
| connector | required | (none) | String | Specify which connector to use, valid values are:  1. for the Upsert Kafka use: `upsert-kafka-inlong`  2. for normal Kafka use: `kafka-inlong` |
| topic | optional | (none) | String | Topic name(s) to read data from when the table is used as source. It also supports  topic list for source by separating topic by semicolon like `topic-1;topic-2`. Note, only one of `topic-pattern` and `topic` can be specified for sources. |
| topic-pattern | optional | (none) | String | The regular expression for a pattern of topic names to read from. All topics with names that match the specified regular expression will be subscribed by the consumer when the job starts running. Note, only one of `topic-pattern` and `topic` can be specified for sources. |
| properties.bootstrap.servers | required | (none) | String | Comma separated list of Kafka brokers. |
| properties.group.id | required | (none) | String | The id of the consumer group for Kafka source. |
| properties.* | optional | (none) | String | This can set and pass arbitrary Kafka configurations. Suffix names must match the configuration key defined in [Kafka Configuration documentation](https://kafka.apache.org/documentation/#configuration). Flink will remove the `properties.` key prefix and pass the transformed key and values to the underlying KafkaClient. For example, you can disable automatic topic creation via `properties.allow.auto.create.topics` = `false`. But there are some configurations that do not support to set, because Flink will override them, e.g. `key.deserializer` and `value.deserializer`. |
| format | required for normal kafka | (none) | String | The format used to deserialize and serialize the value part of Kafka messages. Please refer to the formats page for more details and more [format](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/formats/overview/) options. Note: Either this option or the `value.format` option are required. |
| key.format | optional | (none) | String | The format used to deserialize and serialize the key part of Kafka messages. Please refer to the formats page for more details and more format options. Note: If a key format is defined, the 'key.fields' option is required as well. Otherwise the Kafka records will have an empty key. |
| key.fields | optional | [] | `List<String>` | Defines an explicit list of physical columns from the table schema that configure the data type for the key format. By default, this list is empty and thus a key is undefined. The list should look like 'field1;field2'. |
| key.fields-prefix | optional | (none) | String | Defines a custom prefix for all fields of the key format to avoid name clashes with fields of the value format. By default, the prefix is empty. If a custom prefix is defined, both the table schema and 'key.fields' will work with prefixed names. When constructing the data type of the key format, the prefix will be removed and the non-prefixed names will be used within the key format. Please note that this option requires that 'value.fields-include' must be set to 'EXCEPT_KEY'. |
| value.format | required for upsert Kafka | (none) | String | The [format](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/formats/overview/) used to deserialize and serialize the value part of Kafka messages. Please refer to the formats page for more details and more format options. |
| value.fields-include | optional | ALL | Enum Possible values: [ALL, EXCEPT_KEY]| Defines a strategy how to deal with key columns in the data type of the value format. By default, 'ALL' physical columns of the table schema will be included in the value format which means that key columns appear in the data type for both the key and value format |
| scan.startup.mode | optional | group-offsets | String | Startup mode for Kafka consumer, valid values are 'earliest-offset', 'latest-offset', 'group-offsets', 'timestamp' and 'specific-offsets'. See the following Start Reading Position for more details. |
| scan.startup.specific-offsets | optional | (none) | String | Specify offsets for each partition in case of 'specific-offsets' startup mode, e.g. 'partition:0,offset:42;partition:1,offset:300'. |
| scan.startup.timestamp-millis | optional | (none) | Long | Start from the specified epoch timestamp (milliseconds) used in case of 'timestamp' startup mode. |
| scan.topic-partition-discovery.interval | optional | (none) | Duration | Interval for consumer to discover dynamically created Kafka topics and partitions periodically. |
| inlong.metric | optional | (none) | String | Inlong metric label, format of value is groupId&streamId&nodeId. |
| sink.ignore.changelog | optional | false | Boolean |  Importing all changelog mode data ingest into Kafka . |

## Available Metadata

The following format metadata can be exposed as read-only (VIRTUAL) columns in a table definition. It supports read metadata for format `canal-json-inlong`.

| key | Data Type | Description  | 
|-----|------------|-------------|
| value.table_name | STRING | Name of the table that contain the row  | 
| value.database_name | STRING |  Name of the database that contain the row  |
| value.op_ts| TIMESTAMP(3) | It indicates the time that the change was made in the database. If the record is read from snapshot of the table instead of the binlog, the value is always 0 |
| value.op_type| STRING | Operation type, INSERT/UPDATE/DELETE |
| value.batch_id| BIGINT | Not important, a simple increment counter |
| value.is_ddl| BOOLEAN | Source does not emit ddl data, value is false |
| value.update_before| `ARRAY<MAP<STRING, STRING>>` | The update-before data for UPDATE record |
| value.mysql_type | MAP<STRING, STRING> | MySQL field type |
| value.pk_names | `ARRAY<STRING>` | Primary key |
| value.sql_type | MAP<STRING, INT> | SQL field type |
| value.ts | TIMESTAMP_LTZ(3) | The ts_ms field is used to store the information about the local time at which the connector processed/generated the event |

The extended CREATE TABLE example demonstrates the syntax for exposing these metadata fields:

```sql
CREATE TABLE `kafka_extract_node` (
      `id` INT,
      `name` STRING,
      `database_name` string METADATA FROM 'value.database_name',
      `table_name`    string METADATA FROM 'value.table_name',
      `op_ts`         timestamp(3) METADATA FROM 'value.op_ts',
      `op_type` string METADATA FROM 'value.op_type',
      `batch_id` bigint METADATA FROM 'value.batch_id',
      `is_ddl` boolean METADATA FROM 'value.is_ddl',
      `update_before` ARRAY<MAP<STRING, STRING>> METADATA FROM 'value.update_before',
      `mysql_type` MAP<STRING, STRING> METADATA FROM 'value.mysql_type',
      `pk_names` ARRAY<STRING> METADATA FROM 'value.pk_names',
      `data` STRING METADATA FROM 'value.data',
      `sql_type` MAP<STRING, INT> METADATA FROM 'value.sql_type',
      `ingestion_ts` TIMESTAMP(3) METADATA FROM 'value.ts',
) WITH (
      'connector' = 'kafka-inlong',
      'topic' = 'user',
      'properties.bootstrap.servers' = 'localhost:9092',
      'properties.group.id' = 'testGroup',
      'scan.startup.mode' = 'earliest-offset',
      'format' = 'canal-json-inlong'
)
```

## Data Type Mapping

Kafka stores message keys and values as bytes, so Kafka doesn’t have schema or data types. The Kafka messages are deserialized and serialized by formats, e.g. csv, json, avro. Thus, the data type mapping is determined by specific formats. Please refer to [Formats](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/formats/overview/) pages for more details.
