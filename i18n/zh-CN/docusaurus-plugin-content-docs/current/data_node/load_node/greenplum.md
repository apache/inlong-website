---
title: Greenplum
sidebar_position: 9
---
## Overview

Greenplum写入节点支持写数据到Greenplum。

## 写入节点参数
|  参数 | 是否必须  |  默认值 |  数据类型 | 描述  |
|---|---|---|---|---|
|id|必填|(none)|String|节点标识|
|name|可选|(none)|String|节点名称|
|fields|必填|(none)|`List<FieldInfo>`|表字段|
|fieldRelations|必填|(none)|`List<FieldRelation>`|定义输入和输出字段的映射关系|
|properties|可选|(none)|Map<String, String>|连接器其他参数|
|url|required|(none)|String|url 规则是 `jdbc:postgresql://localhost:5432/database`|
|username|required|(none)|String|Greenplum 连接的用户名|
|password|required|(none)|String|Greenplum 连接的密码|
|tableName|required|(none)|String|表名规则是 "schema_name.table_name"|
|primaryKey|optional|(none)|String|如果在 DDL 中定义了主键，JDBC sink 将使用 upsert 语义而不是普通的 INSERT 语句。 |

## 依赖

打包后我们可以找到Greenplum写入节点的依赖包 `sort-connector-jdbc-1.2.0-incubating-SNAPSHOT.jar`。

## 如何使用Flink SQL

```sql
CREATE TABLE `greenplumTable`(
  PRIMARY KEY (`id`) NOT ENFORCED,
  `id` BIGINT,
  `name` STRING,
  `age` INT
) WITH (
  'connector' = 'jdbc-inlong',
  'url' = 'jdbc:postgresql://localhost:5432/inlong',
  'dialect-impl' = 'org.apache.inlong.sort.jdbc.dialect.GreenplumDialect',
  'username' = 'inlong',
  'password' = 'inlong',
  'table-name' = 'public.student'
)
```