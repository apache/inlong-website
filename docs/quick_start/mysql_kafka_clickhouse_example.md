---
title: MySQL -> Kafka -> ClickHouse Example
sidebar_position: 5
---

Here we use an example to introduce how to use Apache InLong creating MySQL -> Kafka -> ClickHouse data ingestion.

## Deployment
### Install InLong

Before we begin, we need to install InLong. Here we provide two ways:
1. Install InLong with Docker by according to the [instructions here](deployment/docker.md).(Recommanded)
2. Install InLong binary according to the [instructions here](deployment/bare_metal.md).

### Install ClickHouse
```shell
docker run -d --rm --net=host --name clickhouse -e CLICKHOUSE_USER=admin -e CLICKHOUSE_PASSWORD=inlong -e CLICKHOUSE_DEFAULT_ACCESS_MANAGEMENT=1 clickhouse/clickhouse-server:22.8
```

### Install Kafka
```shell
# Prepare zookeeper for Kafka
docker run -d --name zookeeper -p 2181:2181 -t wurstmeister/zookeeper
# Install Kafka 
docker run -d --name kafka -p 9092:9092 -e KAFKA_BROKER_ID=0 -e KAFKA_ZOOKEEPER_CONNECT=zookeeper:2181 --link zookeeper -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://kafka:9092 -e KAFKA_LISTENERS=PLAINTEXT://0.0.0.0:9092 -t wurstmeister/kafka
```

## Cluster Initialize
When all containers are successfully started, you can access the Inlong dashboard address http://localhost, and use the following default account to log in.
```
User: admin
Password: inlong
```

### Create Cluster Tag
Click [Clusters]->[ClusterTags]->[Create] on the page to specify the cluster label name and person in charge.
![Create Cluster label](img/clickhouse/create_cluster_label.png)

:::caution
Since each component reports the ClusterTags as `default_cluster` by default, do not use other names.
:::

### Register Kafka Cluster
Click [Clusters]->[Create] on the page to register Kafka Cluster.
![Create kafka cluster](img/clickhouse/kafka_cluster.png)

### Register Clickhouse DataNodes
Click [DataNodes]->[Create] on the page to register ClickHouse DataNodes.
![Create kafka cluster](img/clickhouse/datanode.png)

## Create Task
### Create Data Streams Group
Click [Ingestion]->[Create], input ID and select Kafka MQ Type.
![Create datastream](img/clickhouse/create_ingestion.png)

### Create Data Stream
Click [Next]->[Create], config data stream.
![Create datastream](img/clickhouse/data_stream_config.png)

### Create Data Source
Click [Sources create]->[MySQL], config data source informations.
![Create datastream](img/clickhouse/create_data_source.png)

### Create Data Sink
Click [Sinks create]->[ClickHouse], input Name, DbName, TableName and select created ck DataNode and so on, then click [save].
![Create data object](img/clickhouse/create_sink.png)

### Approve Data Stream
Click [Approval]->[MyApproval]->[Detail]->[Select Cluster tag]->[Ok].
![clickhouse](img/clickhouse/approval.png)

Back to [Ingestion] page, wait for [configuration success].
![clickhouse](img/clickhouse/result.png)

## Test Data
### Send Data
![clickhouse](img/clickhouse/send_data.png)
Add 1001 datas to MySQL.

### Verify Data
Check data in [Audit] page.
![clickhouse](img/clickhouse/data_page.png)

then enter ClickHouse container, check data in table.
![clickhouse](img/clickhouse/data_table.png)

## Questions
### Task Configuration Failed
Generally, the MQ or Flink group configuration is incorrect. You can view the error information on the page, or enter the Manager container to view detailed logs.