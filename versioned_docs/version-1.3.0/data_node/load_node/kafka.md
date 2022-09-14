---
title: Kafka
sidebar_position: 10
---

import {siteVariables} from '../../version';

## Overview

The `Kafka Load Node` supports to write data into Kafka topics. It can support to write data in the normal fashion and write data in the
upsert fashion. The `upsert-kafka` connector can consume a changelog stream. It will write INSERT/UPDATE_AFTER data as 
normal Kafka messages value, and write DELETE data as Kafka messages with null values (indicate tombstone for the key).

## Supported Version

| Load Node                | Kafka version |                                                                                                                                                                                                                                                                                                                                                                                           
|--------------------------|---------------|
| [Kafka](./kafka.md)      | 0.10+         |  

## Dependencies

In order to set up the `Kafka Load Node`, the following provides dependency information for both projects using a
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

## How to create a Kafka Load Node

### Usage for SQL API

The example below shows how to create a Kafka Load Node with `Flink SQL` :
* connector is `kafka-inlong`
```sql
-- Create a Kafka table 'kafka_load_node' in Flink SQL
Flink SQL> CREATE TABLE kafka_load_node (
           `id` INT,
           `name` STRINTG
           ) WITH (
           'connector' = 'kafka-inlong',
           'topic' = 'user',
           'properties.bootstrap.servers' = 'localhost:9092',
           'properties.group.id' = 'testGroup',
           'format' = 'csv'
           )
```
* connector is `upsert-kafka`
```sql
-- Create a Kafka table 'kafka_load_node' in Flink SQL
Flink SQL> CREATE TABLE kafka_load_node (
          `id` INT,
          `name` STRINTG,
           PRIMARY KEY (`id`) NOT ENFORCED
          ) WITH (
          'connector' = 'upsert-kafka-inlong',
          'topic' = 'user',
          'properties.bootstrap.servers' = 'localhost:9092',
          'key.format' = 'csv',
          'value.format' = 'csv'
          )   
```
### Usage for InLong Dashboard

When creating a data flow, select `Kafka` for the data stream direction, and click "Add" to configure it.

![Kafka Configuration](img/kafka.png)

### Usage for InLong Manager Client

TODO: It will be supported in the future.

## Kafka Load Node Options

| Option | Required | Default | Type | Description |
|---------|----------|---------|------|------------|
| connector | required | (none) | String | Specify which connector to use, valid values are:  1. for the Upsert Kafka use: `upsert-kafka-inlong`  2. for normal Kafka use: `kafka-inlong` |
| topic | required | (none) | String | Topic name(s) to read data from when the table is used as source. It also supports  topic list for source by separating topic by semicolon like `topic-1;topic-2`. Note, only one of `topic-pattern` and `topic` can be specified for sources. |
| properties.bootstrap.servers | required | (none) | String | Comma separated list of Kafka brokers. |
| properties.* | optional | (none) | String | This can set and pass arbitrary Kafka configurations. Suffix names must match the configuration key defined in [Kafka Configuration documentation](https://kafka.apache.org/documentation/#configuration). Flink will remove the `properties.` key prefix and pass the transformed key and values to the underlying KafkaClient. For example, you can disable automatic topic creation via `properties.allow.auto.create.topics` = `false`. But there are some configurations that do not support to set, because Flink will override them, e.g. `key.deserializer` and `value.deserializer`. |
| format | required for normal Kafka | (none) | String | The format used to deserialize and serialize the value part of Kafka messages. Please refer to the formats page for more details and more [format](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/formats/overview/) options. Note: Either this option or the `value.format` option are required. |
| key.format | optional | (none) | String | The format used to deserialize and serialize the key part of Kafka messages. Please refer to the formats page for more details and more format options. Note: If a key format is defined, the 'key.fields' option is required as well. Otherwise the Kafka records will have an empty key. |
| key.fields | optional | [] | `List<String>` | Defines an explicit list of physical columns from the table schema that configure the data type for the key format. By default, this list is empty and thus a key is undefined. The list should look like 'field1;field2'. |
| key.fields-prefix | optional | (none) | String | Defines a custom prefix for all fields of the key format to avoid name clashes with fields of the value format. By default, the prefix is empty. If a custom prefix is defined, both the table schema and 'key.fields' will work with prefixed names. When constructing the data type of the key format, the prefix will be removed and the non-prefixed names will be used within the key format. Please note that this option requires that 'value.fields-include' must be set to 'EXCEPT_KEY'. |
| value.format | required for upsert Kafka | (none) | String | The [format](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/formats/overview/) used to deserialize and serialize the value part of Kafka messages. Please refer to the formats page for more details and more format options. |
| value.fields-include | optional | ALL | Enum Possible values: [ALL, EXCEPT_KEY]| Defines a strategy how to deal with key columns in the data type of the value format. By default, 'ALL' physical columns of the table schema will be included in the value format which means that key columns appear in the data type for both the key and value format |
| sink.partitioner | optional | 'default' | String | Output partitioning from Flink's partitions into Kafka's partitions. Valid values are <br/>`default`: use the kafka default partitioner to partition records. <br/>`fixed`: each Flink partition ends up in at most one Kafka partition. <br/>`round-robin`: a Flink partition is distributed to Kafka partitions sticky round-robin. It only works when record's keys are not specified. Custom FlinkKafkaPartitioner subclass: e.g. 'org.mycompany.MyPartitioner'. See the following [Sink Partitioning](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/kafka/#sink-partitioning) for more details. |
| sink.semantic | optional | at-least-once | String | Defines the delivery semantic for the Kafka sink. Valid enumerationns are 'at-least-once', 'exactly-once' and 'none'. See [Consistency guarantees](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/kafka/#consistency-guarantees) for more details. |
| sink.parallelism | optional | (none) | Integer | Defines the parallelism of the Kafka sink operator. By default, the parallelism is determined by the framework using the same parallelism of the upstream chained operator. |
| inlong.metric | optional | (none) | String | Inlong metric label, format of value is groupId&streamId&nodeId. |

## Available Metadata

It supports write metadata for format `canal-json-inlong`.

See the [Kafka Extract Node](../extract_node/kafka.md) for a list of all available metadata fields.

## Data Type Mapping

Kafka stores message keys and values as bytes, so Kafka doesn’t have schema or data types. The Kafka messages are deserialized and serialized by formats, e.g. csv, json, avro. Thus, the data type mapping is determined by specific formats. Please refer to [Formats](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/formats/overview/) pages for more details.

