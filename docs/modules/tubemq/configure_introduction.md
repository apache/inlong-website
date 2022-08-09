---
title: Configuration
---

## 1 TubeMQ configuration item description

The TubeMQ server includes two modules for the Master and the Broker. The Master also includes a Web front-end module for external page access (this part is stored in the resources). Considering the actual deployment, two modules are often deployed in the same machine, TubeMQ. The contents of the three parts of the two modules are packaged and delivered to the operation and maintenance; the client does not include the lib package of the server part and is delivered to the user separately.

Master and Broker use the ini configuration file format, and the relevant configuration files are placed in the master.ini and broker.ini files in the tubemq-server-x.y.z/conf/ directory:
![](img/configure/conf_ini_pos.png)

Their configuration is defined by a set of configuration units. The Master configuration consists of four mandatory units: [master], required but optional in [meta_zookeeper], [meta_bdb], and optional [tlsSetting]. The Broker configuration is mandatory. Broker], [zookeeper] and optional [tlsSetting] consist of a total of 3 configuration units; in actual use, you can also combine the contents of the two configuration files into one ini file.

**Note**:
- Due to the LICENSE problem of the Apache dependency package, the package released by TubeMQ from version 1.1.0 no longer contains the BDB package;
- Starting from version 1.1.0, the metadata is stored in ZooKeeper by default, and BDB is optionally supported. In version 1.1.0, the master.ini configuration file needs to be manually set, and the [meta_bdb] configuration unit can be added to support BDB storage.
- If the business uses the BDB component, you need to download the com.sleepycat.je-7.3.7.jar package by yourself, otherwise the system will report the error "java.lang.ClassNotFoundException: com.sleepycat.je.ReplicaConsistencyPolicy";

In addition to the back-end system configuration file, the Master also stores the Web front-end page module in the resources. The root directory velocity.properties file of the resources is the Web front-end page configuration file of the Master.
![](img/configure/conf_velocity_pos.png)


## 2 Configuration item details:

### 2.1 master.ini file:
[master]
> Master system runs the main configuration unit, required unit, the value is fixed to "[master]"

| Name                          | Required                          | Type                          | Description                                                  |
| ----------------------------- |  ----------------------------- |  ----------------------------- | ------------------------------------------------------------ |
| hostName                      | yes      | string  | The host address of the master external service, required, must be configured on the NIC, is enabled, non-loopback and cannot be IP of 127.0.0.1 |
| port                          | no       | int     | Master listening port, optional, default is 8715             |
| webPort                       | no       | int     | Master web console access port, the default value is 8080    |
| webResourcePath               | yes      | string  | Master Web Resource deploys an absolute path, which is required. If the value is set incorrectly, the web page will not display properly. |
| confModAuthToken              | no       | string  | The authorization Token provided by the operator when the change operation (including adding, deleting, changing configuration, and changing the master and managed Broker status) is performed by the Master's Web or API. The value is optional. The default is "ASDFGHJKL". |
| firstBalanceDelayAfterStartMs | no       | long    | Master starts to the interval of the first time to start Rebalance, optional, default 30000 milliseconds |
| consumerBalancePeriodMs       | no       | long    | The master balances the rebalance period of the consumer group. The default is 60000 milliseconds. When the cluster size is large, increase the value. |
| consumerHeartbeatTimeoutMs    | no       | long    | Consumer heartbeat timeout period, optional, default 30000 milliseconds, when the cluster size is large, please increase the value |
| producerHeartbeatTimeoutMs    | no       | long    | Producer heartbeat timeout period, optional, default 30000 milliseconds, when the cluster size is large, please increase the value |
| brokerHeartbeatTimeoutMs      | no       | long    | Broker heartbeat timeout period, optional, default 30000 milliseconds, when the cluster size is large, please increase the value |
| rebalanceParallel      | no       | int    | Master rebalance parallelism, optional, default 4, the value range of this field is [1, 20], when the cluster size is large, please increase the value |
| socketRecvBuffer              | no       | long    | Socket receives the size of the Buffer buffer SO_RCVBUF, the unit byte, the negative number is set as the default value |
| socketSendBuffer              | no       | long    | Socket sends Buffer buffer SO_SNDBUF size, unit byte, negative number is  set as the default value |
| maxAutoForbiddenCnt           | no       | int     | When the broker has an IO failure, the maximum number of masters allowed to automatically go offline is the number of options. The default value is 5. It is recommended that the value does not exceed 10% of the total number of brokers in the cluster. |
| startOffsetResetCheck         | no       | boolean | Whether to enable the check function of the client Offset reset function, optional, the default is false |
| needBrokerVisitAuth           | no       | boolean | Whether to enable Broker access authentication, the default is false. If true, the message reported by the broker must carry the correct username and signature information. |
| visitName                     | no       | string  | The username of the Broker access authentication. The default is an empty string. This value must exist when needBrokerVisitAuth is true. This value must be the same as the value of the visitName field in broker.ini. |
| visitPassword                 | no       | string  | The password for the Broker access authentication. The default is an empty string. This value must exist when needBrokerVisitAuth is true. This value must be the same as the value of the visitPassword field in broker.ini. |
| startVisitTokenCheck      | no       | boolean | Whether to enable client visitToken check, the default is false |
| startProduceAuthenticate      | no       | boolean | Whether to enable production end user authentication, the default is false |
| startProduceAuthorize         | no       | boolean | Whether to enable production-side production authorization authentication, the default is false |
| startConsumeAuthenticate      | no       | boolean | Whether to enable consumer user authentication, the default is false |
| startConsumeAuthorize         | no       | boolean | Whether to enable consumer consumption authorization authentication, the default is false |
| maxGroupBrokerConsumeRate     | no       | int     | The maximum ratio of the number of clustered brokers to the number of members in the consumer group. The default is 50. In a 50-kerrow cluster, one consumer group is allowed to start at least one client. |

