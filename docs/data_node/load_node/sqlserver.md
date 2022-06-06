---
title: Sql Server
sidebar_position: 15
---
## Overview

The Sql Server load node support write data to Sql Server.

## Load node params

|  Option | Required  |  Default |  Type | Description  |
|---|---|---|---|---|
|id|required|(none)|String|Identifier for node|
|name|optional|(none)|String|Node name|
|fields|required|(none)|`List<FieldInfo>`|Table fields|
|fieldRelations|required|(none)|`List<FieldRelation>`|Defines the relation between fields from input to output field|
|properties|optional|(none)|Map<String, String>|This can set other properties for connector params|
|url|required|(none)|String|url rule is `jdbc:sqlserver://host:port;databaseName=database`|
|username|required|(none)|String|The value of Sql Server username to connect|
|password|required|(none)|String|The value of Sql Server password to connect|
|tableName|required|(none)|String|The name of Sql Server table to connect|
|schemaName|optional|dbo|String|The name of Sql Server schema to connect|
|primaryKey|optional|(none)|String|JDBC sink will use upsert semantics rather than plain INSERT statements if primary key is defined in DDL |

## Dependency

We can find Sql Server connector dependency `sort-connector-jdbc-1.2.0-incubating-SNAPSHOT.jar` after Inlong maven packaging.

## How to use in Flink SQL

```sql
CREATE TABLE `sqlServerTable`(
  PRIMARY KEY (`id`) NOT ENFORCED,
  `id` BIGINT,
  `name` STRING
) WITH (
  'connector' = 'jdbc-inlong',
  'url' = 'jdbc:sqlserver://localhost:1433;databaseName=column_type_test',
  'username' = 'SA',
  'password' = 'inlong',
  'table-name' = 'dbo.work1'
)
```