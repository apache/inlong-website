---
title: 总览
sidebar_position: 1
---

InLong Agent 是一个支持多种数据源类型的收集工具，致力于实现包括 File、Sql、Binlog、Metrics 等多种异构数据源之间稳定高效的数据采集功能。

## 设计理念
为了解决数据源多样性问题，InLong-agent 将多种数据源抽象成统一的source概念，并抽象出sink来对数据进行写入。当需要接入一个新的数据源的时候，只需要配置好数据源的格式与读取参数便能跟做到高效读取。

## InLong-Agent 架构介绍
![](img/architecture.png)

InLong Agent本身作为数据采集框架，采用channel + plugin架构构建。将数据源读取和写入抽象成为Reader/Writer插件，纳入到整个框架中。

- Reader：Reader为数据采集模块，负责采集数据源的数据，将数据发送给channel。
- Writer： Writer为数据写入模块，负责不断向channel取数据，并将数据写入到目的端。
- Channel：Channel用于连接reader和writer，作为两者的数据传输通道，并起到了数据的写入读取监控作用


## InLong-Agent 采集分类
### 文件
文件采集包含如下功能：
用户配置的路径监听，能够监听出创建的文件信息
目录正则过滤，支持YYYYMMDD+正则表达式的路径配置
断点重传，InLong-Agent重启时，能够支持自动从上次读取位置重新读取，保证不重读不漏读。\

#### 文件采集参数
| 参数                           | 是否必须  | 默认值         | 类型    | 描述                                                  |
| ----------------------------- | -------- | ------------- | ------ | ------------------------------------------------------------ |
| pattern                       | required | (none)        | String | 文件正则匹配，例如: /root/[*].log      |
| timeOffset                    | optional | (none)        | String | 文件偏移匹配针对文件文件名称为: *** YYYYMMDDHH *** YYYY 表示年， MM 表示月， DD 表示天，  HH 表示小时， *** 表示任意的字符；'1m' 表示一分钟以后， '-1m' 表示一分钟以前， '1h' 一小时以后， '-1h' 一小时以前， '1d' 一天以后， '-1d' 一天以前。|
| collectType                   | optional |  FULL         | String | "FULL" 目录下所有匹配的文件， "INCREMENT" 任务启动后匹配新增的文件。                      |
| lineEndPattern                | optional | '\n'          | String | 文件行结束正则匹配。 |
| contentCollectType            | optional |  FULL         | String | 文件内容采集方式全量"FULL"、增量"INCREMENT" 。|
| envList                       | optional | (none)        | String | 文件采集携带环境信息，例如在容器环境下: kubernetes 。           |
| dataContentStyle              | optional | (none)        | String | 采集后数据输出方式， Json 格式设置为 json ； CSV 格式设置分割类型: `,` &#124; `:`            |
| dataSeparator                 | optional | (none)        | String | 文件数据原始列分割方式。           |
| monitorStatus                 | optional | (none)        | Integer| 文件监控开关 1 开启 、 0 关闭。场景：在批量采集是设置为 0，实时数据采集时 1。 |
| monitorInterval               | optional | (none)        | Long   | 文件监控探测频率，毫秒/单位 |
| monitorExpire                 | optional | (none)        | Long   | 文件监控探测过期时间，毫秒/单位 |


### Sql
这类数据是指通过SQL执行的方式
SQL正则分解，转化成多条SQL语句
分别执行SQL，拉取数据集，拉取过程需要注意对mysql本身的影响
执行周期，这种一般是定时执行

### Binlog
这类采集通过配置mysql slave的方式，读取binlog，并还原数据
需要注意binlog读取的时候多线程解析，多线程解析的数据需要打上顺序标签
代码基于老版本的dbsync，主要的修改是将tdbus-sender的发送改为推送到agent-channel的方式做融合