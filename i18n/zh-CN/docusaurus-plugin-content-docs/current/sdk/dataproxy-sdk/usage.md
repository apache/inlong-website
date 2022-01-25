---
DataProxy-SDK 示例
sidebar_position: 2
---
Inlong dataproxy sdk 提供tcp、http两种协议的接入api，使用tcp或者http接入时需要保证dataproxy服务器端，有对应的协议的接入配置（即对应的source服务配置）。如果，需要使用upd方式接入，需要自己按照tcp传输的bytes数组格式进行组包，采用UDP协议发送到dataproxy服务器
，服务器端采用与tcp一样的方式对接。
此外，在inlong dataproxy sdk中的example目录下提供了tcp、http、udp三种协议的接入演示代码，大家在接入时可以参考。
## 一、导入Maven依赖
```
   <dependency>
           <groupId>org.apache.inlong</groupId>
           <artifactId>inlong-dataproxy-sdk</artifactId>
           <version>${inlong_version}</version>
   </dependency>
```
## 二、Example 演示
  Api详情，请查看[总览](./overview)
### 2.1 TCP client

第一步：创建messageSender，代码示例如下：
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
参数说明如下：

| 参数名称                 | 类型     | 说明                                        |
|------------------------|----------|--------------------------------------------|
| inLongManagerAddr      | String   | inlong管理台地址                             |
| inLongManagerPort      | String   | inlong管理台端口                             |
| netTag                 | String   | 网络标签，暂未使用，可以传空字符串                |
| dataProxyGroup         | String   | dataProup组名称，用户在启用本地配置的时候，用于本地配置的名称         |
| isLocalVisit           | boolean  | 是否使用本地配置， true 使用https 访问管理台，false使用http请求管理台|
| isReadProxyIPFromLocal | boolean  | 是否从本地配置文件中获取Dataproxy服务器地址信息，本地自测，不能访问管理台的情况下可以配置为true|
| configBasePath         | String   | 本地配置文件的路径 默认./inlong，isReadProxyIPFromLocal为true时从这个目录查找配置文件/                                 |
| msgtype                | int      | 消息类型，取值（3，5，7，8），建议使用7，每种消息类型代表一种传递过程中消息的拼装协议,具体请参照sdk的代码实现|

当isReadProxyIPFromLocal为true的时候, 会从本地配置文件中获取Dataproxy的配置信息。

本地文件的路径为：
```
    ${configBasePath}
```

文件名称为：
```
    ${dataProxyGroup}.local
```
例如：
```
    configBasePath = /data/inlong
    dataProxyGroup = inlong_test
```
则本地文件的全路径名称为：
```
    /data/inlong/inlong_test.local
```

文件配置内容为(json 格式),其中host为DataProxy 服务器地址，port为对应的端口，这需要至少配置两个（可以配置为相同的两项）：
```json
    {"isInterVisit":1,"cluster_id":"1","size":1,"switch":1,"address":[{"host":"127.0.0.1","port":"46802"},{"host":"127.0.0.1","port":"46802"}]}
```
第二步：使用messageSender发送消息
```java
    public void sendTcpMessage(DefaultMessageSender sender, String inlongGroupId,
            String inlongStreamId, String messageBody, long dt) throws Exception {
     SendResult result = sender.sendMessage(messageBody.getBytes("utf8"),inlongGroupId, inlongStreamId,
             0, String.valueOf(dt), 20,TimeUnit.SECONDS);
     logger.info("messageSender {} ", result);
    }
```

参数说明如下：

| 参数名称                 | 类型     | 说明                                        |
|------------------------|----------|--------------------------------------------|
| sender                 | HttpProxySender   | 第一步创建的sender                  |
| inlongGroupId          | String   | inglongGroupId                             |
| inlongStreamId         | String   | inlongStreamId                             |
| messageBody            | String   | 发送的消息内容                                |
| dt                     | long     | 时间戳                               |

### 2.2 HTTP client

第一步：创建messageSender

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
参数说明如下：

| 参数名称                 | 类型     | 说明                                        |
|------------------------|----------|--------------------------------------------|
| inLongManagerAddr      | String   | inlong管理台地址                             |
| inLongManagerPort      | String   | inlong管理台端口                             |
| netTag                 | String   | 网络标签，暂未使用，可以传空字符串                |
| dataProxyGroup         | String   | dataProup组名称，用户在启用本地配置的时候，用于本地配置的名称         |
| isLocalVisit           | boolean  | 是否使用本地配置， true 使用https 访问管理台，false使用http请求管理台|
| isReadProxyIPFromLocal | boolean  | 是否从本地配置文件中获取Dataproxy服务器地址信息，本地自测，不能访问管理台的情况下可以配置为true|
| configBasePath         | String   | 本地配置文件的路径 默认./inlong，isReadProxyIPFromLocal为true时从这个目录查找配置文件/                                 |

当isReadProxyIPFromLocal为true的时候, 会从本地配置文件中获取Dataproxy的配置信息。

本地文件的路径为
```
    ${configBasePath}
```
文件名称为：
```
    ${dataProxyGroup}.local
```
例如：
```
    configBasePath = /data/inlong
    dataProxyGroup = inlong_test
```

则本地文件的全路径名称为：
```
    /data/inlong/inlong_test.local
```
文件配置内容为(json 格式),其中host为DataProxy 服务器地址，port为对应的端口，这需要至少配置两个（可以配置为相同的两项）：
```json
    {"isInterVisit":1,"cluster_id":"1","size":1,"switch":1,"address":[{"host":"127.0.0.1","port":"46802"},{"host":"127.0.0.1","port":"46802"}]}
```

第二步: 发送消息

```java
    public void sendHttpMessage(HttpProxySender sender, String inlongGroupId,
            String inlongStreamId, String messageBody) throws Exception {
        List<String> bodyList = new ArrayList<>();
        bodyList.add(messageBody);
        sender.asyncSendMessage(bodyList, inlongGroupId, inlongStreamId, System.currentTimeMillis(),
             20, TimeUnit.SECONDS, new MyMessageCallBack());
    }
```
参数说明如下：

| 参数名称                 | 类型     | 说明                                        |
|------------------------|----------|--------------------------------------------|
| sender                 | HttpProxySender   | 第一步创建的sender                  |
| inlongGroupId          | String   | inglongGroupId                             |
| inlongStreamId         | String   | inlongStreamId                             |
| messageBody            | String   | 发送的消息内容                                |

### 2.3 UDP client
inlong-dataproxy-sdk不支持发送udp协议的消息，如果用户需要，需要自己按照sdk中的消息拼装方式，
组织二进制数组，按照upd方式发送，具体示例参照inlong-sdk/dataporxy-sdk中的相关的example代码。