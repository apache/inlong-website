---
title: 安装部署
---

## audit-source安装与部署
### 配置消息队列
配置文件`inlong-audit/audit-source/conf/audit.conf`. 
```html
agent1.sinks.pulsar-sink-msg1.pulsar_server_url= pulsar://PULSAR_BROKER_LIST
agent1.sinks.pulsar-sink-msg1.topic = persistent://PULSAR_TOPIC
```

## 启动
启动脚本 `inlong-audit/audit-source/bin/start.sh`
```shell script
sh bin/start.sh
```

## 停止
停止脚本 `inlong-audit/audit-source/bin/stop.sh`
```shell script
sh bin/stop.sh
```

## audit-store安装与部署
### 配置
配置文件 `inlong-audit/audit-store/conf/aapplication.properties`. 
#### 配置消息队列
```html
audit.pulsar.server.url=pulsar://127.0.0.1:6650
audit.pulsar.topic=persistent://public/default/audit
```
#### 配置MySQL
```html
spring.datasource.druid.url= jdbc:mysql://127.0.0.1:3306/apache_inlong_audit?characterEncoding=utf8&useSSL=false&serverTimezone=GMT%2b8&rewriteBatchedStatements=true&allowMultiQueries=true&zeroDateTimeBehavior=CONVERT_TO_NULL
spring.datasource.druid.username=root
spring.datasource.druid.password=inlong
```

## 启动
启动脚本 `inlong-audit/audit-store/bin/start.sh`
```shell script
sh bin/start.sh
```

## 停止
停止脚本 `inlong-audit/audit-store/bin/stop.sh`
```shell script
sh bin/stop.sh
```