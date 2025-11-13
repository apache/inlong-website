---
title: StarRocks
sidebar_position: 17
---

import {siteVariables} from '../../version';

## 概览

`StarRocks Load` 节点支持将数据写入 StarRocks 数据库。 
支持单表写入和多表写入两种模式：单表写入为指定固定库名表名写入；多表写入支持根据源端数据格式自定义库名表名写入，适用于源端多表写入或者整库同步等场景。
本文档介绍如何设置 StarRocks Load 节点实现写入 StarRocks 数据库表。

## 支持的版本

| Load 节点             | StarRocks 版本 |                                                                                                                                                                                                                                                                                                                                                                                           
|---------------------|----------|
| [StarRocks](./starrocks.md) | 2.0+    |  

## 依赖

为了设置 StarRocks Load 节点, 下面提供了使用构建自动化工具（例如 Maven 或 SBT）所需要的依赖信息。

### Maven 依赖

```xml
<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-starrocks</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
```

## 准备
### 创建 MySQL Extract 表
- 单表写入：在 MySQL `cdc` 数据库中创建表 `cdc_mysql_source`。 命令如下:
```shell
[root@fe001 ~]# mysql -u root -h localhost -P 3306 -p123456
mysql> use cdc;
Database changed
mysql> CREATE TABLE `cdc_mysql_source` (
       `id` int(11) NOT NULL AUTO_INCREMENT,
       `name` varchar(64) DEFAULT NULL,
       `dr` tinyint(3) DEFAULT 0,
       PRIMARY KEY (`id`)
       );
Query OK, 0 rows affected (0.02 sec)

mysql> insert into cdc_mysql_source values(1, 'zhangsan', 0),(2, 'lisi', 0),(3, 'wangwu', 0);
Query OK, 3 rows affected (0.01 sec)
Records: 3  Duplicates: 0  Warnings: 0

mysql> select * from cdc_mysql_source;
+----+----------+----+
| id | name     | dr |
+----+----------+----+
|  1 | zhangsan |  0 |
|  2 | lisi     |  0 |
|  3 | wangwu   |  0 |
+----+----------+----+
3 rows in set (0.07 sec)
```
- 多表写入：在 MySQL `user_db` 数据库中创建表 `user_id_name`、`user_id_score`。 命令如下:
```shell
[root@fe001 ~]# mysql -u root -h localhost -P 3306 -p123456
mysql> use user_db;
Database changed
mysql> CREATE TABLE `user_id_name` (
       `id` int(11) NOT NULL AUTO_INCREMENT,
       `name` varchar(64) DEFAULT NULL
       PRIMARY KEY (`id`)
       );
Query OK, 0 rows affected (0.02 sec)

mysql> CREATE TABLE `user_id_score` (
       `id` int(11) NOT NULL AUTO_INCREMENT,
       `score` double default 0,
       PRIMARY KEY (`id`)
       );
Query OK, 0 rows affected (0.02 sec)

mysql> insert into user_id_name values(1001, 'lily'),(1002, 'tom'),(1003, 'alan');
Query OK, 3 rows affected (0.01 sec)
Records: 3  Duplicates: 0  Warnings: 0 

mysql> insert into user_id_score values(1001, 99),(1002, 96),(1003, 98);
Query OK, 3 rows affected (0.01 sec)
Records: 3  Duplicates: 0  Warnings: 0 

mysql> select * from user_id_name;
+------+--------+
|  id  | name   |
+------+--------+
| 1001 | lily   |
| 1002 | tom    |
| 1003 | alan   |
+----+----------+
3 rows in set (0.07 sec)    

mysql> select * from user_id_score;
+------+------+
|  id  | name |
+------+------+
| 1001 | 99   |
| 1002 | 96   |
| 1003 | 98   |
+----+--------+
3 rows in set (0.07 sec)  
```

