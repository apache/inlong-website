---
title: 数据流示例
sidebar_position: 3
---

# 示例

为了更容易创建InLong-Sort作业，这里我们列出了一些数据流配置示例。  
下面将介绍InLong-Sort的SQL、Dashboard、Manager客户端工具的使用。

# 前置配置

Step1. 示例只需要构建一个 Flink Standalone 单集群。[Flink Standalone Mode](https://nightlies.apache.org/flink/flink-docs-master/docs/deployment/resource-providers/standalone/overview/)

Step2. 安装 MySQL 及开启 binlog 能力。[MySQL Installation Guide](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/) 和 [MySQL binlog](https://dev.mysql.com/doc/refman/5.7/en/replication-howto-masterbaseconfig.html)
（关于开启 MySQL binlog 能力也可以参考 Inlong MySQL 抽取节点配置的文档说明。）

Step3. 安装单集群 Kafka 和 Hadoop 单集群。[Kafka Installation Guide](https://kafka.apache.org/quickstart) 和 [Hadoop Installation Guide](https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-common/SingleCluster.html)

Step4. 下载安装 Hive 及开启 Hive metastore  服务。[Hive Installation Guide](https://cwiki.apache.org/confluence/display/Hive//GettingStarted)

Step5. 下载 Inlong 安装包 [inlong-distribution-(version)-incubating-bin.tar.gz] (https://inlong.apache.org/download/main) 
和 Inlong Sort Connectors 依赖包 [inlong-distribution-(version)-incubating-sort-connectors.tar.gz](https://inlong.apache.org/download/main) ，示例需要的MySQL、Kakfa、Hive 等 connector 可以在 Connectors 中获取。
 
Step6. 把 sort-dist-[version].jar 和 MySQL,Kafka,Hive 的 connector jar 放到  FLINK_HOME/lib 中。

备注： 其中 sort-dist-[version].jar 在 inlong-sort 包中。 [inlong-distribution-(version)-incubating-bin.tar.gz](https://inlong.apache.org/download/main) 

# 使用 SQL 方式

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

# 使用 Inlong Dashboard 方式

目前 Dashboard 支持文件采集同步的方式，以上数据源可视化配置方式正在开发中。

# 使用 Manager Client Tools 方式

TODO: 未来发布的版本将会支持。
