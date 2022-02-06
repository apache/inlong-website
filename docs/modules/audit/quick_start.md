---
title: Deployment
---

All deploying files at `inlong-audit` directory, if you use MySQL to store audit data, you need to first create the database through `sql/apache_inlong_audit.sql`.

## Audit Proxy
### Configure Pulsar
The configuration file  is `conf/audit.conf`. 
```Shell
agent1.sources.tcp-source.host = 0.0.0.0
agent1.sources.tcp-source.port = 46801
agent1.sinks.pulsar-sink-msg1.pulsar_server_url= pulsar://PULSAR_BROKER_LIST
agent1.sinks.pulsar-sink-msg1.topic = persistent://public/default/inlong-audit
agent1.sinks.pulsar-sink-msg2.pulsar_server_url = pulsar://PULSAR_BROKER_LIST
agent1.sinks.pulsar-sink-msg2.topic = persistent://public/default/inlong-audit
```

### Start
```Shell
sh ./bin/proxy-start.sh
```

## Audit Store
### Configure
The configuration file  is `conf/application.properties`. 

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

### Start
The startup script file `./bin/store-start.sh`
```Shell
sh ./bin/store-start.sh
```

The default listen port is `46801`.