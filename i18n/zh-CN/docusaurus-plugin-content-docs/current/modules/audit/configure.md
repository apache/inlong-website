---
title: 参数配置 sidebar_position: 3
---

## audit-proxy代理层 source-channel-sink 管道配置（dataproxy-{tube|pulsar}.conf）

audit-proxy 支持配置化的 source-channel-sink，配置方式与 flume 的配置文件结构一致，修改该配置文件时要按照 Apache flume 的配置文件定义来进行修改。配置文件放在
audit-proxy-{tube|pulsar}.conf 文件中，目前支持 audit-proxy-pulsar.conf 和 audit-proxy-tube.conf
两种，用于区分不同的中间件类型，具体类型可以在启动时指定，默认（未指定时）使用 audit-proxy-pulsar.conf 作为配置文件。 如下是针对该配置文件的示例：

- Source 配置示例：

```shell
agent1.sources.tcp-source.channels = ch-msg1
定义source中使用到的channel，注意此source下面的配置如果有使用到channel，均需要在此注释

agent1.sources.tcp-source.type = org.apache.inlong.audit.source.SimpleTcpSource
tcp解析类型定义，这里提供类名用于实例化，SimpleTcpSource主要是初始化配置并启动端口监听

agent1.sources.tcp-source.msg-factory-name = org.apache.inlong.audit.source.ServerMessageFactory
用于构造消息解析的handler，并设置read stream handler和write stream handler

agent1.sources.tcp-source.host = 0.0.0.0
tcp ip绑定监听，默认绑定所有网卡

agent1.sources.tcp-source.port = 10081
tcp 端口绑定，默认绑定46801端口

agent1.sources.tcp-source.max-msg-length = 524288
限制单个包大小，这里如果传输的是压缩包，则是压缩包大小，限制512KB

agent1.sources.tcp-source.connections = 30000
并发连接上线，超过上限值时会对新连接做断链处理

agent1.sources.tcp-source.max-threads = 64
netty线程池工作线程上限，一般推荐选择cpu的两倍

agent1.sources.tcp-source.receiveBufferSize = 1048576
netty server tcp调优参数,TCP接受缓冲区的容量上限

agent1.sources.tcp-source.sendBufferSize = 1048576
netty server tcp调优参数,TCP发送缓冲区的容量上限

agent1.sources.tcp-source.custom-cp = true
是否使用自研的channel process，自研channel process可在主channel阻塞时，选择备用channel发送

agent1.sources.tcp-source.selector.type = org.apache.inlong.audit.channel.FailoverChannelSelector
这个channel selector就是自研的channel selector，和官网的差别不大，主要是有channel主从选择逻辑

agent1.sources.tcp-source.selector.master = ch-msg1
指定master channel，这些channel会被优先选择用于数据推送。那些不在master、transfer、fileMetric、slaMetric配置项里的channel，但在
channels里面有定义的channel，统归为slave channel，当master channel都被占满时，就会选择使用slave channel
```

- Channel 配置示例，memory channel：

```shell
agent1.channels.ch-msg1.type = memory
memory channel类型

agent1.channels.ch-msg1.capacity = 10000

memory channel 队列大小，可缓存最大消息条数
agent1.channels.ch-msg1.keep-alive = 0

agent1.channels.ch-msg1.transactionCapacity = 200
原子操作时批量处理最大条数，memory channel使用时需要用到加锁，因此会有批处理流程增加效率
```

- Channel 配置示例，file channel：

```shell
agent1.channels.ch-msg2.type = file
file channel类型

agent1.channels.ch-msg2.capacity = 100000000
file channel最大可缓存消息条数

agent1.channels.ch-msg2.maxFileSize = 1073741824
file channel文件最大上限，字节数

agent1.channels.ch-msg2.minimumRequiredSpace = 1073741824
file channel所在磁盘最小可用空间，设置此值可以防止磁盘写满

agent1.channels.ch-msg2.checkpointDir =./data/file/ch-msg5/check
file channel checkpoint路径

agent1.channels.ch-msg2.dataDirs =./data/file/ch-msg5/data
file channel数据路径

agent1.channels.ch-msg2.fsyncPerTransaction = false
是否对每个原子操作做同步磁盘，建议改false，否则会对性能有影响

agent1.channels.ch-msg2.fsyncInterval = 10
数据从内存flush到磁盘的时间间隔，单位秒
```

- Sink 配置示例：

