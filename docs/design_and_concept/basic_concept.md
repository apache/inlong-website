---
title: Basic Concept
sidebar_position: 1
---

| Name |  Description | Other |
|  ----  | ----  | ----  |
| Group | Data Streams Group, it contains multiple data streams, and one Group represents one data ingestion. |  Group has attributes such as ID and Name.  |
| Stream | Data Stream, a stream has a specific flow direction. | Stream has attributes such as ID, Name, and data fields.  |
| Agent | Represents various collection capabilities. | It contains File Agent, SQL Agent, Binlog Agent, etc. |
| DataProxy | Forward received data to different message queues. |  Supports data transmission blocking, placing retransmission. |
| Sort | Data stream sorting | Sort-flink based on Flink, sort-standalone for local sorting. |
| TubeMQ | InLong's self-developed message queuing service | It can also be called Tube, with low-cost, high-performance features. |
| Pulsar | [Apache Pulsar](https://pulsar.apache.org/), a high-performance, high-consistency message queue service |
| Hive | [Apache Hive](https://hive.apache.org/), a data warehouse built on the Hadoop architecture |
| ClickHouse | [ClickHouse](https://clickhouse.com/), a high performance columnar OLAP database | |