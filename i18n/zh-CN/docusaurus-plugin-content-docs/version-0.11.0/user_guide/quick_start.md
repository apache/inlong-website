---
title: 快速开始
sidebar_position: 1
---

本节包含快速入门指南，可帮助您开始使用 Apache InLong。

## 整体架构
<img src="../../../img/inlong-structure-zh.png" align="center" alt="Apache InLong"/>

[Apache InLong](https://inlong.apache.org)(incubating) 整体架构如上，为一站式海量数据集成框架，提供自动化、安全、分布式、高效的数据发布和订阅能力，帮助您轻松构建基于流的数据应用程序。

InLong(应龙)是中国神话故事里的神兽，可以引流入海，借喻InLong可用于流式数据上报功能。

InLong(应龙) 最初建于腾讯，服务线上业务8年多，支持大数据场景下的海量数据（每天40万亿条数据规模以上）报表服务。整个平台集成了数据采集、汇聚、缓存、分拣和管理模块等共5个模块，通过这个系统，业务只需要提供数据源、数据服务质量、数据落地集群和数据落地格式，即数据可以源源不断地将数据从源集群推送到目标集群，极大满足了业务大数据场景下的数据上报服务需求。

## 编译
- Java [JDK 8](https://adoptopenjdk.net/?variant=openjdk8)
- Maven 3.6.1+

```
$ mvn clean install -DskipTests
```
(可选) 使用docker编译:
```
$ docker pull maven:3.6-openjdk-8
$ docker run -v `pwd`:/inlong  -w /inlong maven:3.6-openjdk-8 mvn clean install -DskipTests
```
若编译成功，在`inlong-distribution/target`下会找到`tar.gz`格式的安装包，解压安装目录，包括各个模块安装文件：
```
inlong-agent
inlong-dataproxy
inlong-dataproxy-sdk
inlong-manager-web
inlong-sort
inlong-tubemq-manager
inlong-tubemq-server
inlong-website
```

## 环境要求
- ZooKeeper 3.5+
- Hadoop 2.10.x 和 Hive 2.3.x
- MySQL 5.7+
- Flink 1.9.x

## 部署InLong TubeMQ Server
[部署InLong TubeMQ Server](modules/tubemq/quick_start.md)

## 部署InLong TubeMQ Manager
[部署InLong TubeMQ Manager](modules/tubemq/tubemq-manager/quick_start.md)

## 部署InLong Manager
[部署InLong Manager](modules/manager/quick_start.md)

## 部署InLong WebSite
[部署InLong WebSite](modules/website/quick_start.md)

## 部署InLong Sort
[部署InLong Sort](modules/sort/quick_start.md)

## 部署InLong DataProxy
[部署InLong DataProxy](modules/dataproxy/quick_start.md)

## 部署InLong DataProxy-SDK
[部署InLong DataProxy](modules/dataproxy-sdk/quick_start.md)

## 部署InLong Agent
[部署InLong Agent](modules/agent/quick_start.md)

## 业务配置
[配置新业务](user_guide/user_manual.md)

## 数据上报验证
到这里，您就可以通过文件Agent采集数据并在指定的Hive表中验证接收到的数据是否与发送的数据一致。

