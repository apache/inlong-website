---
title: Usage
---
# How To Use

## 一、Add dependency in maven pom.xml

```
   <dependency>
           <groupId>org.apache.inlong</groupId>
           <artifactId>inlong-dataproxy-sdk</artifactId>
           <version>${inlong_version}</version>
   </dependency>
```

## 二、Example Show
  To view detailed API information [overview](./overview).<br/>
  Inlong-dataproxy-sdk provides APIs for tcp and http protocols, but the UDP API is not provided yet.
  If you need to use UDP to send data, you need to package the data according to the method in the sdk.
  The example of inlong-dataproxy-sdk provides example code for tcp, http and udp.
  Users who need it can refer to the corresponding implementation.

### 2.1 TCP client

Step 1: Create a messageSender, the code example is as follows:
```java
    public DefaultMessageSender getMessageSender(String localIP, String inLongManagerAddr, String inLongManagerPort,
            String netTag, String dataProxyGroup, boolean isLocalVisit, boolean isReadProxyIPFromLocal,
            String configBasePath, int msgType) {
        ProxyClientConfig dataProxyConfig = null;
        DefaultMessageSender messageSender = null;
        try {
            dataProxyConfig = new ProxyClientConfig(localIP, isLocalVisit, inLongManagerAddr,
                    Integer.valueOf(inLongManagerPort), dataProxyGroup, netTag);
            if (StringUtils.isNotEmpty(configBasePath)) {
                dataProxyConfig.setConfStoreBasePath(configBasePath);
            }
            dataProxyConfig.setReadProxyIPFromLocal(isReadProxyIPFromLocal);
            messageSender = DefaultMessageSender.generateSenderByClusterId(dataProxyConfig);
            messageSender.setMsgtype(msgType);
        } catch (Exception e) {
            logger.error("getMessageSender has exception e = {}", e);
        }
        return messageSender;
    }
```

The parameter description is as follows:

| parameter name         | type     | instruction                                |
|-----------------------|----------|--------------------------------------------|
| inLongManagerAddr      | String   | inlong admin server address                           |
| inLongManagerPort      | String   | inlong admin server port                            |
| netTag                 | String   | Network label, not used yet, you can pass an empty string                |
| dataProxyGroup         | String   | dataProup group name, the name used for local configuration when the user enables local configuration         |
| isLocalVisit           | boolean  | Whether to use local configuration, true use https to access the console, false use http to request the console|
| isReadProxyIPFromLocal | boolean  | Whether to obtain the address information of the Dataproxy server from the local configuration file, local self-test, can be set to true if the management console cannot be accessede|
| configBasePath         | String   | The path of the local configuration file. The default is ./inlong. When isReadProxyIPFromLocal is true, the configuration file is searched from this directory|                                 |
| msgtype                | int      | Message assembly type, value (3, 5, 7, 8), it is recommended to use 7, each message type represents a message assembly protocol during the transmission process, please refer to the code implementation of sdk for details|

When isReadProxyIPFromLocal is true, the configuration information of Dataproxy will be obtained from the local configuration file.<br/>
The path to the local file is :<br>
```
    ${configBasePath}
```
The file name is :<br>
```
    ${dataProxyGroup}.local<br/>
```
For example:
```
    configBasePath = /data/inlong
    dataProxyGroup = inlong_test
```

Then the full path of the local file is:
```
    /data/inlong/inlong_test.local
```

The file configuration content is (json format), where host is the address of the DataProxy server, and port is the corresponding port, which requires at least two configurations (the same two items can be configured):
```json
    {"isInterVisit":1,"cluster_id":"1","size":1,"switch":1,"address":[{"host":"127.0.0.1",* "port":"46802"},{"host":"127.0.0.1","port":"46802"}]}
```

<br/>

Step 2: Send a message using messageSender

```java
    public void sendTcpMessage(DefaultMessageSender sender, String inlongGroupId,
            String inlongStreamId, String messageBody, long dt) throws Exception {
      SendResult result = sender.sendMessage(messageBody.getBytes("utf8"),inlongGroupId, inlongStreamId,
             0, String.valueOf(dt), 20,TimeUnit.SECONDS);
      logger.info("messageSender {} ", result);
    }
```

The parameter description is as follows:

