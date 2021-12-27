---
title: Zookeeper Configure
sidebar_position: 3
---

# Overview
Currently the metadata management of inlong-sort relies on inlong-manager.

Metadata interaction between inlong-sort and inlong-manager is performed via ZK.

## 1 Zookeeper's path structure

![img.png](img.png)


Cluster represents a flink job. Multiple flows can be handled in the same cluster, but these flows must be homogeneous (source is the same as sink).

The DataFlow represents a specific flow, and each flow is identified by a globally unique ID. The flow consists of source + sink.

A path at the top of the figure indicates which dataflow are running in a cluster, without metadata under the node.

The path below is used to store the details of the dataflow.

## 2 Protocol
Please reference
`org.apache.inlong.sort.protocol.DataFlowInfo`