[meta_zookeeper]
>Replication configuration for metadata storage replication and multi-node hot standby between Masters. The required unit has a fixed value of "[meta_zookeeper]"，this part and [meta_bdb] can choose one.

| Name                  | Required                          | Type                          | Description                                                                                                                                                                                                         |
| --------------------- |  -----------------------------|  ----------------------------- |---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| zkServerAddr          | no       | string | Zk server address, optional configuration, defaults to "localhost:2181"                                                                                                                                             |
| zkNodeRoot            | no       | string | The root path of the node on zk, optional configuration. The default is "/tube".                                                                                                                                    |
| zkSessionTimeoutMs    | no       | long   | Zk heartbeat timeout, in milliseconds, default 30 seconds                                                                                                                                                           |
| zkConnectionTimeoutMs | no       | long   | Zk connection timeout, in milliseconds, default 30 seconds                                                                                                                                                          |
| zkSyncTimeMs          | no       | long   | Zk data synchronization time, in milliseconds, default 5 seconds                                                                                                                                                    |
| zkCommitPeriodMs      | no       | long   | The interval at which the Master cache data is flushed to zk, in milliseconds, default 5 seconds.                                                                                                                   |
| zkMasterCheckPeriodMs | no       | long   | The time interval for the node to check whether it is the Master role, in milliseconds, the default is 5 seconds. |

[meta_bdb]
>Replication configuration for metadata storage replication and multi-node hot standby between Masters. The required unit has a fixed value of "[meta_bdb]"，this part and [meta_zookeeper] can choose one.

| Name                    | Required                          | Type                          | Description                                                  |
| ----------------------- |  ----------------------------- |  ----------------------------- | ------------------------------------------------------------ |
| repGroupName            | no       | string | Cluster name, the primary and backup master node values must be the same. Optional field, default is "tubemqMasterGroup". |
| repNodeName             | yes      | string | The name of the master node in the cluster. The value of each node MUST BE DIFFERENT. Required field. |
| metaDataPath            | no       | string  | Metadata storage path. Absolute, or relative to TubeMQ base directory (`$BASE_DIR`). Optional field, default is "var/meta_data". |
| repNodePort             | no       | int    | Node communication port, optional field, default is 9001. |
| repHelperHost           | no       | string | Primary node when the master cluster starts, optional field, default is "127.0.0.1:9001". |
| metaLocalSyncPolicy     | no       | int    | Replication data node local storage mode, the value range of this field is [1, 2, 3]. The default is 1: 1 is data saved to disk, 2 is data only saved to memory, and 3 is only data is written to file system buffer without flush. |
| metaReplicaSyncPolicy   | no       | int    | Replication data node synchronization save mode, the value range of this field is [1, 2, 3]. The default is 1: 1 is data saved to disk, 2 is data only saved to memory, and 3 is only data is written to file system buffer without flush. |
| repReplicaAckPolicy     | no       | int    | The response policy of the replication node data synchronization, the value range of this field is [1, 2, 3], the default is 1: 1 is more than 1/2 majority is valid, 2 is valid for all nodes, 3 is not Need node response. |
| repStatusCheckTimeoutMs | no       | long   | Replication status check interval, optional field, in milliseconds, defaults to 10 seconds. |

[prometheus]
> Master uses Prometheus to provide querying metric data, optional

| Name | Required | Type    | Description                                                                    |
|-----|------|---------|--------------------------------------------------------------------------------|
| promEnable | no  | boolean | whether to enable prometheus service, optional configuration, default is false |
| promClusterName | no | String  | cluster name which the node belong to, default is &quot; InLong &quot; |
| promHttpPort | no  | int   | port that prometheus listens to, optional, default is 9081                     |


