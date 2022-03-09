---
title: Overview
sidebar_position: 1
---

# overview
Inlong-sort is used to extract data from different source systems, then transforms the data and finally loads the data into diffrent storage systems.
Inlong-sort is simply an Flink application, and relys on Inlong-manager to manage meta data(such as the source informations and storage informations)

# features

## 1 supported sources
- pulsar

## 2 supported storages
- hive（Currently we support parquet, orc and text file format）
- kafka
- clickhouse
- iceberg

## 3 limitations
Currently, we just support extracting specified fields in the stage of **Transform**.

## 4 future plans
### 4.1 More kinds of source systems
kafka and etc

### 4.2 More kinds of storage systems
Hbase, Elastic Search, and etc

### 4.3 More kinds of file format in hive sink
sequence file