---
title: 安装部署
---

所有的安装文件都在 `inlong-audit` 目录下，如果使用 MySQL 存储审计数据，需要先通过`sql/apache_inlong_audit.sql`出生数据库。

## Audit Proxy
### 配置 Pulsar
配置文件 `conf/audit-proxy.conf`. 
```Shell
agent1.sources.tcp-source.host = 0.0.0.0
agent1.sources.tcp-source.port = 10081
agent1.sinks.pulsar-sink-msg1.pulsar_server_url= pulsar://PULSAR_BROKER_LIST
agent1.sinks.pulsar-sink-msg1.topic = persistent://public/default/inlong-audit
agent1.sinks.pulsar-sink-msg2.pulsar_server_url = pulsar://PULSAR_BROKER_LIST
agent1.sinks.pulsar-sink-msg2.topic = persistent://public/default/inlong-audit
```

### 启动
```Shell
sh ./bin/proxy-start.sh
```

## Audit Store
### 配置
配置文件 `conf/application.properties`. 

```Shell
# store.server: mysql / elasticsearch 
audit.config.store.mode=mysql
# audit pulsar topic
audit.pulsar.server.url=pulsar://127.0.0.1:6650
audit.pulsar.topic=persistent://public/default/inlong-audit
audit.pulsar.consumer.sub.name=sub-audit
# mysql
spring.datasource.druid.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_audit?characterEncoding=utf8&useSSL=false&serverTimezone=GMT%2b8&rewriteBatchedStatements=true&allowMultiQueries=true&zeroDateTimeBehavior=CONVERT_TO_NULL
spring.datasource.druid.username=root
spring.datasource.druid.password=inlong
```

### 启动
启动脚本 `./bin/store-start.sh`
```Shell
sh ./bin/store-start.sh
```

Audit Proxy 默认监听端口为 `10081`。