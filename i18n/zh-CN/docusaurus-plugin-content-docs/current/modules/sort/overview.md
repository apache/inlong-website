---
title: 总览
sidebar_position: 1
---

## 简介
InLong Sort 是一个基于 Apache Flink 的 ETL 系统，支持多种数据源，支持简单的字段抽取，支持多种存储系统。
InLong Sort 既支持和 Manager 一起配合使用，通过 Manager 进行系统元数据的管理，也可以在 Flink 环境下独立运行。

## 特性
### 支持多种数据节点
| Type         | Service                                    |
|--------------|--------------------------------------------|
| Extract Node | Pulsar                                     | 
|              | MySQL                                      | 
|              | Kafka                                      | 
|              | MongoDB                                    | 
|              | PostgreSQL                                 | 
| Transform    | String Split                               | 
|              | String Regular Replace                     | 
|              | String Regular Replace First Matched Value | 
|              | Data Filter                                |
|              | Data Distinct                              | 
|              | Regular Join                               | 
| Load Node    | Hive                                       | 
|              | Kafka                                      | 
|              | HBase                                      | 
|              | ClickHouse                                 | 
|              | Iceberg                                    | 
|              | PostgreSQL                                 | 
|              | HDFS                                       | 
|              | TDSQL Postgres                             | 

