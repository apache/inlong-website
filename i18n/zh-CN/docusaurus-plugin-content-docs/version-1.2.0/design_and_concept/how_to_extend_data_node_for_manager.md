---
title: Manager 数据节点插件
sidebar_position: 5
---

## 总览

Inlong 设计初衷即是为了在不同数据源之间创建数据流，截止目前，Inlong 已经支持多种常用数据源的读取和写入，如 **MySQL**, **Apache Kafka**, **ClickHouse** 等，
详细内容可参考 [数据节点](data_node/extract_node/overview.md)。
我们会在未来支持更多的常用数据源，故本文会简短介绍如何在现有框架下扩展数据源。

## 扩展读取节点
 
以 **MySQL_BINLOG** 为例，介绍如何在 Inlong 框架下扩展读取节点。

- 首先需要在 Sort 组件内支持该数据源，详情参考 [Sort 插件](design_and_concept/how_to_extend_data_node_for_sort.md)
- 在枚举类`org.apache.inlong.common.enums.TaskTypeEnum`中增加对应的枚举
- 在枚举类`org.apache.inlong.manager.common.enums.SourceType`中同样增加对应枚举
- 在`org.apache.inlong.manager.common.pojo.source`路径下创建文件夹，创建对应实体类
- 在`org.apache.inlong.manager.service.source`路径下，创建对应工具类
- 支持数据源到**ExtractNode**的转换函数，参考 `org.apache.inlong.manager.service.sort.util.ExtractNodeUtils`

## 扩展写入节点

扩展写入节点的方式与读取节点类似

- 首先需要在 Sort 组件内支持该数据源，详情参考 [Sort 插件](design_and_concept/how_to_extend_data_node_for_sort.md)
- 在枚举类`org.apache.inlong.manager.common.enums.SinkType`中增加对应枚举
- 在`org.apache.inlong.manager.common.pojo.sink`路径下创建文件夹, 创建对应实体类
- 在`org.apache.inlong.manager.service.sink`路径下创建对应工具类
- 支持数据源到**LoadNode**的转换函数，参考代码 `org.apache.inlong.manager.service.sort.util.LoadNodeUtils`