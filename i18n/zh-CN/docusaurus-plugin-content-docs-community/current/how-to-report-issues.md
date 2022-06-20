---
title: 如何报告问题
sidebar_position: 8
---

## 对于 InLong 用户
如果您对 InLong 操作有任何疑问，请遵循以下指南：

如果您在设置、配置或在其他不符合您期望的行为方面遇到问题时，请在 [GitHub Discussions](https://github.com/apache/inlong/discussions) 中提问。 
有关邮件列表的信息，请参见 [如何订阅页面](https://inlong.apache.org/zh-CN/community/how-to-subscribe/)。 您也可以向 InLong slack 频道寻求帮助，查看网页了解如何加入的详细信息。 
如果您在代码或文档中有需要修复的错误，请按照下面的 GitHub Issues 中的步骤进行操作。

## 对于 InLong 开发人员
Apache InLong 项目使用 GitHub Issues 来跟踪所有问题。 这些包括：

- 添加新功能
- 改进现有功能
- 报告代码库中需要修复的错误

如果您对在 GitHub Issues 中跟踪开发问题感兴趣，可以浏览这个[链接](https://github.com/apache/inlong/issues)。

## 为 InLong 问题提交 GitHub Issues
请转到 [InLong GitHub Issues](https://github.com/apache/inlong/issues) 页面来提交您的问题。

请确保项目设置为 InLong。需要根据您的分析或请求适当设置问题类型字段：

- （Bug）漏洞
- （New Feature）新功能
- （Improvement）改进
- （Wish）希望
- （Umbrella）子任务

对于摘要，请提供详细的标题，例如 `[Bug][Dataproxy] Repeated registration jmx metric bean` 而不是 `Dataproxy registration error`。

|        组件        |                                  描述                                   |
|:----------------:|:---------------------------------------------------------------------:|
|   InLong Agent   |           数据采集 Agent，支持从指定目录或文件读取常规日志、逐条上报。后续也将扩展 DB 采集等能力。           |
| InLong Dataproxy |  一个基于 Flume-ng 的 Proxy 组件，支持数据发送阻塞和落盘重发，拥有将接收到的数据转发到不同 MQ（消息队列）的能力。   |
|  InLong TubeMQ   |       腾讯自研的消息队列服务，专注于大数据场景下海量数据的高性能存储和传输，在海量实践和低成本方面有着良好的核心优势。        |
|   InLong Sort    | 对从不同的 MQ 消费到的数据进行 ETL 处理，然后汇聚并写入 Hive、ClickHouse、Hbase、Iceberg 等存储系统。 |
|  InLong Manager  |                 提供完整的数据服务管控能力，包括元数据、任务流、权限，OpenAPI等。                  |
| InLong Dashboard |                  用于管理数据接入的前端页面，简化整个 InLong 管控平台的使用。                   |
|   InLong Audit   |         对 InLong 系统的 Agent、DataProxy、Sort 模块的入流量、出流量进行实时审计对账。         |
|    InLong SDK    |                     包括 DataProxy SDK, Sort SDK 等                      |

影响版本字段可以设置为您发现错误的 InLong 的最早版本。 如果您不确定，则将其留空。

如果您是打算修复该错误的开发人员，请将您的 GitHub Issues ID 放在 Assignee 字段中。

请在描述字段中填写尽可能多的详细信息。 这需要包括您的配置更改、集群大小和 InLong 版本。 任何有助于复制您应该添加的问题的相关代码或配置。

对于错误报告：问题的简短再现将非常受欢迎。 如果您有日志，则日志的特定部分要带有错误消息或堆栈跟踪。 附加整个日志可能很有用。 如果您已经尝试调试问题，请描述您已经完成的步骤。 即使结果是您无法重现该问题。

对于新功能请求，它可能包括设计文档。 如果您没有，或者这只是一个通用请求，请与我们合作设计您的功能并实现它。