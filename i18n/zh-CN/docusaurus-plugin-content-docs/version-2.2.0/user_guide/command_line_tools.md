---
title: 命令行工具
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 总览

除了 [InLong Dashboard](user_guide/dashboard_usage.md)，你可以通过命令行工具来查看管理 InLong 的相关资源。

命令行工具可以在 InLong 的 `bin` 目录运行。

用法：

```
$ bin/inlongctl [options] [command] [command options]
```

命令：

- `list`
- `describe`
- `create`
- `update`
- `delete`
- `log`

> 同时也可以使用 `--help` 或者 `-h` 获取上述命令的帮助，例如：

```
$ bin/inlongctl list -h
```

## 配置

前往 `inlong-manager` 目录，修改 `conf/application.properties` 文件的以下配置即可。

```
server.host=127.0.0.1
server.port=8080
default.admin.user=admin
default.admin.password=inlong
```

## List

`list` 用于展示相关资源的核心信息，并以表格的方式展示。

命令：

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

选项：

| 参数               | 描述                                                                                                                               | 默认值 |
|------------------|----------------------------------------------------------------------------------------------------------------------------------|-----|
| `-g`, `--group`  | inlong group id，支持模糊查询                                                                                                           |     |
| `-s`, `--status` | inlong group status ，可选值有：`CREATE`，`REJECTED`，`INITIALIZING`，`OPERATING`，<br/> `STARTED`，`FAILED`，`STOPPED`，`FINISHED`，`DELETED` |     |
| `-n`, `--num`    | 最多显示条数                                                                                                                           | 10  |

<details>
<summary>group status 说明</summary>

| group status   | 描述           |
|----------------|--------------|
| `CREATE`       | 待提交、待审批状态    |
| `REJECTED`     | 审批被驳回        |
| `INITIALIZING` | 配置中          |
| `OPERATING`    | 删除中、停止中以及重启中 |
| `STARTED`      | 配置成功以及重启成功   |
| `FAILED`       | 配置失败         |
| `STOPPED`      | 暂停           |
| `FINISHED`     | 停止           |
| `DELETED`      | 已删除          |

</details>

### `stream`

```
$ bin/inlongctl list stream
```

选项：

| 参数                | 描述                                               | 默认值 |
|-------------------|--------------------------------------------------|-----|
| `-g`, `--group` * | inlong group id，该 inlong stream 所在的 inlong group |     |

> \* 表示为必需参数

### `source`

```
$ bin/inlongctl list source
```

选项：

| 参数                 | 描述                                                                                                                                                                  | 默认值 |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----|
| `-g`, `--group` *  | inlong group id                                                                                                                                                     |     |
| `-s`, `--stream` * | inlong stream id                                                                                                                                                    |     |
| `-t`, `--type`     | stream source type，可选值有：`AUTO_PUSH`, `TUBEMQ`, `PULSAR`, `KAFKA`, `FILE`, `MYSQL_SQL`,<br/> `MYSQL_BINLOG`, `POSTGRESQL`, `ORACLE`, `SQLSERVER`, `MONGODB`, `REDIS` |     |

<details>
<summary>stream source type 说明</summary>

| stream source type | 描述         |
|--------------------|------------|
| `AUTO_PUSH`        | 自主推送       |
| `TUBEMQ`           | TubeMQ     |
| `PULSAR`           | Pulsar     |
| `KAFKA`            | Kafka      |
| `FILE`             | 文件         |
| `MYSQL_SQL`        | SQL        |
| `MYSQL_BINLOG`     | Binlog     |
| `POSTGRESQL`       | PostgreSQL |
| `ORACLE`           | Oracle     |
| `SQLSERVER`        | SQL server |
| `MONGODB`          | MongoDB    |
| `REDIS`            | Redis      |

</details>

### `sink`

```
$ bin/inlongctl list sink
```

选项：

| 参数                 | 描述                                               | 默认值 |
|--------------------|--------------------------------------------------|-----|
| `-g`, `--group` *  | inlong group id                                  |     |
| `-s`, `--stream` * | inlong stream id，该 stream sink 所在的 inlong stream |     |

### `cluster-tag`

```
$ bin/inlongctl list cluster-tag
```

选项：

| 参数      | 描述                      | 默认值 |
|---------|-------------------------|-----|
| `--tag` | cluster tag，集群标签，支持模糊查询 |     |

### `cluster`

```
$ bin/inlongctl list cluster
```

选项：

