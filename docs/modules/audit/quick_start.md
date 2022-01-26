---
title: Deployment
---

## audit-source Deployment
### Configure
The configuration file  is `inlong-audit/audit-source/conf/audit.conf`. 

#### total configuration
```Shell
agent1.sources = tcp-source
agent1.channels = ch-msg1 ch-msg2
agent1.sinks = pulsar-sink-msg1 pulsar-sink-msg2
```

#### sources configuration
```Shell
agent1.sources.tcp-source.channels = ch-msg1 ch-msg2
agent1.sources.tcp-source.type = org.apache.inlong.audit.source.SimpleTcpSource
agent1.sources.tcp-source.msg-factory-name = org.apache.inlong.audit.source.ServerMessageFactory
agent1.sources.tcp-source.host = 0.0.0.0
agent1.sources.tcp-source.port = 46801
agent1.sources.tcp-source.max-msg-length = 524288
agent1.sources.tcp-source.connections = 30000
agent1.sources.tcp-source.max-threads = 64
agent1.sources.tcp-source.receiveBufferSize = 1048576
agent1.sources.tcp-source.sendBufferSize = 1048576
agent1.sources.tcp-source.custom-cp = true
agent1.sources.tcp-source.selector.type = org.apache.inlong.audit.channel.FailoverChannelSelector
agent1.sources.tcp-source.selector.master = ch-msg1
agent1.sources.tcp-source.metric-recovery-path=/data/tdbank/audit/flume/recovery
agent1.sources.tcp-source.metric-agent-port=8003
agent1.sources.tcp-source.metric-cache-size=1000000
agent1.sources.tcp-source.set=10
```

#### channels configuration
```Shell
agent1.channels.ch-msg1.type = memory
agent1.channels.ch-msg1.capacity = 10000
agent1.channels.ch-msg1.keep-alive = 0
agent1.channels.ch-msg1.transactionCapacity = 200
agent1.channels.ch-msg2.type = file
agent1.channels.ch-msg2.capacity = 100000000
agent1.channels.ch-msg2.maxFileSize = 1073741824
agent1.channels.ch-msg2.minimumRequiredSpace = 1073741824
agent1.channels.ch-msg2.checkpointDir = /data/tdbank/audit/file/ch-msg5/check
agent1.channels.ch-msg2.dataDirs = /data/tdbank/audit/file/ch-msg5/data
agent1.channels.ch-msg2.fsyncPerTransaction = false
agent1.channels.ch-msg2.fsyncInterval = 10
```

#### sinks configuration
```Shell
agent1.sinks.pulsar-sink-msg1.channel = ch-msg1
agent1.sinks.pulsar-sink-msg1.type = org.apache.inlong.audit.sink.PulsarSink
agent1.sinks.pulsar-sink-msg1.pulsar_server_url = pulsar://PULSAR_BROKER_LIST
agent1.sinks.pulsar-sink-msg1.topic = persistent://PULSAR_TOPIC
agent1.sinks.pulsar-sink-msg1.send_timeout_ms = 30000
agent1.sinks.pulsar-sink-msg1.client_op_timeout_second = 30000
agent1.sinks.pulsar-sink-msg1.stat_interval_sec = 60
agent1.sinks.pulsar-sink-msg1.enable_batch = true
agent1.sinks.pulsar-sink-msg1.block_if_queue_full = true
agent1.sinks.pulsar-sink-msg1.max_pending_messages = 10000
agent1.sinks.pulsar-sink-msg1.max_batching_messages = 1000
agent1.sinks.pulsar-sink-msg1.retry_interval_when_send_error_ms = 30000
agent1.sinks.pulsar-sink-msg1.thread_num = 8
agent1.sinks.pulsar-sink-msg1.log_every_n_events = 100000
agent1.sinks.pulsar-sink-msg1.disk_io_rate_per_sec= 20000000
```

### run
The startup script file `inlong-audit/audit-source/bin/start.sh`
```Shell
sh bin/start.sh
```

### stop
The stop script file  is `inlong-audit/audit-source/bin/stop.sh`
```Shell
sh bin/stop.sh
```


## audit-store Deployment
### Configure
The configuration file  is `inlong-audit/audit-store/conf/aapplication.properties`. 

#### Configure Store Modle
```Shell
# store.server: mysql / elasticsearch 
audit.config.store.mode=mysql
```

#### onfigure Message Queue
```Shell
audit.pulsar.server.url=pulsar://127.0.0.1:6650
audit.pulsar.topic=persistent://public/default/audit
audit.pulsar.consumer.sub.name=sub-audit
```

####  config server
```Shell
audit.config.file.check.enable=false
audit.config.manager.server.url=http://127.0.0.1:8000
```

#### Configure MySQL(optional)
```Shell
spring.datasource.driver-class-name=com.mysql.jdbc.Driver
spring.datasource.name=druidDataSource
spring.datasource.type=com.alibaba.druid.pool.DruidDataSource
spring.datasource.druid.driver-class-name= com.mysql.cj.jdbc.Driver
spring.datasource.druid.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_audit?characterEncoding=utf8&useSSL=false&serverTimezone=GMT%2b8&rewriteBatchedStatements=true&allowMultiQueries=true&zeroDateTimeBehavior=CONVERT_TO_NULL
spring.datasource.druid.username=root
spring.datasource.druid.password=inlong
spring.datasource.druid.filters=stat,log4j,config
spring.datasource.druid.max-active=100
spring.datasource.druid.initial-size=1
spring.datasource.druid.max-wait=60000
spring.datasource.druid.min-idle=1
spring.datasource.druid.time-between-eviction-runs-millis=60000
spring.datasource.druid.min-evictable-idle-time-millis=300000
spring.datasource.druid.validation-query=select 'x'
spring.datasource.druid.test-while-idle=true
spring.datasource.druid.test-on-borrow=false
spring.datasource.druid.test-on-return=false
spring.datasource.druid.pool-prepared-statements=true
spring.datasource.druid.filter.wall.config.multi-statement-allow=true
spring.datasource.druid.max-open-prepared-statements=50
spring.datasource.druid.max-pool-prepared-statement-per-connection-size=20
mybatis.mapper-locations=classpath*:mapper/*.xml
mybatis.type-aliases-package=org.apache.inlong.store.db.entities
```

#### Configure Elasticsearch(optional)
```Shell
elasticsearch.host=127.0.0.1
elasticsearch.port=9200
elasticsearch.username=elastic
elasticsearch.password=inlong123INLONG
elasticsearch.shardsNum=5
elasticsearch.replicaNum=1
elasticsearch.indexDeleteDay=5
elasticsearch.enableCustomDocId=true
elasticsearch.bulkInterval=10
elasticsearch.bulkThreshold=10
elasticsearch.auditIdSet=1,2,3,4,5,6,7,8
```

### run
The startup script file `inlong-audit/audit-store/bin/start.sh`
```Shell
sh bin/start.sh
```

### stop
The stop script file `inlong-audit/audit-store/bin/stop.sh`
```Shell
sh bin/stop.sh
```