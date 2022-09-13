---
title: SQLServer-CDC
sidebar_position: 10
---

import {siteVariables} from '../../version';

## Overview

The SQLServer Extract Node reads data and incremental data from the SQLServer database. The following will describe how to set up the SQLServer extraction node.

## Supported Version

| Extract Node                | Version                                                                                                                                                                                                                                                                                                                                                                                                |
|-----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [SQLServer-cdc](./sqlserver-cdc.md) | [SQLServer](https://docs.microsoft.com/en-us/sql/database-engine/install-windows/install-sql-server?view=sql-server-ver16): 2014、2016、2017、2019、2022 |      |

## Dependencies

Introduce related SQLServer Extract Node dependencies through maven.
Of course, you can also use INLONG to provide jar packages.([sort-connector-sqlserver-cdc](https://inlong.apache.org/download))

### Maven dependency

<pre><code parentName="pre">
{`<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-sqlserver-cdc</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
`}
</code></pre>
## Setup SQLServer Extract Node

SQLServer Extract Node needs to open related libraries and tables, the steps are as follows:

1. Enable the CDC function for the database.
```sql
if exists(select 1 from sys.databases where name='dbName' and is_cdc_enabled=0)
begin
    exec sys.sp_cdc_enable_db
end
```
2. Check the database CDC capability status.
```sql
select is_cdc_enabled from sys.databases where name='dbName'
```
note: 1 is running CDC of DB.

3. Turn on CDC for the table
```sql
IF EXISTS(SELECT 1 FROM sys.tables WHERE name='tableName' AND is_tracked_by_cdc = 0)
BEGIN
    EXEC sys.sp_cdc_enable_table
        @source_schema = 'dbo', -- source_schema
        @source_name = 'tableName', -- table_name
        @capture_instance = NULL, -- capture_instance
        @supports_net_changes = 1, -- supports_net_changes
        @role_name = NULL, -- role_name
        @index_name = NULL, -- index_name
        @captured_column_list = NULL, -- captured_column_list
        @filegroup_name = 'PRIMARY' -- filegroup_name
END
```
note: The table must have a primary key or unique index.

4. Check the table CDC capability status.
```sql
SELECT is_tracked_by_cdc FROM sys.tables WHERE name='tableName'
```
note: 1 is running CDC of table.

## How to create a SQLServer Extract Node

### Usage for SQL API

The example below shows how to create a SQLServer Extract Node with `Flink SQL Cli` :

```sql
-- Set checkpoint every 3000 milliseconds                       
Flink SQL> SET 'execution.checkpointing.interval' = '3s';   

-- Create a SQLServer table 'sqlserver_extract_node' in Flink SQL Cli
Flink SQL> CREATE TABLE sqlserver_extract_node (
     order_id INT,
     order_date TIMESTAMP(0),
     customer_name STRING,
     price DECIMAL(10, 5),
     product_id INT,
     order_status BOOLEAN,
     PRIMARY KEY(order_id) NOT ENFORCED
     ) WITH (
     'connector' = 'sqlserver-cdc-inlong',
     'hostname' = 'YourHostname',
     'port' = 'port', --default:1433
     'username' = 'YourUsername',
     'password' = 'YourPassword',
     'database-name' = 'YourDatabaseName',
     'schema-name' = 'YourSchemaName' -- default:dbo
     'table-name' = 'YourTableName');
  
-- Read snapshot and binlog from sqlserver_extract_node
Flink SQL> SELECT * FROM sqlserver_extract_node;
```
### Usage for InLong Dashboard
TODO

### Usage for InLong Manager Client
TODO

## SQLServer Extract Node Options

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
      <td>Specify what connector to use, here should be 'sqlserver-cdc-inlong'.</td>
    </tr>
    <tr>
      <td>hostname</td>
      <td>required</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>IP address or hostname of the SQLServer database.</td>
    </tr>
    <tr>
      <td>username</td>
      <td>required</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>Username to use when connecting to the SQLServer database.</td>
    </tr>
    <tr>
      <td>password</td>
      <td>required</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>Password to use when connecting to the SQLServer database.</td>
    </tr>
    <tr>
      <td>database-name</td>
      <td>required</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>Database name of the SQLServer database to monitor.</td>
    </tr> 
    <tr>
      <td>schema-name</td>
      <td>required</td>
      <td style={{wordWrap: 'break-word'}}>dbo</td>
      <td>String</td>
      <td>Schema name of the SQLServer database to monitor.</td>
    </tr>
    <tr>
      <td>table-name</td>
      <td>required</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>Table name of the SQLServer database to monitor.</td>
    </tr>
    <tr>
      <td>port</td>
      <td>optional</td>
      <td style={{wordWrap: 'break-word'}}>1433</td>
      <td>Integer</td>
      <td>Integer port number of the SQLServer database.</td>
    </tr>
    <tr>
      <td>server-time-zone</td>
      <td>optional</td>
      <td style={{wordWrap: 'break-word'}}>UTC</td>
      <td>String</td>
      <td>The session time zone in database server, e.g. "Asia/Shanghai".</td>
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
      <td>meta.schema_name</td>
      <td>STRING NOT NULL</td>
      <td>Name of the schema that contain the row.</td>
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
  </tbody>
</table>

The extended CREATE TABLE example demonstrates the syntax for exposing these metadata fields:
```sql
CREATE TABLE sqlserver_extract_node (
    table_name STRING METADATA  FROM 'table_name' VIRTUAL,
    schema_name STRING METADATA  FROM 'schema_name' VIRTUAL,
    db_name STRING METADATA FROM 'database_name' VIRTUAL,
    operation_ts TIMESTAMP_LTZ(3) METADATA FROM 'op_ts' VIRTUAL,
    id INT NOT NULL
) WITH (
    'connector' = 'sqlserver-cdc-inlong',
    'hostname' = 'localhost',
    'port' = '1433',
    'username' = 'sa',
    'password' = 'password',
    'database-name' = 'test',
    'schema-name' = 'dbo',
    'table-name' = 'worker'
);
```

## Data Type Mapping
<div class="wy-table-responsive">
<table class="colwidths-auto docutils">
    <thead>
      <tr>
        <th class="text-left">SQLServer type</th>
        <th class="text-left">Flink SQL type</th>
      </tr>
    </thead>
    <tbody>
    <tr>
      <td>char(n)</td>
      <td>CHAR(n)</td>
    </tr>
    <tr>
      <td>
        varchar(n)<br/>
        nvarchar(n)<br/>
        nchar(n)</td>
      <td>VARCHAR(n)</td>
    </tr>
    <tr>
      <td>
        text<br/>
        ntext<br/>
        xml</td>
      <td>STRING</td>
    </tr>
    <tr>
      <td>
        decimal(p, s)<br/>
        money<br/>
        smallmoney</td>
      <td>DECIMAL(p, s)</td>
    </tr>
   <tr>
      <td>numeric</td>
      <td>NUMERIC</td>
    </tr>
    <tr>
      <td>
          REAL<br/>
          FLOAT<br/>
       </td>
       <td>FLOAT</td>
    </tr>
    <tr>
      <td>bit</td>
      <td>BOOLEAN</td>
    </tr>
    <tr>
      <td>int</td>
      <td>INT</td>
    </tr>
    <tr>
      <td>tinyint</td>
      <td>TINYINT</td>
    </tr>
    <tr>
      <td>smallint</td>
      <td>SMALLINT</td>
    </tr>
    <tr>
      <td>time (n)</td>
      <td>TIME (n)</td>
    </tr>
    <tr>
      <td>bigint</td>
      <td>BIGINT</td>
    </tr>
    <tr>
      <td>date</td>
      <td>DATE</td>
    </tr>
    <tr>
      <td>
        datetime2<br/>
        datetime<br/>
        smalldatetime
      </td>
      <td>TIMESTAMP(n)</td>
    </tr>
    <tr>
      <td>
       datetimeoffset
      </td>
      <td>TIMESTAMP_LTZ(3)</td>
    </tr>
    </tbody>
</table>
</div>



