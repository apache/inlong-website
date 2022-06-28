---
title: Docker
sidebar_position: 2
---

Deploy all InLong module by Docker Compose, it's only available for development. 

*Notice: The default message queue is Apache Pulsar for Docker.*

## Environment Requirements
- [Docker](https://docs.docker.com/engine/install/) 19.03.1+
- Docker Compose 1.29.2+

## Build

You can refer to [How to Build](quick_start/how_to_build.md).

## Deploy

Start all components.

```shell
cd docker/docker-compose
docker-compose up -d
```

## Register Cluster

### DataProxy Cluster

Open the Inlong-Dashboard page (the default is <http://127.0.0.1>), and select to add a DataProxy cluster on the [Clusters] tab:

![](img/dp_cluster.png)

Click the [Create] button, and fill in the cluster name, cluster label, and responsible person in the pop-up box to save.

> Note: [Cluster Tag] is a logical concept. Tags with the same name will be regarded as the same cluster.
>
> For example, the DataProxy cluster and the Pulsar cluster with the same cluster tag belong to the same cluster.

Then add nodes to this DataProxy cluster - a DataProxy cluster can support adding multiple nodes:

![](img/dp_cluster_node.png)

Just fill in the IP and port of the DataProxy node.

![](img/dp_cluster_node_save.png)

### Pulsar Cluster

Similar to the above entry for adding a DataProxy cluster, the filling example is as follows:

![](img/pulsar_cluster_save.png)

## Usage

After all containers run successfully, you can access `http://localhost` with default account:

```shell
User: admin
Password: inlong
```

## Destroy

```shell
docker-compose down
```
