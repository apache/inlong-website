---
title: 总览
sidebar_position: 1
---

# 简介
InLong-Sort 是一个基于 Flink 的 ETL 系统，支持多种数据源，支持简单的字段抽取，支持多种存储系统。
InLong-Sort 依赖 InLong-Manager 进行系统元数据的管理。

# 特性

## 支持的 Extract Node 
- Pulsar
- MySQL
- Kafka
- MongoDB
- PostgreSQL
- FileSystem

## 支持的 Transform 
- 字符串分割
- 字符串正则替换
- 字符串正则替换第一个匹配值
- 数据过滤
- 数据去重
- 常规Join

## 支持的 Load Node 
- Hive
- Kafka
- HBase
- ClickHouse
- Iceberg
- PostgreSQL
- FileSystem

## 未来规划
### 支持更多种类的 Extract Node
Oracle, SqlServer等。

### 支持更多种类的 Transform 
时间窗口聚合, 内容提取, 类型转换, 时间格式转换等。

### 支持更多种类的 Load Node 
Elastic Search等。

