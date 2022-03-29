---
title: Elasticsearch 示例
sidebar_position: 4
---
## 准备安装文件
安装文件在`inlong-sort-standalone/sort-standalone-dist/target/`目录下，文件名是apache-inlong-sort-standalone-${project.version}-bin.tar.gz。

## 准备修改配置文件
首先，解压压缩包apache-inlong-sort-standalone-${project.version}-bin.tar.gz，然后从目录"conf/es/"下拷贝3个文件到目录"conf/"。

- conf/common.properties，所有组件的基本配置参数
- conf/SortClusterConfig.conf，所有Sort任务的sink配置。, sink configuration of all sort tasks.
- conf/sid_es_v3.conf，一个Sort任务的数据源配置，文件名和配置文件SortClusterConfig.conf中的Sort任务名一致，如果SortClusterConfig.conf中配置了多个Sort任务，那么会有多个Sort任务的数据源配置。

### conf/common.properties配置样例

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

### conf/SortClusterConfig.conf配置样例

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

### conf/sid_es_v3.conf配置样例

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

## conf/common.properties配置参数

|  参数名 | 是否必须  | 默认值  |描述   |
| ------------ | ------------ | ------------ | ------------ |
|clusterId   | Y | NA  |  用来唯一标识一个inlong-sort-standalone集群 |
|nodeId   | N | 本机IP  |  当前节点ID |
|metricDomains | N | Sort | 指标汇总域名 |
|metricDomains.Sort.domainListeners | N | org.apache.inlong.sort.standalone.metrics.prometheus.PrometheusMetricListener | 指标汇总监听器类名列表，空格分隔 |
|metricDomains.Sort.snapshotInterval | N | 60000 | 订阅tube的重试超时时间，单位为ms |
|prometheusHttpPort | N | 8080 | org.apache.inlong.sort.standalone.metrics.prometheus.PrometheusMetricListener的参数，Prometheus的HttpServer端口 |
|sortChannel.type   | N | org.apache.inlong.sort.standalone.channel.BufferQueueChannel  |  Channel类型  |
|sortSink.type   | Y | NA | Sink类名，不同的分发类型使用不同的Sink类  |
|sortSource.type   | N | org.apache.inlong.sort.standalone.source.sortsdk.SortSdkSource  | Source类名  |
|sortClusterConfig.type   | N | manager  | 集群配置数据的加载来源，有三种方式：[文件，Manager，自定义类]。 |
|sortClusterConfig.file   | N | SortClusterConfig.conf  | 当集群配置数据加载来源是file时，在类路径下的配置文件名 |
|sortClusterConfig.managerUrl   | N  | NA  | 集群配置数据加载来源是manager时，这里定义InlongManager的URL<br/>比如:http://${manager ip:port}/api/inlong/manager/openapi/sort/standalone/getClusterConfig  |
|sortSourceConfig.QueryConsumeConfigType   | N | manager  | Sort任务配置数据的加载来源，有三种方式：[文件，Manager，自定义类]。 <br/>如果加载路径是file的话，Sort任务配置文件是在类路径里，文件名的格式：${sortTaskId}.conf。 |
|sortSourceConfig.managerUrl   | N  | NA  | Sort任务配置数据加载来源是manager时，这里定义InlongManager的URL<br/>比如::http://${manager ip:port}/api/inlong/manager/openapi/sort/standalone/getSortSource |

## SortClusterConfig.conf配置参数

- 可以从ClassPath的SortClusterConfig.conf源文件读取，但不支持实时更新
- 可以从Inlong Manager的HTTP接口获取配置，支持实时更新

|  参数名 | 是否必须  |类型 | 默认值  |描述   |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|clusterName   | Y |String | NA  |  用来唯一标识一个inlong-sort-standalone集群 |
|sortTasks   | Y  | JsonArray&lt;SortTaskConfig&gt; |NA  | Sort任务列表  |

### SortTaskConfig配置参数

