---
title: Deployment
sidebar_position: 2
---
## Prepare to get module archive
Module archive is in the directory:inlong-sort-standalone/sort-standalone-dist/target/, the archive file is apache-inlong-sort-standalone-${project.version}-bin.tar.gz.

## Start inlong-sort-standalone application
- Decompress the archive file;
- Prepare conf/common.properties (and other config files if choosing local file config mode);
- Start SortStandalone ```./bin/sort-start.sh```
- You can check the log file "sort.log".

## Configuration file:conf/common.properties
| Parameter                               | Required | DefaultValue                                                                     | Remark                                                                                     |
|-----------------------------------------|----------|----------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| clusterId                               | Y        | NA                                                                               | inlong-sort-standalone cluster id                                                          |
| sortSource.type                         | N        | org.apache.inlong.sort.standalone.source.readapi.SortSdkSource                   | Source class name                                                                          |
| sortChannel.type                        | N        | org.apache.inlong.sort.standalone.channel.BufferQueueChannel                     | Channel class name                                                                         |
| sortSink.type                           | N        | org.apache.inlong.sort.standalone.sink.hive.HiveSink                             | Sink class name                                                                            |
| sortClusterConfig.type                  | Y        | manager                                                                          | ClusterConfig configuration type. File config mode please choose: ***file***               |
| sortSourceConfig.QueryConsumeConfigType | Y        | manager                                                                          | SourceConfig configuration type. File config mode please choose: ***file***                |
| sortClusterConfig.file                  | N        | SortClusterConfig.conf                                                           | Sort cluster config file name. ***Required in file config type.***                         |
| managerUrlLoaderType                    | N        | org.apache.inlong.sort.standalone.config.loader.CommonPropertiesManagerUrlLoader | The type of manager url loader. ***Required in manager config type.***                     |
| sortClusterConfig.managerUrl            | N        | http://${manager_ip}:{manager_port}/inlong/manager/openapi/sort/getClusterConfig | The manager config interface to cluster config. ***Required in manager config type.***     |
 | sortSourceConfig.managerUrl             | N        | http://${manager_ip}:{manager_port}/inlong/manager/openapi/sort/getSortSource    | The manager config interface to sort source config. ***Required in manager config mode.*** |
| eventFormatHandler                      | N        | org.apache.inlong.sort.standalone.sink.hive.DefaultEventFormatHandler            | Formatter class name                                                                       |
| maxThreads                              | N        | 10                                                                               | sink thread number                                                                         |
| reloadInterval                          | N        | 60000                                                                            | interval updating Configuration data(millisecond)                                          |
| processInterval                         | N        | 100                                                                              | interval processing data(millisecond)                                                      |
| metricDomains                           | N        | Sort                                                                             | domain name of metric                                                                      |
| metricDomains.Sort.domainListeners      | N        | org.apache.inlong.sort.standalone.metrics.prometheus.PrometheusMetricListener    | class name list of metric listener, separated by space                                     |
| prometheusHttpPort                      | N        | 8080                                                                             | HTTP server port of prometheus simple client                                               |
| metricDomains.Sort.snapshotInterval     | N        | 60000                                                                            | interval snapshoting metric data(millisecond)                                              |

## SortClusterConfig
The SortClusterConfig can be acquired from local file or manager, depending on the ***sortClusterConfig.type*** configured in common.properties.

| Parameter   | Required    | DefaultValue   | Remark                            |
|-------------|-------------|----------------|-----------------------------------|
| clusterName | Y           | NA             | inlong-sort-standalone cluster id |
| sortTasks   | Y           | NA             | Sort task list                    |

### SortTask
Sort Task includes ***idParams and sinkParams*** which represent the config of ***stream and dataNode*** respectively

The idParams and sinkParams are totally different among each type of sort tasks. There are two examples of hive task and pulsar task 

| Parameter  | Required   | DefaultValue   | Remark                                                                                                                                 |
|------------|------------|----------------|----------------------------------------------------------------------------------------------------------------------------------------|
| name       | Y          | NA             | sort task name                                                                                                                         |
| type       | Y          | NA             | sort task type, for example:HIVE("hive"), TUBE("tube"), KAFKA("kafka"), PULSAR("pulsar"), ElasticSearch("ElasticSearch"), UNKNOWN("n") |
| idParams   | Y          | NA             | List of Inlong DataStream configuration                                                                                                |
| sinkParams | Y          | NA             | Sort task parameters                                                                                                                   |


### idParams content of Hive sort task
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

### sinkParams content of Hive sort task
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

### idParams content of Pulsar sort task
| Parameter      | Required   | DefaultValue    | Remark         |
|----------------|------------|-----------------|----------------|
| inlongGroupId  | Y          | NA              | inlongGroupId  |
| inlongStreamId | Y          | NA              | inlongStreamId |
| topic          | Y          | NA              | Topic of MQ    |

### sinkParams content of Pulsar sort task
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


