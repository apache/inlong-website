---
title: StarRocks
sidebar_position: 17
---

import {siteVariables} from '../../version';

## Overview
 - `StarRocks Load` node supports writing data to the StarRocks database.
 - Two modes are supported for sink to StarRocks: 
Single-sink for specify fixed database name and table name to sink. 
Multi-sink for custom database name and table name according to src format, which suitable for scenarios such as multi-table writing or whole database synchronization.
 - This document describes how to set up a StarRocks Load node to sink to StarRocks.

## Supported Version

| Load Node           | StarRocks version  |                                                                                                                                                                                                                                                                                                                                                                                           
|---------------------|----------------|
| [StarRocks](./starrocks.md) | 2.0+          |  

## Dependencies

In order to set up the StarRocks Load node, the dependency information needed to use a build automation tool
such as Maven or SBT is provided below.

### Maven dependency

```xml
<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-starrocks</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
```

## Prepare
### Create MySql Extract table
- For Single-sink: Create a table `cdc.cdc_mysql_source` in the MySQL database. The command is as follows:
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
- For Multi-sink: Create tables `user_db.user_id_name`、`user_db.user_id_score` in the MySQL database. The command is as follows:
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

### Create StarRocks Load table
- For Single-sink: Create a table `cdc.cdc_starrocks_sink` in the StarRocks database. The command is as follows:
```shell
[root@fe001 ~]# mysql -u username -h localhost -P 9030 -p password
mysql> use cdc;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A
Database changed

mysql> CREATE TABLE `cdc_starrocks_sink` (
       `id` int(11) NOT NULL COMMENT "user id",
       `name` varchar(50) NOT NULL COMMENT "user name",
       `dr` tinyint(4) NULL COMMENT "delete tag"
       ) ENGINE=OLAP
       PRIMARY KEY(`id`)
       COMMENT "OLAP"
       DISTRIBUTED BY HASH(`id`) BUCKETS 1
       PROPERTIES (
       "replication_allocation" = "tag.location.default: 1"
       );
Query OK, 0 rows affected (0.06 sec)
```
- For Multi-sink: Create tables `user_db.starrocks_user_id_name`、`user_db.starrocks_user_id_score` in the StarRocks database. The command is as follows:
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

## How to create a StarRocks Load Node

### Usage for SQL API
- For Single-sink: StarRocks load
```shell
[root@tasknode001 flink-1.15.4]# ./bin/sql-client.sh -l ./opt/connectors/mysql-cdc-inlong/ -l ./opt/connectors/starrocks/
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
- For Single-sink: StarRocks load
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
    >  'sink.multiple.table-pattern' = 'starrocks_${table}'
    > );
[INFO] Execute statement succeed.

Flink SQL> insert into cdc_starrocks_sink select * from cdc_mysql_source /*+ OPTIONS('server-id'='5402') */;
[INFO] Submitting SQL update statement to the cluster...
[INFO] SQL update statement has been successfully submitted to the cluster:
Job ID: 30feaa0ede92h6b6e25ea0cfda26df5e
```

### Usage for InLong Dashboard

TODO: It will be supported in the future.

### Usage for InLong Manager Client

TODO: It will be supported in the future.

## StarRocks Load Node Options

