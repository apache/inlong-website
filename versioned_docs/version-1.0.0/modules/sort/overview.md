---
title: Overview
sidebar_position: 1
---

# overview
Inlong-sort is used to extract data from different source systems, then transforms the data and finally loads the data into diffrent storage systems.
Inlong-sort is simply an Flink application, and relys on Inlong-manager to manage meta data(such as the source informations and storage informations)

# features
## 1 multi-tenancy
Inlong-sort is an multi-tenancy system, which means you can extract data from different sources(these sources must be of the same source type) and load data into different sinks(these sinks must be of the same storage type).
e.g. you can extract data form different topics of inlong-tubemq and the load them to different hive clusters.

## 2 change meta data without restart
Inlong-sort uses zookeeper to manage its meta data, every time you change meta data on zk, inlong-sort application will be informed immediately.
e.g if you want to change the schema of your data, just change the meta data on zk without restart your inlong-sort application.

## 3 supported sources
- inlong-tubemq
- pulsar

## 4 supported storages
- clickhouse
- hive (Currently we just support parquet file format)

## 5 limitations
Currently, we just support extracting specified fields in the stage of **Transform**.

## 6 future plans
### 6.1 More kinds of source systems
kafka and etc

### 6.2 More kinds of storage systems
Hbase, Elastic Search, and etc

### 6.3 More kinds of file format in hive sink
sequence file, orc