---
title: Docker
sidebar_position: 2
---

Deploy all InLong module by Docker Compose, it's only available for development. 

*Notice: The default message queue services is Apache Pulsar for Docker.*

Requirements:

- [Docker](https://docs.docker.com/engine/install/) 19.03.1+
- Docker Compose 1.29.2+

## Build
you can refer to [How to Build](quick_start/how_to_build.md).

## Deploy
Start all components.

```shell
cd docker/docker-compose
docker-compose up -d
```

## Register Component
- DataProxy
```bash
curl --header "Content-Type: application/json" --request POST http://localhost:8083/api/inlong/manager/openapi/cluster/save --data '
{
   "name": "default_dataproxy",
   "type": "DATA_PROXY",
   "ip": "dataproxy",
   "port": 46801,
   "mqSetName": "default_set_name",
   "inCharges": "admin",
   "creator": "admin"
}
'
```

- Pulsar
```bash
curl --header "Content-Type: application/json" --request POST http://localhost:8083/api/inlong/manager/openapi/cluster/save --data '
{
        "name": "pulsar_cluster",
        "type": "PULSAR",
        "url": "pulsar://pulsar:6650",
        "token": "null",
        "mqSetName": "default_set_name",
        "extParams": "{\"pulsar_adminUrl\": \"http://pulsar:8080\"}",
        "inCharges": "admin",
        "creator": "admin"
}'
```

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
