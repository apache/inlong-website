---
title: Pulsar
sidebar_position: 9
---

import {siteVariables} from '../../version';

## Overview

[Apache Pulsar](https://pulsar.apache.org/) is a distributed, open source pub-sub messaging and steaming platform for real-time workloads, managing hundreds of billions of events per day.

## Version

| Extract Node          | Version                                                      |
| --------------------- | ------------------------------------------------------------ |
| [Pulsar](./pulsar.md) | [Pulsar](https://pulsar.apache.org/docs/next/): >= 2.8.x<br/> |

## Dependencies

<pre><code parentName="pre">
{`<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-pulsar</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
`}
</code></pre>

## Usage

### Usage for SQL API

Step.1 Ready for sql client

The [SQL Client](https://ci.apache.org/projects/flink/flink-docs-release-1.12/dev/table/sqlClient.html) is used to write SQL queries for manipulating data in Pulsar, you can use the `-addclasspath` option to add `sort-connector-pulsar-{{INLONG_VERSION}}.jar` package.

**Example**

```shell
./bin/sql-client.sh embedded --jar sort-connector-pulsar_{{INLONG_VERSION}}.jar
```

> Note
> If you put the JAR package of our connector under `$FLINK_HOME/lib`, do not use `--jar` again to specify the package of the connector.

Step.2 Read data from pulsar

```sql
CREATE TABLE pulsar (
  `physical_1` STRING,
  `physical_2` INT,
  `eventTime` TIMESTAMP(3) METADATA,
  `properties` MAP<STRING, STRING> METADATA ,
  `topic` STRING METADATA VIRTUAL,
  `sequenceId` BIGINT METADATA VIRTUAL,
  `key` STRING ,
  `physical_3` BOOLEAN
) WITH (
  'connector' = 'pulsar-inlong',
  'topic' = 'persistent://public/default/topic82547611',
  'key.format' = 'raw',
  'key.fields' = 'key',
  'value.format' = 'avro',
  'service-url' = 'pulsar://localhost:6650',
  'admin-url' = 'http://localhost:8080',
  'scan.startup.mode' = 'earliest' 
)

INSERT INTO `sink_table` 
    SELECT 
    `physical_1` AS `physical_1`,
    `physical_2` AS `physical_2`
    FROM `pulsar`
INSERT INTO pulsar 
VALUES
 ('data 1', 1, TIMESTAMP '2020-03-08 13:12:11.123', MAP['k11', 'v11', 'k12', 'v12'], 'key1', TRUE),
 ('data 2', 2, TIMESTAMP '2020-03-09 13:12:11.123', MAP['k21', 'v21', 'k22', 'v22'], 'key2', FALSE),
 ('data 3', 3, TIMESTAMP '2020-03-10 13:12:11.123', MAP['k31', 'v31', 'k32', 'v32'], 'key3', TRUE)
```

### Usage for InLong Dashboard

TODO

### Usage for InLong Manager Client

TODO

## Pulsar Extract Node Options

| Parameter                     | Required | Default value | Type   | Description                                                  |
| ----------------------------- | -------- | ------------- | ------ | ------------------------------------------------------------ |
| connector                     | required | (none)        | String | Set the connector type. Available options are `pulsar-inlong`. |
| topic                         | optional | (none)        | String | Set the input or output topic, use half comma for multiple and concatenate topics. Choose one with the topic-pattern. |
| topic-pattern                 | optional | (none)        | String | Use regular to get the matching topic.                       |
| service-url                   | required | (none)        | String | Set the Pulsar broker service address.                       |
| admin-url                     | optional | (none)        | String | Set the Pulsar administration service address.**When this parameter is not passed in, the `startup mode` only supports `earliest` and `latest`, and the offset in the pulsar cluster cannot be updated.**               |
| scan.startup.mode             | optional | latest        | String | Configure the Source's startup mode. Available options are `earliest`, `latest`, `external-subscription`, and `specific-offsets`. |
| scan.startup.specific-offsets | optional | (none)        | String | This parameter is required when the `specific-offsets` parameter is specified. |
| scan.startup.sub-name         | optional | (none)        | String | This parameter is required when the `external-subscription` parameter is specified. |
| discovery topic interval      | optional | (none)        | Long   | Set the time interval for partition discovery, in unit of milliseconds. |
| sink.message-router           | optional | key-hash      | String | Set the routing method for writing messages to the Pulsar partition. Available options are `key-hash`, `round-robin`, and `custom MessageRouter`. |
| sink.semantic                 | optional | at-least-once | String | The Sink writes the assurance level of the message. Available options are `at-least-once`, `exactly-once`, and `none`. |
| properties                    | optional | empty         | Map    | Set Pulsar's optional configurations, in a format of `properties.key='value'`. For details, see [Configuration parameters](https://github.com/streamnative/pulsar-flink#configuration-parameters). |
| key.format                    | optional | (none)        | String | Set the key-based serialization format for Pulsar messages. Available options are `No format`, `optional raw`, `Avro`, `JSON`, etc. |
| key.fields                    | optional | (none)        | String | The SQL definition field to be used when serializing Key, multiple by half comma `,` concatenated. |
| key.fields-prefix             | optional | (none)        | String | Define a custom prefix for all fields in the key format to avoid name conflicts with fields in the value format. By default, the prefix is empty. If a custom prefix is defined, the Table schema and `key.fields` are used. |
| format or value.format        | required | (none)        | String | Set the name with a prefix. When constructing data types in the key format, the prefix is removed and non-prefixed names are used within the key format. Pulsar message value serialization format, support JSON, Avro, etc. For more information, see the Flink format. |
| value.fields-include          | optional | ALL           | Enum   | The Pulsar message value contains the field policy, optionally ALL, and EXCEPT_KEY. |
| inlong.metric | optional | (none) | String | Inlong metric label, format of value is groupId&streamId&nodeId. |

## Available Metadata

The METADATA flag is used to read and write metadata in Pulsar messages. The support list is as follows.

> Note
> The R/W column defines whether a metadata field is readable (R) and/or writable (W). Read-only columns must be declared VIRTUAL to exclude them during an INSERT INTO operation.

| Key         | Data Type                                  | Description                                   | R/W  |
| ----------- | ------------------------------------------ | --------------------------------------------- | ---- |
| topic       | STRING NOT NULL                            | Topic name of the Pulsar message.             | R    |
| messageId   | BYTES NOT NULL                             | Message ID of the Pulsar message.             | R    |
| sequenceId  | BIGINT NOT NULL                            | sequence ID of the Pulsar message.            | R    |
| publishTime | TIMESTAMP(3) WITH LOCAL TIME ZONE NOT NULL | Publishing time of the Pulsar message.        | R    |
| eventTime   | TIMESTAMP(3) WITH LOCAL TIME ZONE NOT NULL | Generation time of the Pulsar message.        | R/W  |
| properties  | MAP<STRING, STRING> NOT NULL               | Extensions information of the Pulsar message. | R/W  |

##  Data Type Mapping

Pulsar stores message keys and values as bytes, so Pulsar doesn’t have schema or data types. The Pulsar messages are deserialized and serialized by formats, e.g. csv, json, avro. Thus, the data type mapping is determined by specific formats. Please refer to [Formats](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/formats/overview/) pages for more details.