---
title: MySQL-CDC
sidebar_position: 6
---

import {siteVariables} from '../../version';

## Overview

The MySQL Extract Node allows for reading snapshot data and incremental data from MySQL database. This document describes how to set up the MySQL Extract Node to run SQL queries against MySQL databases.

## Supported Version
| Extract Node                | Version                                                                                                                                                                                                                                                                                                                                                                                                | Driver                  |
|-----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|
| [MySQL-CDC](./mysql-cdc.md) | [MySQL](https://dev.mysql.com/doc): 5.6, 5.7, 8.0.x <br/> [RDS MySQL](https://www.aliyun.com/product/rds/mysql): 5.6, 5.7, 8.0.x <br/> [PolarDB MySQL](https://www.aliyun.com/product/polardb): 5.6, 5.7, 8.0.x <br/> [Aurora MySQL](https://aws.amazon.com/cn/rds/aurora): 5.6, 5.7, 8.0.x <br/> [MariaDB](https://mariadb.org): 10.x <br/> [PolarDB X](https://github.com/ApsaraDB/galaxysql): 2.0.1 | JDBC Driver: 8.0.21     |

## Dependencies

In order to set up the MySQL Extract Node, the following table provides dependency information for both projects using a build automation tool (such as Maven or SBT) and SQL Client with Sort Connectors JAR bundles.

### Maven dependency

<pre><code parentName="pre">
{`<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-mongodb-cdc</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
`}
</code></pre>


The MySQL driver dependency is also required to connect to MySQL database. Please download [mysql-connector-java-8.0.21.jar](https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.21/mysql-connector-java-8.0.21.jar) and put it into `FLINK_HOME/lib/`.

## Setup MySQL server

You have to define a MySQL user with appropriate permissions on all databases that the Debezium MySQL connector monitors.

1. Create the MySQL user:

```sql
mysql> CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';
```

2. Grant the required permissions to the user:

```sql
mysql> GRANT SELECT, SHOW DATABASES, REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO 'user' IDENTIFIED BY 'password';
```
**Note:** The RELOAD permissions is not required any more when `scan.incremental.snapshot.enabled` is enabled (enabled by default).

3. Finalize the user’s permissions:

```sql
mysql> FLUSH PRIVILEGES;
```

See more about the [permission explanation](https://debezium.io/documentation/reference/1.5/connectors/mysql.html#mysql-creating-user).

## Notes

### Set a different SERVER ID for each reader

Every MySQL database client for reading binlog should have an unique id, called server id. MySQL server will use this id to maintain network connection and the binlog position. Therefore, if different jobs share a same server id, it may result to read from wrong binlog position.
Thus, it is recommended to set different server id for each reader via the [SQL Hints](https://ci.apache.org/projects/flink/flink-docs-release-1.11/dev/table/sql/hints.html),
e.g.  assuming the source parallelism is 4, then we can use `SELECT * FROM source_table /*+ OPTIONS('server-id'='5401-5404') */ ;` to assign unique server id for each of the 4 source readers.


### Setting up MySQL session timeouts

When an initial consistent snapshot is made for large databases, your established connection could timeout while the tables are being read. You can prevent this behavior by configuring interactive_timeout and wait_timeout in your MySQL configuration file.
- `interactive_timeout`: The number of seconds the server waits for activity on an interactive connection before closing it. See [MySQL documentations](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_interactive_timeout).
- `wait_timeout`: The number of seconds the server waits for activity on a noninteractive connection before closing it. See [MySQL documentations](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_wait_timeout).

## How to create a MySQL Extract Node

### Usage for SQL API

The example below shows how to create an MySQL Extract Node with `Flink SQL` :

```sql
-- Set checkpoint every 3000 milliseconds                       
Flink SQL> SET 'execution.checkpointing.interval' = '3s';   

-- Create a MySQL table 'mysql_extract_node' in Flink SQL
Flink SQL> CREATE TABLE mysql_extract_node (
     order_id INT,
     order_date TIMESTAMP(0),
     customer_name STRING,
     price DECIMAL(10, 5),
     product_id INT,
     order_status BOOLEAN,
     PRIMARY KEY(order_id) NOT ENFORCED
     ) WITH (
     'connector' = 'mysql-cdc-inlong',
     'hostname' = 'YourHostname',
     'port' = '3306',
     'username' = 'YourUsername',
     'password' = 'YourPassword',
     'database-name' = 'YourDatabaseName',
     'table-name' = 'YourTableName');
  
-- Read snapshot and binlogs from mysql_extract_node
Flink SQL> SELECT * FROM mysql_extract_node;
```

### Usage for InLong Dashboard

- Choose the `BINLOG` Data Source
![MySQL BINLOG](img/mysql-binlog.png)

- Configure the MySQL Source
![MySQL SOURCE](img/mysql-source.png)

### Usage for InLong Manager Client

TODO: It will be supported in the future.

## MySQL Extract Node Options

<div class="highlight">
<table class="colwidths-auto docutils">
    <thead>
      <tr>
        <th class="text-left" style={{width: '10%'}}>Option</th>
        <th class="text-left" style={{width: '8%'}}>Required</th>
        <th class="text-left" style={{width: '7%'}}>Default</th>
        <th class="text-left" style={{width: '10%'}}>Type</th>
        <th class="text-left" style={{width: '65%'}}>Description</th>
      </tr>
    </thead>
    <tbody>
    <tr>
      <td>connector</td>
      <td>required</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>Specify what connector to use, here should be <code>'mysql-cdc-inlong'</code>.</td>
    </tr>
    <tr>
      <td>hostname</td>
      <td>required</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>IP address or hostname of the MySQL database server.</td>
    </tr>
    <tr>
      <td>username</td>
      <td>required</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>Name of the MySQL database to use when connecting to the MySQL database server.</td>
    </tr>
    <tr>
      <td>password</td>
      <td>required</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>Password to use when connecting to the MySQL database server.</td>
    </tr>
    <tr>
      <td>database-name</td>
      <td>required</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>Database name of the MySQL server to monitor. The database-name also supports regular expressions to monitor multiple tables matches the regular expression.</td>
    </tr> 
    <tr>
      <td>table-name</td>
      <td>required</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>Table name of the MySQL database to monitor. The table-name also supports regular expressions to monitor multiple tables matches the regular expression.</td>
    </tr>
    <tr>
      <td>port</td>
      <td>optional</td>
      <td style={{wordWrap: 'break-word'}}>3306</td>
      <td>Integer</td>
      <td>Integer port number of the MySQL database server.</td>
    </tr>
    <tr>
      <td>server-id</td>
      <td>optional</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>Integer</td>
      <td>A numeric ID or a numeric ID range of this database client, The numeric ID syntax is like '5400', 
          the numeric ID range syntax is like '5400-5408', The numeric ID range syntax is recommended when 'scan.incremental.snapshot.enabled' enabled.
          Every ID must be unique across all currently-running database processes in the MySQL cluster. This connector joins the MySQL cluster
          as another server (with this unique ID) so it can read the binlog. By default, a random number is generated between 5400 and 6400,
          though we recommend setting an explicit value.
      </td>
    </tr>
    <tr>
          <td>scan.incremental.snapshot.enabled</td>
          <td>optional</td>
          <td style={{wordWrap: 'break-word'}}>true</td>
          <td>Boolean</td>
          <td>Incremental snapshot is a new mechanism to read snapshot of a table. Compared to the old snapshot mechanism,
              the incremental snapshot has many advantages, including:
                (1) source can be parallel during snapshot reading, 
                (2) source can perform checkpoints in the chunk granularity during snapshot reading, 
                (3) source doesn't need to acquire global read lock (FLUSH TABLES WITH READ LOCK) before snapshot reading.
              If you would like the source run in parallel, each parallel reader should have an unique server id, so 
              the 'server-id' must be a range like '5400-6400', and the range must be larger than the parallelism.
              Please see <a href="https://ververica.github.io/flink-cdc-connectors/release-2.2/content/connectors/mysql-cdc.html#incremental-snapshot-reading">Incremental Snapshot Reading</a>section for more detailed information.
          </td>
    </tr>
    <tr>
          <td>scan.incremental.snapshot.chunk.size</td>
          <td>optional</td>
          <td style={{wordWrap: 'break-word'}}>8096</td>
          <td>Integer</td>
          <td>The chunk size (number of rows) of table snapshot, captured tables are split into multiple chunks when read the snapshot of table.</td>
    </tr>
    <tr>
          <td>scan.snapshot.fetch.size</td>
          <td>optional</td>
          <td style={{wordWrap: 'break-word'}}>1024</td>
          <td>Integer</td>
          <td>The maximum fetch size for per poll when read table snapshot.</td>
    </tr>
    <tr>
      <td>scan.startup.mode</td>
      <td>optional</td>
      <td style={{wordWrap: 'break-word'}}>initial</td>
      <td>String</td>
      <td>Optional startup mode for MySQL CDC consumer, valid enumerations are "initial"
           and "latest-offset". 
           Please see <a href="https://ververica.github.io/flink-cdc-connectors/release-2.2/content/connectors/mysql-cdc.html#startup-reading-position">Startup Reading Position</a>section for more detailed information.</td>
    </tr> 
    <tr>
      <td>server-time-zone</td>
      <td>optional</td>
      <td style={{wordWrap: 'break-word'}}>UTC</td>
      <td>String</td>
      <td>The session time zone in database server, e.g. "Asia/Shanghai". 
          It controls how the TIMESTAMP type in MYSQL converted to STRING.
          See more <a href="https://debezium.io/documentation/reference/1.5/connectors/mysql.html#mysql-temporal-types">here</a>.</td>
    </tr>
    <tr>
      <td>debezium.min.row.
      count.to.stream.result</td>
      <td>optional</td>
      <td style={{wordWrap: 'break-word'}}>1000</td>
      <td>Integer</td>
      <td>During a snapshot operation, the connector will query each included table to produce a read event for all rows in that table. This parameter determines whether the MySQL connection will pull all results for a table into memory (which is fast but requires large amounts of memory), or whether the results will instead be streamed (can be slower, but will work for very large tables). The value specifies the minimum number of rows a table must contain before the connector will stream results, and defaults to 1,000. Set this parameter to '0' to skip all table size checks and always stream all results during a snapshot.</td>
    </tr>
    <tr>
          <td>connect.timeout</td>
          <td>optional</td>
          <td style={{wordWrap: 'break-word'}}>30s</td>
          <td>Duration</td>
          <td>The maximum time that the connector should wait after trying to connect to the MySQL database server before timing out.</td>
    </tr>    
    <tr>
          <td>connect.max-retries</td>
          <td>optional</td>
          <td style={{wordWrap: 'break-word'}}>3</td>
          <td>Integer</td>
          <td>The max retry times that the connector should retry to build MySQL database server connection.</td>
    </tr>
    <tr>
          <td>connection.pool.size</td>
          <td>optional</td>
          <td style={{wordWrap: 'break-word'}}>20</td>
          <td>Integer</td>
          <td>The connection pool size.</td>
    </tr>
    <tr>
          <td>jdbc.properties.*</td>
          <td>optional</td>
          <td style={{wordWrap: 'break-word'}}>20</td>
          <td>String</td>
          <td>Option to pass custom JDBC URL properties. User can pass custom properties like 'jdbc.properties.useSSL' = 'false'.</td>
    </tr>
    <tr>
          <td>heartbeat.interval</td>
          <td>optional</td>
          <td style={{wordWrap: 'break-word'}}>30s</td>
          <td>Duration</td>
          <td>The interval of sending heartbeat event for tracing the latest available binlog offsets.</td>
    </tr>
    <tr>
          <td>append-mode</td>
          <td>optional</td>
          <td style={{wordWrap: 'break-word'}}>false</td>
          <td>Boolean</td>
          <td>Whether to support append only, if true the MySQL Extract Node will Convert all upsert streams to append streams to support downstream scenarios where upsert streams are not supported.</td>
    </tr>
    <tr>
          <td>migrate-all</td>
          <td>optional</td>
          <td style={{wordWrap: 'break-word'}}>false</td>
          <td>Boolean</td>
          <td>Whether it is a whole library migration, Whether it is a whole database migration scenario, if true, it compresses physical fields and other meta fields supported by MySQL Extract Node into a special meta field `data` in canal-json format.</td>
    </tr>
    <tr>
      <td>debezium.*</td>
      <td>optional</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>Pass-through Debezium's properties to Debezium Embedded Engine which is used to capture data changes from MySQL server.
          For example: <code>'debezium.snapshot.mode' = 'never'</code>.
          See more about the <a href="https://debezium.io/documentation/reference/1.5/connectors/mysql.html#mysql-connector-properties">Debezium's MySQL Connector properties</a></td> 
    </tr>
    <tr>
      <td>inlong.metric</td>
      <td>optional</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>Inlong metric label, format of value is groupId&streamId&nodeId.</td> 
    </tr>
    </tbody>
</table>
</div>

## Available Metadata

The following format metadata can be exposed as read-only (VIRTUAL) columns in a table definition.

<table class="colwidths-auto docutils">
  <thead>
     <tr>
       <th class="text-left" style={{width: '15%'}}>Key</th>
       <th class="text-left" style={{width: '30%'}}>DataType</th>
       <th class="text-left" style={{width: '55%'}}>Description</th>
     </tr>
  </thead>
  <tbody>
    <tr>
      <td>meta.table_name</td>
      <td>STRING NOT NULL</td>
      <td>Name of the table that contain the row.</td>
    </tr>
    <tr>
      <td>meta.database_name</td>
      <td>STRING NOT NULL</td>
      <td>Name of the database that contain the row.</td>
    </tr>
    <tr>
      <td>meta.op_ts</td>
      <td>TIMESTAMP_LTZ(3) NOT NULL</td>
      <td>It indicates the time that the change was made in the database. <br/>If the record is read from snapshot of the table instead of the binlog, the value is always 0.</td>
    </tr>
    <tr>
      <td>meta.op_type</td>
      <td>STRING</td>
      <td>Type of database operation, such as INSERT/DELETE, etc.</td>
    </tr>
    <tr>
      <td>meta.data</td>
      <td>STRING</td>
      <td>Data of the row that format by `canal-json` only exists when the option `migrate-all` is 'true'.</td>
    </tr>
    <tr>
      <td>meta.is_ddl</td>
      <td>BOOLEAN</td>
      <td>Whether the DDL statement.</td>
    </tr>
    <tr>
      <td>meta.ts</td>
      <td>TIMESTAMP_LTZ(3) NOT NULL</td>
      <td>The current time when the row was received and processed.</td>
    </tr>
    <tr>
      <td>meta.sql_type</td>
      <td>MAP</td>
      <td>Mapping of sql_type table fields to java data type IDs.</td>
    </tr>
    <tr>
      <td>meta.mysql_type</td>
      <td>MAP</td>
      <td>Structure of the table.</td>
    </tr>
    <tr>
      <td>meta.pk_names</td>
      <td>ARRAY</td>
      <td>Primay key name of the table.</td>
    </tr>
    <tr>
      <td>meta.batch_id</td>
      <td>BIGINT</td>
      <td>Batch id of the Binlog.</td>
    </tr>
    <tr>
      <td>meta.update_before</td>
      <td>ARRAY</td>
      <td>Data of the row before update.</td>
    </tr>
  </tbody>
</table>

The extended CREATE TABLE example demonstrates the syntax for exposing these metadata fields:
```sql
CREATE TABLE `mysql_extract_node` (
      `id` INT,
      `name` STRING,
      `database_name` string METADATA FROM 'meta.database_name',
      `table_name`    string METADATA FROM 'meta.table_name',
      `op_ts`         timestamp(3) METADATA FROM 'meta.op_ts',
      `op_type` string METADATA FROM 'meta.op_type',
      `batch_id` bigint METADATA FROM 'meta.batch_id',
      `is_ddl` boolean METADATA FROM 'meta.is_ddl',
      `update_before` ARRAY<MAP<STRING, STRING>> METADATA FROM 'meta.update_before',
      `mysql_type` MAP<STRING, STRING> METADATA FROM 'meta.mysql_type',
      `pk_names` ARRAY<STRING> METADATA FROM 'meta.pk_names',
      `data` STRING METADATA FROM 'meta.data',
      `sql_type` MAP<STRING, INT> METADATA FROM 'meta.sql_type',
      `ingestion_ts` TIMESTAMP(3) METADATA FROM 'meta.ts',
      PRIMARY KEY (`id`) NOT ENFORCED 
) WITH (
      'connector' = 'mysql-cdc-inlong', 
      'hostname' = 'YourHostname',
      'migrate-all' = 'true',
      'port' = '3306',                
      'username' = 'YourUsername',
      'password' = 'YourPassword',
      'database-name' = 'YourDatabase',
      'table-name' = 'YourTable' 
      );
```

## Data Type Mapping

<div class="wy-table-responsive">
<table class="colwidths-auto docutils">
    <thead>
      <tr>
        <th class="text-left">MySQL type</th>
        <th class="text-left">Flink SQL type</th>
        <th class="text-left">NOTE</th>
      </tr>
    </thead>
    <tbody>
    <tr>
      <td>TINYINT</td>
      <td>TINYINT</td>
      <td></td>
    </tr>
    <tr>
      <td>
        SMALLINT<br/>
        TINYINT UNSIGNED</td>
      <td>SMALLINT</td>
      <td></td>
    </tr>
    <tr>
      <td>
        INT<br/>
        MEDIUMINT<br/>
        SMALLINT UNSIGNED</td>
      <td>INT</td>
      <td></td>
    </tr>
    <tr>
      <td>
        BIGINT<br/>
        INT UNSIGNED</td>
      <td>BIGINT</td>
      <td></td>
    </tr>
   <tr>
      <td>BIGINT UNSIGNED</td>
      <td>DECIMAL(20, 0)</td>
      <td></td>
    </tr>
    <tr>
      <td>
        REAL<br/>
        FLOAT<br/>
        </td>
      <td>FLOAT</td>
      <td></td>
    </tr>
    <tr>
      <td>
        DOUBLE
      </td>
      <td>DOUBLE</td>
      <td></td>
    </tr>
    <tr>
      <td>
        NUMERIC(p, s)<br/>
        DECIMAL(p, s)<br/>
        where p &lt;= 38<br/>
      </td>
      <td>DECIMAL(p, s)</td>
      <td></td>
    </tr>
    <tr>
      <td>
        NUMERIC(p, s)<br/>
        DECIMAL(p, s)<br/>
        where 38 &lt; p &lt;= 65<br/>
      </td>
      <td>STRING</td>
      <td>The precision for DECIMAL data type is up to 65 in MySQL, but the precision for DECIMAL is limited to 38 in Flink.
  So if you define a decimal column whose precision is greater than 38, you should map it to STRING to avoid precision loss.</td>
    </tr>
    <tr>
      <td>
        BOOLEAN<br/>
        TINYINT(1)<br/>
        BIT(1)
        </td>
      <td>BOOLEAN</td>
      <td></td>
    </tr>
    <tr>
      <td>DATE</td>
      <td>DATE</td>
      <td></td>
    </tr>
    <tr>
      <td>TIME [(p)]</td>
      <td>TIME [(p)]</td>
      <td></td>
    </tr>
    <tr>
      <td>TIMESTAMP [(p)]<br/>
        DATETIME [(p)]
      </td>
      <td>TIMESTAMP [(p)]
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        CHAR(n)
      </td>
      <td>CHAR(n)</td>
      <td></td>
    </tr>
    <tr>
      <td>
        VARCHAR(n)
      </td>
      <td>VARCHAR(n)</td>
      <td></td>
    </tr>
    <tr>
      <td>
        BIT(n)
      </td>
      <td>BINARY(⌈n/8⌉)</td>
      <td></td>
    </tr>
    <tr>
      <td>
        BINARY(n)
      </td>
      <td>BINARY(n)</td>
      <td></td>
    </tr>
    <tr>
      <td>
        VARBINARY(N)
      </td>
      <td>VARBINARY(N)</td>
      <td></td>
    </tr>
    <tr>
      <td>
        TINYTEXT<br/>
        TEXT<br/>
        MEDIUMTEXT<br/>
        LONGTEXT<br/>
      </td>
      <td>STRING</td>
      <td></td>
    </tr>
    <tr>
      <td>
        TINYBLOB<br/>
        BLOB<br/>
        MEDIUMBLOB<br/>
        LONGBLOB<br/>
      </td>
      <td>BYTES</td>
      <td>Currently, for BLOB data type in MySQL, only the blob whose length isn't greater than 2,147,483,647(2 ** 31 - 1) is supported. </td>
    </tr>
    <tr>
      <td>
        YEAR
      </td>
      <td>INT</td>
      <td></td>
    </tr>
    <tr>
      <td>
        ENUM
      </td>
      <td>STRING</td>
      <td></td>
    </tr>
    <tr>
      <td>
        JSON
      </td>
      <td>STRING</td>
      <td>The JSON data type  will be converted into STRING with JSON format in Flink.</td>
    </tr>
    <tr>
      <td>
        SET
      </td>
      <td>ARRAY&lt;STRING&gt;</td>
      <td>As the SET data type in MySQL is a string object that can have zero or more values, 
          it should always be mapped to an array of string
      </td>
    </tr>
    </tbody>
</table>
</div>

