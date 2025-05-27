---
title: Hudi
sidebar_position: 12
---

import {siteVariables} from '../../version';

## 概览

[Apache Hudi](https://hudi.apache.org/cn/docs/overview/) (发音为"hoodie")是下一代流式数据湖平台。
Apache Hudi 将核心仓库和数据库功能直接带到数据湖中。
Hudi 提供表、事务、高效的 upserts/delete、高级索引、流摄入服务、数据聚类/压缩优化和并发，同时保持数据的开源文件格式。

## 支持的版本

| Load Node         | Version                                                          |
| ----------------- | ---------------------------------------------------------------- |
| [Hudi](./hudi.md) | [Hudi](https://hudi.apache.org/cn/docs/quick-start-guide): 0.12+ |

### 依赖

通过 `Maven` 引入 `sort-connector-hudi` 构建自己的项目。
当然，你也可以直接使用 `INLONG` 提供的 `jar` 包。([sort-connector-hudi](https://inlong.apache.org/download))

### Maven 依赖

```xml
<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-hudi</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
```

## 如何配置 Hudi 数据抽取节点

### SQL API 的使用

使用 `Flink SQL Cli` :

```sql
CREATE TABLE `hudi_table_name` (
  id STRING,
  name STRING,
  uv BIGINT,
  pv BIGINT
) WITH (
    'connector' = 'hudi-inlong',
    'path' = 'hdfs://127.0.0.1:90001/data/warehouse/hudi_db_name.db/hudi_table_name',
    'uri' = 'thrift://127.0.0.1:8091',
    'hoodie.database.name' = 'hudi_db_name',
    'hoodie.table.name' = 'hudi_table_name',
    'read.streaming.check-interval'='1',
    'read.streaming.enabled'='true',
    'read.streaming.skip_compaction'='true',
    'read.start-commit'='20221220121000',
    --
    'hoodie.bucket.index.hash.field' = 'id',
    -- compaction
    'compaction.tasks' = '10',
    'compaction.async.enabled' = 'true',
    'compaction.schedule.enabled' = 'true',
    'compaction.max_memory' = '3096',
    'compaction.trigger.strategy' = 'num_or_time',
    'compaction.delta_commits' = '5',
    'compaction.max_memory' = '3096',
    --
    'hoodie.keep.min.commits' = '1440',
    'hoodie.keep.max.commits' = '2880',
    'clean.async.enabled' = 'true',
    --
    'write.operation' = 'upsert',
    'write.bucket_assign.tasks' = '60',
    'write.tasks' = '60',
    'write.log_block.size' = '128',
    --
    'index.type' = 'BUCKET',
    'metadata.enabled' = 'false',
    'hoodie.bucket.index.num.buckets' = '20',
    'table.type' = 'MERGE_ON_READ',
    'clean.retain_commits' = '30',
    'hoodie.cleaner.policy' = 'KEEP_LATEST_COMMITS'
);
```

### Dashboard 方式

#### 配置

在创建数据流时，选择数据落地为 `hudi` 然后点击 `Add` 来配置 `Hudi` 的相关信息。

![Hudi Configuration](img/hudi.png)

| 配置项            | 对应SQL DDL中的属性                                 | 备注                                                      |
| -------------- | --------------------------------------------- | ------------------------------------------------------- |
| `DB名称`         | `hoodie.database.name`                        | 库名称                                                     |
| `表名`           | `hudi_table_name`                             | hudi表名                                                  |
| `是否创建资源`       | -                                             | 如果库表已经存在，且无需修改，则选【不创建】；<br/>否则请选择【创建】，由系统自动创建资源。        |
| `Catalog URI`  | `uri`                                         | 元数据服务地址                                                 |
| `仓库路径`         | -                                             | hudi表存储在HDFS中的位置<br/>在SQL DDL中path属性是将`仓库路径`与库、表名称拼接在一起 |
| `跳过合并中的提交`         | `read.streaming.skip_compaction`     | 流读时是否跳过 compaction 的 commits，跳过 compaction 有两个用途：1）避免 upsert 语义 下重复消费(compaction 的 instant 为重复数据，如果不跳过，有小概率会重复消费）; 2) changelog 模式下保证语义正确性。 0.11 开始，以上两个问题已经通过保留 compaction 的 instant time 修复                                                   |
| `起始的commit`         | ``read.start-commit``     | 起始commit, 格式为`yyyyMMddHHmmss`  |

### InLong Manager Client 方式

:::note
将在未来支持此功能
:::

## Hudi 抽取节点参数信息

| 选项                                          | 必填  | 类型     | 描述                                                                                              |
| ------------------------------------------- | --- | ------ | ----------------------------------------------------------------------------------------------- |
| connector                                   | 必填  | String | 指定要使用的Connector，这里应该是`hudi-inlong`。                                                             |
| uri                                         | 可选  | String | 用于配置单元同步的 Metastore uris                                                                        |
| path                                         | 必填  | String |  用户保存hudi表的文件目录                                                                        |
| hoodie.database.name                        | 可选  | String | 将用于增量查询的数据库名称。如果不同数据库在增量查询时有相同的表名，我们可以设置它来限制特定数据库下的表名                                           |
| hoodie.table.name                           | 可选  | String | 将用于向 Hive 注册的表名。 需要在运行中保持一致。                                                                    |
| `read.start-commit`     | 可选  | String | 指定`yyyyMMddHHmmss`格式的起始commit(闭区间) |
| `read.streaming.skip_compaction`  | 可选  | String | 流读时是否跳过 compaction 的 commits(默认不跳过)，跳过 compaction 有两个用途：1）避免 upsert 语义 下重复消费(compaction 的 instant 为重复数据，如果不跳过，有小概率会重复消费）; 2) changelog 模式下保证语义正确性。 0.11 开始，以上两个问题已经通过保留 compaction 的 instant time 修复         |
| inlong.metric.labels                        | 可选  | String | 在long metric label中，value的格式为groupId=xxgroup&streamId=xxstream&nodeId=xxnode。                   |

## 数据类型映射

| Hive type     | Flink SQL type |
| ------------- | -------------- |
| char(p)       | CHAR(p)        |
| varchar(p)    | VARCHAR(p)     |
| string        | STRING         |
| boolean       | BOOLEAN        |
| tinyint       | TINYINT        |
| smallint      | SMALLINT       |
| int           | INT            |
| bigint        | BIGINT         |
| float         | FLOAT          |
| double        | DOUBLE         |
| decimal(p, s) | DECIMAL(p, s)  |
| date          | DATE           |
| timestamp(9)  | TIMESTAMP      |
| bytes         | BINARY         |
| array         | LIST           |
| map           | MAP            |
| row           | STRUCT         |
