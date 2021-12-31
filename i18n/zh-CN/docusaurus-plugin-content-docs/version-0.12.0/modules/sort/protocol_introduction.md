---
title: Zookeeper配置介绍
sidebar_position: 3
---

# 前言
当前inlong-sort的元数据管理依赖inlong-manager。

inlong-sort与inlong-manager之间通过zk进行元数据的交互。

## 1 Zookeeper结构

![img.png](img.png)

cluster代表一个flink作业，同一个cluster中可以处理多个流向，但是这些流向必须是同构的（source与sink相同）。

dataflow代表一个具体的流向，每个流向有一个全局唯一的id来标识。流向由source + sink组成。

上图中上方的一条路径用来表示某个cluster中运行了哪些dataflow的作业，节点下均不含元数据。

下方的路径用来存储dataflow的具体信息，即真正的元数据存放。

元数据管理逻辑可以查看类`org.apache.inlong.sort.meta.MetaManager`

## 2 协议设计
具体的协议可以查看类`org.apache.inlong.sort.protocol.DataFlowInfo`