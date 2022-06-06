---
title: Kafka
sidebar_position: 4
---
## 概览

Kafka读取节点支持读取数据到Kafka

## 配置
当前版本 Dashboard 还不支持从 Kafka 中抽取数据，
你可以通过 [Command-line Tools](user_guide/command_line_tools.md) 命令行工具从后台创建 Kafka 数据流。

## 读取节点参数

|  参数 | 是否必须  |  默认值 |  数据类型 | 描述  |
|---|---|---|---|---|
|id|必填|(none)|String|节点标识|
|name|可选|(none)|String|节点名称|
|fields|必填|(none)|`List<FieldInfo>`|表字段|
|watermarkField|可选|(none)|WatermarkField|生成watermark的字段|
|properties|可选|(none)|Map<String, String>|其他的连接器参数|
|  topic | 必填  |  (none) | String  | Kafka topic 名称|
|   bootstrapServers| 必填  |  (none) | String  | 逗号分隔的Kafka brokers |
|  format | 必填  |  (none) | Format  | 格式包含 `json`,`avro`,`debezium-json`,`canal-json-inlong`,`csv` |
|kafkaScanStartupMode| 必填|(none)|KafkaScanStartupMode |Kafka consumer 的启动模式。 `earliest-offset` and `latest-offset`|
|primaryKey|可选|(none)|String|主键，非空值表示连接器使用upsert-kafka，空值代表连接器使用kafka|
|groupId|可选|null|String|消费组id，建议自己设置|

## 依赖

打包后，我们可以找到连接器依赖包 `sort-connector-kafka-1.2.0-incubating-SNAPSHOT.jar`。

## 使用Flink SQL
* 连接器是kafka :
```sql
CREATE TABLE kafkaTable (
    `id` INT,
    `name` STRINTG
) WITH (
    'connector' = 'kafka',
    'topic' = 'user',
    'properties.bootstrap.servers' = 'localhost:9092',
    'properties.group.id' = 'testGroup',
    'scan.startup.mode' = 'earliest-offset',
    'format' = 'csv'
)

```
* 连接器是upsert-kafka :
```sql
CREATE TABLE kafkaTable (
    `id` INT,
    `name` STRINTG
) WITH (
    'connector' = 'upsert-kafka',
    'topic' = 'user',
    'properties.bootstrap.servers' = 'localhost:9092',
    'properties.group.id' = 'testGroup',
    'scan.startup.mode' = 'earliest-offset',
    'key.format' = 'csv',
    'value.format' = 'csv'
)
```
