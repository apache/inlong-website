---
title: TubeMQ
sidebar_position: 11
---

import {siteVariables} from '../../version';

## 概述

[Apache InLong TubeMQ](https://inlong.apache.org/docs/modules/tubemq/overview) 是一个分布式、开源的
pub-sub 消息传递和流平台, 适合于万亿规模数据。

## 版本

| 抽取节点                | 版本                                                                                  |
|---------------------|-------------------------------------------------------------------------------------|
| [TubeMQ](./tube.md) | [TubeMQ](https://inlong.apache.org/docs/next/modules/tubemq/overview): >=0.1.0<br/> |

## 依赖项

为了设置 TubeMQ Extract 节点，下面提供了使用构建自动化工具（例如 Maven 或 SBT）和带有 Sort Connectors
JAR 包的 SQL 客户端的两个项目的依赖关系信息。

### Maven 依赖

```xml
<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-tubemq</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
```

## 如何创建TubeMQ抽取节点

### SQL API 的使用

使用 `Flink SQL Cli` :

```sql
-- Create a TubeMQ table 'tube_extract_node' in Flink SQL Cli
Flink SQL>
CREATE TABLE tube_extract_node
(
    id     INT,
    name   STRING,
    age    INT,
    salary FLOAT
) WITH (
      'connector' = 'tubemq',
      'topic' = 'topicName',
      'master.rpc' = 'rpcUrl', -- 127.0.0.1:8715
      'format' = 'json',
      'group.name' = 'groupName');

-- Read data from tube_extract_node
Flink SQL>
SELECT *
FROM tube_extract_node;
```

### InLong Dashboard 方式

:::note
将在未来支持此功能
:::

### InLong Manager Client 方式

:::note
将在未来支持此功能
:::

## TubeMQ 抽取节点参数信息

| 参数        | 是否必须     | 默认值    | 数据类型   | 描述                                                                                                                                                                                 |
|-----------|----------|--------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| connector | required | tubemq | String | 设置连接器类型 `tubemq`                                                                                                                                                                   |
| topic     | required | (none) | String | 设置抽取的topic                                                                                                                                                                         |
| masterRpc | required | (none) | String | 设置TubeMQ master service 地址                                                                                                                                                         |
| format    | required | (none) | String | TubeMQ 数据类型, 支持 JSON, Avro, etc. For more information, see the [Flink format](https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/connectors/table/formats/overview/). |
| groupId   | required | (none) | String | TubeMQ 消费组                                                                                                                                                                         |

## 可用元数据

METADATA 标志用于读取和写入 Tube 消息中的元数据。支持列表如下。

> 注意 R/W 列定义元数据字段是否可读 (R) 和/或可写 (W)。只读列必须声明为 VIRTUAL 以在 INSERT INTO
> 操作期间排除它们。

| 关键字          | 数据类型            | 描述           | 读/写 |
|--------------|-----------------|--------------|-----|
| topic        | STRING NOT NULL | Tube 消息的主题名称 | R   |
| consume_time | BIGINT          | Tube 消息的消费时间 | R   |

## 数据类型映射

Tube 将消息键和值存储为字节，因此 Tube 没有 schema 或数据类型。Tube 消息按格式进行反序列化和序列化，例如
csv、json、avro。因此，数据类型映射由特定格式确定。有关格式详细信息，请参阅[格式页面。](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/formats/overview/)