---
title: Hive Example
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

```
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
```
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

```
{
	"sortClusterName": "hivev3-sz-sz1",
	"sortTaskId": "sid_hive_inlong6th_v3",
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

| Parameter                               | Required   | DefaultValue                                                                  | Remark                                                                                                                                                                                                               |
|-----------------------------------------|------------|-------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| clusterId                               | Y          | NA                                                                            | inlong-sort-standalone cluster id                                                                                                                                                                                    |
| nodeId                                  | N          | Local IP                                                                      | Current node id                                                                                                                                                                                                      |
| metricDomains                           | N          | Sort                                                                          | domain name of metric                                                                                                                                                                                                |
| metricDomains.Sort.domainListeners      | N          | org.apache.inlong.sort.standalone.metrics.prometheus.PrometheusMetricListener | class name list of metric listener, separated by space                                                                                                                                                               |
| metricDomains.Sort.snapshotInterval     | N          | 60000                                                                         | interval snapshoting metric data(millisecond)                                                                                                                                                                        |
| prometheusHttpPort                      | N          | 8080                                                                          | HTTP server port of prometheus simple client                                                                                                                                                                         |
| sortChannel.type                        | N          | org.apache.inlong.sort.standalone.channel.BufferQueueChannel                  | Channel class name                                                                                                                                                                                                   |
| sortSink.type                           | Y          | NA                                                                            | Sink class name                                                                                                                                                                                                      |
| sortSource.type                         | N          | org.apache.inlong.sort.standalone.source.sortsdk.SortSdkSource                | Source class name                                                                                                                                                                                                    |
| sortClusterConfig.type                  | N          | manager                                                                       | Loader source of cluster configuration data: [file,manager,UserDefinedClassName].                                                                                                                                    |
| sortClusterConfig.file                  | N          | SortClusterConfig.conf                                                        | File name in class resource when sortClusterConfig.type=file.                                                                                                                                                        |
| sortClusterConfig.managerUrl            | N          | NA                                                                            | The parameter is the cluster configuration URL of InlongManager when sortClusterConfig.type=manager. <br/>For example:http://${manager ip:port}/api/inlong/manager/openapi/sort/standalone/getClusterConfig          |
| sortSourceConfig.QueryConsumeConfigType | N          | manager                                                                       | Loader source of sort task configuration data: [file,manager,UserDefinedClassName]. <br/>Sort task configuration file is ${sortTaskId}.conf in the class resource when sortSourceConfig.QueryConsumeConfigType=file. |
| sortSourceConfig.managerUrl             | N          | NA                                                                            | The parameter is the sort task configuration URL of InlongManager when sortClusterConfig.type=manager. <br/>For example:http://${manager ip:port}/api/inlong/manager/openapi/sort/standalone/getSortSource           |

## Modify configuration file: SortClusterConfig.conf

- Get cluster configuration data from the file:SortClusterConfig.conf in classpath, it can not support online updating.
- Get cluster configuration data from InlongManager URL, it can support online updating.

| Parameter   | Required   | Type                            | DefaultValue   | Remark                            |
|-------------|------------|---------------------------------|----------------|-----------------------------------|
| clusterName | Y          | String                          | NA             | inlong-sort-standalone cluster id |
| sortTasks   | Y          | JsonArray&lt;SortTaskConfig&gt; | NA             | Sort task list                    |

### Modify configuration: SortTaskConfig

| Parameter   | Required    | DefaultValue  | Remark                                                                                                                                 |
|-------------|-------------|---------------|----------------------------------------------------------------------------------------------------------------------------------------|
| name        | Y           | NA            | sort task name                                                                                                                         |
| type        | Y           | NA            | sort task type, for example:HIVE("hive"), TUBE("tube"), KAFKA("kafka"), PULSAR("pulsar"), ElasticSearch("ElasticSearch"), UNKNOWN("n") |
| idParams    | Y           | NA            | Inlong DataStream configuration                                                                                                        |
| sinkParams  | Y           | NA            | Sort task parameters                                                                                                                   |

### Modify configuration: idParams of Hive sort task

| Parameter                 | Required   | DefaultValue    | Remark                                                                                     |
|---------------------------|------------|-----------------|--------------------------------------------------------------------------------------------|
| inlongGroupId             | Y          | NA              | inlongGroupId                                                                              |
| inlongStreamId            | Y          | NA              | inlongStreamId                                                                             |
| separator                 | Y          | NA              | separator of Inlong datastream in data source                                              |
| partitionIntervalMs       | N          | 3600000         | partition interval(millisecond)                                                            |
| idRootPath                | Y          | NA              | HDFS root path of Inlong DataStream                                                        |
| partitionSubPath          | Y          | NA              | partition sub path of Inlong DataStream                                                    |
| hiveTableName             | Y          | NA              | Hive table name of Inlong DataStream                                                       |
| partitionFieldName        | N          | dt              | partition field name of Inlong DataStream                                                  |
| partitionFieldPattern     | Y          | NA              | Date format of partition field value, the type have {yyyyMMdd},{yyyyMMddHH},{yyyyMMddHHmm} |
| msgTimeFieldPattern       | Y          | NA              | Date format of message generation time, it support Java date format                        |
| maxPartitionOpenDelayHour | N          | 8               | Max delay hour of partition(hour)                                                          |

### Modify configuration: sinkParams of Hive sort task
| Parameter              | Required   | DefaultValue    | Remark                                                |
|------------------------|------------|-----------------|-------------------------------------------------------|
| hdfsPath               | Y          | NA              | NameNode URL of HDFS                                  |
| maxFileOpenDelayMinute | N          | 5               | Max writing delay minutes of simple HDFS file(minute) |
| tokenOvertimeMinute    | N          | 60              | token overtime of Inlong Data Stream(minute)          |
| maxOutputFileSizeGb    | N          | 2               | Max file size of simple HDFS file(GB)                 |
| hiveJdbcUrl            | Y          | NA              | JDBC URL of Hive                                      |
| hiveDatabase           | Y          | NA              | Hive database                                         |
| hiveUsername           | Y          | NA              | Hive username                                         |
| hivePassword           | Y          | NA              | Hive password                                         |

## Modify configuration file: sid_hive_inlong6th_v3.conf

- The file name include sort task name plus the postfix ".conf".

### Modify configuration: sid_hive_inlong6th_v3.conf

| Parameter       | Required    | Type                                 | DefaultValue   | Remark                                                        |
|-----------------|-------------|--------------------------------------|----------------|---------------------------------------------------------------|
| sortClusterName | Y           | String                               | NA             | inlong-sort-standalone cluster id                             |
| sortTaskId      | Y           | String                               | NA             | Sort task name                                                |
| cacheZones      | Y           | JsonObject&lt;String, JsonObject&gt; | NA             | Cache cluster list, Map&lt;cacheClusterName, CacheCluster&gt; |

### Modify configuration: CacheCluster

| Parameter           | Required    | Type                     | DefaultValue   | Remark                                 |
|---------------------|-------------|--------------------------|----------------|----------------------------------------|
| zoneName            | Y           | String                   | NA             | cache cluster name                     |
| zoneType            | Y           | String                   | NA             | [pulsar,tube,kafka]                    |
| serviceUrl          | Y           | String                   | NA             | Pulsar serviceUrl or Kafka broker list |
| authentication      | Y           | String                   | NA             | Pulsar authentication                  |
| cacheZoneProperties | N           | Map&lt;String,String&gt; | NA             | Cache consumer configuration           |
| topics              | N           | List&lt;Topic&gt;        | NA             | Topic list of Cache consumer           |

### Modify configuration: Topic

| Parameter       | Required   | Type                     | DefaultValue    | Remark                      |
|-----------------|------------|--------------------------|-----------------|-----------------------------|
| topic           | Y          | String                   | NA              | cache topic name            |
| partitionCnt    | Y          | Integer                  | NA              | cache topic partition count |
| topicProperties | N          | Map&lt;String,String&gt; | NA              | Cache topic configuration   |



