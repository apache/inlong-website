---
title: MySQL
sidebar_position: 12
---
## Overview

MySQL写入节点支持写数据到MySQL。

## 写入节点参数

|  参数 | 是否必须  |  默认值 |  数据类型 | 描述  |
|---|---|---|---|---|
|id|必填|(none)|String|节点标识|
|name|可选|(none)|String|节点名称|
|fields|必填|(none)|`List<FieldInfo>`|表字段|
|fieldRelations|必填|(none)|`List<FieldRelation>`|定义输入和输出字段的映射关系|
|properties|可选|(none)|Map<String, String>|连接器其他参数|
|url|必填|(none)|String|url 规则是`jdbc:mysql://host:port/database`|
|username|必填|(none)|String|MySQL 连接的用户名|
|password|必填|(none)|String| MySQL 连接的密码|
|tableName|必填|(none)|String|MySQL 连接的表|
|primaryKey|可选|(none)|String|如果在 DDL 中定义了主键，JDBC sink 将使用 upsert 语义而不是普通的 INSERT 语句。|

## 依赖

打包后我们可以找到MySQL写入连接器的包 `sort-connector-jdbc-1.2.0-incubating-SNAPSHOT.jar`。
由于MySQL license和Inlong license冲突， 我们在pom中移除了MySQL驱动依赖，如果我们需要使用这个连接器，我们可以在打包时修改pom文件。

## 如何使用Flink SQL

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