---
title: MongoDB-CDC
sidebar_position: 5
---

import {siteVariables} from '../../version';

## Overview

The MongoDB CDC connector allows for reading snapshot data and incremental data from MongoDB. This document describes how to setup the MongoDB CDC connector to run SQL queries against MongoDB.

## Supported Version
| Extract Node                    | Version                                      |
| ------------------------------- | -------------------------------------------- |
| [MongoDB-CDC](./mongodb-cdc.md) | [MongoDB](https://www.mongodb.com/): &gt;= 3.6 |

## Dependencies

In order to setup the MongoDB CDC connector, the following table provides dependency information for both projects using a build automation tool (such as Maven or SBT) and SQL Client with SQL JAR bundles.

### Maven dependency

<pre><code parentName="pre">
{`<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-mongodb-cdc</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
`}
</code></pre>

## Setup MongoDB

### Availability

- MongoDB version

  MongoDB version &gt;= 3.6
  We use [change streams](https://docs.mongodb.com/manual/changeStreams/) feature (new in version 3.6) to capture change data.

- Cluster Deployment

  [replica sets](https://docs.mongodb.com/manual/replication/) or [sharded clusters](https://docs.mongodb.com/manual/sharding/) is required.

- Storage Engine

  [WiredTiger](https://docs.mongodb.com/manual/core/wiredtiger/#std-label-storage-wiredtiger) storage engine is required.

- [Replica set protocol version](https://docs.mongodb.com/manual/reference/replica-configuration/#mongodb-rsconf-rsconf.protocolVersion)

  Replica set protocol version 1 [(pv1)](https://docs.mongodb.com/manual/reference/replica-configuration/#mongodb-rsconf-rsconf.protocolVersion) is required.
  Starting in version 4.0, MongoDB only supports pv1. pv1 is the default for all new replica sets created with MongoDB 3.2 or later.

- Privileges

  `changeStream` and `read` privileges are required by MongoDB Kafka Connector.

  You can use the following example for simple authorization.
  For more detailed authorization, please refer to [MongoDB Database User Roles](https://docs.mongodb.com/manual/reference/built-in-roles/#database-user-roles).

  ```shell
  use admin;
  db.createUser({
    user: "flinkuser",
    pwd: "flinkpw",
    roles: [
      { role: "read", db: "admin" }, // read role includes changeStream privilege 
      { role: "readAnyDatabase", db: "admin" } // for snapshot reading
    ]
  });
  ```

## How to create a MongoDB Extract Node

### Usage for SQL API

The example below shows how to create an MongoDB Extract Node with `Flink SQL` :

```sql
-- Set checkpoint every 3000 milliseconds                       
Flink SQL> SET 'execution.checkpointing.interval' = '3s';   

-- Create a MySQL table 'mongodb_extract_node' in Flink SQL
Flink SQL> CREATE TABLE mongodb_extract_node (
  _id STRING, // must be declared
  name STRING,
  weight DECIMAL(10,3),
  tags ARRAY<STRING>, -- array
  price ROW<amount DECIMAL(10,2), currency STRING>, -- embedded document
  suppliers ARRAY<ROW<name STRING, address STRING>>, -- embedded documents
  PRIMARY KEY(_id) NOT ENFORCED
) WITH (
  'connector' = 'mongodb-cdc-inlong',
  'hosts' = 'localhost:27017,localhost:27018,localhost:27019',
  'username' = 'flinkuser',
  'password' = 'flinkpw',
  'database' = 'inventory',
  'collection' = 'mongodb_extract_node'
);

-- Read snapshot and binlogs from mongodb_extract_node
Flink SQL> SELECT * FROM mongodb_extract_node;
```

**Note**

MongoDB’s change event record doesn’t have update before message. So, we can only convert it to Flink’s UPSERT changelog stream. An upsert stream requires a unique key, so we must declare `_id` as primary key. We can’t declare other column as primary key, becauce delete operation do not contain’s the key and value besides `_id` and `sharding key`. 

### Usage for InLong Dashboard

TODO: It will be supported in the future.

### Usage for InLong Manager Client

TODO: It will be supported in the future.

## MongoDB Extract Node Options

| **Option**                | **Required** | **Default**      | **Type** | **Description**                                              |
| ------------------------- | ------------ | ---------------- | -------- | ------------------------------------------------------------ |
| connector                 | required     | (none)           | String   | Specify what connector to use, here should be `mongodb-cdc-inlong`. |
| hosts                     | required     | (none)           | String   | The comma-separated list of hostname and port pairs of the MongoDB servers. eg. `localhost:27017,localhost:27018` |
| username                  | optional     | (none)           | String   | Name of the database user to be used when connecting to MongoDB. This is required only when MongoDB is configured to use authentication. |
| password                  | optional     | (none)           | String   | Password to be used when connecting to MongoDB. This is required only when MongoDB is configured to use authentication. |
| database                  | required     | (none)           | String   | Name of the database to watch for changes.                   |
| collection                | required     | (none)           | String   | Name of the collection in the database to watch for changes. |
| connection.options        | optional     | (none)           | String   | The ampersand-separated [connection options](https://docs.mongodb.com/manual/reference/connection-string/#std-label-connections-connection-options) of MongoDB. eg. `replicaSet=test&connectTimeoutMS=300000` |
| errors.tolerance          | optional     | none             | String   | Whether to continue processing messages if an error is encountered. Accept `none` or `all`. When set to `none`, the connector reports an error and blocks further processing of the rest of the records when it encounters an error. When set to `all`, the connector silently ignores any bad messages. |
| errors.log.enable         | optional     | true             | Boolean  | Whether details of failed operations should be written to the log file. |
| copy.existing             | optional     | true             | Boolean  | Whether copy existing data from source collections.          |
| copy.existing.pipeline    | optional     | (none)           | String   | An array of JSON objects describing the pipeline operations to run when copying existing data. This can improve the use of indexes by the copying manager and make copying more efficient. eg. `[{"$match": {"closed": "false"}}]` ensures that only documents in which the closed field is set to false are copied. |
| copy.existing.max.threads | optional     | Processors Count | Integer  | The number of threads to use when performing the data copy.  |
| copy.existing.queue.size  | optional     | 16000            | Integer  | The max size of the queue to use when copying data.          |
| poll.max.batch.size       | optional     | 1000             | Integer  | Maximum number of change stream documents to include in a single batch when polling for new data. |
| poll.await.time.ms        | optional     | 1500             | Integer  | The amount of time to wait before checking for new results on the change stream. |
| heartbeat.interval.ms     | optional     | 0                | Integer  | The length of time in milliseconds between sending heartbeat messages. Use 0 to disa |
| inlong.metric.labels | optional | (none) | String | Inlong metric label, format of value is groupId=xxgroup&streamId=xxstream&nodeId=xxnode. |
## Available Metadata

The following format metadata can be exposed as read-only (VIRTUAL) columns in a table definition.

| Key             | DataType                  | Description                                                  |
| --------------- | ------------------------- | ------------------------------------------------------------ |
| database_name   | STRING NOT NULL           | Name of the database that contain the row.                   |
| collection_name | STRING NOT NULL           | Name of the collection that contain the row.                 |
| op_ts           | TIMESTAMP_LTZ(3) NOT NULL | It indicates the time that the change was made in the database. If the record is read from snapshot of the table instead of the change stream, the value is always 0. |


The extended CREATE TABLE example demonstrates the syntax for exposing these metadata fields:
```sql
CREATE TABLE `mysql_extract_node` (
    db_name STRING METADATA FROM 'database_name' VIRTUAL,
    collection_name STRING METADATA  FROM 'collection_name' VIRTUAL,
    operation_ts TIMESTAMP_LTZ(3) METADATA FROM 'op_ts' VIRTUAL,
    _id STRING, // must be declared
    name STRING,
    weight DECIMAL(10,3),
    tags ARRAY<STRING>, -- array
    price ROW<amount DECIMAL(10,2), currency STRING>, -- embedded document
    suppliers ARRAY<ROW<name STRING, address STRING>>, -- embedded documents
    PRIMARY KEY(_id) NOT ENFORCED
) WITH (
      'connector' = 'mongodb-cdc-inlong', 
      'hostname' = 'YourHostname',
      'username' = 'YourUsername',
      'password' = 'YourPassword',
      'database' = 'YourDatabase',
      'collection' = 'YourTable' 
);
```

## Data Type Mapping

| BSON type                                                    | Flink SQL type                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              | TINYINT                                                      |
|                                                              | SMALLINT                                                     |
| Int                                                          | INT                                                          |
| Long                                                         | BIGINT                                                       |
|                                                              | FLOAT                                                        |
| Double                                                       | DOUBLE                                                       |
| Decimal128                                                   | DECIMAL(p, s)                                                |
| Boolean                                                      | BOOLEAN                                                      |
| Date Timestamp                                               | DATE                                                         |
| Date Timestamp                                               | TIME                                                         |
| Date                                                         | TIMESTAMP(3) TIMESTAMP_LTZ(3)                                |
| Timestamp                                                    | TIMESTAMP(0) TIMESTAMP_LTZ(0)                                |
| String ObjectId UUID Symbol MD5 JavaScript Regex             | STRING                                                       |
| BinData                                                      | BYTES                                                        |
| Object                                                       | ROW                                                          |
| Array                                                        | ARRAY                                                        |
| DBPointer                                                    | ROW\<\$ref STRING, \$id STRING\>                               |
| [GeoJSON](https://docs.mongodb.com/manual/reference/geojson/) | Point : ROW\<type STRING, coordinates ARRAY\<DOUBLE\>\> Line : ROW\<type STRING, coordinates ARRAY\<ARRAY\< DOUBLE\>\>\> ... |





