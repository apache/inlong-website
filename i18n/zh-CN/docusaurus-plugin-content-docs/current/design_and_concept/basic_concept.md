---
title: 基本概念
sidebar_position: 1
---

| Name        | Description                                                  | Other                                         |
|-------------|--------------------------------------------------------------|-----------------------------------------------|
| Standard    | 标准架构，包含 InLong Agent、Manager、MQ、Sort、Dashboard 等所有 InLong 组件 | 适合海量数据、大规模生产环境                                |
| Lightweight | 轻量化架构，只包含 InLong Sort 一个组件，也可以搭配 Manager，Dashboard 一起使用      | 轻量化架构简单、灵活，适合小规模数据                            |
| Group       | 数据流组，包含多个数据流，一个 Group 代表一个数据业务单元                             | Group 有 ID、Name 等属性                           |
| Stream      | 数据流，一个数据流有具体的数据源、数据格式和数据流向                                   | Stream 有 ID、Name、数据字段等属性                      |
| Node        | 数据节点，包括 `Extract Node` 和 `Load Node`，分别代表数据源类型和数据流向目标类型      |                                               |
| InLongMsg   | InLong 数据格式，如果从消息队列中直接消费，需要先进行 `InLongMsg` 解析                |                                               |
| Cluster     | 集群，每个组件都可以构成单一集群。                                            | 包含集群名、标签，每个组件必要信息等                            |
| Tag         | 标签，不同组件的集群可以使用相同标签，代表一组数据流执行单元                               | 目前标签只适用于集群                                    |
| Agent       | 标准架构使用 Agent 进行数据采集，Agent 代表不同类型的采集能力                        | 包含文件 Agent、SQL Agent、Binlog Agent 等           |
| DataProxy   | 将接收到的数据转发到不同的消息队列                                            | 支持数据发送阻塞和落盘重发                                 |
| Sort        | 数据流分拣                                                        | 主要有基于 Flink 的 sort-flink，sort-standalone 本地分拣 |
| TubeMQ      | InLong 自带的消息队列服务                                             | 也可以叫 Tube，拥有低成本、高性能特性                         |
| Pulsar      | 即 [Apache Pulsar](https://pulsar.apache.org/)，高性能、高一致性消息队列服务 |                                               |