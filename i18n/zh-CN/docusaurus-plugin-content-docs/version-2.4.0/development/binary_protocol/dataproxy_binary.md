---
title: DataProxy 二进制协议定义及使用
sidebar_position: 3
---

## 概述

用户通过 SDK 上报数据到 InLong 系统时，SDK 与 DataProxy 间交互采用的是 InLong 自定义二进制协议,本文主要介绍 DataProxy 二进制协议的定义，以及如何使用 SDK 进行数据上报。

## DataProxy 二进制协议

### 协议框架

DataProxy 与 SDK 间采用 TCP 长连接方式传递自定义格式的二进制数据包，DataProxy 收到 SDK 的上报请求消息后，进行数据处理，并将返回结果通过请求响应返回给 SDK，如下图示：

![DataProxy Rpc](img/dataproxy_rpc.png)

DataProxy 节点仅被动接收 SDK 侧上报的消息，接收到的消息称为请求消息，发送给 SDK 的消息称为响应消息；请求和响应消息都按照如下格式进行定义，如下图：
![DataProxy binary frame](img/dataproxy_rpc_msg_frame.png)

其中：

- TotalLen：消息总长度，单位字节；

- MsgType：消息类型，标识消息的编码格式，决定后面 Payload 部分采用什么样的编解码方案

- Payload：消息承载内容，该部分编解码 由 MsgType 值决定

不同类型的消息长度、格式各不相同，但 DataProxy 收到的消息头5个字节为固定的字段值，DataProxy 根据这个特点识别出不同类型的消息并做相应处理。

目前实现版本里 MsgType 一共有3，5，7，8 共 4 个有效取值，其中 3，5，7 用于上报数据，8 用于 SDK 及 DataProxy 间链接保活及状态信息同步。

接下来我们按 MsgType 取值介绍不同的协议编码：

### MsgType=3

MsgType=3 格式的消息，其 MsgType 字段固定为 3，请求消息里 Payload 部分携带 {属性集合，数据列表} 信息；响应消息里消息体长度为 0 仅携带属性集合信息，具体如下图所示：

![MsgType=3](img/dataproxy_rpc_msgtype3.png)

其中：

- BodyLen: 消息体长度，标识紧接着的 Body 部分的总长度；

- Body: 消息体，如果存在多个数据，数据与数据间通过单字节的 '\n' 分隔；

- AttrLen：属性长度，标识紧接着的 AttrData 部分的总长度；

- AttrData：属性值

DataProxy 对请求消息进行处理并返回响应消息，在响应的属性信息里会在请求属性值基础上添加 `errCode`, `errMsg` 等属性，携带请求的处理结果返回给 SDK 进行处理。

### MsgType=5

MsgType=5 格式的消息，其 MsgType 字段固定为 5，具体如下图所示：

![MsgType=5](img/dataproxy_rpc_msgtype5.png)

和 MsgType=3 相比，MsgType=5 在请求消息 Payload 部分携带的消息体定义存在差异，采用的是 {长度，数据} 形式保存，而非固定的单字节 '\n' 分隔符分隔。在该类型的字段定义中：

- ItemLen：单条数据项长度，标识紧接着的 Body 部分长度；

- Body：上报的二进制数据内容。


### MsgType=7

MsgType=7 格式的消息，其 MsgType 字段固定为 7，具体如下图所示：

![MsgType=7](img/dataproxy_rpc_msgtype7.png)

相比之前 MsgType=3 和 5 格式定义，MsgType=7 消息将固定的属性值信息以固定字段形式出现，同时在消息的末尾增加了2个字节长度的消息完整性检查标记 0xee01；为兼容MsgType=3 和 MsgType=5 格式不同的多条数据打包方式，对消息体部分增加了不同类型定义，并通过 ExtField 字段来标识；同时响应消息采用了新的格式定义而不是复用请求消息格式。具体字段解释如下：

- MsgTYpe：在该消息类型里，该字段除了标识类型，还通过其他可用位标识相关功能是否开启；

- GroupNum：标识 group 对应的 ID 值，传递数字 group 信息时使用；

- StreamNum：标识 stream 对应的 ID 值，传递数字 stream 信息时使用；

- ExtField：标识扩展功能启用字段，用来传递消息启用的扩展功能，不同位标识不同含义，具体参见 ExtField 各位定义表；

- DataTime：标识数据时间，精度秒；

- MsgCnt：标识携带的消息总条数；

- UniqueId：标识消息 8 字节 long 型的唯一标记；

- BodyLen：标识消息体总长度，标识接下来的二进制消息体数据长度；

- BodyData：标识该消息携带的二进制消息内容，该部分根据不同的数据组织格式有不同的存储方式，见 BodyData 的示意图：

  - 采用 MsgType=3 方式存储数据，数据间通过单字节 '\n' 分隔符分隔；
  - 采用 MsgType=5 方式存储数据，数据采用 {长度，数据} 形式保存

在该类型下 MsgType 的各位定义如下：

| 位     | 含义             | 备注             |
|-------|----------------|----------------|
| 0 ~ 4 | 消息类型           |                |
| 5     | 是否压缩           | 1 标识启用，0 标识未启用 |
| 6     | 是否加密           | 1 标识启用，0 标识未启用 |
| 7     | 是否授权           | 1 标识启用，0 标识未启用 |

对于 ExtField 字段，各位定义如下：

| 位     | 含义                  | 备注             |
|-------|---------------------|----------------|
| 0     | 保留                  |                |
| 1     | 是否上报节点的 ip 和处理时间    | 1 标识上报，0 标识不上报 |
| 2     | 是否启用数字 group，stream | 0 标识启用，1 标识不启用 |
| 3 ~ 4 | 保留                  |                |
| 5     | 多条数据是否启用按换行符分隔      | 1 标识启用，0 标识不启用 |
| 6 ~ 7 | 保留                  |                |

BodyData 字段的数据格式在 ExtField 字段第 5 位值为 0 时采用 MsgType=5 方式存储数据；为 1 时采用 MsgType=3 方式存储数据。

### MsgType=8

MsgType=8 格式的消息为链接心跳保活及状态传递消息，其 MsgType 字段固定为 8，具体如下图所示：

![MsgType=8](img/dataproxy_rpc_msgtype8.png)

该消息类型用来作为 SDK 与 DataProxy 间 TCP 长连接的心跳包，心跳请求和响应消息格式相同。除了完成心跳保活，SDK 还在请求 Version 字段里携带 SDK 的版本信息；DataProxy 在响应的 BodyData 里填写 2 个字节长度的节点负载信息。

## SDK 上报示例

参考 [DataProxy SDK](../../sdk/dataproxy-sdk/java.md) 相关部分的介绍，这里省略
