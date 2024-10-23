---
title: 配置参数
---

## 1 TubeMQ 服务端配置文件说明：

TubeMQ 服务端包括 Master 和 Broker 共 2 个模块，Master 又包含供外部页面访问的 Web 前端模块（该部分存放在 resources 中），考虑到实际部署时 2 个模块常常部署在同 1 台机器中，TubeMQ 将 2 个模块 3 个部分的内容打包在一起交付给运维使用；客户端则不包含服务端部分的 lib 包单独交付给业务使用。

Master 与 Broker 采用 ini 配置文件格式，相关配置文件分别放置在 tubemq-server-x.y.z/conf/ 目录的 master.ini 和 broker.ini 文件中：

![](img/configure/conf_ini_pos.png)

他们的配置是按照配置单元集合来定义的，Master 配置由必选的 [master]、可选择的必选 [meta_zookeeper]、[meta_bdb] 和可选的 [tlsSetting] 一共 4 个配置单元组成，Broker配置由必选的 [broker] 和可选的 [tlsSetting] 一共 2 个配置单元组成；实际使用时，大家也可将两个配置文件内容合并放置为一个 ini 文件。

**注意**：
- 由于 Apache 依赖包的 LICENSE 问题，从 1.1.0 版本开始 TubeMQ 发布的包不再包含 BDB 包；
- 1.1.0 版本开始，元数据缺省采用 ZooKeeper 存储，可选支持 BDB，1.1.0 版本需要手工设置 master.ini 配置文件，增加 [meta_bdb] 配置单元才能支持 BDB 存储。
- 若业务使用 BDB 组件，需要自行下载 com.sleepycat.je-7.3.7.jar 包，要不会系统运行时会报“ java.lang.ClassNotFoundException: com.sleepycat.je.ReplicaConsistencyPolicy” 错误；

Master 除了后端系统配置文件外，还在 resources 里存放了 Web 前端页面模块，resources 的根目录 velocity.properties 文件为 Master 的 Web 前端页面配置文件。

![](img/configure/conf_velocity_pos.png)


## 2 配置项详情：

### 2.1 master.ini 文件中关键配置内容说明：
[master]
> master 系统运行主要配置单元，必填单元，值固定为 &quot;[master]&quot;

