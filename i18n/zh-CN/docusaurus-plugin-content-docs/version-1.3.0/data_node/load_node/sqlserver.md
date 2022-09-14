---
title: SQLServer
sidebar_position: 14
---

import {siteVariables} from '../../version';

## 概览

`SQLServer Load` 节点支持将数据写入 MySQL 数据库。 本文档介绍如何设置 SQLServer Load 节点以对 SQLServer 数据库运行 SQL 查询。

## 支持的版本

| Load 节点                | Driver | Group Id | Artifact Id | JAR |                                                                                                                                                                                                                                                                                                                                                                                       
|--------------------------|--------|----------|-------------|-----|
| [SQLServer](./sqlserver.md) | SQL Server  | com.microsoft.sqlserver | mssql-jdbc | [下载](https://mvnrepository.com/artifact/com.microsoft.sqlserver/mssql-jdbc) |

## 依赖

为了设置 SQLServer Load 节点, 下面提供了使用构建自动化工具（例如 Maven 或 SBT）和带有 Sort Connector JAR 包的 SQL 客户端的两个项目的依赖关系信息。

### Maven 依赖

<pre><code parentName="pre">
{`<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-jdbc</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
`}
</code></pre>

## 如何创建 SQLServer Load 节点

### SQL API 用法

```sql

-- MySQL Extract 节点
CREATE TABLE `mysql_extract_table`(
  PRIMARY KEY (`id`) NOT ENFORCED,
  `id` BIGINT,
  `name` STRING,
  `age` INT
) WITH (
  'connector' = 'mysql-cdc-inlong',
  'url' = 'jdbc:mysql://localhost:3306/read',
  'username' = 'inlong',
  'password' = 'inlong',
  'table-name' = 'user'
)

-- SQLServer Load 节点
CREATE TABLE `sqlserver_load_table`(
  PRIMARY KEY (`id`) NOT ENFORCED,
  `id` BIGINT,
  `name` STRING,
  `age` INT
) WITH (
  'connector' = 'jdbc-inlong',
  'url' = 'jdbc:sqlserver://localhost:1433;databaseName=column_type_test',
  'username' = 'inlong',
  'password' = 'inlong',
  'table-name' = 'dbo.work1'
)

-- 写数据到 SQLServer
INSERT INTO sqlserver_load_table 
SELECT id, name , age FROM mysql_extract_table;  

```

### InLong Dashboard 用法

TODO: 将在未来支持此功能。

### InLong Manager Client 用法

TODO: 将在未来支持此功能。

## SQLServer Load 节点参数

| 参数 | 是否必选 | 默认值 | 数据类型 | 描述 |
|---------|----------|---------|------|------------|
| connector | 必选 | (none) | String | 指定使用什么类型的连接器，这里应该是 'jdbc-inlong'。 |
| url | 必选 | (none) | String | JDBC 数据库 url。 |
| table-name | 必选 | (none) | String | 连接到 JDBC 表的名称。 |
| driver | 可选 | (none) | String | 用于连接到此 URL 的 JDBC 驱动类名，如果不设置，将自动从 URL 中推导。 |
| username | 可选 | (none) | String | JDBC 用户名。如果指定了 'username' 和 'password' 中的任一参数，则两者必须都被指定。 |
| password | 可选 | (none) | String | JDBC 密码。 |
| connection.max-retry-timeout | 可选 | 60s | Duration | 最大重试超时时间，以秒为单位且不应该小于 1 秒。 |
| sink.buffer-flush.max-rows | 可选 | 100 | Integer | flush 前缓存记录的最大值，可以设置为 '0' 来禁用它。 |
| sink.buffer-flush.interval | 可选 | 1s | Duration | flush 间隔时间，超过该时间后异步线程将 flush 数据。可以设置为 '0' 来禁用它。注意, 为了完全异步地处理缓存的 flush 事件，可以将 'sink.buffer-flush.max-rows' 设置为 '0' 并配置适当的 flush 时间间隔。 |
| sink.max-retries | 可选 | 3 | Integer | 写入记录到数据库失败后的最大重试次数。 |
| sink.parallelism | 可选 | (none) | Integer | 用于定义 JDBC sink 算子的并行度。默认情况下，并行度是由框架决定：使用与上游链式算子相同的并行度。 |
| sink.ignore.changelog | 可选 | false | Boolean |  忽略所有 RowKind 类型的变更日志，将它们当作 INSERT 的数据来采集。 |
| inlong.metric | 可选 | (none) | String | inlong metric 的标签值，该值的构成为groupId&streamId&nodeId。|

## 数据映射

| SQLServer 类型 | Flink SQL 类型 |
|----------------|----------------|
| char(n)       | CHAR(n)        |
| varchar(n) <br/> nvarchar(n) <br/> nchar(n) | VARCHAR(n) |
| text <br/> ntext <br/> xml | STRING |
| BIGINT <br/> BIGSERIAL | BIGINT |
| decimal(p, s) <br/> money <br/> smallmoney | DECIMAL(p, s) |
| numeric  | NUMERIC |
| float <br/> real | FLOAT |
| bit | BOOLEAN |
| int | INT |
| tinyint | TINYINT |
| smallint | SMALLINT |
| bigint | BIGINT |
| time(n) | TIME(n) |
| datetime2 <br/> datetime <br/> smalldatetime | TIMESTAMP(n) |
| datetimeoffset | TIMESTAMP_LTZ(3) |