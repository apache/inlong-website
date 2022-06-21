---
title: Deployment
sidebar_position: 2
---
## Prepare to get module archive
Module archive is in the directory:inlong-sort-standalone/sort-standalone-dist/target/, the archive file is apache-inlong-sort-standalone-${project.version}-bin.tar.gz.

## Start inlong-sort-standalone application
At first, decompress the archive file, execute the shell file "./bin/sort-start.sh".

## Configuration file:conf/common.properties
|  Parameter | Required  | DefaultValue  |Remark   |
| ------------ | ------------ | ------------ | ------------ |
|clusterId   | Y | NA  |  inlong-sort-standalone cluster id |
|sortSource.type   | N | org.apache.inlong.sort.standalone.source.readapi.ReadApiSource  | Source class name  |
|sortChannel.type   | N | org.apache.inlong.sort.standalone.channel.BufferQueueChannel  |  Channel class name  |
|sortSink.type   | N | org.apache.inlong.sort.standalone.sink.hive.HiveSink | Sink class name  |
|sortClusterConfig.type   | N | org.apache.inlong.sort.standalone.config.loader.ClassResourceSortClusterConfigLoader  | Configuration data loader class name |
|sortClusterConfig.managerPath   | N  | NA  | For loader:org.apache.inlong.sort.standalone.config.loader.ManagerSortClusterConfigLoader, the parameter is the URL of InlongManager. For example:http://${manager ip:port}/api/inlong/manager/openapi/sort/standalone/getClusterConfig  |
|eventFormatHandler | N | org.apache.inlong.sort.standalone.sink.hive.DefaultEventFormatHandler | Formater class name  |
|maxThreads   | N  | 10  | sink thread number |
|reloadInterval | N  | 60000  | interval updating Configuration data(millisecond)  |
|processInterval | N | 100 | interval processing data(millisecond) |
|metricDomains | N | Sort | domain name of metric |
|metricDomains.Sort.domainListeners | N | org.apache.inlong.sort.standalone.metrics.prometheus.PrometheusMetricListener | class name list of metric listener, separated by space |
|prometheusHttpPort | N | 8080 | HTTP server port of prometheus simple client |
|metricDomains.Sort.snapshotInterval | N | 60000 | interval snapshoting metric data(millisecond) |

## SortClusterConfig
- Get SortClusterConfig from the file:SortClusterConfig.conf in classpath, but it can not support online updating.
- Get SortClusterConfig from InlongManager URL, but it can support online updating.

|  Parameter | Required  | DefaultValue  |Remark   |
| ------------ | ------------ | ------------ | ------------ |
|clusterName   | Y | NA  |  inlong-sort-standalone cluster id |
|sortTasks   | Y  | NA  | Sort task list  |

### SortTaskConfig
|  Parameter | Required  | DefaultValue  |Remark   |
| ------------ | ------------ | ------------ | ------------ |
|name   | Y | NA  |  sort task name |
|type   | Y  | NA  | sort task type, for example:HIVE("hive"), TUBE("tube"), KAFKA("kafka"), PULSAR("pulsar"), ElasticSearch("ElasticSearch"), UNKNOWN("n")  |
|idParams   | Y  | NA  | Inlong DataStream configuration  |
|sinkParams   | Y  | NA  | Sort task parameters  |

### idParams content of Hive sort task
|  Parameter | Required  | DefaultValue  |Remark   |
| ------------ | ------------ | ------------ | ------------ |
|inlongGroupId   | Y | NA  |  inlongGroupId |
|inlongStreamId   | Y  | NA  | inlongStreamId  |
|separator   | Y  | NA  | separtor  |
|partitionIntervalMs   | N  | 3600000  | partition interval(millisecond)  |
|idRootPath   | Y  | NA  | HDFS root path of Inlong DataStream  |
|partitionSubPath   | Y  | NA  | partition sub path of Inlong DataStream  |
|hiveTableName   | Y  | NA  | Hive table name of Inlong DataStream  |
|partitionFieldName   | N  | dt  | partition field name of Inlong DataStream  |
|partitionFieldPattern   | Y  | NA  | Date format of partition field value, the type have {yyyyMMdd},{yyyyMMddHH},{yyyyMMddHHmm}  |
|msgTimeFieldPattern   | Y  | NA  | Date format of message generation time, it support Java date format  |
|maxPartitionOpenDelayHour   | N  | 8  | Max delay hour of partition(hour)  |

### sinkParams content of Hive sort task
|  Parameter | Required  | DefaultValue  |Remark   |
| ------------ | ------------ | ------------ | ------------ |
|hdfsPath   | Y | NA  |  NameNode URL of HDFS |
|maxFileOpenDelayMinute   | N  | 5  | Max writing delay minute of simple HDFS file(minute)  |
|tokenOvertimeMinute   | N  | 60  | token overtime of Inlong Data Stream(minute) |
|maxOutputFileSizeGb   | N  | 2  | Max file size of simple HDFS file(GB) |
|hiveJdbcUrl   | Y  | NA  | JDBC URL of Hive  |
|hiveDatabase   | Y  | NA  | Hive database |
|hiveUsername   | Y  | NA  | Hive username |
|hivePassword   | Y  | NA  | Hive password |

### idParams content of Pulsar sort task
|  Parameter | Required  | DefaultValue  |Remark   |
| ------------ | ------------ | ------------ | ------------ |
|inlongGroupId   | Y | NA  |  inlongGroupId |
|inlongStreamId   | Y  | NA  | inlongStreamId  |
|topic   | Y  | NA  | Pulsar的Topic  |

### sinkParams content of Pulsar sort task
|  Parameter | Required  | DefaultValue  |Remark   |
| ------------ | ------------ | ------------ | ------------ |
|serviceUrl   | Y | NA  |  Pulsar service URL |
|authentication   | Y  | NA  | Pulsar authentication |
|enableBatching   | N  | true  | enableBatching  |
|batchingMaxBytes   | N  | 5242880  | batchingMaxBytes  |
|batchingMaxMessages   | N  | 3000  | batchingMaxMessages  |
|batchingMaxPublishDelay   | N  | 1  | batchingMaxPublishDelay  |
|maxPendingMessages   | N  | 1000  | maxPendingMessages  |
|maxPendingMessagesAcrossPartitions   | N  | 50000  | maxPendingMessagesAcrossPartitions  |
|sendTimeout   | N  | 0  | sendTimeout  |
|compressionType   | N  | NONE  | compressionType  |
|blockIfQueueFull   | N  | true  | blockIfQueueFull  |
|roundRobinRouterBatchingPartitionSwitchFrequency   | N  | 10  | roundRobinRouterBatchingPartitionSwitchFrequency  |

### Sample of Hive sort task
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