| 配置项 | 是否必选 | 值类型 | 配置说明                                                                                                              |
|-----| --- | --- |-------------------------------------------------------------------------------------------------------------------|
| hostName | 是 | String | Master 对外服务的主机地址，必填项，必须在网卡中已配置，处于启用状态，非回环且不能为 127.0.0.1 的 IP                                                      |
| port | 否 | int | Master 监听的端口，可选项，缺省值为 8715                                                                                        |
| webPort | 否 | int | Master Web 控制台的访问端口，缺省值为 8080                                                                                     |
| webResourcePath | 是 | String | Master Web Resource 部署绝对路径，必填项，该值设置不正确时 Web 页面将不能正常显示                                                             |
| confModAuthToken | 否 | String | 通过 Master 的 Web 或 API 做变更操作（包括增、删、改配置，以及变更 Master 及管理的 Broker 状态）时操作者需要提供的授权 Token，该值可选，缺省为 &quot;ASDFGHJKL&quot; |
| firstBalanceDelayAfterStartMs | 否 | long | Master 启动至首次开始 Rebalance 的时间间隔，可选项，缺省 30000 毫秒                                                                    |
| consumerBalancePeriodMs | 否 | long | Master 对消费组进行 Rebalance 的均衡周期，可选项，缺省 60000 毫秒，当集群规模较大时，请调大该值                                                      |
| consumerHeartbeatTimeoutMs | 否 | long | 消费者心跳超时周期，可选项，缺省 30000 毫秒，当集群规模较大时，请调大该值                                                                          |
| producerHeartbeatTimeoutMs | 否 | long | 生产者心跳超时周期，可选项，缺省 30000 毫秒，当集群规模较大时，请调大该值                                                                          |
| brokerHeartbeatTimeoutMs | 否 | long | Broker 心跳超时周期，可选项，缺省 30000 毫秒，当集群规模较大时，请调大该值                                                                      |
| rebalanceParallel | 否 | int | Master Rebalance 处理并行度，可选项，缺省 4，取值范围 [1, 20], 当集群规模较大时，请调大该值                                                      |
| socketRecvBuffer | 否 | long | Socket 接收 Buffer 缓冲区 SO\_RCVBUF 大小,单位字节, 负数为不做设置以缺省值为准                                                            |
| socketSendBuffer | 否 | long | Socket 发送 Buffer 缓冲区 SO\_SNDBUF 大小,单位字节, 负数为不做设置以缺省值为准                                                            |
| maxAutoForbiddenCnt | 否 | int | Broker 出现 IO 故障时最大允许 Master 自动下线 Broker 个数，可选项，缺省为 5，建议该值不超过集群内 Broker 总数的 10%                                    |
| startOffsetResetCheck | 否 | boolean | 是否启用客户端 Offset 重置功能的检查功能，可选项，缺省为 false                                                                            |
| needBrokerVisitAuth | 否 | boolean | 是否启用 Broker 访问鉴权，缺省为 false，如果为 true，则 Broker 上报的消息里必须携带正确的用户名及签名信息                                                |
| visitName | 否 | String | Broker 访问鉴权的用户名，缺省为空字符串，在 needBrokerVisitAuth 为 true 时该值必须存在，该值必须与 broker.ini 里的 visitName 字段值同                   |
| visitPassword | 否 | String | Broker 访问鉴权的密码，缺省为空字符串，在 needBrokerVisitAuth 为 true 时该值必须存在，该值必须与 broker.ini 里的 visitPassword 字段值同                |
| startVisitTokenCheck | 否 | boolean | 是否启用客户端 visitToken 检查，缺省为 false                                                                                   |
| startProduceAuthenticate | 否 | boolean | 是否启用生产端用户认证，缺省为 false                                                                                             |
| startProduceAuthorize | 否 | boolean | 是否启用生产端生产授权认证，缺省为 false                                                                                           |
| startConsumeAuthenticate | 否 | boolean | 是否启用消费端用户认证，缺省为 false                                                                                             |
| startConsumeAuthorize | 否 | boolean | 是否启用消费端消费授权认证，缺省为 false                                                                                           |
| maxGroupBrokerConsumeRate | 否 | int | 集群 Broker 数与消费组里成员数的最大比值，可选项，缺省为 50，50 台 Broker 集群里允许 1 个消费组最少启动 1 个客户端消费                                         |

[meta_zookeeper]
> Master 基于 ZooKeeper 进行元数据存储和多节点热备的配置单元，&quot;[meta_zookeeper]&quot; 这部分和 &quot;[meta_bdb]&quot; 二选一。

| 配置项 | 是否必选 | 值类型 | 配置说明                                         |
|-----| --- | --- |----------------------------------------------|
| zkServerAddr | 否 | String | zk 服务器地址，可选配置，缺省为 &quot;localhost:2181&quot; |
| zkNodeRoot | 否 | String | zk 上的节点根目录路径，可选配置，缺省为 &quot;/tubemq&quot;    |
| zkSessionTimeoutMs | 否 | long | zk 心跳超时，单位毫秒，默认 30 秒                         |
| zkConnectionTimeoutMs | 否 | long | zk 连接超时时间，单位毫秒，默认 30 秒                       |
| zkSyncTimeMs | 否 | long | zk 数据同步时间，单位毫秒，默认 5 秒                        |
| zkCommitPeriodMs | 否 | long | Master 缓存数据刷新到 zk 上的时间间隔，单位毫秒，默认 5 秒         |
| zkMasterCheckPeriodMs | 否 | long | 当前节点是否为 Master 角色的检查周期，单位毫秒，缺省为 5 秒          |

[meta_bdb]
> Master 基于 BDB 存储元数据及进行多节点热备保活的配置单元，&quot;[meta_bdb]&quot; 这部分和 &quot;[meta_zookeeper]&quot; 二选一。

