---
title: Apache InLong 迎接新 Committer 成员
---

InLong(应龙) : 中国神话故事里的神兽，引流入海，借喻 InLong 系统提供数据接入能力。

### Apache InLong(incubating) 简介

[Apache InLong（应龙）](https://inlong.apache.org)是腾讯捐献给 Apache 社区的一站式的数据接入平台，提供自动、安全、可靠和高性能的数据传输能力，方便业务构建基于流式的数据分析、建模和应用。

InLong 项目原名 TubeMQ ，专注于高性能、低成本的消息队列服务。为了进一步释放 TubeMQ 周边的生态能力，我们将项目升级为 InLong，专注打造一站式数据流接入服务平台。

Apache InLong 以腾讯内部使用的 TDBank 为原型，依托万亿级别的数据接入和处理能力，整合了数据采集、汇聚、存储、分拣数据处理全流程，拥有简单易用、灵活扩展、稳定可靠等特性。
<img src="/img/inlong-structure-zh.png" align="center" alt="Apache InLong"/>


Apache InLong 服务于数据采集到落地的整个生命周期，按数据的不同阶段提供不同的处理模块，主要包括：

- **inlong-agent**，数据采集 Agent，支持从指定目录或文件读取常规日志、逐条上报。后续也将扩展 DB 采集、HTTP 上报等能力。
- **inlong-dataproxy**，一个基于 Flume-ng 的 Proxy 组件，支持数据发送阻塞和落盘重发，拥有将接收到的数据转发到不同 MQ（消息队列）的能力。
- **inlong-tubemq**，腾讯自研的消息队列服务，专注于大数据场景下海量数据的高性能存储和传输，在海量实践和低成本方面有着良好的核心优势。
- **inlong-sort**，对从不同的 MQ 消费到的数据进行 ETL 处理，然后汇聚并写入 Hive、ClickHouse、Hbase、Iceberg 等存储系统。
- **inlong-manager**，提供完整的数据服务管控能力，包括元数据、任务流、权限，OpenAPI 等。
- **inlong-website**，用于管理数据接入的前端页面，简化整个 InLong 管控平台的使用。

### Apache InLong 社区迎来两位新 Committer

在美好的11月份，周康(@healchow)、卢子杰(@TszKitLo40) 两位贡献者成功入选 Apache InLong Committer，祝贺他们！
周康和卢子杰很早就是 Apache InLong 的贡献者，他们正在参与 InLong 0.12.0 版本的特性开发，欢迎大家在即将发布的 InLong 0.12.0 中围观他们的贡献。

### 新 Committer 寄语

#### 周康(@healchow)

感谢 InLong 社区对我的认可，能成为 InLong 的一名 Committer，我备感荣幸，深感责任重大。
在开源社区，来自天南海北世界各地的技术人可以一起交流碰撞，在开阔技术视野的同时，还能提升编码和协作能力，这对开发者个人来说是很好的锻炼机会。
在为 InLong 做出贡献的同时，我对 InLong 的架构和底层技术有了更深的理解，希望能持续参与到 InLong 的开源过程中，创造更强大的 InLong。

#### 卢子杰(@TszKitLo40)

很高兴可以成为 Apache InLong 项目的一名 Committer ，非常感谢 InLong 社区对我的疑问给出的帮助，同时也非常感谢 InLong 社区对我的贡献的认可。
在参与 Apache InLong 项目的开发中，我觉得是 Apache InLong 是一个正在快速成长的项目，期待越来越多的人可以参与到社区的建设中！

### 新 Committer 贡献事迹

#### 周康(@healchow)

贡献了 InLong-Manager 的大部分功能，包括数据接入、数据源、数据存储等信息的配置，创建关联模块的资源（如 TubeMQ 的 Topic 和消费组，推送 Sort 模块需要的配置……）等等。
InLong-Manager 是 InLong 项目的管理者，它串联起了其他的底层模块，还有很多 Feature 亟待开发，迫切地欢迎热爱开源的伙伴们来一起协作共建！

#### 卢子杰(@TszKitLo40)

贡献了 InLong-TubeMQ 的纯 Go SDK。Go 语言在国内越来越流行，越来越多的用户有使用 Go SDK 的需求。
Go SDK 在 API 上保持了和 Java/C++ 版本的一致性，在业务层处理逻辑也和 Java/C++ 版本基本一致，其他语言 SDK 的使用者也可以快速上手。
目前 Go SDK 只实现了消费功能，期待更多贡献者能一起参与生产功能的开发。

### 给未来 Committer 的建议

#### 周康(@healchow)

加入开源，千万不要有畏惧心理。你可以先查看“如何参与贡献(https://inlong.apache.org/zh-CN/development/how-to-contribute)”， 然后 fork 代码仓库，编译、运行某个感兴趣的功能模块……
过程中遇到问题了？恭喜你，这有可能是个 bug，也有可能是文档不完善，你可以加交流群提问，然后到这里提 Issue (https://github.com/apache/incubator-inlong/issues/new/choose)……
到这里，你已经是 InLong 的 Contributor 了。加油，下一步就是 Committer :-)

#### 卢子杰(@TszKitLo40)

InLong 项目目前还处于孵化阶段，还有很多可以完善的地方，比如 Go SDK 的生产功能。开源项目刚开始上手可能比较困难，我的经验是可以先从简单的 Issue 开始，慢慢获取成就感。
同时如果有问题可以及时和社区的小伙伴沟通，社区氛围是很nice的，大家都很愿意帮助新的伙伴。如果觉得贡献代码比较难，也可以先从贡献文档开始，期待更多的小伙伴加入 InLong 社区，一起前进。

### Apache InLong(incubating) 贡献者招募

Apache InLong(incubating) 当前共有 63 名 contributor，仍处在项目孵化的初期，还有很多待办事项，包括：Feature 开发、社区运营，文档翻译等，期待更多开源爱好者加入 InLong，一起将 InLong 打造成 Apache 顶级项目。

以下为 InLong 项目的时间线：

- 2021年11月5日，发布 0.11.0 版本
- 2021年9月3日，发布 0.10.0 版本
- 2021年7月12日，发起更名后第一个版本 0.9.0 投票
- 2021年4月11日，完成社区改名，改为 Apache InLong
- 2021年2月11日，发起社区改名变更申请
- 2020年12月20日，进行项目改名讨论和投票
- 2020年5月30日，按照 Apache 社区规范发布第一个社区版本
- 2019年11月3日，进入 Apache 社区孵化
- 2019年9月12日，TubeMQ 对外开源并捐献给 Apache 社区

Apache InLong 项目官方网站：https://inlong.apache.org

Apache InLong GitHub  地址 ：https://github.com/apache/incubator-inlong