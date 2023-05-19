---
title: TubeMQ
sidebar_position: 11
---

import {siteVariables} from '../../version';

## Overview

[Apache InLong TubeMQ](https://inlong.apache.org/docs/modules/tubemq/overview) is a distributed, open source pub-sub messaging and steaming platform for real-time workloads, trillions of massive data precipitation.

## Version

| Extract Node          | Version                                                      |
| --------------------- | ------------------------------------------------------------ |
| [TubeMQ](./tube.md) | [TubeMQ](https://inlong.apache.org/docs/next/modules/tubemq/overview): >=0.1.0<br/> |

## Dependencies  

In order to set up the `TubeMQ Extract Node`, the following provides dependency information for both projects using a
build automation tool (such as Maven or SBT) and SQL Client with Sort Connectors JAR bundles.

### Maven dependency

<pre><code parentName="pre">
{`<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-tubemq</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
`}
</code></pre>

## How to create a TubeMQ Extract Node

### Usage for SQL API

The example below shows how to create a TubeMQ Extract Node with `Flink SQL Cli` :
```sql
-- Create a TubeMQ table 'tube_extract_node' in Flink SQL Cli
Flink SQL> CREATE TABLE tube_extract_node (
     id INT,
     name STRING,
     age INT,
     salary FLOAT 
     ) WITH (
     'connector' = 'tubemq',
     'topic' = 'topicName',
     'masterRpc' = 'rpcUrl', -- 127.0.0.1:8715
     'format' = 'json',
     'groupId' = 'groupName');
  
-- Read data from tube_extract_node
Flink SQL> SELECT * FROM tube_extract_node;
```
### Usage for InLong Dashboard
TODO

### Usage for InLong Manager Client
TODO

## TubeMQ Extract Node Options

| Parameter                     | Required | Default value | Type   | Description                                                  |
| ----------------------------- | -------- | ------------- | ------ | ------------------------------------------------------------ |
| connector                     | required | tubemq        | String | Set the connector type. Available options are `tubemq`.      |
| topic                         | required | (none)        | String | Set the input or output topic                                |
| masterRpc                     | required | (none)        | String | Set the TubeMQ master service address.                       |
| format                        | required | (none)        | String | TubeMQ message value serialization format, support JSON, Avro, etc. For more information, see the [Flink format](https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/connectors/table/formats/overview/). |
| groupId                       | required | (none)        | String | Consumer group in TubeMQ                                     |