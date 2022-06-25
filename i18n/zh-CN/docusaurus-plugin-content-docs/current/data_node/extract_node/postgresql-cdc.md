---
title: PostgreSQL-CDC
sidebar_position: 8
---

import {siteVariables} from '../../version';

## 概述

`PostgreSQL Extract` 节点允许从 PostgreSQL 数据库中读取快照数据和增量数据。 本文档描述了如何设置 PostgreSQL Extract 节点以对 PostgreSQL 数据库运行 SQL 查询。

## 支持版本

| Extract 节点                | 版本 | 驱动                  |
|-----------------------------|---------|-------------------------|
| [PostgreSQL-CDC](./postgresql-cdc.md) | [PostgreSQL](https://www.postgresql.org): 9.6, 10, 11, 12 | JDBC Driver: 42.2.12 |

## 依赖

为了设置 PostgreSQL Extract 节点, 下面提供了使用构建自动化工具（例如 Maven 或 SBT）和带有 Sort Connector JAR 包的 SQL 客户端的两个项目的依赖关系信息。

### Maven 依赖

<pre><code parentName="pre">
{`<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-postgres-cdc</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
`}
</code></pre>
## 设置 PostgreSQL 服务

更改数据捕获 (CDC) 允许您跟踪 PostgreSQL 数据库中的更改并将其传播到基于其预写日志 (WAL) 的下游消费者。
您需要确保将上游数据库配置为支持逻辑复制。 在使用 PostgreSQL 连接器监控 PostgreSQL 服务器上提交的更改之前，
决定您打算使用哪个逻辑解码插件。 如果您不打算使用本机 `pgoutput` 逻辑复制流支持，则必须安装逻辑解码
插件到 PostgreSQL 服务器。

### pgoutput

pgoutput 是 PostgreSQL 10+ 中的标准逻辑解码输出插件。 它由 PostgreSQL 社区维护，并由 PostgreSQL 本身用于逻辑复制。
此插件始终存在，因此无需安装其他库。

1. 检查`wal_level`配置设置：

```sql
SHOW wal_level;
```
默认值为副本。 对于 CDC，您需要在数据库配置文件 (postgresql.conf) 中将其设置为`logical`。 请记住，更改 wal_level 需要重新启动 Postgres 实例，并且可能会影响数据库性能。

2. 请在 postgresql.conf 文件中指定以下内容：

```properties
wal_level = logical 
```

### decoderbufs

decoderbufs 基于 Protobuf 并由 Debezium 社区维护， [安装](https://github.com/debezium/postgres-decoderbufs) 它。

1. 要在启动时加载插件，请将以下内容添加到 postgresql.conf 文件中：

```properties
shared_preload_libraries = 'decoderbufs'
```
2. 请在 postgresql.conf 文件中指定以下内容：

```properties
wal_level = logical 
```

## 如何创建 PostgreSQL Extract 节点

### SQL API 用法

```sql
CREATE TABLE `postgresTable`(
  `name` STRING,
  `age` INT
) WITH (
  'connector' = 'postgres-cdc',
  'hostname' = 'localhost',
  'username' = 'postgres',
  'password' = 'inlong',
  'database-name' = 'postgres',
  'schema-name' = 'public',
  'port' = '5432',
  'table-name' = 'user',
  'decoding.plugin.name' = 'pgoutput',
  'slot.name' = 'feaafacbaddadc'
)
```

### InLong Dashboard 用法

TODO: 将在未来支持此功能。

### Usage for InLong Manager Client

TODO: 将在未来支持此功能。

## PostgreSQL Extract 节点参数

| 参数 | 是否必选 | 默认值 | 数据类型 | 描述 |
|---------|----------|---------|------|------------|
| connector | 必选 | (none) | String | 指定使用的连接器，这是设置 `postgres-cdc`.|
| hostname | 必选 | (none) | String | PostgreSQL 数据库的 IP 地址或者主机名 |
| username | 必选 | (none) | String | 连接到 PostgreSQL 数据库服务器时要使用的 PostgreSQL 数据库的名称。 |
| password | 必选 | (none) | String |  |
| database-name | 必选 | (none) | String | 连接到 PostgreSQL 数据库服务器时使用的密码。 |
| schema-name | 必选 | (none) | String | 要监控的 PostgreSQL 数据库的模式名称。|
| table-name | 必选 | (none) | String | 要监控的 PostgreSQL 数据库的表名。 |
| port | 可选 | 5432 | Integer | PostgreSQL 数据库服务器的整数端口号。 |
| decoding.plugin.name | 可选 | decoderbufs | String | 服务器上安装的 Postgres 逻辑解码插件的名称。 支持的值是 decoderbufs、wal2json、wal2json_rds、wal2json_streaming、wal2json_rds_streaming 和 pgoutput。 |
| slot.name | 可选 | flink | String | PostgreSQL 逻辑解码槽的名称，它是为从特定数据库/模式的特定插件流式传输更改而创建的。 服务器使用此插槽将事件流式传输到您正在配置的连接器。 插槽名称必须符合 PostgreSQL 复制插槽命名规则，其中规定：“每个复制插槽都有一个名称，可以包含小写字母、数字和下划线字符。” |
| debezium.* | 可选 | (none) | String | 将 Debezium 的属性传递给用于从 Postgres 服务器捕获数据更改的 Debezium Embedded Engine。 例如：“debezium.snapshot.mode”=“never”。 查看更多关于 [Debezium 的 Postgres 连接器属性](https://debezium.io/documentation/reference/1.5/connectors/postgresql.html#postgresql-connector-properties)。 |

**Note**: `slot.name` 建议为不同的表设置以避免潜在的 PSQLException: ERROR: replication slot "flink" is active for PID 974 error。  
**Note**: PSQLException: ERROR: all replication slots are in use Hint: Free one or increase max_replication_slots. 我们可以通过以下语句删除槽。  
```sql
SELECT*FROM pg_replication_slots;
-- 获取插槽名称为 flink。 删除它
SELECT pg_drop_replication_slot('flink');
```

## 可用的元数据

以下格式元数据可以作为表定义中的只读 (VIRTUAL) 列公开。

| 字段名称 | 数据类型 | 描述  | 
|-----|------------|-------------|
| table_name | STRING NOT NULL | 包含该行的表的名称 |
| schema_name | STRING NOT NULL | 包含该行的模式的名称 |
| database_name | STRING NOT NULL | 包含该行的数据库的名称 |
| op_ts | TIMESTAMP_LTZ(3) NOT NULL | 它指示在数据库中进行更改的时间。如果记录是从表的快照而不是更改流中读取的，则该值始终为 0。 |

扩展的 CREATE TABLE 示例演示了使用这些元数据字段的语法：

```sql
CREATE TABLE postgresTable (
    db_name STRING METADATA FROM 'database_name' VIRTUAL,
    table_name STRING METADATA  FROM 'table_name' VIRTUAL,
    operation_ts TIMESTAMP_LTZ(3) METADATA FROM 'op_ts' VIRTUAL,
    `name` STRING,
    `age` INT
) WITH (
     'connector' = 'postgres-cdc',
     'hostname' = 'localhost',
     'username' = 'postgres',
     'password' = 'inlong',
     'database-name' = 'postgres',
     'schema-name' = 'public',
     'port' = '5432',
     'table-name' = 'user',
     'decoding.plugin.name' = 'pgoutput',
     'slot.name' = 'feaafacbaddadc'
);
```

## 数据类型映射

| PostgreSQL 类型 | Flink SQL 类型 |
|-----------------|----------------|
|                 | TINYINT        |
| SMALLINT <br/> INT2 <br/> SMALLSERIAL <br/> SERIAL2 | SMALLINT |
| INTEGER <br/> SERIAL | INT |
| BIGINT <br/> BIGSERIAL | BIGINT |
| | DECIMAL(20, 0) |
| REAL <br/> FLOAT4 | FLOAT |
| FLOAT8 <br/> DOUBLE PRECISION| DOUBLE |
| NUMERIC(p, s) <br/> DECIMAL(p, s) | DECIMAL(p, s) |
| BOOLEAN | BOOLEAN |
| DATE | DATE |
| TIME [(p)] [WITHOUT TIMEZONE] | TIME [(p)] [WITHOUT TIMEZONE] |
| TIMESTAMP [(p)] [WITHOUT TIMEZONE | TIMESTAMP [(p)] [WITHOUT TIMEZONE] |
| CHAR(n) <br/> CHARACTER(n) <br/> VARCHAR(n) <br/> CHARACTER VARYING(n) <br/> TEXT | STRING |
| BYTEA | BYTES |
