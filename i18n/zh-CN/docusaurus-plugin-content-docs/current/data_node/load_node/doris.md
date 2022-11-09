---
title: Doris
sidebar_position: 16
---

import {siteVariables} from '../../version';

## 概览

`Doris Load` 节点支持将数据写入 Doris 数据库。 
支持单表写入和多表写入两种模式：单表写入为指定固定库名表名写入；多表写入支持根据源端数据格式自定义库名表名写入，适用于源端多表写入或者整库同步等场景。
本文档介绍如何设置 Doris Load 节点实现写入 Doris 数据库表。

## 支持的版本

| Load 节点             | Doris 版本 |                                                                                                                                                                                                                                                                                                                                                                                           
|---------------------|----------|
| [Doris](./doris.md) | 0.13+    |  

## 依赖

为了设置 Doris Load 节点, 下面提供了使用构建自动化工具（例如 Maven 或 SBT）所需要的依赖信息。

### Maven 依赖

<pre><code parentName="pre">
{`<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-doris</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
`}
</code></pre>

## 准备
### 创建 MySQL Extract 表
- 单表写入：在 MySQL `cdc` 数据库中创建表 `cdc_mysql_source`。 命令如下:
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
- 多表写入：在 MySQL `user_db` 数据库中创建表 `user_id_name`、`user_id_score`。 命令如下:
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

### 创建 Doris Load 表
- 单表写入：在 Doris `cdc`数据库中创建表`cdc_doris_sink`。命令如下:
```sql
[root@fe001 ~]# mysql -u root -h localhost -P 9030 -p000000
mysql> use cdc;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A
Database changed

mysql> CREATE TABLE `cdc_doris_sink` (
       `id` int(11) NOT NULL COMMENT "用户id",
       `name` varchar(50) NOT NULL COMMENT "昵称",
       `dr` tinyint(4) NULL COMMENT "逻辑删除"
       ) ENGINE=OLAP
       UNIQUE KEY(`id`)
       COMMENT "OLAP"
       DISTRIBUTED BY HASH(`id`) BUCKETS 1
       PROPERTIES (
       "replication_allocation" = "tag.location.default: 1"
       );
Query OK, 0 rows affected (0.06 sec)
```
- 多表写入：在 Doris `user_db`数据库中创建表`doris_user_id_name`、`doris_user_id_score`。命令如下:
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

## 如何创建 Doris Load 节点

### SQL API 用法
- 单表写入： Doris 单表写入
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
    > );
[INFO] Execute statement succeed.

-- 支持删除事件同步(sink.enable-delete='true'), 需要 Doris 表开启批量删除功能
Flink SQL> insert into cdc_doris_sink select * from cdc_mysql_source /*+ OPTIONS('server-id'='5402') */;
[INFO] Submitting SQL update statement to the cluster...
[INFO] SQL update statement has been successfully submitted to the cluster:
Job ID: 5f89691571d7b3f3ca446589e3d0c3d3
```

- 多表写入： Doris 多表写入
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

-- 支持删除事件同步(sink.enable-delete='true'), 需要 Doris 表开启批量删除功能
Flink SQL> insert into cdc_doris_sink select * from cdc_mysql_source /*+ OPTIONS('server-id'='5402') */;
[INFO] Submitting SQL update statement to the cluster...
[INFO] SQL update statement has been successfully submitted to the cluster:
Job ID: 30feaa0ede92h6b6e25ea0cfda26df5e
```

### InLong Dashboard 用法

TODO: 将在未来支持此功能。

### InLong Manager Client 用法

TODO: 将在未来支持此功能。

## Doris Load 节点参数

