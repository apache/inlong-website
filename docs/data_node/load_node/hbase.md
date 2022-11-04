---
title: HBase
sidebar_position: 6
---

import {siteVariables} from '../../version';

## Overview

The `HBase Load Node` supports to write data into HBase database.

## Supported Version

| Load Node                | HBase version |                                                                                                                                                                                                                                                                                                                                                                                           
|-----------------------------|---------------|
| [HBase](./hbase.md)         | 2.2.x     |  

## Dependencies

In order to set up the `HBase Load Node`, the following provides dependency information for both projects using a
build automation tool (such as Maven or SBT) and SQL Client with Sort Connectors JAR bundles.

### Maven dependency

<pre><code parentName="pre">
{`<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-hbase</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
`}
</code></pre>
## How to create a HBase Load Node

### Usage for SQL API

All the column families in HBase table must be declared as ROW type, the field name maps to the column family name, and 
the nested field names map to the column qualifier names. There is no need to declare all the families and qualifiers in 
the schema, users can declare what’s used in the query. Except the ROW type fields, the single atomic type field 
(e.g. STRING, BIGINT)will be recognized as HBase rowkey. The rowkey field can be arbitrary name, but should be quoted 
using backticks if it is a reserved keyword.

The example below shows how to create a HBase Load Node with `Flink SQL` :

```sql
-- Create a HBase table 'hbase_load_node' in Flink SQL
CREATE TABLE hbase_load_node (
    rowkey STRING,
    family1 ROW<q1 INT>,
    family2 ROW<q2 STRING, q3 BIGINT>,
    family3 ROW<q4 DOUBLE, q5 BOOLEAN, q6 STRING>,
    PRIMARY KEY (rowkey) NOT ENFORCED
) WITH (
      'connector' = 'hbase-2.2-inlong',
      'table-name' = 'mytable',
      'zookeeper.quorum' = 'localhost:2181'
);

-- use ROW(...) construction function construct column families and write data into the HBase table.
-- assuming the schema of "T" is [rowkey, f1q1, f2q2, f2q3, f3q4, f3q5, f3q6]
INSERT INTO hTable
SELECT rowkey, ROW(f1q1), ROW(f2q2, f2q3), ROW(f3q4, f3q5, f3q6) FROM T;

-- scan data from the HBase table
SELECT rowkey, family1, family3.q4, family3.q6 FROM hTable;

-- temporal join the HBase table as a dimension table
SELECT * FROM myTopic
LEFT JOIN hTable FOR SYSTEM_TIME AS OF myTopic.proctime
ON myTopic.key = hTable.rowkey;
```

### Usage for InLong Dashboard

TODO: It will be supported in the future.

### Usage for InLong Manager Client

TODO: It will be supported in the future.

## HBase Load Node Options

| Option | Required | Default | Type | Description |
|---------|----------|---------|------|------------|
| connector | required | (none) | String | Specify what connector to use, valid values are: hbase-2.2-inlong: connect to HBase 2.2.x cluster |
| table-name | required | (none) | String | The name of HBase table to connect. |
| zookeeper.quorum | required | (none) | String | The HBase Zookeeper quorum. |
| zookeeper.znode.parent | optional | /hbase | String | The root dir in Zookeeper for HBase cluster. |
| null-string-literal | optional | null | String | Representation for null values for string fields. HBase source and sink encodes/decodes empty bytes as null values for all types except string type. |
| sink.buffer-flush.max-size | optional | 2mb | MemorySize | Writing option, maximum size in memory of buffered rows for each writing request. This can improve performance for writing data to HBase database, but may increase the latency. Can be set to '0' to disable it. |
| sink.buffer-flush.max-rows | optional | 1000 | Integer | Writing option, maximum number of rows to buffer for each writing request. This can improve performance for writing data to HBase database, but may increase the latency. Can be set to '0' to disable it. |
| sink.buffer-flush.interval | optional | 1s | Duration | Writing option, the interval to flush any buffered rows. This can improve performance for writing data to HBase database, but may increase the latency. Can be set to '0' to disable it. Note, both 'sink.buffer-flush.max-size' and 'sink.buffer-flush.max-rows' can be set to '0' with the flush interval set allowing for complete async processing of buffered actions. |
| sink.parallelism | optional | (none) | Integer | Defines the parallelism of the HBase sink operator. By default, the parallelism is determined by the framework using the same parallelism of the upstream chained operator. |
| lookup.async | optional | false | Boolean | Whether async lookup are enabled. If true, the lookup will be async. Note, async only supports hbase-2.2 connector. |
| lookup.cache.max-rows | optional | (none) | Integer | The max number of rows of lookup cache, over this value, the oldest rows will be expired. Note, "lookup.cache.max-rows" and "lookup.cache.ttl" options must all be specified if any of them is specified. Lookup cache is disabled by default. |
| lookup.cache.ttl | optional | (none) | Duration | The max time to live for each rows in lookup cache, over this time, the oldest rows will be expired. Note, "cache.max-rows" and "cache.ttl" options must all be specified if any of them is specified.Lookup cache is disabled by default. |
| lookup.max-retries | optional | 3 | Integer | The max retry times if lookup database failed. |
| properties.* | optional | (none) | String | This can set and pass arbitrary HBase configurations. Suffix names must match the configuration key defined in [HBase Configuration documentation](https://hbase.apache.org/2.3/book.html#hbase_default_configurations). Flink will remove the "properties." key prefix and pass the transformed key and values to the underlying HBaseClient. For example, you can add a kerberos authentication parameter 'properties.hbase.security.authentication' = 'kerberos'. |
| inlong.metric.labels | optional | (none) | String | Inlong metric label, format of value is groupId=xxgroup&streamId=xxstream&nodeId=xxnode. |

## Data Type Mapping

HBase stores all data as byte arrays. The data needs to be serialized and deserialized during read and write operation.

When serializing and de-serializing, Flink HBase connector uses utility class org.apache.hadoop.hbase.util.Bytes provided by HBase (Hadoop) to convert Flink Data Types to and from byte arrays.

Flink HBase connector encodes null values to empty bytes, and decode empty bytes to null values for all data types except string type. For string type, the null literal is determined by null-string-literal option.

The data type mappings are as follows:

| Flink SQL type | HBase conversion |
|-----------------|-----------------|
| CHAR <br/> VARCHAR <br/> STRING | byte[] toBytes(String s) <br/> String toString(byte[] b) |
| BOOLEAN | byte[] toBytes(boolean b) <br/> boolean toBoolean(byte[] b) |
| BINARY <br/> VARBINARY | Returns byte[] as is. |
| DECIMAL | byte[] toBytes(BigDecimal v) <br/> BigDecimal toBigDecimal(byte[] b) |
| TINYINT | new byte[] { val } <br/> bytes[0] // returns first and only byte from bytes |
| SMALLINT | byte[] toBytes(short val) <br/> short toShort(byte[] bytes) |
| INT | byte[] toBytes(int val) <br/> int toInt(byte[] bytes) |
| BIGINT | byte[] toBytes(long val) <br/> long toLong(byte[] bytes) |
| FLOAT | byte[] toBytes(float val) <br/> float toFloat(byte[] bytes) |
| DOUBLE | byte[] toBytes(double val) <br/> double toDouble(byte[] bytes) |
| DATE | Stores the number of days since epoch as int value. |
| TIME | Stores the number of milliseconds of the day as int value. |
| TIMESTAMP | Stores the milliseconds since epoch as long value. |
| ARRAY | Not supported |
| MAP <br/> MULTISET | Not supported |
| ROW | Not supported |