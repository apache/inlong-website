---
title: Kafka
sidebar_position: 10
---

import {siteVariables} from '../../version';

## 概览

`Kafka Load` 节点支持写数据到 Kafka topics。 它支持以普通的方式写入数据和 Upsert 的方式写入数据。 upsert-kafka 连接器可以消费 changelog 流。它会将 INSERT/UPDATE_AFTER 数据作为正常的 Kafka 消息写入，并将 DELETE 数据以 value 为空的 Kafka 消息写入（表示对应 key 的消息被删除）。

## 支持的版本

| Load 节点                | Kafka 版本 |                                                                                                                                                                                                                                                                                                                                                                                           
|--------------------------|---------------|
| [Kafka](./kafka.md)      | 0.10+         |  

## 依赖

为了设置 Kafka Load 节点, 下面提供了使用构建自动化工具（例如 Maven 或 SBT）和带有 Sort Connector JAR 包的 SQL 客户端的两个项目的依赖关系信息。

### Maven 依赖

<pre><code parentName="pre">
{`<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-kafka</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
`}
</code></pre>

## 如何创建 Kafka Load 节点

### SQL API 用法

下面这个例子展示了如何用 `Flink SQL` 创建一个 Kafka Load 节点:
* 连接器是 `kafka-inlong`
```sql
-- 使用 Flink SQL 创建 Kafka 表 'kafka_load_node'
Flink SQL> CREATE TABLE kafka_load_node (
           `id` INT,
           `name` STRINTG
           ) WITH (
           'connector' = 'kafka-inlong',
           'topic' = 'user',
           'properties.bootstrap.servers' = 'localhost:9092',
           'properties.group.id' = 'testGroup',
           'format' = 'csv'
           )
```
* 连接器是 `upsert-kafka`
```sql
-- 使用 Flink SQL 创建 Kafka 表 'kafka_load_node'
Flink SQL> CREATE TABLE kafka_load_node (
          `id` INT,
          `name` STRINTG,
           PRIMARY KEY (`id`) NOT ENFORCED
          ) WITH (
          'connector' = 'upsert-kafka',
          'topic' = 'user',
          'properties.bootstrap.servers' = 'localhost:9092',
          'key.format' = 'csv',
          'value.format' = 'csv'
          )   
```
### InLong Dashboard 用法

创建数据流时，数据流方向选择`Kafka`，点击“添加”进行配置。

![Kafka Configuration](img/kafka.png)

### InLong Manager Client 用法

TODO: 将在未来支持此功能。

## Kafka Load 节点参数

