---
title: 总览
sidebar_position: 1
---

InLong DataProxy 主要有连接收敛、路由、数据压缩和协议转换等作用。DataProxy 充当了 InLong 采集端到消息队列的桥梁，
当 DataProxy 从 Manager 模块拉取数据流元数据后，数据流和消息队列 Topic 名称对应关系也就确定了。当 DataProxy 收到消息时，会首先发送到 Memory Channel 中进行压缩，
并使用本地的 Producer 往后端 Cache 层（即消息队列）发送数据。当消息队列异常出现发送失败时，DataProxy 会将消息缓存到 Disk Channel，也就是本地磁盘中。 
InLong DataProxy 整体架构基于 Apache Flume，扩展了 Source 层和 Sink 层，并对容灾转发做了优化处理，提升了系统的稳定性。
    
## 架构

![](img/architecture.png)

- Source层开启端口监听，通过netty server实现。解码之后的数据发到channel层
- channel层有一个selector，用于选择走哪种类型的channel，如果memory最终满了，会对数据做落地处理
- channel层的数据会通过sink层做转发，这里主要是将数据转为TDMsg1的格式，并推送到cache层（这里用的比较多的是tube）


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
