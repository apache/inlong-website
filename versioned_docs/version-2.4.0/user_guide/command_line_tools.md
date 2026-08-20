---
title: Command-line Tools
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

In addition to [InLong Dashboard](user_guide/dashboard_usage.md), you can view and create data resources through
command-line tools.

`inlongctl` can be run from InLong's `bin` directory.

usage:

```
$ bin/inlongctl [options] [command] [command options]
```

command:

- `list`
- `describe`
- `create`
- `update`
- `delete`
- `log`

> You can also use `--help` or `-h` to get help for the above commands, for example:

```
$ bin/inlongctl list -h
```

## Configuration

Go to the `inlong-manager` directory , modify the following configurations of the `conf/application.properties` file.

```
server.host=127.0.0.1
server.port=8080
default.admin.user=admin
default.admin.password=inlong
```

## List

`list` is used to display the core information of resources and display them in a table.

command:

- `group`
- `stream`
- `source`
- `sink`
- `cluster`
- `cluster-tag`
- `cluster-node`
- `user`

### `group`

```
$ bin/inlongctl list group
```

options:

| parameter        | description                                                                                                                                           | default |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| `-g`, `--group`  | inlong group id, support fuzzy query                                                                                                                  |         |
| `-s`, `--status` | inlong group status , Optional values: `CREATE`, `REJECTED`, `INITIALIZING`, `OPERATING`, <br/> `STARTED`, `FAILED`, `STOPPED`, `FINISHED`, `DELETED` |         |
| `-n`, `--num`    | maximum number of displays                                                                                                                            | 10      |

<details>
<summary>group status</summary>

| group status   | description                          |
|----------------|--------------------------------------|
| `CREATE`       | to be submit or to be approval       |
| `REJECTED`     | approval rejected                    |
| `INITIALIZING` | configuring                          |
| `OPERATING`    | deleting, stopping or restarting     |
| `STARTED`      | successful configuration and restart |
| `FAILED`       | failed to configure                  |
| `STOPPED`      | suspended                            |
| `FINISHED`     | finish                               |
| `DELETED`      | deleted                              |

</details>

### `stream`

```
$ bin/inlongctl list stream
```

options:

| parameter         | description     | default |
|-------------------|-----------------|---------|
| `-g`, `--group` * | inlong group id |         |

> \* means required parameter.

### `source`

```
$ bin/inlongctl list source
```

options:

| parameter          | description                                                                                                                                                                      | default |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| `-g`, `--group` *  | inlong group id                                                                                                                                                                  |         |
| `-s`, `--stream` * | inlong stream id                                                                                                                                                                 |         |
| `-t`, `--type`     | stream source type, Optional values: `AUTO_PUSH`, `TUBEMQ`, `PULSAR`, `KAFKA`, `FILE`, `MYSQL_SQL`,<br/> `MYSQL_BINLOG`, `POSTGRESQL`, `ORACLE`, `SQLSERVER`, `MONGODB`, `REDIS` |         |

<details>
<summary>stream source type</summary>

| stream source type | description |
|--------------------|-------------|
| `AUTO_PUSH`        | Auto Push   |
| `TUBEMQ`           | TubeMQ      |
| `PULSAR`           | Pulsar      |
| `KAFKA`            | Kafka       |
| `FILE`             | File        |
| `MYSQL_SQL`        | SQL         |
| `MYSQL_BINLOG`     | Binlog      |
| `POSTGRESQL`       | PostgreSQL  |
| `ORACLE`           | Oracle      |
| `SQLSERVER`        | SQL server  |
| `MONGODB`          | MongoDB     |
| `REDIS`            | Redis       |

</details>

### `sink`

```
$ bin/inlongctl list sink
```

options:

| parameter          | description      | default |
|--------------------|------------------|---------|
| `-g`, `--group` *  | inlong group id  |         |
| `-s`, `--stream` * | inlong stream id |         |

### `cluster-tag`

