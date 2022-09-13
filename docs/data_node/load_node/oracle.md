---
title: Oracle
sidebar_position: 12
---

import {siteVariables} from '../../version';

## Overview

The `Oracle Load Node` supports to write data into Oracle database. This document describes how to set up the Oracle Load
Node to run SQL queries against Oracle database.

## Supported Version

| Load Node                | Driver | Group Id | Artifact Id | JAR |                                                                                                                                                                                                                                                                                                                                                                                       
|--------------------------|--------|----------|-------------|-----|
| [Oracle](./oracle.md) |  Oracle | com.oracle.database.jdbc | ojdbc8 | [Download](https://mvnrepository.com/artifact/com.oracle.database.jdbc/ojdbc8) |

## Dependencies

In order to set up the `Oracle Load Node`, the following provides dependency information for both projects using a
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
Oracle license is conflict with Inlong license. So We remove Oracle driver in pom.xml. User can modify pom.xml before maven
packaging if User need use it.

## How to create an Oracle Load Node

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

-- Oracle load node
CREATE TABLE `oracle_load_table`(
  PRIMARY KEY (`id`) NOT ENFORCED,
  `id` BIGINT,
  `name` STRING,
  `age` INT
) WITH (
  'connector' = 'jdbc-inlong',
  'url' = 'jdbc:oracle:thin://host:port/database/',
  'username' = 'inlong',
  'password' = 'inlong',
  'table-name' = 'public.user'
)

-- write data into Oracle
INSERT INTO oracle_load_table 
SELECT id, name , age FROM mysql_extract_table;  

```

### Usage for InLong Dashboard

TODO: It will be supported in the future.

### Usage for InLong Manager Client

TODO: It will be supported in the future.

## Oracle Load Node Options

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
| inlong.metric | optional | (none) | String | Inlong metric label, format of value is groupId&streamId&nodeId. |

## Data Type Mapping

| Oracle type | Flink SQL type |
|-----------------|----------------|
| BINARY_FLOAT    | FLOAT        |
| BINARY_DOUBLE   | DOUBLE |
| SMALLINT <br/> FLOAT(s) <br/> DOUBLE PRECISION <br/> REAL <br/> NUMBER(p, s) | DECIMAL(p, s) |
| DATE | DATE |
| | DECIMAL(20, 0) |
| REAL <br/> FLOAT4 | FLOAT |
| FLOAT8 <br/> DOUBLE PRECISION| DOUBLE |
| NUMERIC(p, s) <br/> DECIMAL(p, s) | DECIMAL(p, s) |
| BOOLEAN | BOOLEAN |
| DATE | DATE |
| TIMESTAMP [(p)] [WITHOUT TIMEZONE | TIMESTAMP [(p)] [WITHOUT TIMEZONE] |
| CHAR(n) <br/> VARCHAR(n) <br/> CLOB(n) | STRING |
| RAW(s) <br/> BLOB | BYTES |
|  | ARRAY |