---
title: Pulsar To kafka Example
sidebar_position: 5
---

## Prepare To Get Module Archive

Module archive is in the directory:`inlong-sort-standalone/sort-standalone-dist/target/`, the archive file is `apache-inlong-sort-standalone-${project.version}-bin.tar.gz`.

## Prepare To Modify Configuration File

At first, decompress the archive file, copy three files in the directory `conf/kafka/` to the directory `conf/`.

- conf/common.properties, common configuration of all components.
- conf/SortClusterConfig.conf, sink configuration of all sort tasks.
- conf/sid_kafka_v3.conf, data source configuration example of a sort task, the file name is same with sort task name in SortClusterConfig.conf.


### Example: conf/common.properties

```properties
# inlong-sort-standalone cluster id
clusterId=kafkav3-sz-sz1
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
sortSink.type=org.apache.inlong.sort.standalone.sink.kafka.KafkaSink
# Source class name 
sortSource.type=org.apache.inlong.sort.standalone.source.sortsdk.SortSdkSource
# The distribution cluster configuration loading class name
sortClusterConfig.type=file
# When the cluster configuration data is loaded from a file, the name of the configuration file in the classpath
sortClusterConfig.file=SortClusterConfig.conf
# There are three ways to load the Sort task configuration data: [file, Manager, custom class]
sortSourceConfig.QueryConsumeConfigType=file
```

### Example: conf/SortClusterConfig.conf

```json
{
  "clusterName": "kafkav3-gz-gz1",
  "sortTasks": [
    {
      "name": "sid_kafka_v3",
      "type": "KAFKA",
      "idParams": [
        {
          "topic": "the kafka topic report to",
          "inlongGroupId": "0fc00000046",
          "inlongStreamId": "1"
        }
      ],
      "sinkParams": {
        "client.id": "client_id",
        "bootstrap.servers": "127.0.0.1:10005"
      }
    }
  ]
}
```

### Example: conf/sid_kafka_v3.conf

```json
{
  "sortClusterName": "kafkav3-gz-gz1",
  "sortTaskId": "sid_kafka_v3",
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