**Notice**:
- Based on the need of Docker containerization, the [meta_bdb] above 3 parameters in the master.ini file are all the default settings used, and the actual information of the Master node needs to be configured when used in actual networking.
- The IP information of all master nodes should be mapped to the hostName in the hosts configuration file, such as "10.10.11.205 10-10-11-205"
- It is necessary to ensure the clock synchronization between all master nodes


- [tlsSetting]
>The Master uses TLS to encrypt the transport layer data. When TLS is enabled, the configuration unit provides related settings. The optional unit has a fixed value of "[tlsSetting]".

| Name                  | Required                          | Type                          | Description                                                  |
| --------------------- |  -----------------------------|  ----------------------------- | ------------------------------------------------------------ |
| tlsEnable             | no       | boolean | Whether to enable TLS function, optional configuration, default is false |
| tlsPort               | no       | int     | Master TLS port number, optional configuration, default is 8716 |
| tlsKeyStorePath       | no       | string  | The absolute storage path of the TLS keyStore file + the name of the keyStore file. This field is required and cannot be empty when the TLS function is enabled. |
| tlsKeyStorePassword   | no       | string  | The absolute storage path of the TLS keyStorePassword file + the name of the keyStorePassword file. This field is required and cannot be empty when the TLS function is enabled. |
| tlsTwoWayAuthEnable   | no       | boolean | Whether to enable TLS mutual authentication, optional configuration, the default is false |
| tlsTrustStorePath     | no       | string  | The absolute storage path of the TLS TrustStore file + the TrustStore file name. This field is required and cannot be empty when the TLS function is enabled and mutual authentication is enabled. |
| tlsTrustStorePassword | no       | string  | The absolute storage path of the TLS TrustStorePassword file + the TrustStorePassword file name. This field is required and cannot be empty when the TLS function is enabled and mutual authentication is enabled. |

### 2.2 velocity.properties file:

| Name                      | Required                          | Type                          | Description                                                  |
| ------------------------- |  ----------------------------- |  ----------------------------- | ------------------------------------------------------------ |
| file.resource.loader.path | yes      | string | The absolute path of the master web template. This part is the absolute path plus /resources/templates of the project when the master is deployed. The configuration is consistent with the actual deployment. If the configuration fails, the master front page access fails. |

### 2.3 broker.ini file:

[broker]
>The broker system runs the main configuration unit, required unit, and the value is fixed to "[broker]"

| Name                  | Required                          | Type                          | Description                                                  |
| --------------------- |  ----------------------------- |  ----------------------------- | ------------------------------------------------------------ |
| brokerId              | yes      | int     | Server unique flag, required field, can be set to 0; when set to 0, the system will default to take the local IP to int value |
| hostName              | yes      | string  | The host address of the broker external service, required, must be configured in the NIC, is enabled, non-loopback and cannot be IP of 127.0.0.1 |
| port                  | no       | int     | Broker listening port, optional, default is 8123             |
| webPort               | no       | int     | Broker's http management access port, optional, default is 8081 |
| masterAddressList     | yes      | string  | Master address list of the cluster to which the broker belongs. Required fields. The format must be ip1:port1, ip2:port2, ip3:port3. |
| primaryPath           | yes      | string  | Broker stores the absolute path of the message, mandatory field |
| maxSegmentSize        | no       | int     | Broker stores the file size of the message data content, optional field, default 512M, maximum 1G |
| maxIndexSegmentSize   | no       | int     | Broker stores the file size of the message Index content, optional field, default 18M, about 70W messages per file |
| transferSize          | no       | int     | Broker allows the maximum message content size to be transmitted to the client each time, optional field, default is 512K |
| consumerRegTimeoutMs  | no       | long    | Consumer heartbeat timeout, optional, in milliseconds, default 30 seconds |
| socketRecvBuffer      | no       | long    | Socket receives the size of the Buffer buffer SO_RCVBUF, the unit byte, the negative number is not set, the default value is |
| socketSendBuffer      | no       | long    | Socket sends Buffer buffer SO_SNDBUF size, unit byte, negative number is not set, the default value is |
| tcpWriteServiceThread | no       | int     | Broker supports the number of socket worker threads for TCP production services, optional fields, and defaults to 2 times the number of CPUs of the machine. |
| tcpReadServiceThread  | no       | int     | Broker supports the number of socket worker threads for TCP consumer services, optional fields, defaults to 2 times the number of CPUs of the machine |
| logClearupDurationMs  | no       | long    | The aging cleanup period of the message file, in milliseconds. The default is 3 minutes for a log cleanup operation. The minimum is 1 minutes. |
| logFlushDiskDurMs     | no       | long    | Batch check message persistence to file check cycle, in milliseconds, default is 20 seconds for a full check and brush |
| visitTokenCheckInValidTimeMs       | no       | long | The length of the delay check for the visitToken check since the Broker is registered, in ms, the default is 120000, the value range [60000, 300000]. |
| visitMasterAuth       | no       | boolean | Whether the authentication of the master is enabled, the default is false. If true, the user name and signature information are added to the signaling reported to the master. |
| visitName             | no       | string  | User name of the access master. The default is an empty string. This value must exist when visitMasterAuth is true. The value must be the same as the value of the visitName field in master.ini. |
| visitPassword         | no       | string  | The password for accessing the master. The default is an empty string. This value must exist when visitMasterAuth is true. The value must be the same as the value of the visitPassword field in master.ini. |
| logFlushMemDurMs      | no       | long    | Batch check message memory persistence to file check cycle, in milliseconds, default is 10 seconds for a full check and brush |