| Option                            | Required     | Default           | Type    | Description |
|-----------------------------------|--------------|-------------------|---------|-------------|
| connector                         | required     | (none)            | string  | Specify which connector to use, valid values are: `starrocks-inlong` |
| jdbc-url                          | required     | (none)            | string  | this will be used to execute queries in starrocks. |                  
| load-url                          | required     | (none)            | string  | fe_ip:http_port;fe_ip:http_port separated with `;`, which would be used to do the batch sinking. |                                                             
| database-name                     | required     | (none)            | string  | starrocks database name |
| table-name                        | required     | (none)            | string  | starrocks table name |
| username                          | required     | (none)            | string  | starrocks connecting username |
| password                          | required     | (none)            | string  | starrocks connecting password |
| sink.semantic                     | optional     | at-least-once     | string  | at-least-once or exactly-once(flush at checkpoint only and options like sink.buffer-flush.* won't work either). |
| sink.version                      | optional     | AUTO             | string  | The version of implementaion for sink exactly-once. Only availible for connector 1.2.4+. If V2, use StarRocks stream load transaction interface which requires StarRocks 2.4+. If V1, use stream load non-transaction interface. If AUTO, connector will choose the stream load transaction interface automatically if the StarRocks supports the feature, otherwise choose non-transaction interface. |
| sink.buffer-flush.max-bytes       | optional     | 94371840(90M)    | string  | the max batching size of the serialized data, range: [64MB, 10GB]. |
| sink.buffer-flush.max-rows        | optional     | 500000           | string  | the max batching rows, range: [64,000, 5000,000]. |
| sink.buffer-flush.interval-ms     | optional     | 300000           | string  | the flushing time interval, range: [1000ms, 3600000ms]. |
| sink.max-retries                  | optional     | 3                | string  | max retry times of the stream load request, range: [0, 10]. |
| sink.connect.timeout-ms           | optional     | 1000             | string  | Timeout in millisecond for connecting to the load-url, range: [100, 60000]. |
| sink.properties.format            | optional     | CSV              | string  | The file format of data loaded into starrocks. Valid values: CSV and JSON. Default value: CSV. |
| sink.properties.*                 | optional     | NONE             | string  | the stream load properties like `sink.properties.columns` = `k1, k2, k3`,details in STREAM LOAD. Since 2.4, the flink-connector-starrocks supports partial updates for Primary Key model. |
| sink.properties.ignore_json_size  | optional     | false            | string  | ignore the batching size (100MB) of json data | 
| sink.multiple.enable              | optional   | false             | boolean  | Determine whether to support multiple sink writing, default is `false`. when `sink.multiple.enable` is `true`, need `sink.multiple.format`、`sink.multiple.database-pattern`、`sink.multiple.table-pattern` be correctly set.  |
| sink.multiple.format              | optional   | (none)            | string   | The format of multiple sink, it represents the real format of the raw binary data. can be `canal-json` or `debezium-json` at present. See [kafka -- Dynamic Topic Extraction](https://github.com/apache/inlong-website/blob/master/docs/data_node/load_node/kafka.md) for more details.  |
| sink.multiple.database-pattern    | optional   | (none)            | string   | Extract database name from the raw binary data, this is only used in the multiple sink writing scenario.                 | 
| sink.multiple.table-pattern       | optional   | (none)            | string   | Extract table name from the raw binary data, this is only used in the multiple sink writing scenario. |
| inlong.metric.labels | optional | (none) | String | Inlong metric label, format of value is groupId=`{groupId}`&streamId=`{streamId}`&nodeId=`{nodeId}`. |
| sink.multiple.schema-update.policy | optional | (none) | string | If sink data fields do not match starrocks table, such as table does not exsit or string data is over length, starrocks server will throw an exception.<br /><br /> When this option is `THROW_WITH_STOP`, the exception will be thrown up to flink framework, flink will restart task automatically, trying to resume the task.<br /><br /> When this option is `STOP_PARTIAL`, starrocks connector will stop writing into this table, other tables are written normally. The exception will be logging but not thrown up.<br /><br /> When this option is `LOG_WITH_IGNORE`, starrocks connector only log the error, not throw up. StarRocks connector will try to write to starrocks server again when receiving new source data. |
| dirty.ignore | optinal | (none)| boolean | When writing data into starrocks table, errors may be thrown by starrocks server as table does not exist or data is over length. <br /><br /> When this option is `true`, and `dirty.side-output.*` properties are configed correctly, dirty data can be written to Amazon S3 or Tencent Colud COS storage. Dirty data metrics will also be collected automatically. <br /><br /> When this option is `false`, only dirty data metrics will be collected, but dirty data will not be archived. |
| dirty.side-output.enable | optinal | (none)| boolean | When this option is `ture` and other options about S3 or COS is configed correctly, dirty data archiving will works. When `false`, dirty data archiving will not work. |
| dirty.side-output.connector | optinal | (none)| string | `s3` or `log` are supported now.<br /><br /> When `log`, starrocks connector only log the dirty data, not archive data.<br /><br /> When `s3`, starrocks connector can write dirty data to S3 or COS. |
| dirty.side-output.s3.bucket | optinal | (none)| string | The bucket name of S3 or COS |
| dirty.side-output.s3.endpoint | optinal | (none)| string | The endpoint of S3 or COS |
| dirty.side-output.s3.key | optinal | (none)| string | The key of S3 or COS  |
| dirty.side-output.s3.region | optinal | (none)| string | The region of S3 or COS |
| dirty.side-output.line-delimiter | optinal | (none)| string | The line delimiter of dirty data |
| dirty.side-output.field-delimiter | optinal | (none)| string | The field delimiter of dirty data |
| dirty.side-output.s3.secret-key-id | optinal | (none)| string | The secret key of S3 or COS |
| dirty.side-output.s3.access-key-id | optinal | (none)| string | The access key of S3 or COS |
| dirty.side-output.format | optinal | (none)| string | The format of dirty data archiving, supports `json` or `csv` |
| dirty.side-output.log-tag | optinal | (none)| string | The log tag of dirty data. StarRocks connector uses lags to distinguish which starrocks database and table the dirty data will be written to. |
| dirty.identifier | optinal | (none)| string | The file name of drity data which written to S3 or COS. |
| dirty.side-output.labels | optinal | (none)| string | Every dirty data line contains label and business data fields. Label is in front, and business data is at end. |

## Data Type Mapping

| Flink type | StarRocks type |
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

See [flink-connector-starrocks](https://github.com/StarRocks/starrocks-connector-for-apache-flink/blob/main/README.md) for more details.