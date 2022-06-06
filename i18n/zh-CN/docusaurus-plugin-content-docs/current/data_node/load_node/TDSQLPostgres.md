---
title: TDSQL Postgres
sidebar_position: 10
---
## Overview

[TDSQL Postgres](https://cloud.tencent.com/product/tbase) 写入节点支持写数据到TDSQL Postgres。
TDSQL PostgreSQL 版（TDSQL for PostgreSQL， 原 TBase）是腾讯自主研发的分布式数据库系统，具备高 SQL 兼容度、完整分布式事务、高安全、高扩展、多级容灾等能力，成功应用在金融、政府、电信等行业核心业务中。同时提供完善的容灾、备份、监控、审计等全套方案，适用于GB～PB级海量 HTAP 场景。

## 写入节点参数

|  参数 | 是否必须  |  默认值 |  数据类型 | 描述  |
|---|---|---|---|---|
|id|必填|(none)|String|节点标识|
|name|可选|(none)|String|节点名称|
|fields|必填|(none)|`List<FieldInfo>`|表字段|
|fieldRelations|必填|(none)|`List<FieldRelation>`|定义输入和输出字段的映射关系|
|properties|可选|(none)|Map<String, String>|连接器其他参数|
|url|required|(none)|String|url 规则是 `jdbc:postgresql://localhost:5432/database`|
|username|required|(none)|String|TDSQL Postgres 连接的用户名|
|password|required|(none)|String|TDSQL Postgres 连接的密码|
|tableName|required|(none)|String|表名规则是"schema_name.table_name"|
|primaryKey|optional|(none)|String|如果在 DDL 中定义了主键，JDBC sink 将使用 upsert 语义而不是普通的 INSERT 语句。|

## 依赖

打包后我们可以找到TDSQL Postgres 写入连接器的依赖`sort-connector-jdbc-1.2.0-incubating-SNAPSHOT.jar`。

## 如何使用link SQL

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