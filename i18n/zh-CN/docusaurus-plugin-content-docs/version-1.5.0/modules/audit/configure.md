---
title: 参数配置 
sidebar_position: 3
---

## 概览

审计代理服务audit-proxy `audit-proxy-pulsar.conf` 或者`audit-proxy-tube.conf`中设置。 审计存储服务audit-store `application.properties`中设置。

## 审计代理层audit-proxy source-channel-sink 管道配置（dataproxy-{tube|pulsar}.conf）

### 通用设置

| 参数                         | 描述                                        | 默认值                                                | 备注                                                   |
|----------------------------|---------------------------------------------|-------------------------------------------------------|--------------------------------------------------------|
| agent1.sources     | source类型  |    tcp-source                                            |                                                        |
| agent1.channels            | 使用的channel                         | ch-msg1                                             |                                                        |
| agent1.sinks      | 使用的sink | pulsar-sink-msg1                                            |                                                        |
|

### sources 相关设置

| 参数                       | 描述               | 默认值  | 备注                                        |
|---------------------------|--------------------|-------|---------------------------------------------|
| agent1.sources.tcp-source.channels | 定义source中使用到的channel  | ch-msg1  |                                            |
| agent1.sources.tcp-source.host | 服务ip  | 0.0.0.0  |                                            |
| agent1.sources.tcp-source.port         | 监听端口  | 10081   | |

### channel 相关配置

| 参数                       | 描述                      | 默认值 | 备注 |
|--------------------------|----------------------------|------|-----|
| agent1.channels.ch-msg1.type     | memory channel类型   | memory    |     |
| agent1.channels.ch-msg2.type  | file channel类型  | file   |     |

### sink 相关配置

| 参数                     | 描述                            | 默认值 | 备注 |
|------------------------|----------------------------------|-------|-----|
| agent1.sinks.pulsar-sink-msg1.channel | sink的上游channel名称               | ch-msg1 |     |
| agent1.sinks.pulsar-sink-msg1.type  | sink类实现        | org.apache.inlong.audit.sink.PulsarSink     |     |
| agent1.sinks.pulsar-sink-msg1.pulsar_server_url    | pulsar集群broker节点            | pulsar://localhost:6650     |     |
| agent1.sinks.pulsar-sink-msg1.topic    | pulsar集群topic | persistent://public/default/inlong-audit     |     |
| agent1.sinks.pulsar-sink-msg1.enable_token_auth    | 是否需要安全认证 | false     |     |
| agent1.sinks.pulsar-sink-msg1.auth_token    | pulsar认证token | 空     |     |

## 审计存储服务audit-store 配置 `application.properties`

### MQ配置

| 参数                         | 描述                                        | 默认值                                                | 备注                                                   |
|----------------------------|---------------------------------------------|-------------------------------------------------------|--------------------------------------------------------|
| audit.config.proxy.type     | MQ类型  |    pulsar                                            |                                                        |
| audit.pulsar.server.url           | pulsar的集群地址                         | pulsar://127.0.0.1:6650                                             |                                                        |
| audit.pulsar.topic      | pulsar topic | persistent://public/default/inlong-audit                                            |                                                        |
| audit.pulsar.consumer.sub.name      | 订阅组 | inlong-audit-subscription                                           |                                                        |
| audit.pulsar.enable.auth      | 是否需要安全认证 | false                                            |                                                        |
| audit.pulsar.token      | 认证token |                                            |                                                        |

### DB 相关设置

| 参数                       | 描述               | 默认值  | 备注                                        |
|---------------------------|--------------------|-------|---------------------------------------------|
| spring.datasource.druid.driver-class-name | 设置Driver类型  | com.mysql.cj.jdbc.Driver  |                                            |
| spring.datasource.druid.url| jdbc的URL | jdbc:mysql://127.0.0.1:3306/apache_inlong_audit?characterEncoding=utf8&useSSL=false&serverTimezone=GMT%2b8&rewriteBatchedStatements=true&allowMultiQueries=true&zeroDateTimeBehavior=CONVERT_TO_NULL&allowPublicKeyRetrieval=true |                                            |
| spring.datasource.druid.username         | 账号名  | root   | |
| spring.datasource.druid.password         | 密码  | inlong   | |

### ElasticSearch配置

| 参数                       | 描述                      | 默认值 | 备注 |
|--------------------------|----------------------------|------|-----|
| elasticsearch.host     | 集群地址   | 127.0.0.1    |     |
| elasticsearch.port  | 集群端口  | 9200   |     |
| elasticsearch.authEnable  | 是否认证  | false   |     |
| elasticsearch.username  | 账号名  | elastic   |     |
| elasticsearch.password  | 密码  | inlong   |     |
| elasticsearch.indexDeleteDay  | 索引保存时间，天  | 5   |     |
| elasticsearch.auditIdSet | 允许写入的审计ID列表  | 1,2   |     |

### clickhouse 相关配置

| 参数                       | 描述               | 默认值  | 备注                                        |
|---------------------------|--------------------|-------|---------------------------------------------|
| clickhouse.driver | 设置Driver类型  | ru.yandex.clickhouse.ClickHouseDriver  |                                            |
| clickhouse.url| clickhouse的URL | jdbc:clickhouse://127.0.0.1:8123/default |                                            |
| clickhouse.username         | 账号名  | default   | |
| clickhouse.password         | 密码  | default   | |