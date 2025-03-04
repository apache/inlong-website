---
title: Deployment
sidebar_position: 2
---
## Prepare to get module archive

Module archive is in the directory: `inlong-sort-standalone/sort-standalone-dist/target/`, the archive file is `apache-inlong-sort-standalone-${project.version}-bin.tar.gz`.

## Start inlong-sort-standalone application

After the compilation is completed and the `tar.gz` package is generated, unzip the file to start the `inlong-sort-standalone` application.

example:
```shell
./bin/sort-start.sh
```

## Configuration of conf/common.properties

| Parameter                           | Required | DefaultValue                                                                         | Remark                                                                                                                                                                                              |
|-------------------------------------|----------|--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| clusterId                           | Y        | NA                                                                                   | inlong-sort-standalone cluster id                                                                                                                                                                   |
| sortSource.type                     | N        | org.apache.inlong.sort.standalone.source.readapi.ReadApiSource                       | Source class name                                                                                                                                                                                   |
| sortChannel.type                    | N        | org.apache.inlong.sort.standalone.channel.BufferQueueChannel                         | Channel class name                                                                                                                                                                                  |
| sortSink.type                       | N        | org.apache.inlong.sort.standalone.sink.hive.HiveSink                                 | Sink class name. Different distribution types use different Sink classes                                                                                                                            |
| sortClusterConfig.type              | N        | org.apache.inlong.sort.standalone.config.loader.ClassResourceSortClusterConfigLoader | The distribution cluster configuration loading class name, ClassResourceSortClusterConfigLoader reads the distribution cluster configuration from the SortClusterConfig.conf source file in ClassPath |
| sortClusterConfig.managerPath       | N        | NA                                                                                   | Distribute the parameters of the cluster configuration loading class org.apache.inlong.sort.standalone.config.loader.ManagerSortClusterConfigLoader and specify the URL path of the Inlong Manager  |
| eventFormatHandler                  | N        | org.apache.inlong.sort.standalone.sink.hive.DefaultEventFormatHandler                | Format conversion class name before distributing Hive                                                                                                                                               |
| maxThreads                          | N        | 10                                                                                   | Sink thread number                                                                                                                                                                                  |
| reloadInterval                      | N        | 60000                                                                                | Interval updating Configuration data(millisecond)                                                                                                                                                   |
| processInterval                     | N        | 100                                                                                  | Interval processing data(millisecond)                                                                                                                                                               |
| metricDomains                       | N        | Sort                                                                                 | Domain name of metric                                                                                                                                                                               |
| metricDomains.Sort.domainListeners  | N        | org.apache.inlong.sort.standalone.metrics.prometheus.PrometheusMetricListener        | Class name list of metric listener, separated by space                                                                                                                                              |
| prometheusHttpPort                  | N        | 8080                                                                                 | HTTP server port of prometheus simple client                                                                                                                                                        |
| metricDomains.Sort.snapshotInterval | N        | 60000                                                                                | Interval snapshoting metric data(millisecond)                                                                                                                                                                                                   |

## SortClusterConfig Configuration

- Can read from the SortClusterConfig.conf source file in ClassPath, but does not support real-time updates
- Can get the configuration from the HTTP interface of Inlong Manager

  | Parameter   | Required | DefaultValue | Remark |
  |-------------|----------|--------------|--------|
  | clusterName | Y        | NA           | Used to uniquely identify an inlong-sort-standalone cluster      |
  | sortTasks   | Y        | NA           | Distribute task lists |

### SortTaskConfig Configuration

| Parameter  | Required | DefaultValue | Remark                                                                                                                                                |
|------------|----------|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| name       | Y        | NA           | Distribute task name                                                                                                                                  |
| type       | Y        | NA           | Distribute task types, such as `HIVE("hive")`, `TUBE("tube")`, `KAFKA("kafka")`, `PULSAR("pulsar")`, `ElasticSearch("ElasticSearch")`, `UNKNOWN("n")` |
| idParams   | Y        | NA           | Inlong data stream parameter list                                                                                                                     |
| sinkParams | Y        | NA           | Distribute task parameters                                                                                                                            |

