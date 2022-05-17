---
title: Overview
sidebar_position: 1
---

# overview
Inlong-sort is used to extract data from different source systems, then transforms the data and finally loads the data into diffrent storage systems.
Inlong-sort is simply an Flink application, and relys on Inlong-manager to manage meta data(such as the source informations and storage informations)

# features

## supported transforms
- String split index
- String regular replace 
- String regular replace the first value
- Data filter
- Data distinct
- Regular join

## supported sources
- Pulsar
- MySQL
- Kafka

## supported storages
- Hive
- Kafka
- ClickHouse
- Iceberg

## limitations
Currently, we just support extracting specified fields in the stage of **Transform**.

## future plans
### More kinds of source systems
Oracle,  Mongo DB, SqlServer, and etc

### More kinds of storage systems
Hbase, Elastic Search, and etc

### More kinds of transforms
Time window aggregation, Content extraction, Type conversion, Time format conversion, and etc.