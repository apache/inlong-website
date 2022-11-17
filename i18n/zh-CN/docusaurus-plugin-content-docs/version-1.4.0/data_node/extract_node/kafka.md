---
title: Kafka
sidebar_position: 4
---

import {siteVariables} from '../../version';

## 概述

`Kafka Extract` 节点 支持从 Kafka topics 中读取数据。它支持以普通的方式读取数据和 Upsert 的方式读取数据。`upsert-kafka` 连接器生产 `changelog` 流,
其中每条数据记录代表一个更新或删除事件。`kafka-inlong` 连接器可以以普通方式读取数据和元数据信息。

## 支持的版本

| Extract 节点                | Kafka 版本 |                                                                                                                                                                                                                                                                                                                                                                                           
|-----------------------------|-----------|
| [Kafka](./kafka.md)         | 0.10+     |  

## 依赖

为了设置 Kafka Extract 节点, 下面提供了使用构建自动化工具（例如 Maven 或 SBT）和带有 Sort Connector JAR 包的 SQL 客户端的两个项目的依赖关系信息。

### Maven 依赖

<pre><code parentName="pre">
{`<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-kafka</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
`}
</code></pre>

## 如何创建 Kafka Extract 节点

### SQL API 用法

下面这个例子展示了如何用 `Flink SQL` 创建一个 Kafka Extract 节点:
* 连接器是 `kafka-inlong`
```sql
-- 设置 Checkpoint 为 3000 毫秒                      
Flink SQL> SET 'execution.checkpointing.interval' = '3s';   

-- 使用 Flink SQL 创建 Kafka 表 'kafka_extract_node'
Flink SQL> CREATE TABLE kafka_extract_node (
           `id` INT,
           `name` STRINTG
           ) WITH (
           'connector' = 'kafka-inlong',
           'topic' = 'user',
           'properties.bootstrap.servers' = 'localhost:9092',
           'properties.group.id' = 'testGroup',
           'scan.startup.mode' = 'earliest-offset',
           'format' = 'csv'
           )
  
-- 读取数据
Flink SQL> SELECT * FROM kafka_extract_node;
```
* 连接器是 `upsert-kafka`
```sql
-- 设置 Checkpoint 为 3000 毫秒                       
Flink SQL> SET 'execution.checkpointing.interval' = '3s';

-- 使用 Flink SQL 创建 Kafka 表 'kafka_extract_node'
Flink SQL> CREATE TABLE kafka_extract_node (
          `id` INT,
          `name` STRINTG,
           PRIMARY KEY (`id`) NOT ENFORCED
          ) WITH (
          'connector' = 'upsert-kafka-inlong',
          'topic' = 'user',
          'properties.bootstrap.servers' = 'localhost:9092',
          'properties.group.id' = 'testGroup',
          'scan.startup.mode' = 'earliest-offset',
          'key.format' = 'csv',
          'value.format' = 'csv'
          )
    
-- 读取数据
Flink SQL> SELECT * FROM kafka_extract_node;       
```
### InLong Dashboard 用法

TODO: 将在未来支持此功能。

### InLong Manager Client 用法

TODO: 将在未来支持此功能。

## Kafka Extract 节点参数

