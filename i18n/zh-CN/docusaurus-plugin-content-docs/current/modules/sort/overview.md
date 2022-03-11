---
title: 总览
sidebar_position: 1
---

# 简介
inlong-sort是一个基于flink的ETL系统，支持多种数据源，支持简单的字段抽取，支持多种存储系统。
inlong-sort依赖inlong-manager进行系统元数据的管理。

# 特性

## 支持的数据源
- pulsar

## 支持的存储系统
- hive（当前支持parquet、orc和text格式）
- kafka
- clickhouse
- iceberg

## 一些局限
当前inlong-sort在ETL的transform阶段，只支持简单的字段抽取功能，一些复杂功能暂不支持。

## 未来规划
### 支持更多种类的数据源
kafka等


### 支持更多种类的存储
Hbase，Elastic Search等


### 支持更多种写入hive的文件格式
sequece file等