| 配置项 | 是否必选 | 值类型 | 配置说明                                                                                             |
|-----| --- | --- |--------------------------------------------------------------------------------------------------|
| repGroupName | 否 | String | 集群名，所属主备 Master 节点值必须相同，可选字段，缺省为 &quot;tubemqMasterGroup&quot;                                   |
| repNodeName | 是 | String | 所属 Master 在集群中的节点名，该值各个节点必须不重复，必填字段                                                              |
| metaDataPath | 否 | String | Metadata 存储路径，可以是绝对路径、或者相对 TubeMQ 安装目录（&quot;$BASE_DIR&quot;）的相对路径。缺省为 &quot;var/meta_data&quot; |
| repNodePort | 否 | int | 节点复制通讯端口，可选字段，缺省为 9001                                                                           |
| repHelperHost | 否 | String | 集群启动时的主节点，可选字段，缺省为 &quot;127.0.0.1:9001&quot;                                                    |
| metaLocalSyncPolicy | 否 | int | 数据节点本地保存方式，该字段取值范围 [1，2，3]，缺省为 1：其中 1 为数据保存到磁盘，2 为数据只保存到内存，3 为只将数据写文件系统 buffer，但不刷盘              |
| metaReplicaSyncPolicy | 否 | int | 数据节点同步保存方式，该字段取值范围 [1，2，3]，缺省为 1：其中 1 为数据保存到磁盘，2 为数据只保存到内存，3 为只将数据写文件系统 buffer，但不刷盘              |
| repReplicaAckPolicy | 否 | int | 节点数据同步时的应答策略，该字段取值范围为 [1，2，3]，缺省为 1：其中 1 为超过 1/2 多数为有效，2 为所有节点应答才有效；3 为不需要节点应答                   |
| repStatusCheckTimeoutMs | 否 | long | 节点状态检查间隔，可选字段，单位毫秒，缺省为 10 秒                                                                      |

[tlsSetting]
> Master 启用 TLS 进行传输层数据加密通的相关设置，可选单元，值固定为 &quot;[tlsSetting]&quot;

| 配置项 | 是否必选 | 值类型 | 配置说明                                                                                      |
|-----| --- | --- |-------------------------------------------------------------------------------------------|
| tlsEnable | 否 | boolean | 是否启用 TLS 功能，可选配置，缺省为 false                                                                |
| tlsPort | 否 | int | Master 的 TLS 端口号，可选配置，缺省为 8716                                                            |
| tlsKeyStorePath | 否 | String | TLS 的 keyStore 文件的绝对存储路径 + keyStore 文件名，在启动 TLS 功能时，该字段必填且不能为空                            |
| tlsKeyStorePassword | 否 | String | TLS 的 keyStorePassword 文件的绝对存储路径 + keyStorePassword 文件名，在启动 TLS 功能时，该字段必填且不能为空            |
| tlsTwoWayAuthEnable | 否 | boolean | 是否启用 TLS 双向认证功能，可选配置，缺省为 false                                                            |
| tlsTrustStorePath | 否 | String | TLS 的 TrustStore 文件的绝对存储路径 + TrustStore 文件名，在启动 TLS 功能且启用双向认证时，该字段必填且不能为空                 |
| tlsTrustStorePassword | 否 | String | TLS 的 TrustStorePassword 文件的绝对存储路径 + TrustStorePassword 文件名，在启动 TLS 功能且启用双向认证时，该字段必填且不能为空 |

[prometheus]
> Master 使用 prometheus 提供指标数据查询时的相关配置单元设置，可选配置单元集合 &quot; [prometheus] &quot;

| 配置项 | 是否必选 | 值类型     | 配置说明                                                    |
|-----|------|---------|---------------------------------------------------------|
| promEnable | 否    | boolean | 是否启用 prometheus 服务，可选配置，缺省为 false                       |
| promClusterName | 否 | String  | 启用 prometheus 服务时 服务节点所属于的集群名，缺省值为 &quot; InLong &quot; |
| promHttpPort | 否    | int   | 启用 prometheus 服务时的侦听端口，可选配置，缺省值为 9081                   |

**注意**：
- 基于 Docker 容器化的需要，master.ini 文件里对 [meta_bdb] 如上 3 个参数部分都是使用的缺省设置，在实际组网使用时需要以 Master 节点真实信息配置
- Master 所有节点的 IP 信息要在 hosts 配置文件里构造 IP 与 hostName 映射关系，如类似 “10.10.11.205 10-10-11-205”
- 需保证 Master 所有节点之间的时钟同步


### 2.2 Master 的前台配置文件 velocity.properties 中关键配置内容说明：

| 配置项 | 是否必选 | 值类型 | 配置说明                                                                                                       |
| --- | --- | --- |------------------------------------------------------------------------------------------------------------|
| file.resource.loader.path | 是 | String | Master 的 Web 的模板绝对路径，该部分为实际部署 Master 时的工程绝对路径 + /resources/templates，该配置要与实际部署相吻合，配置失败会导致 Master 前端页面访问失败。 |


