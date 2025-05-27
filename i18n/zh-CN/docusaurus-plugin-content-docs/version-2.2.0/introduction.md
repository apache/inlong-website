---
title: 简介
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> InLong(应龙)，中国神话故事里的神兽，引流入海，借喻 InLong 系统提供数据集成能力。

## 关于 InLong
[Apache InLong（应龙）](https://inlong.apache.org)是一站式、全场景的海量数据集成框架，同时支持数据接入、数据同步和数据订阅，提供自动、安全、可靠和高性能的数据传输能力，方便业务构建基于流式的数据分析、建模和应用。
InLong 项目原名 TubeMQ ，专注于高性能、低成本的消息队列服务。为了进一步释放 TubeMQ 周边的生态能力，我们将项目升级为 InLong，专注打造一站式、全场景海量数据集成框架。
Apache InLong 依托 10 万亿级别的数据接入和处理能力，整合了数据采集、汇聚、存储、分拣数据处理全流程，拥有简单易用、灵活扩展、稳定可靠等特性。
该项目最初于 2019 年 11 月由腾讯大数据团队捐献到 Apache 孵化器，2022 年 6 月正式毕业成为 Apache 顶级项目。目前 InLong 正广泛应用于广告、支付、社交、游戏、人工智能等各个行业领域，为多领域客户提供高效化便捷化服务。

## 特性
- 简单易用

  基于 SaaS 模式对外服务，用户只需要按主题发布和订阅数据即可完成数据的上报，传输和分发工作

- 稳定可靠

  系统源于实际的线上系统，服务上十万亿级的高性能及上千亿级的高可靠数据数据流量，系统稳定可靠

- 功能完善

  支持各种类型的数据接入方式，多种不同类型的 MQ 集成，以及基于配置规则的实时数据 ETL 和数据分拣落地，并支持以可插拔方式扩展系统能力

- 服务集成

  支持统一的系统监控、告警，以及细粒度的数据指标呈现，对于管道的运行情况，以数据主题为核心的数据运营情况，汇总在统一的数据指标平台，并支持通过业务设置的告警信息进行异常告警提醒

- 灵活扩展

  全链条上的各个模块基于协议以可插拔方式组成服务，业务可根据自身需要进行组件替换和功能扩展

## 架构
<Tabs
defaultValue="standard"
values={[
{label: '标准', value: 'standard'},
{label: '轻量化', value: 'lightweight'},
]}>
<TabItem value="standard"> 标准架构：包含 InLong Agent、Manager、MQ、Sort、Dashboard 等所有 InLong 组件，同时支持`数据接入`、`数据同步`和`数据订阅`。
<img src="/img/inlong-structure-zh.png" align="center" alt="Apache InLong"/>
</TabItem>
<TabItem value="lightweight"> 轻量化架构：只包含 InLong Sort 一个组件，也可以搭配 Manager，Dashboard 一起使用。轻量化架构简单、灵活，支持`数据同步`。
<img src="/img/inlong-structure-light.png" align="center" style={{objectFit: 'cover', height: '460px', width: '860px'}} alt="Apache InLong"/>
</TabItem>
</Tabs>

## 模块
Apache InLong 服务于数据采集到落地的整个生命周期，按数据的不同阶段提供不同的处理模块，主要包括：

- **inlong-agent**，数据采集服务，包括文件采集、DB 采集等。
- **inlong-dataproxy**，一个基于 Flume-ng 的 Proxy 组件，支持数据发送阻塞和落盘重发，拥有将接收到的数据转发到不同 MQ（消息队列）的能力。
- **inlong-tubemq**，腾讯自研的消息队列服务，专注于大数据场景下海量数据的高性能存储和传输，在海量实践和低成本方面有着良好的核心优势。
- **inlong-sort**，对从不同的 MQ 消费到的数据进行 ETL 处理，然后汇聚并写入 Hive、ClickHouse、HBase、Iceberg、Hudi 等存储系统。
- **inlong-manager**，提供完整的数据服务管控能力，包括元数据、任务流、权限，OpenAPI 等。
- **inlong-dashboard**，用于管理数据集成任务的前端页面，简化整个 InLong 管控平台的使用。
- **inlong-audit**，对 InLong 系统的 Agent、DataProxy、Sort 模块的入流量、出流量进行实时审计对账。

## 已支持数据节点（更新中）
| Type         | Name              | Version                      |
|--------------|-------------------|------------------------------|
| Extract Node | Auto Push         | None                         |
|              | Doris             | >= 0.13                      |
|              | File              | None                         |
|              | Iceberg           | 0.12.x                       |
|              | Kafka             | 2.x                          |
|              | MySQL             | 5.6, 5.7, 8.0.x              |
|              | MongoDB           | >= 3.6                       |
|              | MQTT              | >= 3.1                       |
|              | OceanusBase       | None                         |
|              | Oracle            | 11,12,19                     |
|              | PostgreSQL        | 9.6, 10, 11, 12              |
|              | Pulsar            | 2.8.x                        |
|              | Redis             | 2.6.x                        |
|              | SQLServer         | 2012, 2014, 2016, 2017, 2019 |
|              | TubeMQ            | 1.3.0+                       |
| Load Node    | Auto Consumption  | None                         |
|              | ClickHouse        | 20.7+                        |
|              | Doris             | >= 0.13                      |
|              | Elasticsearch     | 6.x, 7.x                     |
|              | Greenplum         | 4.x, 5.x, 6.x                |
|              | HBase             | 2.2.x                        |
|              | HDFS              | 2.x, 3.x                     |
|              | Hive              | 1.x, 2.x, 3.x                |
|              | Hudi              | 0.12.x                       |
|              | Iceberg           | 0.12.x                       |
|              | Kafka             | 2.x                          |
|              | MySQL             | 5.6, 5.7, 8.0.x              |
|              | OceanusBase       | None                         |
|              | Oracle            | 11, 12, 19                   |
|              | PostgreSQL        | 9.6, 10, 11, 12              |
|              | Redis             | 2.6.x                        |
|              | SQLServer         | 2012, 2014, 2016, 2017, 2019 |
|              | StarRocks         | >= 2.0                       |
|              | TDSQL-PostgreSQL  | 10.17                        |


