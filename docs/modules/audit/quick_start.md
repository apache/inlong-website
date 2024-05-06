---
title: Deployment
---

All deploying files at `inlong-audit` directory, if you use MySQL to store audit data, you need to first create the database through `sql/apache_inlong_audit_mysql.sql`.
```shell
# initialize database
mysql -uDB_USER -pDB_PASSWD < sql/apache_inlong_audit_mysql.sql
```

If you use StarRocks to store audit data, you need to first create the database through `sql/apache_inlong_audit_starrocks.sql`.
```shell
# initialize database
clickhouse client -u DB_USER --password DB_PASSWD < sql/apache_inlong_audit_starrocks.sql
```
  
## Audit Proxy
### Configure MessageQueue
You can choose Apache Pulsar, Apache Kafka or InLong TubeMQ as your MessageQueue service:

- If using Pulsar, the configuration file is `conf/audit-proxy-pulsar.conf`. Change the Pulsar Topic info.

```Shell
agent1.sinks.pulsar-sink-msg1.topic = persistent://public/default/inlong-audit
agent1.sinks.pulsar-sink-msg2.topic = persistent://public/default/inlong-audit
```

- If using TubeMQ, the configuration file is `conf/audit-proxy-tube.conf`. Change the TubeMQ Topic info.

```Shell
agent1.sinks.tube-sink-msg1.topic = inlong-audit
agent1.sinks.tube-sink-msg2.topic = inlong-audit
```

- If using Kafka, the configuration file is `conf/audit-proxy-kafka.conf`. Change the Kafka Topic info.

```Shell
agent1.sinks.kafka-sink-msg1.topic = inlong-audit
agent1.sinks.kafka-sink-msg2.topic = inlong-audit
```

### Start
```Shell
# By default, pulsar is used as the MessageQueue, and the audit-proxy-pulsar.conf configuration file is loaded.
bash +x ./bin/proxy-start.sh [pulsar｜tube｜kafka]
```
The default listen port is `10081`.

## Audit Store
### Configure
The configuration file is `conf/application.properties`. 

```Shell
# proxy.type: pulsar / tube / kafka
audit.config.proxy.type=pulsar

# store.server: mysql / elasticsearch / clickhouse 
audit.config.store.mode=mysql

# manger config
manager.hosts=127.0.0.1:8083
proxy.cluster.tag=default_cluster

# audit pulsar config (optional)
audit.pulsar.topic=persistent://public/default/inlong-audit
audit.pulsar.consumer.sub.name=sub-audit

# audit tube config (optional)
audit.tube.topic=inlong-audit
audit.tube.consumer.group.name=inlong-audit-consumer

# kafka config (optional)
audit.kafka.topic=inlong-audit
audit.kafka.consumer.name=inlong-audit-consumer
audit.kafka.group.id=audit-consumer-group

# mysql config
spring.datasource.druid.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_audit?characterEncoding=utf8&useSSL=false&serverTimezone=GMT%2b8&rewriteBatchedStatements=true&allowMultiQueries=true&zeroDateTimeBehavior=CONVERT_TO_NULL
spring.datasource.druid.username=root
spring.datasource.druid.password=inlong

# es config (optional)
elasticsearch.host=127.0.0.1
elasticsearch.port=9200

# clickhouse config (optional)
clickhouse.driver=ru.yandex.clickhouse.ClickHouseDriver
clickhouse.url=jdbc:clickhouse://127.0.0.1:8123/default
clickhouse.username=default
clickhouse.password=default

# starrocks config (optional)
jdbc.driver=com.mysql.cj.jdbc.Driver
jdbc.url=jdbc:mysql://127.0.0.1:9020/apache_inlong_audit?characterEncoding=utf8&useSSL=false&serverTimezone=GMT%2b8&rewriteBatchedStatements=true&allowMultiQueries=true&zeroDateTimeBehavior=CONVERT_TO_NULL
jdbc.username=*******
jdbc.password=********
```

### Dependencies
- If the backend database is MySQL, please download [mysql-connector-java-8.0.28.jar](https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.28/mysql-connector-java-8.0.28.jar) and put it into `lib/` directory.

- If the backend database is PostgreSQL, there's no need for additional dependencies.

### Start
```Shell
bash +x ./bin/store-start.sh
```

## Audit Service
### Configure
The configuration file is `conf/audit-service.properties`
```Shell
mysql.jdbc.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_audit?characterEncoding=utf8&useUnicode=true&rewriteBatchedStatements=true
mysql.username=*****
mysql.password=*****
```
### Configure audit data sources
In the audit_source_config table used by the Audit Service, configure the data source for audit storage.

### Configure audit audit items
In the audit_id_config table used by the Audit Service, configure the audit items that need to be cached.

### Dependencies
- If the backend database is MySQL, please download [mysql-connector-java-8.0.28.jar](https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.28/mysql-connector-java-8.0.28.jar) and put it into `lib/` directory.
- If the backend database is PostgreSQL, there's no need for additional dependencies.

### Start
```Shell
bash +x ./bin/service-start.sh
```
