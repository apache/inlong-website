---
title: Bare Metal 部署
sidebar_position: 4
---

## 环境要求
- MySQL 5.7+ or PostgreSQL
- [Apache Flink 1.13.x](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/try-flink/local_installation/) 或 [1.15.x](https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/try-flink/local_installation/)

## 准备消息队列
InLong 当前支持以下消息队列，根据使用情况**选择其一**即可。
- [InLong TubeMQ](modules/tubemq/quick_start.md)
- [Apache Pulsar 2.8.x](https://pulsar.apache.org/docs/en/2.8.1/standalone/)

## 下载安装包
可以从 [下载页面](https://inlong.apache.org/download) 获取二进制包，或参考 [如何编译](../development/how_to_build.md) 编译需要的版本。

## 标准架构
标准架构下，你需要部署所有 InLong 组件，同时支持`数据接入`、`数据同步`和`数据订阅`。

### 安装
| 顺序     | 组件                        | 第三方依赖                         | 部署指引                                                                                                                                              | 说明  |
|--------|---------------------------|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|-----|
| 1      | inlong-audit              | MySQL 或者 StarRocks        | [InLong Audit](modules/audit/deployment.md)                                                                                                       |     |
| 2      | inlong-manager            | MySQL                         | [InLong Manager](modules/manager/deployment.md)                                                                                                  |     |
| 3      | inlong-dataproxy          | 无                             | [InLong DataProxy](modules/dataproxy/deployment.md)                                                                                              |     |
| 4      | inlong-agent              | 无                             | [InLong Agent](modules/agent/deployment.md)                                                                                                      |     |
| 5      | inlong-dashboard          | Nginx 或者 Docker               | [InLong Dashboard](modules/dashboard/deployment.md)                                                                                              |     |
| 6      | inlong-sort-connectors    | Apache Flink 1.13.x 或者 1.15.x | 解压 [apache-inlong-[version]-sort-connectors.tar.gz](https://inlong.apache.org/zh-CN/download/) 然后将 connectors jar 放到 `inlong-sort/connectors` 目录。 |     |

### 创建数据流
InLong 集群部署成功后，你可以参考[Dashboard 使用指引](user_guide/dashboard_usage.md)创建一个数据流开始使用。

## 轻量化架构
### 安装
轻量化架构只支持`数据同步`，需要部署 InLong Sort 组件, 拥有简单、灵活，适合小规模数据的特点。你可以参考[部署指引](modules/sort/deployment.md)进行安装和使用