[zookeeper]
>The Tube MQ cluster corresponding to the Broker stores the information about the ZooKeeper cluster of the Offset. The required unit has a fixed value of "[zookeeper]".


| Name                  | Required                          | Type                          | Description                                                  |
| --------------------- |  ----------------------------- |  ----------------------------- | ------------------------------------------------------------ |
| zkServerAddr          | no       | string | Zk server address, optional configuration, defaults to "localhost:2181" |
| zkNodeRoot            | no       | string | The root path of the node on zk, optional configuration. The default is "/tube". |
| zkSessionTimeoutMs    | no       | long   | Zk heartbeat timeout, in milliseconds, default 30 seconds    |
| zkConnectionTimeoutMs | no       | long   | Zk connection timeout, in milliseconds, default 30 seconds   |
| zkSyncTimeMs          | no       | long   | Zk data synchronization time, in milliseconds, default 5 seconds |
| zkCommitPeriodMs      | no       | long   | The interval at which the broker cache data is flushed to zk, in milliseconds, default 5 seconds |
| zkCommitFailRetries   | no       | int    | The maximum number of re-brushings after Broker fails to flush cached data to Zk |

[tlsSetting]
>The Master uses TLS to encrypt the transport layer data. When TLS is enabled, the configuration unit provides related settings. The optional unit has a fixed value of "[tlsSetting]".


| Name                  | Required                          | Type                           | Description                                                  |
| --------------------- |  ----------------------------- |  ----------------------------- | ------------------------------------------------------------ |
| tlsEnable             | no       | boolean | Whether to enable TLS function, optional configuration, default is false |
| tlsPort               | no       | int     | Broker TLS port number, optional configuration, default is 8124 |
| tlsKeyStorePath       | no       | string  | The absolute storage path of the TLS keyStore file + the name of the keyStore file. This field is required and cannot be empty when the TLS function is enabled. |
| tlsKeyStorePassword   | no       | string  | The absolute storage path of the TLS keyStorePassword file + the name of the keyStorePassword file. This field is required and cannot be empty when the TLS function is enabled. |
| tlsTwoWayAuthEnable   | no       | boolean | Whether to enable TLS mutual authentication, optional configuration, the default is false |
| tlsTrustStorePath     | no       | string  | The absolute storage path of the TLS TrustStore file + the TrustStore file name. This field is required and cannot be empty when the TLS function is enabled and mutual authentication is enabled. |
| tlsTrustStorePassword | no       | string  | The absolute storage path of the TLS TrustStorePassword file + the TrustStorePassword file name. This field is required and cannot be empty when the TLS function is enabled and mutual authentication is enabled. |

[audit]
>The Broker uses audit module to report data. When audit is enabled, the configuration unit provides related settings. The optional unit has a fixed value of "[audit]".

| Name                 | Required | Type    | Description                                                                             |
|----------------------|----------|---------|-----------------------------------------------------------------------------------------|
| auditEnable          | no       | boolean | Whether to enable audit report function, optional configuration, default is false       |
| auditProxyAddr       | no      | string  | Audit server address list, the format must be ip1:port1, ip2:port2, ip3:port3; default is 127.0.0.1:10081         |
| auditCacheFilePath   | no       | string  | The absolute file path for audit cache data. the default value is "/data/inlong/audit". |
| auditCacheMaxRows    | no       | int     | The max cache records for audit cache， the default value is 200000 records              |
| auditIdProduce       | no       | int     | The audit id value for production, the default value is 9                               |
| auditIdConsume       | no       | int     | The audit id value for production, the default value is 10.                             |

[prometheus]
> Broker uses Prometheus to provide querying metric data, optional

| Name | Required | Type    | Description                                                                    |
|-----|------|---------|--------------------------------------------------------------------------------|
| promEnable | no  | boolean | whether to enable prometheus service, optional configuration, default is false |
| promClusterName | no | String  | cluster name which the node belong to, default is &quot; InLong &quot; |
| promHttpPort | no  | int   | port that prometheus listens to, optional, default is 9081                     |


---
<a href="#top">Back to top</a>