### 2.3 broker.ini 文件中关键配置内容说明：
[broker]
> Broker 系统运行主配置单元，必填单元，值固定为 &quot;[broker]&quot;

| 配置项 | 是否必选 | 值类型     | 配置说明                                                                                                                              |
| --- |------|---------|-----------------------------------------------------------------------------------------------------------------------------------|
| brokerId | 是    | int     | 服务器唯一标志，必填字段，可设为 0；设为 0 时系统将默认取本机 IP 转化为 int 值再取 abs 绝对值，避免 brokerId 为负数，如果使用环境的 IP 比较复杂存在生成的 brokerId 值冲突时，则需要指定 brokerId 值进行设置。 |
| hostName | 是    | String  | Broker 对外服务的主机地址，必填项，必须在网卡中已配置，处于启用状态，非回环且不能为 127.0.0.1 的 IP                                                                      |
| port | 否    | int     | Broker 监听的端口，可选项，缺省值为 8123                                                                                                        |
| webPort | 否    | int     | Broker 的 http 管理访问端口,可选项,缺省为 8081                                                                                                 |
| masterAddressList | 是    | String  | Broker 所属集群的 Master 地址列表，必填字段，格式必须是 ip1:port1,ip2:port2,ip3:port3                                                                 |
| primaryPath | 是    | String  | Broker 存储消息的绝对路径，必选字段                                                                                                             |
| maxSegmentSize | 否    | int     | Broker 存储消息 Data 内容的文件大小，可选字段，缺省 512M，最大 1G                                                                                       |
| maxIndexSegmentSize | 否    | int     | Broker 存储消息 Index 内容的文件大小，可选字段，缺省 18M，约 70W 条消息每文件                                                                                |
| transferSize | 否    | int     | Broker 允许每次传输给客户端的最大消息内容大小，可选字段，缺省为 512K                                                                                          |
| consumerRegTimeoutMs | 否    | long    | consumer 心跳超时时间，可选项，单位毫秒，默认 30 秒                                                                                                  |
| socketRecvBuffer | 否    | long    | Socket 接收 Buffer 缓冲区 SO\_RCVBUF 大小,单位字节,负数为不做设置以缺省值为准                                                                             |
| socketSendBuffer | 否    | long    | Socket 发送 Buffer 缓冲区 SO\_SNDBUF 大小,单位字节,负数为不做设置以缺省值为准                                                                             |
| tcpWriteServiceThread | 否    | int     | Broker 支持 TCP 生产服务的 socket worker 线程数，可选字段，缺省为所在机器的 2 倍 CPU 个数                                                                    |
| tcpReadServiceThread | 否    | int     | Broker 支持 TCP 消费服务的 socket worker 线程数，可选字段，缺省为所在机器的 2 倍 CPU 个数                                                                    |
| logClearupDurationMs | 否    | long    | 消息文件的老化清理周期, 单位为毫秒, 缺省为 3 分钟进行一次日志清理操作,最低 1 分钟                                                                                    |
| logFlushDiskDurMs | 否    | long    | 批量检查消息持久化到文件的检查周期,单位为毫秒, 缺省为 20 秒进行一次全量的检查及刷盘                                                                                     |
| visitTokenCheckInValidTimeMs | 否    | long    | visitToken 检查时允许 Broker 注册后延迟检查的时长，单位 ms,缺省 120000，取值范围 [60000，300000]                                                            |
| visitMasterAuth | 否    | boolean | 是否启用上报 Master 鉴权，缺省为 false，如果为 true，则会在上报 Master 的信令里加入用户名及签名信息                                                                   |
| visitName | 否    | String  | 访问 Master 的用户名，缺省为空字符串，在 visitMasterAuth 为 true 时该值必须存在，该值必须与 master.ini 里的 visitName 字段值同                                        |
| visitPassword | 否    | String  | 访问 Master 的密码，缺省为空字符串，在 visitMasterAuth 为 true 时该值必须存在，该值必须与 master.ini 里的 visitPassword 字段值同                                     |
| logFlushMemDurMs | 否    | long    | 批量检查消息内存持久化到文件的检查周期,单位为毫秒, 缺省为 10 秒进行一次全量的检查及刷盘                                                                                   |
| enableWriteOffset2Zk | 否    | boolean    | 是否将消费组 Offset 记录同时写 ZooKeeper，缺省 false，不写入                                                                                        |
| offsetStgFilePath | 否    | String    | 消费组 Offset 记录的文件保存路径，缺省为 primaryPath 目录下                                                                                          |
| grpOffsetStgExpMs | 否    | long    | 未更新的消费组 Offset 记录在文件里的保存周期，单位 ms， 缺省值为 20 天（20 * 24 * 60 * 60 * 1000）                                                             |
| offsetStgCacheFlushMs | 否    | long    | 消费组 Offset 记录更新到缓存的周期，单位 ms， 缺省值为 5000ms                                                                                          |
| offsetStgFileSyncMs | 否    | long    | 消费组 Offset 记录从缓存同步到文件的周期，单位 ms， 缺省值为 offsetStgCacheFlushMs + 1000ms                                                               |
| offsetStgSyncDurWarnMs | 否    | long    | 消费组 Offset 记录从缓存同步到文件时间超长告警值，单位 ms， 缺省值为 20000ms                                                                                  |


