---
title: DataProxy extension
sidebar_position: 4
---

## Overview
This article is aimed at DataProxy developers, trying to explain the process of expanding a MQ DataProxy as comprehensively as possible, and strive to eliminate the confusion of developers and make it easy for DataProxy to expand a new MQ.
## Extend DataProxy MQ
Extending a new MQ DataProxy is mainly divided into two steps:
### First step:
Inherit the class that implements AbstractZoneClusterProducer. The main function of this class is to load the corresponding MQ configuration items to configure and initialize a specific MQ cluster, and to establish the corresponding PulsarClient and ProducerBuilder.
The location of this class is:
``` shell
rg.apache.inlong.dataproxy.sink.mqzone
````
Rewrite the start() method to create the corresponding MQ client and producerBuilder according to the corresponding MQ configuration.
Then override the public boolean send(DispatchProfile event) method.
### Step 2:
Inherit the `AbstactZoneWorker`, `AbstractZoneProducer`, `AbstractZoneSink`, `AbstractZoneSinkContext` classes.
Most of the functions of these classes have been implemented in the parent class. Only the `new ZoneWorker` and `new ZoneClusterProducer` parts are different.
So we abstract them through two lambda interfaces `ZoneWorkerCalculator` and `ZoneClusterProducerCalculator`.
Subclasses only need to implement these two interfaces. For details, please refer to the other three MQ implementations under the `org.apache.inlong.dataproxy.sink.mqzone.impl` package.
## work process
### Init
Flume calls the corresponding AbstractZoneSink implementation class according to the configuration, such as PulsarZoneSink, then PulsarZoneSink will create PulsarZoneSinkContext and PulsarZoneWorker,
PulsarZoneWorker will create PulsarZoneProducer, and PulsarZoneProducer will create PulsarClusterProducer.
### Detailed description
* xxZoneSink is a subclass of the abstract class AbstractSink of flume, and is bound to a Context and a channel to obtain data from the channel for forwarding processing.
* xxZoneSinkContext is mainly used to store configuration item information, metrics and other contexts. It will be created in xxZoneSink and then from xxZoneWorker to xxZoneProducer,
  Finally pass in xxZoneClusterProducer.
* xxZoneWorker is a task class used to send messages, which will continuously obtain data from dispatchQueue and send it out through xxZoneProducer.
* xxZoneProducer, used to send messages to the MQ cluster by polling. Create a corresponding number of xxZoneClusterProducers according to the configuration when creating,
  When a message needs to be sent, the xxZoneClusterProducer sends a message to these Clusters in a polling manner.
