---
title: Oracle
sidebar_position: 13
---
## 概览

Oracle写入节点支持写数据到Oracle。

## 写入节点参数

|  参数 | 是否必须  |  默认值 |  数据类型 | 描述  |
|---|---|---|---|---|
|id|必填|(none)|String|节点标识|
|name|可选|(none)|String|节点名称|
|fields|必填|(none)|`List<FieldInfo>`|表字段|
|fieldRelations|必填|(none)|`List<FieldRelation>`|定义输入和输出字段的映射关系|
|properties|可选|(none)|Map<String, String>|连接器其他参数|
|url|必填|(none)|String|url 规则是 `jdbc:oracle:thin:@localhost:1521:database`|
|username|必填|(none)|String| Oracle连接的用户名|
|password|必填|(none)|String|Oracle连接的密码|
|tableName|必填|(none)|String|Oracle连接的表|
|primaryKey|optional|(none)|String|如果在 DDL 中定义了主键，JDBC sink 将使用 upsert 语义而不是普通的 INSERT 语句。|

## Dependency

打包后我们可以找到Oracle写入连接器依赖包`sort-connector-jdbc-1.2.0-incubating-SNAPSHOT.jar`。
Oracle license 和 Inlong license 是冲突的. 所以我们移除了pom中的 Oracle 驱动依赖. 如果我们想使用这个连接器，我们可以修改pom文件。

## 如何使用Flink SQL

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