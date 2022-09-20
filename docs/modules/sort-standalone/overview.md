---
title: Overview
sidebar_position: 1
---

## Introduction
Inlong sort standalone is a module responsible for consuming the data stream reported by users from the cache layer and distributing it to different data stores. It supports hive, elasticsearch, CLS and other data stores.  
Inlong sort standalone relies on inlong manager to manage system metadata. Inlong sort standalone is deployed by cluster and aggregates and distributes tasks by target storage.

## Feature
### Multi tenant system
Inlong sort standalone supports multi tenancy. An inlong sort standalone cluster can host the distribution tasks of different tenants. The distribution tasks are obtained from the inlong manager.  
Each distribution task is responsible for distributing multiple data streams to a data store. Users only need to configure on the front page of inlong manager to specify the data streams to be distributed to a specific data store.  
For example, the inlong data streams D1 and D2 are distributed to hive cluster H1, D1 is also distributed to elasticsearch cluster E1, and D2 is also distributed to CLS cluster C1. Then the inlong sort standalone cluster will receive three distribution tasks.
- H1 distributes task consumption D1 and D2 to hive cluster H1;
- E1 distribution task consumption D1, distributed to elasticsearch cluster E1;
- C1 distributes the task consumption D2 and distributes it to CLS cluster C1.

### Distribution tasks support dynamic updates
Inlong sort standalone supports dynamic updating of distribution tasks, such as the information of the data source where the inlong data stream is located, the data stream schema information, and the information of the target data store.  
It should be noted that the new distribution of inlong data stream will be consumed from the latest location of the cache layer;  
After the inlong data stream is distributed offline, it goes online again. If the consumption location when it goes offline is still within the life cycle of the cache layer, it continues to consume from the consumption location when it goes offline;  
If the consumption location at the time of offline is no longer within the life cycle of the cache layer, consumption starts from the latest location of the cache layer.

### message queues supported by the cache layer
- Inlong-Tube
- Apache Pulsar
- Apache Kafka

### supported data storage
- Apache Hive (currently only supports sequence file format)
- Apache Pulsar
- Apache Kafka
- Elasticsearch
- ClickHouse
- Tencent CLS

### Future planning
#### support more kinds of data storage
HBase, etc.

#### support more file formats written to Apache hive
Orc file, etc.


## Configuration in Sort-Standalone
The configuration in Sort-Standalone can be divided into three parts:
- Basic node configuration: including the type of source, channel, sink this node try to specify, and how to acquire the metadata of each group id and stream id. These configs will not be updated since the process starts. They will be put in ***common.properties***
- Sink configuration: including the metadata of sinks, such as access point, username, password. And the metadata of each id which sinks require. These configs will be put in ***SortClusterConfig***
- Source configuration: including the metadata of sources, such as mq type, topic, serviceUrl. These configs will be put in ***SortSourceConfig***

