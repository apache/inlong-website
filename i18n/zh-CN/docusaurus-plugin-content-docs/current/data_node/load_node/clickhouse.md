---
title: ClickHouse
sidebar_position: 5
---

## 总览

[ClickHouse](https://clickhouse.com/docs/en/intro/) 是一个用于联机分析(OLAP)的列式数据库管理系统(DBMS)。
ClickHouse写入节点支持写数据到ClickHouse. 它不支持upsert语法，所以它不能消费changelog流。

## 配置
创建数据流时，数据流向选择 `ClickHouse`，并点击 ”添加“ 进行配置。

![ClickHouse Configuration](img/clickhouse.png)

## 写入节点参数

|  参数 | 是否必须  |  默认值 |  数据类型 | 描述  |
|---|---|---|---|---|
|id|必填|(none)|String|节点标识|
|name|可选|(none)|String|节点名称|
|fields|必填|(none)|`List<FieldInfo>`|表字段|
|fieldRelations|必填|(none)|`List<FieldRelation>`|定义输入和输出字段的映射关系|
|properties|可选|(none)|Map<String, String>|连接器其他参数|
|url|required|(none)|String|url 规则是 `jdbc:clickhouse://localhost:8123/database`|
|username|required|(none)|String|ClickHouse连接的用户名|
|password|required|(none)|String|ClickHouse连接的密码|
|tableName|required|(none)|String|ClickHouse连接的表|

## 依赖

打包后我们可以找到ClickHouse写入连接器的依赖`sort-connector-jdbc-1.2.0-incubating-SNAPSHOT.jar`。

## 如何使用Flink SQL

```sql
CREATE TABLE `clickhouseTable`(
  `id` BIGINT,
  `name` STRING
) WITH (
  'connector' = 'jdbc-inlong',
  'dialect-impl' = 'org.apache.inlong.sort.jdbc.dialect.ClickHouseDialect',
  'url' = 'jdbc:clickhouse://localhost:8123/demo',
  'table-name' = 'ck_demo',
  'username' = 'default',
  'password' = ''
)
```