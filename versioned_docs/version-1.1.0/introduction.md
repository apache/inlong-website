---
title: InLong Introduction
sidebar_position: 1
---

> InLong (应龙) is a divine beast in Chinese mythology who guides river into the sea, 
> it is regarded as a metaphor of the InLong system for reporting streams of data.

## About InLong
[Apache InLong](https://inlong.apache.org) is a one-stop integration framework for massive data donated by Tencent to the Apache community.  It provides automatic,  safe,  reliable,  and high-performance data transmission capabilities to facilitate the construction of streaming-based data analysis,  modeling,  and applications.  
The Apache InLong project was originally called TubeMQ,  focusing on high-performance,  low-cost message queuing services.  In order to further release the surrounding ecological capabilities of TubeMQ,  we upgraded the project to InLong,  focusing on creating a one-stop integration framework for massive data.
Apache InLong uses TDBank internally used by Tencent as the prototype,  and relies on trillion-level data access and processing capabilities to integrate the entire process of data collection,  aggregation,  storage,  and sorting data processing.  It is simple to use,  flexible to expand,  stable and reliable characteristic.

## Features
- Ease of Use

  Apache InLong is a SaaS-based service platform. You can easily and quickly report, transfer, and distribute data by publishing and subscribing to data based on topics

- Stability & Reliability

  Apache InLong is derived from the actual online production environment, 
  it delivers high-performance processing capabilities for 10 trillion-level data streams and highly reliable services for 100 billion-level data streams

- Comprehensive Features

  Apache InLong supports various types of data access methods and can be integrated with different types of Message Queue (MQ) services. It also provides real-time data extract, transform, 
  and load (ETL) and sorting capabilities based on rules. Apache InLong also allows you to plug features to extend system capabilities

- Service Integration

  Apache InLong provides unified system monitoring and alert services. It provides fine-grained metrics to facilitate data visualization. 
  You can view the running status of queues and topic-based data statistics in a unified data metric platform. 
  You can also configure the alert service based on your business requirements so that users can be alerted when errors occur

- Scalability

  Apache InLong adopts a pluggable architecture that allows you to plug modules into the system based on specific protocols. 
  You can replace components and add features based on your business requirements

## Architecture
<img src="/img/inlong-structure-en.png" align="center" alt="Apache InLong"/>

## Modules
Apache InLong serves the entire life cycle from data collection to landing,  and provides different processing modules according to different stages of data,  including the next modules:

- **inlong-agent**,  data collection agent, supports reading regular logs from specified directories or files and reporting data one by one.  In the future,  DB collection capabilities will also be expanded.
- **inlong-dataproxy**,  a Proxy component based on Flume-ng,  supports data transmission blocking,  placing retransmission, and has the ability to forward received data to different MQ (message queues).
- **inlong-tubemq**,  Tencent's self-developed message queuing service,  focuses on high-performance storage and transmission of massive data in big data scenarios and has a relatively good core advantage in mass practice and low cost.
- **inlong-sort**,  after consuming data from different MQ services,  perform ETL processing,  and then aggregate and write the data into Apache Hive, ClickHouse,  Hbase,  IceBerg,  etc.
- **inlong-manager**, provides complete data service management and control capabilities,  including metadata,  OpenAPI,  task flow,  authority,  etc.
- **inlong-dashboard**, a front-end page for managing data access,  simplifying the use of the entire InLong control platform.
- **inlong-audit**, performs real-time audit and reconciliation on the incoming and outgoing traffic of the Agent, DataProxy, and Sort modules of the InLong system.

## Supported Data Nodes (Updating)
| Type         | Name             | Version      | Other                                                                                                             |
|--------------|------------------|--------------|-------------------------------------------------------------------------------------------------------------------|
| Extract Node | Auto Push        | None         | Using [SDK](https://inlong.apache.org/docs/next/sdk/dataproxy-sdk/example) to send                                |
|              | File             | None         | CSV, Key-Value, JSON, Avro                                                                                        |
|              | Kafka            | 2.x          | Canal JSON                                                                                                        |
|              | MySQL            | 5.x, 8.x     | Debezium JSON                                                                                                     |
| Load Node    | Auto Consumption | None         | Using MQ SDK consume messages and [Parse InLongMsg](https://inlong.apache.org/docs/next/development/inlong_msg)   |
|              | Hive             | 2.x          | TextFile, SequenceFile,OrcFile, Parquet, Avro                                                                     |
|              | Iceberg          | 0.12.x       | Parquet, Orc, Avro                                                                                                |
|              | ClickHouse       | v20+         | Canal JSON                                                                                                        |
|              | Kafka            | 2.x          | JSON, Canal, Avro                                                                                                 |