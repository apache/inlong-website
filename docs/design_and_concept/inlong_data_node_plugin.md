---
title: Data Node Plugin
sidebar_position: 5
---

## Overview

Inlong is aimed at create dataflow between different data sources, now Inlong has support several universal data sources such as **MySQL**, **Apache Kafka**, **ClickHouse** on Input/Output respectively,
You can refer to [data_node](https://inlong.apache.org/docs/next/data_node/extract_node/auto_push) for specific information.
We Plan to support more data sources in the future, and this article is a development manual to extend data nodes.

## Extend Extract Node

In order to extend an input data sources , also refered to **extract node** in Inlong. We take **MySQL_BINLOG** for example.

- Develop extract node plugin in sort, refer to [how_to_write_plugin_sort](https://inlong.apache.org/docs/next/design_and_concept/how_to_write_plugin_sort)
- Add **TaskType** in `org.apache.inlong.common.enums.TaskTypeEnum`
- Add **SourceType** in `org.apache.inlong.manager.common.enums.SourceType`
- Create new package under package path: `org.apache.inlong.manager.common.pojo.source`, develop every entity class needed.
- Create Operation class for new data source under package path: `org.apache.inlong.manager.service.source`.
- Transfer data source to **ExtractNode** supported in **Sort**, refer to `org.apache.inlong.manager.service.sort.util.ExtractNodeUtils`


## Extend Load Node

The way to extend data sink is nearly the same with data source

- Develop load node plugin in sort, refer to [how_to_write_plugin_sort](https://inlong.apache.org/docs/next/design_and_concept/how_to_write_plugin_sort)
- Add **SinkType** in `org.apache.inlong.manager.common.enums.SinkType`
- Create new package under package path: `org.apache.inlong.manager.common.pojo.sink`, develop every entity class needed.
- Create Operation class for new data source under package path: `org.apache.inlong.manager.service.sink`.
- Transfer data sink to **LoadNode** supported in **Sort**, refer to `org.apache.inlong.manager.service.sort.util.LoadNodeUtils`

## Last but not Least

Any Optimization Suggestions are welcome through **email** or **pr**. 
