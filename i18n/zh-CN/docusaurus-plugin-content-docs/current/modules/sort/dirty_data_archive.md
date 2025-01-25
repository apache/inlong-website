---
title: 脏数据归档
sidebar_position: 5
---

## 概览

脏数据为在数据抽取、转换、加载过程中，因数据本身的质量问题导致数据无法正确抽取、转换、加载的数据，
常见的脏数据可能有字段类型、长度、个数不匹配，数据序列化、反序列化异常，目标端库、表不存在等。
脏数据归档可以将 InLong 数据流运行中的脏数据转存到第三方存储，便于业务查找问题。
目前 Sort 支持了 S3、Log 两种目标端的脏数据归档，同时支持 Kafka、Doris、Iceberg、Hbase、Hive、Elasticsearch、JDBC 等常见数据源的脏数据归档。

## 支持的节点

| 类型          | 名称                                        | 归档目标端 |
|--------------|--------------------------------------------|-----------|
| Extract 节点  | Kafka                                      | Log, S3   |
| Load 节点     | Hive                                       | Log, S3   |
|              | Kafka                                      | Log, S3   |
|              | HBase                                      | Log, S3   |
|              | ClickHouse                                 | Log, S3   | 
|              | Iceberg                                    | Log, S3   |
|              | Elasticsearch                              | Log, S3   |
|              | PostgreSQL                                 | Log, S3   | 
|              | HDFS                                       | Log, S3   |
|              | TDSQL Postgres                             | Log, S3   |
|              | Doris                                      | Log, S3   |
|              | SQL Server                                 | Log, S3   |
|              | Greenplum                                  | Log, S3   |

## 脏数据格式化

在脏数据归档处理过程中，我们定义了下面的系统变量，用作脏数据的格式化：
* SYSTEM_TIME: 系统时间，格式为 'yyyy-MM-dd HH:mm:ss'
* DIRTY_TYPE：脏数据类型，常见的有 SerializeError、DeserializeError、DataTypeMappingError 等
* DIRTY_MESSAGE: 脏数据信息，即脏数据产生的原因、异常信息等

归档到 Log 的格式化为：
* [${dirty.side-output.log-tag}] ${value}，其中 ${value} 为 ${dirty.side-output.labels} 和 ${脏数据} 合并，并按照 'csv' 或者 'json' 进行格式化后的值

归档到 S3 的格式化为：
* S3 文件名生成格式为: ${dirty.side-output.s3.key}/${dirty.identifier}-${随机序列}.${文件后缀名}
* S3 文件内数据格式为：会将 ${dirty.side-output.labels} 和 ${脏数据} 合并，并按照 'csv' 或者 'json' 进行格式化

**注**：${dirty.side-output.log-tag}、${dirty.side-output.labels}、${dirty.identifier}、${dirty.side-output.s3.key} 等见下面配置详解。

## 配置

### 公共配置

| 参数 | 是否必选 | 默认值 | 数据类型 | 描述 |
|---------|----------|---------|------|------------|
| dirty.ignore | 可选 | false | Boolean | 是否忽略脏数据，只有为 'true' 才能进行脏数据归档，默认为 'false' |
| dirty.side-output.enable | 可选 | false | Boolean | 是否支持脏数据归档，默认为 'false' |
| dirty.side-output.connector | 必选 | (none) | String | 归档目标端名称，当 'dirty.side-output.enable' 为 'true' 时必须设置该值，目前仅支持 'log' 和 's3'。 |
| dirty.side-output.format | 可选 | csv | String | 脏数据格式化，目前仅支持 'csv' 和 'json'，默认为 'csv'。 |
| dirty.side-output.log.enable | 可选 | true | Boolean |脏数据归档时是否支持日志打印, 默认为 'true'。 |
| dirty.side-output.ignore-errors | 可选 | true | Boolean | 是否忽略脏数据归档中的错误，默认为 'true'。 |
| dirty.identifier | 必选 | (none) | String | 脏数据标识，用作 File 类型脏数据归档的文件名称生成或者 MQ 类型脏数据归档的 Topic 生成或者 数据库类型脏数据归档的 Tablename生成等。 它支持形如 ${variable} 变量替换，这里支持 SYSTEM_TIME、DIRTY_TYPE、DIRTY_MESSAGE 几种系统变量，其他的变量支持取决于具体的节点实现。 |
| dirty.side-output.log-tag | 可选 | (none) | String | 脏数据 Tag，用作日志打印时标识等，比如 [${logTag}] ${logLabels},${dirtydata}。 它支持形如 ${variable} 变量替换，这里支持 SYSTEM_TIME、DIRTY_TYPE、DIRTY_MESSAGE 几种系统变量，其他的变量支持取决于具体的节点实现。 |
| dirty.side-output.labels | 可选 | (none) | String | 脏数据 labels，用作日志打印标识，并将和脏数据一起归档等，比如 [${logTag}] ${logLabels},${dirtydata}。 它支持形如 ${variable} 变量替换，这里支持 SYSTEM_TIME、DIRTY_TYPE、DIRTY_MESSAGE 几种系统变量，其他的变量支持取决于具体的节点实现。 |
| dirty.side-output.field-delimiter | 可选 | , | String | 脏数据归档列分割符，用作 'csv' 等格式化场景，默认为 ','。 |
| dirty.side-output.line-delimiter | 可选 | \n | String | 脏数据归档行分割符，用作 'csv'、'json' 等格式化场景，默认为 '\n'。 |
| dirty.side-output.batch.size | 可选 | 100 | Integer | 脏数据归档缓存 Batch 条数，默认为 '100'。|
| dirty.side-output.batch.bytes | 可选 | 10240 | Integer | 脏数据归档缓存 Batch 大小，单位为 Byte, 默认为 '10240' 即 10KB。|
| dirty.side-output.retries | 可选 | 3 | Integer |  脏数据归档发生错误时重试次数，默认为 '3'。 |
| dirty.side-output.batch.interval | 可选 | 60000 | Integer | 脏数据归档间隔时间，单位为毫秒，默认为 '60000' 即 60s。|

