---
title: Postgres
sidebar_position: 4
---
## Overview

The Postgres extract node support read data from Postgres.

## Extract node params

|  Option | Required  |  Default |  Type | Description  |
|---|---|---|---|---|
|id|required|(none)|String|Identifier for node|
|name|optional|(none)|String|Node name|
|fields|required|(none)|`List<FieldInfo>`|Table fields|
|watermarkField|optional|(none)|WatermarkField|Defines the field for generating watermarks|
|properties|optional|(none)|Map<String, String>|This can set other properties for connector params|
|primaryKey|optional|(none)|String|primary key|
|tableNames|required|(none)|`List<String>`|Table name of the PostgreSQL database to monitor|
|hostname|required|(none)|String|IP address or hostname of the PostgreSQL database server|
|username|required|(none)|String|Name of the PostgreSQL database to use when connecting to the PostgreSQL database server|
|password|required|(none)|String|Password to use when connecting to the PostgreSQL database server|
|database|required|(none)|String|Database name of the PostgreSQL server to monitor|
|schema|required|(none)|String|Schema name of the PostgreSQL database to monitor|
|port|required|(none)|Integer|Integer port number of the PostgreSQL database server|
|decodingPluginName|optional|pgoutput|String|The name of the Postgres logical decoding plug-in installed on the server. Supported values are decoderbufs, wal2json, wal2json_rds, wal2json_streaming, wal2json_rds_streaming and pgoutput.|

## Dependency

We can find Postgres connector dependency `sort-connector-postgres-cdc-1.2.0-incubating-SNAPSHOT.jar` after Inlong maven packaging.

## How to use in Flink SQL
* connector is postgres cdc :
```sql
CREATE TABLE `postgresTable`(
  `name` STRING,
  `age` INT
) WITH (
  'connector' = 'postgres-cdc',
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