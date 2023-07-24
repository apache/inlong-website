---
title: Doris
sidebar_position: 11
---

import {siteVariables} from '../../version';

## Overview

`Doris Extract` node supports reading data from Doris. This chapter describes how to set up a Doris Extract
node to run SQL queries against the Doris database.

## Supported Version

| Extract Node	       | Doris version  |                                                                                                                                                                                                                                                                                                                                                                                           
|---------------------|----------------|
| [Doris](./doris.md) | 0.13+          |  

## Dependencies

In order to set up the Doris Extract node, the dependency information needed to use build automation tools
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
### Create a Doris Extract table
First create a table `doris_extract_node` in the Doris database, the command is as follows:
```
[root@fe001 ~]# mysql -u root -h localhost -P 9030 -p000000
mysql> use test;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
mysql> CREATE TABLE `doris_extract_node` (
       `id` int(11) NOT NULL COMMENT "user id",
       `name` varchar(50) NOT NULL COMMENT "user name",
       `dr` tinyint(4) NULL COMMENT "delete tag"
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
## How to create a Doris Extract Node

### Usage for SQL API

The following example shows how to create a Doris Extract node with `Flink SQL`:
* connector is `doris`
```sql
# Start flink sql-client, load the doris connector jar package
[root@tasknode001 flink-1.13.5]# ./bin/sql-client.sh -l ./opt/connectors/doris/

-- Create Doris table 'doris_extract_node' using Flink SQL
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
  
-- query data
Flink SQL> SELECT * FROM doris_extract_node;
```

### Usage for InLong Dashboard

TODO: It will be supported in the future.

### Usage for InLong Manager Client

TODO: It will be supported in the future.

## Doris Extract Node Options

| Option                            | Required     | Default           | Type     | Description                                                                                                                                                                                                                                       |
|-----------------------------------|--------------|-------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| connector                         | required     | (none)            | string   | Specify which connector to use, valid values are: `doris`                                                                                                                                                                                         |
| fenodes                           | required     | (none)            | string   | Doris FE http address, support multiple addresses, separated by commas                                                                                                                                                                            |
| table.identifier	                 | required     | (none)            | string   | Doris table identifier, eg, db1.tbl1                                                                                                                                                                                                              |
| username	                         | required     | (none)            | string   | Doris username                                                                                                                                                                                                                                    |
| password                          | required     | (none)            | string   | Doris password                                                                                                                                                                                                                                    |
| doris.request.retries             | optional     | 3                 | int      | Number of retries to send requests to Doris                                                                                                                                                                                                       |
| doris.request.connect.timeout.ms	 | optional     | 30000             | int      | Connection timeout for sending requests to Doris                                                                                                                                                                                                  |
| doris.request.read.timeout.ms     | optional     | 30000             | int      | Read timeout for sending request to Doris                                                                                                                                                                                                         |
| doris.request.query.timeout.s     | optional     | 3600              | int      | Query the timeout time of doris, the default is 1 hour, -1 means no timeout limit                                                                                                                                                                 |
| doris.request.tablet.size         | optional     | Integer.MAX_VALUE | int      | The number of Doris Tablets corresponding to an Partition. The smaller this value is set, the more partitions will be generated. This will increase the parallelism on the flink side, but at the same time will cause greater pressure on Doris. |
| doris.batch.size                  | optional     | 1024              | int      | The maximum number of rows to read data from BE at one time. Increasing this value can reduce the number of connections between Flink and Doris. Thereby reducing the extra time overhead caused by network delay.                                |
| doris.exec.mem.limit	             | optional     | 2147483648        | long     | Memory limit for a single query. The default is 2GB, in bytes.                                                                                                                                                                                    |
| doris.deserialize.arrow.async     | optional     | false             | boolean  | Whether to support asynchronous conversion of Arrow format to RowBatch required for flink-doris-connector iteration                                                                                                                               |
| doris.deserialize.queue.size	     | optional     | 64                | int      | Asynchronous conversion of the internal processing queue in Arrow format takes effect when doris.deserialize.arrow.async is true                                                                                                                  |
| doris.read.field	                 | optional     | (none)            | string   | List of column names in the Doris table, separated by commas                                                                                                                                                                                      |
| doris.filter.query                | optional     | (none)            | string   | Filter expression of the query, which is transparently transmitted to Doris. Doris uses this expression to complete source-side data filtering.                                                                                                   |

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