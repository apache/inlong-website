---
title: Postgres
sidebar_position: 4
---
## 概览

Postgres读取节点支持CDC的方式读取Postgres数据。

## 读取节点参数

|  参数 | 是否必须  |  默认值 |  数据类型 | 描述  |
|---|---|---|---|---|
|id|必填|(none)|String|节点标识|
|name|可选|(none)|String|节点名称|
|fields|必填|(none)|`List<FieldInfo>`|表字段|
|watermarkField|可选|(none)|WatermarkField|生成watermark的字段|
|properties|可选|(none)|Map<String, String>|其他的连接器参数|
|primaryKey|可选|(none)|String|主键字段|
|tableNames|必填|(none)|`List<String>`|PostgreSQL数据库需要监控的表|
|hostname|必填|(none)|String|PostgreSQL数据库的IP地址或者主机名|
|username|必填|(none)|String|连接PostgreSQL的用户名|
|password|必填|(none)|String|连接PostgreSQL的密码|
|database|必填|(none)|String|PostgreSQL数据库需要监控的数据库|
|schema|必填|(none)|String|PostgreSQL数据库需要监控的schema|
|port|必填|(none)|Integer|端口|
|decodingPluginName|可选|pgoutput|String|Postgres logical 解码器 plug-in安装在Postgres。目前支持的值包含`decoderbufs`, `wal2json`, `wal2json_rds`, `wal2json_streaming`, `wal2json_rds_streaming` 和 `pgoutput`.|

## 依赖

打包后我们可以找到连接器依赖包 `sort-connector-postgres-cdc-1.2.0-incubating-SNAPSHOT.jar`。

## 如何使用Flink SQL
* 连接器是postgres-cdc :
```sql
CREATE TABLE `postgresTable`(
  `name` STRING,
  `age` INT
) WITH (
  'connector' = 'postgres-cdc',
  'hostname' = 'localhost',
  'username' = 'postgres',
  'password' = 'inlong',
  'database-name' = 'postgres',
  'schema-name' = 'public',
  'port' = '5432',
  'table-name' = 'user',
  'decoding.plugin.name' = 'pgoutput',
  'slot.name' = 'feaafacbaddadc'
)
```