| 参数       | 描述                                                                  | 默认值 |
|----------|---------------------------------------------------------------------|-----|
| `--tag`  | cluster tag                                                         |     |
| `--type` | cluster type，可选值有：`AGENT`, `TUBEMQ`, `PULSAR`, `DATAPROXY`, `KAFKA` |     |

<details>
<summary>cluster type 说明</summary>

| cluster type | 描述        |
|--------------|-----------|
| `AGENT`      | Agent     |
| `TUBEMQ`     | TubeMQ    |
| `PULSAR`     | Pulsar    |
| `DATAPROXY`  | DataProxy |
| `KAFKA`      | Kafka     |

</details>

### `cluster-node`

```
$ bin/inlongctl list cluster-node
```

选项：

| 参数        | 描述                                                                  | 默认值 |
|-----------|---------------------------------------------------------------------|-----|
| `--tag` * | cluster tag                                                         |     |
| `--type`  | cluster type，可选值有：`AGENT`, `TUBEMQ`, `PULSAR`, `DATAPROXY`, `KAFKA` |     |

### `user`

```
$ bin/inlongctl list user
```

选项：

| 参数                 | 描述                                 | 默认值 |
|--------------------|------------------------------------|-----|
| `-u`, `--username` | username，支持模糊查询                    |     |
| `--type`           | user type，可选值有：`ADMIN`, `OPERATOR` |     |

<details>
<summary>user type 说明</summary>

| user type  | 描述   |
|------------|------|
| `ADMIN`    | 管理员  |
| `OPERATOR` | 普通用户 |

</details>

## Describe

`describe` 用于展示相关资源的详细信息，直接以 Json 格式展示。

命令：

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

选项：

| 参数               | 描述                                                                                                                               | 默认值 |
|------------------|----------------------------------------------------------------------------------------------------------------------------------|-----|
| `-g`, `--group`  | inlong group id，支持模糊查询                                                                                                           |     |
| `-s`, `--status` | inlong group status ，可选值有：`CREATE`，`REJECTED`，`INITIALIZING`，`OPERATING`，<br/> `STARTED`，`FAILED`，`STOPPED`，`FINISHED`，`DELETED` |     |
| `-n`, `--num`    | 最多显示条数                                                                                                                           | 10  |

<details>
<summary>group status 说明</summary>

| group status   | 描述           |
|----------------|--------------|
| `CREATE`       | 待提交、待审批状态    |
| `REJECTED`     | 审批被驳回        |
| `INITIALIZING` | 配置中          |
| `OPERATING`    | 删除中、停止中以及重启中 |
| `STARTED`      | 配置成功以及重启成功   |
| `FAILED`       | 配置失败         |
| `STOPPED`      | 暂停           |
| `FINISHED`     | 停止           |
| `DELETED`      | 已删除          |

</details>

### `stream`

```
$ bin/inlongctl describe stream
```

选项：

| 参数                | 描述                                               | 默认值 |
|-------------------|--------------------------------------------------|-----|
| `-g`, `--group` * | inlong group id，该 inlong stream 所在的 inlong group |     |

### `source`

```
$ bin/inlongctl describe source
```

选项：

| 参数                 | 描述                                                                                                                                                                  | 默认值 |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----|
| `-g`, `--group` *  | inlong group id                                                                                                                                                     |     |
| `-s`, `--stream` * | inlong stream id                                                                                                                                                    |     |
| `-t`, `--type`     | stream source type，可选值有：`AUTO_PUSH`, `TUBEMQ`, `PULSAR`, `KAFKA`, `FILE`, `MYSQL_SQL`,<br/> `MYSQL_BINLOG`, `POSTGRESQL`, `ORACLE`, `SQLSERVER`, `MONGODB`, `REDIS` |     |

<details>
<summary>stream source type 说明</summary>

| stream source type | 描述         |
|--------------------|------------|
| `AUTO_PUSH`        | 自主推送       |
| `TUBEMQ`           | TubeMQ     |
| `PULSAR`           | Pulsar     |
| `KAFKA`            | Kafka      |
| `FILE`             | 文件         |
| `MYSQL_SQL`        | SQL        |
| `MYSQL_BINLOG`     | Binlog     |
| `POSTGRESQL`       | PostgreSQL |
| `ORACLE`           | Oracle     |
| `SQLSERVER`        | SQL server |
| `MONGODB`          | MongoDB    |
| `REDIS`            | Redis      |

</details>

### `sink`

```
$ bin/inlongctl describe sink
```

