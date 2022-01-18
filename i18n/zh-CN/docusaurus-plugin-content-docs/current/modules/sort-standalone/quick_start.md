---
title: 安装部署
sidebar_position: 2
---

##Preparing installation files

The installation file is located in the 'inlong sort standard / sort standard dist / target /' directory. The file name is Apache inlong sort standard - ${project. Version} - bin tar. gz。



##Start the inlong sort standalone application

With the tar produced in the above compilation stage After you unpack the GZ package, you can start the inlong sort standalone application.



Example:

```

./bin/sort-start. sh

```



## conf/common. Properties configuration



|Configuration name | whether it must be | default value | description|

| ------------ | ------------ | ------------ | ------------ |

|Clusterid | y | Na | is used to uniquely identify an inlong sort standalone cluster|

|sortSource. type | N | org. apache. inlong. sort. standalone. source. readapi. Readapisource | source class name|

|sortChannel. type | N | org. apache. inlong. sort. standalone. channel. Bufferqueuechannel | channel type|

|sortSink. type | N | org. apache. inlong. sort. standalone. sink. hive. Hivesink | sink class name. Different sink classes are used for different distribution types|

|sortClusterConfig. type | N | org. apache. inlong. sort. standalone. config. loader. Classresourcesortclusterconfigloader | distribute the cluster configuration and load the class name. Classresourcesortclusterconfigloader is from sortclusterconfig. Of classpath The conf source file reads the distribution cluster configuration|

|sortClusterConfig. Managerpath | n | Na | distribution cluster configuration loading class org apache. inlong. sort. standalone. config. loader. The parameter of managersortclusterconfigloader specifies the URL path of the inlong manager, For example, http: / / ${manager IP: Port} / API / inlong / Manager / OpenAPI / sort / standalone / getclusterconfig|

|eventFormatHandler | N | org. apache. inlong. sort. standalone. sink. hive. Defaulteventformathandler | format conversion class name before distributing hive|

|Parallelism of maxthreads | n | 10 | sink|

|Reloadinterval | n | 60000 | update loading cycle of distribution cluster configuration, unit: milliseconds|

|Processinterval | n | 100 | distribution packet processing interval, unit: ms|

|Metric domains | n | sort | indicator summary domain name|

|metricDomains. Sort. domainListeners | N | org. apache. inlong. sort. standalone. metrics. prometheus. Prometheusmetriclistener | indicator summary listener class name list, separated by spaces|

|prometheusHttpPort | N | 8080 | org. apache. inlong. sort. standalone. metrics. prometheus. Parameter of Prometheus metricplistener, httpserver port of Prometheus|

|metricDomains. Sort. Snapshotinterval | n | 60000 | retry timeout of subscription tube, unit: ms|



##Sortclusterconfig configuration

-You can use sortclusterconfig. From classpath Conf source file read, but real-time update is not supported

-The configuration can be obtained from the HTTP interface of the inlong manager



|Configuration name | whether it must be | default value | description|

| ------------ | ------------ | ------------ | ------------ |

|Clustername | y | Na | is used to uniquely identify an inlong sort standalone cluster|

|Sorttasks | y | Na | list < sorttaskconfig > stores multiple distribution tasks|



###Sorttaskconfig configuration



|Configuration name | whether it must be | default value | description|

| ------------ | ------------ | ------------ | ------------ |

|Name | y | Na | distribution task name|

|Type | y | Na | distribution task type, such as hive ("hive"), tube ("tube"), Kafka ("Kafka"), pulsar ("pulsar"), elasticsearch ("elasticsearch"), unknown ("n")|

|Idparams | y | Na | list < map < string, string > > stores multiple inlong data flow parameters|

|Sinkparams | y | Na | map < string, string > stores the parameters of the distribution task|



###Idparams of hive distribution task



|Configuration name | whether it must be | default value | description|

| ------------ | ------------ | ------------ | ------------ |

|inlongGroupId | Y | NA | inlongGroupId |

|inlongStreamId | Y | NA | inlongStreamId |

|Separator | y | Na | separator|

|Partitionintervalms | n | 3600000 | partition interval, in milliseconds|

|Idrootpath | y | Na | HDFS root directory of inlong data stream|

|Partitionsubpath | y | Na | partition subdirectory of inlong data stream|

|Hivetablename | y | Na | hive table name of inlong data stream|

|Partitionfieldname | n | DT | partition field name of inlong data stream|

|Partitionfieldpattern | y | Na | inlong data stream partition field value format, such as {yyyymmdd}, {yyyymmddhh}, {yyyymmddhhmm}|

|Msgtimefieldpattern | y | Na | field value format of message generation time, java time format|

|Maxpartitionopendelayhour | n | 8 | maximum opening delay time of partition, unit: hour|



###Sinkparams for hive distribution tasks



|Configuration name | whether it must be | default value | description|

| ------------ | ------------ | ------------ | ------------ |

|Hdfspath | y | Na | namenode of HDFS|

|Maxfileopendelayminute | n | 5 | maximum write time of a single HDFS file, unit: minutes|

|Tokenovertimeminute | n | 60 | the maximum time taken to create a token for a partition of a single inlong data stream, in minutes|

|Maxoutputfilesizegb | n | 2 | maximum size of a single HDFS file, in GB|

|Hivejdbcurl | y | Na | JDBC path of hive|

|Hivedatabase | y | Na | hive's database|

|Hiveusername | y | Na | hive's user name|

|Hivepassword | y | Na | hive's password|



###Idparams of pulsar distribution task



|Configuration name | whether it must be | default value | description|

| ------------ | ------------ | ------------ | ------------ |

|inlongGroupId | Y | NA | inlongGroupId |

|inlongStreamId | Y | NA | inlongStreamId |

|Topic | y | Na | topic of pulsar|



###Sinkparams of pulsar distribution task



|Configuration name | whether it must be | default value | description|

| ------------ | ------------ | ------------ | ------------ |

|Serviceurl | y | Na | pulsar service path|

|Authentication | y | Na | pulsar cluster authentication|

|enableBatching | N | true | enableBatching |

|batchingMaxBytes | N | 5242880 | batchingMaxBytes |

|batchingMaxMessages | N | 3000 | batchingMaxMessages |

|batchingMaxPublishDelay | N | 1 | batchingMaxPublishDelay |

|maxPendingMessages | N | 1000 | maxPendingMessages |

|maxPendingMessagesAcrossPartitions | N | 50000 | maxPendingMessagesAcrossPartitions |

|sendTimeout | N | 0 | sendTimeout |

|compressionType | N | NONE | compressionType |

|blockIfQueueFull | N | true | blockIfQueueFull |

|roundRobinRouterBatchingPartitionSwitchFrequency | N | 10 | roundRobinRouterBatchingPartitionSwitchFrequency |



###Hive configuration example
```
/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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