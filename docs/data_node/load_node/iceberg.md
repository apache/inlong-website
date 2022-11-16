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

## Feature
### Multiple table sink
Currently Iceberg support multiple table sinking, it require FLINK SQL create table parameters add  
`'sink.multiple.enable' = 'true'` and target table schema can only be defined as `BYTES` or `STRING`
Examples as follows:
```
CREATE TABLE `table_2`(
    `data` STRING)
WITH (
    'connector'='iceberg-inlong',
    'catalog-name'='hive_prod',
    'uri'='thrift://localhost:9083',
    'warehouse'='hdfs://localhost:8020/hive/warehouse',
    'sink.multiple.enable' = 'true',
    'sink.multiple.format' = 'canal-json',
    'sink.multiple.add-column.policy' = 'TRY_IT_BEST',
    'sink.multiple.database-pattern' = '${database}',
    'sink.multiple.table-pattern' = 'test_${table}'
);
```
To support multiple sink, it is necessary to set the serialization format of upstream data
(Via option 'sink.multiple.format' to set, currently only supports [canal-json|debezium-json]).

### dynamic dababase/table Extraction
Iceberg can customize mapping rules for database names and table names, it can fill in placeholders and add prefixes 
and suffixes to modify the mapped target table name. Iceberg Load Node will extract `'sink.multiple.database-pattern'` 
as target database name, extract `'sink.multiple.table-pattern'` as target table name,
The placeholder is parsed from the data, the variable is strictly represented by '${VARIABLE_NAME}', 
the value of the variable comes from the data itself, it can be a metadata field of a Format specified by 
`'sink.multiple.format'`, or it can be a physical field in the data.
Examples of 'topic-parttern' are as follows:
- 'sink.multiple.format' is 'canal-json':

The upstream data is:
```
{
  "data": [
    {
      "id": "111",
      "name": "scooter",
      "description": "Big 2-wheel scooter",
      "weight": "5.18"
    }
  ],
  "database": "inventory",
  "es": 1589373560000,
  "id": 9,
  "isDdl": false,
  "mysqlType": {
    "id": "INTEGER",
    "name": "VARCHAR(255)",
    "description": "VARCHAR(512)",
    "weight": "FLOAT"
  },
  "old": [
    {
      "weight": "5.15"
    }
  ],
  "pkNames": [
    "id"
  ],
  "sql": "",
  "sqlType": {
    "id": 4,
    "name": 12,
    "description": 12,
    "weight": 7
  },
  "table": "products",
  "ts": 1589373560798,
  "type": "UPDATE"
} 
```
'topic-pattern' is '{database}_${table}', and the extracted topic is 'inventory_products'
('source.db', 'source.table' are metadata fields, and 'id' are physical fields)

'topic-pattern' is '{database}_${table}_${id}', and the extracted topic is 'inventory_products_111' 
('source.db', 'source.table' are metadata fields, and 'id' are physical fields)


### Auto create database/table
Iceberg can auto create database and auto create table in multiple sink scenes if database and table not exists, and it supports capture new table at runtime。
default Iceberg table parameters: `'format-version' = '2'`、`'write.upsert.enabled' = 'true''`、`'engine.hive.enabled' = 'true'`

### Dynamic schema evolution
Iceberg support schema evolution from source table to target table in multiple sink scenes(DDL synchronize), supported schema evolution：

| schema evolution type  |   supported  |
| -------------- | ----------- |
| Column add          |   true       |
| Column delete       |   false       |
| Column reorder      |    false      |
| Column rename        |   false       |
| Column type update      |   false       |


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
| inlong.metric.labels | optional | (none) | String | Inlong metric label, format of value is groupId=xxgroup&streamId=xxstream&nodeId=xxnode. |
| sink.multiple.enable | optional                         | false  | Boolean | Whether to enable multiple sink            |
| sink.multiple.schema-update.policy | optional           | TRY_IT_BEST | Enum | The policy to handle the inconsistency between the schema in the data and the schema of the target table <br/>TRY_IT_BEST: try best, deal with as much as possible, ignore it if can't handled.<br/>  IGNORE_WITH_LOG:ignore it and log it,ignore this table later.<br/> THROW_WITH_STOP:throw exception and stop the job, until user deal with schema conflict and job restore.
| sink.multiple.pk-auto-generated | optional              | false  | Boolean  | Whether auto generate primary key, regard all field combined as primary key in multiple sink scenes. |
| sink.multiple.typemap-compatible-with-spark | optional  | false  | Boolean  | Whether to adapt spark type system in auto generate table. |

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
