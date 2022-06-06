---
title: MySQL
sidebar_position: 12
---
## Overview

The MySQL load node support write data to MySQL.

## Load node params

|  Option | Required  |  Default |  Type | Description  |
|---|---|---|---|---|
|id|required|(none)|String|Identifier for node|
|name|optional|(none)|String|Node name|
|fields|required|(none)|`List<FieldInfo>`|Table fields|
|fieldRelations|required|(none)|`List<FieldRelation>`|Defines the relation between fields from input to output field|
|properties|optional|(none)|Map<String, String>|This can set other properties for connector params|
|url|required|(none)|String|url rule is `jdbc:mysql://host:port/database`|
|username|required|(none)|String|The value of MySQL username to connect|
|password|required|(none)|String|The value of MySQL password to connect|
|tableName|required|(none)|String|The name of MySQL table to connect|
|primaryKey|optional|(none)|String|JDBC sink will use upsert semantics rather than plain INSERT statements if primary key is defined in DDL |

## Dependency

We can find MySQL connector dependency `sort-connector-jdbc-1.2.0-incubating-SNAPSHOT.jar` after Inlong maven packaging.
MySQL license conflict with Inlong license. So We remove MySQL driver in pom.xml. We can modify pom.xml before maven packaging if we need use it. 

## How to use in Flink SQL

```sql
CREATE TABLE `mysqlTable`(
  PRIMARY KEY (`id`) NOT ENFORCED,
  `id` BIGINT,
  `name` STRING,
  `age` INT
) WITH (
  'connector' = 'jdbc-inlong',
  'url' = 'jdbc:mysql://localhost:3306/inlong',
  'username' = 'inlong',
  'password' = 'inlong',
  'table-name' = 'table_output'
)
```