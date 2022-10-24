---
title: 参数配置 sidebar_position: 3
---

## audit-proxy source-channel-sink pipeline configuration (dataproxy-{tube|pulsar}.con)

audit-proxy supports configured source-channel-sink, and the configuration method is consistent with the configuration
file structure of flume. When modifying the configuration file, it should be modified according to the configuration
file definition of Apache flume. config file in audit-proxy-{tube|pulsar}.conf file, currently supports
audit-proxy-pulsar.conf and audit-proxy-tube.conf Two types are used to distinguish different middleware types. The
specific type can be specified at startup. By default (when not specified), audit-proxy-pulsar.conf is used as the
configuration file. The following is an example for this configuration file:

- Source Configuration example：

```shell
agent1.sources.tcp-source.channels = ch-msg1
Define the channel used in the source. Note that if the configuration below this source uses the channel, it needs to be commented here

agent1.sources.tcp-source.type = org.apache.inlong.audit.source.SimpleTcpSource
tcp parsing type definition, class name is provided here for instantiation, SimpleTcpSource is mainly to initialize configuration and start port listening

agent1.sources.tcp-source.msg-factory-name = org.apache.inlong.audit.source.ServerMessageFactory
Handler for constructing message parsing, and setting read stream handler and write stream handler

agent1.sources.tcp-source.host = 0.0.0.0
tcp ip binding and listening, all network cards are bound by default

agent1.sources.tcp-source.port = 10081
tcp port binding, default binding to port 46801

agent1.sources.tcp-source.max-msg-length = 524288
Limit the size of a single package, here if the compressed package is transmitted, it is the compressed package size, and the limit is 512KB

agent1.sources.tcp-source.connections = 30000
Concurrent connections are online, and new connections will be disconnected when the upper limit is exceeded

agent1.sources.tcp-source.max-threads = 64
Netty thread pool worker thread upper limit, it is generally recommended to choose twice the cpu

agent1.sources.tcp-source.receiveBufferSize = 1048576
Netty server tcp tuning parameters, the upper limit of the capacity of the TCP accept buffer

agent1.sources.tcp-source.sendBufferSize = 1048576
Netty server tcp tuning parameters, the upper limit of the capacity of the TCP send buffer

agent1.sources.tcp-source.custom-cp = true
Whether to use the self-developed channel process, the self-developed channel process can choose the backup channel to send when the main channel is blocked

agent1.sources.tcp-source.selector.type = org.apache.inlong.audit.channel.FailoverChannelSelector
This channel selector is a self-developed channel selector, which is not much different from the official website, mainly because of the channel master-slave selection logic

agent1.sources.tcp-source.selector.master = ch-msg1
Specify master channels, which will be preferred for data push. Those channels that are not in the master, transfer, fileMetric, and slaMetric configuration items, but are
There are defined channels in channels, which are all classified as slave channels. When the master channel is full, it will choose to use the slave channel.
```

- Channel Configuration example，memory channel：

```shell
agent1.channels.ch-msg1.type = memory
memory channel type

agent1.channels.ch-msg1.capacity = 10000
The size of the memory channel queue, the maximum number of messages that can be cached

agent1.channels.ch-msg1.transactionCapacity = 200
The maximum number of batches is processed in atomic operations, and the memory channel needs to be locked when using it, so there will be a batch process to increase efficiency
```

- Channel configuration example, file channel:

```shell
agent1.channels.ch-msg2.type = file
file channel type

agent1.channels.ch-msg2.capacity = 100000000
The maximum number of messages that can be cached by file channel

agent1.channels.ch-msg2.maxFileSize = 1073741824
file channel file maximum upper limit, the number of bytes

agent1.channels.ch-msg2.minimumRequiredSpace = 1073741824
The minimum free space on the disk where the file channel is located. Setting this value can prevent the disk from being full.

agent1.channels.ch-msg2.checkpointDir =./data/file/ch-msg5/check
file channel checkpoint path

agent1.channels.ch-msg2.dataDirs =./data/file/ch-msg5/data
file channel data path

agent1.channels.ch-msg2.fsyncPerTransaction = false
Whether to synchronize the disk for each atomic operation, it is recommended to change to false, otherwise it will affect the performance

agent1.channels.ch-msg2.fsyncInterval = 10
The time interval between flushing data from memory to disk, in seconds
```

- Sink 配置示例：

