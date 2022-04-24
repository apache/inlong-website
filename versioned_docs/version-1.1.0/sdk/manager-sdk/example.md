---
title: Example
sidebar_position: 1
---

## Overview

Apache InLong Manager is the user-oriented unified UI of the entire data access platform. Now we provide client SDK for users,
which means you can use client to manipulate your group task instead of UI.

## Dependency

- Add Maven Dependency
```xml
 <dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>manager-client</artifactId>
    <version>${inlong.version}</version>
</dependency>
```

## Code

- We provide two unit cases for you to build your own group task, you can replace the predefined params and try it in your own cluster.
- In following cases, **Apache Pulsar** and **Apache Flink** are needed when your group is inited. You can run Inlong group in your own cluster, or with the help of third-party services.

### Programming must know interface

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

Refer to **manager-client-examples**
[org.apache.inlong.manager.client.Kafka2HiveExample.java](https://github.com/apache/incubator-inlong/blob/master/inlong-manager/manager-client-examples/src/test/java/org/apache/inlong/manager/client/Kafka2HiveExample.java)

### Binlog2Kafka

Refer to **manager-client-examples**
[org.apache.inlong.manager.client.Binlog2KafkaExample.java](https://github.com/apache/incubator-inlong/blob/master/inlong-manager/manager-client-examples/src/test/java/org/apache/inlong/manager/client/Binlog2KafkaExample.java)

## Last but not Least

If you have any question about manager client, communicate with us please.