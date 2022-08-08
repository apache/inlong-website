---
title: DataProxy 扩展
sidebar_position: 4
---

## 总览
本文面向 DataProxy 开发人员, 尝试尽可能全面地阐述扩展一个 MQ DataProxy所经过的历程, 力求消除开发者的困惑，让DataProxy扩展新的MQ变得简单。
## 扩展 DataProxy MQ
扩展一个 新的MQ DataProxy 主要分为两个步骤：
### 第一步：
继承实现AbstractZoneClusterProducer类。这个类的主要功能是加载对应的MQ配置项来配置和初始化特定的MQ集群，建立对应的PulsarClient和ProducerBuilder。
这个类的位置在：
``` shell
rg.apache.inlong.dataproxy.sink.mqzone
```
重写 start() 方法，根据对应的 MQ 配置创建对应的 MQ client 和 producerBuilder。
然后重写 public boolean send(DispatchProfile event) 方法.
### 第二步：
继承实现 `AbstactZoneWorker`，`AbstractZoneProducer`，`AbstractZoneSink`，`AbstractZoneSinkContext` 类。
这些类的绝大部分功能在父类中都已经实现了，基础功能中只有新建 ZoneWorker 和 ZoneClusterProducer 的部分有些不同，
所以我们通过两个 lambda 接口 `ZoneWorkerCalculator` 和 `ZoneClusterProducerCalculator`来抽象它们。
子类中只需要实现这两个接口即可。具体的可以参考`org.apache.inlong.dataproxy.sink.mqzone.impl`包下的其他三个MQ的实现。
## 工作流程
### 初始化
flume根据配置调用对应的AbstractZoneSink的实现类，比如PulsarZoneSink， 然后PulsarZoneSink会创建PulsarZoneSinkContext和PulsarZoneWorker，
PulsarZoneWorker会创建PulsarZoneProducer，PulsarZoneProducer在去创建PulsarClusterProducer。
### 详解
* xxZoneSink 是flume的抽象类AbstractSink的子类，和一个Context和channel绑定，用于从channel中获取数据进行转发处理。
* xxZoneSinkContext 主要用于存储配置项信息，metric和其他上下文。 它会在xxZoneSink中创建然后从xxZoneWorker到xxZoneProducer，
最后传入xxZoneClusterProducer。
* xxZoneWorker 用于发送消息的任务类，会不断的从dispatchQueue中获取数据然后通过xxZoneProducer向外发送。
* xxZoneProducer, 用于通过轮询的方式向MQ集群发送消息。在创建时根据配置来创建对应数量的xxZoneClusterProducer，
在需要发送消息时，通过这些xxZoneClusterProducer以轮询的方式向这些Cluster发送消息。
