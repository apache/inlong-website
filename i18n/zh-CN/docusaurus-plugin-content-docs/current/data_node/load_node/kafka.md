---
title: Kafka
sidebar_position: 4
---
## 概览

Kafka写入节点支持写数据到Kafka。

## 配置
创建数据流时，数据流向选择 `Kafka`，并点击 ”添加“ 进行配置。

![Kafka Configuration](img/kafka.png)

## 写入节点参数

|  参数 | 是否必须  |  默认值 |  数据类型 | 描述  |
|---|---|---|---|---|
|id|必填|(none)|String|节点标识|
|name|可选|(none)|String|节点名称|
|fields|必填|(none)|`List<FieldInfo>`|表字段|
|fieldRelations|required|(none)|`List<FieldRelation>`|定义输入和输出字段的映射关系|
|properties|optional|(none)|Map<String, String>|连接器其他参数|
|topic | required  |  (none) | String  |Kafka topic 名字|
|bootstrapServers| required  |  (none) | String  | 逗号分隔的Kafka brokers |
|format | required  |  (none) | Format  | 格式包含`json`,`avro`,`debezium-json`,`canal-json-inlong`,`csv` |
|primaryKey|optional|(none)|String|主键，非空值同时格式是`csv`,`json`,`avro`表示连接器使用upsert-kafka，非空值同时格式是`debezium-json`,`canal-json-inlong`表示连接器使用`kafka-inlong`, 空值代表连接器使用kafka|

## 依赖

We can find Kafka connector dependency `sort-connector-kafka-1.2.0-incubating-SNAPSHOT.jar` after Inlong maven package.

## 如何使用Flink SQL

* 连接器是kafka :
```sql
CREATE TABLE kafkaTable (
    `id` INT,
    `name` STRINTG
) WITH (
    'connector' = 'kafka',
    'topic' = 'user',
    'properties.bootstrap.servers' = 'localhost:9092',
    'format' = 'csv'
)

```
* 连接器是upsert-kafka :
```sql
CREATE TABLE kafkaTable (
    PRIMARY KEY (`id`) NOT ENFORCED,
    `id` INT,
    `name` STRINTG
) WITH (
    'connector' = 'upsert-kafka',
    'topic' = 'user',
    'properties.bootstrap.servers' = 'localhost:9092',
    'key.format' = 'csv',
    'value.format' = 'csv'
)
```
* 连接器是kafka-inlong :  
  它支持为`canal-json-inlong`格式写元数据，支持的元数据如下。

  |  元数据 | 描述  | 
    |---|---|
  |meta.table_name | 表名  | 
  |meta.database_name | 数据库名  |
  |meta.op_ts| 它表示数据改变的时间. 如果数据来自存量数据，那它的值一直是0|
  |meta.op_type|操作类型, INSERT/UPDATE/DELETE|
  |meta.batch_id|自增id|
  |meta.is_ddl|它的值一直是false|
  |meta.update_before|对于更新类型数据的update-before 数据|
  |meta.mysql_type|MySQL 字段类型|
  |meta.pk_names|主键|
  |meta.sql|空|
  |meta.sql_type|SQL 字段类型|
  |meta.ts|连接器生成事件时的时间|

```sql
CREATE TABLE kafkaTable (
    PRIMARY KEY (`id`) NOT ENFORCED,
    `id` INT,
    `name` STRINTG
) WITH (
    'connector' = 'kafka-inlong',
    'topic' = 'user',
    'properties.bootstrap.servers' = 'localhost:9092',
    'key.format' = 'canal-json-inlong',
    'value.format' = 'canal-json-inlong'
)
```
