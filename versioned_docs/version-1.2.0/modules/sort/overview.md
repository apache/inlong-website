---
title: Overview
sidebar_position: 1
---

## Overview
InLong Sort is used to extract data from different source systems, then transforms the data and finally loads the data into different storage systems.

InLong Sort can be used together with the Manager to manage metadata, or it can run independently in the Flink environment.

## Features
### Suport a variety of data nodes

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