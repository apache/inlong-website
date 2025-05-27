---
title: Manager 自定义数据节点
sidebar_position: 3
---

## 总览

Inlong 设计初衷即是为了在不同数据源之间创建数据流，截止目前，Inlong 已经支持多种常用数据源的读取和写入，如 **MySQL**, **Apache Kafka**, **ClickHouse** 等，
详细内容可参考 [数据节点](../../data_node/extract_node/overview.md)。 InLong 的每种数据节点，支持通过 Manager 提供统一的管理，以简化用户的使用。
本文介绍通过 Manager 如何扩展一个新的数据节点，实现提供服务。

## 扩展 Extract Node
 
- 首先需要在 Sort 组件内支持该数据源，详情参考 [Sort 插件](../extension_sort/extension_connector.md)
- 在枚举类`org.apache.inlong.common.enums.TaskTypeEnum`中增加对应的枚举
- 在常量类`org.apache.inlong.manager.common.consts.SourceType`中同样增加对应常量
- 在`org.apache.inlong.manager.common.pojo.source`路径下创建文件夹，创建对应实体类
- 在`org.apache.inlong.manager.service.source`路径下，创建对应工具类
- 支持数据源到**ExtractNode**的转换函数，在`org.apache.inlong.manager.pojo.sort.node.provider`路径下创建对应实现`org.apache.inlong.manager.pojo.sort.node.provider.ExtractNodeProvider`接口的实体类Provider，并注册到`org.apache.inlong.manager.pojo.sort.node.ExtractNodeProviderFactory`

## 扩展 Load Node

- 首先需要在 Sort 组件内支持该数据源，详情参考 [Sort 插件](../extension_sort/extension_connector.md)
- 在常量类`org.apache.inlong.manager.common.consts.SinkType`中增加对应常量
- 在`org.apache.inlong.manager.common.pojo.sink`路径下创建文件夹, 创建对应实体类
- 在`org.apache.inlong.manager.service.sink`路径下创建对应工具类
- 支持数据源到**LoadNode**的转换函数，在`org.apache.inlong.manager.pojo.sort.node.provider`路径下创建对应实现`org.apache.inlong.manager.pojo.sort.node.provider.LoadNodeProvider`接口的实体类Provider，并注册到`org.apache.inlong.manager.pojo.sort.node.LoadNodeProviderFactory`