---
title: Pulsar To Elasticsearch Example
sidebar_position: 4
---
## Prepare To Get Module Archive

Module archive is in the directory:`inlong-sort-standalone/sort-standalone-dist/target/`, the archive file is `apache-inlong-sort-standalone-${project.version}-bin.tar.gz`.

## Prepare To Modify Configuration File

At first, decompress the archive file, copy three files in the directory `conf/es/` to the directory `conf/`.

- conf/common.properties, common configuration of all components.
- conf/SortClusterConfig.conf, sink configuration of all sort tasks.
- conf/sid_es_v3.conf, data source configuration example of a sort task, the file name is same with sort task name in SortClusterConfig.conf.

### Example: conf/common.properties

```properties
# inlong-sort-standalone cluster id
clusterId=esv3-sz-sz1
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
sortSink.type=org.apache.inlong.sort.standalone.sink.elasticsearch.EsSink
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
  "clusterName": "esv3-gz-gz1",
  "sortTasks": [
    {
      "name": "sid_es_v3",
      "type": "ES",
      "idParams": [
        {
          "indexNamePattern": "inlong0fc00000046_{yyyyMMdd}",
          "contentOffset": "0",
          "inlongGroupId": "testgroup",
          "fieldOffset": "0",
          "fieldNames": "ftime extinfo t1 t2 t3 t4",
          "inlongStreamId": "0fc00000046",
          "separator": "|"
        }
      ],
      "sinkParams": {
        "httpHosts": "ip:port",
        "password": "password",
        "bulkSizeMb": "10",
        "flushInterval": "60",
        "keywordMaxLength": "32767",
        "bulkAction": "4000",
        "concurrentRequests": "5",
        "maxConnect": "10",
        "isUseIndexId": "false",
        "username": "elastic"
      }
    }
  ]
}
```

### Example: conf/sid_es_v3.conf

```json
{
  "sortClusterName": "esv3-gz-gz1",
  "sortTaskId": "sid_es_v3",
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

## Configuration for conf/common.properties

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

### IdParams Configuration For Sort-Elasticsearch

| Parameter        | Required | DefaultValue | Remark                                                                                                            |
|------------------|----------|--------------|-------------------------------------------------------------------------------------------------------------------|
| inlongGroupId    | Y        | NA           | inlongGroupId                                                                                                     |
| inlongStreamId   | Y        | NA           | inlongStreamId                                                                                                    |
| separator        | Y        | NA           | Delimiter                                                                                                         |
| fieldNames       | Y        | NA           | Elasticsearch Index field list, separated by spaces                                                               |
| indexNamePattern | Y        | NA           | Index name template supports three date and time format variables: `{yyyyMMdd}`, `{yyyyMMddHH}`, `{yyyyMMddHHmm}` |
| contentOffset    | Y        | NA           | The valid field start offset of the source data, starting from 0                                                  |
| fieldOffset      | Y        | NA           | The starting offset of the Elasticsearch Index field list                                                         |

### SinkParams Configuration For Sort-Elasticsearch

| Parameter          | Required | DefaultValue | Remark                                                                |
|--------------------|----------|--------------|-----------------------------------------------------------------------|
| httpHosts          | Y        | NA           | Elasticsearch host IP port                                            |
| username           | Y        | NA           | Elasticsearch Username                                                |
| password           | Y        | NA           | Elasticsearch Password                                                |
| isUseIndexId       | N        | false        | Whether to create IndexId affects the distribution of Index fragments |
| bulkSizeMb         | N        | 10           | The maximum size of a single bulk, in MB                              |
| flushInterval      | N        | 60           | The interval between disk flushing, in seconds                        |
| keywordMaxLength   | N        | 32767        | The maximum length of a single keyword, in bytes                      |
| bulkAction         | N        | 4000         | Maximum number of IndexRequests for a single Bulk                     |
| maxConnect         | N        | 10           | Maximum number of HTTP connections                                    |
| concurrentRequests | N        | 5            | The maximum number of pending requests for a single HTTP connection   |

## `sid_es_v3.conf` Configuration For Sort-Elasticsearch Task

- File name format: Sort task name + `.conf`.
- Can read from the SortClusterConfig.conf source file in the ClassPath, but does not support live updates.
- Can be obtained from the HTTP interface of Inlong Manager, which supports real-time updates.

### Configuration For sid_es_v3.conf

| Parameter       | Required | Type                                 | DefaultValue | Remark                                               |
|-----------------|----------|--------------------------------------|--------------|------------------------------------------------------|
| sortClusterName | Y        | String                               | NA           | inlong-sort-standalone cluster unique identifier     |
| sortTaskId      | Y        | String                               | NA           | Sort task name                                       |
| cacheZones      | Y        | JsonObject&lt;String, JsonObject&gt; | NA           | 缓存层集群列表，格式：Map&lt;cacheClusterName, CacheCluster&gt; |

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