| 参数                                | 是否必选 | 默认值               | 数据类型     | 描述                                                                                                                                                                                                                                                                                                     |
|-----------------------------------|------|-------------------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| connector                         | 必选   | (none)            | string   | 指定要使用的连接器 `doris`                                                                                                                                                                                                                                                                                      |
| fenodes                           | 必选   | (none)            | string   | Doris FE http 地址                                                                                                                                                                                                                                                                                       |
| table.identifier	                 | 必选   | (none)            | string   | Doris 表名，如：db1.tbl1                                                                                                                                                                                                                                                                                    |
| username	                         | 必选   | (none)            | string   | 访问 Doris 的用户名                                                                                                                                                                                                                                                                                          |
| password                          | 必选   | (none)            | string   | 访问 Doris 的密码                                                                                                                                                                                                                                                                                           |
| doris.request.retries	            | 可选   | 3                 | int      | 向 Doris 发送请求的重试次数                                                                                                                                                                                                                                                                                      |
| doris.request.connect.timeout.ms	 | 可选   | 30000             | int      | 向 Doris 发送请求的连接超时时间                                                                                                                                                                                                                                                                                    |
| doris.request.read.timeout.ms	    | 可选   | 30000             | int      | 向 Doris 发送请求的读取超时时间                                                                                                                                                                                                                                                                                    |
| doris.request.query.timeout.s	    | 可选   | 3600              | int      | 查询 Doris 的超时时间，默认值为1小时，-1表示无超时限制                                                                                                                                                                                                                                                                       |
| doris.request.tablet.size	        | 可选   | Integer.MAX_VALUE | int      | 一个 Partition 对应的 Doris Tablet 个数。<br/>此数值设置越小，则会生成越多的 Partition。从而提升 Flink 侧的并行度，但同时会对 Doris 造成更大的压力。                                                                                                                                                                                                  |
| doris.batch.size                  | 可选   | 1024              | int      | 一次从 BE 读取数据的最大行数。增大此数值可减少 Flink 与 Doris 之间建立连接的次数。<br/>从而减轻网络延迟所带来的的额外时间开销。                                                                                                                                                                                                                            |
| doris.exec.mem.limit	             | 可选   | 2147483648        | long     | 单个查询的内存限制。默认为 2GB，单位为字节                                                                                                                                                                                                                                                                                |
| doris.deserialize.arrow.async	    | 可选   | false             | boolean  | 是否支持异步转换 Arrow 格式到 flink-doris-connector 迭代所需的 RowBatch                                                                                                                                                                                                                                                |
| doris.deserialize.queue.size	     | 可选   | 64                | int      | 异步转换 Arrow 格式的内部处理队列，当 doris.deserialize.arrow.async 为 true 时生效                                                                                                                                                                                                                                        |
| doris.read.field	                 | 可选   | (none)            | string   | 读取 Doris 表的列名列表，多列之间使用逗号分隔                                                                                                                                                                                                                                                                             |
| doris.filter.query                | 可选   | (none)            | string   | 过滤读取数据的表达式，此表达式透传给 Doris。Doris 使用此表达式完成源端数据过滤。                                                                                                                                                                                                                                                         |
| sink.batch.size                   | 可选   | 10000             | int      | 单次写 BE 的最大行数                                                                                                                                                                                                                                                                                           |
| sink.max-retries                  | 可选   | 1                 | int      | 写 BE 失败之后的重试次数                                                                                                                                                                                                                                                                                         |
| sink.batch.interval               | 可选   | 10s               | string   | Flush 间隔时间，超过该时间后异步线程将缓存中数据写入 BE。 默认值为10秒，支持时间单位 ms、s、min、h和d。设置为0表示关闭定期写入。                                                                                                                                                                                                                            |
| sink.properties.*                 | 可选   | (none)            | string   | Stream load 的导入参数<br /><br />例如:<br />'sink.properties.column_separator' = ', '<br />定义列分隔符<br /><br />'sink.properties.escape_delimiters' = 'true'<br />特殊字符作为分隔符,'\\x01'会被转换为二进制的0x01<br /><br /> 'sink.properties.format' = 'json'<br />'sink.properties.strip_outer_array' = 'true' <br />JSON格式导入 |
| sink.enable-delete                | 可选   | true              | boolean  | 是否启用删除。此选项需要 Doris 表开启批量删除功能(0.15+版本默认开启)，只支持 Uniq 模型。                                                                                                                                                                                                                                                 |
| sink.enable-delete                | 可选   | true              | boolean  | 是否启用删除。此选项需要 Doris 表开启批量删除功能(0.15+版本默认开启)，只支持 Uniq 模型。                                                                                                                                                                                                                                                 |
| sink.multiple.enable              | 可选   | false             | boolean  | 是否支持 Doris 多表写入。 `sink.multiple.enable` 为 `true` 时，需要 `sink.multiple.format` 、 `sink.multiple.database-pattern` 、 `sink.multiple.table-pattern` 分别设置正确的值。        |
| sink.multiple.format              | 可选   | (none)            | string   | 多表写入时，表示源端二进制数据的真实格式，支持 `canal-json` 和 `debezium-json` 两种格式，请参阅 [kafka -- 动态 Topic 提取](https://github.com/apache/inlong-website/blob/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/data_node/load_node/kafka.md) 获取更多细节。|
| sink.multiple.database-pattern    | 可选   | (none)            | string   | 多表写入时，从源端二进制数据中按照 `sink.multiple.database-pattern` 指定名称提取写入的数据库名称。 `sink.multiple.enable` 为true时有效。                 | 
| sink.multiple.table-pattern       | 可选   | (none)            | string   | 多表写入时，从源端二进制数据中按照 `sink.multiple.table-pattern` 指定名称提取写入的表名。 `sink.multiple.enable` 为true时有效。                         |
| sink.multiple.ignore-single-table-errors | 可选 | true         | boolean  | 多表写入时，是否忽略某个表写入失败。为 `true` 时，如果某个表写入异常，则不写入该表数据，其他表的数据正常写入。为 `false` 时，如果某个表写入异常，则所有表均停止写入。     |

## 数据类型映射

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

请参阅 [flink-doris-connector](https://github.com/apache/doris/blob/1.0.0-rc03/docs/zh-CN/extending-doris/flink-doris-connector.md) 页面以获取更多细节。