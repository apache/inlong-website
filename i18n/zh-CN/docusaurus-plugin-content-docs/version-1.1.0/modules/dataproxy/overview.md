---
title: 总览
---

InLong-dataProxy属于inlong proxy层，用于数据的汇集接收以及转发。通过格式转换，将数据转为cache层可以缓存处理的TDMsg1格式
InLong-dataProxy充当了InLong采集端到InLong缓冲端的桥梁，dataproxy从manager模块拉取业务id与对应topic名称的关系，内部管理多个topic的生产者
当dataproxy收到消息时，会首先缓存到本地的Channel中，并使用本地的producer往后端即cache层发送数据
InLong-dataProxy整体架构基于Apache Flume。inlong-dataproxy在该项目的基础上，扩展了source层和sink层，并对容灾转发做了优化处理，提升了系统的稳定性。
    
## 架构

![](img/architecture.png)

- Source层开启端口监听，通过netty server实现。解码之后的数据发到channel层
- channel层有一个selector，用于选择走哪种类型的channel，如果memory最终满了，会对数据做落地处理
- channel层的数据会通过sink层做转发，这里主要是将数据转为TDMsg1的格式，并推送到cache层（这里用的比较多的是tube）


## DataProxy功能配置说明

DataProxy 支持配置化的 source-channel-sink，配置方式与 flume 的配置文件结构类似。配置文件放在 dataproxy-*.conf 文件中，目前支持 dataproxy-pulsar.conf 和 dataproxy-tube.conf 两种，用于区分不同的中间件类型，具体类型可以在启动时指定，默认（未指定时）使用 dataproxy-pulsar.conf 作为配置文件

- Source配置示例：

```shell
agent1.sources.tcp-source.channels = ch-msg1 ch-msg2 ch-msg3 ch-more1 ch-more2 ch-more3 ch-msg5 ch-msg6 ch-msg7 ch-msg8 ch-msg9 ch-msg10 ch-transfer ch-back
定义source中使用到的channel，注意此source下面的配置如果有使用到channel，均需要在此注释

agent1.sources.tcp-source.type = org.apache.flume.source.SimpleTcpSource
tcp解析类型定义，这里提供类名用于实例化，SimpleTcpSource主要是初始化配置并启动端口监听

agent1.sources.tcp-source.msg-factory-name = org.apache.flume.source.ServerMessageFactory
用于构造消息解析的handler，并设置read stream handler和write stream handler

agent1.sources.tcp-source.host = 0.0.0.0    
tcp ip绑定监听，默认绑定所有网卡

agent1.sources.tcp-source.port = 46801
tcp 端口绑定，默认绑定46801端口

agent1.sources.tcp-source.highWaterMark=2621440 
netty概念，设置netty高水位值

agent1.sources.tcp-source.max-msg-length = 524288
限制单个包大小，这里如果传输的是压缩包，则是压缩包大小，限制512KB

agent1.sources.tcp-source.topic = test_token
默认topic值，如果groupId和topic的映射关系找不到，则发送到此topic中

agent1.sources.tcp-source.attr = m=9
默认m值设置，这里的m值是inlong内部TdMsg协议的版本

agent1.sources.tcp-source.connections = 5000
并发连接上线，超过上限值时会对新连接做断链处理

agent1.sources.tcp-source.max-threads = 64
netty线程池工作线程上限，一般推荐选择cpu的两倍

agent1.sources.tcp-source.receiveBufferSize = 524288
netty server tcp调优参数

agent1.sources.tcp-source.sendBufferSize = 524288
netty server tcp调优参数

agent1.sources.tcp-source.custom-cp = true
是否使用自研的channel process，自研channel process可在主channel阻塞时，选择备用channel发送

agent1.sources.tcp-source.selector.type = org.apache.flume.channel.FailoverChannelSelector
这个channel selector就是自研的channel selector，和官网的差别不大，主要是有channel主从选择逻辑

agent1.sources.tcp-source.selector.master = ch-msg5 ch-msg6 ch-msg7 ch-msg8 ch-msg9
指定master channel，这些channel会被优先选择用于数据推送。那些不在master、transfer、fileMetric、slaMetric配置项里的channel，但在
channels里面有定义的channel，统归为slave channel，当master channel都被占满时，就会选择使用slave channel，slave channel一般建议使用file channel类型

agent1.sources.tcp-source.selector.transfer = ch-msg5 ch-msg6 ch-msg7 ch-msg8 ch-msg9
指定transfer channel，承接transfer类型的数据，这里的transfer一般是指推送到非tube集群的数据，仅做转发，这里预留出来供后续功能使用

agent1.sources.tcp-source.selector.fileMetric = ch-back
指定fileMetric channel，用于接收agent上报的指标数据
```

- Channel配置示例，memory channel：

```shell
agent1.channels.ch-more1.type = memory
memory channel类型

agent1.channels.ch-more1.capacity = 10000000
memory channel 队列大小，可缓存最大消息条数

agent1.channels.ch-more1.keep-alive = 0

agent1.channels.ch-more1.transactionCapacity = 20
原子操作时批量处理最大条数，memory channel使用时需要用到加锁，因此会有批处理流程增加效率
```

- Channel配置示例，file channel：