| 参数 | 是否必选 | 默认值 | 数据类型 | 描述 |
|---------|----------|---------|------|------------|
| connector | 必选 | (none) | String | 指定要使用的连接器  1. Upsert Kafka 连接器使用： `upsert-kafka-inlong`  2. Kafka连接器使用： `kafka-inlong` |
| topic | 可选 | (none) | String | 当表用作 source 时读取数据的 topic 名。亦支持用分号间隔的 topic 列表，如 `topic-1;topic-2`。注意，对 source 表而言，`topic` 和 `topic-pattern` 两个选项只能使用其中一个。 |
| topic-pattern | 可选 | (none) | String | 匹配读取 topic 名称的正则表达式。在作业开始运行时，所有匹配该正则表达式的 topic 都将被 Kafka consumer 订阅。注意，对 source 表而言，`topic` 和 `topic-pattern` 两个选项只能使用其中一个。 |
| properties.bootstrap.servers | 必选 | (none) | String | 逗号分隔的 Kafka broker 列表。 |
| properties.group.id | 必选 | (none) | String | Kafka source 的消费组 id。 |
| properties.* | 可选 | (none) | String | 可以设置和传递任意 Kafka 的配置项。后缀名必须匹配在 [Kafka 配置文档](https://kafka.apache.org/documentation/#configuration) 中定义的配置键。Flink 将移除 "properties." 配置键前缀并将变换后的配置键和值传入底层的 Kafka 客户端。例如，你可以通过 'properties.allow.auto.create.topics' = 'false' 来禁用 topic 的自动创建。但是某些配置项不支持进行配置，因为 Flink 会覆盖这些配置，例如 'key.deserializer' 和 'value.deserializer'。 |
| format | 对于 Kafka 必选 | (none) | String | 用来序列化或反序列化 Kafka 消息的格式。 请参阅 [格式](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/formats/overview/) 页面以获取更多关于格式的细节和相关配置项。 注意：该配置项和 'value.format' 二者必需其一。 |
| key.format | 可选 | (none) | String | 用来序列化和反序列化 Kafka 消息键（Key）的格式。 请参阅 格式 页面以获取更多关于格式的细节和相关配置项。 注意：如果定义了键格式，则配置项 'key.fields' 也是必需的。 否则 Kafka 记录将使用空值作为键。 |
| key.fields | 可选 | [] | `List<String>` | 表结构中用来配置消息键（Key）格式数据类型的字段列表。默认情况下该列表为空，因此消息键没有定义。 列表格式为 'field1;field2'。 |
| key.fields-prefix | 可选 | (none) | String | 为所有消息键（Key）格式字段指定自定义前缀，以避免与消息体（Value）格式字段重名。默认情况下前缀为空。 如果定义了前缀，表结构和配置项 'key.fields' 都需要使用带前缀的名称。 当构建消息键格式字段时，前缀会被移除，消息键格式将会使用无前缀的名称。 请注意该配置项要求必须将 'value.fields-include' 配置为 'EXCEPT_KEY'。 |
| value.format | 对于 Upsert Kafka 必选 | (none) | String | 用于对 Kafka 消息中 value 部分序列化和反序列化的格式。支持的格式包括 'csv'、'json'、'avro'。请参考[格式](https://nightlies.apache.org/flink/flink-docs-release-1.13/zh/docs/connectors/table/formats/overview/)页面以获取更多详细信息和格式参数。 |
| value.fields-include | 可选 | ALL | String | 控制哪些字段应该出现在 value 中。可取值：<br/> ALL：消息的 value 部分将包含 schema 中所有的字段，包括定义为主键的字段。<br/> EXCEPT_KEY：记录的 value 部分包含 schema 的所有字段，定义为主键的字段除外。 |
| scan.startup.mode | 可选 | group-offsets | String | Kafka consumer 的启动模式。有效值为：'earliest-offset'，'latest-offset'，'group-offsets'，'timestamp' 和 'specific-offsets'。 请参阅下方 起始消费位点 以获取更多细节。 |
| scan.startup.specific-offsets | 可选 | (none) | String | 在使用 'specific-offsets' 启动模式时为每个 partition 指定 offset，例如 'partition:0,offset:42;partition:1,offset:300'。 |
| scan.startup.timestamp-millis | 可选 | (none) | Long | 在使用 'timestamp' 启动模式时指定启动的时间戳（单位毫秒）。 |
| scan.topic-partition-discovery.interval | 可选 | (none) | Duration | Consumer 定期探测动态创建的 Kafka topic 和 partition 的时间间隔。 |
| inlong.metric | 可选 | (none) | String | inlong metric 的标签值，该值的构成为groupId&streamId&nodeId。|
| sink.ignore.changelog | 可选 | false | 布尔型 | 支持所有类型的 changelog 流 ingest 到 Kafka。 |

## 可用的元数据字段

以下格式元数据可以作为表定义中的只读 (VIRTUAL) 列公开。 它支持读取格式 `canal-json-inlong` 的元数据。

| 字段名称 | 数据类型 | 描述  | 
|-----|------------|-------------|
| value.table_name | STRING | 包含该行的表的名称 | 
| value.database_name | STRING | 包含该行的数据库的名称  |
| value.op_ts| TIMESTAMP(3) | 它指示在数据库中进行更改的时间。 如果记录是从表的快照而不是binlog中读取的，则该值始终为0 |
| value.op_type| STRING | 操作类型, INSERT/UPDATE/DELETE |
| value.batch_id| BIGINT | 不重要的, 一个简单的自增器 |
| value.is_ddl| BOOLEAN | 不下发 DDL, 值是 false |
| value.update_before| `ARRAY<MAP<STRING, STRING>>` | UPDATE 记录的 update-before 数据 |
| value.mysql_type | MAP<STRING, STRING> | MySQL 字段类型 |
| value.pk_names | `ARRAY<STRING>` | 主键 |
| value.sql_type | MAP<STRING, INT> | SQL 字段类型 |
| value.ts | TIMESTAMP_LTZ(3) | ts_ms 字段用于存储有关连接器处理/生成事件的本地时间的信息 |

扩展的 CREATE TABLE 示例演示了使用这些元数据字段的语法：

```sql
CREATE TABLE `kafka_extract_node` (
      `id` INT,
      `name` STRING,
      `database_name` string METADATA FROM 'value.database_name',
      `table_name`    string METADATA FROM 'value.table_name',
      `op_ts`         timestamp(3) METADATA FROM 'value.op_ts',
      `op_type` string METADATA FROM 'value.op_type',
      `batch_id` bigint METADATA FROM 'value.batch_id',
      `is_ddl` boolean METADATA FROM 'value.is_ddl',
      `update_before` ARRAY<MAP<STRING, STRING>> METADATA FROM 'value.update_before',
      `mysql_type` MAP<STRING, STRING> METADATA FROM 'value.mysql_type',
      `pk_names` ARRAY<STRING> METADATA FROM 'value.pk_names',
      `data` STRING METADATA FROM 'value.data',
      `sql_type` MAP<STRING, INT> METADATA FROM 'value.sql_type',
      `ingestion_ts` TIMESTAMP(3) METADATA FROM 'value.ts',
) WITH (
      'connector' = 'kafka-inlong',
      'topic' = 'user',
      'properties.bootstrap.servers' = 'localhost:9092',
      'properties.group.id' = 'testGroup',
      'scan.startup.mode' = 'earliest-offset',
      'format' = 'canal-json-inlong'
)
```

## 数据类型映射

Kafka 将消息键值以二进制进行存储，因此 Kafka 并不存在 schema 或数据类型。Kafka 消息使用格式配置进行序列化和反序列化，例如 csv，json，avro。 因此，数据类型映射取决于使用的格式。请参阅 [格式](https://nightlies.apache.org/flink/flink-docs-release-1.13/zh/docs/connectors/table/formats/overview/) 页面以获取更多细节。