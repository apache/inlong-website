---
title: 架构介绍
---

# 简介
inlong-sort是一个基于flink的ETL系统，支持多种数据源，支持简单的字段抽取，支持多种存储系统。
inlong-sort依赖inlong-manager进行系统元数据的管理，元数据依赖zk进行存储及同步。

# 特性
## 多租户系统
inlong-sort支持多租户，一个inlong-sort的作业中可以包含多个同构的数据源，以及多个同构的存储系统。
并且针对不同的数据源，可以定义不同的数据格式以及字段抽取方式。
多租户系统依赖inlong-manager的元数据管理，用户只需要在inlong-manager的前端页面进行相应的配置，即可实现。
举例：以tubemq为source，hive为存储为例，同一个inlong-sort的作业可以订阅多个topic的tubemq数据，并且每个topic的数据可以写入不同的hive集群。

## 支持热更新元数据
inlong-sort支持热更新元数据，比如更新数据源的信息，数据schema，或者写入存储系统的信息。
需要注意的是，当前修改数据源信息时，可能会造成数据丢失，因为修改数据源信息后，系统会认为这是一个全新的subscribe，会默认从消息队列的最新位置开始消费。
修改数据schema，抽取字段规则以及写入存储的信息，不会造成任何数据丢失，保证exactly-once

# 支持的数据源
- inlong-tubemq
- pulsar

# 支持的存储系统
- hive（当前只支持parquet文件格式）
- clickhouse

# 一些局限
当前inlong-sort在ETL的transform阶段，只支持简单的字段抽取功能，一些复杂功能暂不支持。

# 未来规划
## 支持更多种类的数据源
kafka等


## 支持更多种类的存储
Hbase，Elastic Search等


## 支持更多种写入hive的文件格式
sequece file，orc