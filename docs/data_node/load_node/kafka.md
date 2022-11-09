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
| topic-pattern | optional | (none) | String | Dynamic topic extraction pattern, like '${VARIABLE_NAME}', which is only used in kafka multiple sink scenarios and is valid when 'format' is 'raw'. |
| sink.multiple.format | optional | (none) | String | Format of kafka raw data, currently only supports [canal-json&#124;debezium-json] which is only used in kafka multiple sink scenarios and is valid when 'format' is 'raw'.  |
| properties.bootstrap.servers | required | (none) | String | Comma separated list of Kafka brokers. |
| properties.* | optional | (none) | String | This can set and pass arbitrary Kafka configurations. Suffix names must match the configuration key defined in [Kafka Configuration documentation](https://kafka.apache.org/documentation/#configuration). Flink will remove the `properties.` key prefix and pass the transformed key and values to the underlying KafkaClient. For example, you can disable automatic topic creation via `properties.allow.auto.create.topics` = `false`. But there are some configurations that do not support to set, because Flink will override them, e.g. `key.deserializer` and `value.deserializer`. |
| format | required for normal Kafka | (none) | String | The format used to deserialize and serialize the value part of Kafka messages. Please refer to the formats page for more details and more [format](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/formats/overview/) options. Note: Either this option or the `value.format` option are required. |
| key.format | optional | (none) | String | The format used to deserialize and serialize the key part of Kafka messages. Please refer to the formats page for more details and more format options. Note: If a key format is defined, the 'key.fields' option is required as well. Otherwise the Kafka records will have an empty key. |
| key.fields | optional | [] | `List<String>` | Defines an explicit list of physical columns from the table schema that configure the data type for the key format. By default, this list is empty and thus a key is undefined. The list should look like 'field1;field2'. |
| key.fields-prefix | optional | (none) | String | Defines a custom prefix for all fields of the key format to avoid name clashes with fields of the value format. By default, the prefix is empty. If a custom prefix is defined, both the table schema and 'key.fields' will work with prefixed names. When constructing the data type of the key format, the prefix will be removed and the non-prefixed names will be used within the key format. Please note that this option requires that 'value.fields-include' must be set to 'EXCEPT_KEY'. |
| value.format | required for upsert Kafka | (none) | String | The [format](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/formats/overview/) used to deserialize and serialize the value part of Kafka messages. Please refer to the formats page for more details and more format options. |
| value.fields-include | optional | ALL | Enum Possible values: [ALL, EXCEPT_KEY]| Defines a strategy how to deal with key columns in the data type of the value format. By default, 'ALL' physical columns of the table schema will be included in the value format which means that key columns appear in the data type for both the key and value format |
| sink.partitioner | optional | 'default' | String | Output partitioning from Flink's partitions into Kafka's partitions. Valid values are <br/>`default`: use the kafka default partitioner to partition records. <br/>`fixed`: each Flink partition ends up in at most one Kafka partition. <br/>`round-robin`: a Flink partition is distributed to Kafka partitions sticky round-robin. <br/>raw-hash: Extract value based on 'sink.multiple.partition-pattern' to 'hash' as the final partition, which is only used in kafka multiple sink scenarios and is valid when 'format' is 'raw'. It only works when record's keys are not specified. Custom FlinkKafkaPartitioner subclass: e.g. 'org.mycompany.MyPartitioner'. See the following [Sink Partitioning](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/kafka/#sink-partitioning) for more details. |
| sink.multiple.partition-pattern | optional | (none) | String |  Dynamic partition extraction pattern, like '${VARIABLE_NAME}' which is only used in kafka multiple sink scenarios and is valid when 'format' is 'raw'. |
| sink.semantic | optional | at-least-once | String | Defines the delivery semantic for the Kafka sink. Valid enumerationns are 'at-least-once', 'exactly-once' and 'none'. See [Consistency guarantees](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/kafka/#consistency-guarantees) for more details. |
| sink.parallelism | optional | (none) | Integer | Defines the parallelism of the Kafka sink operator. By default, the parallelism is determined by the framework using the same parallelism of the upstream chained operator. |
| inlong.metric.labels | optional | (none) | String | Inlong metric label, format of value is groupId=xxgroup&streamId=xxstream&nodeId=xxnode. |

## Available Metadata

It supports write metadata for format `canal-json-inlong`.

See the [Kafka Extract Node](../extract_node/kafka.md) for a list of all available metadata fields.

## Features

### Support Dynamic Schema Writing

Dynamic schema writing supports dynamic extraction of topic and partition from data and writes to the corresponding topic
and partition. In order to support dynamic schema writing, you need to set the format of Kafka to 'raw',
Also need to set the serialization format of the upstream data (via the option 'sink.multiple.format'
to set, currently only supports [canal-json|debezium-json]).

#### Dynamic Topic Extraction

Dynamic topic extraction is by parsing the topic pattern and extracting the topic from the data.
In order to support dynamic extraction of topic, you need to set the option 'topic-pattern', Kafka Load Node will parse 'topic-pattern' as the final topic,
If parsing fails, it will be written to the default topic set via 'topic'. 'topic-pattern' supports constants and variables, constants are string constants,
variables are strictly represented by '${VARIABLE_NAME}', and the value of the variable comes from the data itself, that is, through 'sink.multiple.format'
a metadata field of a specified Format, or a physical field in the data.

Examples of 'topic-parttern' are as follows:
- 'sink.multiple.format' is 'canal-json':

The upstream data is:
```
{
  "data": [
    {
      "id": "111",
      "name": "scooter",
      "description": "Big 2-wheel scooter",
      "weight": "5.18"
    }
  ],
  "database": "inventory",
  "es": 1589373560000,
  "id": 9,
  "isDdl": false,
  "mysqlType": {
    "id": "INTEGER",
    "name": "VARCHAR(255)",
    "description": "VARCHAR(512)",
    "weight": "FLOAT"
  },
  "old": [
    {
      "weight": "5.15"
    }
  ],
  "pkNames": [
    "id"
  ],
  "sql": "",
  "sqlType": {
    "id": 4,
    "name": 12,
    "description": 12,
    "weight": 7
  },
  "table": "products",
  "ts": 1589373560798,
  "type": "UPDATE"
} 
```
'topic-pattern' is '{database}_${table}', and the extracted topic is 'inventory_products' ('database', 'table' are metadata fields)

'topic-pattern' is '{database}_${table}_${id}', and the extracted topic is 'inventory_products_111' ('database', 'table' are metadata fields, and 'id' are physical fields)

- 'sink.multiple.format' is 'debezium-json':

The upstream data is:
```
{
  "before": {
    "id": 4,
    "name": "scooter",
    "description": "Big 2-wheel scooter",
    "weight": 5.18
  },
  "after": {
    "id": 4,
    "name": "scooter",
    "description": "Big 2-wheel scooter",
    "weight": 5.15
  },
  "source": {
    "db": "inventory",
    "table": "products"
  },
  "op": "u",
  "ts_ms": 1589362330904,
  "transaction": null
}
```
'topic-pattern' is '{source.db}_${source.table}', and the extracted topic is 'inventory_products' ('source.db', 'source.table' are metadata fields)

'topic-pattern' is '{source.db}_${source.table}_${id}', and the extracted topic is 'inventory_products_4' ('source.db', 'source.table' are metadata fields, and 'id' are physical fields)

#### Dynamic Partition Extraction

Dynamic partition extraction is to extract Partition from data by parsing partition pattern, which is similar to dynamic topic extraction.
To support dynamic extraction of topics, you need to set the option 'sink.partitioner' to 'raw-hash'
and option 'sink.multiple.partition-pattern', Kafka Load Node will parse 'sink.multiple.partition-pattern'
as the partition key, hash the partition key and take the remainder of the partition size as the final partition,
If parsing fails, it will return null and execute Kafka's default partitioning strategy. 'sink.multiple.partition-pattern'
support constants, variables and primary keys. Constants are string constants. Variables are strictly represented by '${VARIABLE_NAME}', the value of the variable comes from the data itself,
that is, it can be a metadata field of a format specified by 'sink.multiple.format', or it can be a physical field in the data.
The primary key is a special constant 'PRIMARY_KEY', which extracts the primary key value of the record based on a certain format data format.

Notes: Kafka dynamic partition extraction based on 'PRIMARY_KEY' has a limitation that the primary key information needs to be specified in the data,
For example, if Format is 'canal-json', then its primary key Key is 'pkNames'. In addition, because format 'debezium-json' has no definition of primary key, here
we agree that the primary key of 'debezium-json' is also 'pkNames' and is included in 'source' like other metadata fields such as 'table' and 'db',
If partitioning by primary key is used, and the format is 'debezium-json', you need to ensure that the real data meets the above conventions.

## Data Type Mapping

Kafka stores message keys and values as bytes, so Kafka doesn’t have schema or data types. The Kafka messages are deserialized and serialized by formats, e.g. csv, json, avro. Thus, the data type mapping is determined by specific formats. Please refer to [Formats](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/formats/overview/) pages for more details.

