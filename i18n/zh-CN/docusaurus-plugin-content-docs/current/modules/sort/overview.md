---
title: 总览
sidebar_position: 1
---

# 简介
inlong-sort是一个基于flink的ETL系统，支持多种数据源，支持简单的字段抽取，支持多种存储系统。
inlong-sort依赖inlong-manager进行系统元数据的管理。

# 特性

## 支持的Extract Node
- Pulsar
- MySQL
- Kafka

## 支持的Transform
- 字符串分割
- 字符串正则替换
- 字符串正则替换第一个匹配值
- 数据过滤
- 数据去重
- 常规Join

## 支持的Load Node
- Hive
- Kafka
- ClickHouse
- Iceberg

## 未来规划
### 支持更多种类的Extract Node
Oracle,  Mongo DB, SqlServer等。

### 支持更多种类的Transform
时间窗口聚合, 内容提取, 类型转换, 时间格式转换等。

### 支持更多种类的Load Node
Hbase, Elastic Search等。

