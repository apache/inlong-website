---
title: Postgres
sidebar_position: 8
---
## Overview

The Postgres load node support write data to Postgres.

## Load node params

|  Option | Required  |  Default |  Type | Description  |
|---|---|---|---|---|
|id|required|(none)|String|Identifier for node|
|name|optional|(none)|String|Node name|
|fields|required|(none)|`List<FieldInfo>`|Table fields|
|fieldRelations|required|(none)|`List<FieldRelation>`|Defines the relation between fields from input to output field|
|properties|optional|(none)|Map<String, String>|This can set other properties for connector params|
|url|required|(none)|String|url rule is `jdbc:postgresql://localhost:5432/database`|
|username|required|(none)|String|The value of Postgres username to connect|
|password|required|(none)|String|The value of Postgres password to connect|
|tableName|required|(none)|String|Table name is "schema_name.table_name"|
|primaryKey|optional|(none)|String|JDBC sink will use upsert semantics rather than plain INSERT statements if primary key is defined in DDL |

## Dependency

We can find Postgres connector dependency `sort-connector-jdbc-1.2.0-incubating-SNAPSHOT.jar` after Inlong maven packaging.

## How to use in Flink SQL

```sql
CREATE TABLE `postgresTable`(
  PRIMARY KEY (`name`,`age`) NOT ENFORCED,
  `name` STRING,
  `age` INT
) WITH (
  'connector' = 'jdbc',
  'url' = 'jdbc:postgresql://localhost:5432/postgres',
  'username' = 'postgres',
  'password' = 'inlong',
  'table-name' = 'public.user'
)
```