### Hive Distributed Tasks IdParams

| Parameter                 | Required | DefaultValue | Remark                                                                                                             |
|---------------------------|----------|--------------|--------------------------------------------------------------------------------------------------------------------|
| inlongGroupId             | Y        | NA           | inlongGroupId                                                                                                      |
| inlongStreamId            | Y        | NA           | inlongStreamId                                                                                                     |
| separator                 | Y        | NA           | Delimiter                                                                                                          |
| partitionIntervalMs       | N        | 3600000      | Partition interval, in milliseconds                                                                                |
| idRootPath                | Y        | NA           | HDFS root directory of Inlong data stream                                                                          |
| partitionSubPath          | Y        | NA           | Partition subdirectories for inlong data streams                                                                   |
| hiveTableName             | Y        | NA           | Hive table name of the Inlong data stream                                                                          |
| partitionFieldName        | N        | dt           | Partition field name of the Inlong data stream                                                                     |
| partitionFieldPattern     | Y        | NA           | The partition field value format of the Inlong data stream, such as `{yyyyMMdd}`, `{yyyyMMddHH}`, `{yyyyMMddHHmm}` |
| msgTimeFieldPattern       | Y        | NA           | The field value format of the message generation time, Java time format                                            |
| maxPartitionOpenDelayHour | N        | 8            | Maximum opening delay time of the partition, in hours                                                              |

### Hive Distributed Tasks SinkParams

|  Parameter | Required  | DefaultValue  | Remark                                                                                                 |
| ------------ | ------------ | ------------ |--------------------------------------------------------------------------------------------------------|
|hdfsPath   | Y | NA  | HDFS nameNode                                                                                          |
|maxFileOpenDelayMinute   | N  | 5  | Maximum write time of a single HDFS file, in minutes                                                   |
|tokenOvertimeMinute   | N  | 60  | The maximum time it takes to create a token for a partition of a single Inlong data stream, in minutes |
|maxOutputFileSizeGb   | N  | 2  | Maximum size of a single HDFS file, in GB                                                              |
|hiveJdbcUrl   | Y  | NA  | Hive JDBC Path                                                                                         |
|hiveDatabase   | Y  | NA  | Hive Database                                                                                          |
|hiveUsername   | Y  | NA  | Hive Username                                                                                          |
|hivePassword   | Y  | NA  | Hive Password                                                                                          |

### Pulsar Distributed Tasks IdParams

| Parameter      | Required | DefaultValue | Remark         |
|----------------|----------|--------------|----------------|
| inlongGroupId  | Y        | NA           | inlongGroupId  |
| inlongStreamId | Y        | NA           | inlongStreamId |
| topic          | Y        | NA           | Pulsar Topic   |

### Pulsar Distributed Tasks SinkParams

| Parameter                                        | Required | DefaultValue | Remark                                           |
|--------------------------------------------------|----------|--------------|--------------------------------------------------|
| serviceUrl                                       | Y        | NA           | Pulsar service path                              |
| authentication                                   | Y        | NA           | Pulsar cluster authentication                    |
| enableBatching                                   | N        | true         | enableBatching                                   |
| batchingMaxBytes                                 | N        | 5242880      | batchingMaxBytes                                 |
| batchingMaxMessages                              | N        | 3000         | batchingMaxMessages                              |
| batchingMaxPublishDelay                          | N        | 1            | batchingMaxPublishDelay                          |
| maxPendingMessages                               | N        | 1000         | maxPendingMessages                               |
| maxPendingMessagesAcrossPartitions               | N        | 50000        | maxPendingMessagesAcrossPartitions               |
| sendTimeout                                      | N        | 0            | sendTimeout                                      |
| compressionType                                  | N        | NONE         | compressionType                                  |
| blockIfQueueFull                                 | N        | true         | blockIfQueueFull                                 |
| roundRobinRouterBatchingPartitionSwitchFrequency | N        | 10           | roundRobinRouterBatchingPartitionSwitchFrequency |

