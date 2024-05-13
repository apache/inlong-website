---
title: Bare Metal
sidebar_position: 4
---

## Environment Requirements
- MySQL 5.7+ or PostgreSQL
- [Apache Flink 1.13.x](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/try-flink/local_installation/) or [1.15.x](https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/try-flink/local_installation/)

## Prepare Message Queue
InLong Support the following Message Queue services now, you can choose one of them.
- [Apache InLong TubeMQ](modules/tubemq/quick_start.md)
- [Apache Pulsar 2.8.x](https://pulsar.apache.org/docs/2.8.x/getting-started-home/)
- [Apache Kafka 2.x](https://kafka.apache.org/quickstart)

## Download the Binary Package
You can get binary package from [Download Page](https://inlong.apache.org/download) ,or you can build the InLong refer to [How to Build](quick_start/how_to_build.md).。

## Standard Architecture
You need deploy all InLong components for Standard Architecture, which supports `Data Ingestion`, `Data Synchronization` and `Data Subscription` at the same time.

### Deploy
| order | component              | dependencies                  | deploy guide                                                                                                                                                 | description |
|-------|------------------------|-------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| 1     | inlong-audit           | MySQL or StarRocks            | [InLong Audit](modules/audit/quick_start.md)                                                                                                                 |             |
| 2     | inlong-manager         | MySQL                         | [InLong Manager](modules/manager/quick_start.md)                                                                                                             |             |
| 3     | inlong-dataproxy       | None                          | [InLong DataProxy](modules/dataproxy/quick_start.md)                                                                                                         |             |
| 4     | inlong-agent           | None                          | [InLong Agent](modules/agent/quick_start.md)                                                                                                                 |             |
| 5     | inlong-dashboard       | Nginx or Docker               | [InLong Dashboard](modules/dashboard/quick_start.md)                                                                                                         |             |
| 6     | inlong-sort-connectors | Apache Flink 1.13.x or 1.15.x | Extract [apache-inlong-[version]-sort-connectors.tar.gz](https://inlong.apache.org/download/) and move connectors jar to `inlong-sort/connectors` directory. |             |

### Create Data Stream
After the InLong cluster deployed successfully, you can create a data stream refer to the [Dashboard Usage Guide](user_guide/dashboard_usage.md) to start using.

## Lightweight Architecture
### Deploy
Lightweight Architecture only support `Data Synchronization`, you need to deploy InLong Sort component, it is simple and flexible, suitable for small-scale data.
You can deploy and use it refer [the deployment guide](modules/sort/quick_start.md).