### S3 归档配置

| 参数 | 是否必选 | 默认值 | 数据类型 | 描述 |
|---------|----------|---------|------|------------|
| dirty.side-output.s3.endpoint | 必选 | (none) | String | S3 归档的 Endpoint。 |
| dirty.side-output.s3.region | 必选 | (none) | String | S3 归档的 Region。 |
| dirty.side-output.s3.bucket | 必选 | (none) | String | S3 归档的 Bucket。 |
| dirty.side-output.s3.key | 必选 | (none) | String | S3 归档的 Key。 |
| dirty.side-output.s3.access-key-id | 可选 | (none) | String | S3 归档的  Access Key Id，若不配置该项，则需要在环境中配置好。 |
| dirty.side-output.s3.secret-key-id | 可选 | (none) | String | S3 归档的 Secret Key Id，若不配置该项，则需要在环境中配置好。 |

## 用法

这里将介绍一个同步 Kafka 数据到 Kafka 的例子，同时介绍脏数据归档的使用，其他节点类似。

* 归档到 Log 的使用
```sql
CREATE TABLE `table_user_input` (
    `id` INT,
    `name` INT,
    `age` STRING
) WITH (
    'dirty.side-output.connector' = 'log',
    'dirty.ignore' = 'true',
    'dirty.side-output.enable' = 'true',
    'dirty.side-output.format' = 'csv',
    'dirty.side-output.labels' = 'SYSTEM_TIME=${SYSTEM_TIME}&DIRTY_TYPE=${DIRTY_TYPE}&database=inlong&table=user',
    'inlong.metric.labels' = 'groupId=1&streamId=1&nodeId=1',
    'topic' = 'user_input',
    'properties.bootstrap.servers' = 'localhost:9092',
    'connector' = 'kafka-inlong',
    'scan.startup.mode' = 'earliest-offset',
    'json.timestamp-format.standard' = 'SQL',
    'json.encode.decimal-as-plain-number' = 'true',
    'json.map-null-key.literal' = 'null',
    'json.ignore-parse-errors' = 'false',
    'json.map-null-key.mode' = 'DROP',
    'format' = 'json',
    'json.fail-on-missing-field' = 'false',
    'properties.group.id' = 'test_group'
);

CREATE TABLE `table_user_output` (
    `id` INT,
    `name` STRING,
    `age` INT
) WITH (
    'topic' = 'user_output',
    'properties.bootstrap.servers' = 'localhost:9092',
    'connector' = 'kafka-inlong',
    'sink.ignore.changelog' = 'true',
    'json.timestamp-format.standard' = 'SQL',
    'json.encode.decimal-as-plain-number' = 'true',
    'json.map-null-key.literal' = 'null',
    'json.ignore-parse-errors' = 'true',
    'json.map-null-key.mode' = 'DROP',
    'format' = 'json',
    'json.fail-on-missing-field' = 'true',
    'dirty.ignore' = 'true',
    'dirty.side-output.connector' = 'log',
    'dirty.side-output.enable' = 'true',
    'dirty.side-output.format' = 'csv',
    'dirty.side-output.log.enable' = 'true',
    'dirty.side-output.log-tag' = 'DirtyData',
    'dirty.side-output.labels' = 'SYSTEM_TIME=${SYSTEM_TIME}&DIRTY_TYPE=${DIRTY_TYPE}&database=inlong&table=user'
);

INSERT INTO `table_user_output`
SELECT
    `id`,
    `name`,
    `age`
FROM `table_user_input`;
-- 在这个例子中, 我们故意输入一条非json格式的数据，比如: 1,zhangsan,18，那么依据配置将在日志中打印如下脏数据：
[DirtyData] 2023-01-30 13:01:01 ValueDeserializeError,inlong,user,1,zhangsan,18
```

