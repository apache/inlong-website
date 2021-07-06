---
title: 入门 - Apache InLong
---

本节包含快速入门指南，可帮助您开始使用 Apache InLong。

# 整体架构
<img src="https://github.com/apache/incubator-inlong-website/blob/master/img/inlong_architecture.png" align="center" alt="Apache InLong"/>
[Apache InLong](https://inlong.apache.org)(incubating) 整体架构如上，该组件是一站式数据流媒体平台，提供自动化、安全、分布式、高效的数据发布和订阅能力，帮助您轻松构建基于流的数据应用程序。

InLong(应龙)最初建于腾讯，服务线上业务8年多，支持大数据场景下的海量数据（每天40万亿条数据规模以上）报表服务。整个平台集成了数据采集、汇聚、缓存、分拣和管理模块等共5个模块，通过这个系统，业务只需要提供数据源、数据服务质量、数据落地集群和数据落地格式，即数据可以源源不断地将数据从源集群推送到目标集群，极大满足了业务大数据场景下的数据上报服务需求。


# 如何使用
通过上图的InLong整体架构图，我们可以看到InLong包含了完整的数据上报组件，我们需要逐个模块的编译部署

## 编译部署Manager
[如何编译部署Manager](modules/manager/quick_start.md)

## 编译部署Manager的web
[如何编译部署Manager Web](modules/console/quick_start.md)

## 编译部署TubeMQ
[如何编译部署TubeMQ](modules/tubemq/quick_start.md)

## 编译部署TubeMQ Manager
[如何编译部署TubeMQ Manager](modules/tubemq/tubemq-manager/quick_start.md)

## 编译部署Sort
[如何编译部署Sort](modules/sort/quick_start.md)

## 编译部署DataProxy
[如何编译部署DataProxy](modules/dataproxy/quick_start.md)

## 编译部署Agent
[如何编译部署Agent](modules/agent/quick_start.md)

## 业务配置
[如何配置新业务](modules/manager/user_manual.md)

## 数据上报验证
到这里，您就可以通过文件Agent采集数据并在指定的Hive表中验证接收到的数据是否与发送的数据一致。

