---
title: 参数配置 
sidebar_position: 3
---

## 概览

* 审计代理服务 audit-proxy 在 `audit-proxy-{tube|pulsar|kafka}.conf` 中设置。
* 审计存储服务 audit-store 在 `application.properties` 中设置。
* 审计 OpenAPI 服务 audit-service `在audit-service.properties` 中配置。

## 审计代理层 Audit Proxy 
配置（audit-proxy-{tube|pulsar|kafka}.conf）

### 通用设置

| 参数                         | 描述          | 默认值                                                | 备注                                                   |
|----------------------------|-------------|-------------------------------------------------------|--------------------------------------------------------|
| agent1.sources     | source 类型   |    tcp-source                                            |                                                        |
| agent1.channels            | 使用的 channel | ch-msg1                                             |                                                        |
| agent1.sinks      | 使用的 sink    | pulsar-sink-msg1                                            |                                                        |


### Sources 相关设置

| 参数                       | 描述                      | 默认值  | 备注                                        |
|---------------------------|-------------------------|-------|---------------------------------------------|
| agent1.sources.tcp-source.channels | 定义 source 中使用到的 channel | ch-msg1  |                                            |
| agent1.sources.tcp-source.host | 服务 ip                   | 0.0.0.0  |                                            |
| agent1.sources.tcp-source.port         | 监听端口                    | 10081   | |

### Channel 相关配置

| 参数                       | 描述                | 默认值 | 备注 |
|--------------------------|-------------------|------|-----|
| agent1.channels.ch-msg1.type     | memory channel 类型 | memory    |     |
| agent1.channels.ch-msg2.type  | file channel 类型   | file   |     |

### Sink 相关配置

| 参数                     | 描述                  | 默认值 | 备注 |
|------------------------|---------------------|-------|-----|
| agent1.sinks.pulsar-sink-msg1.channel | sink 的上游 channel 名称 | ch-msg1 |     |
| agent1.sinks.pulsar-sink-msg1.type  | sink 类实现            | org.apache.inlong.audit.sink.PulsarSink     |     |
| agent1.sinks.pulsar-sink-msg1.pulsar_server_url    | pulsar 集群 broker 节点 | pulsar://localhost:6650     |     |
| agent1.sinks.pulsar-sink-msg1.topic    | pulsar 集群 topic     | persistent://public/default/inlong-audit     |     |
| agent1.sinks.pulsar-sink-msg1.enable_token_auth    | 是否需要安全认证            | false     |     |
| agent1.sinks.pulsar-sink-msg1.auth_token    | pulsar 认证 token     | 空     |     |

## 审计存储服务 Audit Store 
配置 `application.properties`

### MQ配置

| 参数                         | 描述           | 默认值                                                | 备注                                                   |
|----------------------------|--------------|-------------------------------------------------------|--------------------------------------------------------|
| audit.config.proxy.type     | MQ 类型        |    pulsar                                            |                                                        |
| audit.pulsar.server.url           | pulsar 的集群地址 | pulsar://127.0.0.1:6650                                             |                                                        |
| audit.pulsar.topic      | pulsar topic | persistent://public/default/inlong-audit                                            |                                                        |
| audit.pulsar.consumer.sub.name      | 订阅组          | inlong-audit-subscription                                           |                                                        |
| audit.pulsar.enable.auth      | 是否需要安全认证     | false                                            |                                                        |
| audit.pulsar.token      | 认证 token     |                                            |                                                        |

### MySQL / StarRocks 相关配置

| 参数                  | 描述              | 默认值                                   | 备注                                        |
|---------------------|-----------------|---------------------------------------|---------------------------------------------|
| jdbc.url      | StarRocks 的 URL | jdbc:mysql://127.0.0.1:8123/default   |                                            |
| jdbc.username | 账号名             | default                               | |
| jdbc.password | 密码              | default                               | |

## OpenAPI服务 Audit Service 
配置 `audit-service.properties`

| 参数                | 描述          | 默认值  | 备注                                        |
|-------------------|-------------|-------|---------------------------------------------|
| mysql.jdbc.url    | mysql 的 URL | jdbc:mysql://127.0.0.1:8123/default |                                            |
| mysql.username    | 账号名         | default   | |
| mysql.password    | 密码          | default   | |