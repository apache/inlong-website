---
title: Iceberg
sidebar_position: 14
---

import {siteVariables} from '../../version';

## 概览

[Apache Iceberg](https://iceberg.apache.org/) 是一种用于大型分析表的高性能格式。

## 版本

| 提取节点                    | 版本                                                   |
|-------------------------|------------------------------------------------------|
| [Iceberg](./iceberg.md) | [Iceberg](https://iceberg.apache.org/)：0.12.x，0.13.x |

## 依赖项

```xml
<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-iceberg</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
```

## 配置 Iceberg 数据抽取节点

- 下载 [`Apache Hadoop`](https://hadoop.apache.org/releases.html)
- 修改 `jobmanager.sh` 和 `taskmanager.sh`，加入 `Hadoop` 环境变量。启动命令可以参考 [Apache Flink](https://github.com/apache/flink/tree/master/flink-dist/src/main/flink-bin/bin)

```shell
export HADOOP_CLASSPATH=`$HADOOP_HOME/bin/hadoop classpath`
```

- 修改 `docker/docker-compose` 目录下的 `docker-compose.yml`，将 `Hadoop` 和 `Flink 启动命令` 挂载至容器中:

```docker
  jobmanager:
    image: apache/flink:1.13-scala_2.11
    container_name: jobmanager
    user: root
    environment:
      - |
        FLINK_PROPERTIES=
        jobmanager.rpc.address: jobmanager
    volumes:
      # Mount Hadoop
      - HADOOP_HOME:HADOOP_HOME
      # Mount the modified jobmanager.sh which adds the HADOOP_HOME env correctly
      - /jobmanager.sh:/opt/flink/bin/jobmanager.sh
    ports:
      - "8081:8081"
    command: jobmanager

  taskmanager:
    image: apache/flink:1.13-scala_2.11
    container_name: taskmanager
    environment:
      - |
        FLINK_PROPERTIES=
        jobmanager.rpc.address: jobmanager
        taskmanager.numberOfTaskSlots: 2
    volumes:
      # Mount Hadoop
      - HADOOP_HOME:HADOOP_HOME
      # Mount the modified taskmanager.sh which adds the HADOOP_HOME env correctly
      - /taskmanager.sh:/opt/flink/bin/taskmanager.sh
    command: taskmanager
```

### Flink SQL API

使用 Flink sql client 之前，`sql-client.sh` 启动命令也需要添加 Hadoop 环境变量，并挂载至容器。
启动命令可以参考 [Apache Flink](https://github.com/apache/flink/blob/master/flink-table/flink-sql-client/bin/sql-client.sh)

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
    'connector' = 'iceberg-inlong',
    'catalog-database' = 'DATABASES',
    'catalog-table' = 'TABLE',
    'catalog-type' = 'HIVE',
    'catalog-name' = 'HIVE',
    'streaming' = 'true',
    'uri' = 'thrift://127.0.0.1:9083'
);
```

### Dashboard 

页面点击 数据源 → 新建 → Iceberg

![img.png](img/iceberg-source.png)

### Manager Client

:::note
将在未来支持此功能
:::

## 参数信息

| 选项                   | 必填  | 类型     | 描述                                                                              |
|----------------------|-----|--------|---------------------------------------------------------------------------------|
| connector            | 必填  | String | 指定要使用的 Connector，这里应该是 `iceberg-inlong`                                          |
| catalog-database     | 必填  | String | 在 Iceberg 目录中管理的数据库名称                                                           |
| catalog-table        | 必填  | String | 在 Iceberg 目录和数据库中管理的表名                                                          |
| catalog-type         | 必填  | String | `hive` 或 `hadoop` 用于内置目录                                                        |
| catalog-name         | 必填  | String | 目录名称                                                                            |
| uri                  | 必填  | String | Hive 元存储的 thrift URI，如：`thrift://127.0.0.1:9083`                                |
| warehouse            | 可选  | String | 对于 Hive 目录，是 Hive 仓库位置。对于 hadoop 目录，是 HDFS 目录存放元数据文件和数据文件                       |
| inlong.metric.labels | 可选  | String | 在 long metric label 中，value 的格式为 groupId=xxgroup&streamId=xxstream&nodeId=xxnode |

## 数据类型映射

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