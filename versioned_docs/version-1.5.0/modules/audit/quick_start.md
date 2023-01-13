---
title: Deployment
---

All deploying files at `inlong-audit` directory, if you use MySQL to store audit data, you need to first create the database through `sql/apache_inlong_audit.sql`.
  ```shell
  # initialize database
  mysql -uDB_USER -pDB_PASSWD < sql/apache_inlong_audit.sql
  ```
If you use ClickHouse to store audit data, you need to first create the database through `sql/apache_inlong_audit_clickhouse.sql`.
  ```shell
  # initialize database
  clickhouse client -u DB_USER --password DB_PASSWD < sql/apache_inlong_audit_clickhouse.sql
  ```
  
## Audit Proxy
### Configure MessageQueue
You can choose Apache Pulsar or InLong TubeMQ as your MessageQueue service:

- If using Pulsar, the configuration file is `conf/audit-proxy-pulsar.conf`. Change the Pulsar service url for next configuration.

```Shell
agent1.sources.tcp-source.port = 10081
agent1.sinks.pulsar-sink-msg1.pulsar_server_url= pulsar://localhost:6650
agent1.sinks.pulsar-sink-msg1.topic = persistent://public/default/inlong-audit
agent1.sinks.pulsar-sink-msg2.pulsar_server_url = pulsar://localhost:6650
agent1.sinks.pulsar-sink-msg2.topic = persistent://public/default/inlong-audit
```

- If using TubeMQ, the configuration file is `conf/audit-proxy-tube.conf`. Change the TubeMQ master address for next configuration.

```Shell
agent1.sources.tcp-source.port = 10081
agent1.sinks.tube-sink-msg1.master-host-port-list = localhost:8715
agent1.sinks.tube-sink-msg1.topic = inlong-audit
agent1.sinks.tube-sink-msg2.master-host-port-list = localhost:8715
agent1.sinks.tube-sink-msg2.topic = inlong-audit
```

### Start
```Shell
# By default, pulsar is used as the MessageQueue, and the audit-proxy-pulsar.conf configuration file is loaded.
bash +x ./bin/proxy-start.sh [pulsar｜tube]
```

## Audit Store
### Configure
The configuration file  is `conf/application.properties`. 

```Shell
# proxy.type: pulsar / tube
audit.config.proxy.type=pulsar

# store.server: mysql / elasticsearch / clickhouse 
audit.config.store.mode=mysql

# audit pulsar config (optional), replace PULSAR_BROKER_LIST with your Pulsar service url
audit.pulsar.server.url=pulsar://PULSAR_BROKER_LIST
audit.pulsar.topic=persistent://public/default/inlong-audit
audit.pulsar.consumer.sub.name=sub-audit

# audit tube config (optional), replace TUBE_LIST with your TubeMQ master address
audit.tube.masterlist=TUBE_LIST
audit.tube.topic=inlong-audit
audit.tube.consumer.group.name=inlong-audit-consumer

# mysql config
spring.datasource.druid.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_audit?characterEncoding=utf8&useSSL=false&serverTimezone=GMT%2b8&rewriteBatchedStatements=true&allowMultiQueries=true&zeroDateTimeBehavior=CONVERT_TO_NULL
spring.datasource.druid.username=root
spring.datasource.druid.password=inlong

# es config
elasticsearch.host=127.0.0.1
elasticsearch.port=9200
elasticsearch.authEnable=false
elasticsearch.username=elastic
elasticsearch.password=inlong
elasticsearch.shardsNum=5
elasticsearch.replicaNum=1
elasticsearch.indexDeleteDay=5
elasticsearch.enableDocId=true
elasticsearch.bulkInterval=10
elasticsearch.bulkThreshold=5000
elasticsearch.auditIdSet=1,2

# clickhouse config
clickhouse.driver=ru.yandex.clickhouse.ClickHouseDriver
clickhouse.url=jdbc:clickhouse://127.0.0.1:8123/default
clickhouse.username=default
clickhouse.password=default
clickhouse.batchIntervalMs=1000
clickhouse.batchThreshold=500
clickhouse.processIntervalMs=100

```

### Dependencies
- If the backend database is MySQL, please download [mysql-connector-java-8.0.27.jar](https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.27/mysql-connector-java-8.0.27.jar) and put it into `lib/` directory.

- If the backend database is PostgreSQL, there's no need for additional dependencies.

### Start
```Shell
bash +x ./bin/store-start.sh
```

The default listen port is `10081`.