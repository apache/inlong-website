---
title: Overview
sidebar_position: 1
---

# overview
Inlong-sort is used to extract data from different source systems, then transforms the data and finally loads the data into diffrent storage systems.
Inlong-sort is simply an Flink application, and relys on Inlong-manager to manage meta data(such as the source informations and storage informations).

# features

## supported Extract Node
- Pulsar
- MySQL
- Kafka

## supported Transform
- String Split
- String Regular Replace
- String Regular Replace First Matched Value
- Data Filter
- Data Distinct
- Regular Join

## supported Load Node
- Hive
- Kafka
- ClickHouse
- Iceberg

## future plans
### More kinds of Extract Node
Oracle,  Mongo DB, SqlServer, and etc.

### More kinds of transforms
Time window aggregation, Content extraction, Type conversion, Time format conversion, and etc.

### More kinds of Load Node
Hbase, Elastic Search, and etc.
