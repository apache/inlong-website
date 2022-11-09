---
title: Doris
sidebar_position: 16
---

import {siteVariables} from '../../version';

## Overview
 - `Doris Load` node supports writing data to the Doris database.
 - Two modes are supported for sink to Doris: 
Single-sink for specify fixed database name and table name to sink. 
Multi-sink for custom database name and table name according to src format, which suitable for scenarios such as multi-table writing or whole database synchronization.
 - This document describes how to set up a Doris Load node to sink to Doris.

## Supported Version

| Load Node           | Doris version  |                                                                                                                                                                                                                                                                                                                                                                                           
|---------------------|----------------|
| [Doris](./doris.md) | 0.13+          |  

## Dependencies

In order to set up the Doris Load node, the dependency information needed to use a build automation tool
such as Maven or SBT is provided below.

### Maven dependency

<pre><code parentName="pre">
{`<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-doris</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
`}
</code></pre>

## Prepare
### Create MySql Extract table
- For Single-sink: Create a table `cdc.cdc_mysql_source` in the MySQL database. The command is as follows:
```sql
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
- For Multi-sink: Create tables `user_db.user_id_name`、`user_db.user_id_name` in the MySQL database. The command is as follows:
```sql
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

### Create Doris Load table
- For Single-sink: Create a table `cdc.cdc_doris_sink` in the Doris database. The command is as follows:
```sql
[root@fe001 ~]# mysql -u root -h localhost -P 9030 -p000000
mysql> use cdc;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A
Database changed

mysql> CREATE TABLE `cdc_doris_sink` (
       `id` int(11) NOT NULL COMMENT "user id",
       `name` varchar(50) NOT NULL COMMENT "user name",
       `dr` tinyint(4) NULL COMMENT "delete tag"
       ) ENGINE=OLAP
       UNIQUE KEY(`id`)
       COMMENT "OLAP"
       DISTRIBUTED BY HASH(`id`) BUCKETS 1
       PROPERTIES (
       "replication_allocation" = "tag.location.default: 1"
       );
Query OK, 0 rows affected (0.06 sec)
```
- For Multi-sink: Create tables `user_db.doris_user_id_name`、`user_db.doris_user_id_score` in the Doris database. The command is as follows:
```sql
[root@fe001 ~]# mysql -u root -h localhost -P 9030 -p000000
mysql> use user_db;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A
Database changed

mysql> CREATE TABLE `doris_user_id_name` (
       `id` int(11) NOT NULL COMMENT "用户id",
       `name` varchar(50) NOT NULL COMMENT "昵称"
       ) ENGINE=OLAP
       UNIQUE KEY(`id`)
       COMMENT "OLAP"
       DISTRIBUTED BY HASH(`id`) BUCKETS 1
       PROPERTIES (
       "replication_allocation" = "tag.location.default: 1"
       );
Query OK, 0 rows affected (0.06 sec)

mysql> CREATE TABLE `doris_user_id_score` (
       `id` int(11) NOT NULL COMMENT "用户id",
       `score` double default 0
       ) ENGINE=OLAP
       UNIQUE KEY(`id`)
       COMMENT "OLAP"
       DISTRIBUTED BY HASH(`id`) BUCKETS 1
       PROPERTIES (
       "replication_allocation" = "tag.location.default: 1"
       );
Query OK, 0 rows affected (0.06 sec)
```

## How to create a Doris Load Node

