---
title: Overview
---

Inlong-dataProxy belongs to the inlong proxy layer and is used for data collection, reception and forwarding. Through format conversion, the data is converted into TDMsg1 format that can be cached and processed by the cache layer
InLong-dataProxy acts as a bridge from the InLong collection end to the InLong buffer end. Dataproxy pulls the relationship between the business group id and the corresponding topic name from the manager module, and internally manages the producers of multiple topics
The overall architecture of inlong-dataproxy is based on Apache Flume. On the basis of this project, inlong-bus expands the source layer and sink layer, and optimizes disaster tolerance forwarding, which improves the stability of the system.

## Architecture

![](img/architecture.png)

- The source layer opens port monitoring, which is realized through netty server. The decoded data is sent to the channel layer
- The channel layer has a selector, which is used to choose which type of channel to go. If the memory is eventually full, the data will be processed.
- The data of the channel layer will be forwarded through the sink layer. The main purpose here is to convert the data to the TDMsg1 format and push it to the cache layer (tube is more commonly used here)

## DataProxy Configuration

DataProxy supports configurable source-channel-sink, which is similar to flume's configuration file structure. The configuration file name is such as dataproxy-*.conf. Currently, dataproxy-pulsar.conf and dataproxy-tube.conf are supported to distinguish different message middleware types. The specific type can be specified when startup. The default (when not specified) ) using dataproxy-pulsar.conf as configuration file.

- Source configuration example:
```shell
agent1.sources.tcp-source.channels = ch-msg1 ch-msg2 ch-msg3 ch-more1 ch-more2 ch-more3 ch-msg5 ch-msg6 ch-msg7 ch-msg8 ch-msg9 ch-msg10 ch-transfer ch -Back
Define the channel used in the source. Note that if the configuration below this source uses the channel, it needs to be annotated here

agent1.sources.tcp-source.type = org.apache.flume.source.SimpleTcpSource
tcp resolution type definition, here provide the class name for instantiation, SimpleTcpSource is mainly to initialize the configuration and start port monitoring

agent1.sources.tcp-source.msg-factory-name = org.apache.flume.source.ServerMessageFactory
Handler used for message structure analysis, and set read stream handler and write stream handler

agent1.sources.tcp-source.host = 0.0.0.0
tcp ip binding monitoring, binding all network cards by default

agent1.sources.tcp-source.port = 46801
tcp port binding, port 46801 is bound by default

agent1.sources.tcp-source.highWaterMark=2621440
The concept of netty, set the netty high water level value

agent1.sources.tcp-source.enableExceptionReturn=true
The new function of v1.7 version, optional, the default is false, used to open the exception channel, when an exception occurs, the data is written to the exception channel to prevent other normal data transmission (the open source version does not add this function), Details  |  Increase the local disk of abnormal data landing

agent1.sources.tcp-source.max-msg-length = 524288
Limit the size of a single package, here if the compressed package is transmitted, it is the compressed package size, the limit is 512KB

agent1.sources.tcp-source.topic = test_token
The default topic value, if the mapping relationship between groupId and topic cannot be found, it will be sent to this topic

agent1.sources.tcp-source.attr = m=9
The default value of m is set, where the value of m is the version of inlong's internal TdMsg protocol

agent1.sources.tcp-source.connections = 5000
Concurrent connections go online, new connections will be broken when the upper limit is exceeded

agent1.sources.tcp-source.max-threads = 64
Netty thread pool work thread upper limit, generally recommended to choose twice the cpu

agent1.sources.tcp-source.receiveBufferSize = 524288
Netty server tcp tuning parameters

agent1.sources.tcp-source.sendBufferSize = 524288
Netty server tcp tuning parameters

agent1.sources.tcp-source.custom-cp = true
Whether to use the self-developed channel process, the self-developed channel process can select the alternate channel to send when the main channel is blocked

agent1.sources.tcp-source.selector.type = org.apache.flume.channel.FailoverChannelSelector
This channel selector is a self-developed channel selector, which is not much different from the official website, mainly because of the channel master-slave selection logic

agent1.sources.tcp-source.selector.master = ch-msg5 ch-msg6 ch-msg7 ch-msg8 ch-msg9
Specify the master channel, these channels will be preferentially selected for data push. Those channels that are not in the master, transfer, fileMetric, and slaMetric configuration items, but are in
There are defined channels in channels, which are all classified as slave channels. When the master channel is full, the slave channel will be selected. Generally, the file channel type is recommended for the slave channel.

agent1.sources.tcp-source.selector.transfer = ch-msg5 ch-msg6 ch-msg7 ch-msg8 ch-msg9
Specify the transfer channel to accept the transfer type data. The transfer here generally refers to the data pushed to the non-tube cluster, which is only for forwarding, and it is reserved for subsequent functions.

agent1.sources.tcp-source.selector.fileMetric = ch-back
Specify the fileMetric channel to receive the metric data reported by the agent
```

- Channel configuration examples, memory channel:

```shell
agent1.channels.ch-more1.type = memory
memory channel type

agent1.channels.ch-more1.capacity = 10000000
Memory channel queue size, the maximum number of messages that can be cached

agent1.channels.ch-more1.keep-alive = 0

agent1.channels.ch-more1.transactionCapacity = 20
The maximum number of batches are processed in atomic operations, and the memory channel needs to be locked when used, so there will be a batch process to increase efficiency
```

- Channel configuration examples, file channel:

```shell
agent1.channels.ch-msg5.type = file
file channel type

agent1.channels.ch-msg5.capacity = 100000000
The maximum number of messages that can be cached in a file channel

agent1.channels.ch-msg5.maxFileSize = 1073741824
file channel file maximum limit, the number of bytes

agent1.channels.ch-msg5.minimumRequiredSpace = 1073741824
The minimum free space of the disk where the file channel is located. Setting this value can prevent the disk from being full

agent1.channels.ch-msg5.checkpointDir = /data/work/file/ch-msg5/check
file channel checkpoint path

agent1.channels.ch-msg5.dataDirs = /data/work/file/ch-msg5/data
file channel data path

agent1.channels.ch-msg5.fsyncPerTransaction = false
Whether to synchronize the disk for each atomic operation, it is recommended to change it to false, otherwise it will affect the performance

agent1.channels.ch-msg5.fsyncInterval = 5
The time interval between data flush from memory to disk, in seconds
```

- Sink configuration example:

```shell
agent1.sinks.meta-sink-more1.channel = ch-msg1
The upstream channel name of the sink

agent1.sinks.meta-sink-more1.type = org.apache.flume.sink.MetaSink
The sink class is implemented, where the message is implemented to push data to the tube cluster

agent1.sinks.meta-sink-more1.master-host-port-list =
Tube cluster master node list

agent1.sinks.meta-sink-more1.send_timeout = 30000
Timeout limit when sending to tube

agent1.sinks.meta-sink-more1.stat-interval-sec = 60
Sink indicator statistics interval time, in seconds

agent1.sinks.meta-sink-more1.thread-num = 8
Sink class sends messages to the worker thread, 8 means to start 8 concurrent threads

agent1.sinks.meta-sink-more1.client-id-cache = true
agent id cache, used to check the data reported by the agent to remove duplicates

agent1.sinks.meta-sink-more1.max-survived-time = 300000
Maximum cache time

agent1.sinks.meta-sink-more1.max-survived-size = 3000000
Maximum number of caches
```

## Monitor Metrics configuration

  DataProxy provide monitor indicator based on JMX, user can implement the code that read the metrics and report to user-defined monitor system.
Source-module and Sink-module can add monitor metric class that is the subclass of org.apache.inlong.commons.config.metrics.MetricItemSet, and register it to MBeanServer. User-defined plugin can get module metric with JMX, and report metric data to different monitor system.

  User can describe the configuration in the file "common.properties ". For example:

```shell
metricDomains=DataProxy
metricDomains.DataProxy.domainListeners=org.apache.inlong.dataproxy.metrics.prometheus.PrometheusMetricListener
metricDomains.DataProxy.snapshotInterval=60000
```

- The JMX domain name of DataProxy is "DataProxy". 
- It is defined by the parameter "metricDomains".
- The listeners of JMX domain is defined by the parameter "metricDomains.$domainName.domainListeners".
- The class names of the listeners is separated by the space char.
- The listener class need to implement the interface "org.apache.inlong.dataproxy.metrics.MetricListener".
- The snapshot interval of the listeners is defined by the parameter "metricDomains.$domainName.snapshotInterval", the parameter unit is "millisecond".

The method proto of org.apache.inlong.dataproxy.metrics.MetricListener is:
```java
public void snapshot(String domain, List itemValues);
```

The field of MetricItemValue.dimensions has these dimensions(The fields of DataProxyMetricItem defined by the Annotation "@Dimension"):

|  property   | description  |
|  ----  | ----  |
|  clusterId  |  DataProxy cluster ID. |
|  sourceId  |  DataProxy source component name. |
|  sourceDataId  |  DataProxy source component data id, when source is a TCP source, it will be port number. |
|  inlongGroupId  |  Inlong data group ID. |
|  inlongStreamId  |  Inlong data stream ID. |
|  sinkId  |  DataProxy sink component name. |
|  sinkDataId  |  DataProxy sink component data id, when sink is a pulsar sink, it will be topic name. |

The field of MetricItemValue.metrics has these metrics(The fields of DataProxyMetricItem defined by the Annotation "@CountMetric"):

|  property   | description  |
|  ----  | ----  |
|  readSuccessCount  |  Successful event count reading from source component. |
|  readSuccessSize  |  Successful event body size reading from source component. |
|  readFailCount  |  Failure event count reading from source component. |
|  readFailSize  |  Failure event body size reading from source component. |
|  sendCount  |  Event count sending to sink destination. |
|  sendSize  |  Event body size sending to sink destination. |
|  sendSuccessCount  |  Successful event count sending to sink destination. |
|  sendSuccessSize  |  Successful event body size sending to sink destination.	 |
|  sendFailCount  |  Failure event count sending to sink destination. |
|  sendFailSize  |  Failure event body size sending to sink destination. |
|  sinkDuration  |  The unit is millisecond, the duration is between current timepoint and the timepoint in sending to sink destination. |
|  nodeDuration  |  The unit is millisecond, the duration is between current timepoint and the timepoint in getting event from source. |
|  wholeDuration  |  The unit is millisecond, the duration is between current timepoint and the timepoint in generating event. |

Monitor indicators have registered to MBeanServer, user can append JMX parameters when running DataProxy, remote server can get monitor metrics with RMI.
```shell
-Dcom.sun.management.jmxremote
-Djava.rmi.server.hostname=127.0.0.1
-Dcom.sun.management.jmxremote.port=9999
-Dcom.sun.management.jmxremote.authenticate=false
-Dcom.sun.management.jmxremote.ssl=false
```