* 归档到 S3 的使用
```sql
CREATE TABLE `table_user_input` (
    `id` INT,
    `name` INT,
    `age` STRING
) WITH (
    'dirty.side-output.connector' = 's3',
    'dirty.ignore' = 'true',
    'dirty.side-output.enable' = 'true',
    'dirty.side-output.format' = 'csv',
    'dirty.side-output.labels' = 'SYSTEM_TIME=${SYSTEM_TIME}&DIRTY_TYPE=${DIRTY_TYPE}&database=inlong&table=user',
    'dirty.side-output.s3.bucket' = 's3-test-bucket',
    'dirty.side-output.s3.endpoint' = 's3.test.endpoint',
    'dirty.side-output.s3.key' = 'dirty/test',
    'dirty.side-output.s3.region' = 'region',
    'dirty.side-output.s3.access-key-id' = 'access_key_id',
    'dirty.side-output.s3.secret-key-id' = 'secret_key_id',
    'dirty.identifier' = 'inlong-user-${SYSTEM_TIME}',
    'inlong.metric.labels' = 'groupId=1&streamId=1&nodeId=1',
    'topic' = 'user_input',
    'properties.bootstrap.servers' = 'localhost:9092',
    'connector' = 'kafka-inlong',
    'scan.startup.mode' = 'earliest-offset',
    'json.timestamp-format.standard' = 'SQL',
    'json.encode.decimal-as-plain-number' = 'true',
    'json.map-null-key.literal' = 'null',
    'json.ignore-parse-errors' = 'false',
    'json.map-null-key.mode' = 'DROP',
    'format' = 'json',
    'json.fail-on-missing-field' = 'false',
    'properties.group.id' = 'test_group'
);

CREATE TABLE `table_user_output` (
    `id` INT,
    `name` STRING,
    `age` INT
) WITH (
    'topic' = 'user_output',
    'properties.bootstrap.servers' = 'localhost:9092',
    'connector' = 'kafka-inlong',
    'sink.ignore.changelog' = 'true',
    'json.timestamp-format.standard' = 'SQL',
    'json.encode.decimal-as-plain-number' = 'true',
    'json.map-null-key.literal' = 'null',
    'json.ignore-parse-errors' = 'true',
    'json.map-null-key.mode' = 'DROP',
    'format' = 'json',
    'json.fail-on-missing-field' = 'true',
    'dirty.side-output.connector' = 's3',
    'dirty.ignore' = 'true',
    'dirty.side-output.enable' = 'true',
    'dirty.side-output.format' = 'csv',
    'dirty.side-output.labels' = 'SYSTEM_TIME=${SYSTEM_TIME}&DIRTY_TYPE=${DIRTY_TYPE}&database=inlong&table=user',
    'dirty.side-output.s3.bucket' = 's3-test-bucket',
    'dirty.side-output.s3.endpoint' = 's3.test.endpoint',
    'dirty.side-output.s3.key' = 'dirty/test',
    'dirty.side-output.s3.region' = 'region',
    'dirty.side-output.s3.access-key-id' = 'access_key_id',
    'dirty.side-output.s3.secret-key-id' = 'secret_key_id',
    'dirty.identifier' = 'inlong-user-${SYSTEM_TIME}'
);

INSERT INTO `table_user_output`
SELECT
    `id`,
    `name`,
    `age`
FROM `table_user_input`;
-- 在这个例子中, 我们故意输入一条非json格式的数据，比如: 1,zhangsan,18，那么依据配置将向s3中写入如下脏数据（文件路径为: dirty/test/inlong-user-2023-01-01130101xxxx.txt, xxxx为4位随机序列）：
[DirtyData] 2023-01-30 13:01:01 ValueDeserializeError,inlong,user,1,zhangsan,18
```