选项：

| 参数                 | 描述                                               | 默认值 |
|--------------------|--------------------------------------------------|-----|
| `-g`, `--group` *  | inlong group id                                  |     |
| `-s`, `--stream` * | inlong stream id，该 stream sink 所在的 inlong stream |     |

### `cluster-tag`

```
$ bin/inlongctl describe cluster-tag
```

选项：

| 参数              | 描述             | 默认值 |
|-----------------|----------------|-----|
| `-id`, `--id` * | cluster tag id |     |

### `cluster`

```
$ bin/inlongctl describe cluster
```

选项：

| 参数              | 描述         | 默认值 |
|-----------------|------------|-----|
| `-id`, `--id` * | cluster id |     |

### `cluster-node`

```
$ bin/inlongctl describe cluster-node
```

选项：

| 参数              | 描述              | 默认值 |
|-----------------|-----------------|-----|
| `-id`, `--id` * | cluster node id |     |

### `user`

```
$ bin/inlongctl describe user
```

选项：

| 参数              | 描述      | 默认值 |
|-----------------|---------|-----|
| `-id`, `--id` * | user id |     |

[//]: # (待补充)

## Create

`create` 用于创建相关资源，目前通过使用 json 文件的方式创建

命令：

- `group`
- `cluster`
- `cluster-tag`
- `cluster-node`
- `user`

### `group`

```
$ bin/inlongctl create group
```

选项：

| 参数             | 描述        | 默认值 |
|----------------|-----------|-----|
| `-f`, `--file` | json 文件名称 |     |

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

- 这是一个 `file` → `pulsar` → `clickhouse` 流向的示例，如果需要其它流向，只需要替换相应 `source`、`sink` 部分

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

选项：

| 参数             | 描述        | 默认值 |
|----------------|-----------|-----|
| `-f`, `--file` | json 文件名称 |     |

json 示例：

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

选项：

| 参数             | 描述        | 默认值 |
|----------------|-----------|-----|
| `-f`, `--file` | json 文件名称 |     |

json 示例：

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

选项：

| 参数             | 描述        | 默认值 |
|----------------|-----------|-----|
| `-f`, `--file` | json 文件名称 |     |

json 示例：

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

> parentId 为该节点对应 cluster 的 id，可通过 `list cluster` 或 `describe cluster` 查看

### `user`

```
$ bin/inlongctl create user
```

选项：

| 参数                 | 描述   | 默认值 |
|--------------------|------|-----|
| `-u`, `--username` | 用户名称 |     |
| `-p`, `--password` | 用户密码 |     |
| `-t`, `--type`     | 用户类型 |     |
| `-d`, `--day`      | 有效期  |     |

[//]: # (待补充)

## Update

`update` 用于修改相关资源，目前通过使用 json 文件的方式修改

命令：

- `cluster`
- `cluster-tag`
- `cluster-node`
- `user`

> `update` 所需的 json 文件可以在 `describe` 得到的 json 上进行需要的修改即可。

### `cluster`

```
$ bin/inlongctl update cluster
```

选项：

| 参数             | 描述        | 默认值 |
|----------------|-----------|-----|
| `-f`, `--file` | json 文件名称 |     |

### `cluster-tag`

```
$ bin/inlongctl update cluster-tag
```

选项：

| 参数             | 描述        | 默认值 |
|----------------|-----------|-----|
| `-f`, `--file` | json 文件名称 |     |

### `cluster-node`

```
$ bin/inlongctl update cluster-node
```

选项：

| 参数             | 描述        | 默认值 |
|----------------|-----------|-----|
| `-f`, `--file` | json 文件名称 |     |

### `user`

```
$ bin/inlongctl update user
```

选项：

| 参数                 | 描述   | 默认值 |
|--------------------|------|-----|
| `-u`, `--username` | 用户名称 |     |
| `-p`, `--password` | 新密码  |     |
| `-d`, `--day`      | 新有效期 |     |

## Suspend

`suspend` 用于暂停 inlong 任务

命令：

- `group`

### `group`

```
$ bin/inlongctl suspend group
```

选项：

| 参数              | 描述              | 默认值 |
|-----------------|-----------------|-----|
| `-g`, `--group` | inlong group id |     |

## Restart

`restart` 用于重启 inlong 任务

命令：

- `group`

### `group`

```
$ bin/inlongctl restart group
```

选项：

| 参数              | 描述              | 默认值 |
|-----------------|-----------------|-----|
| `-g`, `--group` | inlong group id |     |

## Delete

`delete` 用于删除相关资源。

命令：

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

选项：

| 参数               | 描述                                                                                                                               | 默认值 |
|------------------|----------------------------------------------------------------------------------------------------------------------------------|-----|
| `-g`, `--group`  | inlong group id，支持模糊查询                                                                                                           |     |
| `-s`, `--status` | inlong group status ，可选值有：`CREATE`，`REJECTED`，`INITIALIZING`，`OPERATING`，<br/> `STARTED`，`FAILED`，`STOPPED`，`FINISHED`，`DELETED` |     |
| `-n`, `--num`    | 最多显示条数                                                                                                                           | 10  |

<details>
<summary>group status 说明</summary>

| group status   | 描述           |
|----------------|--------------|
| `CREATE`       | 待提交、待审批状态    |
| `REJECTED`     | 审批被驳回        |
| `INITIALIZING` | 配置中          |
| `OPERATING`    | 删除中、停止中以及重启中 |
| `STARTED`      | 配置成功以及重启成功   |
| `FAILED`       | 配置失败         |
| `STOPPED`      | 暂停           |
| `FINISHED`     | 停止           |
| `DELETED`      | 已删除          |

</details>

### `stream`

```
$ bin/inlongctl delete stream
```

选项：

| 参数                | 描述                                               | 默认值 |
|-------------------|--------------------------------------------------|-----|
| `-g`, `--group` * | inlong group id，该 inlong stream 所在的 inlong group |     |

### `source`

```
$ bin/inlongctl delete source
```

选项：

| 参数                 | 描述                                                                                                                                                                  | 默认值 |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----|
| `-g`, `--group` *  | inlong group id                                                                                                                                                     |     |
| `-s`, `--stream` * | inlong stream id                                                                                                                                                    |     |
| `-t`, `--type`     | stream source type，可选值有：`AUTO_PUSH`, `TUBEMQ`, `PULSAR`, `KAFKA`, `FILE`, `MYSQL_SQL`,<br/> `MYSQL_BINLOG`, `POSTGRESQL`, `ORACLE`, `SQLSERVER`, `MONGODB`, `REDIS` |     |

<details>
<summary>stream source type 说明</summary>

| stream source type | 描述         |
|--------------------|------------|
| `AUTO_PUSH`        | 自主推送       |
| `TUBEMQ`           | TubeMQ     |
| `PULSAR`           | Pulsar     |
| `KAFKA`            | Kafka      |
| `FILE`             | 文件         |
| `MYSQL_SQL`        | SQL        |
| `MYSQL_BINLOG`     | Binlog     |
| `POSTGRESQL`       | PostgreSQL |
| `ORACLE`           | Oracle     |
| `SQLSERVER`        | SQL server |
| `MONGODB`          | MongoDB    |
| `REDIS`            | Redis      |

</details>

### `sink`

```
$ bin/inlongctl delete sink
```

选项：

| 参数                 | 描述                                               | 默认值 |
|--------------------|--------------------------------------------------|-----|
| `-g`, `--group` *  | inlong group id                                  |     |
| `-s`, `--stream` * | inlong stream id，该 stream sink 所在的 inlong stream |     |

### `cluster-tag`

```
$ bin/inlongctl delete cluster-tag
```

选项：

| 参数              | 描述             | 默认值 |
|-----------------|----------------|-----|
| `-id`, `--id` * | cluster tag id |     |

### `cluster`

```
$ bin/inlongctl delete cluster
```

选项：

| 参数              | 描述         | 默认值 |
|-----------------|------------|-----|
| `-id`, `--id` * | cluster id |     |

### `cluster-node`

```
$ bin/inlongctl delete cluster-node
```

选项：

| 参数              | 描述              | 默认值 |
|-----------------|-----------------|-----|
| `-id`, `--id` * | cluster node id |     |

### `user`

```
$ bin/inlongctl delete user
```

选项：

| 参数              | 描述      | 默认值 |
|-----------------|---------|-----|
| `-id`, `--id` * | user id |     |

[//]: # (TODO:修改使用方法)

## Log

创建任务流程之后，可以使用 `log` 命令查看任务各阶段的执行日志

命令：

- `group`

### `group`

```
$ bin/inlongctl log group
```

选项：

| 参数               | 描述                      | 默认值 |
|------------------|-------------------------|-----|
| `-g`, `--group`  | inlong group id，不支持模糊查询 |     |

