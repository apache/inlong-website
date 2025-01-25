---
title: Dirty Data Archive
sidebar_position: 5
---

## Overview

Dirty data refers to data that cannot be extracted, transformed, and loaded correctly due to the quality of the data itself during the process of data extraction, transform, and loading. 
Common dirty data may have field types, lengths, and numbers that do not match. Data serialization, deserialization exception, target library, the table does not exist, etc.
Dirty data archives can dump the dirty data during InLong data flow operation to third-party storage, which is convenient for businesses to find problems. 
Sort currently supports dirty data archiving for S3 and Log targets, as well as dirty data archiving for common data sources such as Kafka, Doris, Iceberg, HBase, Hive, Elasticsearch, and JDBC.

## Supported Nodes

| Type          | Name                                        | Archive Target System |
|--------------|--------------------------------------------|-----------|
| Extract Node  | Kafka                                      | Log, S3   |
| Load Node     | Hive                                       | Log, S3   |
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

## Dirty Data Format

During the processing of dirty data archive, we define the following system variables for formatting dirty data:
* SYSTEM_TIME: System time, the format is 'yyyy-MM-dd HH:mm:ss'
* DIRTY_TYPE：Dirty type, common dirty types are SerializeError, DeserializeError, DataTypeMappingError, etc
* DIRTY_MESSAGE: Dirty data message, that is the cause of dirty data, abnormal information, etc

The format for archiving to Log：
* [${dirty.side-output.log-tag}] ${value}, Among them, ${value} is the merged value of ${dirty.side-output.labels} and ${dirty data}, and formatted by 'csv' or 'json'

The format for archiving to S3：
* The filename generation format of S3: ${dirty.side-output.s3.key}/${dirty.identifier}-${randome-sequence}.${suffix}
* The format of the data in the file of S3: it merge the ${dirty.side-output.labels} and ${dirty data} and formatted by 'csv' or 'json'

**Notes**：For ${dirty.side-output.log-tag}, ${dirty.side-output.labels}, ${dirty.identifier}, ${dirty.side-output.s3.key} see the configuration details below.

## Configuration

### Common Configuration

| Option | Required | Default | Type | Description |
|---------|----------|---------|------|------------|
| dirty.ignore | optional | false | Boolean | Whether to ignore dirty data, the default is 'false' |
| dirty.side-output.enable | optional | false | Boolean | Whether to support dirty data archive, the default is 'false'|
| dirty.side-output.connector | required | (none) | String | The connector of dirty data archive, it must be set when 'dirty.side-output.enable' is 'true', currently only 'log' and 's3' are supported. |
| dirty.side-output.format | optional | csv | String | The format of dirty data archive, currently only supports 'csv' and 'json', defaults is 'csv'. |
| dirty.side-output.log.enable | optional | true | Boolean |Whether to support log printing when dirty data is archived, the default is 'true'. |
| dirty.side-output.ignore-errors | optional | true | Boolean | Whether to ignore errors in dirty data archives, defaults is 'true'. |
| dirty.identifier | required | (none) | String | The identifier of dirty data, it will be used for filename generation of file dirty archive, topic generation of mq dirty archive, tablename generation of database, etc, and it supports variable replace like '${variable}'. There are several system variables(SYSTEM_TIME,DIRTY_TYPE,DIRTY_MESSAGE) are currently supported,  and the support of other variables is determined by the connector. |
| dirty.side-output.log-tag | optional | (none) | String | The log tag of dirty data, it will be used for log printing, and it supports variable replace like '${variable}'. There are several system variables(SYSTEM_TIME,DIRTY_TYPE,DIRTY_MESSAGE) are currently supported,  and the support of other variables is determined by the connector. |
| dirty.side-output.labels | optional | (none) | String |  The labels of dirty data, it will be used for log printing and will be archived with dirty data, and it supports variable replace like '${variable}'. There are several system variables(SYSTEM_TIME,DIRTY_TYPE,DIRTY_MESSAGE) are currently supported,  and the support of other variables is determined by the connector. |
| dirty.side-output.field-delimiter | optional | , | String | The column separator of dirty data archive, it is used for 'csv' format, the default is ','. |
| dirty.side-output.line-delimiter | optional | \n | String | The row separator of dirty data archive, it is used for 'csv' and 'json' format, the default is '\n'. |
| dirty.side-output.batch.size | optional | 100 | Integer | The cache batch size of dirty data archive, the default is '100'.|
| dirty.side-output.batch.bytes | optional | 10240 | Integer | The cache batch byte of dirty data archive, the unit is byte and the default is '10240'(10KB).|
| dirty.side-output.retries | optional | 3 | Integer |  The retris of dirty data archive，the default is '3'.|
| dirty.side-output.batch.interval | optional | 60000 | Integer | The interval time of irty data archive, the unit is millisecond, the default is '60000'(60s).|

### S3 Archive Configuration

| Option | Required | Default | Type | Description |
|---------|----------|---------|------|------------|
| dirty.side-output.s3.endpoint | required | (none) | String | The endpoint of s3 archive |
| dirty.side-output.s3.region | required | (none) | String | The region of s3 archive|
| dirty.side-output.s3.bucket | required | (none) | String | The bucket of s3 archive|
| dirty.side-output.s3.key | required | (none) | String | The key of s3 archive|
| dirty.side-output.s3.access-key-id | optional | (none) | String | The access key id of s3 archive, it needs to be configured in the environment if this item is not configured. |
| dirty.side-output.s3.secret-key-id | optional | (none) | String | The secret key id of s3 archive, it needs to be configured in the environment if this item is not configured.  |

## Usage

One example about sync Kafka data to Kafka data and we will introduce usage of dirty data archive(it is similar to other nodes).

* The useage for archive to log
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
-- In this example, we deliberately input a piece of data in non-json format, such as: 1,zhangsan,18, then the following dirty data will be printed in the log according to the configuration：
[DirtyData] 2023-01-30 13:01:01 ValueDeserializeError,inlong,user,1,zhangsan,18
```

* The useage for archive to s3
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
-- In this example, we deliberately input a piece of data in non-json format, such as: 1,zhangsan,18, then the following dirty data will be written to s3 according to the configuration(the file path is: dirty/test/inlong-user-2023-01-01130101xxxx.txt, where xxxx is a 4-digit random sequence):
[DirtyData] 2023-01-30 13:01:01 ValueDeserializeError,inlong,user,1,zhangsan,18
```