---
title: Bare Metal
sidebar_position: 4
---

## Environment Requirements
- ZooKeeper 3.5+
- MySQL 5.7+
- Flink 1.13.5
- Apache Pulsar 2.6+ (Optional)

## Deploy InLong
| order |  component | dependencies | deploy guide                                                          | description |
|  ----  | ----  | ----  |-----------------------------------------------------------------------| ---- |
| 1 | inlong-tubemq-server | ZooKeeper | [InLong TubeMQ Server](modules/tubemq/quick_start.md)                 | If you use Apache Pulsar, you don’t need to install this component. |
| 2 | inlong-tubemq-manager | MySQL | [InLong TubeMQ Manager](modules/tubemq/tubemq-manager/quick_start.md) | If you use Apache Pulsar, you don’t need to install this component. |
| 3 | inlong-audit | MySQL or Elasticsearch | [InLong Audit](modules/audit/quick_start.md)                          |  |
| 4 | inlong-manager | MySQL, ZooKeeper  | [InLong Manager](modules/manager/quick_start.md)                      |  |
| 5 | inlong-dashboard | Nginx or Docker | [InLong Dashboard](modules/dashboard/quick_start.md)                  | |
| 6 | inlong-dataproxy |  | [InLong DataProxy](modules/dataproxy/quick_start.md)                  |  |
| 7 | inlong-sort | ZooKeeper, Flink | [InLong Sort](modules/sort/quick_start.md)                            |  |
| 8 | inlong-agent |  | [InLong Agent](modules/agent/quick_start.md)                          |  |

## Create Data Stream
After the InLong cluster deployed successfully, you can create a data stream refer to the [user manual](user_guide/user_manual.md) to start using.