| 参数 | 是否必选 | 默认值 | 数据类型 | 描述 |
|---------|----------|---------|------|------------|
| connector | 必选 | (none) | String | 指定要使用的连接器  1. Upsert Kafka 连接器使用： `upsert-kafka`  2. Kafka连接器使用： `kafka-inlong` |
| topic | 必选 | (none) | String | 当表用作 source 时读取数据的 topic 名。亦支持用分号间隔的 topic 列表，如 `topic-1;topic-2`。注意，对 source 表而言，`topic` 和 `topic-pattern` 两个选项只能使用其中一个。 |
| properties.bootstrap.servers | 必选 | (none) | String | 逗号分隔的 Kafka broker 列表。 |
| properties.* | 可选 | (none) | String | 可以设置和传递任意 Kafka 的配置项。后缀名必须匹配在 [Kafka 配置文档](https://kafka.apache.org/documentation/#configuration) 中定义的配置键。Flink 将移除 "properties." 配置键前缀并将变换后的配置键和值传入底层的 Kafka 客户端。例如，你可以通过 'properties.allow.auto.create.topics' = 'false' 来禁用 topic 的自动创建。但是某些配置项不支持进行配置，因为 Flink 会覆盖这些配置，例如 'key.deserializer' 和 'value.deserializer'。 |
| format | 对于 Kafka 必选 | (none) | String | 用来序列化或反序列化 Kafka 消息的格式。 请参阅 [格式](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/formats/overview/) 页面以获取更多关于格式的细节和相关配置项。 注意：该配置项和 'value.format' 二者必需其一。 |
| key.format | 可选 | (none) | String | 用来序列化和反序列化 Kafka 消息键（Key）的格式。 请参阅 格式 页面以获取更多关于格式的细节和相关配置项。 注意：如果定义了键格式，则配置项 'key.fields' 也是必需的。 否则 Kafka 记录将使用空值作为键。 |
| key.fields | 可选 | [] | `List<String>` | 表结构中用来配置消息键（Key）格式数据类型的字段列表。默认情况下该列表为空，因此消息键没有定义。 列表格式为 'field1;field2'。 |
| key.fields-prefix | 可选 | (none) | String | 为所有消息键（Key）格式字段指定自定义前缀，以避免与消息体（Value）格式字段重名。默认情况下前缀为空。 如果定义了前缀，表结构和配置项 'key.fields' 都需要使用带前缀的名称。 当构建消息键格式字段时，前缀会被移除，消息键格式将会使用无前缀的名称。 请注意该配置项要求必须将 'value.fields-include' 配置为 'EXCEPT_KEY'。 |
| value.format | 必选 for upsert Kafka | (none) | String | 用于对 Kafka 消息中 value 部分序列化和反序列化的格式。支持的格式包括 'csv'、'json'、'avro'。请参考[格式](https://nightlies.apache.org/flink/flink-docs-release-1.13/zh/docs/connectors/table/formats/overview/) 页面以获取更多详细信息和格式参数。 |
| value.fields-include | 可选 | ALL | Enum Possible values: [ALL, EXCEPT_KEY]| 控制哪些字段应该出现在 value 中。可取值：<br/> ALL：消息的 value 部分将包含 schema 中所有的字段，包括定义为主键的字段。<br/> EXCEPT_KEY：记录的 value 部分包含 schema 的所有字段，定义为主键的字段除外。 |
| sink.partitioner | 可选 | 'default' | String | Flink partition 到 Kafka partition 的分区映射关系，可选值有：<br/>default：使用 Kafka 默认的分区器对消息进行分区。<br/>fixed：每个 Flink partition 最终对应最多一个 Kafka partition。<br/>round-robin：Flink partition 按轮循（round-robin）的模式对应到 Kafka partition。只有当未指定消息的消息键时生效。<br/>自定义 FlinkKafkaPartitioner 的子类：例如 'org.mycompany.MyPartitioner'。请参阅 [Sink 分区](https://nightlies.apache.org/flink/flink-docs-release-1.13/zh/docs/connectors/table/kafka/#sink-%E5%88%86%E5%8C%BA) 以获取更多细节。 |
| sink.semantic | 可选 | at-least-once | String | 定义 Kafka sink 的语义。有效值为 'at-least-once'，'exactly-once' 和 'none'。请参阅 [一致性保证](https://nightlies.apache.org/flink/flink-docs-release-1.13/zh/docs/connectors/table/kafka/#%E4%B8%80%E8%87%B4%E6%80%A7%E4%BF%9D%E8%AF%81) 以获取更多细节。 |
| sink.parallelism | 可选 | (none) | Integer | 定义 Kafka sink 算子的并行度。默认情况下，并行度由框架定义为与上游串联的算子相同。 |

## 可用的元数据字段

支持为格式 `canal-json-inlong`写元数据。

参考 [Kafka Extract Node](../extract_node/kafka.md) 关于元数据的列表。

## 数据类型映射

Kafka 将消息键值以二进制进行存储，因此 Kafka 并不存在 schema 或数据类型。Kafka 消息使用格式配置进行序列化和反序列化，例如 csv，json，avro。 因此，数据类型映射取决于使用的格式。请参阅 [格式](https://nightlies.apache.org/flink/flink-docs-release-1.13/zh/docs/connectors/table/formats/overview/) 页面以获取更多细节。