### 创建 StarRocks Load 表
- 单表写入：在 StarRocks `cdc`数据库中创建表`cdc_starrocks_sink`。命令如下:
```shell
[root@fe001 ~]# mysql -u username -h localhost -P 9030 -p password
mysql> use cdc;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A
Database changed

mysql> CREATE TABLE `cdc_starrocks_sink` (
       `id` int(11) NOT NULL COMMENT "用户id",
       `name` varchar(50) NOT NULL COMMENT "昵称",
       `dr` tinyint(4) NULL COMMENT "逻辑删除"
       ) ENGINE=OLAP
       PRIMARY KEY(`id`)
       COMMENT "OLAP"
       DISTRIBUTED BY HASH(`id`) BUCKETS 1
       PROPERTIES (
       "replication_allocation" = "tag.location.default: 1"
       );
Query OK, 0 rows affected (0.06 sec)
```
- 多表写入：在 StarRocks `user_db`数据库中创建表`starrocks_user_id_name`、`starrocks_user_id_score`。命令如下:
```shell
[root@fe001 ~]# mysql -u username -h localhost -P 9030 -p password
mysql> use user_db;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A
Database changed

mysql> CREATE TABLE `starrocks_user_id_name` (
       `id` int(11) NOT NULL COMMENT "用户id",
       `name` varchar(50) NOT NULL COMMENT "昵称"
       ) ENGINE=OLAP
       PRIMARY KEY(`id`)
       COMMENT "OLAP"
       DISTRIBUTED BY HASH(`id`) BUCKETS 1
       PROPERTIES (
       "replication_allocation" = "tag.location.default: 1"
       );
Query OK, 0 rows affected (0.06 sec)

mysql> CREATE TABLE `starrocks_user_id_score` (
       `id` int(11) NOT NULL COMMENT "用户id",
       `score` double default 0
       ) ENGINE=OLAP
       PRIMARY KEY(`id`)
       COMMENT "OLAP"
       DISTRIBUTED BY HASH(`id`) BUCKETS 1
       PROPERTIES (
       "replication_allocation" = "tag.location.default: 1"
       );
Query OK, 0 rows affected (0.06 sec)
```

## 如何创建 StarRocks Load 节点

### SQL API 用法
- 单表写入： StarRocks 单表写入
```shell
[root@tasknode001 flink-1.13.5]# ./bin/sql-client.sh -l ./opt/connectors/mysql-cdc-inlong/ -l ./opt/connectors/starrocks/
Flink SQL> SET 'execution.checkpointing.interval' = '3s';
[INFO] Session property has been set.

Flink SQL> SET 'table.dynamic-table-options.enabled' = 'true';
[INFO] Session property has been set.

Flink SQL> CREATE TABLE cdc_mysql_source (
    >   id int
    >   ,name VARCHAR
    >   ,dr TINYINT
    >   ,PRIMARY KEY (id) NOT ENFORCED
    > ) WITH (
    >  'connector' = 'mysql-cdc-inlong',
    >  'hostname' = 'localhost',
    >  'port' = '3306',
    >  'username' = 'root',
    >  'password' = '123456',
    >  'database-name' = 'cdc',
    >  'table-name' = 'cdc_mysql_source'
    > );
[INFO] Execute statement succeed.

Flink SQL> CREATE TABLE cdc_starrocks_sink (
    > id INT,
    > name STRING,
    > dr TINYINT
    > ) WITH (
    >  'connector' = 'starrocks-inlong',
    >  'fenodes' = 'localhost:8030',
    >  'table.identifier' = 'cdc.cdc_starrocks_sink',
    >  'username' = 'username',
    >  'password' = 'password',
    >  'sink.properties.format' = 'json',
    >  'sink.properties.strip_outer_array' = 'true'
    > );
[INFO] Execute statement succeed.

Flink SQL> insert into cdc_starrocks_sink select * from cdc_mysql_source /*+ OPTIONS('server-id'='5402') */;
[INFO] Submitting SQL update statement to the cluster...
[INFO] SQL update statement has been successfully submitted to the cluster:
Job ID: 5f89691571d7b3f3ca446589e3d0c3d3
```

- 多表写入： StarRocks 多表写入
```shell
./bin/sql-client.sh -l ./opt/connectors/mysql-cdc-inlong/ -l ./opt/connectors/starrocks/
Flink SQL> SET 'execution.checkpointing.interval' = '3s';
[INFO] Session property has been set.

Flink SQL> SET 'table.dynamic-table-options.enabled' = 'true';
[INFO] Session property has been set.

Flink SQL> CREATE TABLE cdc_mysql_source (
    >   id int
    >   ,name VARCHAR
    >   ,dr TINYINT
    >   ,PRIMARY KEY (id) NOT ENFORCED
    > ) WITH (
    >  'connector' = 'mysql-cdc-inlong',
    >  'hostname' = 'localhost',
    >  'port' = '3306',
    >  'username' = 'root',
    >  'password' = '123456',
    >  'database-name' = 'test',
    >  'table-name' = 'cdc_mysql_source'
    > );
[INFO] Execute statement succeed.

Flink SQL> CREATE TABLE cdc_starrocks_sink (
    > id INT,
    > name STRING,
    > dr TINYINT
    > ) WITH (
    >  'connector' = 'starrocks-inlong',
    >  'fenodes' = 'localhost:8030',
    >  'username' = 'username',
    >  'password' = 'password',
    >  'sink.multiple.enable' = 'true',
    >  'sink.multiple.format' = 'canal-json',
    >  'sink.multiple.database-pattern' = '${database}',
    >  'sink.multiple.table-pattern' = 'StarRocks_${table}'
    > );
[INFO] Execute statement succeed.

Flink SQL> insert into cdc_starrocks_sink select * from cdc_mysql_source /*+ OPTIONS('server-id'='5402') */;
[INFO] Submitting SQL update statement to the cluster...
[INFO] SQL update statement has been successfully submitted to the cluster:
Job ID: 30feaa0ede92h6b6e25ea0cfda26df5e
```

