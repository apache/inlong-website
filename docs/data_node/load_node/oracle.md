---
title: Oracle
sidebar_position: 13
---
## Overview

The Oracle load node support write data to Oracle.

## Load node params

|  Option | Required  |  Default |  Type | Description  |
|---|---|---|---|---|
|id|required|(none)|String|Identifier for node|
|name|optional|(none)|String|Node name|
|fields|required|(none)|`List<FieldInfo>`|Table fields|
|fieldRelations|required|(none)|`List<FieldRelation>`|Defines the relation between fields from input to output field|
|properties|optional|(none)|`Map<String, String>`|This can set other properties for connector params|
|url|required|(none)|String|url rule is `jdbc:oracle:thin:@localhost:1521:database`|
|username|required|(none)|String|The value of Oracle username to connect|
|password|required|(none)|String|The value of Oracle password to connect|
|tableName|required|(none)|String|The name of Oracle table to connect|
|primaryKey|optional|(none)|String|JDBC sink will use upsert semantics rather than plain INSERT statements if primary key is defined in DDL |

## Dependency

We can find Oracle connector dependency `sort-connector-jdbc-1.2.0-incubating-SNAPSHOT.jar` after Inlong maven packaging.
Oracle license is conflict with Inlong license. So We remove Oracle driver in pom.xml. We can modify pom.xml before maven packaging if we need use it.

## How to use in Flink SQL

```sql
CREATE TABLE `oracleTable`(
  PRIMARY KEY (`ID`) NOT ENFORCED,
  `ID` BIGINT,
  `NAME` STRING,
  `AGE` INT
) WITH (
  'connector' = 'jdbc-inlong',
  'url' = 'jdbc:oracle:thin:@localhost:1521:xe',
  'username' = 'flinkuser',
  'password' = 'flinkpw',
  'table-name' = 'student'
)
```