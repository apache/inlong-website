---
title: Pulsar2Elasticsearch Example
sidebar_position: 4
---
## Prepare to get module archive
Module archive is in the directory:inlong-sort-standalone/sort-standalone-dist/target/, the archive file is apache-inlong-sort-standalone-${project.version}-bin.tar.gz.

## Prepare to modify configuration file
At first, decompress the archive file, copy three files in the directory "conf/es/" to the directory "conf/".

- conf/common.properties, common configuration of all components.
- conf/SortClusterConfig.conf, sink configuration of all sort tasks.
- conf/sid_es_v3.conf, data source configuration example of a sort task, the file name is same with sort task name in SortClusterConfig.conf.

### Example: conf/common.properties

```properties
clusterId=esv3-sz-sz1
nodeId=nodeId
metricDomains=Sort
metricDomains.Sort.domainListeners=org.apache.inlong.sort.standalone.metrics.prometheus.PrometheusMetricListener
metricDomains.Sort.snapshotInterval=60000
sortChannel.type=org.apache.inlong.sort.standalone.channel.BufferQueueChannel
sortSink.type=org.apache.inlong.sort.standalone.sink.elasticsearch.EsSink
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
	"clusterName": "esv3-gz-gz1",
	"sortTasks": [{
		"name": "sid_es_v3",
		"type": "ES",
		"idParams": [{
			"indexNamePattern": "inlong0fc00000046_{yyyyMMdd}",
			"contentOffset": "0",
			"inlongGroupId": "testgroup",
			"fieldOffset": "0",
			"fieldNames": "ftime extinfo t1 t2 t3 t4",
			"inlongStreamId": "0fc00000046",
			"separator": "|"
		}],
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
	}]
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

