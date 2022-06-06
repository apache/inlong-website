---
title: TDSQL Postgres
sidebar_position: 10
---
## Overview

The [TDSQL Postgres](https://cloud.tencent.com/product/tbase) load node support write data to TDSQL Postgres.
TDSQL Postgres is an enterprise-level distributed HTAP database. Through a single database cluster
to provide users with highly consistent distributed database services and high-performance
data warehouse services, a set of integrated enterprise-level solutions is formed.

## Load node params

|  Option | Required  |  Default |  Type | Description  |
|---|---|---|---|---|
|id|required|(none)|String|Identifier for node|
|name|optional|(none)|String|Node name|
|fields|required|(none)|`List<FieldInfo>`|Table fields|
|fieldRelations|required|(none)|`List<FieldRelation>`|Defines the relation between fields from input to output field|
|properties|optional|(none)|Map<String, String>|This can set other properties for connector params|
|url|required|(none)|String|url rule is `jdbc:postgresql://localhost:5432/database`|
|username|required|(none)|String|The value of TDSQL Postgres username to connect|
|password|required|(none)|String|The value of TDSQL Postgres password to connect|
|tableName|required|(none)|String|Table name is "schema_name.table_name"|
|primaryKey|optional|(none)|String|JDBC sink will use upsert semantics rather than plain INSERT statements if primary key is defined in DDL |

## Dependency

We can find TDSQL Postgres connector dependency `sort-connector-jdbc-1.2.0-incubating-SNAPSHOT.jar` after Inlong maven packaging.

## How to use in Flink SQL

```sql
CREATE TABLE `tasqlPostgresTable`(
  PRIMARY KEY (`name`) NOT ENFORCED,
  `name` STRING,
  `age` INT
) WITH (
  'connector' = 'jdbc-inlong',
  'url' = 'jdbc:postgresql://localhost:5432/tdsql',
  'username' = 'tdsqlpostgres',
  'password' = 'inlong',
  'table-name' = 'public.test'
)
```