### Hive Configuration Example

```json
{
  "data": {
    "clusterName": "hivev3-sz-sz1",
    "sortTasks": [
      {
        "idParams": [
          {
            "inlongGroupId": "0fc00000046",
            "inlongStreamId": "",
            "separator": "|",
            "partitionIntervalMs": 3600000,
            "idRootPath": "/user/hive/warehouse/t_inlong_v1_0fc00000046",
            "partitionSubPath": "/{yyyyMMdd}/{yyyyMMddHH}",
            "hiveTableName": "t_inlong_v1_0fc00000046",
            "partitionFieldName": "dt",
            "partitionFieldPattern": "yyyyMMddHH",
            "msgTimeFieldPattern": "yyyy-MM-dd HH:mm:ss",
            "maxPartitionOpenDelayHour": 8
          },
          {
            "inlongGroupId": "03600000045",
            "inlongStreamId": "",
            "separator": "|",
            "partitionIntervalMs": 3600000,
            "idRootPath": "/user/hive/warehouse/t_inlong_v1_03600000045",
            "partitionSubPath": "/{yyyyMMdd}/{yyyyMMddHH}",
            "hiveTableName": "t_inlong_v1_03600000045",
            "partitionFieldName": "dt",
            "partitionFieldPattern": "yyyyMMddHH",
            "msgTimeFieldPattern": "yyyy-MM-dd HH:mm:ss",
            "maxPartitionOpenDelayHour": 8
          },
          {
            "inlongGroupId": "05100054990",
            "inlongStreamId": "",
            "separator": "|",
            "partitionIntervalMs": 3600000,
            "idRootPath": "/user/hive/warehouse/t_inlong_v1_05100054990",
            "partitionSubPath": "/{yyyyMMdd}/{yyyyMMddHH}",
            "hiveTableName": "t_inlong_v1_05100054990",
            "partitionFieldName": "dt",
            "partitionFieldPattern": "yyyyMMddHH",
            "msgTimeFieldPattern": "yyyy-MM-dd HH:mm:ss",
            "maxPartitionOpenDelayHour": 8
          },
          {
            "inlongGroupId": "09c00014434",
            "inlongStreamId": "",
            "separator": "|",
            "partitionIntervalMs": 3600000,
            "idRootPath": "/user/hive/warehouse/t_inlong_v1_09c00014434",
            "partitionSubPath": "/{yyyyMMdd}/{yyyyMMddHH}",
            "hiveTableName": "t_inlong_v1_09c00014434",
            "partitionFieldName": "dt",
            "partitionFieldPattern": "yyyyMMddHH",
            "msgTimeFieldPattern": "yyyy-MM-dd HH:mm:ss",
            "maxPartitionOpenDelayHour": 8
          },
          {
            "inlongGroupId": "0c900035509",
            "inlongStreamId": "",
            "separator": "|",
            "partitionIntervalMs": 3600000,
            "idRootPath": "/user/hive/warehouse/t_inlong_v1_0c900035509",
            "partitionSubPath": "/{yyyyMMdd}/{yyyyMMddHH}",
            "hiveTableName": "t_inlong_v1_0c900035509",
            "partitionFieldName": "dt",
            "partitionFieldPattern": "yyyyMMddHH",
            "msgTimeFieldPattern": "yyyy-MM-dd HH:mm:ss",
            "maxPartitionOpenDelayHour": 8
          }
        ],
        "name": "sid_hive_inlong6th_v3",
        "sinkParams": {
          "hdfsPath": "hdfs://127.0.0.1:9000",
          "maxFileOpenDelayMinute": "5",
          "tokenOvertimeMinute": "60",
          "maxOutputFileSizeGb": "2",
          "hiveJdbcUrl": "jdbc:hive2://127.0.0.2:10000",
          "hiveDatabase": "default",
          "hiveUsername": "hive",
          "hivePassword": "hive"
        },
        "type": "HIVE"
      }
    ]
  },
  "errCode": 0,
  "md5": "md5",
  "result": true
}
```