---
title: Iceberg
sidebar_position: 9
---

import {siteVariables} from '../../version';

## Overview
[Apache Iceberg](https://iceberg.apache.org/) is a high-performance format for huge analytic tables.

## Version

| Extract Node            | Version                                                    |
| ----------------------- | ---------------------------------------------------------- |
| [Iceberg](./iceberg.md) | [Iceberg](https://dev.mysql.com/doc): 0.12.x, 0.13.x <br/> |

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

### Usage for SQL API

To create iceberg table in flink, we recommend to use [Flink SQL Client](https://ci.apache.org/projects/flink/flink-docs-stable/dev/table/sqlClient.html) because it’s easier for users to understand the concepts.

Step.1 Start a standalone flink cluster within hadoop environment.

```bash
# HADOOP_HOME is your hadoop root directory after unpack the binary package.
export HADOOP_CLASSPATH=`$HADOOP_HOME/bin/hadoop classpath`

# Start the flink standalone cluster
./bin/start-cluster.sh
```

Step.2 Start the Flink SQL client.

We’ve created a separate `flink-runtime` module in iceberg project to generate a bundled jar, which could be loaded by flink SQL client directly.

If we want to build the `flink-runtime` bundled jar manually, please just build the `inlong` project and it will generate the jar under `<inlong-root-dir>/inlong-sort/sort-connectors/iceberg/target`.

By default, iceberg has included hadoop jars for hadoop catalog. If we want to use hive catalog, we will need to load the hive jars when opening the flink sql client. Fortunately, inlong auto package a bundled hive jar into iceberg. So we could open the sql client as the following:

```bash
# HADOOP_HOME is your hadoop root directory after unpack the binary package.
export HADOOP_CLASSPATH=`$HADOOP_HOME/bin/hadoop classpath`

./bin/sql-client.sh embedded -j <flink-runtime-directory>/sort-connector-iceberg-{inlong-version}.jar
```

Step.3 create a table in current Flink catalog

By default，we do not need to create a catalog ,just use memory catalog. In catalog if `catalog-database.catalog-table` doesn't exist, it will be created automatic.Here we just load data into it.

**Table managed in Hive catalog**

The following SQL will create a Flink table in the current Flink catalog, which maps to the iceberg table `default_database.iceberg_table` managed in iceberg catalog.Because catalog type default is hive,so here do not need to put `catalog-type`.

```sql
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

If you want to create a Flink table mapping to a different iceberg table managed in Hive catalog (such as `hive_db.hive_iceberg_table` in Hive), then you can create Flink table as following:

```sql
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

> The underlying catalog database (`hive_db` in the above example) will be created automatically if it does not exist when writing records into the Flink table.

**Table managed in hadoop catalog**

The following SQL will create a Flink table in current Flink catalog, which maps to the iceberg table `default_database.flink_table` managed in hadoop catalog.

```sql
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

**Table managed in custom catalog**

The following SQL will create a Flink table in current Flink catalog, which maps to the iceberg table `default_database.flink_table` managed in custom catalog.

```sql
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

Please check sections under the Integrations tab for all custom catalogs.

Step.4 insert data into iceberg table 

```sql
INSERT INTO `flink_table` 
    SELECT 
    `id` AS `id`,
    `d` AS `name`
    FROM `source_table`
```

### Usage for InLong Dashboard
TODO

### Usage for InLong Manager Client
TODO

## Iceberg Load Node Options

| Option           | Required                                    | Default | Type    | Description                                                  |
| ---------------- | ------------------------------------------- | ------- | ------- | ------------------------------------------------------------ |
| connector        | required                                    | (none)  | String  | Specify what connector to use, here should be `'iceberg'`.   |
| catalog-type     | required                                    | hive    | String  | `hive` or `hadoop` for built-in catalogs, or left unset for custom catalog implementations using catalog-impl. |
| catalog-name     | required                                    | (none)  | String  | Catalog name.                                                |
| catalog-database | required                                    | (none)  | String  | Database name managed in the iceberg catalog.                |
| catalog-table    | required                                    | (none)  | String  | Table name managed in the underlying iceberg catalog and database. |
| catalog-impl     | optional for custom catalog                 | (none)  | String  | The fully-qualified class name custom catalog implementation, must be set if `catalog-type` is unset. |
| cache-enabled    | optional                                    | true    | Boolean | Whether to enable catalog cache, default value is `true`     |
| uri              | required for hive catalog                   | (none)  | String  | The Hive metastore’s thrift URI.                             |
| clients          | optional for hive catalog                   | 2       | Integer | The Hive metastore client pool size, default value is 2.     |
| warehouse        | optional for hadoop catalog or hive catalog | (none)  | String  | For Hive catalog，is the Hive warehouse location, users should specify this path if neither set the `hive-conf-dir` to specify a location containing a `hive-site.xml` configuration file nor add a correct `hive-site.xml` to classpath. For hadoop catalog，The HDFS directory to store metadata files and data files. |
| hive-conf-dir    | optional for hive catalog                   | (none)  | String  | Path to a directory containing a `hive-site.xml` configuration file which will be used to provide custom Hive configuration values. The value of `hive.metastore.warehouse.dir` from `<hive-conf-dir>/hive-site.xml` (or hive configure file from classpath) will be overwrote with the `warehouse` value if setting both `hive-conf-dir` and `warehouse` when creating iceberg catalog. |
| inlong.metric | optional | (none) | String | Inlong metric label, format of value is groupId&streamId&nodeId. |

## Data Type Mapping

[Iceberg data type](https://iceberg.apache.org/spec/#schemas-and-data-types) detail. Here is iceberg type convert to flink type when load data.

| Flink SQL Type | Iceberg Type |
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