```
$ bin/inlongctl list cluster-tag
```

options:

| parameter | description                      | default |
|-----------|----------------------------------|---------|
| `--tag`   | cluster tag, support fuzzy query |         |

### `cluster`

```
$ bin/inlongctl list cluster
```

options:

| parameter | description                                                                      | default |
|-----------|----------------------------------------------------------------------------------|---------|
| `--tag`   | cluster tag                                                                      |         |
| `--type`  | cluster type, Optional values: `AGENT`, `TUBEMQ`, `PULSAR`, `DATAPROXY`, `KAFKA` |         |

<details>
<summary>cluster type</summary>

| cluster type | description |
|--------------|-------------|
| `AGENT`      | Agent       |
| `TUBEMQ`     | TubeMQ      |
| `PULSAR`     | Pulsar      |
| `DATAPROXY`  | DataProxy   |
| `KAFKA`      | Kafka       |

</details>

### `cluster-node`

```
$ bin/inlongctl list cluster-node
```

options:

| parameter | description                                                                      | default |
|-----------|----------------------------------------------------------------------------------|---------|
| `--tag` * | cluster tag                                                                      |         |
| `--type`  | cluster type, Optional values: `AGENT`, `TUBEMQ`, `PULSAR`, `DATAPROXY`, `KAFKA` |         |

### `user`

```
$ bin/inlongctl list user
```

options:

| parameter          | description                                     | default |
|--------------------|-------------------------------------------------|---------|
| `-u`, `--username` | username, support fuzzy query                   |         |
| `--type`           | user type, Optional values: `ADMIN`, `OPERATOR` |         |

<details>
<summary>user type</summary>

| user type  | description |
|------------|-------------|
| `ADMIN`    | admin       |
| `OPERATOR` | other user  |

</details>

## Describe

`describe` is used to display detailed information and output in json format.

command:

- `group`
- `stream`
- `source`
- `sink`
- `cluster`
- `cluster-tag`
- `cluster-node`
- `user`

### `group`

```
$ bin/inlongctl describe group
```

options:

| parameter        | description                                                                                                                                           | default |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| `-g`, `--group`  | inlong group id, support fuzzy query                                                                                                                  |         |
| `-s`, `--status` | inlong group status , Optional values: `CREATE`, `REJECTED`, `INITIALIZING`, `OPERATING`, <br/> `STARTED`, `FAILED`, `STOPPED`, `FINISHED`, `DELETED` |         |
| `-n`, `--num`    | maximum number of displays                                                                                                                            | 10      |

<details>
<summary>group status</summary>

| group status   | description                          |
|----------------|--------------------------------------|
| `CREATE`       | to be submit or to be approval       |
| `REJECTED`     | approval rejected                    |
| `INITIALIZING` | configuring                          |
| `OPERATING`    | deleting, stopping or restarting     |
| `STARTED`      | successful configuration and restart |
| `FAILED`       | failed to configure                  |
| `STOPPED`      | suspended                            |
| `FINISHED`     | finish                               |
| `DELETED`      | deleted                              |

</details>

### `stream`

```
$ bin/inlongctl describe stream
```

options:

| parameter         | description     | default |
|-------------------|-----------------|---------|
| `-g`, `--group` * | inlong group id |         |

### `source`

```
$ bin/inlongctl describe source
```

options:

| parameter          | description                                                                                                                                                                      | default |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| `-g`, `--group` *  | inlong group id                                                                                                                                                                  |         |
| `-s`, `--stream` * | inlong stream id                                                                                                                                                                 |         |
| `-t`, `--type`     | stream source type, Optional values: `AUTO_PUSH`, `TUBEMQ`, `PULSAR`, `KAFKA`, `FILE`, `MYSQL_SQL`,<br/> `MYSQL_BINLOG`, `POSTGRESQL`, `ORACLE`, `SQLSERVER`, `MONGODB`, `REDIS` |         |

