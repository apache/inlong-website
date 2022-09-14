---
title: Basic Concept
sidebar_position: 1
---

| Name                     | Description                                                                                                                | Other                                                                              |
|--------------------------|----------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| Standard Architecture    | Contains all InLong components such as InLong Agent/Manager/MQ/Sort/Dashboard                                              | Suitable for massive data and large-scale production environments                  |
| Lightweight Architecture | Contains only one component of InLong Sort, which can be used with Manager/Dashboard                                       | The lightweight architecture is simple and flexible, suitable for small-scale data |
| Group                    | Data Streams Group, it contains multiple data streams, and one Group represents one data ingestion.                        | Group has attributes such as ID and Name.                                          |
| Stream                   | Data Stream, a stream has a specific flow direction.                                                                       | Stream has attributes such as ID, Name, and data fields.                           |
| Node                     | Data Node, including `Extract Node` and `Load Node`,  stands for the data source and sink types separately.                |                                                                                    |
| InLongMsg                | InLong data format, if you consume message directly from the message queue, you need to perform `InLongMsg` parsing first. |                                                                                    |
| Agent                    | The standard architecture uses Agent for data collection, and Agent represents different types of collection capabilities. | It contains File Agent, SQL Agent, Binlog Agent, etc.                              |
| DataProxy                | Forward received data to different message queues.                                                                         | Supports data transmission blocking, placing retransmission.                       |
| Sort                     | Data stream sorting.                                                                                                       | Sort-flink based on Flink, sort-standalone for local sorting.                      |
| TubeMQ                   | InLong's self-developed message queuing service                                                                            | It can also be called Tube, with low-cost, high-performance features.              |
| Pulsar                   | [Apache Pulsar](https://pulsar.apache.org/), a high-performance, high-consistency message queue service                    |                                                                                    |