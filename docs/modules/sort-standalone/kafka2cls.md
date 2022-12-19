---
title: Kafka2Cls Example
sidebar_position: 5
---

## Prepare to get module archive
Module archive is in the directory:inlong-sort-standalone/sort-standalone-dist/target/, the archive file is apache-inlong-sort-standalone-${project.version}-bin.tar.gz.

## Prepare to modify configuration file
At first, decompress the archive file, copy three files in the directory "conf/cls/" to the directory "conf/".

- conf/common.properties, common configuration of all components.
- conf/SortClusterConfig.conf, sink configuration of all sort tasks.
- conf/sid_cls_v3.conf, data source configuration example of a sort task, the file name is same with sort task name in SortClusterConfig.conf.

### Example: conf/common.properties
```
clusterId=clsv3-sz-sz1
nodeId=nodeId
metricDomains=Sort
metricDomains.Sort.domainListeners=org.apache.inlong.sort.standalone.metrics.prometheus.PrometheusMetricListener
metricDomains.Sort.snapshotInterval=60000
sortChannel.type=org.apache.inlong.sort.standalone.channel.BufferQueueChannel
sortSink.type=org.apache.inlong.sort.standalone.sink.cls.ClsSink
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
```
{
	"data":{
		"clusterName":"clsv3-sz-sz1",
		"sortTasks":[
			{
				"idParams":[
					{
						"inlongGroupId":"0fc00000046",
						"inlongStreamId":"",
						"endpoint":"edp.com",
						"secretId":"id-abcd",
						"secretKey":"key-abcd",
						"topicId":"topic_of_0fc00000046",
						"fieldNames":"f1 f2 f3 f4 f5",
						"fieldOffset":"0",
						"contentOffset":"0"
					},
					{
						"inlongGroupId":"03600000045",
						"inlongStreamId":"",
						"endpoint":"edp.com",
						"secretId":"id-abcd",
						"secretKey":"key-abcd",
						"topicId":"topic_of_03600000045",
						"fieldNames":"f1 f2 f3 f4 f5",
						"fieldOffset":"0",
						"contentOffset":"0"
					},
					{
						"inlongGroupId":"05100054990",
						"inlongStreamId":"",
						"endpoint":"edp.com",
						"secretId":"id-abcd",
						"secretKey":"key-abcd",
						"topicId":"topic_of_05100054990",
						"fieldNames":"f1 f2 f3 f4 f5",
						"fieldOffset":"0",
						"contentOffset":"0"
					},
					{
						"inlongGroupId":"09c00014434",
						"inlongStreamId":"",
						"endpoint":"edp.com",
						"secretId":"id-abcd",
						"secretKey":"key-abcd",
						"topicId":"topic_of_09c00014434",
						"fieldNames":"f1 f2 f3 f4 f5",
						"fieldOffset":"0",
						"contentOffset":"0"
					},
					{
						"inlongGroupId":"0c900035509",
						"inlongStreamId":"",
						"endpoint":"edp.com",
						"secretId":"id-abcd",
						"secretKey":"key-abcd",
						"topicId":"topic_of_0c900035509",
						"fieldNames":"f1 f2 f3 f4 f5",
						"fieldOffset":"0",
						"contentOffset":"0"
					}
				],
				"name":"sid_hive_inlong6th_v3",
				"sinkParams":{
					"separator":"|",
					"maxSendThreadCount":"50",
					"maxBlockSec":"0",
					"maxBatchCount":"4096",
					"lingerMs":"2000",
					"retries":"0",
					"maxReservedAttempts":"11",
					"baseRetryBackoffMs":"100",
					"maxRetryBackoffMs":"50"
				},
				"type":"CLS"
			}
		]
	},
	"errCode":0,
	"md5":"md5",
	"result":true
}
```
### Example: conf/sid_cls_inlong6th_v3.conf

```
{
	"sortClusterName": "clsv3-sz-sz1",
	"sortTaskId": "sid_cls_inlong6th_v3",
	"cacheZones": {
		"pc_atta6th_sz1": {
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