---
title: Java SDK
sidebar_position: 2
---

import {siteVariables} from '../../version';

## 新建实时同步任务
在 Dashboard 或者通过命令行工具创建任务，数据源类型使用 `Auto Push` (自主推送)。

## 引入 Java SDK
需要在项目中包含 SDK 的头文件和库，进行 SDK 的使用。头文件和库提供以下两种获取方式：
- 获取源码自行编译并将 SDK 包部署到本地仓库，见[如何编译](https://inlong.apache.org/zh-CN/docs/next/development/how_to_build)；
- 直接引用 Apache 仓库里的已有库，见

```xml
<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>dataproxy-sdk</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
```

## 数据上报流程
引入 SDK 后，通过实例化一个 [TcpMsgSender](https://github.com/apache/inlong/blob/master/inlong-sdk/dataproxy-sdk/src/main/java/org/apache/inlong/sdk/dataproxy/sender/tcp/TcpMsgSender.java) 接口对象后，调用相关的同步（sendMessage()）或 异步（asyncSendMessage()）接口来完成单条或多条（批量）数据的上报任务。发送 Demo 可参考 [TcpClientExample.java](https://github.com/apache/inlong/blob/master/inlong-sdk/dataproxy-sdk/src/main/java/org/apache/inlong/sdk/dataproxy/example/TcpClientExample.java)。
整体流程包括以下三个步骤：

### 初始化 SDK
从 Demo 示例代码我们可以看到，客户端初始化主要是在 `getMessageSender()` 函数中完成：
```java
public TcpMsgSender getMessageSender(MsgSenderFactory senderFactory, boolean visitMgrByHttps,
                                         String managerAddr, String managerPort, String inlongGroupId, int msgType,
                                         boolean useLocalMetaConfig, String configBasePath) {
    TcpMsgSender messageSender = null;
    try {
        // build sender configure
        TcpMsgSenderConfig tcpConfig =
                new TcpMsgSenderConfig(visitMgrByHttps, managerAddr,
                        Integer.parseInt(managerPort), inlongGroupId, "admin", "inlong");
        tcpConfig.setMetaStoreBasePath(configBasePath);
        tcpConfig.setOnlyUseLocalProxyConfig(useLocalMetaConfig);
        tcpConfig.setSdkMsgType(MsgType.valueOf(msgType));
        tcpConfig.setRequestTimeoutMs(20000L);
        // build sender object
        messageSender = senderFactory.genTcpSenderByClusterId(tcpConfig);
    } catch (Throwable ex) {
        System.out.println("Get MessageSender throw exception, " + ex);
    }
    return messageSender;
}
```
### TcpMsgSenderConfig 配置参数
| 参数名                | 参数说明                 | 默认值                       |
|----------------------|----------------------|---------------------------|
| inlongGroupId        | inlongGroupId        | not null                  |
| inlongStreamId       | inlongStreamId       | not null                  |
| username             | 用户名                  | not null                  |
| password             | 密码                   | not null                  |
| visitMgrByHttps      | 请求 inlong Manager 协议 | https: true , http: false |
| useLocalMetaConfig   | 是否从本地读取 DataProxy IP | false                     |

### 调用发送接口进行数据上报
SDK 的数据发送接口时线程安全的，支持以同步或者异步模式发送单条或多条消息。Demo 里采用的是单条同步消息发送，并且消息中不包含属性信息：
```java
    public void sendTcpMessage(TcpMsgSender sender,
                               String inlongGroupId, String inlongStreamId, long dt, String messageBody) {
    ProcessResult procResult = new ProcessResult();
    try {
        sender.sendMessage(new TcpEventInfo(inlongGroupId, inlongStreamId,
                dt, null, messageBody.getBytes(StandardCharsets.UTF_8)), procResult);
    } catch (Throwable ex) {
        System.out.println("Message sent throw exception, " + ex);
        return;
    }
    System.out.println("Message sent result = " + procResult);
    logger.info("Message sent result = {}", procResult);
}
```

大家还可以根据业务需要选择不同的发送接口进行数据上报，具体接口细节可以参考 [TcpMsgSender](https://github.com/apache/inlong/blob/master/inlong-sdk/dataproxy-sdk/src/main/java/org/apache/inlong/sdk/dataproxy/sender/tcp/TcpMsgSender.java) 接口文件中的定义，里面有详细的接口使用及参数定义介绍，这里不做额外说明。

### 关闭 SDK 
由于我们通过 Sender 对象工厂来创建和复用 Sender 对象，在退出上报服务时我们通过调用工厂的 shutdownAll() 函数关闭数据上报服务：
```java
senderFactory.shutdownAll();
```

## 注意事项
- `MessageSender` 接口对象是基于 `inlongGroupId` 进行初始化，因而每个 `TcpMsgSender` 对象基于 `inlongGroupId` 区别使用，同一个进程内允许创建多个 `MessageSender` 对象；
- SDK 封装了 TCP、HTTP、UDP 共三种不同的网络交互方式，并在[example](https://github.com/apache/inlong/blob/master/inlong-sdk/dataproxy-sdk/src/main/java/org/apache/inlong/sdk/dataproxy/example)目录里给出了 3 种方式的不同示例（参考 TcpClientExample.java，HttpClientExample.java，UdpClientExample.java 实现），业务可以根据自身需要来初始化不同的 MessageSender 对象；
- SDK 中包含了复杂的网络交互，使用时需要将 SDK 作为常驻服务对象来使用，避免同个进程中途频繁地初始化和关闭 MessageSender 对象（重复初始化和关闭会带来很大的资源开销，并且影响数据上报的时效性）；
- SDK 不对发送失败的消息做重发处理，用户在使用 SDK 上报数据时遇到发送失败，业务要根据自身数据要求来决定是否重发消息，避免数据丢失。

## 错误码介绍
错误码参考 ErrorCode 枚举类定义，常见错误码会有以下几种值

| 返回值                                    | 含义                   | 备注                |
|----------------------------------------|----------------------|-------------------|
| ErrorCode.OK                           | 消息发送成功               |                   |
| ErrorCode.SDK_CLOSED                   | SDK 已关闭              |                   |
| ErrorCode.FETCH_PROXY_META_FAILURE     | SDK 获取元数据失败          |                   |
| ErrorCode.EMPTY_ACTIVE_NODE_SET        | 无可用 active 节点        |                   |
| ErrorCode.EMPTY_WRITABLE_NODE_SET      | 所有节点都不可写      |                   |
| ErrorCode.NO_VALID_REMOTE_NODE         | 所有 active 节点都无效，无可用节点 | 这种情况建议业务增大可用链接数   |
| ErrorCode.REPORT_INFO_EXCEED_MAX_LEN   | 上报数据超最大允许长度          |                   |
| ErrorCode.CONNECTION_UNAVAILABLE   | 连接已无效                |  一般为前端生产数据的速度超过服务端的响应速度导致，建议发送时适当sleep避免阻塞       |
| ErrorCode.CONNECTION_BREAK   | 链接被断开                |                   |
| ErrorCode.CONNECTION_UNWRITABLE   | 链接不可写                | 一般为前端生产数据的速度超过服务端的响应速度导致，建议发送时适当sleep避免阻塞       |
| ErrorCode.CONNECTION_WRITE_EXCEPTION   | 上报请求过程异常             |                   |
| ErrorCode.SEND_WAIT_INTERRUPT   | 等待响应被中断              |                   |
| ErrorCode.SEND_WAIT_TIMEOUT   | 请求响应超时               |                   |
| ErrorCode.SEND_ON_EXCEPTION   | 发送请求异常               |                   |
| ErrorCode.UNKOWN_ERROR               | 未知错误                        |                    |

## TcpMsgSenderConfig 相关配置项介绍

| 参数设置                                                            | 说明                                                                                                                                 | 调整建议                                                                                 |
|-----------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| setAliveConnections(int aliveConnections)                       | 设置 DataProxy 连接数大小；默认值：7                                                                                                           | 1）数据量大或对时延敏感，适当增大该参数；2）根据 DataProxy 集群大小，适当调整该参数，比如集群规模为 30，该值可设为 5～10；3）现网经验值 15～20 |
| setSendBufferSize(int sendBufferSize)                           | 设置异步发送时 SDK netty 的发送缓冲队列大小；缓存队列用于暂存已发送但未收到服务端 Ack 的数据包。当缓冲区满时会收到 ErrorCode.CONNECTION_UNWRITABLE 异常；默认值： 16 * 1024 * 1024字节       | 1）通常无需调整该参数；2）数据量非常大或者 DataProxy 服务端负载较高情况下，可适当增大，注意不要太大导致 OOM                       |
| setConnectTimeoutMs(int connectTimeoutMs)                       | 设置连接超时时长，单位 ms，缺省 8000                                                                                                             | 根据实际环境需要设置                                                                           |
| setRequestTimeoutMs(long requestTimeoutMs)                      | 设置请求超时时长，单位 ms，缺省 10000                                                                                                            | 根据需要调整设置                                                                             |
| setMaxAllowedSyncMsgTimeoutCnt(int maxAllowedSyncMsgTimeoutCnt) | 设置单个 DataProxy 连接同步超时次数； SDK 内部会对每个 DataProxy 连接上的超时未收到 Ack 的同步请求进行计数，短时间内同一个连接超时数达到该值，会主动断开该连接，选择其他 DataProxy 创建新的连接进行数据发送。默认值：10 | 如果 DataProxy 集群本身规模较小，可适当调大该参数，避免短时间频繁断连                                             |
| setMgrConnTimeoutMs(int mgrConnTimeoutMs)                       | 设置 SDK 连接 Manager 的超时时长，单位 ms，默认 8000                                                                                              | 1）网络环境不好的情况下可适当增大该值；2）客户端解析域名时间较长情况下可适当增大该值                                          |
| setMgrSocketTimeoutMs(int mgrSocketTimeoutMs)                   | 设置 SDK 从 Manager 连接读取 DataProxy 列表的超时时间，单位 ms，默认值 15000                                                                            | 网络环境不好的情况下可适当增大该值                                                                    |