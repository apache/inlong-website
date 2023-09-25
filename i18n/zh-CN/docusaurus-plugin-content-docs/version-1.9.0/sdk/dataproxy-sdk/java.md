---
title: Java SDK
sidebar_position: 2
---

import {siteVariables} from '../../version';

## 新建实时同步任务
在 Dashboard 或者通过命令行工具创建任务，数据源类型使用 `Auto Push` (自主推送)。

## 引入 Java SDK
需要在项目中包含 SDK 的头文件和库，进行 SDK 的使用。头文件和库提供以下两种获取方式：
- 获取源码自行编译并将 SDK 包部署到本地仓库，见[如何编译](https://inlong.apache.org/docs/next/quick_start/how_to_build/)；
- 直接引用Apache仓库里的已有库，见
<pre><code parentName="pre">
{`<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>dataproxy-sdk</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
`}
</code></pre>

## 数据上报流程
引入 SDK 后，通过实例化一个[MessageSender](https://github.com/apache/inlong/blob/master/inlong-sdk/dataproxy-sdk/src/main/java/org/apache/inlong/sdk/dataproxy/MessageSender.java)接口对象后，调用相关的同步（sendMessage()）或 异步（asyncSendMessage()）接口来完成单条或多条（批量）数据的上报任务。发送Demo可参考 [TcpClientExample.java](https://github.com/apache/inlong/blob/master/inlong-sdk/dataproxy-sdk/src/main/java/org/apache/inlong/sdk/dataproxy/example/TcpClientExample.java)。
整体流程包括以下三个步骤：

### 初始化 SDK
从Demo示例代码我们可以看到，客户端初始化主要是在 `getMessageSender()` 函数中完成：
```java
public DefaultMessageSender getMessageSender(String localIP, String inLongManagerAddr, String inLongManagerPort, String netTag, String dataProxyGroup, boolean isLocalVisit, boolean isReadProxyIPFromLocal, String configBasePath, int msgType) {
    ProxyClientConfig dataProxyConfig = null;
    DefaultMessageSender messageSender = null;
    try {
        // 初始化客户端配置，其中“test”，“123456”是需要认证的用户名和密码，实际使用时需要根据环境配置进行更替
        dataProxyConfig = new ProxyClientConfig(localIP, isLocalVisit, inLongManagerAddr, Integer.valueOf(inLongManagerPort), dataProxyGroup, netTag, "test", "123456");
		// 设置配置信息的本地保存路径，该设置可选，缺省情况下 SDK 会在当前用户工作目录下构造一个"/.inlong/"目录存储配置数据
		if (StringUtils.isNotEmpty(configBasePath)) {
            dataProxyConfig.setConfStoreBasePath(configBasePath);
        }
		// 设置是否允许使用本地保存的配置信息，该设置可选，缺省不启用
        dataProxyConfig.setReadProxyIPFromLocal(isReadProxyIPFromLocal);
		// 初始化MessageSender对象，异常将抛异常
        messageSender = DefaultMessageSender.generateSenderByClusterId(dataProxyConfig);
		// 设置 SDK 与DataProxy间消息发送的消息类型，该设置可选，缺省默认为7以二进制形式进行数据发送
        messageSender.setMsgtype(msgType);
    } catch (Exception e) {
        logger.error("getMessageSender has exception e = {}", e);
    }
	// 返回初始化结果
    return messageSender;
}
```

### 调用发送接口进行数据上报
SDK 的数据发送接口时线程安全的，支持以同步或者异步模式发送单条或多条消息。Demo里采用的是单条同步消息发送，并且消息中不包含属性信息：
```java
public void sendTcpMessage(DefaultMessageSender sender, String inlongGroupId, String inlongStreamId, String messageBody, long dt) {
    SendResult result = null;
    try {
        // 以同步模式发送单条消息，不携带属性信息
        result = sender.sendMessage(messageBody.getBytes("utf8"), inlongGroupId, inlongStreamId,
                0, String.valueOf(dt), 20, TimeUnit.SECONDS);
    } catch (UnsupportedEncodingException e) {
        e.printStackTrace();
    }
    logger.info("messageSender {}", result);
}
```

大家还可以根据业务需要选择不同的发送接口进行数据上报，具体接口细节可以参考[MessageSender](https://github.com/apache/inlong/blob/master/inlong-sdk/dataproxy-sdk/src/main/java/org/apache/inlong/sdk/dataproxy/MessageSender.java)接口文件中的定义，里面有详细的接口使用及参数定义介绍，这里不做额外说明。

### 关闭 SDK 
Demo 里没有实现关闭操作，使用时我们需要调用MessageSender接口对象的close()函数关闭数据上报服务：

# 注意事项
- MessageSender接口对象是基于GroupID进行初始化，因而每个MessageSender对象基于GroupID区别使用，同一个进程内允许创建多个MessageSender对象；
- SDK 封装了TCP、HTTP、UDP共三种不同的网络交互方式，并在[example](https://github.com/apache/inlong/blob/master/inlong-sdk/dataproxy-sdk/src/main/java/org/apache/inlong/sdk/dataproxy/example)目录里给出了3种方式的不同示例（参考TcpClientExample.java，HttpClientExample.java，UdpClientExample.java实现），业务可以根据自身需要来初始化不同的MessageSender对象；
- SDK 中包含了复杂的网络交互，使用时需要将 SDK 作为常驻服务对象来使用，避免同个进程中途频繁地初始化和关闭MessageSender对象（重复初始化和关闭会带来很大的资源开销，并且影响数据上报的时效性）；
- SDK 不对发送失败的消息做重发处理，用户在使用 SDK 上报数据时遇到发送失败，业务要根据自身数据要求来决定是否重发消息，避免数据丢失。

## 错误码介绍
常见result会有以下几种值

| 返回值                                   | 含义                           | 备注                                            |
|---------------------------------------|------------------------------|-----------------------------------------------|
| SendResult.OK                         | 消息发送成功                       |                                               |
| SendResult.TIMEOUT                    | 请求响应超时                       |                                               |
| SendResult.CONNECTION_BREAK           | 链接被断开                        |                                               |
| SendResult.THREAD_INTERRUPT           | 中断                           |                                               |
| SendResult.ASYNC_CALLBACK_BUFFER_FULL | SDK 待回包请求消息满                 | 这种情况一般为前端生产数据的速度超过服务端的响应速度导致，建议发送时适当sleep避免阻塞 |
| SendResult.NO_CONNECTION              | 没有可用链接                       | 这种情况建议业务增大可用链接数                               |
| SendResult.INVALID_DATA               | 数据无效，通过HTTP上报数据DataProxy返回失败 |                                               |
| SendResult.INVALID_ATTRIBUTES         | 发送的数据包不合理，比如为空数据包或包含了系统预定义属性 |                                               |
| SendResult.UNKOWN_ERROR               | 未知错误                         |                                               |

## ProxyClientConfig相关配置项介绍

| 参数设置                                                      | 说明                                                                                                                | 调整建议                                                                            |
|-----------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| setAliveConnections(int aliveConnections)                 | 设置DataProxy连接数大小；默认值：3                                                                                            | 1）数据量大或对时延敏感，适当增大该参数；2）根据DataProxy集群大小，适当调整该参数，比如集群规模为30，该值可设为5～10；3）现网经验值15～20 |
| setTotalAsyncCallbackSize(int asyncCallbackSize)          | 设置异步发送时 SDK 内部缓冲队列大小；缓存队列用于暂存已发送但未收到服务端Ack的数据包。当缓冲数据达到该值，业务继续异步上报数据，会收到ASYNC_CALLBACK_BUFFER_FULL异常；默认值： 50000    | 1）通常无需调整该参数；2）数据量非常大或者DataProxy服务端负载较高情况下，可适当增大，注意不要太大导致OOM                     |
| setConnectTimeoutMillis(long connectTimeoutMillis)        | 设置连接超时时长，单位ms，缺省40000                                                                                             | 根据实际环境需要设置                                                                      |
| setRequestTimeoutMillis(long requestTimeoutMillis)        | 设置请求超时时长，单位ms，缺省40000                                                                                             | 根据需要调整设置                                                                        |
| setMaxTimeoutCnt(int maxTimeoutCnt)                       | 设置单个DataProxy连接超时断连次数； SDK 内部会对超时未收到Ack的DataProxy连接进行计数，短时间内同一个连接超时数达到该值，会主动断开该连接，选择其他DataProxy创建新的连接进行数据发送。默认值：3 | 如果DataProxy集群本身规模较小，可适当调大该参数，避免短时间频繁断连                                          |
| setManagerConnectionTimeout(int managerConnectionTimeout) | 设置 SDK 连接Manager的超时时长，单位ms，默认10000ms                                                                              | 1）网络环境不好的情况下可适当增大该值；2）客户端解析域名时间较长情况下可适当增大该值                                     |
| setManagerSocketTimeout(int managerSocketTimeout)         | 设置 SDK 从Manager连接读取DataProxy列表的超时时间，单位ms，默认值30000                                                                 | 网络环境不好的情况下可适当增大该值                                                               |