---
title: Configuration
sidebar_position: 3
---
## Basic Configuration (common.properties)

| Parameter                                                     | Description                                                                                         | Default                                  | Notes                                                                                                                                                          |
|--------------------------------------------------------|-----------------------------------------------------------------------------------------------------|--------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| manager.hosts                                           | InLong-Manager http host and port                                                                   | 127.0.0.1:8083                        | Empty is not allowed, the format is configured according to the format of {ip1:port1}[,{ip2:port2}][,{ip3:port3}]                                              |
| manager.auth.secretId                                   | InLong-Manager authentic secretId                                                                   | `blank`                                 | If InLong-Manager doesn't open authentic service, this parameter can be empty.                                                                                 |
| manager.auth.secretKey                                  | InLong-Manager authentic secretKey                                                                  | `blank`                                    |                                                                                                                                                                |
| proxy.cluster.tag                                       | The cluster Tag name where the dataproxy is located                                                 | default_cluster                      | A cluster Tag can contain multiple dataproxy and MQ clusters                                                                                                   |
| proxy.cluster.name                                      | The cluster name where dataproxy is located                                                         | default_dataproxy                    | used to distinguish different environments                                                                                                                     |
| proxy.cluster.inCharges                                 | The incharge of the cluster where dataproxy is located                                              | admin                                |                                                                                                                                                                |
| configCheckInterval                                     | Configuration file checking and loading interval of the conf directory (unit: ms)                   | 10000                          |                                                                                                                                                                |
| metricDomains                                           | JMX domain name                                                                                     | DataProxy                             | Obtain the following configuration items of "metricDomains.${metricDomains}.xxx" through this configuration value                                              |
| metricDomains.DataProxy.domainListeners                 | The class for indicator monitoring, and the service is started through reflection of the class name | org.apache.inlong.dataproxy.metrics.prometheus.PrometheusMetricListener    | If there are multiple indicator monitoring class configurations, separate them by spaces, carriage returns, or line feeds                                      |
| metricDomains.DataProxy.snapshotInterval                | Time interval for periodic reporting of indicators (unit: ms)                                       | 60000                             |                                                                                                                                                                |
| prometheusHttpPort                                      | The port when reporting using Prometheus                                                            | 9081                               |                                                                                                                                                                |
| audit.enable                                            | Whether to enable data reporting InLong-Audit service                                               | true                                |                                                                                                                                                                |
| audit.proxys                                            | The address of the InLong-Audit service                                                             | 127.0.0.1:10081                      | The format is configured according to {ip1:port1}[ {ip2:port2}][ {ip3:port3}], and different ip:ports are separated by spaces, carriage returns, or line feeds |


## Log Output Configuration（log4j2.xml）
DataProxy uses Log4j2 to output logs, and the related configuration is set based on Log4j2. This configuration only mentions common setting items:

| Parameter                                                     | Description                                                            | Default                                  | Notes                              |
|-------------------------|------------------------------------------------------------------------|-------|----------------|
| basePath      | Storage path of log files                                                              | ${sys:dataproxy.log.path}    |                |
| every_file_size      | The size of each log file                                                         | 1G    |                |
| output_log_level | log output level                                                                | DEBUG | It is recommended to set to INFO when using online |
| rolling_max    | The number of logs of the same type that can be stored in the same directory                            | 50    |                |
| debug_max    | The number of DEBUG type logs that can be stored in the same directory | 7     |                |
| info_max    | The number of INFO type logs that can be stored in the same directory  | 7     |                |
| warn_max    | The number of WARN type logs that can be stored in the same directory  | 7     |                |
| error_max    | The number of ERROR type logs that can be stored in the same directory | 7     |                |


## Other Auto-Update Configurations
After DataProxy is started and successfully linked to the Manager, it will automatically synchronize the running configuration from the Manager and update it regularly. The following configuration cannot be modified.

| File Name             | Description                    |  Notes             |
|-----------------------|-----------------------|-----------------|
| mq_cluster.properties | MQ cluster configuration                |     |
| topics.properties     | Mapping configuration of groupId to MQ topic |     |
| weight.properties     | System Load Weight Configuration             |  |



## Source-Channel-Sink Configuration（dataproxy-{tube|pulsar}.conf）
DataProxy supports configurable source-channel-sink, which is consistent to flume's configuration file structure,  so it should be modified according to the configuration file definition of Apache flume. The configuration file is placed in the dataproxy-{tube|pulsar}.conf file. Currently, dataproxy-pulsar.conf and dataproxy-tube.conf are supported to distinguish different middleware types. The specific type can be specified at startup. The default (when not specified) ) using dataproxy-pulsar.conf as configuration file. The following is an example for this configuration file:

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