[tlsSetting]
> Broker 启用 TLS 时通过该配置单元提供相关的设置，可选单元，值固定为 &quot;[tlsSetting]&quot;

| 配置项 | 是否必选 | 值类型 | 配置说明                                                                                      |
|-----| --- | --- |-------------------------------------------------------------------------------------------|
| tlsEnable | 否    | boolean | 是否启用 TLS 功能，可选配置，缺省为 false                                                                |
| tlsPort | 否    | int     | Broker 的 TLS 端口号，可选配置，缺省为 8124                                                            |
| tlsKeyStorePath | 否    | String  | TLS 的 keyStore 文件的绝对存储路径 + keyStore 文件名，在启动 TLS 功能时，该字段必填且不能为空                            |
| tlsKeyStorePassword | 否    | String  | TLS 的 keyStorePassword 文件的绝对存储路径 + keyStorePassword 文件名，在启动 TLS 功能时，该字段必填且不能为空            |
| tlsTwoWayAuthEnable | 否    | boolean | 是否启用 TLS 双向认证功能，可选配置，缺省为 false                                                            |
| tlsTrustStorePath | 否    | String  | TLS 的 TrustStore 文件的绝对存储路径 + TrustStore 文件名，在启动 TLS 功能且启用双向认证时，该字段必填且不能为空                 |
| tlsTrustStorePassword | 否    | String  | TLS 的 TrustStorePassword 文件的绝对存储路径 + TrustStorePassword 文件名，在启动 TLS 功能且启用双向认证时，该字段必填且不能为空 |

[audit]
> Broker 使用审计模块来报告数据设置单元，启用审计时，配置单元提供相关设置，该可选配置单位有一个固定值 &quot; [audit] &quot;

| 配置项 | 是否必选 | 值类型 | 配置说明                                                                           |
|-----|------| --- |--------------------------------------------------------------------------------|
| auditEnable | 否    | boolean | 是否启用审计上报功能，可选配置，缺省为 false                                                      |
| auditProxyAddr | 否  | String | 审计上报地址，格式必须是 &quot; ip1:port1,ip2:port2,ip3:port3 &quot;, 缺省值为 127.0.0.1:10081 |
| auditCacheFilePath | 否  | String  | 审计上报数据的缓存文件路径，缺省为 &quot; /data/inlong/audit &quot;                             |
| auditCacheMaxRows | 否   | int  | 最大审计缓存的数据条数，缺省为 2000000 条                                                      |
| auditIdProduce | 否    | int    | 上报生产数据的审计 ID，缺省值为 9                                                            |
| auditIdConsume | 否    | int    | 上报消费数据的审计 ID，缺省值为 10                                                           |

[prometheus]
> Broker 使用 prometheus 提供指标数据查询时的相关配置单元设置，可选配置单元集合 &quot; [prometheus] &quot; 

| 配置项 | 是否必选 | 值类型     | 配置说明                                                    |
|-----|------|---------|---------------------------------------------------------|
| promEnable | 否    | boolean | 是否启用 prometheus 服务，可选配置，缺省为 false                       |
| promClusterName | 否 | String  | 启用 prometheus 服务时 服务节点所属于的集群名，缺省值为 &quot; InLong &quot; |
| promHttpPort | 否    | int   | 启用 prometheus 服务时的侦听端口，可选配置，缺省值为 9081                   |

---
<a href="#top">Back to top</a>
