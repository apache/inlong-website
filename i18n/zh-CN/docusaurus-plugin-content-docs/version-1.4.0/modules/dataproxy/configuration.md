---
title: 参数配置
sidebar_position: 3
---

## 基本配置（ common.properties ）

| 参数                                                      | 描述                          | 默认值                                  | 备注                                                                             |
|---------------------------------------------------------|-----------------------------|--------------------------------------|--------------------------------------------------------------------------------|
| manager.hosts                                           | Manager 服务器 IP 和端口列表        | 127.0.0.1:8083                      | 不允许为空，格式按照 {ip1:port1}[,{ip2:port2}][,{ip3:port3}] 格式进行配置                      |
| manager.auth.secretId                                   | 登录所需帐号                      | 无                                    | 允许为空不填写                                                                        |
| manager.auth.secretKey                                  | 登录所需密码                      | 无                                    | 允许为空不填写                                                                        |
| proxy.cluster.tag                                       | dataproxy 所处的集群 Tag 名       | default_cluster                      | 一个集群 Tag 里可以包含多个 dataproxy、MQ 的集群                                              |
| proxy.cluster.name                                      | dataproxy 所处的集群名            | default_dataproxy                    | 用于区分不同的环境                                                                      |
| proxy.cluster.inCharges                                 | dataproxy 所处的集群负责人          | admin                                |                                                                                |
| configCheckInterval                                     | conf 目录的配置文件检查及加载间隔（单位 ms ） | 10000                          |                                                                                |
| metricDomains                                           | JMX 域名                      | DataProxy                             | 通过该配置值获取如下 “metricDomains.${metricDomains}.xxx” 的配置项                           |
| metricDomains.DataProxy.domainListeners                 | 指标监听的类，通过该类名反射开启服务          | org.apache.inlong.dataproxy.metrics.prometheus.PrometheusMetricListener    | 如果存在多个指标监听类配置，通过空格、回车，或换行符进行分隔                                                 |
| metricDomains.DataProxy.snapshotInterval                | 周期性上报指标的时隙（单位 ms ）          | 60000                             |                                                                                |
| prometheusHttpPort                                      | 使用 Prometheus 上报时设置的端口号     | 9081                               |                                                                                |
| audit.enable                                            | 是否开启数据上报 InLong-Audit 服务    | true                                |                                                                                |
| audit.proxys                                            | InLong-Audit 服务的地址          | 127.0.0.1:10081                      | 格式按照 {ip1:port1}[ {ip2:port2}][ {ip3:port3}] 进行配置，不同 ip:port 间通过空格、回车，或换行符进行分隔 |


## 日志输出配置（ log4j2.xml ）
DataProxy 采用的是 Log4j2 输出日志，相关配置基于 Log4j2 进行设置，本配置只提及常用设置项：

| 参数                      | 描述                    | 默认值   | 备注              |
|-------------------------|-----------------------|-------|-----------------|
| basePath      | 日志文件的存储路径             | ${sys:dataproxy.log.path}    |                 |
| every_file_size      | 每个日志文件的大小，单位字节        | 1G    |                 |
| output_log_level | 日志输出级别                | DEBUG | 线上使用时建议设置为 INFO |
| rolling_max    | 同类型日志同一目录下可存放的数量      | 50    |                 |
| debug_max    | DEBUG 类型日志同一目录下可存放的数量 | 7     |                 |
| info_max    | INFO 类型日志同一目录下可存放的数量  | 7     |                 |
| warn_max    | WARN 类型日志同一目录下可存放的数量  | 7     |                 |
| error_max    | ERROR 类型日志同一目录下可存放的数量 | 7     |                 |


## 其他自动更新配置
DataProxy 启动并成功链接到 Manager 后，会自动从 Manager 同步运行配置，并定期更新，如下部分配置不可修改

| 配置文件名            | 描述                         |  备注             |
|------------------|----------------------------|-----------------|
| mq_cluster.properties         | MQ 集群配置                    |     |
| topics.properties  | groupId 到 MQ 的 Topic 的映射配置 |     |
| weight.properties | 系统负载权重配置                   |  |



## source-channel-sink 管道配置（dataproxy-{tube|pulsar}.conf）

DataProxy 支持配置化的 source-channel-sink，配置方式与 flume 的配置文件结构一致，修改该配置文件时要按照 Apache flume 的配置文件定义来进行修改。配置文件放在 dataproxy-{tube|pulsar}.conf 文件中，目前支持 dataproxy-pulsar.conf 和 dataproxy-tube.conf 两种，用于区分不同的中间件类型，具体类型可以在启动时指定，默认（未指定时）使用 dataproxy-pulsar.conf 作为配置文件。 如下是针对该配置文件的示例：

- Source 配置示例：

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

- Channel 配置示例，memory channel：

```shell
agent1.channels.ch-more1.type = memory
memory channel类型

agent1.channels.ch-more1.capacity = 10000000
memory channel 队列大小，可缓存最大消息条数

agent1.channels.ch-more1.keep-alive = 0

agent1.channels.ch-more1.transactionCapacity = 20
原子操作时批量处理最大条数，memory channel使用时需要用到加锁，因此会有批处理流程增加效率
```

- Channel 配置示例，file channel：

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

- Sink 配置示例：

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
    