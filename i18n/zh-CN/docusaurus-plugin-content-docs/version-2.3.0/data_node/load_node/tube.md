---
title: TubeMQ
sidebar_position: 20
---

import {siteVariables} from '../../version';

## 概述

[Apache InLong TubeMQ](https://inlong.apache.org/docs/modules/tubemq/overview) 是一个分布式、开源的
pub-sub 消息传递和流平台, 适合于万亿规模数据。

## 版本

| Load 节点             | 版本                                                                                  |
|---------------------|-------------------------------------------------------------------------------------|
| [TubeMQ](./tube.md) | [TubeMQ](https://inlong.apache.org/docs/next/modules/tubemq/overview): >=0.1.0<br/> |

## 依赖项

为了设置 TubeMQ load 节点，下面提供了使用构建自动化工具（例如 Maven 或 SBT）和带有 Sort Connectors
JAR 包的 SQL 客户端的两个项目的依赖关系信息。

### Maven 依赖

```xml
<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-tubemq</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
```

## 如何创建 TubeMQ Load 节点

### SQL API 的使用

使用 `Flink SQL Cli` :

```sql
-- Create a TubeMQ table 'tube_load_node' in Flink SQL Cli
Flink SQL>
CREATE TABLE tube_load_node
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

-- Read data from tube_load_node
Flink SQL>
SELECT *
FROM tube_load_node;
```

### InLong Dashboard 方式

:::note
将在未来支持此功能
:::

### InLong Manager Client 方式

:::note
将在未来支持此功能
:::

## TubeMQ Load 节点参数信息

| 参数        | 是否必须     | 默认值    | 数据类型   | 描述                                                                                                                                                                                 |
|-----------|----------|--------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| connector | required | tubemq | String | 设置连接器类型 `tubemq`                                                                                                                                                                   |
| topic     | required | (none) | String | 设置 Load 的 topic                                                                                                                                                                    |
| masterRpc | required | (none) | String | 设置 TubeMQ master service 地址                                                                                                                                                        |
| format    | required | (none) | String | TubeMQ 数据类型, 支持 JSON, Avro, etc. For more information, see the [Flink format](https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/connectors/table/formats/overview/). |
| groupId   | required | (none) | String | TubeMQ 消费组                                                                                                                                                                         |

