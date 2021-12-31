---
title: 基本概念
sidebar_position: 1
---

| Name |  Description | Other |
|  ----  | ----  | ----  |
| Group | 数据流组，包含多个数据流，一个Group 代表一个数据接入 |  Group 有ID、Name 等属性  |
| Stream | 数据流，一个数据流有具体的流向 |  Stream 有ID、Name、数据字段等属性  |
| Agent | 代表各种采集能力 | 包含文件Agent、SQL Agent、Binlog Agent 等 |
| DataProxy | 将接收到的数据转发到不同的消息队列 | 支持数据发送阻塞和落盘重发 |
| Sort | 数据流分拣 | 主要有基于Flink的sort-flink，sort-standalone 本地分拣 |
| TubeMQ | InLong自带的消息队列服务 | 也可以叫Tube，拥有低成本、高性能特性 |
| Pulsar | 即[Apache Pulsar](https://pulsar.apache.org/), 高性能、高一致性消息队列服务 |
| Hive | 即[Apache Hive](https://hive.apache.org/)，一个建立在Hadoop架构之上的数据仓库 |
| ClickHouse | [ClickHouse](https://clickhouse.com/)，高性能列式OLAP 数据库 | |