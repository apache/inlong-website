---
title: Pulsar To Hive Example
sidebar_position: 3
---
## Prepare To Get Module Archive

Module archive is in the directory:`inlong-sort-standalone/sort-standalone-dist/target/`, the archive file is `apache-inlong-sort-standalone-${project.version}-bin.tar.gz`.

## Prepare To Modify Configuration File

At first, decompress the archive file, copy three files in the directory `conf/hive/` to the directory `conf/`.

- conf/common.properties, common configuration of all components.
- conf/SortClusterConfig.conf, sink configuration of all sort tasks.
- conf/sid_hive_inlong6th_v3.conf, data source configuration example of a sort task, the file name is same with sort task name in SortClusterConfig.conf.

### Example: conf/common.properties

```properties
# inlong-sort-standalone cluster id
clusterId=hivev3-sz-sz1
# Current node ID
nodeId=nodeId
# Domain name of metric 
metricDomains=Sort
# Class name list of metric listener, separated by space
metricDomains.Sort.domainListeners=org.apache.inlong.sort.standalone.metrics.prometheus.PrometheusMetricListener
# Interval snapshoting metric data(millisecond)
metricDomains.Sort.snapshotInterval=60000
# Channel class name 
sortChannel.type=org.apache.inlong.sort.standalone.channel.BufferQueueChannel
# Sink class name. Different distribution types use different Sink classes 
sortSink.type=org.apache.inlong.sort.standalone.sink.hive.HiveSink
# Source class name 
sortSource.type=org.apache.inlong.sort.standalone.source.sortsdk.SortSdkSource
# There are three ways to load cluster configuration data: [file, Manager, custom class].
sortClusterConfig.type=file
# When the cluster configuration data is loaded from a file, the name of the configuration file in the classpath
sortClusterConfig.file=SortClusterConfig.conf
# There are three ways to load the Sort task configuration data: [file, Manager, custom class]
sortSourceConfig.QueryConsumeConfigType=file
```

### Example: conf/SortClusterConfig.conf

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


### Example: conf/sid_hive_inlong6th_v3.conf

```json
{
  "sortClusterName": "hivev3-sz-sz1",
  "sortTaskId": "sid_hive_inlong6th_v3",
  "cacheZones": {
    "pc_inlong6th_sz1": {
      "zoneName": "${PULSAR_CLUSTER_NAME}",
      "serviceUrl": "http://${PULSAR_IP}:${PULSAR_PORT}",
      "authentication": "${PULSAR_AUTH}",
      "topics": [
        {
          "topic": "${TENANT/NAMESPACE/TOPIC}",
          "partitionCnt": 10,
          "topicProperties": {}
        }
      ],
      "cacheZoneProperties": {},
      "zoneType": "pulsar"
    }
  }
}
```

## Configuration For conf/common.properties

| Parameter                               | Required | DefaultValue                                                                  | Remark                                                                                                                                                                                                                                     |
|-----------------------------------------|----------|-------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| clusterId                               | Y        | NA                                                                            | inlong-sort-standalone collection unique identification                                                                                                                                                                                    |
| nodeId                                  | N        | Localhost IP                                                                  | Current node ID                                                                                                                                                                                                                            |
| metricDomains                           | N        | Sort                                                                          | Index summary name                                                                                                                                                                                                                         |
| metricDomains.Sort.domainListeners      | N        | org.apache.inlong.sort.standalone.metrics.prometheus.PrometheusMetricListener | List of indexes and list of equipment categories, empty case interval                                                                                                                                                                      |
| metricDomains.Sort.snapshotInterval     | N        | 60000                                                                         | The retry timeout for subscribing to a tube, in ms                                                                                                                                                                                         |
| prometheusHttpPort                      | N        | 8080                                                                          | Parameters of org.apache.inlong.sort.standalone.metrics.prometheus.PrometheusMetricListener, HttpServer port of Prometheus                                                                                                                 |
| sortChannel.type                        | N        | org.apache.inlong.sort.standalone.channel.BufferQueueChannel                  | Channel type                                                                                                                                                                                                                               |
| sortSink.type                           | Y        | NA                                                                            | Sink class name. Different distribution types use different Sink classes.                                                                                                                                                                  |
| sortSource.type                         | N        | org.apache.inlong.sort.standalone.source.sortsdk.SortSdkSource                | Source class name                                                                                                                                                                                                                          |
| sortClusterConfig.type                  | N        | manager                                                                       | There are three ways to load cluster configuration data: [file, Manager, custom class].                                                                                                                                                    |
| sortClusterConfig.file                  | N        | SortClusterConfig.conf                                                        | When the cluster configuration data is loaded from a file, the name of the configuration file in the classpath                                                                                                                             |
| sortClusterConfig.managerUrl            | N        | NA                                                                            | When the cluster configuration data is loaded from the manager, define the URL of InlongManager here<br/>For example: http://${manager ip:port}/api/inlong/manager/openapi/sort/standalone/getClusterConfig                                |
| sortSourceConfig.QueryConsumeConfigType | N        | manager                                                                       | There are three ways to load the Sort task configuration data: [file, Manager, custom class]. <br/> If the loading path is file, the Sort task configuration file is in the class path, and the file name format is: `${sortTaskId}.conf`. |
| sortSourceConfig.managerUrl             | N        | NA                                                                            | When the Sort task configuration data loading source is manager, define the URL of InlongManager here<br/>For example::http://${manager ip:port}/api/inlong/manager/openapi/sort/standalone/getSortSource                                  |

