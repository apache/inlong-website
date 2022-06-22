---
title: Example
sidebar_position: 3
---

## 示例

为了更容易创建 InLong Sort 作业，这里我们列出了一些数据流配置示例。下面将介绍 InLong Sort 的 SQL、Dashboard、Manager 客户端工具的使用。

## 环境要求
- JDK 1.8.x
- Flink 1.13.5
- MySQL
- Kafka
- Hadoop
- Hive 3.x

## 准备 InLong Sort 和 Connectors
你可以通过参考[部署指引](quick_start.md)准备 InLong Sort 和数据节点 Connectors。

## 使用 SQL API 方式

示例构建了 MySQL --> Kafka --> Hive 的数据流，为了便于理解流程执行过程进行了拆解。

### 读 MySQL 写 Kafka 

单表同步配置示例如下：

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

### 读 Kafka 写 Hive

**注意:**  首先需要在 hive 中创建 user 表。

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
备注：以上过程所有的 SQL 可以放在一个文件中提交执行。

## 使用 Inlong Dashboard 方式

目前 Dashboard 支持文件采集同步的方式，以上数据源可视化配置方式正在开发中。

## 使用 Manager Client Tools 方式

TODO: 未来发布的版本将会支持。
