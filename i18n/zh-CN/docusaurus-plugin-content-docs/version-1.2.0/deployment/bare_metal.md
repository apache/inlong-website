---
title: Bare Metal 部署
sidebar_position: 4
---

## 环境要求
- MySQL 5.7+
- Flink 1.13.5

## 准备消息队列
InLong 当前支持以下消息队列，根据使用情况**选择其一**即可。
- [InLong TubeMQ](modules/tubemq/quick_start.md)
- [Apache Pulsar 2.8.x](https://pulsar.apache.org/docs/en/2.8.1/standalone/)

## 下载安装包
可以从 [下载页面](https://inlong.apache.org/download) 获取二进制包，或参考 [如何编译](quick_start/how_to_build.md) 编译需要的版本。

## 安装
| 顺序  |  组件 | 第三方依赖 | 部署指引                                                                  | 说明 |
|-----| ----  | ----  |-----------------------------------------------------------------------| ---- |
| 1   | inlong-audit | MySQL 或者 Elasticsearch | [InLong Audit](modules/audit/quick_start.md)                          |  |
| 2   | inlong-manager | MySQL  | [InLong Manager](modules/manager/quick_start.md)                      |  |
| 3   | inlong-dataproxy | 无 | [InLong DataProxy](modules/dataproxy/quick_start.md)                  |  |
| 4   | inlong-agent | 无 | [InLong Agent](modules/agent/quick_start.md)                          |  |
| 5   | inlong-dashboard | Nginx 或者 Docker | [InLong Dashboard](modules/dashboard/quick_start.md)                    | |

## 创建数据流
InLong 集群部署成功后，你可以参考[Dashboard 使用指引](user_guide/dashboard_usage.md)创建一个数据流开始使用。

