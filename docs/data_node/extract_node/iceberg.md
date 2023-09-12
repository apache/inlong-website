---
title: Iceberg
sidebar_position: 14
---

import {siteVariables} from '../../version';

## Overview

[Apache Iceberg](https://iceberg.apache.org/) is a high-performance format for huge analytic tables.

## Version

| Extract Node            | Version                                                      |
|-------------------------|--------------------------------------------------------------|
| [Iceberg](./iceberg.md) | [Iceberg](https://iceberg.apache.org/): 0.12.x, 0.13.x <br/> |

## Dependencies

<pre><code parentName="pre">
{`<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-iceberg</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
`}
</code></pre>

## Usage

Before creating the Iceberg task, we need a Flink environment integrated with Hadoop

1. Download `Hadoop` on the host.
2. Modify `jobmanager.sh` and `taskmanager.sh` in the host and add `Hadoop` environment variables.
   For commands, please refer
   to [Apache Flink](https://github.com/apache/flink/tree/master/flink-dist/src/main/flink-bin/bin).

```shell
export HADOOP_CLASSPATH=`$HADOOP_HOME/bin/hadoop classpath`
```

3. Modify `docker-compose.yml` in the `docker/docker-compose` and mount `Hadoop` and `Flink startup commands` into the
   container

```shell
# flink jobmanager
  jobmanager:
    image: apache/flink:1.13-scala_2.11
    container_name: jobmanager
    user: root
    environment:
      - |
        FLINK_PROPERTIES=
        jobmanager.rpc.address: jobmanager
    volumes:
      - HADOOP_HOME:HADOOP_HOME
      - /jobmanager.sh:/opt/flink/bin/jobmanager.sh
    ports:
      - "8081:8081"
    command: jobmanager

  # flink taskmanager
  taskmanager:
    image: apache/flink:1.13-scala_2.11
    container_name: taskmanager
    environment:
      - |
        FLINK_PROPERTIES=
        jobmanager.rpc.address: jobmanager
        taskmanager.numberOfTaskSlots: 2
    volumes:
      - HADOOP_HOME:HADOOP_HOME
      - /taskmanager.sh:/opt/flink/bin/taskmanager.sh
    command: taskmanager
```

### Usage for SQL API

Before using `Flink sql client`, `sql-client.sh` also needs to add Hadoop environment variables and mounted to the
container.
For commands, please refer
to [Apache Flink](https://github.com/apache/flink/blob/master/flink-table/flink-sql-client/bin/sql-client.sh).

```shell
export HADOOP_CLASSPATH=`$HADOOP_HOME/bin/hadoop classpath`
```

使用 `Flink sql cli`：

```
CREATE TABLE `iceberg_table_source`(
    PRIMARY KEY (`_id`) NOT ENFORCED,
    `_id` STRING,
    `id` INT,
    `name` STRING,
    `age` INT)
    WITH (
    'metrics.audit.key' = '13&14',
    'connector' = 'iceberg-inlong',
    'catalog-database' = 'DATABASES',
    'catalog-table' = 'TABLE',
    'catalog-type' = 'HIVE',
    'catalog-name' = 'HIVE',
    'streaming' = 'true',
    'uri' = 'thrift://127.0.0.1:9083'
);
```

### Usage for InLong Dashboard

Source → Create → Iceberg

![img.png](img/iceberg-source.png)

### Usage for InLong Manager Client

TODO

## Iceberg Extract Node Options

| Options              | Required | Type   | Description                                                                                                                                       |
|----------------------|----------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| connector            | required | String | Specify what connector to use, here should be 'iceberg-inlong'                                                                                    |
| catalog-database     | required | String | Database name managed in the Iceberg directory                                                                                                    |
| catalog-table        | required | String | Table name managed in Iceberg catalogs and databases                                                                                              |
| catalog-type         | required | String | `hive` or `hadoop` for built-in directories                                                                                                       |
| catalog-name         | required | String | directory name                                                                                                                                    |
| uri                  | required | String | The thrift URI of Hive metastore, such as: `thrift://127.0.0.1:9083`                                                                              |
| warehouse            | optional | String | For a Hive directory, the Hive repository location. For the hadoop directory, it is the HDFS directory that stores metadata files and data files. |
| inlong.metric.labels | optional | String | In long metric label, the format of value is groupId=xxgroup&streamId=xxstream&nodeId=xxnode                                                      |

## Data Type Mapping

| Flink SQL Type | Iceberg Type |
|----------------|--------------|
| CHAR           | STRING       |
| VARCHAR        | STRING       |
| STRING         | STRING       |
| BOOLEAN        | BOOLEAN      |
| BINARY         | FIXED(L)     |
| VARBINARY      | BINARY       |
| DECIMAL        | DECIMAL(P,S) |
| TINYINT        | INT          |
| SMALLINT       | INT          |
| INTEGER        | INT          |
| BIGINT         | LONG         |
| FLOAT          | FLOAT        |
| DOUBLE         | DOUBLE       |
| DATE           | DATE         |
| TIME           | TIME         |
| TIMESTAMP      | TIMESTAMP    |
| TIMESTAMP_LTZ  | TIMESTAMPTZ  |
| INTERVAL       | -            |
| ARRAY          | LIST         |
| MULTISET       | MAP          |
| MAP            | MAP          |
| ROW            | STRUCT       |
| RAW            | -            |