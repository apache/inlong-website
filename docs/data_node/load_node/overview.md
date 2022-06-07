---
title: Overview
sidebar_position: 1
---

## Overview

Load Nodes is a set of source connectors based on <a href="https://flink.apache.org/">Apache Flink<sup>®</sup></a> for loading data to different storage systems. 

## Supported Load Nodes
| Connector                                     | Version                                                                                                                                                                                                                                                                                                                                                                                                 | Driver                  |
|-----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|
| [kafka](load_node/kafka.md)                   | <li> [Kafka](https://kafka.apache.org/): 0.10+                                                                                                                                                                                                                                                                                                                                                          | None                    |
| [hbase](load_node/hbase.md)                   | <li> [Hbase](https://hbase.apache.org/): 2.2.x                                                                                                                                                                                                                                                                                                                                                          | None                    |
| [postgresql](load_node/postgres.md)           | <li> [PostgreSQL](https://www.postgresql.org/): 9.6, 10, 11, 12                                                                                                                                                                                                                                                                                                                                         | None                    |
| [oracle](load_node/oracle.md)                 | <li> [Oracle](https://www.oracle.com/index.html): 11, 12, 19                                                                                                                                                                                                                                                                                                                                            | Oracle Driver: 19.3.0.0 |
| [mysql](load_node/mysql.md)                   | <li> [MySQL](https://dev.mysql.com/doc): 5.6, 5.7, 8.0.x <li> [RDS MySQL](https://www.aliyun.com/product/rds/mysql): 5.6, 5.7, 8.0.x <li> [PolarDB MySQL](https://www.aliyun.com/product/polardb): 5.6, 5.7, 8.0.x <li> [Aurora MySQL](https://aws.amazon.com/cn/rds/aurora): 5.6, 5.7, 8.0.x <li> [MariaDB](https://mariadb.org): 10.x <li> [PolarDB X](https://github.com/ApsaraDB/galaxysql): 2.0.1  | JDBC Driver: 8.0.21     |
| [tdsql-postgres](load_node/tdsql-postgres.md) | <li> [TDSQL-Postgres](https://cloud.tencent.com/document/product/1129): 10.17                                                                                                                                                                                                                                                                                                                           | Oracle Driver: 19.3.0.0 |
| [greenplum](load_node/greenplum.md)           | <li> [Greeplum](https://greenplum.org/): 4.x, 5.x, 6.x                                                                                                                                                                                                                                                                                                                                                  | None                    |
| [elasticsearch](load_node/elasticsearch.md)   | <li> [ElasticSearch](https://www.elastic.co/): 6.x, 7.x                                                                                                                                                                                                                                                                                                                                                 | None                    |
| [clickhouse](load_node/clickhouse.md)         | <li> [ClickHouse](https://clickhouse.com/): 20.7+                                                                                                                                                                                                                                                                                                                                                       | None                    |
| [hive](load_node/hive.md)                     | <li> [Hive](https://hive.apache.org/): 1.x, 2.x, 3.x                                                                                                                                                                                                                                                                                                                                                    | None                    |
| [sqlserver](load_node/sqlserver.md)           | <li> [Sqlserver](https://www.microsoft.com/sql-server): 2012, 2014, 2016, 2017, 2019                                                                                                                                                                                                                                                                                                                    | None                    |
| [hdfs](load_node/hdfs.md)                     | <li> [HDFS](https://hadoop.apache.org/): 2.x, 3.x                                                                                                                                                                                                                                                                                                                                                       | None                    |
| [iceberg](load_node/iceberg.md)               | <li> [Iceberg](https://iceberg.apache.org/): 0.13.1+                                                                                                                                                                                                                                                                                                                                                    | None                    |


## Supported Flink Versions
The following table shows the version mapping between InLong<sup>®</sup> Load Nodes and Flink<sup>®</sup>:

| InLong<sup>®</sup> Load Nodes Version |          Flink<sup>®</sup> Version          |
|:-------------------------------------:|:-------------------------------------------:|
|  <font color="DarkCyan">1.2.0</font>  | <font color="MediumVioletRed">1.13.5</font> |

## Usage for SQL API

We need several steps to setup a Flink cluster with the provided connector.

1. Setup a Flink cluster with version 1.13.5 and Java 8+ installed.
2. Download and decompress the connector jars from the [Downloads](../../../download/main.md) page (or [build yourself](../../quick_start/how_to_build.md)).
3. Put the downloaded jars under `FLINK_HOME/lib/`.
4. Restart the Flink cluster.

The example shows how to create a MySQL Load Node in [Flink SQL Client](https://ci.apache.org/projects/flink/flink-docs-release-1.13/dev/table/sqlClient.html) and load data to it.

```sql
-- creates a mysql extract node
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
-- creates a mysql load node
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