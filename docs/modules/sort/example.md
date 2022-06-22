---
title: Example
sidebar_position: 3
---

## Overview

To make it easier for you to create InLong Sort jobs, here we list some data stream configuration examples.
The following will introduce SQL, Dashboard, Manager Client Tools methods to use Inlong Sort.

## Environment Requirements
- JDK 1.8.x
- Flink 1.13.5
- MySQL
- Kafka
- Hadoop
- Hive 3.x

## Prepare InLong Sort And Connectors
You can prepare InLong Sort and Data Node Connectors by referring to [Deployment Guide](quick_start.md).

## Usage for SQL API

This example defines the data flow for a single table(mysql-->kafka-->hive). 

### MySQL to Kafka

Single table sync example:

```shell
./bin/flink run -c org.apache.inlong.sort.Entrance FLINK_HOME/lib/sort-dist-[version].jar \
--sql.script.file /YOUR_SQL_SCRIPT_DIR/mysql-to-kafka.sql
```

* mysql-to-kafka.sql

```sql
CREATE TABLE `table_1`(
    PRIMARY KEY (`id`) NOT ENFORCED,
    `id` BIGINT,
    `name` STRING,
    `age` INT,
    `salary` FLOAT,
    `ts` TIMESTAMP(2),
    `event_type` STRING)
    WITH (
    'append-mode' = 'true',
    'connector' = 'mysql-cdc-inlong',
    'hostname' = 'localhost',
    'username' = 'root',
    'password' = 'password',
    'database-name' = 'dbName',
    'table-name' = 'tableName'
);

CREATE TABLE `table_2`(
    `id` BIGINT,
    `name` STRING,
    `age` INT,
    `salary` FLOAT,
    `ts` TIMESTAMP(2))
    WITH (
    'topic' = 'topicName',-- Your kafka topic
    'properties.bootstrap.servers' = 'localhost:9092',
    'connector' = 'kafka',
    'json.timestamp-format.standard' = 'SQL',
    'json.encode.decimal-as-plain-number' = 'true',
    'json.map-null-key.literal' = 'null',
    'json.ignore-parse-errors' = 'true',
    'json.map-null-key.mode' = 'DROP',
    'format' = 'json',
    'json.fail-on-missing-field' = 'false'
);

INSERT INTO `table_2` 
    SELECT 
    `id` AS `id`,
    `name` AS `name`,
    `age` AS `age`,
    CAST(NULL as FLOAT) AS `salary`,
    `ts` AS `ts`
    FROM `table_1`;

```

### Kafka to Hive

**Note:**  First you need to create user table in Hive.

```shell
./bin/flink run -c org.apache.inlong.sort.Entrance FLINK_HOME/lib/sort-dist-[version].jar \
--sql.script.file /YOUR_SQL_SCRIPT_DIR/kafka-to-hive.sql
```
* kafka-to-hive.sql

```sql
CREATE TABLE `table_1`(
    `id` BIGINT,
    `name` STRING,
    `age` INT,
    `salary` FLOAT,
    `ts` TIMESTAMP(2)
    WITH (
    'topic' = 'topicName',-- Your kafka topic
    'properties.bootstrap.servers' = 'localhost:9092',
    'connector' = 'kafka',
    'scan.startup.mode' = 'earliest-offset',
    'json.timestamp-format.standard' = 'SQL',
    'json.encode.decimal-as-plain-number' = 'true',
    'json.map-null-key.literal' = 'null',
    'json.ignore-parse-errors' = 'true',
    'json.map-null-key.mode' = 'DROP',
    'format' = 'json',
    'json.fail-on-missing-field' = 'false',
    'properties.group.id' = 'groupId'-- Your group id
);

CREATE TABLE `user`(
    `id` BIGINT,
    `name` STRING,
    `age` INT,
    `salary` FLOAT,
    `ts` TIMESTAMP(9))
    WITH (
    'connector' = 'hive',
    'default-database' = 'default',
    'hive-version' = '3.1.2',
    'hive-conf-dir' = 'hdfs://ip:9000/.../hive-site.xml' -- Put your hive-site.xml into HDFS
);

INSERT INTO `user` 
    SELECT 
    `id` AS `id`,
    `name` AS `name`,
    `age` AS `age`,
    CAST(NULL as FLOAT) AS `salary`,
    `ts` AS `ts`
    FROM `table_1`;

```
Note: Of course you can also put all the SQL in one file.

## Usage for Dashboard

The underlying capabilities are already available and will complement the Dashboard capabilities in the future.

## Usage for Manager Client Tools

TODO: It will be supported in the future.
