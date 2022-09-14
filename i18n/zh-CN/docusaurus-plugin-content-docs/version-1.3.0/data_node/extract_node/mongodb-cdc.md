---
title: MongoDB-CDC
sidebar_position: 5
---

import {siteVariables} from '../../version';

## 概述

MongoDB CDC 连接器允许从 MongoDB 读取快照数据和增量数据。本文档介绍如何设置 MongoDB CDC 连接器以对 MongoDB 运行 SQL 查询。

## 支持的版本
| Extract 节点                     | 版本                                          |
| ------------------------------- | --------------------------------------------- |
| [MongoDB-CDC](./mongodb-cdc.md) | [MongoDB](https://www.mongodb.com/): &gt;= 3.6 |

## 依赖项

I.为了设置 MongoDB CDC 连接器，下表提供了使用构建自动化工具（例如 Maven 或 SBT）的依赖关系信息

### Maven依赖

<pre><code parentName="pre">
{`<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-mongodb-cdc</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
`}
</code></pre>

## 设置 MongoDB

### 可用性

- MongoDB 版本

  MongoDB 版本 &gt;= 3.6
  我们使用 [更改流](https://docs.mongodb.com/manual/changeStreams/)功能（3.6 版中的新功能）来捕获更改数据。

- 集群部署

  需要 [副本集](https://docs.mongodb.com/manual/replication/)或 [分片集群](https://docs.mongodb.com/manual/sharding/)。

- 存储引擎

  需要 [WiredTiger](https://docs.mongodb.com/manual/core/wiredtiger/#std-label-storage-wiredtiger)存储引擎。

- [副本集协议版本](https://docs.mongodb.com/manual/reference/replica-configuration/#mongodb-rsconf-rsconf.protocolVersion)

  需要副本集协议版本 1 [(pv1)](https://docs.mongodb.com/manual/reference/replica-configuration/#mongodb-rsconf-rsconf.protocolVersion)。
  从版本 4.0 开始，MongoDB 仅支持 pv1。pv1 是使用 MongoDB 3.2 或更高版本创建的所有新副本集的默认值。

- 特权

  `changeStream` MongoDB Kafka 连接器 `read` 需要权限。

  您可以使用以下示例进行简单授权。
  更详细的授权请参考 [MongoDB 数据库用户角色](https://docs.mongodb.com/manual/reference/built-in-roles/#database-user-roles)。

  ```shell
  use admin;
  db.createUser({
    user: "flinkuser",
    pwd: "flinkpw",
    roles: [
      { role: "read", db: "admin" }, // read role includes changeStream privilege 
      { role: "readAnyDatabase", db: "admin" } // for snapshot reading
    ]
  });
  ```

## 如何创建 MongoDB Extract 节点

### SQL API 用法

这个例子展示了如何使用 `Flink SQL` 创建一个 MongoDB Extract 节点:

```sql
-- Set checkpoint every 3000 milliseconds                       
Flink SQL> SET 'execution.checkpointing.interval' = '3s';   

-- Create a MySQL table 'mongodb_extract_node' in Flink SQL
Flink SQL> CREATE TABLE mongodb_extract_node (
  _id STRING, // must be declared
  name STRING,
  weight DECIMAL(10,3),
  tags ARRAY<STRING>, -- array
  price ROW<amount DECIMAL(10,2), currency STRING>, -- embedded document
  suppliers ARRAY<ROW<name STRING, address STRING>>, -- embedded documents
  PRIMARY KEY(_id) NOT ENFORCED
) WITH (
  'connector' = 'mongodb-cdc-inlong',
  'hosts' = 'localhost:27017,localhost:27018,localhost:27019',
  'username' = 'flinkuser',
  'password' = 'flinkpw',
  'database' = 'inventory',
  'collection' = 'mongodb_extract_node'
);

-- Read snapshot and binlogs from mongodb_extract_node
Flink SQL> SELECT * FROM mongodb_extract_node;
```

**注意**

MongoDB 的更改事件记录在消息之前没有更新。所以，我们只能将其转换为 Flink 的 UPSERT 变更日志流。UPSERT 流需要唯一键，因此我们必须声明 `_id` 为主键。我们不能将其他列声明为主键，因为删除操作不包含除 `_id` 和 `sharding key` 之外的键和值。

### InLong Dashboard 用法

TODO: 未来会支持

### InLong Manager 用法

TODO: 未来会支持

## MongoDB Extract 节点参数

| **选项**                  | **是否必须** | **默认**   | **类型** | **描述**                                                     |
| ------------------------- | ------------ | ---------- | -------- | ------------------------------------------------------------ |
| connector                 | 必须         | (none)     | String   | 指定要使用的连接器，这里应该是`mongodb-cdc-inlong`.                 |
| hosts                     | 必须         | (none)     | String   | MongoDB 服务器的主机名和端口对的逗号分隔列表。例如。`localhost:27017,localhost:27018` |
| username                  | 可选         | (none)     | String   | 连接到 MongoDB 时要使用的数据库用户的名称。仅当 MongoDB 配置为使用身份验证时才需要这样做。 |
| password                  | 可选         | (none)     | String   | 连接 MongoDB 时使用的密码。仅当 MongoDB 配置为使用身份验证时才需要这样做。 |
| database                  | 必须         | (none)     | String   | 要监视更改的数据库的名称。                                   |
| collection                | 必须         | (none)     | String   | 数据库中要监视更改的集合的名称。                             |
| connection.options        | 可选         | (none)     | String   | MongoDB的 & 分隔[连接选项](https://docs.mongodb.com/manual/reference/connection-string/#std-label-connections-connection-options)。例如。`replicaSet=test&connectTimeoutMS=300000` |
| errors.tolerance          | 可选         | none       | String   | 如果遇到错误，是否继续处理消息。接受`none`或`all`。设置为`none`时，连接器会报告错误并在遇到错误时阻止对其余记录的进一步处理。设置为`all`时，连接器会静默忽略任何错误消息。 |
| errors.log.enable         | 可选         | true       | Boolean  | 是否应将失败操作的详细信息写入日志文件。                     |
| copy.existing             | 可选         | true       | Boolean  | 是否从源集合中复制现有数据。                                 |
| copy.existing.pipeline    | 可选         | (none)     | String   | 一组 JSON 对象，描述在复制现有数据时要运行的管道操作。这可以提高复制管理器对索引的使用，并使复制更有效。例如。`[{"$match": {"closed": "false"}}]`确保仅复制已关闭字段设置为 false 的文档。 |
| copy.existing.max.threads | 可选         | 处理器数量 | Integer  | 执行数据复制时使用的线程数。                                 |
| copy.existing.queue.size  | 可选         | 16000      | Integer  | 执行数据复制时使用的线程数。                                 |
| poll.max.batch.size       | 可选         | 1000       | Integer  | 轮询新数据时，单个批次中包含的最大更改流文档数。             |
| poll.await.time.ms        | 可选         | 1500       | Integer  | 在更改流上检查新结果之前等待的时间量。                       |
| heartbeat.interval.ms     | 可选         | 0          | Integer  | 发送心跳消息之间的时间长度（以毫秒为单位）。使用 0 禁用。    |
| inlong.metric             | 可选         | (none)     | String   | inlong metric 的标签值，该值的构成为groupId&streamId&nodeId。|

## 可用元数据

以下格式元数据可以作为表定义中的只读 (VIRTUAL) 列公开。

| Key             | 数据类型                  | 描述                                                         |
| --------------- | ------------------------- | ------------------------------------------------------------ |
| database_name   | STRING NOT NULL           | 包含该行的数据库的名称。                                     |
| collection_name | STRING NOT NULL           | 包含该行的集合的名称。                                       |
| op_ts           | TIMESTAMP_LTZ(3) NOT NULL | 它指示在数据库中进行更改的时间。如果记录是从表的快照而不是更改流中读取的，则该值始终为 0。 |


扩展的 CREATE TABLE 示例演示了公开这些元数据字段的语法：
```sql
CREATE TABLE `mysql_extract_node` (
    db_name STRING METADATA FROM 'database_name' VIRTUAL,
    collection_name STRING METADATA  FROM 'collection_name' VIRTUAL,
    operation_ts TIMESTAMP_LTZ(3) METADATA FROM 'op_ts' VIRTUAL,
    _id STRING, // must be declared
    name STRING,
    weight DECIMAL(10,3),
    tags ARRAY<STRING>, -- array
    price ROW<amount DECIMAL(10,2), currency STRING>, -- embedded document
    suppliers ARRAY<ROW<name STRING, address STRING>>, -- embedded documents
    PRIMARY KEY(_id) NOT ENFORCED
) WITH (
      'connector' = 'mongodb-cdc-inlong', 
      'hostname' = 'YourHostname',
      'username' = 'YourUsername',
      'password' = 'YourPassword',
      'database' = 'YourDatabase',
      'collection' = 'YourTable' 
);
```

## 数据类型映射

| BSON 类型                                                    | Flink SQL 类型                                                |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              | TINYINT                                                      |
|                                                              | SMALLINT                                                     |
| Int                                                          | INT                                                          |
| Long                                                         | BIGINT                                                       |
|                                                              | FLOAT                                                        |
| Double                                                       | DOUBLE                                                       |
| Decimal128                                                   | DECIMAL(p, s)                                                |
| Boolean                                                      | BOOLEAN                                                      |
| Date Timestamp                                               | DATE                                                         |
| Date Timestamp                                               | TIME                                                         |
| Date                                                         | TIMESTAMP(3) TIMESTAMP_LTZ(3)                                |
| Timestamp                                                    | TIMESTAMP(0) TIMESTAMP_LTZ(0)                                |
| String ObjectId UUID Symbol MD5 JavaScript Regex             | STRING                                                       |
| BinData                                                      | BYTES                                                        |
| Object                                                       | ROW                                                          |
| Array                                                        | ARRAY                                                        |
| DBPointer                                                    | ROW\<\$ref STRING, \$id STRING\>                               |
| [GeoJSON](https://docs.mongodb.com/manual/reference/geojson/) | Point : ROW\<type STRING, coordinates ARRAY\<DOUBLE\>\> Line : ROW\<type STRING, coordinates ARRAY\<ARRAY\< DOUBLE\>\>\> ... |

