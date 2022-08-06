---
title: DataProxy 扩展
sidebar_position: 4
---

## 总览
本文面向 DataProxy 开发人员, 尝试尽可能全面地阐述扩展一个 MQ dataProxy所经过的历程, 力求消除开发者的困惑，让dataprxoy扩展新的MQ变得简单。

## 扩展 DataProxy MQ
扩展一个 新的MQ data Proxy 主要分为两个步骤：
### 第一步：
继承 AbstractZoneClusterProducer。类的位置在
``` shell
rg.apache.inlong.dataproxy.sink.mqzone
```
重写 start() 方法，根据对应的 MQ 配置创建对应的 MQ client 和 producerBuilder。
然后重写 public boolean send(DispatchProfile event) 方法.
### 第二步：
继承 `AbstactZoneWorker`，`AbstractZoneProducer`，`AbstractZoneSink`，`AbstractZoneSinkContext` 类。
绝大部分功能在父类中都已经实现了，基础功能中只有新建 ZoneWorker 和 ZoneClusterProducer 的部分有些不同，
可以通过实现两个 lambda 接口 `ZoneWorkerCalculator` 和 `ZoneClusterProducerCalculator`来实现。
