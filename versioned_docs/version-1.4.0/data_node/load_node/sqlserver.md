---
title: SQLServer
sidebar_position: 14
---

import {siteVariables} from '../../version';

## Overview

The `SQLServer Load Node` supports to write data into SQLServer database. This document describes how to set up the SQLServer Load
Node to run SQL queries against SQLServer database.

## Supported Version

| Load Node                | Driver | Group Id | Artifact Id | JAR |                                                                                                                                                                                                                                                                                                                                                                                       
|--------------------------|--------|----------|-------------|-----|
| [SQLServer](./sqlserver.md) | SQL Server  | com.microsoft.sqlserver | mssql-jdbc | [Download](https://mvnrepository.com/artifact/com.microsoft.sqlserver/mssql-jdbc) |

## Dependencies

In order to set up the `SQLServer Load Node`, the following provides dependency information for both projects using a
build automation tool (such as Maven or SBT) and SQL Client with Sort Connectors JAR bundles.

### Maven dependency

<pre><code parentName="pre">
{`<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-jdbc</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
`}
</code></pre>

## How to create an SQLServer Load Node

### Usage for SQL API

```sql

-- MySQL extract node
CREATE TABLE `mysql_extract_table`(
  PRIMARY KEY (`id`) NOT ENFORCED,
  `id` BIGINT,
  `name` STRING,
  `age` INT
) WITH (
  'connector' = 'mysql-cdc-inlong',
  'url' = 'jdbc:mysql://localhost:3306/read',
  'username' = 'inlong',
  'password' = 'inlong',
  'table-name' = 'user'
)

-- SQLServer load node
CREATE TABLE `sqlserver_load_table`(
  PRIMARY KEY (`id`) NOT ENFORCED,
  `id` BIGINT,
  `name` STRING,
  `age` INT
) WITH (
  'connector' = 'jdbc-inlong',
  'url' = 'jdbc:sqlserver://localhost:1433;databaseName=column_type_test',
  'username' = 'inlong',
  'password' = 'inlong',
  'table-name' = 'dbo.work1'
)

-- write data into SQLServer
INSERT INTO sqlserver_load_table 
SELECT id, name , age FROM mysql_extract_table;  

```

### Usage for InLong Dashboard

TODO: It will be supported in the future.

### Usage for InLong Manager Client

TODO: It will be supported in the future.

## SQLServer Load Node Options

| Option | Required | Default | Type | Description |
|---------|----------|---------|------|------------|
| connector | required | (none) | String | Specify what connector to use, here should be 'jdbc-inlong'. |
| url | required | (none) | String | The JDBC database url. |
| table-name | required | (none) | String | The name of JDBC table to connect. |
| driver | optional | (none) | String | The class name of the JDBC driver to use to connect to this URL, if not set, it will automatically be derived from the URL. |
| username | optional | (none) | String | The JDBC user name. 'username' and 'password' must both be specified if any of them is specified. |
| password | optional | (none) | String | The JDBC password. |
| connection.max-retry-timeout | optional | 60s | Duration | Maximum timeout between retries. The timeout should be in second granularity and shouldn't be smaller than 1 second. |
| sink.buffer-flush.max-rows | optional | 100 | Integer | The max size of buffered records before flush. Can be set to zero to disable it. |
| sink.buffer-flush.interval | optional | 1s | Duration | The flush interval mills, over this time, asynchronous threads will flush data. Can be set to '0' to disable it. Note, 'sink.buffer-flush.max-rows' can be set to '0' with the flush interval set allowing for complete async processing of buffered actions. | |
| sink.max-retries | optional | 3 | Integer | The max retry times if writing records to database failed. |
| sink.parallelism | optional | (none) | Integer | Defines the parallelism of the JDBC sink operator. By default, the parallelism is determined by the framework using the same parallelism of the upstream chained operator. |
| sink.ignore.changelog | optional | false | Boolean |  Ignore all `RowKind`, ingest them as `INSERT`. |
| inlong.metric.labels | optional | (none) | String | Inlong metric label, format of value is groupId=xxgroup&streamId=xxstream&nodeId=xxnode. |

## Data Type Mapping

| SQLServer type | Flink SQL type |
|----------------|----------------|
| char(n)       | CHAR(n)        |
| varchar(n) <br/> nvarchar(n) <br/> nchar(n) | VARCHAR(n) |
| text <br/> ntext <br/> xml | STRING |
| BIGINT <br/> BIGSERIAL | BIGINT |
| decimal(p, s) <br/> money <br/> smallmoney | DECIMAL(p, s) |
| numeric  | NUMERIC |
| float <br/> real | FLOAT |
| bit | BOOLEAN |
| int | INT |
| tinyint | TINYINT |
| smallint | SMALLINT |
| bigint | BIGINT |
| time(n) | TIME(n) |
| datetime2 <br/> datetime <br/> smalldatetime | TIMESTAMP(n) |
| datetimeoffset | TIMESTAMP_LTZ(3) |