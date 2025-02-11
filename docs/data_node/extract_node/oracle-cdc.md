---
title: Oracle-CDC
sidebar_position: 7
---

import {siteVariables} from '../../version';

## Overview

The Oracle Extract Node allows for reading snapshot data and incremental data from Oracle database.
This document describes how to setup the Oracle Extract Node to run SQL queries against Oracle databases.

## Supported Version
| Extract Node                | Version                                                   | Driver                   |
|-----------------------------|-----------------------------------------------------------|--------------------------|
| [Oracle-CDC](oracle-cdc.md) | [Oracle](https://www.oracle.com/index.html): 11, 12, 19   | Oracle Driver: 19.3.0.0  |

## Dependencies

In order to setup the Oracle Extract Node, the following table provides dependency information for both projects using a build automation tool (such as Maven or SBT) and SQL Client with Sort Connectors JAR bundles.

### Maven dependency

```xml
<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-oracle-cdc</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
```

The Oracle driver dependency is also required to connect to Oracle database. Please download [ojdbc8-19.3.0.0.jar](https://repo1.maven.org/maven2/com/oracle/database/jdbc/ojdbc8/19.3.0.0/ojdbc8-19.3.0.0.jar) and put it into `FLINK_HOME/lib/`.

## Setup Oracle

You have to enable log archiving for Oracle database and define an Oracle user with appropriate permissions on all databases that the Debezium Oracle connector monitors.

### For Non-CDB database

- Enable log archiving

   (1.1). Connect to the database as DBA
    ```sql
    ORACLE_SID=SID
    export ORACLE_SID
    sqlplus /nolog
      CONNECT sys/password AS SYSDBA
    ```

   (1.2). Enable log archiving
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

   (1.3). Check whether log archiving is enabled
    ```sql
    -- Should now "Database log mode: Archive Mode"
    archive log list;
    ```
   **Note:**

   Supplemental logging must be enabled for captured tables or the database in order for data changes to capture the <em>before</em> state of changed database rows.
   The following illustrates how to configure this on the table/database level.
   ```sql
   -- Enable supplemental logging for a specific table:
   ALTER TABLE inventory.customers ADD SUPPLEMENTAL LOG DATA (ALL) COLUMNS;
   ```
   ```sql
   -- Enable supplemental logging for database
   ALTER DATABASE ADD SUPPLEMENTAL LOG DATA;
   ```

- Create an Oracle user with permissions

   (2.1). Create Tablespace
   ```sql
   sqlplus sys/password@host:port/SID AS SYSDBA;
     CREATE TABLESPACE logminer_tbs DATAFILE '/opt/oracle/oradata/SID/logminer_tbs.dbf' SIZE 25M REUSE AUTOEXTEND ON MAXSIZE UNLIMITED;
     exit;
   ```

   (2.2). Create a user and grant permissions
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

### For CDB database

Overall, the steps for configuring CDB database is quite similar to non-CDB database, but the commands may be different. 

- Enable log archiving
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
   **Note:**
   You can also use the following commands to enable supplemental logging:
   ```sql
   -- Enable supplemental logging for a specific table:
   ALTER TABLE inventory.customers ADD SUPPLEMENTAL LOG DATA (ALL) COLUMNS;
   -- Enable supplemental logging for database
   ALTER DATABASE ADD SUPPLEMENTAL LOG DATA;
   ```

- Create an Oracle user with permissions
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
     -- Don’t need to execute this statement, If you set 'scan.incremental.snapshot.enabled=true' (default).
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

See more about the [Setting up Oracle](https://debezium.io/documentation/reference/1.5/connectors/oracle.html#setting-up-oracle)

## How to create an Oracle Extract Node

### Usage for SQL API

The Oracle Extract Node can be defined as following:

```sql
-- Create an Oracle Extract Node 'user' in Flink SQL
Flink SQL> CREATE TABLE oracle_extract_node (
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
  
-- Read snapshot and redo logs from products table
Flink SQL> SELECT * FROM oracle_extract_node;
```
**Note:**
When working with the CDB + PDB model, you are expected to add an extra option `'debezium.database.pdb.name' = 'xxx'` in Flink DDL to specific the name of the PDB to connect to.

### Usage for InLong Dashboard

TODO: It will be supported in the future.

### Usage for InLong Manager Client

TODO: It will be supported in the future.

## Oracle Extact Node Options

| **Option**                | **Required** | **Default**      | **Type** | **Description**                                              |
| ------------------------- | ------------ | ---------- | -------- | ------------------------------------------------------------ |
|		connector|		required|		(none)|		String|		Specify what connector to use, here should be `oracle-cdc-inlong`.|		
|		hostname|		required|		(none)|		String|		IP address or hostname of the Oracle database server.|		
|		username|		required|		(none)|		String|		Name of the Oracle database to use when connecting to the Oracle database server.|		
|		password|		required|		(none)|		String|		Password to use when connecting to the Oracle database server.|		
|		database-name|		required|		(none)|		String|		Database name of the Oracle server to monitor.|		
|		schema-name|		required|		(none)|		String|		Schema name of the Oracle database to monitor.|		
|		table-name|		required|		(none)|		String|		Table name of the Oracle database to monitor. The value is of the form <i>&lt;schema_name&gt;.&lt;table_name&gt;</i>|		
|		port|		optional|		1521|		Integer|		Integer port number of the Oracle database server.|		
|		scan.startup.mode|		optional|		initial|		String|		Optional startup mode for Oracle CDC consumer, valid enumerations are "initial" and "latest-offset". Please see <a href="#startup-reading-position">Startup Reading Position</a>section for more detailed information.|		
|		debezium.*|		optional|		(none)|		String|		Pass-through Debezium's properties to Debezium Embedded Engine which is used to capture data changes from Oracle server. For example: `debezium.snapshot.mode` = `never` See more about the <a href="https://debezium.io/documentation/reference/1.5/connectors/oracle.html#oracle-connector-properties">Debezium's Oracle Connector properties</a>|		 
|		inlong.metric.labels|		optional|		(none)|		String|		Inlong metric label, format of value is groupId=[groupId]&streamId=[streamId]&nodeId=[nodeId].|		 
|		source.multiple.enable|		optional|		false|		Boolean|		Whether to enable multiple schema and table migration. If it is `true`, Oracle Extract Node will compress the physical field of the table into a special meta field `data_canal` in the format of `canal json`.|		 
|		scan.incremental.snapshot.enabled|		optional|		true|		Boolean|		Incremental snapshot is a new mechanism to read snapshot of a table. Compared to the old snapshot mechanism, the incremental snapshot has many advantages, including: (1) source can be parallel during snapshot reading, (2) source can perform checkpoints in the chunk granularity during snapshot reading, (3) source doesn't need to acquire ROW SHARE MODE lock before snapshot reading.|		 
|		scan.incremental.snapshot.chunk.size|		optional|		8096|		Integer|		The chunk size (number of rows) of table snapshot, captured tables are split into multiple chunks when read the snapshot of table.|		 
|		scan.snapshot.fetch.size|		optional|		1024|		Integer|		The maximum fetch size for per poll when read table snapshot.|		 
|		connect.max-retries|		optional|		3|		Integer|		The max retry times that the connector should retry to build Oracle database server connection.|		 
|		chunk-meta.group.size|		optional|		1000|		Integer|		The group size of chunk meta, if the meta size exceeds the group size, the meta will be divided into multiple groups.|		 
|		connect.timeout|		optional|		30s|		Duration|		The maximum time that the connector should wait after trying to connect to the Oracle database server before timing out.|		 
|		chunk-key.even-distribution.factor.lower-bound|		optional|		0.05d|		Double|		The lower bound of chunk key distribution factor. The distribution factor is used to determine whether the table is evenly distribution or not. The table chunks would use evenly calculation optimization when the data distribution is even, and the query for splitting would happen when it is uneven. The distribution factor could be calculated by (MAX(id) - MIN(id) + 1) / rowCount.|		 
|		chunk-key.even-distribution.factor.upper-bound|		optional|		1000.0d|		Double|		The upper bound of chunk key distribution factor. The distribution factor is used to determine whether the table is evenly distribution or not. The table chunks would use evenly calculation optimization when the data distribution is even, and the query for splitting would happen when it is uneven. The distribution factor could be calculated by (MAX(id) - MIN(id) + 1) / rowCount.|		 
|		connection.pool.size|		optional|		20|		Integer|		The connection pool size.|		 

## Limitation

### Can't perform checkpoint during scanning snapshot of tables

During scanning snapshot of database tables, since there is no recoverable position, we can't perform checkpoints. In order to not perform checkpoints, Oracle CDC source will keep the checkpoint waiting to timeout. The timeout checkpoint will be recognized as failed checkpoint, by default, this will trigger a failover for the Flink job. So if the database table is large, it is recommended to add following Flink configurations to avoid failover because of the timeout checkpoints:

```yaml
execution.checkpointing.interval: 10min
execution.checkpointing.tolerable-failed-checkpoints: 100
restart-strategy: fixed-delay
restart-strategy.fixed-delay.attempts: 2147483647
```

## Available Metadata

The following format metadata can be exposed as read-only (VIRTUAL) columns in a table definition.

| **Key**                  | **DataType** | **Description**   | 
| ------------------------- | ------------ | ---------- |
|      table_name|      STRING NOT NULL|      Name of the table that contain the row.|
|      schema_name|      STRING NOT NULL|      Name of the schema that contain the row.|
|      database_name|      STRING NOT NULL|      Name of the database that contain the row.|
|      op_ts|      TIMESTAMP_LTZ(3) NOT NULL|      It indicates the time that the change was made in the database. <br/>If the record is read from snapshot of the table instead of the change stream, the value is always 0.|
|      meta.table_name|      STRING NOT NULL|      Name of the table that contain the row.|
|      meta.schema_name|      STRING NOT NULL|      Name of the schema that contain the row.|
|      meta.database_name|      STRING NOT NULL|      Name of the database that contain the row.|
|      meta.op_ts|      TIMESTAMP_LTZ(3) NOT NULL|      It indicates the time that the change was made in the database. <br/>If the record is read from snapshot of the table instead of the change stream, the value is always 0.|
|      meta.op_type|      STRING|      Type of database operation, such as INSERT/DELETE, etc.|
|      meta.data_canal|      STRING/BYTES|      Data for rows in `canal-json` format only exists when the `source.multiple.enable` option is 'true'.|
|      meta.is_ddl|      BOOLEAN|      Whether the DDL statement.|
|      meta.ts|      TIMESTAMP_LTZ(3) NOT NULL|      The current time when the row was received and processed.|
|      meta.sql_type|      MAP|      Mapping of sql_type table fields to java data type IDs.|
|      meta.oracle_type|      MAP|      Structure of the table.|
|      meta.pk_names|      ARRAY|      Primay key name of the table.|

The extended CREATE TABLE example demonstrates the syntax for exposing these metadata fields:
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

**Note** : The Oracle dialect is case-sensitive, it converts field name to uppercase if the field name is not quoted, Flink SQL doesn't convert the field name. Thus for physical columns from oracle database, we should use its converted field name in Oracle when define an `oracle-cdc` table in Flink SQL.

## Features

### Exactly-Once Processing

The Oracle Extract Node is a Flink Source connector which will read database snapshot first and then continues to read change events with **exactly-once processing** even failures happen. Please read [How the connector works](https://debezium.io/documentation/reference/1.5/connectors/oracle.html#how-the-oracle-connector-works).

### Startup Reading Position

The config option `scan.startup.mode` specifies the startup mode for Oracle CDC consumer. The valid enumerations are:

- `initial` (default): Performs an initial snapshot on the monitored database tables upon first startup, and continue to read the latest redo log.
- `latest-offset`: Never to perform a snapshot on the monitored database tables upon first startup, just read from
  the change since the connector was started.

_Note: the mechanism of `scan.startup.mode` option relying on Debezium's `snapshot.mode` configuration. So please do not use them together. If you specific both `scan.startup.mode` and `debezium.snapshot.mode` options in the table DDL, it may make `scan.startup.mode` doesn't work._

### Single Thread Reading

The Oracle Extract Node can't work in parallel reading, because there is only one task can receive change events.

### Whole Database, Multiple Schemas, Multiple Tables Migration

Oracle Extract Node supports the whole database, multiple schemas, multiple tables migration function. When you enable this function, Oracle Extract Node will compress the physical field of the table into a special meta field `data_canal` in the format of `canal json`.

config options:

| **Option** | **Required** | **Default** | **Type** | **Description** |
| ---| ---| ---| ---| ---|
|source.multiple.enable|optional| false|String|Specify `'source.multiple.enable' = 'true'` to enable the whole database, multiple schemas, multiple tables migration function | 
|schema-name|required|(none)|String| Schema name of the Oracle database to monitor. If you want to capture multiple schemas, you can use commas to separate them. For example: `'schema-name' = 'SCHEMA1,SCHEMA2'` |
|table-name| required | (none) |String| Table name of the Oracle database to monitor. If you want to capture multiple tables, you can use commas to separate them. For example: `'table-name' = 'SCHEMA1.TB.*, SCHEMA2.TB1'`|

The CREATE TABLE example demonstrates the syntax of this function:

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

## Data Type Mapping

| **[Oracle type](https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Data-Types.html)** | **Flink SQL type**| 
| ---| ---|
|      NUMBER(p, s &lt;= 0), p - s &lt; 3      |      TINYINT|
|      NUMBER(p, s &lt;= 0), p - s &lt; 5      |      SMALLINT|
|      NUMBER(p, s &lt;= 0), p - s &lt; 10      |      INT|
|      NUMBER(p, s &lt;= 0), p - s &lt; 19      |      BIGINT|
|      NUMBER(p, s &lt;= 0), 19 &lt;= p - s &lt;= 38 <br/>      |     DECIMAL(p - s, 0)|
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