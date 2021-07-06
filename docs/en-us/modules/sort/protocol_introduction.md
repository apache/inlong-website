---
title: Protocol Introduction - Apache InLong-sort
---

# Overview
当前inlong-sort的元数据管理依赖inlong-manager。inlong-sort与inlong-manager之间通过zk进行元数据的交互。

# Zookeeper's path structure

![img.png](img.png)


Cluster represents a flink job. Multiple flows can be handled in the same cluster, but these flows must be homogeneous (source is the same as sink).

The DataFlow represents a specific flow, and each flow is identified by a globally unique ID. The flow consists of source + sink.

A path at the top of the figure indicates which dataflow are running in a cluster, without metadata under the node.

The path below is used to store the details of the dataflow.

# Protocol
Please reference
`org.apache.inlong.sort.protocol.DataFlowInfo`