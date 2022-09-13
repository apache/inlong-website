---
title: PostgreSQL-CDC
sidebar_position: 8
---

import {siteVariables} from '../../version';

## Overview

The `PostgreSQL Extract Node` allows for reading snapshot data and incremental data from PostgreSQL database. This document describes how to set up the `PostgreSQL Extract Node` to run SQL queries against PostgreSQL databases.

## Supported Version

| Extract Node                | Version | Driver                  |
|-----------------------------|---------|-------------------------|
| [PostgreSQL-CDC](./postgresql-cdc.md) | [PostgreSQL](https://www.postgresql.org): 9.6, 10, 11, 12 | JDBC Driver: 42.2.12 |

## Dependencies

In order to set up the `PostgreSQL Extract Node`, the following provides dependency information for both projects using a
build automation tool (such as Maven or SBT) and SQL Client with Sort Connectors JAR bundles.

### Maven dependency

<pre><code parentName="pre">
{`<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-postgres-cdc</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
`}
</code></pre>
## Setup PostgreSQL server

Change Data Capture (CDC) allows you to track and propagate changes in a PostgreSQL database to downstream consumers based on its Write-Ahead Log (WAL).
You need to ensure that the upstream database is configured to support logical replication. Before using the PostgreSQL connector to monitor the changes committed on a PostgreSQL server, 
decide which logical decoding plug-in you intend to use. If you plan not to use the native `pgoutput` logical replication stream support, then you must install the logical decoding 
plug-in into the PostgreSQL server.

### pgoutput

pgoutput is the standard logical decoding output plug-in in PostgreSQL 10+. It is maintained by the PostgreSQL community, and used by PostgreSQL itself for logical replication. 
This plug-in is always present so no additional libraries need to be installed.

1. Check the `wal_level` configuration setting:

```sql
SHOW wal_level;
```
The default value is replica. For CDC, you’ll need to set it to `logical` in the database configuration file (postgresql.conf). Keep in mind that changing the wal_level requires a restart of the Postgres instance and can affect database performance.

2. To configure the replication slot regardless of the decoder being used, specify the following in the postgresql.conf file:

```properties
wal_level = logical 
```

### decoderbufs
decoderbufs is based on Protobuf and maintained by the Debezium community. [installing](https://github.com/debezium/postgres-decoderbufs) it.

1. To load the plug-in at startup, add the following to the postgresql.conf file:

```properties
shared_preload_libraries = 'decoderbufs'
```
2. To configure the replication slot regardless of the decoder being used, specify the following in the postgresql.conf file:

```properties
wal_level = logical 
```

## How to create a PostgreSQL Extract Node

### Usage for SQL API

```sql
CREATE TABLE `postgresTable`(
  `name` STRING,
  `age` INT
) WITH (
  'connector' = 'postgres-cdc-inlong',
  'hostname' = 'localhost',
  'username' = 'postgres',
  'password' = 'inlong',
  'database-name' = 'postgres',
  'schema-name' = 'public',
  'port' = '5432',
  'table-name' = 'user',
  'decoding.plugin.name' = 'pgoutput',
  'slot.name' = 'feaafacbaddadc'
)
```

### Usage for InLong Dashboard

TODO: It will be supported in the future.

### Usage for InLong Manager Client

TODO: It will be supported in the future.

## PostgreSQL Extract Node Options

| Option | Required | Default | Type | Description |
|---------|----------|---------|------|------------|
| connector | required | (none) | String | Specify what connector to use, here should be `postgres-cdc-inlong`.|
| hostname | required | (none) | String | IP address or hostname of the PostgreSQL database server. |
| username | required | (none) | String | Name of the PostgreSQL database to use when connecting to the PostgreSQL database server. |
| password | required | (none) | String | Password to use when connecting to the PostgreSQL database server. |
| database-name | required | (none) | String | Database name of the PostgreSQL server to monitor. |
| schema-name | required | (none) | String | Schema name of the PostgreSQL database to monitor. |
| table-name | required | (none) | String | Table name of the PostgreSQL database to monitor. |
| port | optional | 5432 | Integer | Integer port number of the PostgreSQL database server. |
| decoding.plugin.name | optional | decoderbufs | String | The name of the Postgres logical decoding plug-in installed on the server. Supported values are decoderbufs, wal2json, wal2json_rds, wal2json_streaming, wal2json_rds_streaming and pgoutput. |
| slot.name | optional | flink | String | The name of the PostgreSQL logical decoding slot that was created for streaming changes from a particular plug-in for a particular database/schema. The server uses this slot to stream events to the connector that you are configuring. Slot names must conform to PostgreSQL replication slot naming rules, which state: "Each replication slot has a name, which can contain lower-case letters, numbers, and the underscore character." |
| debezium.* | optional | (none) | String | Pass-through Debezium's properties to Debezium Embedded Engine which is used to capture data changes from Postgres server. For example: 'debezium.snapshot.mode' = 'never'. See more about the [Debezium's Postgres Connector properties](https://debezium.io/documentation/reference/1.5/connectors/postgresql.html#postgresql-connector-properties). |
| inlong.metric | optional | (none) | String | Inlong metric label, format of value is groupId&streamId&nodeId. |

**Note**: `slot.name` is recommended to set for different tables to avoid the potential PSQLException: ERROR: replication slot "flink" is active for PID 974 error.  
**Note**: PSQLException: ERROR: all replication slots are in use Hint: Free one or increase max_replication_slots. We can delete slot by the following statement.
```sql
SELECT*FROM pg_replication_slots;
-- get slot name is flink. delete it
SELECT pg_drop_replication_slot('flink');
```

## Available Metadata

The following format metadata can be exposed as read-only (VIRTUAL) columns in a table definition.

| key | Data Type | Description  | 
|-----|------------|-------------|
| table_name | STRING NOT NULL | Name of the table that contain the row. |
| schema_name | STRING NOT NULL | Name of the schema that contain the row. |
| database_name | STRING NOT NULL | Name of the database that contain the row. |
| op_ts | TIMESTAMP_LTZ(3) NOT NULL | It indicates the time that the change was made in the database. If the record is read from snapshot of the table instead of the change stream, the value is always 0. |

The extended CREATE TABLE example demonstrates the syntax for exposing these metadata fields:

```sql
CREATE TABLE postgresTable (
    db_name STRING METADATA FROM 'database_name' VIRTUAL,
    table_name STRING METADATA  FROM 'table_name' VIRTUAL,
    operation_ts TIMESTAMP_LTZ(3) METADATA FROM 'op_ts' VIRTUAL,
    `name` STRING,
    `age` INT
) WITH (
     'connector' = 'postgres-cdc-inlong',
     'hostname' = 'localhost',
     'username' = 'postgres',
     'password' = 'inlong',
     'database-name' = 'postgres',
     'schema-name' = 'public',
     'port' = '5432',
     'table-name' = 'user',
     'decoding.plugin.name' = 'pgoutput',
     'slot.name' = 'feaafacbaddadc'
);
```

## Data Type Mapping

| PostgreSQL type | Flink SQL type |
|-----------------|----------------|
|                 | TINYINT        |
| SMALLINT <br/> INT2 <br/> SMALLSERIAL <br/> SERIAL2 | SMALLINT |
| INTEGER <br/> SERIAL | INT |
| BIGINT <br/> BIGSERIAL | BIGINT |
| | DECIMAL(20, 0) |
| REAL <br/> FLOAT4 | FLOAT |
| FLOAT8 <br/> DOUBLE PRECISION| DOUBLE |
| NUMERIC(p, s) <br/> DECIMAL(p, s) | DECIMAL(p, s) |
| BOOLEAN | BOOLEAN |
| DATE | DATE |
| TIME [(p)] [WITHOUT TIMEZONE] | TIME [(p)] [WITHOUT TIMEZONE] |
| TIMESTAMP [(p)] [WITHOUT TIMEZONE | TIMESTAMP [(p)] [WITHOUT TIMEZONE] |
| CHAR(n) <br/> CHARACTER(n) <br/> VARCHAR(n) <br/> CHARACTER VARYING(n) <br/> TEXT | STRING |
| BYTEA | BYTES |
