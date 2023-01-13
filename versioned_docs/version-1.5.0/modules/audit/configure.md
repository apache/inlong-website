---
title: Configuration 
sidebar_position: 3
---

## Overview

Audit-proxy source-channel-sink pipeline configuration (dataproxy-{tube|pulsar}.conf).Audit-store storage service
configuration (application.properties)

## Audit-proxy source-channel-sink pipeline configuration (`dataproxy-{tube|pulsar}.conf`)

### Basic Configuration

| Parameter                         | Description                                        | Default value                                                | Notes                                                   |
|----------------------------|---------------------------------------------|-------------------------------------------------------|--------------------------------------------------------|
| agent1.sources     | source  typpe  |    tcp-source                                            |                                                        |
| agent1.channels            | used channel                         | ch-msg1                                             |                                                        |
| agent1.sinks      | used sink | pulsar-sink-msg1                                            |                                                        |
|

### sources Configuration

| Parameter                       | Description               | Default value  | Notes                                        |
|---------------------------|--------------------|-------|---------------------------------------------|
| agent1.sources.tcp-source.channels | Define the channel used in the source  | ch-msg1  |                                            |
| agent1.sources.tcp-source.host | tcp ip binding and listening  | 0.0.0.0  |                                            |
| agent1.sources.tcp-source.port         | tcp port binding  | 10081   | |

### channel Configuration

| Parameter                       | Description                      | Default value | Notes |
|--------------------------|----------------------------|------|-----|
| agent1.channels.ch-msg1.type     | memory channel type   | memory    |     |
| agent1.channels.ch-msg2.type  | file channel type | file   |     |

### sink Configuration

| Parameter                     | Description                            | Default value | Notes |
|------------------------|----------------------------------|-------|-----|
| agent1.sinks.pulsar-sink-msg1.channel | The upstream channel name of the sink               | ch-msg1 |     |
| agent1.sinks.pulsar-sink-msg1.type  | The sink class is implemented, where the message pushes data to the pulsar cluster        | org.apache.inlong.audit.sink.PulsarSink     |     |
| agent1.sinks.pulsar-sink-msg1.pulsar_server_url    | pulsar broker            | pulsar://localhost:6650     |     |
| agent1.sinks.pulsar-sink-msg1.topic    | pulsar topic | persistent://public/Default value/inlong-audit     |     |
| agent1.sinks.pulsar-sink-msg1.enable_token_auth    | Whether security certification is required | false     |     |
| agent1.sinks.pulsar-sink-msg1.auth_token    | pulsar authentication token |      |     |

## Audit-store storage service configuration (`application.properties`)

### MQ configuration

| Parameter                         | Description                                        | Default value                                                | Notes                                                   |
|----------------------------|---------------------------------------------|-------------------------------------------------------|--------------------------------------------------------|
| audit.config.proxy.type     | MQ type  |    pulsar                                            |                                                        |
| audit.pulsar.server.url           | pulsar broker                         | pulsar://127.0.0.1:6650                                             |                                                        |
| audit.pulsar.topic      | pulsar topic | persistent://public/Default value/inlong-audit                                            |                                                        |
| audit.pulsar.consumer.sub.name      | consumer | inlong-audit-subscription                                           |                                                        |
| audit.pulsar.enable.auth      | Whether security certification is required | false                                            |                                                        |
| audit.pulsar.token      | pulsar authentication token  |                                            |                                                        |

### DB configuration

| Parameter                       | Description               | Default value  | Notes                                        |
|---------------------------|--------------------|-------|---------------------------------------------|
| spring.datasource.druid.driver-class-name | Set the driver type  | com.mysql.cj.jdbc.Driver  |                                            |
| spring.datasource.druid.url| jdbc URL | jdbc:mysql://127.0.0.1:3306/apache_inlong_audit?characterEncoding=utf8&useSSL=false&serverTimezone=GMT%2b8&rewriteBatchedStatements=true&allowMultiQueries=true&zeroDateTimeBehavior=CONVERT_TO_NULL&allowPublicKeyRetrieval=true |                                            |
| spring.datasource.druid.username         | account name  | root   | |
| spring.datasource.druid.password         | password  | inlong   | |

### ElasticSearch configuration

| Parameter                       | Description                      | Default value | Notes |
|--------------------------|----------------------------|------|-----|
| elasticsearch.host     | broker   | 127.0.0.1    |     |
| elasticsearch.port  | port  | 9200   |     |
| elasticsearch.authEnable  | Whether security certification is required  | false   |     |
| elasticsearch.username  | account name  | elastic   |     |
| elasticsearch.password  | password  | inlong   |     |
| elasticsearch.indexDeleteDay  | Index retention time, days  | 5   |     |
| elasticsearch.auditIdSet | List of audit IDs that are allowed to write  | 1,2   |     |

### clickhouse configuration

| Parameter                       | Description               | Default value  | Notes                                        |
|---------------------------|--------------------|-------|---------------------------------------------|
| clickhouse.driver | Set the driver type  | ru.yandex.clickhouse.ClickHouseDriver  |                                            |
| clickhouse.url| clickhouse URL | jdbc:clickhouse://127.0.0.1:8123/Default value |                                            |
| clickhouse.username         | account name  | Default value   | |
| clickhouse.password         | password  | Default value   | |