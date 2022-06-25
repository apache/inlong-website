---
title: Pulsar
sidebar_position: 9
---

import {siteVariables} from '../../version';

## 概述

[Apache Pulsar](https://pulsar.apache.org/)是一个分布式、开源的 pub-sub 消息传递和流平台，用于实时工作负载，每天管理数千亿个事件。

## 版本

| 抽取节点              | 版本                                                      |
| --------------------- | --------------------------------------------------------- |
| [Pulsar](./pulsar.md) | [Pulsar](https://pulsar.apache.org/docs/next/)：> = 2.8.x |

## 依赖项

<pre><code parentName="pre">
{`<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-pulsar</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
`}
</code></pre>

## 用法

### SQL API 用法

Step.1 准备好 sql 客户端

[SQL Client](https://ci.apache.org/projects/flink/flink-docs-release-1.12/dev/table/sqlClient.html)用于编写用于在 Pulsar 中操作数据的 SQL 查询，您可以使用添加`-addclasspath`包的选项`sort-connector-pulsar-{{INLONG_VERSION}}.jar`。

**例子**

```
./bin/sql-client.sh embedded --jar sort-connector-pulsar_{{INLONG_VERSION}}.jar
```

> 注意如果你把我们连接器的JAR包放在下面`$FLINK_HOME/lib`，不用`--jar`再用指定连接器的包了。

Step.2 从Pulsar读取数据

```
CREATE TABLE pulsar (
  `physical_1` STRING,
  `physical_2` INT,
  `eventTime` TIMESTAMP(3) METADATA,
  `properties` MAP<STRING, STRING> METADATA ,
  `topic` STRING METADATA VIRTUAL,
  `sequenceId` BIGINT METADATA VIRTUAL,
  `key` STRING ,
  `physical_3` BOOLEAN
) WITH (
  'connector' = 'pulsar',
  'topic' = 'persistent://public/default/topic82547611',
  'key.format' = 'raw',
  'key.fields' = 'key',
  'value.format' = 'avro',
  'service-url' = 'pulsar://localhost:6650',
  'admin-url' = 'http://localhost:8080',
  'scan.startup.mode' = 'earliest' 
)

INSERT INTO `sink_table` 
    SELECT 
    `physical_1` AS `physical_1`,
    `physical_2` AS `physical_2`
    FROM `pulsar`
INSERT INTO pulsar 
VALUES
 ('data 1', 1, TIMESTAMP '2020-03-08 13:12:11.123', MAP['k11', 'v11', 'k12', 'v12'], 'key1', TRUE),
 ('data 2', 2, TIMESTAMP '2020-03-09 13:12:11.123', MAP['k21', 'v21', 'k22', 'v22'], 'key2', FALSE),
 ('data 3', 3, TIMESTAMP '2020-03-10 13:12:11.123', MAP['k31', 'v31', 'k32', 'v32'], 'key3', TRUE)
```

### Inlong Dashboard 用法

TODO

### InLong Manager Client 方式

TODO

## Pulsar Extract 节点参数

| Parameter                     | Required | Default value | Type   | Description                                                  |
| ----------------------------- | -------- | ------------- | ------ | ------------------------------------------------------------ |
| connector                     | 必需     | (none)        | String | 设置连接器类型。可用的选项是`pulsar-inlong`。                |
| topic                         | 可选     | (none)        | String | 设置输入或输出主题，多个和连接主题使用半逗号。选择一个主题模式。Set the input or output topic, use half comma for multiple and concatenate topics. Choose one with the topic-pattern. |
| topic-pattern                 | 可选     | (none)        | String | 使用正则获取匹配的主题。                                     |
| service-url                   | 必需     | (none)        | String | 设置 Pulsar 代理服务地址。                                   |
| admin-url                     | 必需     | (none)        | String | 设置 Pulsar 管理服务地址。                                   |
| scan.startup.mode             | 可选     | latest        | String | 配置 Source 的启动模式。可用选项为`earliest`、`latest`、`external-subscription`和`specific-offsets`。 |
| scan.startup.specific-offsets | 可选     | (none)        | String | 指定参数时需要该`specific-offsets`参数。                     |
| scan.startup.sub-name         | 可选     | (none)        | String | 指定参数时需要该`external-subscription`参数。                |
| discovery topic interval      | 可选     | (none)        | Long   | 设置分区发现的时间间隔，单位为毫秒。                         |
| sink.message-router           | 可选     | key-hash      | String | 设置将消息写入 Pulsar 分区的路由方式。可用选项为`key-hash`、`round-robin`和`custom MessageRouter`。 |
| sink.semantic                 | 可选     | at-least-once | String | Sink 写入消息的保证级别。可用选项为`at-least-once`、`exactly-once`和`none`。 |
| properties                    | 可选     | empty         | Map    | 设置 Pulsar 的可选配置，格式为`properties.key='value'`. 有关详细信息，请参阅[配置参数](https://github.com/streamnative/pulsar-flink#configuration-parameters)。 |
| key.format                    | 可选     | (none)        | String | 为 Pulsar 消息设置基于键的序列化格式。可用选项有`No format`、`optional raw`、`Avro`、`JSON`等。 |
| key.fields                    | 可选     | (none)        | String | 序列化Key时要使用的SQL定义字段，多个半逗号`,`连接。          |
| key.fields-prefix             | 可选     | (none)        | String | 为 key 格式的所有字段定义自定义前缀，以避免与 value 格式的字段名称冲突。默认情况下，前缀为空。如果定义了自定义前缀，`key.fields`则使用表架构和。 |
| format or value.format        | 必需     | (none)        | String | 使用前缀设置名称。当以键格式构造数据类型时，前缀被移除，并且在键格式中使用非前缀名称。Pulsar 消息值序列化格式，支持 JSON、Avro 等。更多信息请参见 Flink 格式。 |
| value.fields-include          | 可选     | ALL           | Enum   | Pulsar 消息值包含字段策略、可选的 ALL 和 EXCEPT_KEY。        |

## 可用元数据

METADATA 标志用于读取和写入 Pulsar 消息中的元数据。支持列表如下。

> 注意 R/W 列定义元数据字段是否可读 (R) 和/或可写 (W)。只读列必须声明为 VIRTUAL 以在 INSERT INTO 操作期间排除它们。

| 关键字      | 数据类型                                   | 描述                    | 读/写 |
| ----------- | ------------------------------------------ | ----------------------- | ----- |
| topic       | STRING NOT NULL                            | Pulsar 消息的主题名称 | R     |
| messageId   | BYTES NOT NULL                             | Pulsar 消息的消息 ID  | R     |
| sequenceId  | BIGINT NOT NULL                            | Pulsar 消息的序列 ID  | R     |
| publishTime | TIMESTAMP(3) WITH LOCAL TIME ZONE NOT NULL | Pulsar 消息的发布时间 | R     |
| eventTime   | TIMESTAMP(3) WITH LOCAL TIME ZONE NOT NULL | Pulsar 消息的生成时间 | R/W   |
| properties  | MAP<STRING, STRING> NOT NULL               | Pulsar 消息的扩展信息 | R/W   |

## 数据类型映射

Pulsar 将消息键和值存储为字节，因此 Pulsar 没有 schema 或数据类型。Pulsar 消息按格式进行反序列化和序列化，例如 csv、json、avro。因此，数据类型映射由特定格式确定。有关格式详细信息，请参阅[格式页面。](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/formats/overview/)