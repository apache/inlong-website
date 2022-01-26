---
title: 安装部署
---

## audit-source安装与部署
### 配置
配置文件`inlong-audit/audit-source/conf/audit.conf`. 

#### 总配置
```html
agent1.sources = tcp-source
agent1.channels = ch-msg1 ch-msg2
agent1.sinks = pulsar-sink-msg1 pulsar-sink-msg2
```

#### sources参数配置
```html
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

#### channels参数配置
```html
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

#### sinks参数配置
```html
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

### 启动
启动脚本 `inlong-audit/audit-source/bin/start.sh`
```shell script
sh bin/start.sh
```

### 停止
停止脚本 `inlong-audit/audit-source/bin/stop.sh`
```shell script
sh bin/stop.sh
```


## audit-store安装与部署
### 配置
配置文件 `inlong-audit/audit-store/conf/aapplication.properties`. 

#### 配置存储类型
```html
# store.server: mysql / elasticsearch 
audit.config.store.mode=mysql
```

#### 配置消息队列
```html
audit.pulsar.server.url=pulsar://127.0.0.1:6650
audit.pulsar.topic=persistent://public/default/audit
```

#### 配置MySQL(可选)
```html
spring.datasource.druid.url= jdbc:mysql://127.0.0.1:3306/apache_inlong_audit?characterEncoding=utf8&useSSL=false&serverTimezone=GMT%2b8&rewriteBatchedStatements=true&allowMultiQueries=true&zeroDateTimeBehavior=CONVERT_TO_NULL
spring.datasource.druid.username=root
spring.datasource.druid.password=inlong
```

#### 配置ES(可选)
```html
elasticsearch.host=127.0.0.1
elasticsearch.port=9200
elasticsearch.username=elastic
elasticsearch.password=inlong
```

### 启动
启动脚本 `inlong-audit/audit-store/bin/start.sh`
```shell script
sh bin/start.sh
```

### 停止
停止脚本 `inlong-audit/audit-store/bin/stop.sh`
```shell script
sh bin/stop.sh
```