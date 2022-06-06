---
title: Sql Server
sidebar_position: 15
---
## 概览

Sql Server写入节点支持写数据到Sql Server.

## 写入节点参数

|  参数 | 是否必须  |  默认值 |  数据类型 | 描述  |
|---|---|---|---|---|
|id|必填|(none)|String|节点标识|
|name|可选|(none)|String|节点名称|
|fields|必填|(none)|`List<FieldInfo>`|表字段|
|fieldRelations|必填|(none)|`List<FieldRelation>`|定义输入和输出字段的映射关系|
|properties|可选|(none)|Map<String, String>|连接器其他参数|
|url|required|(none)|String|url 规则是 `jdbc:sqlserver://host:port;databaseName=database`|
|username|required|(none)|String|Sql Server连接的用户名|
|password|required|(none)|String|Sql Server连接的密码|
|tableName|required|(none)|String|Sql Server连接的表名|
|schemaName|optional|dbo|String|Sql Server 连接的schema|
|primaryKey|optional|(none)|String|如果在 DDL 中定义了主键，JDBC sink 将使用 upsert 语义而不是普通的 INSERT 语句。 |

## 依赖

打包后我们可以找到Sql Server写入连接器的依赖包`sort-connector-jdbc-1.2.0-incubating-SNAPSHOT.jar`。

## 如何使用Flink SQL

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