---
title: Java SDK
sidebar_position: 2
---

import {siteVariables} from '../../version';

## Create real-time synchronization task
Create a task on the Dashboard or through the command line, and use `Auto Push` (autonomous push) as the data source type.

## Import Java SDK
The library of the SDK need to be imported into the project before using the SDK. The library can be obtained in the following two ways:
- Get the source code and compile it yourself and deploy the SDK package to the local warehouse, see [How to Build](https://inlong.apache.org/docs/next/development/how_to_build/).
- Imported through maven dependency like this:

```xml
<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>dataproxy-sdk</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
```

## Data report process
After import the SDK, you can instantiate a [TcpMsgSender](https://github.com/apache/inlong/blob/master/inlong-sdk/dataproxy-sdk/src/main/java/org/apache/inlong/sdk/dataproxy/sender/tcp/TcpMsgSender.java) object, call sync(`sendMessage()`) or async(`asyncSendMessage()`) interface to report single or multiple(batch) data. see [TcpClientExample.java](https://github.com/apache/inlong/blob/master/inlong-sdk/dataproxy-sdk/src/main/java/org/apache/inlong/sdk/dataproxy/example/TcpClientExample.java). 
The overall process includes the following three steps：

### Initialize SDK
From the demo code, we can see that the client initialization is mainly done in the `getMessageSender()` function:
```java
public TcpMsgSender getMessageSender(MsgSenderFactory senderFactory, boolean visitMgrByHttps,
                                         String managerAddr, String managerPort, String inlongGroupId, int msgType,
                                         boolean useLocalMetaConfig, String configBasePath) {
    TcpMsgSender messageSender = null;
    try {
        // build sender configure
        // 'admin', 'inlong' is default username and password of InLong-Manager, which need to be replaced according to the environment configuration in actual use.
        TcpMsgSenderConfig tcpConfig =
                new TcpMsgSenderConfig(visitMgrByHttps, managerAddr,
                        Integer.parseInt(managerPort), inlongGroupId, "admin", "inlong");
        // Set the local save path of the configuration. This setting is optional. By default, the SDK will create a "/.inlong/" directory under the current user's working directory to store the configuration.
        tcpConfig.setMetaStoreBasePath(configBasePath);
        // Set whether to use the local saved configuration or not. This setting is optional. By default, do not use. 
        tcpConfig.setOnlyUseLocalProxyConfig(useLocalMetaConfig);
        // Set message type to send. This setting is optional. By default, send data in binary format.
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

### TcpMsgSenderConfig  configuration
| parameter name      | Parameter Description | default value             |
|---------------------| ------ |---------------------------|
| inlongGroupId       | inlongGroupId | not null                  |
| inlongStreamId      | inlongStreamId | not null                  |
| username            | username | not null                  |
| password            | password | not null                  |
| visitMgrByHttps     | request inlong manager protocol | https: true , http: false |
| useLocalMetaConfig  |whether to read DataProxy ip from local| false                     |

### Call the send interface to report data
The SDK data send interface is thread safe, support send single or multiple messages by sync and async two ways. The following demo uses a single sync way to send, and the message does not contain property information:

```java
    public void sendTcpMessage(TcpMsgSender sender,
                               String inlongGroupId, String inlongStreamId, long dt, String messageBody) {
    ProcessResult procResult = new ProcessResult();
    try {
        // Sends a single message in sync mode, and does not contain property information 
        sender.sendMessage(new TcpEventInfo(inlongGroupId, inlongStreamId,
                dt, null, messageBody.getBytes(StandardCharsets.UTF_8)), procResult);
    } catch (Throwable ex) {
        System.out.println("Message sent throw exception, " + ex);
        return;
    }
    System.out.println("Message sent result = " + procResult);
}
```

You can also choose different send interfaces to report data according to your business needs. For the details of the interface, please refer to the definition in the [TcpMsgSender](https://github.com/apache/inlong/blob/master/inlong-sdk/dataproxy-sdk/src/main/java/org/apache/inlong/sdk/dataproxy/sender/tcp/TcpMsgSender.java) interface file, which has a detailed introduction, no additional explanation here. 

### Close SDK 
Since we create and reuse Sender objects through the Sender object factory, we close the data reporting service by calling the shutdownAll() function of the factory when exiting.

```java
senderFactory.shutdownAll();
```

## Warning
- The `MessageSender` interface object is initialized based on the `inlongGroupId`, so each `MessageSender` object can be used differently based on the `inlongGroupId`, and multiple `MessageSender` objects can be created in the same process.
- The SDK provides three different network interaction ways: TCP, HTTP. Examples of these three ways are given in the [example](https://github.com/apache/inlong/blob/master/inlong-sdk/dataproxy-sdk/src/main/java/org/apache/inlong/sdk/dataproxy/example) (refer to `TcpClientExample.java`, `HttpClientExample.java`, `UdpClientExample.java`), and the business can be customized according to its own needs to initialize different `MessageSender` object.
- The SDK contains complex network interactions, `MessageSender` should be used as a resident object. Avoid frequent initialization and shutdown of `MessageSender` (frequent initialization and shutdown will have a large resource overhead and will affect the timeliness of data reporting).
- The SDK does not resend the failed message. When using the SDK to report data, if send fails, you need to decide whether to resend according to your own needs.

## Error Code Introduction
Common error codes are as follows.

| Code                                   | Explain                                | Remarks                                            |
|---------------------------------------|----------------------------------------|-----------------------------------------------|
| ErrorCode.OK                           | Successfully sent                      |                   |
| ErrorCode.SDK_CLOSED                   | SDK has closed                         |                   |
| ErrorCode.FETCH_PROXY_META_FAILURE     | SDK failed to obtain metadata                            |                   |
| ErrorCode.EMPTY_ACTIVE_NODE_SET        | No active nodes available                          |                   |
| ErrorCode.EMPTY_WRITABLE_NODE_SET      | All nodes are not writable                       |                   |
| ErrorCode.NO_VALID_REMOTE_NODE         | No available connection                | In this case, it is recommended to increase the number of available connections.   |
| ErrorCode.REPORT_INFO_EXCEED_MAX_LEN   | The reported data exceeds the maximum allowed length                           |                   |
| ErrorCode.CONNECTION_UNAVAILABLE   | Connection unavailable                 |         |
| ErrorCode.CONNECTION_BREAK   | Connection is breaked                  |                   |
| ErrorCode.CONNECTION_UNWRITABLE   | Connection not writable                | This is usually caused by the front-end producing data faster than the server's response speed. It is recommended to sleep appropriately when sending to avoid blocking.       |
| ErrorCode.CONNECTION_WRITE_EXCEPTION   | Write report request process exception |                   |
| ErrorCode.SEND_WAIT_INTERRUPT   | Interrupt                              |                   |
| ErrorCode.SEND_WAIT_TIMEOUT   | Request response timeout               |                   |
| ErrorCode.SEND_ON_EXCEPTION   | Send request exception                 |                   |
| ErrorCode.UNKOWN_ERROR               | Unknown error                          |                    |


## TcpMsgSenderConfig Configuration Introduction

| Parameter                                                       | Explain                                                                                                                                                                                                                                                                                                                                                                                                                   | Adjustment Suggestion                                                                            |
|-----------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| setAliveConnections(int aliveConnections)                       | Set the number of DataProxy connections. Default: 7.                                                                                                                                                                                                                                                                                                                                                                      | 1) If the amount of data is large or sensitive to delay, increase this parameter appropriately; 2) According to the size of the DataProxy cluster, adjust this parameter appropriately. For example, if the cluster size is 30, this value can be set to 5 ~ 10; 3) Experience value 15 ~ 20. |
| setSendBufferSize(int sendBufferSize)                           | Set the size of SDK internal buffer queue during async send. The buffer is used to store packets that have been sent but have not received an Ack from the dataProxy. When the buffer reaches this threshold, continue to send data, and will receive an ErrorCode.CONNECTION_UNWRITABLE exception. Default: 16 * 1024 * 1024 Bytes.                                                                                      | 1) Normally, there is no need to adjust this parameter; 2) When the amount of data is very large or the load of DataProxy is high, it can be increased appropriately. Be careful not to be too large, which may cause OOM.                     |
| setConnectTimeoutMs(int connectTimeoutMs)                       | Set the connection timeout interval. Unit: ms, Default: 8000.                                                                                                                                                                                                                                                                                                                                                             | Set according to the actual environment.                                                                      |
| setRequestTimeoutMs(long requestTimeoutMs)                      | Set request timeout interval. Unit: ms, Default: 10000.                                                                                                                                                                                                                                                                                                                                                                   | Adjust settings as needed.                                                                        |
| setMaxAllowedSyncMsgTimeoutCnt(int maxAllowedSyncMsgTimeoutCnt) | Set the number of timeout disconnections of a single DataProxy connection. The SDK will internally count the DataProxy connections that have timed out and have not received an Ack. If the timeout times of a connection reach the value within a short period of time, the SDK automatically disconnects the connection and selects another DataProxy to create a new connection for data reporting. Default value: 10. | If the size of the DataProxy cluster is small, you can appropriately increase this parameter to avoid frequent disconnection in a short time.                                          |
| setMgrConnTimeoutMs(int mgrConnTimeoutMs)                       | Set the timeout interval for SDK connection to InLong Manager. Unit: ms, Default: 8000.                                                                                                                                                                                                                                                                                                                                   | 1) When the network environment is not good, the value can be increased appropriately; 2) When the client takes a long time to resolve the domain name, the value can be increased appropriately.                                     |
| setMgrSocketTimeoutMs(int mgrSocketTimeoutMs)                   | Sets the timeout for the SDK to get the DataProxy list from the InLong Manager connection, Unit: ms, Default: 15000.                                                                                                                                                                                                                                                                                                      | When the network environment is not good, the value can be increased appropriately.                                                               |