### Configuration file:conf/common.properties
| Parameter                               | Required | DefaultValue                                                                     | Remark                                                                                         |
|-----------------------------------------|----------|----------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| clusterId                               | Y        | NA                                                                               | inlong-sort-standalone cluster id                                                              |
| sortSource.type                         | N        | org.apache.inlong.sort.standalone.source.readapi.SortSdkSource                   | Source class name                                                                              |
| sortChannel.type                        | N        | org.apache.inlong.sort.standalone.channel.BufferQueueChannel                     | Channel class name                                                                             |
| sortSink.type                           | N        | org.apache.inlong.sort.standalone.sink.hive.HiveSink                             | Sink class name                                                                                |
| sortClusterConfig.type                  | Y        | manager                                                                          | ClusterConfig configuration type. File config mode please choose: ***file***                   |
| sortSourceConfig.QueryConsumeConfigType | Y        | manager                                                                          | SourceConfig configuration type. File config mode please choose: ***file***                    |
| sortClusterConfig.file                  | N        | SortClusterConfig.conf                                                           | Sort cluster config file name. ***Required in file config type.***                             |
| managerUrlLoaderType                    | N        | org.apache.inlong.sort.standalone.config.loader.CommonPropertiesManagerUrlLoader | The type of manager url loader. ***Required in manager config type.***                         |
| sortClusterConfig.managerUrl            | N        | http://${manager_ip}:{manager_port}/inlong/manager/openapi/sort/getClusterConfig | The manager config interface to cluster config. ***Required in manager config type.***         |
| sortSourceConfig.managerUrl             | N        | http://${manager_ip}:{manager_port}/inlong/manager/openapi/sort/getSortSource    | The manager config interface to sort source config. ***Required in manager config mode.***     |
| eventFormatHandler                      | N        | org.apache.inlong.sort.standalone.sink.hive.DefaultEventFormatHandler            | Formatter class name                                                                           |
| maxThreads                              | N        | 10                                                                               | sink thread number                                                                             |
| reloadInterval                          | N        | 60000                                                                            | interval updating Configuration data(millisecond)                                              |
| processInterval                         | N        | 100                                                                              | interval processing data(millisecond)                                                          |
| metricDomains                           | N        | Sort                                                                             | domain name of metric                                                                          |
| metricDomains.Sort.domainListeners      | N        | org.apache.inlong.sort.standalone.metrics.prometheus.PrometheusMetricListener    | class name list of metric listener, separated by space                                         |
| prometheusHttpPort                      | N        | 8080                                                                             | HTTP server port of prometheus simple client                                                   |
| metricDomains.Sort.snapshotInterval     | N        | 60000                                                                            | interval snapshoting metric data(millisecond)                                                  |
| sortsdk.consumeStrategy                 | N        | latest                                                                           | The consume strategy of topic, other option is earliest                                        |
| interceptor.type                        | N        | org.apache.inlong.sort.standalone.rollback.TimeBasedFilterInterceptor$Builder    | Type of interceptor used in sort-standalone. The default interceptor is based on message time. |
| rollback.startTime                      | N        | 1970-01-01 08:00:00                                                              | Valid message start time. Earlier message will be filtered.                                    |
| rollback.stopTime                       | N        | NA                                                                               | Valid message stop time. Later message will be filtered.                                       |


### SortClusterConfig
The SortClusterConfig can be acquired from local file or manager, depending on the ***sortClusterConfig.type*** configured in common.properties.

| Parameter   | Required    | DefaultValue   | Remark                            |
|-------------|-------------|----------------|-----------------------------------|
| clusterName | Y           | NA             | inlong-sort-standalone cluster id |
| sortTasks   | Y           | NA             | Sort task list                    |

#### SortTask
Sort Task includes ***idParams and sinkParams*** which represent the config of ***stream and dataNode*** respectively

The idParams and sinkParams are totally different among each type of sort tasks. There are two examples of hive task and pulsar task

| Parameter  | Required   | DefaultValue   | Remark                                                                                                                                 |
|------------|------------|----------------|----------------------------------------------------------------------------------------------------------------------------------------|
| name       | Y          | NA             | sort task name                                                                                                                         |
| type       | Y          | NA             | sort task type, for example:HIVE("hive"), TUBE("tube"), KAFKA("kafka"), PULSAR("pulsar"), ElasticSearch("ElasticSearch"), UNKNOWN("n") |
| idParams   | Y          | NA             | List of Inlong DataStream configuration                                                                                                |
| sinkParams | Y          | NA             | Sort task parameters                                                                                                                   |


#### idParams content of Hive sort task
| Parameter                 | Required   | DefaultValue  | Remark                                                                                     |
|---------------------------|------------|---------------|--------------------------------------------------------------------------------------------|
| inlongGroupId             | Y          | NA            | inlongGroupId                                                                              |
| inlongStreamId            | Y          | NA            | inlongStreamId                                                                             |
| separator                 | Y          | NA            | separator                                                                                  |
| partitionIntervalMs       | N          | 3600000       | partition interval(millisecond)                                                            |
| idRootPath                | Y          | NA            | HDFS root path of Inlong DataStream                                                        |
| partitionSubPath          | Y          | NA            | partition sub path of Inlong DataStream                                                    |
| hiveTableName             | Y          | NA            | Hive table name of Inlong DataStream                                                       |
| partitionFieldName        | N          | dt            | partition field name of Inlong DataStream                                                  |
| partitionFieldPattern     | Y          | NA            | Date format of partition field value, the type have {yyyyMMdd},{yyyyMMddHH},{yyyyMMddHHmm} |
| msgTimeFieldPattern       | Y          | NA            | Date format of message generation time, it support Java date format                        |
| maxPartitionOpenDelayHour | N          | 8             | Max delay hour of partition(hour)                                                          |

