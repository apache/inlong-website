---
title: Docker
sidebar_position: 2
---

Deploy all InLong module by Docker Compose, it's only available for development.

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

## Use

After all containers run successfully, you can access `http://localhost` with default account:

```shell
User: admin
Password: inlong
```

## Destroy

```shell
docker-compose down
```
