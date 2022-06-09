---
title: Overview
sidebar_position: 1
---

## Overview

Load Nodes is a set of Sink Connectors based on <a href="https://flink.apache.org/">Apache Flink<sup>®</sup></a> for loading data to different storage systems. 

## Supported Load Nodes
| Load Node                               | Version                                                                                                                                                                                                                                                                                                                                                                                                | Driver                  |
|-----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|
| [kafka](kafka.md)                       | [Kafka](https://kafka.apache.org/): 0.10+                                                                                                                                                                                                                                                                                                                                                              | None                    |
| [hbase](hbase.md)                       | [Hbase](https://hbase.apache.org/): 2.2.x                                                                                                                                                                                                                                                                                                                                                              | None                    |
| [postgresql](postgresql.md)             | [PostgreSQL](https://www.postgresql.org/): 9.6, 10, 11, 12                                                                                                                                                                                                                                                                                                                                             | None                    |
| [oracle](oracle.md)                     | [Oracle](https://www.oracle.com/index.html): 11, 12, 19                                                                                                                                                                                                                                                                                                                                                | Oracle Driver: 19.3.0.0 |
| [mysql](mysql.md)                       | [MySQL](https://dev.mysql.com/doc): 5.6, 5.7, 8.0.x <br/> [RDS MySQL](https://www.aliyun.com/product/rds/mysql): 5.6, 5.7, 8.0.x <br/> [PolarDB MySQL](https://www.aliyun.com/product/polardb): 5.6, 5.7, 8.0.x <br/> [Aurora MySQL](https://aws.amazon.com/cn/rds/aurora): 5.6, 5.7, 8.0.x <br/> [MariaDB](https://mariadb.org): 10.x <br/> [PolarDB X](https://github.com/ApsaraDB/galaxysql): 2.0.1 | JDBC Driver: 8.0.21     |
| [tdsql-postgresql](tdsql-postgresql.md) | [TDSQL-PostgreSQL](https://cloud.tencent.com/document/product/1129): 10.17                                                                                                                                                                                                                                                                                                                             | Oracle Driver: 19.3.0.0 |
| [greenplum](greenplum.md)               | [Greeplum](https://greenplum.org/): 4.x, 5.x, 6.x                                                                                                                                                                                                                                                                                                                                                      | None                    |
| [elasticsearch](elasticsearch.md)       | [Elasticsearch](https://www.elastic.co/): 6.x, 7.x                                                                                                                                                                                                                                                                                                                                                     | None                    |
| [clickhouse](clickhouse.md)             | [ClickHouse](https://clickhouse.com/): 20.7+                                                                                                                                                                                                                                                                                                                                                           | None                    |
| [hive](hive.md)                         | [Hive](https://hive.apache.org/): 1.x, 2.x, 3.x                                                                                                                                                                                                                                                                                                                                                        | None                    |
| [sqlserver](sqlserver.md)               | [Sqlserver](https://www.microsoft.com/sql-server): 2012, 2014, 2016, 2017, 2019                                                                                                                                                                                                                                                                                                                        | None                    |
| [hdfs](hdfs.md)                         | [HDFS](https://hadoop.apache.org/): 2.x, 3.x                                                                                                                                                                                                                                                                                                                                                           | None                    |
| [iceberg](iceberg.md)                   | [Iceberg](https://iceberg.apache.org/): 0.13.1+                                                                                                                                                                                                                                                                                                                                                        | None                    |


## Supported Flink Versions

The following table shows the version mapping between InLong<sup>®</sup> Load Nodes and Flink<sup>®</sup>:

| InLong<sup>®</sup> Load Nodes Version |          Flink<sup>®</sup> Version          |
|:-------------------------------------:|:-------------------------------------------:|
|  <font color="DarkCyan">1.2.0</font>  | <font color="MediumVioletRed">1.13.5</font> |

## Usage for SQL API

We need several steps to setup a Flink cluster with the provided connector.

1. Setup a Flink cluster with version 1.13.5 and Java 8+ installed.
2. Download and decompress the Sort Connectors jars from the [Downloads](/download/main) page (or [build yourself](../../quick_start/how_to_build.md)).
3. Put the Sort Connectors jars under `FLINK_HOME/lib/`.
4. Restart the Flink cluster.

The example shows how to create a MySQL Load Node in [Flink SQL Client](https://ci.apache.org/projects/flink/flink-docs-release-1.13/dev/table/sqlClient.html) and load data to it.

```sql
-- Creates a MySQL Extract Node
CREATE TABLE mysql_extract_node (
    id INT NOT NULL,
    name STRING,
    age INT,
    weight DECIMAL(10,3),
    PRIMARY KEY(id) NOT ENFORCED
) WITH (
      'connector' = 'mysql-cdc-inlong',
      'hostname' = 'YourHostname',
      'port' = '3306',
      'username' = 'YourUsername',
      'password' = 'YourPassword',
      'database-name' = 'YourDatabaseName',
      'table-name' = 'YourTableName'
      );
-- Creates a MySQL Load Node
CREATE TABLE mysql_load_node (
 id INT NOT NULL,
 name STRING,
 age INT,
 weight DECIMAL(10,3),
 PRIMARY KEY(id) NOT ENFORCED
) WITH (
 'connector' = 'jdbc-inlong',
 'url' = 'jdbc:mysql://YourHostname:3306/YourDatabaseName',
 'username' = 'YourUsername',
 'password' = 'YourPassword',
 'table-name' = 'YourTableName'
);

INSERT INTO mysql_load_node SELECT id, name, age, weight FROM mysql_extract_node;
```