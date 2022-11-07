---
title: MySQL-CDC
sidebar_position: 6
---

import {siteVariables} from '../../version';

## 概述

MySQL Extract 节点允许从 MySQL 数据库中读取快照数据和增量数据。本文档介绍如何设置 MySQL Extract 节点以对 MySQL 数据库运行 SQL 查询。

## 支持的版本

| Extract 节点                  | 版本                                                                                                                                                                                                                                                                                                                                                                                                     | Driver                  |
|-----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|
| [MySQL-CDC](./mysql-cdc.md) | [MySQL](https://dev.mysql.com/doc): 5.6, 5.7, 8.0.x <br/> [RDS MySQL](https://www.aliyun.com/product/rds/mysql): 5.6, 5.7, 8.0.x <br/> [PolarDB MySQL](https://www.aliyun.com/product/polardb): 5.6, 5.7, 8.0.x <br/> [Aurora MySQL](https://aws.amazon.com/cn/rds/aurora): 5.6, 5.7, 8.0.x <br/> [MariaDB](https://mariadb.org): 10.x <br/> [PolarDB X](https://github.com/ApsaraDB/galaxysql): 2.0.1 | JDBC Driver: 8.0.21     |

## 依赖

为了设置 MySQL Extract 节点，下表提供了使用构建自动化工具（例如 Maven 或 SBT）和带有 Sort Connectors JAR 包的 SQL 客户端的两个项目的依赖关系信息。

### Maven 依赖

<pre><code parentName="pre">
{`<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-mysql-cdc</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
`}
</code></pre>

连接 MySQL 数据库还需要 MySQL 驱动程序依赖项。请下载[mysql-connector-java-8.0.21.jar](https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.21/mysql-connector-java-8.0.21.jar) 并将其放入 `FLINK_HOME/lib/`。

## 设置 MySQL 服务器

你必须定义一个对 Debezium MySQL 连接器监控的所有数据库具有适当权限的 MySQL 用户。

- 创建 MySQL 用户:

```sql
mysql> CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';
```
- 向用户授予所需的权限:

```sql
mysql> GRANT SELECT, SHOW DATABASES, REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO 'user' IDENTIFIED BY 'password';
```
**注意：** 启用 `scan.incremental.snapshot.enabled` 时不再需要 RELOAD 权限（默认启用）。

- 刷新用户的权限：

```sql
mysql> FLUSH PRIVILEGES;
```

查看更多关于[权限说明](https://debezium.io/documentation/reference/1.5/connectors/mysql.html#mysql-creating-user)。

## 注意事项

### 为每个 Reader 设置一个不同的 SERVER ID

每一个读取 Binlog 的 MySQL 数据库客户端都应该有一个唯一的 Id，称为 Server Id。 MySQL 服务器将使用此 Id 来维护网络连接和 Binlog 位置。因此，如果不同的作业共享相同的服务器 Id，可能会导致从错误的 Binlog 位置读取。
因此，建议通过 [SQL Hints](https://ci.apache.org/projects/flink/flink-docs-release-1.11/dev/table/sql/hints. html),
例如假设源并行度为 4，那么我们可以使用 `SELECT * FROM source_table /*+ OPTIONS('server-id'='5401-5404') */ ;` 为 4 个 Source Reader 中的每一个分配唯一的服务器 Id。

### 设置 MySQL 会话超时

当为大型数据库制作初始一致快照时，您建立的连接可能会在读取表时超时。您可以通过在 MySQL 配置文件中配置 `interactive_timeout` 和 `wait_timeout` 来防止这种行为。
- `interactive_timeout`：服务器在关闭交互式连接之前等待其活动的秒数。请参阅 [MySQL 文档](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_interactive_timeout)。
- `wait_timeout`：服务器在关闭非交互式连接之前等待其活动的秒数。请参阅 [MySQL 文档](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_wait_timeout)。

## 如何创建一个 MySQL Extract 节点

### SQL API 用法

下面这个例子展示了如何用 `Flink SQL` 创建一个 MySQL Extract 节点: 

```sql
-- 设置 Checkpoint 为 3000 毫秒                       
Flink SQL> SET 'execution.checkpointing.interval' = '3s';   

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
  
Flink SQL> SELECT * FROM mysql_extract_node;
```

### InLong Dashboard 用法

- Choose the `BINLOG` Data Source
  ![MySQL BINLOG](img/mysql-binlog.png)

- Configure the MySQL Source
  ![MySQL SOURCE](img/mysql-source.png)

### InLong Manager Client 用法

TODO: 将在未来支持此功能。

## MySQL Extract 节点参数

<div class="highlight">
<table class="colwidths-auto docutils">
    <thead>
      <tr>
        <th class="text-left" style={{width: '10%'}}>参数</th>
        <th class="text-left" style={{width: '8%'}}>是否必须</th>
        <th class="text-left" style={{width: '7%'}}>默认值</th>
        <th class="text-left" style={{width: '10%'}}>数据类型</th>
        <th class="text-left" style={{width: '65%'}}>描述</th>
      </tr>
    </thead>
    <tbody>
    <tr>
      <td>connector</td>
      <td>required</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>指定要使用的连接器，这里应该是 <code>'mysql-cdc-inlong'</code>。</td>
    </tr>
    <tr>
      <td>hostname</td>
      <td>required</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>MySQL 数据库服务器的 IP 地址或主机名。</td>
    </tr>
    <tr>
      <td>username</td>
      <td>required</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>连接到 MySQL 数据库服务器时要使用的 MySQL 用户名称。</td>
    </tr>
    <tr>
      <td>password</td>
      <td>required</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>连接到 MySQL 数据库服务器时使用的密码。</td>
    </tr>
    <tr>
      <td>database-name</td>
      <td>required</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>要监控的 MySQL 服务器的数据库名称。 database-name 还支持正则表达式来监控多个表是否匹配正则表达式。</td>
    </tr> 
    <tr>
      <td>table-name</td>
      <td>required</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>要监控的 MySQL 数据库的表名。 table-name 还支持正则表达式来监控多个表是否匹配正则表达式。</td>
    </tr>
    <tr>
      <td>port</td>
      <td>optional</td>
      <td style={{wordWrap: 'break-word'}}>3306</td>
      <td>Integer</td>
      <td>MySQL 数据库服务器的整数端口号。</td>
    </tr>
    <tr>
      <td>server-id</td>
      <td>optional</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>Integer</td>
      <td>此数据库客户端的数字 Id 或数字 Id 范围，数字 Id 语法类似于 '5400'，
          数字 Id 范围语法类似于“5400-5408”，启用“scan.incremental.snapshot.enabled”时建议使用数字 Id 范围语法。
          在 MySQL 集群中所有当前运行的数据库进程中，每个 Id 都必须是唯一的。此连接器加入 MySQL 集群
          作为另一台服务器（具有此唯一 Id），因此它可以读取 Binlog。默认情况下，会生成一个介于 5400 和 6400 之间的随机数，
          尽管我们建议设置一个明确的值。
      </td>
    </tr>
    <tr>
          <td>scan.incremental.snapshot.enabled</td>
          <td>optional</td>
          <td style={{wordWrap: 'break-word'}}>true</td>
          <td>Boolean</td>
          <td>增量快照是一种读取表快照的新机制。与旧的快照机制相比，
              增量快照有很多优点，包括：
                (1) 快照读取时 Source 可以并行，
                (2) Source 可以在快照读取时在 Chunk 粒度上进行检查点，
                (3) Source 在读快照前不需要获取全局读锁（FLUSH TABLES WITH READ LOCK）。
              如果您希望源代码并行运行，每个并行阅读器都应该有一个唯一的服务器 ID，所以
              'server-id' 必须是 '5400-6400' 这样的范围，并且范围必须大于并行度。
              请参阅<a href="https://ververica.github.io/flink-cdc-connectors/release-2.2/content/connectors/mysql-cdc.html#incremental-snapshot-reading">增量快照阅读</a>部分了解更多详细信息。
          </td>
    </tr>
    <tr>
          <td>scan.incremental.snapshot.chunk.size</td>
          <td>optional</td>
          <td style={{wordWrap: 'break-word'}}>8096</td>
          <td>Integer</td>
          <td>表快照的块大小（行数），读取表的快照时，表的快照被分成多个块。</td>
    </tr>
    <tr>
          <td>scan.snapshot.fetch.size</td>
          <td>optional</td>
          <td style={{wordWrap: 'break-word'}}>1024</td>
          <td>Integer</td>
          <td>读取表快照时每次轮询的最大获取大小。</td>
    </tr>
    <tr>
      <td>scan.startup.mode</td>
      <td>optional</td>
      <td style={{wordWrap: 'break-word'}}>initial</td>
      <td>String</td>
      <td>MySQL CDC 消费者的可选启动模式，有效枚举为"initial"
           和"latest-offset"。
           请参阅<a href="https://ververica.github.io/flink-cdc-connectors/release-2.2/content/connectors/mysql-cdc.html#startup-reading-position">启动阅读位置</a>部分了解更多详细信息。</td>
    </tr> 
    <tr>
      <td>server-time-zone</td>
      <td>optional</td>
      <td style={{wordWrap: 'break-word'}}>UTC</td>
      <td>String</td>
      <td>数据库服务器中的会话时区，例如"Asia/Shanghai"。
          它控制 MYSQL 中的 TIMESTAMP 类型如何转换为 STRING。
          查看更多<a href="https://debezium.io/documentation/reference/1.5/connectors/mysql.html#mysql-temporal-types">这里</a>。</td>
    </tr>
    <tr>
      <td>debezium.min.row.
      count.to.stream.result</td>
      <td>optional</td>
      <td style={{wordWrap: 'break-word'}}>1000</td>
      <td>Integer</td>
      <td>在快照操作期间，连接器将查询每个包含的表，以便为该表中的所有行生成读取事件。此参数确定 MySQL 连接是否会将表的所有结果拉入内存（速度很快但需要大量内存），或者是否将结果改为流式传输（可能较慢，但适用于非常大的表）。该值指定在连接器流式传输结果之前表必须包含的最小行数，默认为 1,000。将此参数设置为'0'以跳过所有表大小检查并始终在快照期间流式传输所有结果。</td>
    </tr>
    <tr>
          <td>connect.timeout</td>
          <td>optional</td>
          <td style={{wordWrap: 'break-word'}}>30s</td>
          <td>Duration</td>
          <td>连接器在尝试连接到 MySQL 数据库服务器后在超时之前应等待的最长时间。</td>
    </tr>    
    <tr>
          <td>connect.max-retries</td>
          <td>optional</td>
          <td style={{wordWrap: 'break-word'}}>3</td>
          <td>Integer</td>
          <td>连接器应重试以建立 MySQL 数据库服务器连接的最大重试次数。</td>
    </tr>
    <tr>
          <td>connection.pool.size</td>
          <td>optional</td>
          <td style={{wordWrap: 'break-word'}}>20</td>
          <td>Integer</td>
          <td>连接池大小。</td>
    </tr>
    <tr>
          <td>jdbc.properties.*</td>
          <td>optional</td>
          <td style={{wordWrap: 'break-word'}}>20</td>
          <td>String</td>
          <td>传递自定义 JDBC URL 属性的选项。用户可以传递自定义属性，例如 'jdbc.properties.useSSL' = 'false'。</td>
    </tr>
    <tr>
          <td>heartbeat.interval</td>
          <td>optional</td>
          <td style={{wordWrap: 'break-word'}}>30s</td>
          <td>Duration</td>
          <td>发送心跳事件的时间间隔，用于跟踪最新可用的 Binlog 偏移量。</td>
    </tr>
    <tr>
          <td>append-mode</td>
          <td>optional</td>
          <td style={{wordWrap: 'break-word'}}>false</td>
          <td>Boolean</td>
          <td>是否仅支持 Append，如果为 'true'，MySQL Extract Node 会将所有 Upsert 流转换为 Append 流，以支持不支持 Upsert 流的下游场景。</td>
    </tr>
    <tr>
          <td>migrate-all</td>
          <td>optional</td>
          <td style={{wordWrap: 'break-word'}}>false</td>
          <td>Boolean</td>
          <td>是否是全库迁移场景，如果为 'true'，MySQL Extract Node 则将表的物理字段和其他元字段压缩成 'canal-json' 格式的特殊元字段 'data'。</td>
    </tr>
    <tr>
      <td>debezium.*</td>
      <td>optional</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>将 Debezium 的属性传递给用于从 MySQL 服务器捕获数据更改的 Debezium Embedded Engine。
          例如：<code>'debezium.snapshot.mode' = 'never'</code>。
          详细了解 <a href="https://debezium.io/documentation/reference/1.5/connectors/mysql.html#mysql-connector-properties">Debezium 的 MySQL 连接器属性。</a></td> 
    </tr>
    <tr>
      <td>inlong.metric.labels</td>
      <td>可选</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>inlong metric 的标签值，该值的构成为groupId=xxgroup&streamId=xxstream&nodeId=xxnode。</td> 
    </tr>
    </tbody>
</table>
</div>

## 可用的元数据字段

以下格式元数据可以作为表定义中的只读 (VIRTUAL) 列公开。

<table class="colwidths-auto docutils">
  <thead>
     <tr>
       <th class="text-left" style={{width: '15%'}}>字段名称</th>
       <th class="text-left" style={{width: '30%'}}>数据类型</th>
       <th class="text-left" style={{width: '55%'}}>描述</th>
     </tr>
  </thead>
  <tbody>
    <tr>
      <td>meta.table_name</td>
      <td>STRING NOT NULL</td>
      <td>该行所属的表名。</td>
    </tr>
    <tr>
      <td>meta.database_name</td>
      <td>STRING NOT NULL</td>
      <td>该行所属的数据库名称。</td>
    </tr>
    <tr>
      <td>meta.op_ts</td>
      <td>TIMESTAMP_LTZ(3) NOT NULL</td>
      <td>它指示在数据库中进行更改的时间。 <br/>如果记录是从表的快照而不是binlog中读取的，则该值始终为0。</td>
    </tr>
    <tr>
      <td>meta.op_type</td>
      <td>STRING</td>
      <td>数据库操作的类型，如 INSERT/DELETE 等。</td>
    </tr>
    <tr>
      <td>meta.data</td>
      <td>STRING</td>
      <td>`canal-json` 格式化的行的数据只有在 `migrate-all` 选项为 'true' 时才存在。</td>
    </tr>
    <tr>
      <td>meta.is_ddl</td>
      <td>BOOLEAN</td>
      <td>是否是 DDL 语句。</td>
    </tr>
    <tr>
      <td>meta.ts</td>
      <td>TIMESTAMP_LTZ(3) NOT NULL</td>
      <td>接收和处理行的当前时间。</td>
    </tr>
    <tr>
      <td>meta.sql_type</td>
      <td>MAP</td>
      <td>将 Sql_type 表字段映射到 Java 数据类型 Id。</td>
    </tr>
    <tr>
      <td>meta.mysql_type</td>
      <td>MAP</td>
      <td>表的结构。</td>
    </tr>
    <tr>
      <td>meta.pk_names</td>
      <td>ARRAY</td>
      <td>表的主键名称。</td>
    </tr>
    <tr>
      <td>meta.batch_id</td>
      <td>BIGINT</td>
      <td>Binlog的批次id。</td>
    </tr>
    <tr>
      <td>meta.update_before</td>
      <td>ARRAY</td>
      <td>该行更新前的数据。</td>
    </tr>
  </tbody>
</table>

扩展的 CREATE TABLE 示例演示了使用这些元数据字段的语法：

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

## 数据类型映射

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

