                   ---
title: Manager 客户端
sidebar_position: 3
---

## 总览

Apache InLong Manager 是整个数据集成平台面向用户的统一管理入口。为方便用户使用在无界面的场景下部署InLong group任务，我们提供了Manager的客户端SDK。

## 依赖

- 增加 maven 依赖
```xml
 <dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>manager-client</artifactId>
    <version>${inlong.version}</version>
</dependency>
```

## 代码

- 我们以单元测试用例的方式提供了两个客户端用例, 你可以更换其中的参数并在自己的集群上实践;
- 你可以在自己的Inlong集群上运行任务, 或借助第三方平台提供的**pulsar**及**flink**运行。

### 参考Demo

```java
// Create client configuration
ClientConfiguration configuration = createClientConfig();
// Init Inlong client
InlongClient inlongClient = InlongClient.create(SERVICE_URL, configuration);
try {
    // Create group conf
    InlongGroupConf groupConf = createGroupConf();
    // Init group resource by conf
    InlongGroup group = inlongClient.forGroup(groupConf);
    // Create stream conf
    InlongStreamConf streamConf = createStreamConf();
    // Create Stream builder 
    InlongStreamBuilder streamBuilder = group.createStream(streamConf);
    // Create stream source
    streamBuilder.source(createSource());
    // Create stream sink
    streamBuilder.sink(createSink());
    // Init stream 
    streamBuilder.initOrUpdate();
    // Start group in server
    InlongGroupContext inlongGroupContext = group.init();
} catch (Exception e) {
    e.printStackTrace();
}
```

### Kafka2Hive

参考 **manager-client-test**
``org.apache.inlong.manager.client.Kafka2HiveTest.java``

### Binlog2Kafka

参考 **manager-client-test**
``org.apache.inlong.manager.client.Binlog2KafkaTest.java``

## 写在最后

如果你在使用Manager客户端时有任何疑问，请及时与我们沟通