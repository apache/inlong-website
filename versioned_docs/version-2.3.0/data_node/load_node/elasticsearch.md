---
title: Elasticsearch
sidebar_position: 4
---

import {siteVariables} from '../../version';

## Overview

The Elasticsearch Load Node allows for writing into an index of the Elasticsearch engine. This document describes how to setup the Elasticsearch Load Node to run SQL queries against Elasticsearch.

The Load Node can operate in upsert mode for exchanging UPDATE/DELETE messages with the external system using the primary key defined on the DDL.

If no primary key is defined on the DDL, the Load Node can only operate in append mode for exchanging INSERT only messages with external system.

## Supported Version

| Load Node                           | Version                                            | 
|-------------------------------------|----------------------------------------------------|
| [elasticsearch](./elasticsearch.md) | [Elasticsearch](https://www.elastic.co/): 5.x, 6.x, 7.x |

### Dependencies

In order to use the Elasticsearch Load Node the following dependencies are required for both projects using a build automation tool (such as Maven or SBT) and SQL Client with Sort Connectors JAR bundles.

- Elasticsearch 6

```xml
<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-elasticsearch6</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
```

- Elasticsearch 7

```xml
<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-elasticsearch7</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
```

## How to create an Elasticsearch Load Node

### Usage for SQL API

The example below shows how to create an Elasticsearch Load Node with `Flink SQL` :

```sql
CREATE TABLE myUserTable (
  user_id STRING,
  user_name STRING,
  uv BIGINT,
  pv BIGINT,
  PRIMARY KEY (user_id) NOT ENFORCED
) WITH (
  'connector' = 'elasticsearch-7-inlong',
  'hosts' = 'http://localhost:9200',
  'index' = 'users'
);
```

### Usage for InLong Dashboard

TODO: It will be supported in the future.

### Usage for InLong Manager Client

TODO: It will be supported in the future.

## Elasticsearch Load Node Options

| Option | Required | Default | Type | Description |
| --- | --- | --- | --- | --- |
|  connector | required | (none) | String | Specify what connector to use, valid values are:<br/><br/>- `elasticsearch-6-inlong`: connect to Elasticsearch 5.x and 6.x cluster.<br/>- `elasticsearch-7-inlong`: connect to Elasticsearch 7.x and later versions cluster. |
|  hosts | required | (none) | String | One or more Elasticsearch hosts to connect to, e.g. `'http://host_name:9092;http://host_name:9093'`. |
|  index | required | (none) | String | Elasticsearch index for every record. Can be a static index (e.g. `'myIndex'`) or a dynamic index (e.g. `'index-\{log_ts\|yyyy-MM-dd}'`). See the following [Dynamic Index](#dynamic-index) section for more details. |
|  document-type | required in 5.x and 6.x | (none) | String | Elasticsearch document type. Not necessary anymore in `elasticsearch-7`. |
|  document-id.key-delimiter | optional | _   | String | Delimiter for composite keys ("_" by default), e.g., "$" would result in IDs "KEY1\$KEY2\$KEY3". |
|  username | optional | (none) | String | Username used to connect to Elasticsearch instance. Please notice that Elasticsearch doesn't pre-bundled security feature, but you can enable it by following the [guideline](https://www.elastic.co/guide/en/elasticsearch/reference/master/configuring-security.html) to secure an Elasticsearch cluster. |
|  password | optional | (none) | String | Password used to connect to Elasticsearch instance. If `username` is configured, this option must be configured with non-empty string as well. |
|  failure-handler | optional | fail | String | Failure handling strategy in case a request to Elasticsearch fails. Valid strategies are:<br/><br/>- `fail`: throws an exception if a request fails and thus causes a job failure.<br/>- `ignore`: ignores failures and drops the request.<br/>- `retry-rejected`: re-adds requests that have failed due to queue capacity saturation.<br/>- custom class name: for failure handling with a ActionRequestFailureHandler subclass. |
|  sink.flush-on-checkpoint | optional | true | Boolean | Flush on checkpoint or not. When disabled, a sink will not wait for all pending action requests to be acknowledged by Elasticsearch on checkpoints. Thus, a sink does NOT provide any strong guarantees for at-least-once delivery of action requests. |
|  sink.bulk-flush.max-actions | optional | 1000 | Integer | Maximum number of buffered actions per bulk request. Can be set to `'0'` to disable it. |
|  sink.bulk-flush.max-size | optional | 2mb | MemorySize | Maximum size in memory of buffered actions per bulk request. Must be in MB granularity. Can be set to `'0'` to disable it. |
  sink.bulk-flush.interval | optional | 1s  | Duration | The interval to flush buffered actions. Can be set to `'0'` to disable it. Note, both `'sink.bulk-flush.max-size'` and `'sink.bulk-flush.max-actions'`can be set to `'0'` with the flush interval set allowing for complete async processing of buffered actions. |
|  sink.bulk-flush.backoff.strategy | optional | DISABLED | String | Specify how to perform retries if any flush actions failed due to a temporary request error. Valid strategies are:<br/><br/>- `DISABLED`: no retry performed, i.e. fail after the first request error.<br/>- `CONSTANT`: wait for backoff delay between retries.<br/>- `EXPONENTIAL`: initially wait for backoff delay and increase exponentially between retries. |
|  sink.bulk-flush.backoff.max-retries | optional | 8   | Integer | Maximum number of backoff retries. |
|  sink.bulk-flush.backoff.delay | optional | 50ms | Duration | Delay between each backoff attempt. For `CONSTANT` backoff, this is simply the delay between each retry. For `EXPONENTIAL` backoff, this is the initial base delay. |
|  connection.max-retry-timeout | optional | (none) | Duration | Maximum timeout between retries. |
|  connection.path-prefix | optional | (none) | String | Prefix string to be added to every REST communication, e.g., `'/v1'`. |
|  routing.filed-name | optional | (none) | String | Using field value in the record to dynamically generate routing filed. |
|  format | optional | json | String | Elasticsearch connector supports to specify a format. The format must produce a valid json document. By default uses built-in `'json'` format. Please refer to [JSON Format](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/formats/overview/) page for more details. |
| inlong.metric.labels | optional | (none) | String | Inlong metric label, format of value is groupId=[groupId]&streamId=[streamId]&nodeId=[nodeId]. |

Features
----------------

### Key Handling

Elasticsearch sink can work in either upsert mode or append mode, it depends on whether primary key is defined.
If primary key is defined, Elasticsearch sink works in upsert mode which can consume queries containing UPDATE/DELETE messages.
If primary key is not defined, Elasticsearch sink works in append mode which can only consume queries containing INSERT only messages.

In Elasticsearch connector, the primary key is used to calculate the Elasticsearch document id, which is a string of up to 512 bytes. It cannot have whitespaces.
The Elasticsearch connector generates a document ID string for every row by concatenating all primary key fields in the order defined in the DDL using a key delimiter specified by `document-id.key-delimiter`.
Certain types are not allowed as primary key field as they do not have a good string representation, e.g. `BYTES`, `ROW`, `ARRAY`, `MAP`, etc.
If no primary key is specified, Elasticsearch will generate a document id automatically.

See [CREATE TABLE DDL](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/dev/table/sql/create/#create-table) for more details about PRIMARY KEY syntax.

### Dynamic Index

<a name = "dynamic-index"></a>

Elasticsearch Load Node supports both static index and dynamic index.

If you want to have a static index, the `index` option value should be a plain string, e.g. `'myusers'`, all the records will be consistently written into `myusers` index.

If you want to have a dynamic index, you can use `{field_name}` to reference a field value in the record to dynamically generate a target index.
You can also use `'{field_name|date_format_string}'` to convert a field value of `TIMESTAMP/DATE/TIME` type into the format specified by the `date_format_string`.
The `date_format_string` is compatible with Java's [DateTimeFormatter](https://docs.oracle.com/javase/8/docs/api/index.html).
For example, if the option value is `'myusers-{'{log_ts|yyyy-MM-dd}'}'`, then a record with `log_ts` field value `2020-03-27 12:25:55` will be written into `myusers-2020-03-27` index.

## Data Type Mapping

| JSON type | Flink SQL type |
| --- | --- |
| string | CHAR / VARCHAR / STRING |
| boolean | BOOLEAN |
| string with encoding: base64 | BINARY / VARBINARY |
| number | DECIMAL |
| number | TINYINT |
| number | SMALLINT |
| number | INT |
| number | BIGINT |
| number | FLOAT |
| number | DOUBLE |
| string with format: date | DATE |
| string with format: time | TIME |
| string with format: date-time | TIMESTAMP |
| string with format: date-time (with UTC time zone) | TIMESTAMP_WITH_LOCAL_TIME_ZONE |
| number | INTERVAL |
| array | ARRAY |
| object | MAP / MULTISET |
| object | ROW |