```shell
agent1.channels.ch-msg5.type = file
file channel类型

agent1.channels.ch-msg5.capacity = 100000000
file channel最大可缓存消息条数

agent1.channels.ch-msg5.maxFileSize = 1073741824
file channel文件最大上限，字节数

agent1.channels.ch-msg5.minimumRequiredSpace = 1073741824
file channel所在磁盘最小可用空间，设置此值可以防止磁盘写满

agent1.channels.ch-msg5.checkpointDir = /data/work/file/ch-msg5/check
file channel checkpoint路径

agent1.channels.ch-msg5.dataDirs = /data/work/file/ch-msg5/data
file channel数据路径

agent1.channels.ch-msg5.fsyncPerTransaction = false
是否对每个原子操作做同步磁盘，建议改false，否则会对性能有影响

agent1.channels.ch-msg5.fsyncInterval = 5
数据从内存flush到磁盘的时间间隔，单位秒
```

- Sink配置示例：

```shell
agent1.sinks.meta-sink-more1.channel = ch-msg1
sink的上游channel名称

agent1.sinks.meta-sink-more1.type = org.apache.flume.sink.MetaSink
sink类实现，此处实现消息向tube集群推送数据

agent1.sinks.meta-sink-more1.master-host-port-list = 
tube集群master节点列表

agent1.sinks.meta-sink-more1.send_timeout = 30000
发送到tube时超时时间限制

agent1.sinks.meta-sink-more1.stat-interval-sec = 60
sink指标统计间隔时间，单位秒

agent1.sinks.meta-sink-more1.thread-num = 8
Sink类发送消息的工作线程，8表示启动8个并发线程

agent1.sinks.meta-sink-more1.client-id-cache = true
agent id缓存，用于检查agent上报数据去重

agent1.sinks.meta-sink-more1.max-survived-time = 300000
缓存最大时间

agent1.sinks.meta-sink-more1.max-survived-size = 3000000
缓存最大个数
```
    
## 监控指标配置

  DataProxy提供了JMX方式的监控指标Listener能力，用户可以实现MetricListener接口，注册后可以定期接收监控指标，用户选择将指标上报自定义的监控系统。Source和Sink模块可以通过将指标数据统计到org.apache.inlong.commons.config.metrics.MetricItemSet的子类中，并注册到MBeanServer。用户自定义的MetricListener通过JMX方式收集指标数据并上报到外部监控系统

  用户能在配置文件common.propetiese增加如下配置，例如：

```shell
metricDomains=DataProxy
metricDomains.DataProxy.domainListeners=org.apache.inlong.dataproxy.metrics.prometheus.PrometheusMetricListener
metricDomains.DataProxy.snapshotInterval=60000
```

- 统一的JMX域名：DataProxy，并定义在参数metricDomains下；自定义的Source、Sink等组件也可以上报到不同的JMX域名。
- 对一个JMX域名的监控指标MetricListener可以配置在metricDomains.$domainName.domainListeners参数里，可以配置多个，用空格分隔类名。
- 这些监控指标MetricListener需要实现接口：org.apache.inlong.dataproxy.metrics.MetricListener。
- 快照参数：metricDomains.$domainName.snapshotInterval，定义拉取一次监控指标数据的间隔时间，参数单位是毫秒。

org.apache.inlong.dataproxy.metrics.MetricListener接口的方法原型：
```java  
public void snapshot(String domain, List<MetricItemValue> itemValues);
```

监控指标项的MetricItemValue.dimensions有这些维度(DataProxyMetricItem的这些字段通过注解Annotation "@Dimension"定义):

|  property   | description  |
|  ----  | ----  |
|  clusterId |  DataProxy集群ID |  
|  sourceId|  DataProxy的Source组件名 |  
|  sourceDataId|  DataProxy的Source组件数据流ID，如果Source是一个TCPSource，那么这个ID会是一个端口号 |  
|  inlongGroupId|  Inlong数据ID |  
|  inlongStreamId|  Inlong数据流ID |  
|  sinkId|  DataProxy的Sink组件名 |  
|  sinkDataId|  DataProxy的Sink组件数据流ID，如果Sink是一个Pulsar发送组件，这个ID会是一个Topic名。 |

监控指标项的MetricItemValue.metrics有这些指标(DataProxyMetricItem的这些字段通过注解Annotation "@CountMetric"定义):

|  property   | description  |
|  ----  | ----  |
|  readSuccessCount |  接收成功条数 |  
|  readSuccessSize |  接收成功大小，单位：byte |  
|  readFailCount |  接收失败条数 |  
|  readFailSize |  接收失败大小，单位：byte |  
|  sendCount |  发送条数 |  
|  sendSize |  发送大小，单位：byte |  
|  sendSuccessCount |  发送成功条数 |  
|  sendSuccessSize |  发送成功大小，单位：byte |  
|  sendFailCount |  发送失败条数 |  
|  sendFailSize |  发送失败大小，单位：byte |  
|  sinkDuration |  发送成功回调时间和发送开始时间的时间差，用于评估目标集群的处理时延和健康状况，单位：毫秒 |  
|  nodeDuration |  发送成功回调时间和接收成功时间的时间差，用于评估DataProxy内部处理耗时和健康状况，单位：毫秒 |  
|  wholeDuration |  发送成功回调时间和事件生成时间的时间差，单位：毫秒 |

监控指标已经注册到MBeanServer，用户可以在DataProxy的启动参数中增加如下类似JMX定义（端口和鉴权根据情况进行调整），实现监控指标从远端采集。
```shell
	-Dcom.sun.management.jmxremote
	-Djava.rmi.server.hostname=127.0.0.1
	-Dcom.sun.management.jmxremote.port=9999
	-Dcom.sun.management.jmxremote.authenticate=false
	-Dcom.sun.management.jmxremote.ssl=false
```
