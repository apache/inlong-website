---
title: SQLServer-CDC
sidebar_position: 10
---

import {siteVariables} from '../../version';

## 概述

SQLServer 提取节点从 SQLServer 数据库中读取数据和增量数据。下面将介绍如何配置 SQLServer 抽取节点。

## 支持的版本

| Extract Node                | Version                                                                                                                                                                                                                                                                                                                                                                                                |
|-----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [SQLServer-cdc](./sqlserver-cdc.md) | [SQLServer](https://docs.microsoft.com/en-us/sql/database-engine/install-windows/install-sql-server?view=sql-server-ver16): 2014、2016、2017、2019、2022 |      |

## 依赖配置

通过 Maven 引入 sort-connector-sqlserver-cdc 构建自己的项目。
当然，你也可以直接使用 INLONG 提供的 jar 包。([sort-connector-sqlserver-cdc](https://inlong.apache.org/download))

### Maven依赖配置

<pre><code parentName="pre">
{`<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-sqlserver-cdc</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
`}
</code></pre>
## 配置 SQLServer 加载节点

SQLServer 加载节点需要开启库和表的 CDC 功能，配置步骤如下：

1. 开启数据库 CDC 能力。
```sql
if exists(select 1 from sys.databases where name='dbName' and is_cdc_enabled=0)
begin
    exec sys.sp_cdc_enable_db
end
```
2. 检查数据库 CDC 是否开启。
```sql
select is_cdc_enabled from sys.databases where name='dbName'
```
备注: "1"表示数据库 CDC 开启

3. 开启表的 CDC 能力。
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
备注: 表必须有主键或者唯一索引。

4. 检查表 CDC 是否开启。
```sql
SELECT is_tracked_by_cdc FROM sys.tables WHERE name='tableName'
```
备注: "1"表示表 CDC 开启

## 如何创建一个 SQLServer 抽取节点

### SQL API 的使用

使用 `Flink SQL Cli` :

```sql
-- Set checkpoint every 3000 milliseconds                       
Flink SQL> SET 'execution.checkpointing.interval' = '3s';   

-- Create a SqlServer table 'sqlserver_extract_node' in Flink SQL Cli
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
### InLong Dashboard 方式
TODO

### InLong Manager Client 方式
TODO

## SQLServer 抽取节点参数信息

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
      <td>必须</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>指定使用什么连接器，这里应该是 'sqlserver-cdc-inlong'。</td>
    </tr>
    <tr>
      <td>hostname</td>
      <td>必须</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>SQLServer 数据库 IP 地址或者 hostname。</td>
    </tr>
    <tr>
      <td>username</td>
      <td>必须</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>SQLServer 数据库用户名。</td>
    </tr>
    <tr>
      <td>password</td>
      <td>必须</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>SQLServer 数据库用户密码。</td>
    </tr>
    <tr>
      <td>database-name</td>
      <td>必须</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>SQLServer 数据库监控的数据库名称。</td>
    </tr> 
    <tr>
      <td>schema-name</td>
      <td>必须</td>
      <td style={{wordWrap: 'break-word'}}>dbo</td>
      <td>String</td>
      <td>SQLServer 数据库监控的 schema 名称。</td>
    </tr>
    <tr>
      <td>table-name</td>
      <td>必须</td>
      <td style={{wordWrap: 'break-word'}}>(none)</td>
      <td>String</td>
      <td>SQLServer 数据库监控的表名称。</td>
    </tr>
    <tr>
      <td>port</td>
      <td>可选</td>
      <td style={{wordWrap: 'break-word'}}>1433</td>
      <td>Integer</td>
      <td>SQLServer 数据库端口。</td>
    </tr>
    <tr>
      <td>server-time-zone</td>
      <td>可选</td>
      <td style={{wordWrap: 'break-word'}}>UTC</td>
      <td>String</td>
      <td>SQLServer 数据库连接配置时区。 例如： "Asia/Shanghai"。</td>
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
      <td>包含该行的表的名称。</td>
    </tr>   
     <tr>
      <td>meta.schema_name</td>
      <td>STRING NOT NULL</td>
      <td>包含该行 schema 的名称。</td>
    </tr>
    <tr>
      <td>meta.database_name</td>
      <td>STRING NOT NULL</td>
      <td>包含该行数据库的名称。</td>
    </tr>
    <tr>
      <td>meta.op_ts</td>
      <td>TIMESTAMP_LTZ(3) NOT NULL</td>
      <td>它表示在数据库中进行更改的时间。如果记录是从表的快照而不是 binlog 中读取的，则该值始终为 0。</td>
    </tr>
  </tbody>
</table>

使用元数据字段的例子：
```sql
CREATE TABLE sqlserver_extract_node (
    table_name STRING METADATA  FROM 'table_name' VIRTUAL,
    schema_name STRING METADATA  FROM 'schema_name' VIRTUAL,
    db_name STRING METADATA FROM 'database_name' VIRTUAL,
    operation_ts TIMESTAMP_LTZ(3) METADATA FROM 'op_ts' VIRTUAL,
    id INT NOT NULL
) WITH (
    'connector' = 'sqlserver-cdc',
    'hostname' = 'localhost',
    'port' = '1433',
    'username' = 'sa',
    'password' = 'password',
    'database-name' = 'test',
    'schema-name' = 'dbo',
    'table-name' = 'worker'
);
```

## 数据类型映射
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
