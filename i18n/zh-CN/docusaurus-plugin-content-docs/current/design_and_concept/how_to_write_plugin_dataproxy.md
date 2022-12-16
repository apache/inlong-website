---
title: DataProxy 插件
sidebar_position: 6
---

## 总览

DataProxy 实现了统一抽象 MQ Sink 模型，支持在标准 MessageQueueZoneSink 下方便灵活添加不同类型的 MQ 流向，默认支持 Pulsar Kafka 和 TubeMQ。本文将指导开发者如何扩展支持新的 MQ 类型。

## 概念和模型

DataProxy 是基于 Apache Flume 的数据接收和流转框架，采用 `Source` + `Channel` + `Sink` 架构模型，本文重点关注 Sink 部分。

- `MessageQueueZoneSink`: DataProxy 的标准 MQ Sink，所有类型消息队列统一在此 Sink 下扩展和支持
- `MessageQueueHandler`: 具体某类 MQ 的连接、数据发送、关闭的处理接口，默认使用 PulsarHandler 实现
- `EventHandler`: 消息打包器接口，可用于发送下游 MQ 之前转换 Header/Body 协议, 默认透传

当扩展新的 MQ 类型时，需要开发至少实现 MessageQueueHandler 作为插件，如果需要转换数据协议，可以同时扩展 EventHandler 做相应的处理。MessageQueueHandler 和 EventHandler 作为元数据配置由 Manager 下发，达到灵活部署扩展的效果。 


## 数据流图示

上述相关模块和接口在数据流转过程中的关系可以用下图表示：
![](img/dataproxy_mq_sink.png)

## 开发流程

以扩展 Kafka 类型 MQ 和 发送 ProtoBuffer 消息为例
- 首先开发 MessageQueueHandler 的子类插件 KafKaHandler, 实现 init / star t /stop / send 接口逻辑
- 按需要实现 EventHandler 接口 parseHeader / parseBody 插件逻辑, 如 ProtoBufferEventHandler

## 接口

### MessageQueueHandler
```java
private class KafkaHandler implements MessageQueueHandler {

    private EventHandler handler;
    
    @Override
    public void init(CacheClusterConfig config, MessageQueueZoneSinkContext sinkContext) {
        // 初始化配置和EventHandler
    }
    
    @Override
    public void start() {
        // 创建 Kafka Producer
    }

    @Override
    public void stop() {
       // 关闭 Kafka Producer
    }

  @Override
    public boolean send(BatchPackProfile event) {
        // 处理并发送
    }
}
```

### EventHandler
```java
public class ProtoBufferEventHandler implements EventHandler {

    @Override
    public Map<String, String> parseHeader(IdTopicConfig idConfig, BatchPackProfile profile, String nodeId,
            INLONG_COMPRESSED_TYPE compressType) {
        // 处理、转换消息头部
    }

    @Override
    public byte[] parseBody(IdTopicConfig idConfig, BatchPackProfile profile, INLONG_COMPRESSED_TYPE compressType)
            throws IOException {
        // 处理、转换消息体为pb
    }
}
```
（完整示例参考 Inlong 代码库 org.apache.inlong.dataproxy.sink.mq.kafka.KafkaHandler 实现）

## 插件配置

### dataproxy.conf

Sink 部分配置参考 [Sink 配置示例](modules/dataproxy/configuration.md)

### inlong manager 注册 MQ 配置

在注册 MQ 集群的时候选择 MQ 对应的 MessageQueueHandler 实现插件，例如：
```shell
{
  "clusterTags": "default_cluster",
  "name": "kafka-1",
  "type": "KAFKA",
  "inCharges": "admin",
  "url": "127.0.0.1:9092",
  "extParams": "{\"messageQueueHandler\":\"org.apache.inlong.dataproxy.sink.mq.kafka.KafkaHandler\",\"bootstrap.servers\":\"127.0.0.1:9092\"}
}
```

