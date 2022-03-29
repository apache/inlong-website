---
title: Elasticsearch Example
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

```
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
#sortTaskId.conf

#sortClusterConfig.type=manager
#sortSourceConfig.QueryConsumeConfigType=manager
#managerUrlLoaderType=org.apache.inlong.sort.standalone.config.loader.CommonPropertiesManagerUrlLoader
#sortClusterConfig.managerUrl=http://${manager_ip:port}/api/inlong/manager/openapi/sort/getClusterConfig
#sortSourceConfig.managerUrl=http://${manager_ip:port}/api/inlong/manager/openapi/sort/getSortSource
```

### Example: conf/SortClusterConfig.conf

```
{
	"clusterName": "esv3-gz-gz1",
	"sortTasks": [{
		"name": "sid_es_v3",
		"type": "ES",
		"idParams": [{
			"indexNamePattern": "inlong0fc00000046_{yyyyMMdd}",
			"contentOffset": "0",
			"inlongGroupId": "atta",
			"fieldOffset": "2",
			"fieldNames": "ftime extinfo t1 t2 t3 t4",
			"inlongStreamId": "0fc00000046",
			"separator": "|"
		}],
		"sinkParams": {
			"httpHosts": "11.187.135.221:9200",
			"password": "yingyan@ES",
			"auditSetName": "es-rmrv7g7a",
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

```
{
	"sortClusterName": "esv3-gz-gz1",
	"sortTaskId": "sid_es_v3",
	"cacheZones": {
		"pc_atta6th_sz1": {
			"zoneName": "pc_atta6th_sz1",
			"serviceUrl": "http://9.139.53.86:8080",
			"authentication": "eyJrZXlJZCI6InB1bHNhci04MnhhN24zZWs1ZHciLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwdWxzYXItODJ4YTduM2VrNWR3X2FkbWluIn0.D5H_j8UQk8KYWHw_mzq2HmR393SnbL5Gz7JYCANBPnI",
			"topics": [{
				"topic": "pulsar-82xa7n3ek5dw/atta/atta_topic_1",
				"partitionCnt": 10,
				"topicProperties": {}
			}],
			"cacheZoneProperties": {},
			"zoneType": "pulsar"
		}
	}
}
```

## Modify configuration file:conf/common.properties

|  Parameter | Required  | DefaultValue  |Remark   |
| ------------ | ------------ | ------------ | ------------ |
|clusterId   | Y | NA  |  inlong-sort-standalone cluster id |
|nodeId   | N | Local IP  |  Current node id |
|metricDomains | N | Sort | domain name of metric |
|metricDomains.Sort.domainListeners | N | org.apache.inlong.sort.standalone.metrics.prometheus.PrometheusMetricListener | class name list of metric listener, separated by space |
|metricDomains.Sort.snapshotInterval | N | 60000 | interval snapshoting metric data(millisecond) |
|prometheusHttpPort | N | 8080 | HTTP server port of prometheus simple client |
|sortChannel.type   | N | org.apache.inlong.sort.standalone.channel.BufferQueueChannel  |  Channel class name  |
|sortSink.type   | Y | NA | Sink class name  |
|sortSource.type   | N | org.apache.inlong.sort.standalone.source.sortsdk.SortSdkSource  | Source class name  |
|sortClusterConfig.type   | N | manager  | Loader source of cluster configuration data: [file,manager,UserDefinedClassName]. |
|sortClusterConfig.file   | N | SortClusterConfig.conf  | File name in class resource when sortClusterConfig.type=file. |
|sortClusterConfig.managerUrl   | N  | NA  | The parameter is the cluster configuration URL of InlongManager when sortClusterConfig.type=manager. <br/>For example:http://${manager ip:port}/api/inlong/manager/openapi/sort/standalone/getClusterConfig  |
|sortSourceConfig.QueryConsumeConfigType   | N | manager  | Loader source of sort task configuration data: [file,manager,UserDefinedClassName]. <br/>Sort task configuration file is ${sortTaskId}.conf in the class resource when sortSourceConfig.QueryConsumeConfigType=file. |
|sortSourceConfig.managerUrl   | N  | NA  | The parameter is the sort task configuration URL of InlongManager when sortClusterConfig.type=manager. <br/>For example:http://${manager ip:port}/api/inlong/manager/openapi/sort/standalone/getSortSource |

## Modify configuration file: SortClusterConfig.conf

- Get cluster configuration data from the file:SortClusterConfig.conf in classpath, it can not support online updating.
- Get cluster configuration data from InlongManager URL, it can support online updating.

|  Parameter | Required  |Type | DefaultValue  |Remark   |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|clusterName   | Y |String | NA  |  inlong-sort-standalone cluster id |
|sortTasks   | Y  | JsonArray&lt;SortTaskConfig&gt; |NA  | Sort task list  |

### Modify configuration: SortTaskConfig

|  Parameter | Required  | DefaultValue  |Remark   |
| ------------ | ------------ | ------------ | ------------ |
|name   | Y | NA  |  sort task name |
|type   | Y  | NA  | sort task type, for example:HIVE("hive"), TUBE("tube"), KAFKA("kafka"), PULSAR("pulsar"), ELASTICSEARCH("elasticsearch"), UNKNOWN("n")  |
|idParams   | Y  | NA  | Inlong DataStream configuration  |
|sinkParams   | Y  | NA  | Sort task parameters  |

### Modify configuration: idParams of Elasticsearch sort task

|  Parameter | Required  | DefaultValue  |Remark   |
| ------------ | ------------ | ------------ | ------------ |
|inlongGroupId   | Y | NA  |  inlongGroupId |
|inlongStreamId   | Y  | NA  | inlongStreamId  |
|separator   | Y  | NA  | separator of Inlong datastream in data source  |
|fieldNames   | Y  | NA  | field name list of Elasticsearch index, separated by space.  |
|indexNamePattern   | Y  | NA  | index name pattern of Elasticsearch,date time variable include {yyyyMMdd},{yyyyMMddHH},{yyyyMMddHHmm}.  |
|contentOffset   | Y  | NA  | field index offset of source content  |
|fieldOffset   | Y  | NA  | offset of Elasticsearch index field name list  |

### Modify configuration: sinkParams of Elasticsearch sort task
|  Parameter | Required  | DefaultValue  |Remark   |
| ------------ | ------------ | ------------ | ------------ |
|httpHosts   | Y | NA  |  Hosts of Elasticsearch |
|username   | Y  | NA  | Username of Elasticsearch  |
|password   | Y  | NA  | Password of Elasticsearch |
|isUseIndexId   | N  | false  | Create index id or not  |
|bulkSizeMb   | N  | 10  | Max content size per bulk(MB) |
|flushInterval   | N  | 60  | Max interval between flushing operation(Second)  |
|keywordMaxLength   | N  | 32767  | Max keyword length(Byte) |
|bulkAction   | N  | 4000  | Max index request per bulk |
|maxConnect   | N  | 10  | Max opening HTTP connect |
|concurrentRequests   | N  | 5  | Max concurrent requests per HTTP connect |

## Modify configuration file: sid_es_v3.conf

- The file name include sort task name plus the postfix ".conf". 
- Get the configuration data from the file in classpath, it can not support online updating.
- Get the configuration data from InlongManager URL, it can support online updating.

### Modify configuration: sid_es_v3.conf

|  Parameter | Required  |Type | DefaultValue  |Remark   |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|sortClusterName   | Y |String | NA  |  inlong-sort-standalone cluster id |
|sortTaskId   | Y  | String |NA  | Sort task name  |
|cacheZones   | Y  | JsonObject&lt;String, JsonObject&gt; |NA  | Cache cluster list, Map&lt;cacheClusterName, CacheCluster&gt;  |

### Modify configuration: CacheCluster

|  Parameter | Required  |Type | DefaultValue  |Remark   |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|zoneName   | Y |String | NA  |  cache cluster name |
|zoneType   | Y  | String |NA  | [pulsar,tube,kafka]  |
|serviceUrl   | Y  | String |NA  | Pulsar serviceUrl or Kafka broker list  |
|authentication   | Y  | String |NA  | Pulsar authentication  |
|cacheZoneProperties   | N  | Map&lt;String,String&gt; |NA  | Cache consumer configuration  |
|topics | N | List&lt;Topic&gt; |NA | Topic list of Cache consumer |

### Modify configuration: Topic

|  Parameter | Required  |Type | DefaultValue  |Remark   |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|topic   | Y |String | NA  |  cache topic name |
|partitionCnt   | Y  | Integer |NA  | cache topic partition count  |
|topicProperties   | N  | Map&lt;String,String&gt; |NA  | Cache topic configuration  |

## Start inlong-sort-standalone application
At last, execute the shell file "./bin/sort-start.sh" for starting sort-standalone, you can check the log file "sort.log".

