---
title: Command-line Tools
sidebar_position: 2
---

## Overview
In addition to [InLong Dashboard](user_guide/dashboard_usage.md), you can view and create data groups and streams through command-line tools.
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

The current command line tool supports six commands of `list` , `describe` , `update` , `delete` , `log` , and `create`.

## Configuration

Go to the `inlong-manager` directory , modify the following configurations of the `conf/application.properties` file.

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

> \* means required

The `list` command is used to showcase the core information of Inlong Group / Stream / Sink / Source.

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

The `describe` command is used to show the details of the Inlong Group / Stream / Sink / Source
and output in JSON format.

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

The `create` command does not need to submit for review , just prepare the configured information in the JSON file.

### Json File

Json files have five parts: `groupConf` 、`streamConf` 、`streamSource` 、`streamSink` and `streamFieldList`

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
>   "jdbcUrl": "jdbc:hive2://10.160.142.179:10000",
>   "authentication": {
>     "userName": "hive",
>     "password": "hive"
>   },
> ```

- Kafka
> ```
> "mqBaseConf": {
>   "type": "KAFKA",
>   "bootstrapServers": "127.0.0.1:9092",
>   "topicName": "test_topic",
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
> 
> ```

## Delete

```
Usage: managerctl delete [command] 
  Commands:
    group      The id of the inlong group that is to be deleted
      Usage: group
```

The `delete` command deletes the inlong group corresponding to the given id.

## Update

```
Usage: managerctl update [command] [command options]
  Commands:
    group      The id of the inlong group that is to be updated
  Usage: group [options]
  Options:
    *-c --config
    the config file as json
```

The `update` command updates the inlong group corresponding to the given id, using the config file provided.
- Sortconf json example
> ```
> "FlinkSortConf": {
>   "sortType": "flink",
>   "authentication": "NONE",
>   "serviceUrl": "127.0.0.1:8080",
>   "region": "beijing",
>   "properties": {}
> }
> 
> ```



## Log

```
Usage: managerctl log [command] [command options]
    Commands:
    group      Get group details
    Usage: group [options]
    Options:
    *-q --query [parameter:value]
    select the list of groups accourding to one selected query.
    Supported filters: 
        inlongGroupId
        name (Inlong group name)   
        mqType     
        mqResource
        inlongClusterTag   
        inCharges
        status
        creator
        modifier
        createTime
        modifyTime
```

The `log` command is used to filter out inlong groups according to its properties from a small list of inlong groups.