<details>
<summary>stream source type</summary>

| stream source type | description |
|--------------------|-------------|
| `AUTO_PUSH`        | Auto Push   |
| `TUBEMQ`           | TubeMQ      |
| `PULSAR`           | Pulsar      |
| `KAFKA`            | Kafka       |
| `FILE`             | File        |
| `MYSQL_SQL`        | SQL         |
| `MYSQL_BINLOG`     | Binlog      |
| `POSTGRESQL`       | PostgreSQL  |
| `ORACLE`           | Oracle      |
| `SQLSERVER`        | SQL server  |
| `MONGODB`          | MongoDB     |
| `REDIS`            | Redis       |

</details>

### `sink`

```
$ bin/inlongctl describe sink
```

options:

| parameter          | description      | default |
|--------------------|------------------|---------|
| `-g`, `--group` *  | inlong group id  |         |
| `-s`, `--stream` * | inlong stream id |         |

### `cluster-tag`

```
$ bin/inlongctl describe cluster-tag
```

options:

| parameter       | description    | default |
|-----------------|----------------|---------|
| `-id`, `--id` * | cluster tag id |         |

### `cluster`

```
$ bin/inlongctl describe cluster
```

options:

| parameter       | description | default |
|-----------------|-------------|---------|
| `-id`, `--id` * | cluster id  |         |

### `cluster-node`

```
$ bin/inlongctl describe cluster-node
```

options:

| parameter       | description     | default |
|-----------------|-----------------|---------|
| `-id`, `--id` * | cluster node id |         |

### `user`

```
$ bin/inlongctl describe user
```

options:

| parameter       | description | default |
|-----------------|-------------|---------|
| `-id`, `--id` * | user id     |         |

