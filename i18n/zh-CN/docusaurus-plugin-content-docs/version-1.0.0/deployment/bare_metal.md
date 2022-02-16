---
title: Bare Metal 部署
sidebar_position: 4
---

## 环境要求
- ZooKeeper 3.5+
- MySQL 5.7+
- Flink 1.13.5
- Apache Pulsar 2.6+ (可选)

## 安装InLong
| 顺序 |  组件 | 第三方依赖 | 部署指引                                                                  | 说明 |
|  ----  | ----  | ----  |-----------------------------------------------------------------------| ---- |
| 1 | inlong-tubemq-server | ZooKeeper | [InLong TubeMQ Server](modules/tubemq/quick_start.md)                 | 若使用Apache Pulsar，可不安装该组件 |
| 2 | inlong-tubemq-manager | MySQL | [InLong TubeMQ Manager](modules/tubemq/tubemq-manager/quick_start.md) | 若使用Apache Pulsar，可不安装该组件 |
| 3 | inlong-audit | MySQL 或者 Elasticsearch | [InLong Audit](modules/audit/quick_start.md)                          |  |
| 4 | inlong-manager | MySQL, ZooKeeper  | [InLong Manager](modules/manager/quick_start.md)                      |  |
| 5 | inlong-dashboard | Nginx 或者 Docker | [InLong Dashboard](modules/dashboard/quick_start.md)                    | |
| 6 | inlong-dataproxy | 无 | [InLong DataProxy](modules/dataproxy/quick_start.md)                  |  |
| 7 | inlong-sort | ZooKeeper, Flink | [InLong Sort](modules/sort/quick_start.md)                            |  |
| 8 | inlong-agent | 无 | [InLong Agent](modules/agent/quick_start.md)                          |  |
## 创建数据流
InLong 集群部署成功后，你可以参考[用户手册](user_guide/user_manual.md)创建一个数据流开始使用。

