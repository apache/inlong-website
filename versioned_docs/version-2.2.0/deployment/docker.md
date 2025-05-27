---
title: Docker
sidebar_position: 2
---

Deploy all InLong module by Docker Compose, it's only available for development. 

:::note
Docker Compose deploys all components for Standard Architecture, and choose [Apache Pulsar](https://pulsar.apache.org/docs/concepts-overview) as the default message queue.
:::

## Environment Requirements
- [Docker](https://docs.docker.com/engine/install/) 19.03.1+
- [Docker Compose 2.4+](https://docs.docker.com/compose/install/other/#on-linux)

## Download
You can get `apache-inlong-[version]-bin.tar.gz` from [Download Page](https://inlong.apache.org/download) ,or you can build the InLong refer to [How to Build](../development/how_to_build.md).

## Deploy
Start all components.
```shell
cd docker/docker-compose
docker-compose up -d
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

### Register Pulsar Cluster
Click [Clusters]->[ClusterTags]->[Create] on the page to register Pulsar Cluster:
![](img/create_pulsar_cluster.png)

:::note
The ClusterTags selects the newly created `default_cluster`, the Pulsar cluster deployed by docker:

Service URL is `pulsar://pulsar:6650`, Admin URL is `http://pulsar:8080`.
:::

## Use
You can refer to [Example](quick_start/data_ingestion/file_pulsar_clickhouse_example.md) to create a Data Stream.

## Destroy
```shell
docker-compose down
```
