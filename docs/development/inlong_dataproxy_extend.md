---
title: DataProxy extends
sidebar_position: 4
---

## Overview
This article is aimed at DataProxy developers, trying to explain as fully as possible the process of extending an MQ dataProxy,
Strive to eliminate developer confusion and make it easy for dataprxoy to extend new MQ.

## Extend DataProxy MQ
Extending a new MQ data Proxy is mainly divided into two steps:
Step 1: Inherit AbstractZoneClusterProducer. The location of the class is
``` shell
rg.apache.inlong.dataproxy.sink.mqzone
````
Rewrite the start() method to create the corresponding MQ client and producerBuilder according to the corresponding MQ configuration.
Then override the public boolean send(DispatchProfile event) method.
Step 2: Inherit `AbstactZoneWorker`, `AbstractZoneProducer`, `AbstractZoneSink`, `AbstractZoneSinkContext` classes.
Most of the functions have been implemented in the parent class. Only the new ZoneWorker and ZoneClusterProducer parts of the basic functions are different.
This can be achieved by implementing two lambda interfaces `ZoneWorkerCalculator` and `ZoneClusterProducerCalculator`.
