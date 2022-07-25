---
title: Standalone
sidebar_position: 1
---

## Environment Requirements
- MySQL 5.7+
- Flink 1.13.5
- [Docker](https://docs.docker.com/engine/install/) 19.03.1+

## Prepare Message Queue
InLong Support the following Message Queue services now, you can choose one of them.
- [InLong TubeMQ](modules/tubemq/quick_start.md)
- [Apache Pulsar 2.8.x](https://pulsar.apache.org/docs/en/2.8.1/standalone/)

## Download the Binary Package
You can get binary package from [Download Page](https://inlong.apache.org/download) ,or you can build the InLong refer to [How to Build](quick_start/how_to_build.md).

Extract `apache-inlong-[version]-bin.tar.gz` and `apache-inlong-[version]-sort-connectors.tar.gz`, and make sure the `inlong-sort/connectors/` directory contains Connectors.

## DB Dependencies
- If the backend database is MySQL, please download [mysql-connector-java-8.0.27.jar](https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.27/mysql-connector-java-8.0.27.jar) and put it into the following directories:
```bash
inlong-agent/lib/
inlong-audit/lib/
inlong-manager/lib/
inlong-tubemq-manager/lib/
```
- If the backend database is PostgreSQL, there's no need for additional dependencies.

## Configure 
In `conf/inlong.conf`, configure the parameters according to the actual situation.

## Start
```shell
bin/inlong-daemon start standalone
```

## Register Message Queue
You can register message queue for Manger according to [Register MQ Cluster](https://inlong.apache.org/docs/next/modules/manager/quick_start/#register-mq-cluster).

## Check
After all component run successfully, you can access `http://localhost` with default account:
```shell
user: admin
password: inlong
```