#### sinkParams content of Hive sort task
| Parameter              | Required   | DefaultValue    | Remark                                               |
|------------------------|------------|-----------------|------------------------------------------------------|
| hdfsPath               | Y          | NA              | NameNode URL of HDFS                                 |
| maxFileOpenDelayMinute | N          | 5               | Max writing delay minute of simple HDFS file(minute) |
| tokenOvertimeMinute    | N          | 60              | token overtime of Inlong Data Stream(minute)         |
| maxOutputFileSizeGb    | N          | 2               | Max file size of simple HDFS file(GB)                |
| hiveJdbcUrl            | Y          | NA              | JDBC URL of Hive                                     |
| hiveDatabase           | Y          | NA              | Hive database                                        |
| hiveUsername           | Y          | NA              | Hive username                                        |
| hivePassword           | Y          | NA              | Hive password                                        |

#### idParams content of Pulsar sort task
| Parameter      | Required   | DefaultValue    | Remark         |
|----------------|------------|-----------------|----------------|
| inlongGroupId  | Y          | NA              | inlongGroupId  |
| inlongStreamId | Y          | NA              | inlongStreamId |
| topic          | Y          | NA              | Topic of MQ    |

#### sinkParams content of Pulsar sort task
| Parameter                                        | Required    | DefaultValue   | Remark                                           |
|--------------------------------------------------|-------------|----------------|--------------------------------------------------|
| serviceUrl                                       | Y           | NA             | Pulsar service URL                               |
| authentication                                   | Y           | NA             | Pulsar authentication                            |
| enableBatching                                   | N           | true           | enableBatching                                   |
| batchingMaxBytes                                 | N           | 5242880        | batchingMaxBytes                                 |
| batchingMaxMessages                              | N           | 3000           | batchingMaxMessages                              |
| batchingMaxPublishDelay                          | N           | 1              | batchingMaxPublishDelay                          |
| maxPendingMessages                               | N           | 1000           | maxPendingMessages                               |
| maxPendingMessagesAcrossPartitions               | N           | 50000          | maxPendingMessagesAcrossPartitions               |
| sendTimeout                                      | N           | 0              | sendTimeout                                      |
| compressionType                                  | N           | NONE           | compressionType                                  |
| blockIfQueueFull                                 | N           | true           | blockIfQueueFull                                 |
| roundRobinRouterBatchingPartitionSwitchFrequency | N           | 10             | roundRobinRouterBatchingPartitionSwitchFrequency |


### SortSourceConfig

| Parameter       | Required    | Type                                 | DefaultValue   | Remark                                                        |
|-----------------|-------------|--------------------------------------|----------------|---------------------------------------------------------------|
| sortClusterName | Y           | String                               | NA             | inlong-sort-standalone cluster id                             |
| sortTaskId      | Y           | String                               | NA             | Sort task name                                                |
| cacheZones      | Y           | JsonObject&lt;String, JsonObject&gt; | NA             | Cache cluster list, Map&lt;cacheClusterName, CacheCluster&gt; |

#### CacheZones
| Parameter           | Required    | Type                     | DefaultValue   | Remark                                 |
|---------------------|-------------|--------------------------|----------------|----------------------------------------|
| zoneName            | Y           | String                   | NA             | cache cluster name                     |
| zoneType            | Y           | String                   | NA             | [pulsar,tube,kafka]                    |
| serviceUrl          | Y           | String                   | NA             | Pulsar serviceUrl or Kafka broker list |
| authentication      | Y           | String                   | NA             | Pulsar authentication                  |
| cacheZoneProperties | N           | Map&lt;String,String&gt; | NA             | Cache consumer configuration           |
| topics              | N           | List&lt;Topic&gt;        | NA             | Topic list of Cache consumer           |

#### Topics
| Parameter       | Required   | Type                     | DefaultValue    | Remark                      |
|-----------------|------------|--------------------------|-----------------|-----------------------------|
| topic           | Y          | String                   | NA              | cache topic name            |
| partitionCnt    | Y          | Integer                  | NA              | cache topic partition count |
| topicProperties | N          | Map&lt;String,String&gt; | NA              | Cache topic configuration   |
