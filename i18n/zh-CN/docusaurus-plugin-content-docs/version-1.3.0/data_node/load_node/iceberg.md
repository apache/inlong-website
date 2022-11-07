---
title: Iceberg
sidebar_position: 9
---

import {siteVariables} from '../../version';

## 概览

[Apache Iceberg](https://iceberg.apache.org/)是一种用于大型分析表的高性能格式。

## 版本

| 提取节点                | 版本                                                 |
| ----------------------- | ---------------------------------------------------- |
| [Iceberg](./iceberg.md) | [Iceberg](https://dev.mysql.com/doc)：0.12.x，0.13.x |

## 依赖项

<pre><code parentName="pre">
{`<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>sort-connector-iceberg</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
`}
</code></pre>

## 用法

### SQL API 用法

在 flink 中创建Iceberg表，我们推荐使用[Flink SQL Client](https://ci.apache.org/projects/flink/flink-docs-stable/dev/table/sqlClient.html)，因为它更便于用户理解概念。

Step.1 在hadoop环境下启动一个独立的flink集群。

```
# HADOOP_HOME is your hadoop root directory after unpack the binary package.
export HADOOP_CLASSPATH=`$HADOOP_HOME/bin/hadoop classpath`

# Start the flink standalone cluster
./bin/start-cluster.sh
```

Step.2 启动flink SQL客户端。

`flink-runtime`在 iceberg 项目中创建了一个单独的模块来生成一个捆绑的 jar，可以直接由 flink SQL 客户端加载。

如果想要`flink-runtime`手动构建捆绑的 jar，只需构建`inlong`项目，它将在`<inlong-root-dir>/inlong-sort/sort-connectors/iceberg/target`。

默认情况下，iceberg 包含用于 hadoop 目录的 hadoop jars。如果我们要使用 hive 目录，我们需要在打开 flink sql 客户端时加载 hive jars。幸运的是，apache inlong将 一个捆绑的hive jar打包进入Iceberg。所以我们可以如下打开sql客户端：

```
# HADOOP_HOME is your hadoop root directory after unpack the binary package.
export HADOOP_CLASSPATH=`$HADOOP_HOME/bin/hadoop classpath`

./bin/sql-client.sh embedded -j <flink-runtime-directory>/iceberg-flink-runtime-xxx.jar shell
```

Step.3 在当前 Flink 目录中创建表

默认情况下，我们不需要创建目录，只需使用内存目录即可。在目录中如果`catalog-database.catalog-table`不存在，会自动创建。这里我们只是加载数据。

**在 Hive 目录中管理的表**

下面的 SQL 会在当前 Flink 目录中创建一个 Flink 表，映射到 iceberg 目录中`default_database.iceberg_table`管理的 iceberg 表。由于目录类型默认是 hive，所以这里不需要放`catalog-type`.

```
CREATE TABLE flink_table (
    id   BIGINT,
    data STRING
) WITH (
    'connector'='iceberg',
    'catalog-name'='hive_prod',
    'uri'='thrift://localhost:9083',
    'warehouse'='hdfs://nn:8020/path/to/warehouse'
);
```

如果要创建 Flink 表映射到 Hive 目录中管理的不同Iceberg表（例如`hive_db.hive_iceberg_table`在 Hive 中），则可以创建 Flink 表，如下所示：

```
CREATE TABLE flink_table (
    id   BIGINT,
    data STRING
) WITH (
    'connector'='iceberg',
    'catalog-name'='hive_prod',
    'catalog-database'='hive_db',
    'catalog-table'='hive_iceberg_table',
    'uri'='thrift://localhost:9083',
    'warehouse'='hdfs://nn:8020/path/to/warehouse'
);
```

> 将记录写入 Flink 表时，如果底层目录数据库（`hive_db`上例中）不存在，则会自动创建它。

**在 hadoop 目录中管理的表**

以下 SQL 将在当前 Flink 目录中创建一个 Flink 表，该表映射到`default_database.flink_table`hadoop 目录中管理Iceberg表。

```
CREATE TABLE flink_table (
    id   BIGINT,
    data STRING
) WITH (
    'connector'='iceberg',
    'catalog-name'='hadoop_prod',
    'catalog-type'='hadoop',
    'warehouse'='hdfs://nn:8020/path/to/warehouse'
);
```

Step.6 向Iceberg表中插入数据

```
INSERT INTO `flink_table` 
    SELECT 
    `id` AS `id`,
    `d` AS `name`
    FROM `source_table`
```

**在自定义Catalog中管理的表**

以下 SQL 将在当前 Flink 目录中创建一个 Flink 表，该表映射到`default_database.flink_table`自定义目录中管理的Iceberg表。

```
CREATE TABLE flink_table (
    id   BIGINT,
    data STRING
) WITH (
    'connector'='iceberg',
    'catalog-name'='custom_prod',
    'catalog-type'='custom',
    'catalog-impl'='com.my.custom.CatalogImpl',
     -- More table properties for the customized catalog
    'my-additional-catalog-config'='my-value',
     ...
);
```

请检查“集成”选项卡下的部分以获取所有自定义目录。

### InLong Dashboard 用法
TODO

### InLong Manager Client 用法
TODO

## Iceberg Load 节点参数

| 选项             | 是否必须                         | 默认值 | 类型    | 描述                                                         |
| ---------------- | -------------------------------- | ------ | ------- | ------------------------------------------------------------ |
| connector        | 必需                             | (none) | String  | 指定要使用的连接器，这里应该是`'iceberg'`                    |
| catalog-type     | 必需                             | hive   | String  | `hive`或`hadoop`用于内置目录，或为使用 catalog-impl 的自定义目录实现未设置 |
| catalog-name     | 必需                             | (none) | String  | 目录名称                                                     |
| catalog-database | 必需                             | (none) | String  | 在Iceberg目录中管理的数据库名称                              |
| catalog-table    | 必需                             | (none) | String  | 在底层Iceberg目录和数据库中管理的表名                        |
| catalog-impl     | 自定义custom 可选                | (none) | String  | 如果未设置，则必须设置完全限定的类名自定义目录实现`catalog-type` |
| cache-enabled    | 可选                             | true   | Boolean | 是否启用目录缓存，默认值为`true`                             |
| uri              | hive catalog可选                 | (none) | String  | Hive 元存储的 thrift URI                                     |
| clients          | hive catalog可选                 | 2      | Integer | Hive Metastore 客户端池大小，默认值为 2                      |
| warehouse        | hive catalog或hadoop catalog可选 | (none) | String  | 对于 Hive 目录，是 Hive 仓库位置，如果既不设置`hive-conf-dir`指定包含`hive-site.xml`配置文件的位置也不添加正确`hive-site.xml`的类路径，用户应指定此路径。对于hadoop目录，HDFS目录存放元数据文件和数据文件 |
| hive-conf-dir    | hive catalog可选                 | (none) | String  | `hive-site.xml`包含将用于提供自定义 Hive 配置值的配置文件的目录的路径。如果同时设置和创建Iceberg目录时，`hive.metastore.warehouse.dir`from `<hive-conf-dir>/hive-site.xml`（或来自类路径的 hive 配置文件）的值将被该值覆盖。`warehouse``hive-conf-dir``warehouse` |
| inlong.metric.labels | 可选 | (none) | String | inlong metric 的标签值，该值的构成为groupId=xxgroup&streamId=xxstream&nodeId=xxnode。|

## 数据类型映射

[Iceberg数据类型](https://iceberg.apache.org/spec/#schemas-and-data-types)详细信息。这里介绍了加载数据如何将 Iceberg 类型转换为 Flink 类型。

| Flink SQL 类型 | Iceberg 类型 |
| -------------- | ------------ |
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
