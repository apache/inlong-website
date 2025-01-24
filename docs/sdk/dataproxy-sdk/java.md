---
title: Java SDK
sidebar_position: 2
---

import {siteVariables} from '../../version';

## Create real-time synchronization task
Create a task on the Dashboard or through the command line, and use `Auto Push` (autonomous push) as the data source type.

## Import Java SDK
The library of the SDK need to be imported into the project before using the SDK. The library can be obtained in the following two ways:
- Get the source code and compile it yourself and deploy the SDK package to the local warehouse, see [How to Build](https://inlong.apache.org/docs/next/quick_start/how_to_build/).
- Imported through maven dependency like this:

```xml
<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>dataproxy-sdk</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
```

## Data report process
After import the SDK, you can instantiate a [MessageSender](https://github.com/apache/inlong/blob/master/inlong-sdk/dataproxy-sdk/src/main/java/org/apache/inlong/sdk/dataproxy/MessageSender.java) object, call sync(`sendMessage()`) or async(`asyncSendMessage()`) interface to report single or multiple(batch) data. see [Send Demo](https://github.com/apache/inlong/blob/master/inlong-sdk/dataproxy-sdk/src/main/java/org/apache/inlong/sdk/dataproxy/example/TcpClientExample.java). 
The overall process includes the following three steps：

### Initialize SDK
From the demo code, we can see that the client initialization is mainly done in the `getMessageSender()` function:
```java
public DefaultMessageSender getMessageSender(String localIP, String inLongManagerAddr, String inLongManagerPort,
            String inlongGroupId, boolean requestByHttp, boolean isReadProxyIPFromLocal,
            String configBasePath, int msgType) {
        ProxyClientConfig dataProxyConfig = null;
        DefaultMessageSender messageSender = null;
        try {
            // Initialize client configuration.  'admin', 'inlong' is default username and password of InLong-Manager, which need to be replaced according to the environment configuration in actual use.
            dataProxyConfig = new ProxyClientConfig(localIP, requestByHttp, inLongManagerAddr,
                    Integer.valueOf(inLongManagerPort), inlongGroupId, "admin", "inlong");
             // Set the local save path of the configuration. This setting is optional. By default, the SDK will create a "/.inlong/" directory under the current user's working directory to store the configuration.
            if (StringUtils.isNotEmpty(configBasePath)) {
                dataProxyConfig.setConfStoreBasePath(configBasePath);
            }
            // Set whether to use the local saved configuration or not. This setting is optional. By default, do not use. 
            dataProxyConfig.setReadProxyIPFromLocal(isReadProxyIPFromLocal);
            // Set the TCP protocol for transmission
            dataProxyConfig.setProtocolType(ProtocolType.TCP);
            // Initialize MessageSender object, if there is an exception, an exception will be thrown.
            messageSender = DefaultMessageSender.generateSenderByClusterId(dataProxyConfig);
            // Set message type to send. This setting is optional. By default, send data in binary format.
            messageSender.setMsgtype(msgType);
        } catch (Exception e) {
            logger.error("getMessageSender has exception e = {}", e);
        }
        // Return the sender.
        return messageSender;
}
```

### ProxyClientConfig  configuration
| parameter name | Parameter Description | default value |
| ------ | ------ | -------|
| inlongGroupId | inlongGroupId | not null |
| inlongStreamId | inlongStreamId | not null |
| username | username | not null|
| password | password | not null|
|requestByHttp| request inlong manager protocol | https: false , http: true|
|isReadProxyIPFromLocal|whether to read DataProxy ip from local|false|

### Call the send interface to report data
The SDK data send interface is thread safe, support send single or multiple messages by sync and async two ways. The following demo uses a single sync way to send, and the message does not contain property information:
```java
public void sendTcpMessage(DefaultMessageSender sender, String inlongGroupId, String inlongStreamId, String messageBody, long dt) {
    SendResult result = null;
    try {
        // Sends a single message in sync mode, and does not contain property information    
        result = sender.sendMessage(messageBody.getBytes("utf8"), inlongGroupId, inlongStreamId,
                0, String.valueOf(dt), 20, TimeUnit.SECONDS);
    } catch (UnsupportedEncodingException e) {
        e.printStackTrace();
    }
    logger.info("messageSender {}", result);
}
```

You can also choose different send interfaces to report data according to your business needs. For the details of the interface, please refer to the definition in the [MessageSender](https://github.com/apache/inlong/blob/master/inlong-sdk/dataproxy-sdk/src/main/java/org/apache/inlong/sdk/dataproxy/MessageSender.java) interface file, which has a detailed introduction, no additional explanation here. 

### Close SDK 

You can call the `close()` function of the MessageSender interface object to stop data reporting:

```java
sender.close(); // close the sender
```

## Warning
- The `MessageSender` interface object is initialized based on the `inlongGroupId`, so each `MessageSender` object can be used differently based on the `inlongGroupId`, and multiple `MessageSender` objects can be created in the same process.
- The SDK provides three different network interaction ways: TCP, HTTP, and UDP. Examples of these three ways are given in the [example](https://github.com/apache/inlong/blob/master/inlong-sdk/dataproxy-sdk/src/main/java/org/apache/inlong/sdk/dataproxy/example) (refer to `TcpClientExample.java`, `HttpClientExample.java`, `UdpClientExample.java`), and the business can be customized according to its own needs to initialize different `MessageSender` object.
- The SDK contains complex network interactions, `MessageSender` should be used as a resident object. Avoid frequent initialization and shutdown of `MessageSender` (frequent initialization and shutdown will have a large resource overhead and will affect the timeliness of data reporting).
- The SDK does not resend the failed message. When using the SDK to report data, if send fails, you need to decide whether to resend according to your own needs.

## Error Code Introduction
Common error codes are as follows.

| Code                                   | Explain                           | Remarks                                            |
|---------------------------------------|------------------------------|-----------------------------------------------|
| SendResult.OK                         | Successfully sent                        |                                               |
| SendResult.TIMEOUT                    | Request response timeout                       |                                               |
| SendResult.CONNECTION_BREAK           | Connection is breaked                       |                                               |
| SendResult.THREAD_INTERRUPT           | Interrupt                           |                                               |
| SendResult.ASYNC_CALLBACK_BUFFER_FULL | Async callback buffer full                | In this case, generally, it is caused by the speed of production data exceeding the response speed of the server. It is recommended to properly sleep when send to avoid blocking. |
| SendResult.NO_CONNECTION              | No available connection                        | In this case, it is recommended to increase the number of available connections.                               |
| SendResult.INVALID_DATA               | Invalid data, failed to report data to DataProxy via HTTP |                                               |
| SendResult.INVALID_ATTRIBUTES         | The packets sent are incorrect, such as empty packets or packets containing predefined attributes of the system |                                               |
| SendResult.UNKOWN_ERROR               | Unknown error                         |                                               |

## ProxyClientConfig Configuration Introduction

| Parameter                                                      | Explain                                                                                                                | Adjustment Suggestion                                                                            |
|-----------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| setAliveConnections(int aliveConnections)                 | Set the number of DataProxy connections. Default: 3.                                                                                           | 1) If the amount of data is large or sensitive to delay, increase this parameter appropriately; 2) According to the size of the DataProxy cluster, adjust this parameter appropriately. For example, if the cluster size is 30, this value can be set to 5 ~ 10; 3) Experience value 15 ~ 20. |
| setTotalAsyncCallbackSize(int asyncCallbackSize)          | Set the size of SDK internal buffer queue during async send. The buffer is used to store packets that have been sent but have not received an Ack from the dataProxy. When the buffer reaches this threshold, continue to send data, and will receive an ASYNC_CALLBACK_BUFFER_FULL exception. Default: 50000.    | 1) Normally, there is no need to adjust this parameter; 2) When the amount of data is very large or the load of DataProxy is high, it can be increased appropriately. Be careful not to be too large, which may cause OOM.                     |
| setConnectTimeoutMillis(long connectTimeoutMillis)        | Set the connection timeout interval. Unit: ms, Default: 40000.                                                                                            | Set according to the actual environment.                                                                      |
| setRequestTimeoutMillis(long requestTimeoutMillis)        | Set request timeout interval. Unit: ms, Default: 40000.                                                                                           | Adjust settings as needed.                                                                        |
| setMaxTimeoutCnt(int maxTimeoutCnt)                       | Set the number of timeout disconnections of a single DataProxy connection. The SDK will internally count the DataProxy connections that have timed out and have not received an Ack. If the timeout times of a connection reach the value within a short period of time, the SDK automatically disconnects the connection and selects another DataProxy to create a new connection for data reporting. Default value: 3.| If the size of the DataProxy cluster is small, you can appropriately increase this parameter to avoid frequent disconnection in a short time.                                          |
| setManagerConnectionTimeout(int managerConnectionTimeout) | Set the timeout interval for SDK connection to InLong Manager. Unit: ms, Default: 10000.                                                                              | 1) When the network environment is not good, the value can be increased appropriately; 2) When the client takes a long time to resolve the domain name, the value can be increased appropriately.                                     |
| setManagerSocketTimeout(int managerSocketTimeout)         | Sets the timeout for the SDK to get the DataProxy list from the InLong Manager connection, Unit: ms, Default: 30000.                                                                 | When the network environment is not good, the value can be increased appropriately.                                                               |