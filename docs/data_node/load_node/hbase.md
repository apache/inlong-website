---
title: HBase
sidebar_position: 10
---
## Overview

The HBase load node support write data to HBase.

## Load node params

|  Option | Required  |  Default |  Type | Description  |
|---|---|---|---|---|
|id|required|(none)|String|Identifier for node|
|name|optional|(none)|String|Node name|
|fields|required|(none)|`List<FieldInfo>`|Table fields|
|fieldRelations|required|(none)|`List<FieldRelation>`|Defines the relation between fields from input to output field|
|properties|optional|(none)|Map<String, String>|This can set other properties for connector params|
|  tableName | required  | (none)  | String  |  The name of HBase table to connect|
|  namespace | required  | (none)  |String   | The name of HBase namespace to connect  |
| zookeeperQuorum  | required  |  String |   | The HBase Zookeeper quorum  |
| rowKey  | required  |   | String  | The rule of HBase table rowkey, for example: MD5(\`name\`)  |
| sinkBufferFlushMaxSize  |optional   |2mb   | String  |  Writing option, maximum size in memory of buffered rows for each writing request. This can improve performance for writing data to HBase database, but may increase the latency. Can be set to '0' to disable it. |
| zookeeperZnodeParent  | optional  | /hbase  | String  |The root dir in Zookeeper for HBase cluster   |
| sinkBufferFlushMaxRows  | optional  |  1000 |  String |  Writing option, maximum number of rows to buffer for each writing request. This can improve performance for writing data to HBase database, but may increase the latency. Can be set to '0' to disable it. |
| sinkBufferFlushInterval  |  optional |  1s | String  |  Writing option, the interval to flush any buffered rows. This can improve performance for writing data to HBase database, but may increase the latency. Can be set to '0' to disable it. Note, both 'sink.buffer-flush.max-size' and 'sink.buffer-flush.max-rows' can be set to '0' with the flush interval set allowing for complete async processing of buffered actions. |

## Dependency

We can find HBase connector dependency `sort-connector-hbase-1.2.0-incubating-SNAPSHOT.jar` after Inlong maven packaging.

## How to use in Flink SQL

```sql
CREATE TABLE `hbaseTable`(
  rowkey STRING,
  cf Row<age BIGINT,name STRING>,
  PRIMARY KEY (rowkey) NOT ENFORCED
) WITH (
  'connector' = 'hbase-2.2',
  'table-name' = 'default:hbaseTable',
  'zookeeper.quorum' = 'localhost:2181'
)
```