### Usage for SQL API
- For Single-sink: Doris load
```sql
[root@tasknode001 flink-1.13.5]# ./bin/sql-client.sh -l ./opt/connectors/mysql-cdc-inlong/ -l ./opt/connectors/doris/
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

Flink SQL> CREATE TABLE cdc_doris_sink (
    > id INT,
    > name STRING,
    > dr TINYINT
    > ) WITH (
    >  'connector' = 'doris-inlong',
    >  'fenodes' = 'localhost:8030',
    >  'table.identifier' = 'cdc.cdc_doris_sink',
    >  'username' = 'root',
    >  'password' = '000000',
    >  'sink.properties.format' = 'json',
    >  'sink.properties.strip_outer_array' = 'true',
    >  'sink.enable-delete' = 'true'
    > );
[INFO] Execute statement succeed.

-- Support delete event synchronization (sink.enable-delete='true'), requires Doris table to enable batch delete function
Flink SQL> insert into cdc_doris_sink select * from cdc_mysql_source /*+ OPTIONS('server-id'='5402') */;
[INFO] Submitting SQL update statement to the cluster...
[INFO] SQL update statement has been successfully submitted to the cluster:
Job ID: 5f89691571d7b3f3ca446589e3d0c3d3
```
- For Single-sink: Doris load
```sql
./bin/sql-client.sh -l ./opt/connectors/mysql-cdc-inlong/ -l ./opt/connectors/doris/
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

Flink SQL> CREATE TABLE cdc_doris_sink (
    > id INT,
    > name STRING,
    > dr TINYINT
    > ) WITH (
    >  'connector' = 'doris-inlong',
    >  'fenodes' = 'localhost:8030',
    >  'username' = 'root',
    >  'password' = '000000',
    >  'sink.enable-delete' = 'true',
    >  'sink.multiple.enable' = 'true',
    >  'sink.multiple.format' = 'canal-json',
    >  'sink.multiple.database-pattern' = '${database}',
    >  'sink.multiple.table-pattern' = 'doris_${table}'
    > );
[INFO] Execute statement succeed.

-- Support delete event synchronization (sink.enable-delete='true'), requires Doris table to enable batch delete function
Flink SQL> insert into cdc_doris_sink select * from cdc_mysql_source /*+ OPTIONS('server-id'='5402') */;
[INFO] Submitting SQL update statement to the cluster...
[INFO] SQL update statement has been successfully submitted to the cluster:
Job ID: 30feaa0ede92h6b6e25ea0cfda26df5e
```

### Usage for InLong Dashboard

TODO: It will be supported in the future.

### Usage for InLong Manager Client

TODO: It will be supported in the future.

## Doris Load Node Options

