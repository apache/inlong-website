---
title: Overview
sidebar_position: 1
---

# overview
Inlong-sort is used to extract data from different source systems, then transforms the data and finally loads the data into diffrent storage systems.
Inlong-sort is simply an Flink application, and relys on Inlong-manager to manage meta data(such as the source informations and storage informations)

# features

## supported sources
- pulsar

## supported storages
- hive（Currently we support parquet, orc and text file format）
- kafka
- clickhouse
- iceberg

## limitations
Currently, we just support extracting specified fields in the stage of **Transform**.

## future plans
### More kinds of source systems
kafka and etc

### More kinds of storage systems
Hbase, Elastic Search, and etc

### More kinds of file format in hive sink
sequence file