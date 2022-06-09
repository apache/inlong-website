---
title: Quick Start
sidebar_position: 1
---

This section contains a quick start guide to help you get started with Apache InLong.

## Overall architecture
<img src="/img/inlong-structure-en.png" align="center" alt="Apache InLong"/>

[Apache InLong](https://inlong.apache.org)(incubating) overall architecture is as above. This component is a one-stop integration framework for massive data that provides automated, secure, distributed, and efficient data publishing and subscription capabilities to help You can easily build stream-based data applications.

InLong (应龙) is a divine beast in Chinese mythology who guides river into the sea, it is regarded as a metaphor of the InLong system for reporting streams of data.

InLong was originally built in Tencent and has served online business for more than 8 years. It supports massive data (over 40 trillion pieces of data per day) report services under big data scenarios. The entire platform integrates 5 modules including data collection, aggregation, caching, sorting and management modules. Through this system, the business only needs to provide data sources, data service quality, data landing clusters and data landing formats, that is, data can be continuous Push data from the source cluster to the target cluster, which greatly meets the data reporting service requirements in the business big data scenario.


## Compile
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
inlong-agent
inlong-dataproxy
inlong-dataproxy-sdk
inlong-manager-web
inlong-sort
inlong-tubemq-manager
inlong-tubemq-server
inlong-website
```

## Environment Requirements
- ZooKeeper 3.5+
- Hadoop 2.10.x 和 Hive 2.3.x
- MySQL 5.7+
- Flink 1.9.x

## deploy InLong TubeMQ Server
[deploy InLong TubeMQ Server](modules/tubemq/quick_start.md)

## deploy InLong TubeMQ Manager
[deploy InLong TubeMQ Manager](modules/tubemq/tubemq-manager/quick_start.md)

## deploy InLong Manager
[deploy InLong Manager](modules/manager/quick_start.md)

## deploy InLong WebSite
[deploy InLong WebSite](modules/website/quick_start.md)

## deploy InLong Sort
[deploy InLong Sort](modules/sort/quick_start.md)

## deploy InLong DataProxy
[deploy InLong DataProxy](modules/dataproxy/quick_start.md)

## deploy InLong DataProxy-SDK
[deploy InLong DataProxy](modules/dataproxy-sdk/quick_start.md)

## deploy InLong Agent
[deploy InLong Agent](modules/agent/quick_start.md)

## Business configuration
[How to configure a new business](user_guide/user_manual.md)

## Data report verification
At this stage, you can collect data through the file agent and verify whether the received data is consistent with the sent data in the specified Hive table.
