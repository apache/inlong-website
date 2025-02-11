---
title: Standalone
sidebar_position: 1
---

## Environment Requirements
- MySQL 5.7+
- [Apache Flink 1.13.x](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/try-flink/local_installation/) or [1.15.x](https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/try-flink/local_installation/)
- [Docker](https://docs.docker.com/engine/install/) 19.03.1+
- On Linux or Mac

## Prepare Message Queue
InLong Support the following Message Queue services now, **you can choose one of them**.
- [Apache InLong TubeMQ](modules/tubemq/quick_start.md)
- [Apache Pulsar 2.8.x](https://pulsar.apache.org/docs/2.8.x/getting-started-home/)
- [Apache Kafka 2.x](https://kafka.apache.org/quickstart)

## Download the Binary Package
You can get binary package from [Download Page](https://inlong.apache.org/download) ,or you can build the InLong refer to [How to Build](../development/how_to_build.md).

:::note
Extract `apache-inlong-[version]-bin.tar.gz` and `apache-inlong-[version]-sort-connectors.tar.gz`, and make sure the `inlong-sort/connectors/` directory contains `sort-connector-[type]-[version].jar`.
:::

## DB Dependencies
- If the backend database is MySQL, please download [mysql-connector-java-8.0.28.jar](https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.28/mysql-connector-java-8.0.28.jar) and put it into the following directories:
```bash
inlong-agent/lib/
inlong-audit/lib/
inlong-manager/lib/
inlong-tubemq-manager/lib/
```
- If the backend database is PostgreSQL, there's no need for additional dependencies.

## Configure 
In `conf/inlong.conf`, configure the parameters according to the actual situation, mainly include:
```properties
# local IP
local_ip=
# message queue: pulsar or kafka
mq_type=pulsar
# Configure Database, requires MySQL
spring_datasource_hostname=
spring_datasource_port=3306
spring_datasource_username=root
spring_datasource_password=inlong
# the REST server address for Flink
flink_rest_address=
# the REST server Port for Flink
flink_rest_port=8081
```

## Start
```shell
bin/inlong-daemon start standalone
```

## Cluster Initialize
When all containers are successfully started, you can access the Inlong dashboard address `http://localhost`, and use the following default account to log in:
```properties
User: admin
Password: inlong
```

### Create Cluster Tag
Click [Clusters]->[ClusterTags]->[Create] on the page to specify the cluster label name and person in charge:
![](img/create_cluster_tag.png)

:::caution
Since each component reports the ClusterTags as `default_cluster` by default, do not use other names.
:::

### Register Message Queue Cluster

- Option 1 : Apache Pulsar
Click [Clusters]->[Clusters]->[Create] on the page to register Pulsar Cluster:
![](img/create_pulsar_cluster.png)

- Option 2 : Apache Kafka
Click [Clusters]->[Clusters]->[Create] on the page to register Kafka Cluster:
![](img/create_kafka_cluster.png)

:::note
The ClusterTags selects the newly created `default_cluster`, and then configuring the Message Queue cluster info.
:::

## Use
You can refer to [Example](quick_start/data_ingestion/file_pulsar_clickhouse_example.md) to create a Data Stream.
