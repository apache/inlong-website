---
title: How to Build
sidebar_position: 1
---
## Download Source Code
Download Source Code from [InLong Download Page](https://inlong.apache.org/download).

## Build Binary Package
- Java [JDK 8](https://adoptopenjdk.net/?variant=openjdk8)
- Maven 3.6.1+

```
$ mvn clean install -DskipTests
```
(Optional) Compile using docker image:
```
$ docker pull maven:3.6-openjdk-8
$ docker run -v `pwd`:/inlong  -w /inlong maven:3.6-openjdk-8 mvn clean install -DskipTests
```
after compile successfully, you could find distribution file at `inlong-distribution/target` with `tar.gz` format, it includes following files:
```
docker
inlong-agent
inlong-audit
inlong-dataproxy
inlong-manager
inlong-sort
inlong-tubemq-manager
inlong-tubemq-server
inlong-dashboard
```

## Build Docker Images
- [Docker](https://docs.docker.com/engine/install/) 19.03.1+

```
mvn clean package -DskipTests -Pdocker
```