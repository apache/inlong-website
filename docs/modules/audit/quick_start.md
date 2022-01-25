---
title: Deployment
---

## audit-source Deployment

### Configure Message Queue
The configuration file file is `inlong-audit/audit-source/conf/audit.conf`. 
```html
agent1.sinks.pulsar-sink-msg1.pulsar_server_url= pulsar://PULSAR_BROKER_LIST
agent1.sinks.pulsar-sink-msg1.topic = persistent://PULSAR_TOPIC
```

## run
The startup script file file is `inlong-audit/audit-source/bin/start.sh`
```shell script
sh bin/start.sh
```

## stop
The stop script file file is `inlong-audit/audit-source/bin/stop.sh`
```shell script
sh bin/stop.sh
```

## audit-store安装与部署
### Configure
The configuration file file is `inlong-audit/audit-store/conf/aapplication.properties`. 
#### Configure Message Queue
```html
audit.pulsar.server.url=pulsar://127.0.0.1:6650
audit.pulsar.topic=persistent://public/default/audit
```
#### Configure MySQL
```html
spring.datasource.druid.url= jdbc:mysql://127.0.0.1:3306/apache_inlong_audit?characterEncoding=utf8&useSSL=false&serverTimezone=GMT%2b8&rewriteBatchedStatements=true&allowMultiQueries=true&zeroDateTimeBehavior=CONVERT_TO_NULL
spring.datasource.druid.username=root
spring.datasource.druid.password=inlong
```

## run
The startup script file file is `inlong-audit/audit-store/bin/start.sh`
```shell script
sh bin/start.sh
```

## stop
The stop script file file is `inlong-audit/audit-store/bin/stop.sh`
```shell script
sh bin/stop.sh
```