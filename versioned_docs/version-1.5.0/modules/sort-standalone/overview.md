---
title: Overview
sidebar_position: 1
---

## Introduction
Inlong sort standalone is a module responsible for consuming the data stream reported by users from the cache layer and distributing it to different data stores. It supports hive, elasticsearch, CLS and other data stores.  
Inlong sort standalone relies on inlong manager to manage system metadata. Inlong sort standalone is deployed by cluster and aggregates and distributes tasks by target storage.

## Feature
### Multi tenant system
Inlong sort standalone supports multi tenancy. An inlong sort standalone cluster can host the distribution tasks of different tenants. The distribution tasks are obtained from the inlong manager.  
Each distribution task is responsible for distributing multiple data streams to a data store. Users only need to configure on the front page of inlong manager to specify the data streams to be distributed to a specific data store.  
For example, the inlong data streams D1 and D2 are distributed to hive cluster H1, D1 is also distributed to elasticsearch cluster E1, and D2 is also distributed to CLS cluster C1. Then the inlong sort standalone cluster will receive three distribution tasks.
- H1 distributes task consumption D1 and D2 to hive cluster H1;
- E1 distribution task consumption D1, distributed to elasticsearch cluster E1;
- C1 distributes the task consumption D2 and distributes it to CLS cluster C1.

### Distribution tasks support dynamic updates
Inlong sort standalone supports dynamic updating of distribution tasks, such as the information of the data source where the inlong data stream is located, the data stream schema information, and the information of the target data store.  
It should be noted that the new distribution of inlong data stream will be consumed from the latest location of the cache layer;  
After the inlong data stream is distributed offline, it goes online again. If the consumption location when it goes offline is still within the life cycle of the cache layer, it continues to consume from the consumption location when it goes offline;  
If the consumption location at the time of offline is no longer within the life cycle of the cache layer, consumption starts from the latest location of the cache layer.

### message queues supported by the cache layer
- Inlong-Tube
- Apache Pulsar
- Apache Kafka

### supported data storage
- Apache Hive (currently only supports sequence file format)
- Apache Pulsar
- Apache Kafka
- Elasticsearch
- ClickHouse
- Tencent CLS

### Future planning
#### support more kinds of data storage
HBase, etc.

#### support more file formats written to Apache hive
Orc file, etc.