| Option                            | Required     | Default           | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                             |
|-----------------------------------|--------------|-------------------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| connector                         | required     | (none)            | string  | Specify which connector to use, valid values are: `doris`                                                                                                                                                                                                                                                                                                                                                               |
| fenodes                           | required     | (none)            | string  | Doris FE http address, support multiple addresses, separated by commas                                                                                                                                                                                                                                                                                                                                                  |
| table.identifier	                 | required     | (none)            | string  | Doris table identifier, eg, db1.tbl1                                                                                                                                                                                                                                                                                                                                                                                    |
| username	                         | required     | (none)            | string  | Doris username                                                                                                                                                                                                                                                                                                                                                                                                          |
| password                          | required     | (none)            | string  | Doris password                                                                                                                                                                                                                                                                                                                                                                                                          |
| doris.request.retries             | optional     | 3                 | int     | Number of retries to send requests to Doris                                                                                                                                                                                                                                                                                                                                                                             |
| doris.request.connect.timeout.ms	 | optional     | 30000             | int     | Connection timeout for sending requests to Doris                                                                                                                                                                                                                                                                                                                                                                        |
| doris.request.read.timeout.ms     | optional     | 30000             | int     | Read timeout for sending request to Doris                                                                                                                                                                                                                                                                                                                                                                               |
| doris.request.query.timeout.s     | optional     | 3600              | int     | Query the timeout time of Doris, the default is 1 hour, -1 means no timeout limit                                                                                                                                                                                                                                                                                                                                       |
| doris.request.tablet.size         | optional     | Integer.MAX_VALUE | int     | The number of Doris Tablets corresponding to an Partition. The smaller this value is set, the more partitions will be generated. This will increase the parallelism on the flink side, but at the same time will cause greater pressure on Doris.                                                                                                                                                                       |
| doris.batch.size                  | optional     | 1024              | int     | The maximum number of rows to read data from BE at one time. Increasing this value can reduce the number of connections between Flink and Doris. Thereby reducing the extra time overhead caused by network delay.                                                                                                                                                                                                      |
| doris.exec.mem.limit	             | optional     | 2147483648        | long    | Memory limit for a single query. The default is 2GB, in bytes.                                                                                                                                                                                                                                                                                                                                                          |
| doris.deserialize.arrow.async     | optional     | false             | boolean | Whether to support asynchronous conversion of Arrow format to RowBatch required for flink-doris-connector iteration                                                                                                                                                                                                                                                                                                     |
| doris.deserialize.queue.size	     | optional     | 64                | int     | Asynchronous conversion of the internal processing queue in Arrow format takes effect when doris.deserialize.arrow.async is true                                                                                                                                                                                                                                                                                        |
| doris.read.field	                 | optional     | (none)            | string  | List of column names in the Doris table, separated by commas                                                                                                                                                                                                                                                                                                                                                            |
| doris.filter.query                | optional     | (none)            | string  | Filter expression of the query, which is transparently transmitted to Doris. Doris uses this expression to complete source-side data filtering.                                                                                                                                                                                                                                                                         |
| sink.batch.size                   | optional     | 10000             | int     | Maximum number of lines in a single write BE                                                                                                                                                                                                                                                                                                                                                                            |
| sink.max-retries                  | optional     | 1                 | int     | Number of retries after writing BE failed                                                                                                                                                                                                                                                                                                                                                                               |
| sink.batch.interval               | optional     | 10s               | string  | The flush interval, after which the asynchronous thread will write the data in the cache to BE. The default value is 10 second, and the time units are ms, s, min, h, and d. Set to 0 to turn off periodic writing.                                                                                                                                                                                                     |
| sink.properties.*                 | optional     | (none)            | string  | The stream load parameters.<br /> <br /> eg:<br /> sink.properties.column_separator' = ','<br /> <br />  Setting 'sink.properties.escape_delimiters' = 'true' if you want to use a control char as a separator, so that such as '\\x01' will translate to binary 0x01<br /><br />  Support JSON format import, you need to enable both 'sink.properties.format' ='json' and 'sink.properties.strip_outer_array' ='true' |
| sink.enable-delete                | optional     | true              | boolean | Whether to enable deletion. This option requires Doris table to enable batch delete function (0.15+ version is enabled by default), and only supports Uniq model.                                                                                                                                                                                                                                                       |
| sink.multiple.enable              | optional   | false             | boolean  | Determine whether to support multiple sink writing, default is `false`. when `sink.multiple.enable` is `true`, need `sink.multiple.format`、`sink.multiple.database-pattern`、`sink.multiple.table-pattern` be correctly set.        |
| sink.multiple.format              | optional   | (none)            | string   | The format of multiple sink, it represents the real format of the raw binary data. can be `canal-json` or `debezium-json` at present. See [kafka -- Dynamic Topic Extraction](https://github.com/apache/inlong-website/blob/master/docs/data_node/load_node/kafka.md) for more details.  |
| sink.multiple.database-pattern    | optional   | (none)            | string   | Extract database name from the raw binary data, this is only used in the multiple sink writing scenario.                 | 
| sink.multiple.table-pattern       | optional   | (none)            | string   | Extract table name from the raw binary data, this is only used in the multiple sink writing scenario.                           |
| sink.multiple.ignore-single-table-errors | optional | true         | boolean  | Whether ignore the single table erros when multiple sink writing scenario. When it is `true`，sink continue when one table occur exception, only stop the exception table sink. When it is `false`, stop the whole sink when one table occur exception.     |

## Data Type Mapping

| Doris Type  | Flink Type           |
|-------------|----------------------|
| NULL_TYPE   | NULL                 |
| BOOLEAN     | BOOLEAN              |
| TINYINT     | TINYINT              |
| SMALLINT    | SMALLINT             |
| INT         | INT                  |
| BIGINT      | BIGINT               |
| FLOAT       | FLOAT                |
| DOUBLE      | DOUBLE               |
| DATE        | STRING               |
| DATETIME    | STRING               |
| DECIMAL     | DECIMAL              |
| CHAR        | STRING               |
| LARGEINT    | STRING               |
| VARCHAR     | STRING               |
| DECIMALV2   | DECIMAL              |
| TIME        | DOUBLE               |
| HLL         | Unsupported datatype |

See [flink-doris-connector](https://github.com/apache/doris/blob/1.0.0-rc03/docs/en/extending-doris/flink-doris-connector.md) for more details.