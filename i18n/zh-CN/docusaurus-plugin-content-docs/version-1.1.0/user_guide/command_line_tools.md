---
title: 命令行工具 
sidebar_position: 2
---

## 总览
除了 [InLong Dashboard](user_guide/dashboard_usage.md)，你可以通过命令行工具来查看和创建数据 Group 和 Stream。
```
Usage: managerctl [options] [command] [command options]
  Options:
    -h, --help
      Get all command about managerctl.
  Commands:
    create      Create resource by json file
      Usage: create [options]

    describe      Display details of one or more resources
      Usage: describe [options]

    list      Displays main information for one or more resources
      Usage: list [options]
```

目前命令行工具支持 `list`、`describe` 以及 `create` 三个命令。

## 配置

前往 `inlong-manager` 目录，修改 `conf/application.properties` 文件的以下配置即可。

```
server.host=127.0.0.1
server.port=8080
default.admin.user=admin
default.admin.password=inlong
```

## List

```
Usage: managerctl list [command] [command options]
  Commands:
    stream      Get stream main information
      Usage: stream [options]
        Options:
        * -g, --group
            inlong group id

    group      Get group details
      Usage: group [options]
        Options:
          -g, --group
            inlong group id
          -n, --num
            the number displayed
            Default: 10
          -s, --status
            ( CREATE | REJECTED | INITIALIZING | OPERATING | 
             STARTED | FAILED | STOPPED | FINISHED | DELETED )
            
    sink      Get sink details
      Usage: sink [options]
        Options:
        * -g, --group
            group id
        * -s, --stream
            stream id

    source      Get source details
      Usage: source [options]
        Options:
        * -g, --group
            inlong group id
        * -s, --stream
            inlong stream id
          -t, --type
            sink type
```

> \* 号为必选项

`list` 用于展示inlong group / stream / sink / source 的核心信息。

## Describe

```
Usage: managerctl describe [command] [command options]
  Commands:
    stream      Get stream details
      Usage: stream [options]
        Options:
        * -g, --group
            inlong group id

    group      Get group details
      Usage: group [options]
        Options:
          -g, --group
            inlong group id
          -n, --num
            the number displayed
            Default: 10
          -s, --status
            Default: 0

    sink      Get sink details
      Usage: sink [options]
        Options:
        * -g, --group
            inlong group id
        * -s, --stream
            inlong stream id

    source      Get source details
      Usage: source [options]
        Options:
        * -g, --group
            inlong group id
        * -s, --stream
            inlong stream id
        * -t, --type
            sink type
```

`describe` 用于展示inlong group / stream / sink / source 的详细信息，并以Json格式输出。

## Create

```
Usage: managerctl create [command] [command options]
  Commands:
    group      Create group by json file
      Usage: group [options]
        Options:
        * -f, --file
            json file
```

`create` 不需要申请审核等步骤，只需将所配置信息准备在Json文件中即可。

### Json文件

Json 文件主要有五个部分： `groupConf` 、`streamConf` 、`streamSource` 、`streamSink` 以及 `streamFieldList`

```json
{
  "groupConf": {
    "groupName": "test_group",
    "description": "",
    "proxyClusterId": "1",
    "mqBaseConf": {
      "type": "PULSAR",
      "pulsarServiceUrl": "pulsar://127.0.0.1:6650",
      "pulsarAdminUrl": "http://127.0.0.1:8080",
      "tenant": "tenant",
      "namespace": "namespace",
      "enableCreateResource": false
    },
    "sortBaseConf": {
      "type": "FLINK",
      "serviceUrl": "127.0.0.1:8081"
    },
    "zookeeperEnabled": false,
    "dailyRecords": 10000000,
    "peakRecords": 100000,
    "maxLength": 10000
  },
  "streamConf": {
    "name": "test_stream",
    "description": "",
    "dataSeparator": "|",
    "strictlyOrdered": true,
    "topic": "topic"
  },
  "streamSource": {
    "sourceType": "KAFKA",
    "bootstrapServers": "127.0.0.1:9092",
    "topic": "kafka_topic",
    "sourceName": "kafka_sourceName",
    "dataFormat": "json",
    "autoOffsetReset": "EARLIEST"
  },
  "streamSink": {
    "sinkType": "HIVE",
    "dbName": "test_db",
    "jdbcUrl": "jdbc:hive2://127.0.0.1:10000",
    "authentication": {
      "userName": "hive",
      "password": "hive"
    },
    "fileFormat": "TextFile",
    "dataSeparator": "|",
    "dataPath": "hdfs://127.0.0.1:9000/user/hive/warehouse/test_db",
    "sinkFields": [
      {
        "id": 0,
        "fieldType": "STRING",
        "fieldName": "name",
        "sourceFieldType": "STRING",
        "sourceFieldName": "name"
      }
    ],
    "tableName": "test_table",
    "sinkName": "test",
    "dataFormat": "json"
  },
  "streamFieldList": [
    {
      "id": 0,
      "fieldType": "STRING",
      "fieldName": "name",
      "fieldComment": null,
      "fieldValue": null
    }
  ]
}
```

#### streamSource
- Kafka
> ```
> "streamSource": {
>   "sourceType": "KAFKA",
>   "sourceName": "sourceName",
>   "bootstrapServers": "127.0.0.1:9092",
>   "topic": "kafka_topic",
>   "dataFormat": "json",
>   "autoOffsetReset": "EARLIEST"
>  },
> ```

- MySQL Binlog
> ```
> "mqBaseConf": {
>   "type": "BINLOG",
>   "sourceName": "sourceName",
>   "hostname": "127.0.0.1",
>   "port" : "3306",
>   "authentication": {
>     "userName": "root",
>     "password": "root"
>   },
>   "includeSchema": false,
>   "serverTimezone": "UTC",
>   "monitoredDdl": false,
>   "allMigration": false,
>   "dbNames": ["db1", "test_db*"],
>   "tableNames": ["tb1", "user"*],
> }
> ```

- File
> ```
> "mqBaseConf": {
>   "type": "FILE",
>   "sourceName": "sourceName",
>   "ip": "127.0.0.1",
>   "pattern" : "/a/b/*.txt",
>   "timeOffset": "-1d"
> }
> ```

#### streamSink
- Hive
> ```
> "streamSink": {
>   "sinkType": "HIVE",
>   "dbName": "test_db",
>   "jdbcUrl": "jdbc:hive2://127.0.0.1:10000",
>   "authentication": {
>     "userName": "hive",
>     "password": "hive"
>   },
> ```

- Kafka
> ```
> "mqBaseConf": {
>   "type": "KAFKA",
>   "bootstrapServers": "pulsar://127.0.0.1:6650",
>   "topicName": "http://100.76.43.216:8080",
>   "dataFormat": "JSON",
>   "boolean": false,
> }
> ```

- ClickHouse
> ```
> "mqBaseConf": {
>   "type": "CLICKHOUSE",
>   "sinkName": "sinkName",
>   "dbName": "db_test",
>   "tableName": "table_test",
>   "jdbcUrl": "jdbc:clickhouse://127.0.0.1:8123/db",
>   "authentication": {
>     "userName": "default",
>     "password": "default"
>   },
>   "isDistributed": 1,
>   "flushInterval": 1,
>   "flushRecord": 10,
>   "keyFieldNames": "keyField",
>   "partitionFields": "partition",
>   "partitionStrategy": "BALANCE",
>   "retryTimes": 3,
>   "needCreated": false
> }
> ```