---
title: 安装部署
sidebar_position: 2
---

## 准备安装文件
安装文件在`inlong-sort-standalone/sort-standalone-dist/target/`目录下，文件名是apache-inlong-sort-standalone-${project.version}-bin.tar.gz。

## 启动inlong-sort-standalone应用
有了上述编译阶段产出的tar.gz包后，解压后就可以启动inlong-sort-standalone的应用了。  
示例：
```
./bin/sort-start.sh
```

## conf/common.properties配置
|  配置名 | 是否必须  | 默认值  |描述   |
| ------------ | ------------ | ------------ | ------------ |
|clusterId   | Y | NA  |  用来唯一标识一个inlong-sort-standalone集群 |
|sortSource.type   | N | org.apache.inlong.sort.standalone.source.readapi.ReadApiSource  | Source类名  |
|sortChannel.type   | N | org.apache.inlong.sort.standalone.channel.BufferQueueChannel  |  Channel类型  |
|sortSink.type   | N | org.apache.inlong.sort.standalone.sink.hive.HiveSink | Sink类名，不同的分发类型使用不同的Sink类  |
|sortClusterConfig.type   | N | org.apache.inlong.sort.standalone.config.loader.ClassResourceSortClusterConfigLoader  | 分发集群配置加载类名，ClassResourceSortClusterConfigLoader从ClassPath的SortClusterConfig.conf源文件读取分发集群配置 |
|sortClusterConfig.managerPath   | N  | NA  | 分发集群配置加载类org.apache.inlong.sort.standalone.config.loader.ManagerSortClusterConfigLoader的参数，指定Inlong Manager的URL路径，	如http://${manager ip:port}/api/inlong/manager/openapi/sort/standalone/getClusterConfig  |
|eventFormatHandler | N | org.apache.inlong.sort.standalone.sink.hive.DefaultEventFormatHandler | 分发Hive前的格式转换类名  |
|maxThreads   | N  | 10  | sink的并行度 |
|reloadInterval | N  | 60000  | 分发集群配置的更新加载周期，单位毫秒  |
|processInterval | N | 100 | 分发分组处理间隔，单位毫秒 |
|metricDomains | N | Sort | 指标汇总域名 |
|metricDomains.Sort.domainListeners | N | org.apache.inlong.sort.standalone.metrics.prometheus.PrometheusMetricListener | 指标汇总监听器类名列表，空格分隔 |
|prometheusHttpPort | N | 8080 | org.apache.inlong.sort.standalone.metrics.prometheus.PrometheusMetricListener的参数，Prometheus的HttpServer端口 |
|metricDomains.Sort.snapshotInterval | N | 60000 | 订阅tube的重试超时时间，单位为ms |

## SortClusterConfig配置
- 可以从ClassPath的SortClusterConfig.conf源文件读取，但不支持实时更新
- 可以从Inlong Manager的HTTP接口获取配置  
|  配置名 | 是否必须  | 默认值  |描述   |
| ------------ | ------------ | ------------ | ------------ |
|clusterName   | Y | NA  |  用来唯一标识一个inlong-sort-standalone集群 |
|sortTasks   | Y  | NA  | 分发任务列表  |

### SortTaskConfig配置
|  配置名 | 是否必须  | 默认值  |描述   |
| ------------ | ------------ | ------------ | ------------ |
|name   | Y | NA  |  分发任务名 |
|type   | Y  | NA  | 分发任务类型，如HIVE("hive"), TUBE("tube"), KAFKA("kafka"), PULSAR("pulsar"), ElasticSearch("ElasticSearch"), UNKNOWN("n")  |
|idParams   | Y  | NA  | Inlong数据流参数列表  |
|sinkParams   | Y  | NA  | 分发任务的参数  |

### Hive分发任务的idParams
|  配置名 | 是否必须  | 默认值  |描述   |
| ------------ | ------------ | ------------ | ------------ |
|inlongGroupId   | Y | NA  |  inlongGroupId |
|inlongStreamId   | Y  | NA  | inlongStreamId  |
|separator   | Y  | NA  | 分隔符  |
|partitionIntervalMs   | N  | 3600000  | 分区间隔时间，单位毫秒  |
|idRootPath   | Y  | NA  | Inlong数据流的Hdfs根目录  |
|partitionSubPath   | Y  | NA  | Inlong数据流的分区子目录  |
|hiveTableName   | Y  | NA  | Inlong数据流的Hive表名  |
|partitionFieldName   | N  | dt  | Inlong数据流的分区字段名  |
|partitionFieldPattern   | Y  | NA  | Inlong数据流的分区字段值格式，如{yyyyMMdd}、{yyyyMMddHH}、{yyyyMMddHHmm}  |
|msgTimeFieldPattern   | Y  | NA  | 消息生成时间的字段值格式，Java时间格式  |
|maxPartitionOpenDelayHour   | N  | 8  | 分区最大打开延迟时间，单位小时  |

### Hive分发任务的sinkParams
|  配置名 | 是否必须  | 默认值  |描述   |
| ------------ | ------------ | ------------ | ------------ |
|hdfsPath   | Y | NA  |  HDFS的NameNode |
|maxFileOpenDelayMinute   | N  | 5  | 单个HDFS文件最大写入时间，单位分钟  |
|tokenOvertimeMinute   | N  | 60  | 单个Inlong数据流的分区创建token最大占用时间，单位分钟  |
|maxOutputFileSizeGb   | N  | 2  | 单个HDFS文件最大大小，单位GB  |
|hiveJdbcUrl   | Y  | NA  | Hive的JDBC路径  |
|hiveDatabase   | Y  | NA  | Hive的数据库  |
|hiveUsername   | Y  | NA  | Hive的用户名  |
|hivePassword   | Y  | NA  | Hive的密码  |

### Pulsar分发任务的idParams
|  配置名 | 是否必须  | 默认值  |描述   |
| ------------ | ------------ | ------------ | ------------ |
|inlongGroupId   | Y | NA  |  inlongGroupId |
|inlongStreamId   | Y  | NA  | inlongStreamId  |
|topic   | Y  | NA  | Pulsar的Topic  |

### Pulsar分发任务的sinkParams
|  配置名 | 是否必须  | 默认值  |描述   |
| ------------ | ------------ | ------------ | ------------ |
|serviceUrl   | Y | NA  |  Pulsar服务路径 |
|authentication   | Y  | NA  | Pulsar集群鉴权  |
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

### Hive配置样例
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