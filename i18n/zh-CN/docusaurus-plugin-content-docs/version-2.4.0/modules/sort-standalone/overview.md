---
title: 总览
sidebar_position: 1
---

## 简介
Inlong-sort-standalone是一个负责将用户上报的数据流从缓存层消费出来，分发到不同数据存储的模块，支持Hive、ElasticSearch、CLS等多种数据存储。  
Inlong-sort-standalone依赖inlong-manager进行系统元数据的管理，Inlong-sort-standalone按集群部署，按目标存储聚合分发任务。

## 特性
### 多租户系统
inlong-sort-standalone支持多租户，一个inlong-sort-standalone集群可以承载不同租户的分发任务，分发任务从Inlong-manager获取。  
每个分发任务负责将多个数据流分发到一个数据存储，用户只需要在Inlong-manager的前端页面进行配置，指定数据流分发到具体数据存储。  
举例：Inlong数据流d1和d2，都分发Hive集群H1，d1还分发到ElasticSearch集群E1，d2还分发到CLS集群C1，那么inlong-sort-standalone集群会收到三个分发任务。
- H1分发任务消费d1和d2，分发到Hive集群H1；
- E1分发任务消费d1，分发到ElasticSearch集群E1；
- C1分发任务消费d2，分发到CLS集群C1。

### 分发任务支持动态更新
inlong-sort-standalone支持动态更新分发任务，比如Inlong数据流所在数据源的信息，数据流schema信息，目标数据存储的信息。  
需要注意的是，Inlong数据流新增分发，会从缓存层的最新位置开始消费；  
Inlong数据流分发下线后重新上线，如果下线时的消费位置还在缓存层的生命周期内，则从下线时的消费位置继续消费；  
如果下线时的消费位置已不在缓存层的生命周期内，则从缓存层的最新位置开始消费。  

### 缓存层支持的消息队列
- Inlong-tubemq
- Apache Pulsar

### 支持的数据存储
- Apache Hive（当前只支持sequence文件格式）
- Apache Pulsar
- Apache Kafka

### 未来规划
#### 支持更多种类的缓存层消息队列
Apache Kafka等。

#### 支持更多种类的数据存储
Hbase，ElasticSearch等。

#### 支持更多种写入Apache Hive的文件格式
ORC file等。
