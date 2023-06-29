---
title: 总览
sidebar_position: 1
---

## InLong Manager 介绍

- 目标定位：Apache InLong 定位为一站式海量数据集成框架，提供大数据从采集 -> 传输 -> 分拣 -> 落地的技术能力。

- 平台价值：用户可以通过平台中的管理、配置平台完成任务的配置、管理以及指标的监控，同时通过平台提供的插件化扩展能力，按需实现自定义的扩展。

- InLong Manager 是 Apache InLong 项目的统一管理平台，平台提供各基础配置（如数据流配置、消费配置、集群管理等）的维护入口，用户可创建数据采集任务、查看指标数据等。 


## 模块职责

| 模块 | 职责 |
| :-----| :---- |
| manager-common | 模块公共代码，如异常定义、工具类、枚举等 |
| manager-dao | 数据库操作 |
| manager-service | 业务逻辑层 |
| manager-workflow | 工作流服务 |
| manager-plugins | Sort 插件服务 |
| manager-web | 前端交互接口层 |
| manager-client | 客户端服务 |
| manager-client-examples | 客户端使用示例 |
| manager-client-tools | 客户端命令行工具 |

## 系统使用流程

![](img/interactive.png)

## 数据模型
![](img/data_model.png)
目前 manager 主要由以下几个组件构成:
- InlongGroup: 数据流组，包含多个数据流，一个 Group 代表一个数据业务单元。
- InlongStream: 数据流，一个数据流有具体的数据源、数据格式和数据流向。
- StreamSource: 数据来源，包括文件采集、MYSQLBinlog 采集等。
- StreamSink: 数据目标，数据最后流入的地点，包括 Hive、Clickhouse 等。
- DataNode: 数据节点，包括数据采集地址、用户名、密码等信息。
- InlongCluster: 集群，包括 pulsar、tube、kafka 等集群信息。