[//]: # (To be added)

## Create

`create` is used to create resources, currently created by using a json file.

command:

- `group`
- `cluster`
- `cluster-tag`
- `cluster-node`
- `user`

### `group`

```
$ bin/inlongctl create group
```

options:

| parameter      | description    | default |
|----------------|----------------|---------|
| `-f`, `--file` | json file name |         |

json:

```json
{
    "groupInfo": {
        "inlongGroupId": "test_group_ctl",
        "inlongClusterTag": "default_cluster",
        "mqType": "PULSAR"
    },
    "streamInfo": {
        "inlongStreamId": "test_stream_ctl",
        "fieldList": [
            {
                "fieldName": "name",
                "fieldType": "string"
            }
        ],
        "sourceList": [
            {
                "sourceType": "FILE",
                "sourceName": "test_source_ctl",
                "agentIp": "127.0.0.1",
                "pattern": "/data/test.txt"
            }
        ],
        "sinkList": [
            {
                "sinkType": "CLICKHOUSE",
                "sinkName": "test_sink_ctl",
                "dataNodeName": "test_clickhouse",
                "dbName": "db_test",
                "tableName": "table_test",
                "flushInterval": 1,
                "flushRecord": 1000,
                "retryTimes": 3,
                "engine": "Log",
                "isDistributed": 1,
                "sinkFieldList": [
                    {
                        "sourceFieldName": "name",
                        "sourceFieldType": "string",
                        "fieldName": "name",
                        "fieldType": "string"
                    }
                ]
            }
        ]
    }
}
```

- This is an example of `file` → `pulsar` → `clickhouse`, if you want to use other data flow, just replace the corresponding part.

**Source:**

<Tabs
defaultValue="file"
values={[
{label: 'File', value: 'file'},
{label: 'PostgreSQL', value: 'postgresql'},
{label: 'MySQL', value: 'mysql'},
{label: 'SQLServer', value: 'sqlserver'},
{label: 'MongoDB', value: 'mongodb'},
{label: 'Redis', value: 'redis'},
{label: 'Oracle', value: 'oracle'},
{label: 'MQTT', value: 'mqtt'},
]}>

<TabItem value="file">
<code>
{`{ 
    "sourceType": "FILE",
    "sourceName": "test_source_ctl",
    "agentIp": "127.0.0.1",
    "pattern": "/data/test.txt"
}`}
</code>
</TabItem>
<TabItem value="mysql">
<code>
{`{ 
    "sourceType": "MYSQL_BINLOG",
    "sourceName": "test_source_ctl",
    "agentIp": "127.0.0.1",
    "user": "username",
    "password": "password",
    "hostname": "127.0.0.1",
    "port": 3306,
    "tableWhiteList": "db_test.table_test",
    "serverTimezone": "UTC",
    "intervalMs": "1000",
    "historyFilename": "/data/inlong-agent/.history",
    "allMigration": false
}`}
</code>
</TabItem>
<TabItem value="mongodb">
<code>
{`{ 
    "sourceType": "MONGODB",
    "sourceName": "test_source_ctl",
    "agentIp": "127.0.0.1",
    "hosts": "127.0.0.1:27017",
    "username": "username",
    "password": "password",
    "database": "database_test",
    "collection": "collection_test",
    "primaryKey": "_id"
}`}
</code>
</TabItem>
<TabItem value="sqlserver">
<code>
{`{ 
    "sourceType": "SQLSERVER",
    "sourceName": "test_source_ctl",
    "agentIp": "127.0.0.1",
    "username": "username",
    "password": "password",
    "hostname": "127.0.0.1",
    "port": 1433,
    "database": "database_test",
    "schemaName": "schema_test",
    "tableName": "table_test",
    "serverTimezone": "UTC",
    "allMigration": false,
    "primaryKey": "id"
}`}
</code>
</TabItem>
<TabItem value="redis">
<code>
{`{ 
    "sourceType": "REDIS",
    "sourceName": "test_source_ctl",
    "agentIp": "127.0.0.1",
    "host": "127.0.0.1",
    "port": 6379,
    "username": "username",
    "password": "password",
    "database": 0,
    "redisMode": "cluster",
    "timeout": 1000,
    "soTimeout": 1000
}`}
</code>
</TabItem>
<TabItem value="postgresql">
<code>
{`{ 
    "sourceType": "POSTGRESQL",
    "sourceName": "test_source_ctl",
    "agentIp": "127.0.0.1",
    "username": "username",
    "password": "password",
    "hostname": "127.0.0.1",
    "port": 5432,
    "database": "database_test",
    "schema": "public",
    "decodingPluginName": "pgoutput",
    "tableNameList": [
        "table_test"
    ],
    "primaryKey": "id"
}`}
</code>
</TabItem>
<TabItem value="oracle">
<code>
{`{ 
    "sourceType": "ORACLE",
    "sourceName": "test_source_ctl",
    "agentIp": "127.0.0.1",
    "hostname": "127.0.0.1",
    "port": 1521,
    "username": "username",
    "password": "password",
    "database": "database_test",
    "schemaName": "schema_test",
    "tableName": "table_test",
    "scanStartupMode": "initial",
    "allMigration": false
}`}
</code>
</TabItem>
<TabItem value="mqtt">
<code>
{`{ 
    "sourceType": "MQTT",
    "sourceName": "test_source_ctl",
    "agentIp": "127.0.0.1",
    "serverURI": "tcp://127.0.0.1:1883",
    "username": "username",
    "password": "password",
    "topic": "topic_test",
    "qos": 1,
    "clientId": "client_test",
    "mqttVersion": "4"
}`}
</code>
</TabItem>
</Tabs>

**Sink:**

<Tabs
defaultValue="clickhouse"
values={[
{label: 'Clickhouse', value: 'clickhouse'},
{label: 'Hive', value: 'hive'},
{label: 'Elasticsearch', value: 'elasticsearch'},
{label: 'Kafka', value: 'kafka'},
{label: 'MySQL', value: 'mysql'},
{label: 'Oracle', value: 'oracle'},
{label: 'PostgreSQL', value: 'postgresql'},
{label: 'SQLServer', value: 'sqlserver'},
{label: 'Iceberg', value: 'iceberg'},
]}>

<TabItem value="clickhouse">
<code>
{`{
    "sinkType": "CLICKHOUSE",
    "sinkName": "test_sink_ctl",
    "dataNodeName": "test_clickhouse",
    "dbName": "db_test",
    "tableName": "table_test",
    "flushInterval": 1,
    "flushRecord": 1000,
    "retryTimes": 3,
    "engine": "Log",
    "isDistributed": 1,
    "enableCreateResource": 1,
    "sinkFieldList": []
}`}
</code>
</TabItem>
<TabItem value="hive">
<code>
{`{ 
    "sinkType": "HIVE",
    "sinkName": "test_sink_ctl",
    "dataNodeName": "hive_test",
    "dbName": "db_test",
    "tableName": "table_test",
    "enableCreateResource": 1,
    "dataEncoding": "UTF-8",
    "fileFormat": "TextFile",
    "dataSeparator": "124",
    "enableCreateResource": 1,
    "sinkFieldList": []
}`}
</code>
</TabItem>
<TabItem value="elasticsearch">
<code>
{`{ 
    "sinkType": "ELASTICSEARCH",
    "sinkName": "test_sink_ctl",
    "dataNodeName": "test_es",
    "indexName": "index_test",
    "documentType": "doc_test",
    "flushRecord": 1000,
    "primaryKey": "_id",
    "esVersion": 5,
    "enableCreateResource": 1,
    "sinkFieldList": []
}`}
</code>
</TabItem>
<TabItem value="kafka">
<code>
{`{ 
    "sinkType": "KAFKA",
    "sinkName": "test_sink_ctl",
    "bootstrapServers": "127.0.0.1:9092",
    "topicName": "topic_test",
    "partitionNum": 3,
    "serializationType": "JSON",
    "autoOffsetReset": "earliest",
    "enableCreateResource": 1,
    "sinkFieldList": []
}`}
</code>
</TabItem>
<TabItem value="mysql">
<code>
{`{ 
    "sinkType": "MYSQL",
    "sinkName": "test_sink_ctl",
    "dataNodeName": "test_mysql",
    "databaseName": "database_test",
    "tableName": "table_test",
    "primaryKey": "id",
    "enableCreateResource": 1,
    "sinkFieldList": []
}`}
</code>
</TabItem>
<TabItem value="oracle">
<code>
{`{ 
    "sinkType": "ORACLE",
    "sinkName": "test_sink_ctl",
    "jdbcUrl": "jdbc:oracle:thin://127.0.0.1:1521/db_name",
    "username": "username",
    "password": "password",
    "tableName": "test_table",
    "primaryKey": "id",
    "enableCreateResource": 1,
    "sinkFieldList": []
}`}
</code>
</TabItem>
<TabItem value="postgresql">
<code>
{`{ 
    "sinkType": "POSTGRESQL",
    "sinkName": "test_sink_ctl",
    "jdbcUrl": "jdbc:postgresql://127.0.0.1:5432/db_name",
    "username": "username",
    "password": "password",
    "dbName": "db_test",
    "tableName": "table_test",
    "primaryKey": "id",
    "enableCreateResource": 1,
    "sinkFieldList": []
}`}
</code>
</TabItem>
<TabItem value="sqlserver">
<code>
{`{ 
    "sinkType": "SQLSERVER",
    "sinkName": "test_sink_ctl",
    "jdbcUrl": "jdbc:sqlserver://127.0.0.1:1433;database=db_test",
    "tableName": "table_test",
    "schemaName": "schema_test",
    "username": "username",
    "password": "password",
    "serverTimezone": "UTC",
    "allMigration": false,
    "primaryKey": "id",
    "enableCreateResource": 1,
    "sinkFieldList": []
}`}
</code>
</TabItem>
<TabItem value="iceberg">
<code>
{`{
    "sinkType": "ICEBERG",
    "sinkName": "test_sink_ctl",
    "dataNodeName": "test_iceberg",
    "dbName": "db_test",
    "tableName": "table_test",
    "fileFormat": "Parquet",
    "primaryKey": "id",
    "enableCreateResource": 1,
    "sinkFieldList": []
}`}
</code>
</TabItem>
</Tabs>

### `cluster`

```
$ bin/inlongctl create cluster
```

options:

| parameter      | description    | default |
|----------------|----------------|---------|
| `-f`, `--file` | json file name |         |

json:

```json
{
  "name": "test_cluster",
  "url": "127.0.0.1:8080",
  "clusterTags": "test_cluster_tag",
  "extTag": null,
  "description": null,
  "inCharges": "admin",
  "type": "PULSAR",
  "adminUrl": "http://127.0.0.1:8080",
  "tenant": "public"
}
```

### `cluster-tag`

```
$ bin/inlongctl create cluster-tag
```

options:

| parameter      | description     | default |
|----------------|-----------------|---------|
| `-f`, `--file` | json file  name |         |

json:

```json
{
  "clusterTag": "test_cluster_tag",
  "inCharges": "ctl",
  "extParams": null,
  "description": null
}
```

### `cluster-node`

```
$ bin/inlongctl create cluster-node
```

options:

| parameter      | description     | default |
|----------------|-----------------|---------|
| `-f`, `--file` | json file  name |         |

json:

```json
{
  "parentId": 1,
  "type": "AGENT",
  "ip": "127.0.0.1",
  "port": 8008,
  "extParams": null,
  "description": "null"
}
```

> `parentId` is the corresponding cluster id of this node, and the cluster id can be obtained through `list cluster` or `describe cluster`

### `user`

```
$ bin/inlongctl create user
```

options:

| parameter          | description  | default |
|--------------------|--------------|---------|
| `-u`, `--username` | username     |         |
| `-p`, `--password` | password     |         |
| `-t`, `--type`     | account type |         |
| `-d`, `--day`      | valid days   |         |

[//]: # (To be added)

## Update

`update` is used to update resources, currently update by using a json file.

command:

- `cluster`
- `cluster-tag`
- `cluster-node`
- `user`

> The json file required by `update` can be modified on the json obtained by `describe`.

### `cluster`

```
$ bin/inlongctl update cluster
```

options:

| parameter      | description    | default |
|----------------|----------------|---------|
| `-f`, `--file` | json file name |         |

### `cluster-tag`

```
$ bin/inlongctl update cluster-tag
```

options:

| parameter      | description    | default |
|----------------|----------------|---------|
| `-f`, `--file` | json file name |         |

### `cluster-node`

```
$ bin/inlongctl update cluster-node
```

options:

| parameter      | description    | default |
|----------------|----------------|---------|
| `-f`, `--file` | json file name |         |

### `user`

```
$ bin/inlongctl update user
```

options:

| parameter          | description    | default |
|--------------------|----------------|---------|
| `-u`, `--username` | username       |         |
| `-p`, `--password` | new password   |         |
| `-d`, `--day`      | new valid days |         |

## Suspend

`suspend` is used to suspend inlong group task.

command:

- `group`

### `group`

```
$ bin/inlongctl suspend group
```

options:

| parameter       | description     | default |
|-----------------|-----------------|---------|
| `-g`, `--group` | inlong group id |         |

## Restart

`restart` is used to restart inlong group task.

command:

- `group`

### `group`

```
$ bin/inlongctl restart group
```

options:

| parameter       | description     | default |
|-----------------|-----------------|---------|
| `-g`, `--group` | inlong group id |         |

## Delete

`delete` is used to delete resources.

command:

- `group`
- `stream`
- `source`
- `sink`
- `cluster`
- `cluster-tag`
- `cluster-node`
- `user`

### `group`

```
$ bin/inlongctl delete group
```

options:

| parameter        | description                                                                                                                                           | default |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| `-g`, `--group`  | inlong group id, support fuzzy query                                                                                                                  |         |
| `-s`, `--status` | inlong group status , Optional values: `CREATE`, `REJECTED`, `INITIALIZING`, `OPERATING`, <br/> `STARTED`, `FAILED`, `STOPPED`, `FINISHED`, `DELETED` |         |
| `-n`, `--num`    | maximum number of displays                                                                                                                            | 10      |

<details>
<summary>group status</summary>

| group status   | description                          |
|----------------|--------------------------------------|
| `CREATE`       | to be submit or to be approval       |
| `REJECTED`     | approval rejected                    |
| `INITIALIZING` | configuring                          |
| `OPERATING`    | deleting, stopping or restarting     |
| `STARTED`      | successful configuration and restart |
| `FAILED`       | failed to configure                  |
| `STOPPED`      | suspended                            |
| `FINISHED`     | finish                               |
| `DELETED`      | deleted                              |

</details>

### `stream`

```
$ bin/inlongctl delete stream
```

options:

| parameter         | description     | default |
|-------------------|-----------------|---------|
| `-g`, `--group` * | inlong group id |         |

### `source`

```
$ bin/inlongctl delete source
```

options:

| parameter          | description                                                                                                                                                                      | default |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| `-g`, `--group` *  | inlong group id                                                                                                                                                                  |         |
| `-s`, `--stream` * | inlong stream id                                                                                                                                                                 |         |
| `-t`, `--type`     | stream source type, Optional values: `AUTO_PUSH`, `TUBEMQ`, `PULSAR`, `KAFKA`, `FILE`, `MYSQL_SQL`,<br/> `MYSQL_BINLOG`, `POSTGRESQL`, `ORACLE`, `SQLSERVER`, `MONGODB`, `REDIS` |         |

<details>
<summary>stream source type</summary>

| stream source type | description |
|--------------------|-------------|
| `AUTO_PUSH`        | Auto Push   |
| `TUBEMQ`           | TubeMQ      |
| `PULSAR`           | Pulsar      |
| `KAFKA`            | Kafka       |
| `FILE`             | File        |
| `MYSQL_SQL`        | SQL         |
| `MYSQL_BINLOG`     | Binlog      |
| `POSTGRESQL`       | PostgreSQL  |
| `ORACLE`           | Oracle      |
| `SQLSERVER`        | SQL server  |
| `MONGODB`          | MongoDB     |
| `REDIS`            | Redis       |

</details>

### `sink`

```
$ bin/inlongctl delete sink
```

options:

| parameter          | description      | default |
|--------------------|------------------|---------|
| `-g`, `--group` *  | inlong group id  |         |
| `-s`, `--stream` * | inlong stream id |         |

### `cluster-tag`

```
$ bin/inlongctl delete cluster-tag
```

options:

| parameter       | description    | default |
|-----------------|----------------|---------|
| `-id`, `--id` * | cluster tag id |         |

### `cluster`

```
$ bin/inlongctl delete cluster
```

options:

| parameter       | description | default |
|-----------------|-------------|---------|
| `-id`, `--id` * | cluster id  |         |

### `cluster-node`

```
$ bin/inlongctl delete cluster-node
```

options:

| parameter       | description     | default |
|-----------------|-----------------|---------|
| `-id`, `--id` * | cluster node id |         |

### `user`

```
$ bin/inlongctl delete user
```

options:

| parameter       | description | default |
|-----------------|-------------|---------|
| `-id`, `--id` * | user id     |         |

[//]: # (To be added)

## Log

After creating the task process, you can use the `log` command to view the execution log of each stage of the task.

command:

- `group`

### `group`

```
$ bin/inlongctl log group
```

options:

| parameter       | description                              | default |
|-----------------|------------------------------------------|---------|
| `-g`, `--group` | inlong group id, not support fuzzy query |         |