## Configuration For SortClusterConfig.conf

- SortClusterConfig.conf source file in ClassPath, but does not support real-time updates
- Can obtain configuration from the HTTP interface of Inlong Manager, supporting real-time updates

| Parameter   | Required | Types                           | DefaultValue | Remark                                           |
|-------------|----------|---------------------------------|--------------|--------------------------------------------------|
| clusterName | Y        | String                          | NA           | inlong-sort-standalone cluster unique identifier |
| sortTasks   | Y        | JsonArray&lt;SortTaskConfig&gt; | NA           | Sort task list                                   |

### Configuration For SortTaskConfig

| Parameter  | Required | DefaultValue | Remark                                                                                                                                         |
|------------|----------|--------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| name       | Y        | NA           | Sort task name                                                                                                                                 |
| type       | Y        | NA           | Sort assignment type, like: `HIVE("hive")`, `TUBE("tube")`, `KAFKA("kafka")`, `PULSAR("pulsar")`, ElasticSearch("ElasticSearch"), UNKNOWN("n") |
| idParams   | Y        | NA           | Inlong data stream parameter list                                                                                                              |
| sinkParams | Y        | NA           | Sort task parameters                                                                                                                           |

### IdParams Configuration For Sort-Hive Task

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

### SinkParams Configuration For Sort-Hive Task

| Parameter              | Required | DefaultValue | Remark                                                                                                 |
|------------------------|----------|--------------|--------------------------------------------------------------------------------------------------------|
| hdfsPath               | Y        | NA           | HDFS nameNode                                                                                          |
| maxFileOpenDelayMinute | N        | 5            | Maximum write time of a single HDFS file, in minutes                                                   |
| tokenOvertimeMinute    | N        | 60           | The maximum time it takes to create a token for a partition of a single Inlong data stream, in minutes |
| maxOutputFileSizeGb    | N        | 2            | Maximum size of a single HDFS file, in GB                                                              |
| hiveJdbcUrl            | Y        | NA           | Hive JDBC Path                                                                                         |
| hiveDatabase           | Y        | NA           | Hive Database                                                                                          |
| hiveUsername           | Y        | NA           | Hive Username                                                                                          |
| hivePassword           | Y        | NA           | Hive Password                                                                                          |

## `sid_hive_inlong6th_v3.conf` Configuration For Sort-Hive Task

- File name format: Sort task name + `.conf`.
- Can read from the SortClusterConfig.conf source file in the ClassPath, but does not support live updates.
- Can be obtained from the HTTP interface of Inlong Manager, which supports real-time updates.

### Configuration For sid_hive_inlong6th_v3.conf

| Parameter       | Required | Type                                 | DefaultValue | Remark                                                                      |
|-----------------|----------|--------------------------------------|--------------|-----------------------------------------------------------------------------|
| sortClusterName | Y        | String                               | NA           | inlong-sort-standalone Unique identifier of the cluster                     |
| sortTaskId      | Y        | String                               | NA           | Sort task name                                                              |
| cacheZones      | Y        | JsonObject&lt;String, JsonObject&gt; | NA           | Cache layer cluster list, format: Map&lt;cacheClusterName, CacheCluster&gt; |

### Configuration For CacheCluster

| Parameter           | Required | Type                     | DefaultValue | Remark                                                |
|---------------------|----------|--------------------------|--------------|-------------------------------------------------------|
| zoneName            | Y        | String                   | NA           | Cache layer cluster name                              |
| zoneType            | Y        | String                   | NA           | Cache type: [pulsar,tube,kafka]                       |
| serviceUrl          | Y        | String                   | NA           | Pulsar's serviceUrl parameter, or Kafka's Broker list |
| authentication      | Y        | String                   | NA           | Pulsar Authentication                                 |
| cacheZoneProperties | N        | Map&lt;String,String&gt; | NA           | Cache layer Consumer parameters                       |
| topics              | N        | List&lt;Topic&gt;        | NA           | List of topics consumed by the cache layer            |

### Configuration For Topic

| Parameter       | Required | Type                     | DefaultValue | Remark                                          |
|-----------------|----------|--------------------------|--------------|-------------------------------------------------|
| topic           | Y        | String                   | NA           | Topic full name, Pulsar: tenant/namespace/topic |
| partitionCnt    | Y        | Integer                  | NA           | Number of Topic Partitions                      |
| topicProperties | N        | Map&lt;String,String&gt; | NA           | Consumer parameters of cache layer topics       |

## Start inlong-sort-standalone Application

Finally, execute the script `./bin/sort-start.sh` to start the sort-standalone application. 
You can then check the log file sort.log to confirm the startup status.