### InLong Dashboard 用法

:::note
将在未来支持此功能
:::

### InLong Manager Client 用法

:::note
将在未来支持此功能
:::

## StarRocks Load 节点参数

| 参数                               | 是否必选  | 默认值            | 数据类型  | 描述     |
| --------------------------------- | ------- | ----------------- | ------- | ------- |
| connector                         | 必选     | 无                | string  | 指定使用哪个 connector ，合法值为 `starrocks-inlong` |
| jdbc-url                          | 必选     | 无                | string  | 用于在 StarRocks 中执行查询 |                  
| load-url                          | 必选     | 无                | string  | 格式为 fe_ip:http_port;fe_ip:http_port 用分号(;)隔开。用于向 StarRocks 批量写入数据。|                                                 
| database-name                     | 必选     | 无                | string  | StarRocks 的数据库名 |
| table-name                        | 必选     | 无                | string  | StarRocks 的表名 |
| username                          | 必选     | 无                | string  | StarRocks 连接的用户名 |
| password                          | 必选     | 无                | string  | StarRocks 连接的口令 |
| sink.semantic                     | 可选     | at-least-once    | string  | 可选值为 at-least-once 或 exactly-once (仅在 checkpoint 时刷新数据，`sink.buffer-flush.*` 等参数将不再工作) |
| sink.version                      | 可选     | AUTO             | string  | exectly-once语义的实现版本，只有 connector 在1.2.4及以上的版本时才可用。如果填 V2，则使用 StarRocks 的 stream load 事务接口需要 2.4 及以上的 StarRocks 版本。如果填 V1，则使用 stream load 非事务接口。如果填 AUTO，则 connector 根据 StarRocks 是否支持事务的特性来自动选择 stream load 的事务接口。 |
| sink.buffer-flush.max-bytes       | 可选     | 94371840(90M)    | string  | 批量刷新缓存数据的大小阈值，范围：[64MB, 10GB] |
| sink.buffer-flush.max-rows        | 可选     | 500000           | string  | 批量刷新缓存数据的行数阈值，范围：[64,000, 5000,000] |
| sink.buffer-flush.interval-ms     | 可选     | 300000           | string  | 批量刷新缓存数据的时间间隔，范围：[1000ms, 3600000ms] |
| sink.max-retries                  | 可选     | 3                | string  | Stream load 请求的最大重试次数，范围：[0, 10] |
| sink.connect.timeout-ms           | 可选     | 1000             | string  | 连接到指定的 load-url 的超时时间，单位：毫秒，范围：[100, 60000] |
| sink.properties.format            | 可选     | CSV              | string  | 导入到 StarRocks 的数据文件格式，可选的值为：CSV 和 JSON 。默认为: CSV |
| sink.properties.*                 | 可选     | 无                | string  | Stream load 的属性，例如：`sink.properties.columns` = `k1, k2, k3`。从 StarRocks 2.4 开始，flink-connector-starrocks 支持 Primary Key 模式下的数据部分更新。 |
| sink.properties.ignore_json_size  | 可选     | false            | string  |  忽略 json 数据的批量大小限制(100MB) | 
| sink.multiple.enable              | 可选     | false            | boolean | 决定是否开始多表(整库)写入特性，默认为 `false` 。当 `sink.multiple.enable` 为 `true` 时，也需要设置 `sink.multiple.format`、 `sink.multiple.database-pattern` 和 `sink.multiple.table-pattern` |
| sink.multiple.format              | 可选     | 无               | string   | 多表(整库)写入的数据格式，它表示 connector 之间流转的原始二进制数据的实际格式，目前支持 `canal-json` 和 `debezium-json` 。可以查看 [kafka -- Dynamic Topic Extraction](https://github.com/apache/inlong-website/blob/master/docs/data_node/load_node/kafka.md)获取更多信息。 |
| sink.multiple.database-pattern    | 可选     | 无               | string   | 从原始二进制数据中提取数据库名，仅在多表(整库)同步场景中使用。 | 
| sink.multiple.table-pattern       | 可选     | 无               | string   | 从原始二进制数据中提取表名，仅在多表(整库)同步场景中使用。 |
| inlong.metric.labels | 可选 | (none) | String | inlong metric 的标签值，该值的构成为 groupId=`{groupId}`&streamId=`{streamId}`&nodeId=`{nodeId}`。|
| sink.multiple.schema-update.policy | 可选 | (none) | string | 往 StarRocks 表同步数据时，如果 StarRocks 表不存在或字段长度超过限制，StarRocks 服务器会抛出异常。<br /><br /> 当该属性设置为 `THROW_WITH_STOP`，异常会向上抛给 Flink 框架。Flink 框架会自动重启任务，尝试恢复。<br /><br /> 当该属性设置为 `STOP_PARTIAL` 时，StarRocks connector 会忽略该表的写入，新数据不再往该表写入，其它表则正常同步。<br /><br /> 当该属性设置为 `LOG_WITH_IGNORE` 时，异常会打印到日志中，不会向上抛出。后续新数据到来时，继续尝试往该表写入。 |
| dirty.ignore | 可选 | (none)| boolean | 往 StarRocks 表同步数据时，如果遇到错误和异常，通过该变量可以控制是否忽略脏数据。如果设置为 `false` ，则忽略脏数据，不归档。如果为 `true` ，则根据其它的 `dirty.side-output.*` 的配置决定如何归档数据。 |
| dirty.side-output.connector | 可选 | (none)| string | 支持 `s3` 和 `log` 两种配置。当配置为 `log` 时，仅打印日志，不归档数据。当配置为 `s3` 时，可以将数据归档到亚马逊 S3 或腾讯云 COS 存储。 |
| dirty.side-output.s3.bucket | 可选 | (none)| string | S3 或 COS 的桶名称 |
| dirty.side-output.s3.endpoint | 可选 | (none)| string | S3 或 COS 的 endpoint 地址 |
| dirty.side-output.s3.key | 可选 | (none)| string | S3 或 COS 的 key  |
| dirty.side-output.s3.region | 可选 | (none)| string | S3 或 COS 的区域 |
| dirty.side-output.line-delimiter | 可选 | (none)| string | 脏数据的行分隔符 |
| dirty.side-output.field-delimiter | 可选 | (none)| string | 脏数据的字段分隔符 |
| dirty.side-output.s3.secret-key-id | 可选 | (none)| string | S3 或 COS 的 secret key |
| dirty.side-output.s3.access-key-id | 可选 | (none)| string | S3 或 COS 的 access key |
| dirty.side-output.format | 可选 | (none)| string | 脏数据归档的格式，支持 `json` 和 `csv` |
| dirty.side-output.log-tag | 可选 | (none)| string | 脏数据的 tag 。通过该变量区分每条脏数据归属于 StarRocks 的哪个库表。 |
| dirty.identifier | 可选 | (none)| string | 归档后的文件名 |
| dirty.side-output.labels | 可选 | (none)| string | 归档后的每条数据包括标签和业务数据两部分。标签在前面，业务数据在后面。 |

## 数据类型映射

| Flink类型   | StarRocks类型   |
| ---------- | -------------- |
| BOOLEAN    | BOOLEAN        |
| TINYINT    | TINYINT        |
| SMALLINT   | SMALLINT       |
| INTEGER    | INTEGER        |
| BIGINT     | BIGINT         |
| FLOAT      | FLOAT          |
| DOUBLE     | DOUBLE         |
| DECIMAL    | DECIMAL        |
| BINARY     | INT            |
| CHAR       | JSON / STRING  |
| VARCHAR    | JSON / STRING  |
| STRING     | JSON / STRING  |
| DATE       | DATE           |
| TIMESTAMP_WITHOUT_TIME_ZONE(N) | DATETIME |
| TIMESTAMP_WITH_LOCAL_TIME_ZONE(N) | DATETIME |
| ARRAY&lt;T&gt;   | ARRAY&lt;T&gt;       |
| MAP&lt;KT,VT&gt; | JSON / JSON STRING |
| ROW&lt;arg T...&gt; | JSON / JSON STRING |

查看 [flink-connector-starrocks](https://github.com/StarRocks/starrocks-connector-for-apache-flink/blob/main/README.md) 获取更多信息。
