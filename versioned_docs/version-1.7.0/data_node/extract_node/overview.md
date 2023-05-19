---
title: Overview
sidebar_position: 1
---

## Overview

Extract Nodes is a set of Source Connectors based on <a href="https://flink.apache.org/">Apache Flink<sup>®</sup></a> for extracting data from different source systems. 

## Supported Extract Nodes
| Extract Node                        | Version                                                                                                                                                                                                                                                                                                                                                                                               | Driver                  |
|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|
| [Kafka](kafka.md)                   | [Kafka](https://kafka.apache.org/): 0.10+                                                                                                                                                                                                                                                                                                                                                             | None                    |
| [Pulsar](pulsar.md)                 | [Pulsar](https://pulsar.apache.org/): 2.8.x+                                                                                                                                                                                                                                                                                                                                                          | None                    |
| [MongoDB-CDC](mongodb-cdc.md)       | [MongoDB](https://www.mongodb.com): 3.6, 4.x, 5.0                                                                                                                                                                                                                                                                                                                                                     | None                    |
| [MySQL-CDC](mysql-cdc.md)           | [MySQL](https://dev.mysql.com/doc): 5.6, 5.7, 8.0.x <br/>[RDS MySQL](https://www.aliyun.com/product/rds/mysql): 5.6, 5.7, 8.0.x <br/> [PolarDB MySQL](https://www.aliyun.com/product/polardb): 5.6, 5.7, 8.0.x <br/> [Aurora MySQL](https://aws.amazon.com/cn/rds/aurora): 5.6, 5.7, 8.0.x <br/> [MariaDB](https://mariadb.org): 10.x <br/> [PolarDB X](https://github.com/ApsaraDB/galaxysql): 2.0.1 | JDBC Driver: 8.0.21     |
| [Oracle-CDC](oracle-cdc.md)         | [Oracle](https://www.oracle.com/index.html): 11, 12, 19                                                                                                                                                                                                                                                                                                                                               | Oracle Driver: 19.3.0.0 |
| [PostgreSQL-CDC](postgresql-cdc.md) | [PostgreSQL](https://www.postgresql.org): 9.6, 10, 11, 12                                                                                                                                                                                                                                                                                                                                             | JDBC Driver: 42.2.12     |
| [SqlServer-CDC](sqlserver-cdc.md)   | [SQLServer](https://www.microsoft.com/sql-server): 2012, 2014, 2016, 2017, 2019                                                                                                                                                                                                                                                                                                                       | None                    |

## Supported Flink Versions
The following table shows the version mapping between InLong<sup>®</sup> Extract Nodes and Flink<sup>®</sup>:

|        InLong<sup>®</sup> Extract Nodes Version        |          Flink<sup>®</sup> Version          |
|:------------------------------------------------------:|:-------------------------------------------:|
|          <font color="DarkCyan">1.2.0</font>           | <font color="MediumVioletRed">1.13.5</font> |

## Usage for SQL API
- [Deploy InLong Sort](modules/sort/quick_start.md)
- Create Data Node

The example shows how to create a MySQL Extract Node in [Flink SQL Client](https://ci.apache.org/projects/flink/flink-docs-release-1.13/dev/table/sqlClient.html) and execute queries on it.

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

SELECT id, name, age, weight FROM mysql_extract_node;
```