```shell
agent1.sinks.pulsar-sink-msg1.channel = ch-msg1
sink的上游channel名称

agent1.sinks.pulsar-sink-msg1.type = org.apache.inlong.audit.sink.PulsarSink
sink类实现，此处实现消息向pulsar集群推送数据

agent1.sinks.pulsar-sink-msg1.pulsar_server_url = pulsar://localhost:6650
pulsar集群master节点列表

agent1.sinks.pulsar-sink-msg1.topic = persistent://public/default/inlong-audit
pulsar集群topic

agent1.sinks.pulsar-sink-msg1.enable_token_auth = false
是否需要安全认证

agent1.sinks.pulsar-sink-msg1.auth_token =
pulsar认证token

agent1.sinks.pulsar-sink-msg1.send_timeout_ms = 30000
发送超时时间

agent1.sinks.pulsar-sink-msg1.stat_interval_sec = 60
sink指标统计间隔时间，单位秒

agent1.sinks.pulsar-sink-msg1.enable_batch = true
是否允许批量发送

agent1.sinks.pulsar-sink-msg1.block_if_queue_full = true
队列满时，是否需要阻塞
agent1.sinks.pulsar-sink-msg1.max_pending_messages = 10000
最大挂起的消息大小

agent1.sinks.pulsar-sink-msg1.max_batching_messages = 1000
最大批量发送消息大小

agent1.sinks.pulsar-sink-msg1.retry_interval_when_send_error_ms = 30000
重发间隔

agent1.sinks.pulsar-sink-msg1.thread_num = 8
Sink类发送消息的工作线程，8表示启动8个并发线程
```

## audit-store入库服务配置（application.properties）

审计入库支持MySql、ElasticSearch、ClickHouse 3中存储。配置时，只需配置选择的存储即可

- 数据库配置

```shell
spring.datasource.druid.driver-class-name=com.mysql.cj.jdbc.Driver
设置Driver类型

spring.datasource.druid.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_audit?characterEncoding=utf8&useSSL=false&serverTimezone=GMT%2b8&rewriteBatchedStatements=true&allowMultiQueries=true&zeroDateTimeBehavior=CONVERT_TO_NULL&allowPublicKeyRetrieval=true
jdbc的URL

spring.datasource.druid.username=root
账号名

spring.datasource.druid.password=inlong
密码

spring.datasource.druid.filters=stat,log4j,confi
配置StatFilter

spring.datasource.druid.max-active=100
连接池中的最大连接数

spring.datasource.druid.initial-size=1
初始化大小

spring.datasource.druid.max-wait=60000
获取连接时的最大等待时间

spring.datasource.druid.min-idle=1
最小连接数

spring.datasource.druid.time-between-eviction-runs-millis=60000
多久才进行一次检测需要关闭的空闲连接，单位是毫秒

spring.datasource.druid.min-evictable-idle-time-millis=300000
一个连接在池中最小生存的时间，单位是毫秒

spring.datasource.druid.validation-query=select 'x'
检测连接是否有效的 SQL语句，为空时以下三个配置均无效

spring.datasource.druid.test-while-idle=true
申请连接时执行validationQuery检测连接是否有效，默认true，开启后会降低性能

spring.datasource.druid.test-on-borrow=false
归还连接时执行validationQuery检测连接是否有效，默认false，开启后会降低性能

spring.datasource.druid.test-on-return=false
申请连接时如果空闲时间大于timeBetweenEvictionRunsMillis，执行validationQuery检测连接是否有效，默认false，

spring.datasource.druid.pool-prepared-statements=true
是否缓存

spring.datasource.druid.filter.wall.config.multi-statement-allow=true
是否允许一次执行多条语句

spring.datasource.druid.max-open-prepared-statements=50
preparedStatement的最大个数

spring.datasource.druid.max-pool-prepared-statement-per-connection-size=20
preparedStatement的最大连接数
```

- MQ配置

```shell
audit.config.proxy.type=pulsar
MQ类型

audit.pulsar.server.url=pulsar://127.0.0.1:6650
pulsar的集群地址

audit.pulsar.topic=persistent://public/default/inlong-audit
pulsar topic

audit.pulsar.consumer.sub.name=inlong-audit-subscription
订阅组

audit.pulsar.enable.auth=false
是否需要安全认证

audit.pulsar.token=
认证token
```

- ElasticSearch配置

```shell
elasticsearch.host=127.0.0.1
集群地址

elasticsearch.port=9200
集群端口

elasticsearch.authEnable=false
是否认证

elasticsearch.username=elastic
账号名

elasticsearch.password=inlong
密码

elasticsearch.shardsNum=5
分片数

elasticsearch.replicaNum=1
副本数

elasticsearch.indexDeleteDay=5
索引保存时间，天

elasticsearch.enableDocId=true
是否使用 doc id 写入

elasticsearch.bulkInterval=10
批量写入时间间隔

elasticsearch.bulkThreshold=5000
批量写入阈值

elasticsearch.auditIdSet=1,2
允许写入的审计ID列表
```
