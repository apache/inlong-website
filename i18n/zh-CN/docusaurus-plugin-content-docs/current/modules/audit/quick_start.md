---
title: 安装部署
---

所有的安装文件都在 `inlong-audit` 目录下，如果使用 MySQL 存储审计数据，需要先通过`sql/apache_inlong_audit_mysql.sql`初始化数据库。
```shell
# 初始化 database
mysql -uDB_USER -pDB_PASSWD < sql/apache_inlong_audit_mysql.sql
```

如果使用 StarRocks 存储审计数据，需要先通过`sql/apache_inlong_audit_starrocks.sql`初始化数据库。
```shell
# 初始化 StarRocks database
mysql -uDB_USER -pDB_PASSWD < sql/apache_inlong_audit_starrocks.sql
```
  
## 依赖
- 如果后端连接 MySQL 数据库，请下载 [mysql-connector-java-8.0.28.jar](https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.28/mysql-connector-java-8.0.28.jar), 并将其放入 `lib/` 目录。
- 如果后端连接 PostgreSQL 数据库，不需要引入额外依赖。

## Audit Proxy
### 配置消息队列
消息队列服务目前可以使用 Apache Pulsar、Apache Kafka 或者 InLong TubeMQ：

- 若使用 Pulsar，配置文件 `conf/audit-proxy-pulsar.conf`，修改下列配置中的 Pulsar Topic 信息。

```Shell
agent1.sinks.pulsar-sink-msg1.topic = persistent://public/default/inlong-audit
agent1.sinks.pulsar-sink-msg2.topic = persistent://public/default/inlong-audit
```

- 若使用 TubeMQ，配置文件 `conf/audit-proxy-tube.conf`，修改下列配置中的 TubeMQ Topic 信息。
```Shell
agent1.sinks.tube-sink-msg1.topic = inlong-audit
agent1.sinks.tube-sink-msg2.topic = inlong-audit
```

- 若使用 Kafka，配置文件 `conf/audit-proxy-kafka.conf`，修改下列配置中的 Kafka Topic 信息。

```Shell
agent1.sinks.kafka-sink-msg1.topic = inlong-audit
agent1.sinks.kafka-sink-msg2.topic = inlong-audit
```

### 启动
```Shell
# 默认使用 pulsar 作为消息队列，加载 audit-proxy-pulsar.conf 配置文件
bash +x ./bin/proxy-start.sh [pulsar｜tube｜kafka]
```
Audit Proxy 默认监听端口为 `10081`。

## Audit Store
### 配置
配置文件 `conf/application.properties`

```Shell
# proxy.type: pulsar / tube / kafka
audit.config.proxy.type=pulsar

# Supports common JDBC protocol
audit.config.store.mode=jdbc

# manger config
manager.hosts=127.0.0.1:8083
proxy.cluster.tag=default_cluster

# pulsar config
audit.pulsar.topic=persistent://public/default/inlong-audit
audit.pulsar.consumer.sub.name=inlong-audit-subscription
audit.pulsar.token=
audit.pulsar.enable.auth=false

# tube config
audit.tube.topic=inlong-audit
audit.tube.consumer.group.name=inlong-audit-consumer

# kafka config
audit.kafka.topic=inlong-audit
# create a topic if the topic does not exist.
audit.kafka.topic.numPartitions=3
audit.kafka.topic.replicationFactor=2
audit.kafka.consumer.name=inlong-audit-consumer
audit.kafka.group.id=audit-consumer-group

# Generic jdbc storage
jdbc.driver=com.mysql.cj.jdbc.Driver
jdbc.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_audit?characterEncoding=utf8&useSSL=false&serverTimezone=GMT%2b8&rewriteBatchedStatements=true&allowMultiQueries=true&zeroDateTimeBehavior=CONVERT_TO_NULL
jdbc.username=root
jdbc.password=inlong
```

### 依赖
- 如果后端连接 MySQL 数据库，请下载 [mysql-connector-java-8.0.28.jar](https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.26/mysql-connector-java-8.0.28.jar), 并将其放入 `lib/` 目录。
- 如果后端连接 PostgreSQL 数据库，不需要引入额外依赖。

### 启动
```Shell
bash +x ./bin/store-start.sh
```

## Audit Service
### 配置
配置文件 `conf/audit-service.properties`
```Shell
mysql.jdbc.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_audit?characterEncoding=utf8&useUnicode=true&rewriteBatchedStatements=true
mysql.username=root
mysql.password=inlong
```
#### 配置审计数据源(可选)
在Audit Service服务使用的audit_source_config表中，配置审计存储的数据源。默认和Audit Service使用相同的MySQL配置

#### 配置审计审计项(可选)
在Audit Service服务使用的audit_id_config表中，配置需要cache的审计项。默认使用Agent接收成功、Agent发送成功、DataProxy接收成功、DataProxy发送成功

### 依赖
- 如果后端连接 MySQL 数据库，请下载 [mysql-connector-java-8.0.28.jar](https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.26/mysql-connector-java-8.0.28.jar), 并将其放入 `lib/` 目录。
- 如果后端连接 PostgreSQL 数据库，不需要引入额外依赖。

### 启动
```Shell
bash +x ./bin/service-start.sh
```