| parameter name         | type     | instruction                             |
|------------------------|----------|--------------------------------------------|
| sender                 | HttpProxySender   | The sender created in the first step                  |
| inlongGroupId          | String   | inglongGroupId                             |
| inlongStreamId         | String   | inlongStreamId                             |
| messageBody            | String   | Sent message content                                |
| dt                     | long     | timestamp                               |

### 2.2 HTTP client

Step 1: Create messageSender

```java
    public HttpProxySender getMessageSender(String localIP, String inLongManagerAddr, String inLongManagerPort,
            String netTag, String dataProxyGroup, boolean isLocalVisit, boolean isReadProxyIPFromLocal,
            String configBasePath) {
         ProxyClientConfig proxyConfig = null;
         HttpProxySender sender = null;
         try {
              proxyConfig = new ProxyClientConfig(localIP, isLocalVisit, inLongManagerAddr,
                        Integer.valueOf(inLongManagerPort),
                        dataProxyGroup, netTag);
             proxyConfig.setGroupId(dataProxyGroup);
             proxyConfig.setConfStoreBasePath(configBasePath);
             proxyConfig.setReadProxyIPFromLocal(isReadProxyIPFromLocal);
             proxyConfig.setDiscardOldMessage(true);
             sender = new HttpProxySender(proxyConfig);
         } catch (ProxysdkException e) {
             e.printStackTrace();
         } catch (Exception e) {
             e.printStackTrace();
         }
        return sender;
    }
```

The parameter description is as follows:

| parameter name         | type     | instruction                                      |
|------------------------|----------|--------------------------------------------|
| inLongManagerAddr      | String   | inlong admin server address                |
| inLongManagerPort      | String   | inlong admin server port                   |
| netTag                 | String   | Network label, not used yet, you can pass an empty string   |
| dataProxyGroup         | String   | dataProup group name, the name used for local configuration when the user enables local configuration         |
| isLocalVisit           | boolean  | Whether to use local configuration, true use https to access the console, false use http to request the console|
| isReadProxyIPFromLocal | boolean  | Whether to obtain the address information of the Dataproxy server from the local configuration file, local self-test, can be set to true if the management console cannot be accessed|
| configBasePath         | String   | The path of the local configuration file. The default is ./inlong. When isReadProxyIPFromLocal is true, the configuration file is searched from this directory.|                                 |


When isReadProxyIPFromLocal is set true, the configuration information of Dataproxy will be obtained from the local configuration file.<br/>
The path to the local file is:<br>
```
    ${configBasePath}
```
The file name is: <br>
```
    ${dataProxyGroup}.local<br/>
```
For example:<br/>
```
    configBasePath = /data/inlong
    dataProxyGroup = inlong_test
```

Then the full path name of the local file is:
```
    /data/inlong/inlong_test.local
```

The file configuration content is (json format), where host is the address of the DataProxy server, and port is the corresponding port, which requires at least two configurations (the same two items can be configured):
```json
    {"isInterVisit":1,"cluster_id":"1","size":1,"switch":1,"address":[{"host":"127.0.0.1",* "port":"46802"},{"host":"127.0.0.1","port":"46802"}]}
```

Step 2: Send a message

```java
    public void sendHttpMessage(HttpProxySender sender, String inlongGroupId,
            String inlongStreamId, String messageBody) throws Exception {
        List<String> bodyList = new ArrayList<>();
        bodyList.add(messageBody);
        sender.asyncSendMessage(bodyList, inlongGroupId, inlongStreamId, System.currentTimeMillis(),
             20, TimeUnit.SECONDS, new MyMessageCallBack());
    }
```
The parameter description is as follows:

| parameter name         | type    | instruction                                    |
|------------------------|----------|--------------------------------------------|
| sender                 | HttpProxySender   | The sender created in the first step                  |
| inlongGroupId          | String   | inglongGroupId                             |
| inlongStreamId         | String   | inlongStreamId                             |
| messageBody            | String   | Sent message content                                |

### 2.3 UDP client
inlong-dataproxy-sdk does not support sending messages of udp protocol. If users need it, they need to assemble them according to the message assembly method in sdk.
Organize binary arrays and send them in upd mode. For specific examples, refer to the relevant example codes in inlong-sdk/dataporxy-sdk.