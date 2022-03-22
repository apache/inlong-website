---
title: Deployment
---

All deploying files at `inlong-audit` directory, if you use MySQL to store audit data, you need to first create the database through `sql/apache_inlong_audit.sql`.

## Audit Proxy
### Configure MessageQueue
You can choose Apache Pulsar or InLong TubeMQ as your MessageQueue service:

- If using Pulsar, the configuration file is `conf/audit-proxy-pulsar.conf`. Replace **`PULSAR_BROKER_LIST`** with the service url of your Pulsar cluster.

```Shell
agent1.sources.tcp-source.host = 0.0.0.0
agent1.sources.tcp-source.port = 10081
agent1.sinks.pulsar-sink-msg1.pulsar_server_url= pulsar://PULSAR_BROKER_LIST
agent1.sinks.pulsar-sink-msg1.topic = persistent://public/default/inlong-audit
agent1.sinks.pulsar-sink-msg2.pulsar_server_url = pulsar://PULSAR_BROKER_LIST
agent1.sinks.pulsar-sink-msg2.topic = persistent://public/default/inlong-audit
```

- If using TubeMQ, the configuration file is `conf/audit-proxy-tube.conf`. Replace **`TUBE_LIST`** with the master address of your TubeMQ cluster.

```Shell
agent1.sources.tcp-source.host = 0.0.0.0
agent1.sources.tcp-source.port = 10081
agent1.sinks.tube-sink-msg1.master-host-port-list = TUBE_LIST
agent1.sinks.tube-sink-msg1.topic = inlong-audit
agent1.sinks.tube-sink-msg2.master-host-port-list = TUBE_LIST
agent1.sinks.tube-sink-msg2.topic = inlong-audit
```

### Start
```Shell
#By default, pulsar is used as the MessageQueue, and the audit-proxy-pulsar.conf configuration file is loaded.
sh ./bin/proxy-start.sh [pulsar｜tube]
```

## Audit Store
### Configure
The configuration file  is `conf/application.properties`. 

```Shell
# proxy.type: pulsar / tube
audit.config.proxy.type=pulsar

# store.server: mysql / elasticsearch 
audit.config.store.mode=mysql

# audit pulsar config (optional), replace PULSAR_BROKER_LIST with your Pulsar service url
audit.pulsar.server.url=pulsar://PULSAR_BROKER_LIST
audit.pulsar.topic=persistent://public/default/inlong-audit
audit.pulsar.consumer.sub.name=sub-audit

# audit tube config (optional), replace TUBE_LIST with your TubeMQ master address
audit.tube.masterlist=TUBE_LIST
audit.tube.topic=inlong-audit
audit.tube.consumer.group.name=inlong-audit-consumer

# mysql
spring.datasource.druid.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_audit?characterEncoding=utf8&useSSL=false&serverTimezone=GMT%2b8&rewriteBatchedStatements=true&allowMultiQueries=true&zeroDateTimeBehavior=CONVERT_TO_NULL
spring.datasource.druid.username=root
spring.datasource.druid.password=inlong
```

### Dependencies
- If the backend database is MySQL, please download [mysql-connector-java-8.0.26.jar](https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.26/mysql-connector-java-8.0.26.jar) and put it into `lib/` directory.

- If the backend database is PostgreSQL, there's no need for additional dependencies.

### Start
The startup script file `./bin/store-start.sh`
```Shell
sh ./bin/store-start.sh
```

The default listen port is `10081`.