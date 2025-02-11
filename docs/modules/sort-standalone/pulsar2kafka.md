---
title: Pulsar2kafka Example
sidebar_position: 5
---

## Prepare to get module archive
Module archive is in the directory:inlong-sort-standalone/sort-standalone-dist/target/, the archive file is apache-inlong-sort-standalone-${project.version}-bin.tar.gz.

## Prepare to modify configuration file
At first, decompress the archive file, copy three files in the directory "conf/kafka/" to the directory "conf/".

- conf/common.properties, common configuration of all components.
- conf/SortClusterConfig.conf, sink configuration of all sort tasks.
- conf/sid_kafka_v3.conf, data source configuration example of a sort task, the file name is same with sort task name in SortClusterConfig.conf.


### Example: conf/common.properties

```properties
clusterId=kafkav3-sz-sz1
nodeId=nodeId
metricDomains=Sort
metricDomains.Sort.domainListeners=org.apache.inlong.sort.standalone.metrics.prometheus.PrometheusMetricListener
metricDomains.Sort.snapshotInterval=60000
sortChannel.type=org.apache.inlong.sort.standalone.channel.BufferQueueChannel
sortSink.type=org.apache.inlong.sort.standalone.sink.kafka.KafkaSink
sortSource.type=org.apache.inlong.sort.standalone.source.sortsdk.SortSdkSource

sortClusterConfig.type=file
sortClusterConfig.file=SortClusterConfig.conf
sortSourceConfig.QueryConsumeConfigType=file

# manager config example
#sortClusterConfig.type=manager
#sortSourceConfig.QueryConsumeConfigType=manager
#managerUrlLoaderType=org.apache.inlong.sort.standalone.config.loader.CommonPropertiesManagerUrlLoader
#sortClusterConfig.managerUrl=http://${manager_ip:port}/api/inlong/manager/openapi/sort/getClusterConfig
#sortSourceConfig.managerUrl=http://${manager_ip:port}/api/inlong/manager/openapi/sort/getSortSource
```

### Example: conf/SortClusterConfig.conf

```json
{
	"clusterName": "kafkav3-gz-gz1",
	"sortTasks": [{
		"name": "sid_kafka_v3",
		"type": "KAFKA",
		"idParams": [{
			"topic": "the kafka topic report to",
			"inlongGroupId": "0fc00000046",
			"inlongStreamId": "1"
		}],
		"sinkParams": {
			"client.id": "client_id",
			"bootstrap.servers": "127.0.0.1:10005"
		}
	}]
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
			"topics": [{
				"topic": "${TENANT/NAMESPACE/TOPIC}",
				"partitionCnt": 10,
				"topicProperties": {}
			}],
			"cacheZoneProperties": {},
			"zoneType": "pulsar"
		}
	}
}
```
