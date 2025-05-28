---
title: Oracle-CDC
sidebar_position: 7
---

import {siteVariables} from '../../version';

## 概述

Oracle Extract 节点允许从 Oracle 数据库中读取快照数据和增量数据。本文档介绍如何设置 Oracle Extract 节点以对 Oracle 数据库运行 SQL 查询。

## 支持的版本

| Extract 节点                  | 版本                                                      | Driver                  |
|-----------------------------|---------------------------------------------------------|-------------------------|
| [Oracle-CDC](oracle-cdc.md) | [Oracle](https://www.oracle.com/index.html): 11, 12, 19 | Oracle Driver: 19.3.0.0 |

## 依赖

为了设置 Oracle Extract 节点，下表提供了使用构建自动化工具（例如 Maven 或 SBT）和带有 Sort Connectors JAR 包的 SQL 客户端的两个项目的依赖关系信息。

### Maven 依赖

```xml
<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-oracle-cdc</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
```

连接 Oracle 数据库还需要 Oracle 驱动程序依赖项。请下载[ojdbc8-19.3.0.0.jar](https://repo1.maven.org/maven2/com/oracle/database/jdbc/ojdbc8/19.3.0.0/ojdbc8-19.3.0.0.jar) 并将其放入 `FLINK_HOME/lib/`。

## 设置 Oracle

你必须为 Oracle 数据库启用日志归档，并定义一个对 Debezium Oracle 连接器监控的所有数据库具有适当权限的 Oracle 用户。

### 对于非 CDB 数据库

- 启用日志归档

  (1.1). 以 DBA 身份连接到数据库
    ```sql
    ORACLE_SID=SID
    export ORACLE_SID
    sqlplus /nolog
      CONNECT sys/password AS SYSDBA
    ```

  (1.2). 启用日志归档
    ```sql
    alter system set db_recovery_file_dest_size = 10G;
    alter system set db_recovery_file_dest = '/opt/oracle/oradata/recovery_area' scope=spfile;
    shutdown immediate;
    startup mount;
    alter database archivelog;
    alter database open;
   ```
  **Note:**

    - Enable log archiving requires database restart, pay attention when try to do it
    - The archived logs will occupy a large amount of disk space, so consider clean the expired logs the periodically

  (1.3). 检查是否启用了日志归档
    ```sql
    -- Should now "Database log mode: Archive Mode"
    archive log list;
    ```
  :::tip
  必须为捕获的表或数据库启用补充日志记录，以便数据更改能够捕获已更改数据库行的<em>之前</em>状态。
  下面说明了如何在表/数据库级别进行配置。
  :::
   ```sql
   -- 为特定表启用补充日志记录：
   ALTER TABLE inventory.customers ADD SUPPLEMENTAL LOG DATA (ALL) COLUMNS;
   ```
   ```sql
   -- 为数据库启用补充日志记录：
   ALTER DATABASE ADD SUPPLEMENTAL LOG DATA;
   ```

- 创建具有权限的 Oracle 用户

  (2.1). 创建表空间
   ```sql
   sqlplus sys/password@host:port/SID AS SYSDBA;
     CREATE TABLESPACE logminer_tbs DATAFILE '/opt/oracle/oradata/SID/logminer_tbs.dbf' SIZE 25M REUSE AUTOEXTEND ON MAXSIZE UNLIMITED;
     exit;
   ```

  (2.2). 创建用户并授予权限
   ```sql
   sqlplus sys/password@host:port/SID AS SYSDBA;
     CREATE USER flinkuser IDENTIFIED BY flinkpw DEFAULT TABLESPACE LOGMINER_TBS QUOTA UNLIMITED ON LOGMINER_TBS;
     GRANT CREATE SESSION TO flinkuser;
     GRANT SET CONTAINER TO flinkuser;
     GRANT SELECT ON V_$DATABASE to flinkuser;
     GRANT FLASHBACK ANY TABLE TO flinkuser;
     GRANT SELECT ANY TABLE TO flinkuser;
     GRANT SELECT_CATALOG_ROLE TO flinkuser;
     GRANT EXECUTE_CATALOG_ROLE TO flinkuser;
     GRANT SELECT ANY TRANSACTION TO flinkuser;
     GRANT LOGMINING TO flinkuser;

     GRANT CREATE TABLE TO flinkuser;
     GRANT LOCK ANY TABLE TO flinkuser;
     GRANT ALTER ANY TABLE TO flinkuser;
     GRANT CREATE SEQUENCE TO flinkuser;

     GRANT EXECUTE ON DBMS_LOGMNR TO flinkuser;
     GRANT EXECUTE ON DBMS_LOGMNR_D TO flinkuser;

     GRANT SELECT ON V_$LOG TO flinkuser;
     GRANT SELECT ON V_$LOG_HISTORY TO flinkuser;
     GRANT SELECT ON V_$LOGMNR_LOGS TO flinkuser;
     GRANT SELECT ON V_$LOGMNR_CONTENTS TO flinkuser;
     GRANT SELECT ON V_$LOGMNR_PARAMETERS TO flinkuser;
     GRANT SELECT ON V_$LOGFILE TO flinkuser;
     GRANT SELECT ON V_$ARCHIVED_LOG TO flinkuser;
     GRANT SELECT ON V_$ARCHIVE_DEST_STATUS TO flinkuser;
     exit;
   ```

### 对于 CDB 数据库

总的来说，配置 CDB 数据库的步骤与非 CDB 数据库非常相似，但命令可能会有所不同。

- 启用日志归档
   ```sql
   ORACLE_SID=ORCLCDB
   export ORACLE_SID
   sqlplus /nolog
     CONNECT sys/password AS SYSDBA
     alter system set db_recovery_file_dest_size = 10G;
     -- should exist
     alter system set db_recovery_file_dest = '/opt/oracle/oradata/recovery_area' scope=spfile;
     shutdown immediate
     startup mount
     alter database archivelog;
     alter database open;
     -- Should show "Database log mode: Archive Mode"
     archive log list
     exit;
   ```
  **注意:**
  您还可以使用以下命令启用补充日志记录：
   ```sql
   -- Enable supplemental logging for a specific table:
   ALTER TABLE inventory.customers ADD SUPPLEMENTAL LOG DATA (ALL) COLUMNS;
   -- Enable supplemental logging for database
   ALTER DATABASE ADD SUPPLEMENTAL LOG DATA;
   ```

- 创建具有权限的 Oracle 用户
   ```sql
   sqlplus sys/password@//localhost:1521/ORCLCDB as sysdba
     CREATE TABLESPACE logminer_tbs DATAFILE '/opt/oracle/oradata/ORCLCDB/logminer_tbs.dbf' SIZE 25M REUSE AUTOEXTEND ON MAXSIZE UNLIMITED;
     exit
   ```
   ```sql
   sqlplus sys/password@//localhost:1521/ORCLPDB1 as sysdba
     CREATE TABLESPACE logminer_tbs DATAFILE '/opt/oracle/oradata/ORCLCDB/ORCLPDB1/logminer_tbs.dbf' SIZE 25M REUSE AUTOEXTEND ON MAXSIZE UNLIMITED;
     exit
   ```
   ```sql
   sqlplus sys/password@//localhost:1521/ORCLCDB as sysdba
     CREATE USER flinkuser IDENTIFIED BY flinkpw DEFAULT TABLESPACE logminer_tbs QUOTA UNLIMITED ON logminer_tbs CONTAINER=ALL;
     GRANT CREATE SESSION TO flinkuser CONTAINER=ALL;
     GRANT SET CONTAINER TO flinkuser CONTAINER=ALL;
     GRANT SELECT ON V_$DATABASE to flinkuser CONTAINER=ALL;
     GRANT FLASHBACK ANY TABLE TO flinkuser CONTAINER=ALL;
     GRANT SELECT ANY TABLE TO flinkuser CONTAINER=ALL;
     GRANT SELECT_CATALOG_ROLE TO flinkuser CONTAINER=ALL;
     GRANT EXECUTE_CATALOG_ROLE TO flinkuser CONTAINER=ALL;
     GRANT SELECT ANY TRANSACTION TO flinkuser CONTAINER=ALL;
     GRANT LOGMINING TO flinkuser CONTAINER=ALL;
     GRANT CREATE TABLE TO flinkuser CONTAINER=ALL;
     -- 如果设置 scan.increative.snapshot.enabled=true （默认值），则不需要执行这条语句
     GRANT LOCK ANY TABLE TO flinkuser CONTAINER=ALL;
     GRANT CREATE SEQUENCE TO flinkuser CONTAINER=ALL;

     GRANT EXECUTE ON DBMS_LOGMNR TO flinkuser CONTAINER=ALL;
     GRANT EXECUTE ON DBMS_LOGMNR_D TO flinkuser CONTAINER=ALL;

     GRANT SELECT ON V_$LOG TO flinkuser CONTAINER=ALL;
     GRANT SELECT ON V_$LOG_HISTORY TO flinkuser CONTAINER=ALL;
     GRANT SELECT ON V_$LOGMNR_LOGS TO flinkuser CONTAINER=ALL;
     GRANT SELECT ON V_$LOGMNR_CONTENTS TO flinkuser CONTAINER=ALL;
     GRANT SELECT ON V_$LOGMNR_PARAMETERS TO flinkuser CONTAINER=ALL;
     GRANT SELECT ON V_$LOGFILE TO flinkuser CONTAINER=ALL;
     GRANT SELECT ON V_$ARCHIVED_LOG TO flinkuser CONTAINER=ALL;
     GRANT SELECT ON V_$ARCHIVE_DEST_STATUS TO flinkuser CONTAINER=ALL;
     exit
   ```

查看更多关于 [设置 Oracle](https://debezium.io/documentation/reference/1.5/connectors/oracle.html#setting-up-oracle)

## 如何创建 Oracle Extract 节点

### SQL API 用法

Oracle Extract 节点可以定义如下：

```sql
-- 创建 an Oracle Extract 节点 'products' in Flink SQL
Flink SQL> CREATE TABLE products (
     ID INT NOT NULL,
     NAME STRING,
     DESCRIPTION STRING,
     WEIGHT DECIMAL(10, 3),
     PRIMARY KEY(id) NOT ENFORCED
     ) WITH (
     'connector' = 'oracle-cdc-inlong',
     'hostname' = 'localhost',
     'port' = '1521',
     'username' = 'flinkuser',
     'password' = 'flinkpw',
     'database-name' = 'XE',
     'schema-name' = 'inlong',
     'table-name' = 'user');
     
Flink SQL> SELECT * FROM products;
```
:::info
当使用 CDB + PDB 模型时，您需要在 Flink DDL 中添加一个额外的选项 `'debezium.database.pdb.name' = 'xxx'` 来指定要连接的 PDB 的名称。
:::

### InLong Dashboard 用法

TODO: 将在未来支持此功能。

### InLong Manager Client 用法

TODO: 将在未来支持此功能。

## Oracle Extact 节点参数

| **选项**                  | **是否必须** | **默认**   | **类型** | **描述**                                                     |
| ------------------------- | ------------ | ---------- | -------- | ------------------------------------------------------------ |
|      connector|      必选|      (none)|      String|      指定要使用的连接器，这里应该是 `oracle-cdc-inlong`。|
|      hostname|      必选|      (none)|      String|      Oracle 数据库服务器的 IP 地址或主机名。|
|      username|      必选|      (none)|      String|      连接到 Oracle 数据库服务器时要使用的 Oracle 数据库的名称。|
|      password|      必选|      (none)|      String|      连接到 Oracle 数据库服务器时使用的密码。|
|      database-name|      必选|      (none)|      String|      要监视的 Oracle 服务器的数据库名称。|
|      schema-name|      必选|      (none)|      String|      要监视的 Oracle 数据库的 Schema 名称。|
|      table-name|      必选|      (none)|      String|      要监视的 Oracle 数据库的表名。格式为<i>&lt;schema_name&gt;.&lt;table_name&gt;</i>|
|      port|      可选|      1521|      Integer|      Oracle 数据库服务器的整数端口号。|
|      scan.startup.mode|      可选|      initial|      String|Oracle CDC 消费者的可选启动模式，有效枚举为"initial"和"latest-offset"。 请参阅<a href="#startup-reading-position">启动阅读位置</a>部分了解更多详细信息。|
|      debezium.*|      可选|      (none)|      String|      将 Debezium 的属性整合到用于从 Oracle 服务器捕获数据更改的 Debezium Embedded Engine。 例如：`debezium.snapshot.mode` = `never`。 详细了解 <a href="https://debezium.io/documentation/reference/1.5/connectors/oracle.html#oracle-connector-properties">Debezium 的 Oracle 连接器属性</a>| 
|       inlong.metric.labels|       可选|       (none)|       String|       inlong metric 的标签值，该值的构成为groupId=[groupId]&streamId=[streamId]&nodeId=[nodeId]。| 
|       source.multiple.enable|       可选|       false|       Boolean|       是否开启多模式、表同步功能，如果为 `true`，Oracle Extract Node 则将表的物理字段压缩成 `canal-json` 格式的特殊元字段 `data_canal`。| 
|       scan.incremental.snapshot.enabled|       可选|       true|       Boolean|       增量快照是一种读取表快照的新机制。与旧的快照机制相比，增量快照具有许多优点，包括：（1）在快照读取期间 Source 可以是并行的，（2）Source 可以在快照读取过程中执行 Chunk 粒度中的检查点，（3）Source 不需要在快照读取之前获取 ROW SHARE MODE 锁。| 
|       scan.incremental.snapshot.chunk.size|       可选|       8096|       Integer|       表快照的块大小（行数），读取表的快照时，表的快照被分成多个块。| 
|       scan.snapshot.fetch.size|       可选|       1024|       Integer|       读取表快照时每次轮询的最大获取大小。| 
|       connect.max-retries|       可选|       3|       Integer|       连接器应重试以建立 Oracle 数据库服务器连接的最大重试次数。| 
|       chunk-meta.group.size|       可选|       1000|       Integer|       Chunk meta 组大小，如果 meta 大小超过组大小，则 meta 将被分成多个组。| 
|       connect.timeout|       可选|       30s|       Duration|       连接器在尝试连接到 Oracle 数据库服务器后在超时之前应等待的最长时间。| 
|       chunk-key.even-distribution.factor.lower-bound|       可选|       0.05d|       Double|       Chunk Key 分布因子的下限。分布系数用于确定表格是否均匀分布。当数据分布均匀时，表块将均匀地使用计算优化，当数据分布不均匀时，将进行拆分查询。分布因子可以通过（MAX（id）-MIN（id）+1）/rowCount计算。| 
|       chunk-key.even-distribution.factor.upper-bound|       可选|       1000.0d|       Double|       Chunk Key 分布因子的上限。分布系数用于确定表格是否均匀分布。当数据分布均匀时，表块将均匀地使用计算优化，当数据分布不均匀时，将进行拆分查询。分布因子可以通过（MAX（id）-MIN（id）+1）/rowCount计算。| 
|       connection.pool.size|       可选|       20|       Integer|       连接池大小。| 

## 局限性

### 在扫描表的快照期间无法执行 `checkpoint`

在扫描数据库表的快照时，由于没有可恢复的位置，我们无法执行检查点。为了不执行检查点，Oracle CDC 源将保持检查点等待超时。超时检查点将被识别为失败的检查点，默认情况下，这将触发 Flink 作业的故障转移。所以如果数据库表很大，建议添加以下 Flink 配置，避免因为超时检查点而导致故障转移：
```
execution.checkpointing.interval: 10min
execution.checkpointing.tolerable-failed-checkpoints: 100
restart-strategy: fixed-delay
restart-strategy.fixed-delay.attempts: 2147483647
```

## 可用的元数据字段

以下格式元数据可以作为表定义中的只读 (VIRTUAL) 列公开。


| **字段名称**                  | **数据类型** | **描述**   | 
| ------------------------- | ------------ | ---------- |
|      table_name|      STRING NOT NULL|      该行所属的表名。|
|      schema_name|      STRING NOT NULL|      该行所属的模式名称。|
|      database_name|      STRING NOT NULL|      该行所属的数据库名称。|
|      op_ts|      TIMESTAMP_LTZ(3) NOT NULL|      它指示在数据库中进行更改的时间。<br/>如果记录从表的快照而不是change流中读取，则该值始终为0。|
|      meta.table_name|      STRING NOT NULL|      该行所属的表名。|
|      meta.schema_name|      STRING NOT NULL|      该行所属的模式名称。|
|      meta.database_name|      STRING NOT NULL|      该行所属的数据库名称。|
|      meta.op_ts|      TIMESTAMP_LTZ(3) NOT NULL|      它指示在数据库中进行更改的时间。<br/>如果记录从表的快照而不是change流中读取，则该值始终为0。|
|      meta.op_type|      STRING|      数据库操作的类型，如 INSERT/DELETE 等。|
|      meta.data_canal|      STRING/BYTES|      `canal-json` 格式化的行的数据只有在 `source.multiple.enable` 选项为 `true` 时才存在。|
|      meta.is_ddl|      BOOLEAN|      是否是 DDL 语句。|
|      meta.ts|      TIMESTAMP_LTZ(3) NOT NULL|      接收和处理行的当前时间。|
|      meta.sql_type|      MAP|      将 Sql_type 表字段映射到 Java 数据类型 Id。|
|      meta.oracle_type|      MAP|      表的结构。|
|      meta.pk_names|      ARRAY|      表的主键名称。|

扩展的 CREATE TABLE 示例演示了公开这些元数据字段的语法：

```sql
CREATE TABLE products (
    db_name STRING METADATA FROM 'database_name' VIRTUAL,
    schema_name STRING METADATA FROM 'schema_name' VIRTUAL, 
    table_name STRING METADATA  FROM 'table_name' VIRTUAL,
    op_ts TIMESTAMP_LTZ(3) METADATA FROM 'op_ts' VIRTUAL,
    meta_db_name STRING METADATA FROM 'meta.database_name' VIRTUAL,
    meta_schema_name STRING METADATA FROM 'meta.schema_name' VIRTUAL, 
    meta_table_name STRING METADATA  FROM 'meta.table_name' VIRTUAL,
    meat_op_ts TIMESTAMP_LTZ(3) METADATA FROM 'meta.op_ts' VIRTUAL,
    meta_op_type STRING METADATA  FROM 'meta.op_type' VIRTUAL,
    meta_data_canal STRING METADATA  FROM 'meta.data_canal' VIRTUAL,
    meta_is_ddl BOOLEAN METADATA FROM 'meta.is_ddl' VIRTUAL,
    meta_ts TIMESTAMP_LTZ(3) METADATA FROM 'meta.ts' VIRTUAL,
    meta_sql_type MAP<STRING, INT> METADATA FROM 'meta.sql_type' VIRTUAL,
    meat_oracle_type MAP<STRING, STRING> METADATA FROM 'meta.oracle_type' VIRTUAL,
    meta_pk_names ARRAY<STRING> METADATA FROM 'meta.pk_names' VIRTUAL
    ID INT NOT NULL,
    NAME STRING,
    DESCRIPTION STRING,
    WEIGHT DECIMAL(10, 3),
    PRIMARY KEY(id) NOT ENFORCED
) WITH (
    'connector' = 'oracle-cdc-inlong',
    'hostname' = 'localhost',
    'port' = '1521',
    'username' = 'flinkuser',
    'password' = 'flinkpw',
    'database-name' = 'XE',
    'schema-name' = 'inventory',
    'table-name' = 'inventory.products'
);
```
:::caution
Oracle 方言是区分大小写的，如果字段名没有被引用，它会将字段名转换为大写，Flink SQL 不会转换字段名。因此对于 oracle 数据库中的物理列，我们在 Flink SQL 中定义 `oracle-cdc` 表时应该使用其在 Oracle 中转换后的字段名称。
:::

## 特征

### Exactly-Once 处理

Oracle Extract 节点是一个 Flink Source 连接器，它将首先读取数据库快照，然后通过**exactly-once 处理**继续读取更改事件，即使发生故障。请阅读 [连接器的工作原理](https://debezium.io/documentation/reference/1.5/connectors/oracle.html#how-the-oracle-connector-works)。

### 启动读取位置

<a name="startup-reading-position"></a>

配置选项 `scan.startup.mode` 指定 Oracle Extract 节点消费者的启动模式。有效的枚举是：

- `initial` (默认): 首次启动时对被监控的数据库表进行初始快照，并继续读取最新的 Redo Log。
- `latest-offset`: 永远不要在第一次启动时对受监控的数据库表执行快照，只需从自连接器启动以来的更改。

:::caution
`scan.startup.mode` 选项的机制依赖于 Debezium 的`snapshot.mode` 配置。所以请不要一起使用它们。如果您在 DDL 表中同时指定了 `scan.startup.mode` 和 `debezium.snapshot.mode` 选项，可能会导致 `scan.startup.mode` 不起作用。
:::

### 单线程读取

Oracle Extract 节点不能并行读取，因为只有一个任务可以接收更改事件。

### 整库、多模式、表同步

Oracle Extract 节点支持整库、多模式、多表同步。开启该功能后，Oracel Extract 节点会将表的物理字段压缩成 `canal-json` 格式的特殊元字段 `data_canal`。

配置参数：

| **参数** | **是否必须** | **默认值** | **数据类型** | **描述** |
| ---| ---| ---| ---| ---|
|source.multiple.enable|optional| false|String| 指定`'source.multiple.enable' = 'true'`参数开启整库、多模式、多表同步功能 | 
|schema-name|required|(none)|String| 要监视的 Oracle 数据库的 Schema 名称。如果要捕获多个模式，可以使用逗号分割它们。例如：`'schema-name' = 'SCHEMA1,SCHEMA2'` |
|table-name| required | (none) |String| 要监视的 Oracle 数据库的表名。如果要捕获多个表，可以使用逗号分割它们。例如：`'table-name' = 'SCHEMA1.TB.*, SCHEMA2.TB1'`|

CREATE TABLE 示例演示该功能语法：

```sql
CREATE TABLE node(
    data STRING METADATA FROM 'meta.data_canal' VIRTUAL)
    WITH (
    'connector' = 'oracle-cdc-inlong',
    'hostname' = 'localhost',
    'port' = '1521',
    'username' = 'flinkuser',
    'password' = 'flinkpw',
    'database-name' = 'XE',
    'schema-name' = 'inventory',
    'table-name' = 'inventory..*',
    'source.multiple.enable' = 'true'
)
```

## 数据类型映射

| **[Oracle type](https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Data-Types.html)** | **Flink SQL type**| 
| ---| ---|
|      NUMBER(p, s &lt;= 0), p - s &lt; 3      |      TINYINT|
|      NUMBER(p, s &lt;= 0), p - s &lt; 5      |      SMALLINT|
|      NUMBER(p, s &lt;= 0), p - s &lt; 10      |      INT|
|      NUMBER(p, s &lt;= 0), p - s &lt; 19      |      BIGINT|
|      NUMBER(p, s &lt;= 0), 19 &lt;= p - s &lt;= 38 <br/>     |     DECIMAL(p - s, 0)|
|      NUMBER(p, s &gt; 0)      |      DECIMAL(p, s)|
|      NUMBER(p, s &lt;= 0), p - s &gt; 38      |      STRING|
|        FLOAT<br/>        BINARY_FLOAT      |      FLOAT|
|        DOUBLE PRECISION<br/>        BINARY_DOUBLE      |      DOUBLE|
|      NUMBER(1)|      BOOLEAN|    
|        DATE<br/>        TIMESTAMP [(p)]      |      TIMESTAMP [(p)] [WITHOUT TIMEZONE]|
|      TIMESTAMP [(p)] WITH TIME ZONE|      TIMESTAMP [(p)] WITH TIME ZONE|
|      TIMESTAMP [(p)] WITH LOCAL TIME ZONE|      TIMESTAMP_LTZ [(p)]|    
|        CHAR(n)<br/>        NCHAR(n)<br/>        NVARCHAR2(n)<br/>        VARCHAR(n)<br/>        VARCHAR2(n)<br/>        CLOB<br/>        NCLOB<br/>        XMLType      |      STRING|
|      BLOB<br/>      ROWID      |      BYTES|
|      INTERVAL DAY TO SECOND<br/>      INTERVAL YEAR TO MONTH      |      BIGINT|