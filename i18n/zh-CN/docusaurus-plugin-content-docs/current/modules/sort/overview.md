---
title: 总览
sidebar_position: 1
---

## 简介
InLong Sort 是一个基于 Apache Flink 的 ETL 系统，支持多种数据源，支持简单的字段抽取，支持多种存储系统。
InLong Sort 可以通过 InLong Manager 进行系统元数据的管理。

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
| xx           | String Regular Replace                     | 
| xx           | String Regular Replace First Matched Value | 
| xx           | Data Filter                                |
| xx           | Data Distinct                              | 
| xx           | Regular Join                               | 
| Load Node    | Hive                                       | 
| xx           | Kafka                                      | 
| xx           | HBase                                      | 
| xx           | ClickHouse                                 | 
| xx           | Iceberg                                    | 
| xx           | PostgreSQL                                 | 
| xx           | HDFS                                       | 
| xx           | TDSQL Postgres                             | 

