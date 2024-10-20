---
title: Configuration 
sidebar_position: 3
---

## Overview

* Audit-proxy source-channel-sink pipeline configuration (audit-proxy-{tube|pulsar|kafka}.conf).
* Audit-store storage service configuration (application.properties).
* OpenAPI audit-service configuration audit-service.properties.

## Audit Proxy Configuration (`audit-proxy-{tube|pulsar|kafka}.conf`)

### Basic Configuration

| Parameter                         | Description                                        | Default value                                                | Notes                                                   |
|----------------------------|---------------------------------------------|-------------------------------------------------------|--------------------------------------------------------|
| agent1.sources     | source  typpe  |    tcp-source                                            |                                                        |
| agent1.channels            | used channel                         | ch-msg1                                             |                                                        |
| agent1.sinks      | used sink | pulsar-sink-msg1                                            |                                                        |

### Sources Configuration

| Parameter                       | Description               | Default value  | Notes                                        |
|---------------------------|--------------------|-------|---------------------------------------------|
| agent1.sources.tcp-source.channels | Define the channel used in the source  | ch-msg1  |                                            |
| agent1.sources.tcp-source.host | tcp ip binding and listening  | 0.0.0.0  |                                            |
| agent1.sources.tcp-source.port         | tcp port binding  | 10081   | |

### Channel Configuration

| Parameter                       | Description                      | Default value | Notes |
|--------------------------|----------------------------|------|-----|
| agent1.channels.ch-msg1.type     | memory channel type   | memory    |     |
| agent1.channels.ch-msg2.type  | file channel type | file   |     |

### Sink Configuration

| Parameter                     | Description                            | Default value | Notes |
|------------------------|----------------------------------|-------|-----|
| agent1.sinks.pulsar-sink-msg1.channel | The upstream channel name of the sink               | ch-msg1 |     |
| agent1.sinks.pulsar-sink-msg1.type  | The sink class is implemented, where the message pushes data to the pulsar cluster        | org.apache.inlong.audit.sink.PulsarSink     |     |
| agent1.sinks.pulsar-sink-msg1.pulsar_server_url    | pulsar broker            | pulsar://localhost:6650     |     |
| agent1.sinks.pulsar-sink-msg1.topic    | pulsar topic | persistent://public/Default value/inlong-audit     |     |
| agent1.sinks.pulsar-sink-msg1.enable_token_auth    | Whether security certification is required | false     |     |
| agent1.sinks.pulsar-sink-msg1.auth_token    | pulsar authentication token |      |     |

## Audit Store Configuration (`application.properties`)

### MQ Configuration

| Parameter                         | Description                                        | Default value                                                | Notes         |
|----------------------------|---------------------------------------------|-------------------------------------------------------|---------------|
| audit.config.proxy.type     | MQ type  |    pulsar                                            |               |
| audit.pulsar.server.url           | pulsar broker                         | pulsar://127.0.0.1:6650     | |
| audit.pulsar.topic      | pulsar topic | persistent://public/Default value/inlong-audit     |               |
| audit.pulsar.consumer.sub.name      | consumer | inlong-audit-subscription                                           |               |
| audit.pulsar.enable.auth      | Whether security certification is required | false                                            |               |
| audit.pulsar.token      | pulsar authentication token  |                                            |               |

### MySQL / StarRocks Configuration

| Parameter                  | Description   | Default value   | Notes                                        |
|---------------------|---------------|-----------------|---------------------------------------------|
| jdbc.url      | StarRocks URL | jdbc:mysql://127.0.0.1:8123/default |                                            |
| jdbc.username | account name           | default         | |
| jdbc.password | password            | default         | |

## OpenAPI Audit Service
configuration `audit-service.properties`

| Parameter                | Description  | Default value  | Notes                                        |
|-------------------|--------------|-------|---------------------------------------------|
| mysql.jdbc.url    | mysql URL    | jdbc:mysql://127.0.0.1:8123/default |                                            |
| mysql.username    | account name | default   | |
| mysql.password    | password     | default   | |