|  参数名 | 是否必须  | 默认值  |描述   |
| ------------ | ------------ | ------------ | ------------ |
|name   | Y | NA  |  Sort任务名 |
|type   | Y  | NA  | Sort任务类型，如:HIVE("hive"), TUBE("tube"), KAFKA("kafka"), PULSAR("pulsar"), ELASTICSEARCH("elasticsearch"), UNKNOWN("n")  |
|idParams   | Y  | NA  | Inlong数据流参数列表  |
|sinkParams   | Y  | NA  | Sort任务参数  |

### Sort-Elasticsearch任务的idParams配置参数

|  参数名 | 是否必须  | 默认值  |描述   |
| ------------ | ------------ | ------------ | ------------ |
|inlongGroupId   | Y | NA  |  inlongGroupId |
|inlongStreamId   | Y  | NA  | inlongStreamId  |
|separator   | Y  | NA  | 分隔符  |
|fieldNames   | Y  | NA  | Elasticsearch的Index字段列表，用空格分隔  |
|indexNamePattern   | Y  | NA  | Index的名字模板，支持三种日期时间格式变量：{yyyyMMdd},{yyyyMMddHH},{yyyyMMddHHmm}  |
|contentOffset   | Y  | NA  | 源数据的有效字段开始偏移，从0开始  |
|fieldOffset   | Y  | NA  | Elasticsearch的Index字段列表的开始偏移  |

### Sort-Elasticsearch任务的sinkParams配置参数

|  参数名 | 是否必须  | 默认值  |描述   |
| ------------ | ------------ | ------------ | ------------ |
|httpHosts   | Y | NA  |  Elasticsearch的Host的IP端口|
|username   | Y  | NA  | Elasticsearch用户名  |
|password   | Y  | NA  | Elasticsearch密码 |
|isUseIndexId   | N  | false  | 是否创建IndexId，影响Index分片分布  |
|bulkSizeMb   | N  | 10  | 单Bulk的最大大小，单位MB |
|flushInterval   | N  | 60  | 刷盘间隔，单位是秒  |
|keywordMaxLength   | N  | 32767  | 单个keyword最大长度，单位是字节 |
|bulkAction   | N  | 4000  | 单个Bulk的最大IndexRequest数 |
|maxConnect   | N  | 10  | 最大HTTP连接数 |
|concurrentRequests   | N  | 5  | 单个HTTP连接的最大等待请求数 |

## Sort-Elasticsearch任务的sid_es_v3.conf配置参数

- 文件名格式：Sort任务名+".conf"。
- 可以从ClassPath的SortClusterConfig.conf源文件读取，但不支持实时更新。
- 可以从Inlong Manager的HTTP接口获取配置，支持实时更新。

### sid_es_v3.conf配置参数

|  参数名 | 是否必须  |类型 | 默认值  |描述   |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|sortClusterName   | Y |String | NA  |  用来唯一标识一个inlong-sort-standalone集群 |
|sortTaskId   | Y  | String |NA  | Sort任务名  |
|cacheZones   | Y  | JsonObject&lt;String, JsonObject&gt; |NA  | 缓存层集群列表，格式：Map&lt;cacheClusterName, CacheCluster&gt;  |

### CacheCluster配置参数

|  参数名 | 是否必须  |类型 | 默认值  |描述   |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|zoneName   | Y |String | NA  |  缓存层集群名 |
|zoneType   | Y  | String |NA  | 缓存类型：[pulsar,tube,kafka]  |
|serviceUrl   | Y  | String |NA  | Pulsar的serviceUrl参数，或者Kafka的Broker列表  |
|authentication   | Y  | String |NA  | Pulsar鉴权  |
|cacheZoneProperties   | N  | Map&lt;String,String&gt; |NA  | 缓存层Consumer参数  |
|topics | N | List&lt;Topic&gt; |NA | 缓存层消费的Topic列表 |

### Topic配置参数

|  参数名 | 是否必须  |类型 | 默认值  |描述   |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|topic   | Y |String | NA  |  Topic完整名，Pulsar：tenant/namespace/topic |
|partitionCnt   | Y  | Integer |NA  | Topic分区数  |
|topicProperties   | N  | Map&lt;String,String&gt; |NA  | 缓存层Topic的Consumer参数  |

## 启动inlong-sort-standalone应用
最后，执行脚本"./bin/sort-start.sh"，启动sort-standalone应用，之后可以检查日志文件sort.log，确认启动情况。