```shell
agent1.sinks.pulsar-sink-msg1.channel = ch-msg1
The upstream channel name of the sink

agent1.sinks.pulsar-sink-msg1.type = org.apache.inlong.audit.sink.PulsarSink
The sink class is implemented, where the message pushes data to the pulsar cluster

agent1.sinks.pulsar-sink-msg1.pulsar_server_url = pulsar://localhost:6650

pulsar cluster master node list

agent1.sinks.pulsar-sink-msg1.topic = persistent://public/default/inlong-audit
pulsar cluster topic

agent1.sinks.pulsar-sink-msg1.enable_token_auth = false

Whether security certification is required

agent1.sinks.pulsar-sink-msg1.auth_token =
pulsar authentication token

agent1.sinks.pulsar-sink-msg1.send_timeout_ms = 30000
发送超时时间

agent1.sinks.pulsar-sink-msg1.stat_interval_sec = 60
send timeout

agent1.sinks.pulsar-sink-msg1.enable_batch = true
Whether to allow bulk sending

agent1.sinks.pulsar-sink-msg1.block_if_queue_full = true
Whether to block when the queue is full

agent1.sinks.pulsar-sink-msg1.max_pending_messages = 10000
Maximum pending message size

agent1.sinks.pulsar-sink-msg1.max_batching_messages = 1000
Maximum batch send message size

agent1.sinks.pulsar-sink-msg1.retry_interval_when_send_error_ms = 30000
retransmission interval

agent1.sinks.pulsar-sink-msg1.thread_num = 8
The worker thread of the sink class to send messages, 8 means to start 8 concurrent threads
```

## Audit-store storage service configuration (application.properties)

Audit storage supports MySql, ElasticSearch, ClickHouse 3 storage. When configuring, simply configure the storage of
your choice

- Database configuration

```shell
spring.datasource.druid.driver-class-name=com.mysql.cj.jdbc.Driver
Set the driver type

spring.datasource.druid.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_audit?characterEncoding=utf8&useSSL=false&serverTimezone=GMT%2b8&rewriteBatchedStatements=true&allowMultiQueries=true&zeroDateTimeBehavior=CONVERT_TO_NULL&allowPublicKeyRetrieval=true
jdbc URL

spring.datasource.druid.username=root
account name

spring.datasource.druid.password=inlong
password

spring.datasource.druid.filters=stat,log4j,confi
Configure StatFilter

spring.datasource.druid.max-active=100
The maximum number of connections in the connection pool

spring.datasource.druid.initial-size=1
Initialize size

spring.datasource.druid.max-wait=60000
Maximum wait time when getting a connection

spring.datasource.druid.min-idle=1
Minimum number of connections

spring.datasource.druid.time-between-eviction-runs-millis=60000
How often to detect idle connections that need to be closed, in milliseconds

spring.datasource.druid.min-evictable-idle-time-millis=300000
The minimum lifetime of a connection in the pool, in milliseconds

spring.datasource.druid.validation-query=select 'x'
The SQL statement to check whether the connection is valid. When it is empty, the following three configurations are invalid.

spring.datasource.druid.test-while-idle=true
When applying for a connection, execute the validationQuery to check whether the connection is valid. The default is true, which will reduce performance when enabled.

spring.datasource.druid.test-on-borrow=false
When returning the connection, execute the validationQuery to check whether the connection is valid. The default is false, and the performance will be reduced when enabled.

spring.datasource.druid.test-on-return=false
When applying for a connection, if the idle time is greater than timeBetweenEvictionRunsMillis, execute validationQuery to check whether the connection is valid, the default is false,，

spring.datasource.druid.pool-prepared-statements=true
Whether to cache

spring.datasource.druid.filter.wall.config.multi-statement-allow=true
Whether to allow multiple statements to be executed at once

spring.datasource.druid.max-open-prepared-statements=50
Maximum number of preparedStatements

spring.datasource.druid.max-pool-prepared-statement-per-connection-size=20
Maximum number of connections for preparedStatement
```

- MQ配置

```shell
audit.config.proxy.type=pulsar
MQ type

audit.pulsar.server.url=pulsar://127.0.0.1:6650
pulsar cluster address

audit.pulsar.topic=persistent://public/default/inlong-audit
pulsar topic

audit.pulsar.consumer.sub.name=inlong-audit-subscription
pulsar topic

audit.pulsar.enable.auth=false
Whether security certification is required

audit.pulsar.token=
authentication token
```

- ElasticSearch配置

```shell
elasticsearch.host=127.0.0.1
cluster address

elasticsearch.port=9200
cluster port

elasticsearch.authEnable=false
Is it certified

elasticsearch.username=elastic
account name

elasticsearch.password=inlong
password

elasticsearch.shardsNum=5
number of shards

elasticsearch.replicaNum=1
number of copies

elasticsearch.indexDeleteDay=5
Index retention time, days

elasticsearch.enableDocId=true
whether to write with doc id

elasticsearch.bulkInterval=10
batch write interval

elasticsearch.bulkThreshold=5000
batch write threshold

elasticsearch.auditIdSet=1,2
List of audit IDs that are allowed to write
```
