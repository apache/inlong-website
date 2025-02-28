---
title: Pulsar 到 kafka 示例
sidebar_position: 5
---

## 准备安装文件

安装文件在`inlong-sort-standalone/sort-standalone-dist/target/`目录下，文件名是`apache-inlong-sort-standalone-${project.version}-bin.tar.gz`。

## 准备修改配置文件

首先，解压压缩包`apache-inlong-sort-standalone-${project.version}-bin.tar.gz`，然后从目录 `conf/kafka/` 下拷贝3个文件到目录 `conf/`。

- conf/common.properties，所有组件的基本配置参数。
- conf/SortClusterConfig.conf，所有Sort任务的sink配置。, sink configuration of all sort tasks。
- conf/sid_kafka_v3.conf，一个Sort任务的数据源配置，文件名和配置文件SortClusterConfig.conf中的Sort任务名一致，如果SortClusterConfig.conf中配置了多个Sort任务，那么会有多个Sort任务的数据源配置。


### conf/common.properties 配置样例

```properties
# inlong-sort-standalone集群唯一标识
clusterId=kafkav3-sz-sz1
# 当前节点ID
nodeId=nodeId
# 指标汇总域名
metricDomains=Sort
# 指标汇总监听器类名列表，空格分隔
metricDomains.Sort.domainListeners=org.apache.inlong.sort.standalone.metrics.prometheus.PrometheusMetricListener
# 订阅tube的重试超时时间，单位为ms
metricDomains.Sort.snapshotInterval=60000
# Channel类型
sortChannel.type=org.apache.inlong.sort.standalone.channel.BufferQueueChannel
# Sink类名，不同的分发类型使用不同的Sink类
sortSink.type=org.apache.inlong.sort.standalone.sink.kafka.KafkaSink
# Source类名
sortSource.type=org.apache.inlong.sort.standalone.source.sortsdk.SortSdkSource
# 集群配置数据的加载来源，有三种方式：[文件，Manager，自定义类]。
sortClusterConfig.type=file
# 当集群配置数据加载来源是file时，在类路径下的配置文件名
sortClusterConfig.file=SortClusterConfig.conf
# Sort任务配置数据的加载来源，有三种方式：[文件，Manager，自定义类]
sortSourceConfig.QueryConsumeConfigType=file
```

### conf/SortClusterConfig.conf 配置样例

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

### conf/sid_kafka_v3.conf 配置样例

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