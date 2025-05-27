---
title: Manager Custom Data Node
sidebar_position: 3
---

## Overview

Inlong is aimed at create dataflow between different data sources, now Inlong has support several universal data sources such as **MySQL**, **Apache Kafka**, **ClickHouse** on Input/Output respectively,
You can refer to [Data Node](../../data_node/extract_node/overview.md) for specific information. Each Data Node of InLong supports unified management through Manager to simplify the use of users.
This article describes how to extend a new data node through the Manager to provide services.

## Extend Extract Node

- Develop extract node plugin in sort, refer to [Sort Plugin](../extension_sort/extension_connector.md)
- Add **TaskType** in `org.apache.inlong.common.enums.TaskTypeEnum`
- Add **SourceType** in `org.apache.inlong.manager.common.consts.SourceType`
- Create new package under package path: `org.apache.inlong.manager.common.pojo.source`, develop every entity class needed.
- Create Operation class for new data source under package path: `org.apache.inlong.manager.service.source`.
- Transfer data source to **ExtractNode** supported in **Sort**, create the implementation class Provider for the `org.apache.inlong.manager.pojo.sort.node.provider.ExtractNodeProvider` interface under the `org.apache.inlong.manager.pojo.sort.node.provider` path, and register it with the `org.apache.inlong.manager.pojo.sort.node.ExtractNodeProviderFactory`

## Extend Load Node

- Develop load node plugin in sort, refer to [Sort Plugin](../extension_sort/extension_connector.md)
- Add **SinkType** in `org.apache.inlong.manager.common.consts.SinkType`
- Create new package under package path: `org.apache.inlong.manager.common.pojo.sink`, develop every entity class needed.
- Create Operation class for new data source under package path: `org.apache.inlong.manager.service.sink`.
- Transfer data sink to **LoadNode** supported in **Sort**, create the implementation class Provider for the `org.apache.inlong.manager.pojo.sort.node.provider.LoadNodeProvider` interface under the `org.apache.inlong.manager.pojo.sort.node.provider` path, and register it with the `org.apache.inlong.manager.pojo.sort.node.LoadNodeProviderFactory`