---
title: 总览
sidebar_position: 1
---

## 简介

Extract 节点列表是一组基于 <a href="https://flink.apache.org/">Apache Flink<sup>®</sup></a> 的 Source Connectors 用于从不同的源系统抽取数据。

## 支持的 Extract 节点列表

| Extract 节点                          | 版本                                                                                                                                                                                                                                                                                                                                                                                                    | 驱动包                     |
|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|
| [Kafka](kafka.md)                   | [Kafka](https://kafka.apache.org/): 0.10+                                                                                                                                                                                                                                                                                                                                                             | None                    |
| [Pulsar](pulsar.md)                 | [Pulsar](https://pulsar.apache.org/): 2.8.x+                                                                                                                                                                                                                                                                                                                                                          | None                    |
| [MongoDB-CDC](mongodb-cdc.md)       | [MongoDB](https://www.mongodb.com): 3.6, 4.x, 5.0                                                                                                                                                                                                                                                                                                                                                     | None                    |
| [MySQL-CDC](mysql-cdc.md)           | [MySQL](https://dev.mysql.com/doc): 5.6, 5.7, 8.0.x <br/>[RDS MySQL](https://www.aliyun.com/product/rds/mysql): 5.6, 5.7, 8.0.x <br/> [PolarDB MySQL](https://www.aliyun.com/product/polardb): 5.6, 5.7, 8.0.x <br/> [Aurora MySQL](https://aws.amazon.com/cn/rds/aurora): 5.6, 5.7, 8.0.x <br/> [MariaDB](https://mariadb.org): 10.x <br/> [PolarDB X](https://github.com/ApsaraDB/galaxysql): 2.0.1 | JDBC Driver: 8.0.21     |
| [Oracle-CDC](oracle-cdc.md)         | [Oracle](https://www.oracle.com/index.html): 11, 12, 19                                                                                                                                                                                                                                                                                                                                               | Oracle Driver: 19.3.0.0 |
| [PostgreSQL-CDC](postgresql-cdc.md) | [PostgreSQL](https://www.postgresql.org): 9.6, 10, 11, 12                                                                                                                                                                                                                                                                                                                                             | JDBC Driver: 42.2.12     |
| [SQLServer-CDC](sqlserver-cdc.md)   | [SQLServer](https://www.microsoft.com/sql-server): 2012, 2014, 2016, 2017, 2019                                                                                                                                                                                                                                                                                                                       | None                    |

## 支持的 Flink 版本列表

下表展示了 InLong<sup>®</sup> Extract 节点 和 Flink<sup>®</sup> 版本之间的对应关系。

|   InLong<sup>®</sup> Extract 节点版本   |            Flink<sup>®</sup> 版本             |
|:-----------------------------------:|:-------------------------------------------:|
| <font color="DarkCyan">1.2.0</font> | <font color="MediumVioletRed">1.13.5</font> |

## SQL API 用法
- [部署 InLong Sort](modules/sort/quick_start.md)
- 创建数据节点

下面例子展示了如何在 [Flink SQL Client](https://ci.apache.org/projects/flink/flink-docs-release-1.13/dev/table/sqlClient.html) 创建 MySQL Extract 节点，并从中查询数据：

```sql
-- 创建一个 MySQL Extract 节点
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
