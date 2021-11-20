---
title: Architecture
---
## 1、intro

    Inlong-dataProxy belongs to the inlong proxy layer and is used for data collection, reception and forwarding. Through format conversion, the data is converted into TDMsg1 format that can be cached and processed by the cache layer
    InLong-dataProxy acts as a bridge from the InLong collection end to the InLong buffer end. Dataproxy pulls the relationship between the business group id and the corresponding topic name from the manager module, and internally manages the producers of multiple topics
    The overall architecture of inlong-dataproxy is based on Apache Flume. On the basis of this project, inlong-bus expands the source layer and sink layer, and optimizes disaster tolerance forwarding, which improves the stability of the system.


## 2、architecture

![](img/architecture.png)

 	1. The source layer opens port monitoring, which is realized through netty server. The decoded data is sent to the channel layer
 	2. The channel layer has a selector, which is used to choose which type of channel to go. If the memory is eventually full, the data will be processed.
 	3. The data of the channel layer will be forwarded through the sink layer. The main purpose here is to convert the data to the TDMsg1 format and push it to the cache layer (tube is more commonly used here)

## 3、DataProxy support configuration instructions

DataProxy supports configurable source-channel-sink, and the configuration method is the same as the configuration file structure of flume:

Source configuration example and corresponding notes:

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
    The new function of v1.7 version, optional, the default is false, used to open the exception channel, when an exception occurs, the data is written to the exception channel to prevent other normal data transmission (the open source version does not add this function), Details: Increase the local disk of abnormal data landing

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


Channel configuration examples and corresponding annotations

memory channel

    agent1.channels.ch-more1.type = memory
    memory channel type

    agent1.channels.ch-more1.capacity = 10000000
    Memory channel queue size, the maximum number of messages that can be cached

    agent1.channels.ch-more1.keep-alive = 0
    
    agent1.channels.ch-more1.transactionCapacity = 20
    The maximum number of batches are processed in atomic operations, and the memory channel needs to be locked when used, so there will be a batch process to increase efficiency

file channel

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

Sink configuration example and corresponding notes

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
