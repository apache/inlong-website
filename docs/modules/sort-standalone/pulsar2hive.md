---
title: Pulsar2Hive Example
sidebar_position: 3
---
## Prepare to get module archive
Module archive is in the directory:inlong-sort-standalone/sort-standalone-dist/target/, the archive file is apache-inlong-sort-standalone-${project.version}-bin.tar.gz.

## Prepare to modify configuration file
At first, decompress the archive file, copy three files in the directory "conf/hive/" to the directory "conf/".

- conf/common.properties, common configuration of all components.
- conf/SortClusterConfig.conf, sink configuration of all sort tasks.
- conf/sid_hive_inlong6th_v3.conf, data source configuration example of a sort task, the file name is same with sort task name in SortClusterConfig.conf.

### Example: conf/common.properties

```properties
clusterId=hivev3-sz-sz1
nodeId=nodeId
metricDomains=Sort
metricDomains.Sort.domainListeners=org.apache.inlong.sort.standalone.metrics.prometheus.PrometheusMetricListener
metricDomains.Sort.snapshotInterval=60000
sortChannel.type=org.apache.inlong.sort.standalone.channel.BufferQueueChannel
sortSink.type=org.apache.inlong.sort.standalone.sink.hive.HiveSink
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
	"data":{
		"clusterName":"hivev3-sz-sz1",
		"sortTasks":[
			{
				"idParams":[
					{
						"inlongGroupId":"0fc00000046",
						"inlongStreamId":"",
						"separator":"|",
						"partitionIntervalMs":3600000,
						"idRootPath":"/user/hive/warehouse/t_inlong_v1_0fc00000046",
						"partitionSubPath":"/{yyyyMMdd}/{yyyyMMddHH}",
						"hiveTableName":"t_inlong_v1_0fc00000046",
						"partitionFieldName":"dt",
						"partitionFieldPattern":"yyyyMMddHH",
						"msgTimeFieldPattern":"yyyy-MM-dd HH:mm:ss",
						"maxPartitionOpenDelayHour":8
					},
					{
						"inlongGroupId":"03600000045",
						"inlongStreamId":"",
						"separator":"|",
						"partitionIntervalMs":3600000,
						"idRootPath":"/user/hive/warehouse/t_inlong_v1_03600000045",
						"partitionSubPath":"/{yyyyMMdd}/{yyyyMMddHH}",
						"hiveTableName":"t_inlong_v1_03600000045",
						"partitionFieldName":"dt",
						"partitionFieldPattern":"yyyyMMddHH",
						"msgTimeFieldPattern":"yyyy-MM-dd HH:mm:ss",
						"maxPartitionOpenDelayHour":8
					},
					{
						"inlongGroupId":"05100054990",
						"inlongStreamId":"",
						"separator":"|",
						"partitionIntervalMs":3600000,
						"idRootPath":"/user/hive/warehouse/t_inlong_v1_05100054990",
						"partitionSubPath":"/{yyyyMMdd}/{yyyyMMddHH}",
						"hiveTableName":"t_inlong_v1_05100054990",
						"partitionFieldName":"dt",
						"partitionFieldPattern":"yyyyMMddHH",
						"msgTimeFieldPattern":"yyyy-MM-dd HH:mm:ss",
						"maxPartitionOpenDelayHour":8
					},
					{
						"inlongGroupId":"09c00014434",
						"inlongStreamId":"",
						"separator":"|",
						"partitionIntervalMs":3600000,
						"idRootPath":"/user/hive/warehouse/t_inlong_v1_09c00014434",
						"partitionSubPath":"/{yyyyMMdd}/{yyyyMMddHH}",
						"hiveTableName":"t_inlong_v1_09c00014434",
						"partitionFieldName":"dt",
						"partitionFieldPattern":"yyyyMMddHH",
						"msgTimeFieldPattern":"yyyy-MM-dd HH:mm:ss",
						"maxPartitionOpenDelayHour":8
					},
					{
						"inlongGroupId":"0c900035509",
						"inlongStreamId":"",
						"separator":"|",
						"partitionIntervalMs":3600000,
						"idRootPath":"/user/hive/warehouse/t_inlong_v1_0c900035509",
						"partitionSubPath":"/{yyyyMMdd}/{yyyyMMddHH}",
						"hiveTableName":"t_inlong_v1_0c900035509",
						"partitionFieldName":"dt",
						"partitionFieldPattern":"yyyyMMddHH",
						"msgTimeFieldPattern":"yyyy-MM-dd HH:mm:ss",
						"maxPartitionOpenDelayHour":8
					}
				],
				"name":"sid_hive_inlong6th_v3",
				"sinkParams":{
					"hdfsPath":"hdfs://127.0.0.1:9000",
					"maxFileOpenDelayMinute":"5",
					"tokenOvertimeMinute":"60",
					"maxOutputFileSizeGb":"2",
					"hiveJdbcUrl":"jdbc:hive2://127.0.0.2:10000",
					"hiveDatabase":"default",
					"hiveUsername":"hive",
					"hivePassword":"hive"
				},
				"type":"HIVE"
			}
		]
	},
	"errCode":0,
	"md5":"md5",
	"result":true
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

