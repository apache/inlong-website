---
title: Doris
sidebar_position: 11
---

import {siteVariables} from '../../version';

## 概述

`Doris Extract` 节点 支持从 Doris 中读取数据。本章节介绍如何设置 Doris Extract 节点以对 Doris 数据库运行 SQL 查询。

## 支持的版本

| Extract 节点          | Doris 版本 |                                                                                                                                                                                                                                                                                                                                                                                           
|---------------------|----------|
| [Doris](./doris.md) | 0.13+    |  

## 依赖

为了设置 Doris Extract 节点, 下面提供了使用构建自动化工具（例如 Maven 或 SBT）所需要的依赖信息。

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
### 创建 Doris Extract 表
先在 Doris 数据库中创建表 `doris_extract_node`, 命令如下:
```
[root@fe001 ~]# mysql -u root -h localhost -P 9030 -p000000
mysql> use test;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
mysql> CREATE TABLE `doris_extract_node` (
       `id` int(11) NOT NULL COMMENT "用户id",
       `name` varchar(50) NOT NULL COMMENT "昵称",
       `dr` tinyint(4) NULL COMMENT "逻辑删除"
       ) ENGINE=OLAP
       UNIQUE KEY(`id`)
       COMMENT "OLAP"
       DISTRIBUTED BY HASH(`id`) BUCKETS 1
       PROPERTIES (
       "replication_allocation" = "tag.location.default: 1",
       "in_memory" = "false",
       "storage_format" = "V2"
       );
Query OK, 0 rows affected (0.03 sec)

mysql> insert into doris_extract_node values(1, 'zhangsan', 0),(2, 'lisi', 0),(3, 'wangwu', 0);
Query OK, 3 rows affected (0.07 sec)
{'label':'insert_29d973e9509a48d4-a20e9f0e2d510605', 'status':'VISIBLE', 'txnId':'1032'}

mysql> select * from doris_extract_node;
+------+---------+------+
| id   | name    | dr   |
+------+---------+------+
|    1 | zhansan |    0 |
|    2 | lisi    |    0 |
|    3 | wangwu  |    0 |
+------+---------+------+
3 rows in set (0.02 sec)       
```
## 如何创建 Doris Extract 节点

### SQL API 用法

下面这个例子展示了如何用 `Flink SQL` 创建一个 Doris Extract 节点:
* 连接器是 `doris`
```sql
# 启动flink sql-client, 加载 doris connector jar包
[root@tasknode001 flink-1.13.5]# ./bin/sql-client.sh -l ./opt/connectors/doris/

-- 使用 Flink SQL 创建 Doris 表 'doris_extract_node'
Flink SQL> CREATE TABLE doris_extract_node (
           `id` INT,
           `name` STRINTG,
           `dr` TINYINT
           ) WITH (
           'connector' = 'doris',
           'fenodes' = 'localhost:8030',
           'table.identifier' = 'test.doris_extract_node',
           'username' = 'root',
           'password' = '000000'
           );
  
-- 读取数据
Flink SQL> SELECT * FROM doris_extract_node;
```

### InLong Dashboard 用法

TODO: 将在未来支持此功能。

### InLong Manager Client 用法

TODO: 将在未来支持此功能。

## Doris Extract 节点参数

| 参数                                | 是否必选    | 默认值               | 数据类型    | 描述                                                                                                    |
|-----------------------------------|---------|-------------------|---------|-------------------------------------------------------------------------------------------------------|
| connector                         | 必选      | (none)            | string  | 指定要使用的连接器 `doris`                                                                                     |
| fenodes                           | 必选      | (none)            | string  | Doris FE http 地址                                                                                      |
| table.identifier	                 | 必选      | (none)            | string  | Doris 表名，如：db1.tbl1                                                                                   |
| username	                         | 必选      | (none)            | string  | 访问 Doris 的用户名                                                                                         |
| password                          | 必选      | (none)            | string  | 访问 Doris 的密码                                                                                          |
| doris.request.retries	            | 可选      | 3                 | int     | 向 Doris 发送请求的重试次数                                                                                     |
| doris.request.connect.timeout.ms	 | 可选      | 30000             | int     | 向 Doris 发送请求的连接超时时间                                                                                   |
| doris.request.read.timeout.ms	    | 可选      | 30000             | int     | 向 Doris 发送请求的读取超时时间                                                                                   |
| doris.request.query.timeout.s	    | 可选      | 3600              | int     | 查询 Doris 的超时时间，默认值为1小时，-1表示无超时限制                                                                      |
| doris.request.tablet.size	        | 可选      | Integer.MAX_VALUE | int     | 一个 Partition 对应的 Doris Tablet 个数。<br/>此数值设置越小，则会生成越多的 Partition。从而提升 Flink 侧的并行度，但同时会对 Doris 造成更大的压力。 |
| doris.batch.size                  | 可选      | 1024              | int     | 一次从 BE 读取数据的最大行数。增大此数值可减少 Flink 与 Doris 之间建立连接的次数。<br/>从而减轻网络延迟所带来的的额外时间开销。                           |
| doris.exec.mem.limit	             | 可选      | 2147483648        | long    | 单个查询的内存限制。默认为 2GB，单位为字节                                                                               |
| doris.deserialize.arrow.async	    | 可选      | false             | boolean | 是否支持异步转换 Arrow 格式到 flink-doris-connector 迭代所需的 RowBatch                                               |
| doris.deserialize.queue.size	     | 可选      | 64                | int     | 异步转换 Arrow 格式的内部处理队列，当 doris.deserialize.arrow.async 为 true 时生效                                       |
| doris.read.field	                 | 可选      | (none)            | string  | 读取 Doris 表的列名列表，多列之间使用逗号分隔                                                                            |
| doris.filter.query                | 可选      | (none)            | string  | 过滤读取数据的表达式，此表达式透传给 Doris。Doris 使用此表达式完成源端数据过滤。                                                        |

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