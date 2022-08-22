---
title: DataProxy 扩展
sidebar_position: 4
---

## 总览

本文面向 DataProxy 开发人员，尝试尽可能全面地阐述扩展一个 MQ DataProxy 所经过的历程，力求消除开发者的困惑，让 DataProxy 扩展新的 MQ 变得简单。
## 扩展 DataProxy MQ

扩展一个 新的 MQ DataProxy 主要分为两个步：
### 第一步：

继承实现 AbstractZoneClusterProducer 类。这个类的主要功能是加载对应的 MQ 配置项来配置和初始化特定的MQ集群，建立对应的 PulsarClient 和 ProducerBuilder。
这个类的位置在：
``` shell
rg.apache.inlong.dataproxy.sink.mqzone
```
重写 start() 方法，根据对应的 MQ 配置创建对应的 MQ client 和 producerBuilder。
然后重写 ``public boolean send(DispatchProfile event)`` 方法。
### 第二步：

继承实现 `AbstactZoneWorker`，`AbstractZoneProducer`，`AbstractZoneSink`，`AbstractZoneSinkContext` 类。
这些类的绝大部分功能在父类中都已经实现了，基础功能中只有新建 ZoneWorker 和 ZoneClusterProducer 的部分有些不同，
所以我们通过两个 lambda 接口 `ZoneWorkerCalculator` 和 `ZoneClusterProducerCalculator` 来抽象它们。
子类中只需要实现这两个接口即可。具体的可以参考 `org.apache.inlong.dataproxy.sink.mqzone.impl` 包下的其他三个MQ的实现。
## 工作流程

### 初始化

flume根据配置调用对应的 AbstractZoneSink 的实现类，比如 PulsarZoneSink， 然后 PulsarZoneSink 会创建 PulsarZoneSinkContext 和 PulsarZoneWorker，
PulsarZoneWorker 会创建 PulsarZoneProducer，PulsarZoneProducer 在去创建 PulsarClusterProducer。
### 详解

* xxZoneSink 是 flume 的抽象类 AbstractSink 的子类，和一个 Context 和 channel 绑定，用于从 channel 中获取数据进行转发处理。
* xxZoneSinkContext 主要用于存储配置项信息，metric和其他上下文。 它会在 xxZoneSink 中创建然后从 xxZoneWorker 到 xxZoneProducer，
最后传入 xxZoneClusterProducer。
* xxZoneWorker 用于发送消息的任务类，会不断的从 dispatchQueue 中获取数据然后通过 xxZoneProducer 向外发送。
* xxZoneProducer, 用于通过轮询的方式向MQ集群发送消息。在创建时根据配置来创建对应数量的 xxZoneClusterProducer，
在需要发送消息时，通过这些 xxZoneClusterProducer 以轮询的方式向这些 Cluster 发送消息。
