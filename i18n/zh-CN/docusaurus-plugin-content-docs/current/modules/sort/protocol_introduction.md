---
title: Zookeeper配置介绍
sidebar_position: 3
---

# 前言
当前inlong-sort的元数据管理依赖inlong-manager。

inlong-manager将元数据存储在MySQL中，并在启动inlong-sort作业时，从MySQL中抽取元数据并生成json文件，然后将其作为inlong-sort作业启动参数。

## 协议设计
具体的协议可以查看类`org.apache.inlong.sort.protocol.DataFlowInfo`