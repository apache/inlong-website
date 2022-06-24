---
title: InLong v1.1.0
---

Use the links below to download the Apache InLong from one of our mirrors.

## 1.1.0 release

|     Date     | Version| Comment |                                                                                                                                                                                            Downloads                                                                                                                                                                                                    |
|:------------:| :----: |:-------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Apr 24, 2022 | 1.1.0 | Source  | [[SRC](https://archive.apache.org/dist/incubator/inlong/1.1.0-incubating/apache-inlong-1.1.0-incubating-src.tar.gz)]                 [[ASC](https://archive.apache.org/dist/incubator/inlong/1.1.0-incubating/apache-inlong-1.1.0-incubating-src.tar.gz.asc)]             [[SHA512](https://archive.apache.org/dist/incubator/inlong/1.1.0-incubating/apache-inlong-1.1.0-incubating-src.tar.gz.sha512)] |
| Apr 24, 2022 | 1.1.0 | Binary  | [[BIN](https://archive.apache.org/dist/incubator/inlong/1.1.0-incubating/apache-inlong-1.1.0-incubating-bin.tar.gz)]                 [[ASC](https://archive.apache.org/dist/incubator/inlong/1.1.0-incubating/apache-inlong-1.1.0-incubating-bin.tar.gz.asc)]             [[SHA512](https://archive.apache.org/dist/incubator/inlong/1.1.0-incubating/apache-inlong-1.1.0-incubating-bin.tar.gz.sha512)] |

### Release Integrity

You must [verify](https://www.apache.org/info/verification.html) the integrity of the downloaded files.
We provide OpenPGP signatures for every release file. This signature should be matched against the [KEYS](https://downloads.apache.org/incubator/inlong/KEYS) file which contains the OpenPGP keys of InLong's Release Managers.
We also provide <code>SHA-512</code> checksums for every release file. After you download the file, you should calculate a checksum for your download, and make sure it is the same as ours.

## Release Notes

### Agent
| ISSUE                                                                 | Summary                                                                                      |
|:----------------------------------------------------------------------|:---------------------------------------------------------------------------------------------|
| [INLONG-3699](https://github.com/apache/incubator-inlong/issues/3699) | [Improve][Agent] Exclude mysql-connector-java                                                |
| [INLONG-3692](https://github.com/apache/incubator-inlong/issues/3692) | [Bug][Agent] There are many agent processes after recovering the directory                   |
| [INLONG-3652](https://github.com/apache/incubator-inlong/issues/3652) | [Improve][Agent] Improve TestBinlogOffsetManager unit test                                   |
| [INLONG-3650](https://github.com/apache/incubator-inlong/issues/3650) | [Bug] Agent fix timeoffset npe                                                               |
| [INLONG-3638](https://github.com/apache/incubator-inlong/issues/3638) | [Bug] Agent and DataProxy can not listen to the 8080 port for Prometheus                     |
| [INLONG-3629](https://github.com/apache/incubator-inlong/issues/3629) | [Improve][Agent] Improve TestFileAgent unit test                                             |
| [INLONG-3620](https://github.com/apache/incubator-inlong/issues/3620) | [Improve] Update the file agent guide document                                               |
| [INLONG-3587](https://github.com/apache/incubator-inlong/issues/3587) | [Bug][Agent]Resource leak                                                                    |
| [INLONG-3476](https://github.com/apache/incubator-inlong/issues/3476) | [Bug][Agent] debezium 1.8.1 has npe                                                          |
| [INLONG-3466](https://github.com/apache/incubator-inlong/issues/3466) | [Feature][Agent] Remove protobuf dependency                                                  |
| [INLONG-3463](https://github.com/apache/incubator-inlong/issues/3463) | [Bug][Agent] Fix unit test of TestTaskWrapper                                                |
| [INLONG-3448](https://github.com/apache/incubator-inlong/issues/3448) | [Improve][Manager] Limit the number of Agent pull tasks                                      |
| [INLONG-3437](https://github.com/apache/incubator-inlong/issues/3437) | [Agent] Sort out the LICENSEs of the third-party components of inlong-agent                  |
| [INLONG-3381](https://github.com/apache/incubator-inlong/issues/3381) | [Feature] Agent wait one minute for dataproxy to prepare topic config                        |
| [INLONG-3349](https://github.com/apache/incubator-inlong/issues/3349) | [Feature] Agent add limitation for job number                                                |
| [INLONG-3335](https://github.com/apache/incubator-inlong/issues/3335) | [Bug] fix agent snapshot mode won't work and optimize jvm parameters                         |
| [INLONG-3326](https://github.com/apache/incubator-inlong/issues/3326) | [Improve][Agent] The unit test for TestTaskWrapper was running too long                      |
| [INLONG-3317](https://github.com/apache/incubator-inlong/issues/3317) | [Improve][Agent] Change agent heartbeat/report interval to 10s                               |
| [INLONG-3308](https://github.com/apache/incubator-inlong/issues/3308) | [Bug][Agent] NPE occurred in parsing deliveryTime                                            |
| [INLONG-3306](https://github.com/apache/incubator-inlong/issues/3306) | [Feature][Agent] Use rocksdb as default db in agent                                          |
| [INLONG-3304](https://github.com/apache/incubator-inlong/issues/3304) | [Bug][Agent] Reader cost too much CPU                                                        |
| [INLONG-3299](https://github.com/apache/incubator-inlong/issues/3299) | [Bug][Agent] Report job result rather than task result                                       |
| [INLONG-3298](https://github.com/apache/incubator-inlong/issues/3298) | [Feature][Agent] Remove dbd implementation                                                   |
| [INLONG-3297](https://github.com/apache/incubator-inlong/issues/3297) | [Feature] Add version control in Agent CommandEntity                                         |
| [INLONG-3274](https://github.com/apache/incubator-inlong/issues/3274) | [Bug][Agent] When Kafka topic is deleted                                                     |
| [INLONG-3271](https://github.com/apache/incubator-inlong/issues/3271) | [Bug][Agent] Cannot get localip in docker.sh                                                 |
| [INLONG-3168](https://github.com/apache/incubator-inlong/issues/3168) | [Bug][Agent] Change the deserialization type from String to byte array                       |
| [INLONG-3148](https://github.com/apache/incubator-inlong/issues/3148) | [Bug][Agent] fix avro serialization                                                          |
| [INLONG-3104](https://github.com/apache/incubator-inlong/issues/3104) | [Bug][Agent] Add default value for kafka consumer group                                      |
| [INLONG-3100](https://github.com/apache/incubator-inlong/issues/3100) | [Bug][Agent] Upgrade Kafka to newest version 3.1.0                                           |
| [INLONG-3099](https://github.com/apache/incubator-inlong/issues/3099) | [Bug][Agent] Duplicate send message when agent receive data                                  |
| [INLONG-3083](https://github.com/apache/incubator-inlong/issues/3083) | [Bug][Agent] Upgrade Scala version in Kafka client                                           |
| [INLONG-3077](https://github.com/apache/incubator-inlong/issues/3077) | [Bug][Agent] FileNotFoundException occurred in unit tests                                    |
| [INLONG-3076](https://github.com/apache/incubator-inlong/issues/3076) | [Bug][Agent] MalformedObjectNameException occurred in unit tests                             |
| [INLONG-3050](https://github.com/apache/incubator-inlong/issues/3050) | [Bug][Agent] Update guava version                                                            |
| [INLONG-3045](https://github.com/apache/incubator-inlong/issues/3045) | [Feature][Agent] Add rocksDb implementation                                                  |
| [INLONG-3027](https://github.com/apache/incubator-inlong/issues/3027) | [Feature][Agent] Upgrade snappy version                                                      |
| [INLONG-3022](https://github.com/apache/incubator-inlong/issues/3022) | [Bug] agent pod start failed                                                                 |
| [INLONG-2985](https://github.com/apache/incubator-inlong/issues/2985) | [Bug][Manager] Fix task type and UTF question for agent                                      |
| [INLONG-2974](https://github.com/apache/incubator-inlong/issues/2974) | [Improve][Manager] Support agent to pull tasks without ip and uuid                           |
| [INLONG-2933](https://github.com/apache/incubator-inlong/issues/2933) | [Bug][Agent][Manager] Change the type of the deliveryTime field from Date to String          |
| [INLONG-2908](https://github.com/apache/incubator-inlong/issues/2908) | [Bug][Agent] Delete uuid around space                                                        |
| [INLONG-2894](https://github.com/apache/incubator-inlong/issues/2894) | [Improve][Agent] Adapt the interface and field modification of the Inlong-Manager            |
| [INLONG-2883](https://github.com/apache/incubator-inlong/issues/2883) | [Bug][Agent] ManagerFetcher throws exception when invoke the Gson.fromJson method            |
| [INLONG-2877](https://github.com/apache/incubator-inlong/issues/2877) | [Bug][Agent] Task position manager throws NPE when send dataproxy ack success                |
| [INLONG-2870](https://github.com/apache/incubator-inlong/issues/2870) | [Bug][Agent] Use base64 to encode snapshot instead of using iso-8859-1                       |
| [INLONG-2860](https://github.com/apache/incubator-inlong/issues/2860) | [Feature][Agent] Create file folder when history file set by user does not exist             |
| [INLONG-2859](https://github.com/apache/incubator-inlong/issues/2859) | [Improve][Agent]  Optimize stopping Kafka tasks                                              |
| [INLONG-2857](https://github.com/apache/incubator-inlong/issues/2857) | [Feature][Agent] Support to destroy task                                                     |
| [INLONG-2851](https://github.com/apache/incubator-inlong/issues/2851) | [Feature] Agent change task id string to integer                                             |
| [INLONG-2826](https://github.com/apache/incubator-inlong/issues/2826) | [Bug] Agent mysql connection should set allowPublicKeyRetrieval to true to support mysql 8.0 |
| [INLONG-2818](https://github.com/apache/incubator-inlong/issues/2818) | [Bug] Agent kafka job and binlog job has jar conflict                                        |
| [INLONG-2790](https://github.com/apache/incubator-inlong/issues/2790) | [Bug][Agent] Log4j cannot be output due to jar conflict                                      |
| [INLONG-2788](https://github.com/apache/incubator-inlong/issues/2788) | [Feature] Agent support sync send data to dataproxy when needed (binlog etc.)                |
| [INLONG-2786](https://github.com/apache/incubator-inlong/issues/2786) | [Feature] Agent jetty server support different job type                                      |
| [INLONG-2779](https://github.com/apache/incubator-inlong/issues/2779) | [Feature] Agent support delete job using jetty server                                        |
| [INLONG-2756](https://github.com/apache/incubator-inlong/issues/2756) | [Improve][Agent] Add more logs when sending data to proxy                                    |
| [INLONG-2754](https://github.com/apache/incubator-inlong/issues/2754) | [Feature][Agent] Add strea metric data to Prometheus and JMX                                 |
| [INLONG-2736](https://github.com/apache/incubator-inlong/issues/2736) | [Bug][Manager] Agent get task from manager error                                             |
| [INLONG-2735](https://github.com/apache/incubator-inlong/issues/2735) | [INLONG][Agent] Fix dataprofile properties                                                   |
| [INLONG-2688](https://github.com/apache/incubator-inlong/issues/2688) | [Feature][Agent] Support task freeze and restart when needed                                 |
| [INLONG-2687](https://github.com/apache/incubator-inlong/issues/2687) | [Feature][Agent] Provide binlog reader ability using debezium engine                         |
| [INLONG-2686](https://github.com/apache/incubator-inlong/issues/2686) | [Feature][Agent] Support snapshot for each task                                              |
| [INLONG-2680](https://github.com/apache/incubator-inlong/issues/2680) | [Improve][Common][Agent] Move common class from inlong-agent module to inlong-common         |
| [INLONG-2675](https://github.com/apache/incubator-inlong/issues/2675) | [Feature][Agent] Fix the problem of common dependcy                                          |
| [INLONG-2666](https://github.com/apache/incubator-inlong/issues/2666) | [Feature][Agent] Support kafka collection                                                    |
| [INLONG-2654](https://github.com/apache/incubator-inlong/issues/2654) | [Feature][Agent] Report heartbeat to manager                                                 |
| [INLONG-2530](https://github.com/apache/incubator-inlong/issues/2530) | [Bug] Agent data time never changes                                                          |
| [INLONG-2285](https://github.com/apache/incubator-inlong/issues/2285) | [Feature][Agent] Make berkeleydb-je an optional dependency of InLong-Agent                   |


### DataProxy
| ISSUE                                                                 | Summary                                                                                      |
|:----------------------------------------------------------------------|:---------------------------------------------------------------------------------------------|
| [INLONG-3638](https://github.com/apache/incubator-inlong/issues/3638) | [Bug] Agent and DataProxy can not listen to the 8080 port for Prometheus                     |
| [INLONG-3573](https://github.com/apache/incubator-inlong/issues/3573) | [Feature][Dataproxy][Audit]Tidy up dependencies between dataproxy                            |
| [INLONG-3520](https://github.com/apache/incubator-inlong/issues/3520) | [Improve][DataProxy] Unify the data directory                                                |
| [INLONG-3459](https://github.com/apache/incubator-inlong/issues/3459) | [Bug] DataProxy start error Due to IllegalArgumentException                                  |
| [INLONG-3436](https://github.com/apache/incubator-inlong/issues/3436) | [DataProxy] Sort out the LICENSEs of the third-party components of inlong-dataproxy          |
| [INLONG-3352](https://github.com/apache/incubator-inlong/issues/3352) | [Bug][Dataproxy]  Dataproxy keeps trying to send messages that have send failed              |
| [INLONG-3291](https://github.com/apache/incubator-inlong/issues/3291) | [Bug][Dataproxy] Default channel config for order message didn't work                        |
| [INLONG-3282](https://github.com/apache/incubator-inlong/issues/3282) | [Feature][DataProxy] Add default order message configuration                                 |
| [INLONG-3250](https://github.com/apache/incubator-inlong/issues/3250) | [Bug][DataProxy] Fix duration error of DataProxy metric                                      |
| [INLONG-3231](https://github.com/apache/incubator-inlong/issues/3231) | [Feature][DataProxy] Change the default topic to an optional configuration                   |
| [INLONG-3183](https://github.com/apache/incubator-inlong/issues/3183) | [Bug][Dataproxy] When creating a producer fails                                              |
| [INLONG-3181](https://github.com/apache/incubator-inlong/issues/3181) | [Improve][DataProxy] Optimizing unit tests and code style                                    |
| [INLONG-3161](https://github.com/apache/incubator-inlong/issues/3161) | [Bug][Dataproxy] When sending order messages, no response message is returned to client      |
| [INLONG-3136](https://github.com/apache/incubator-inlong/issues/3136) | [Feature] DataProxy get NOUPDATE"" configuration from Manager when request md5 is same       |"
| [INLONG-3080](https://github.com/apache/incubator-inlong/issues/3080) | [Bug][DataProxy] Fix dataproxy UT bug add mock of MetricRegister                             |
| [INLONG-3067](https://github.com/apache/incubator-inlong/issues/3067) | [Feature][DataProxy] Upgrading the documentation of using the default Pulsar configuration   |
| [INLONG-3060](https://github.com/apache/incubator-inlong/issues/3060) | [Feature][DataProxy] Use Pulsar configuration by default                                     |
| [INLONG-3058](https://github.com/apache/incubator-inlong/issues/3058) | [Feature][DataProxy] Add some configs while creating Pulsar producer                         |
| [INLONG-3047](https://github.com/apache/incubator-inlong/issues/3047) | [Bug][DataProxy] All common.properties configs are overwritten                               |
| [INLONG-3031](https://github.com/apache/incubator-inlong/issues/3031) | [Bug][Dataproxy] Repeated registration jmx metric bean                                       |
| [INLONG-2962](https://github.com/apache/incubator-inlong/issues/2962) | [Bug][UT] Unit tests throw so many error msg for DataProxy                                   |
| [INLONG-2961](https://github.com/apache/incubator-inlong/issues/2961) | [Improve][DataProxy] Check style error in DataProxy                                          |
| [INLONG-2906](https://github.com/apache/incubator-inlong/issues/2906) | [Improve] Fix conflict defined of mq in Dataproxy and Sort                                   |
| [INLONG-2812](https://github.com/apache/incubator-inlong/issues/2812) | [Improve][DataProxy] Modify flume conf and rename MetaSink                                   |
| [INLONG-2805](https://github.com/apache/incubator-inlong/issues/2805) | [Feature][DataProxy] Add stream config log report                                            |
| [INLONG-2802](https://github.com/apache/incubator-inlong/issues/2802) | [Bug][DataProxy] Update mx.properties local file too often                                   |
| [INLONG-2783](https://github.com/apache/incubator-inlong/issues/2783) | [Bug][DataProxy] Port conflict with pulsar port                                              |
| [INLONG-2781](https://github.com/apache/incubator-inlong/issues/2781) | [Feature][DataProxy] Update netty version to 4.x                                             |
| [INLONG-2719](https://github.com/apache/incubator-inlong/issues/2719) | [Bug][DataProxy] Setting multiple topics for the same groupId doesn't work for Pulsar        |
| [INLONG-2711](https://github.com/apache/incubator-inlong/issues/2711) | [Bug][SDK] Dataproxy-SDK get manager ip list error                                           |
| [INLONG-2607](https://github.com/apache/incubator-inlong/issues/2607) | [Feature][DataProxy] Supports prometheus metric report for PulsarSink                        |
| [INLONG-2568](https://github.com/apache/incubator-inlong/issues/2568) | [Feature][Dataproxy] Support dynamically getting TubeMq config from Manager                  |
| [INLONG-2491](https://github.com/apache/incubator-inlong/issues/2491) | [Feature][Dataproxy] update netty version to 4.1.72.Final and log4j to log4j2                |
| [INLONG-2381](https://github.com/apache/incubator-inlong/issues/2381) | [Feature] DataProxy support Tube sink of PB compression cache message protocol.              |
| [INLONG-2379](https://github.com/apache/incubator-inlong/issues/2379) | [Feature] DataProxy support Pulsar sink of PB compression cache message protocol.            |
| [INLONG-2377](https://github.com/apache/incubator-inlong/issues/2377) | [Feature] DataProxy support PB compression protocol format source.                           |


### Manager
| ISSUE                                                                 | Summary                                                                                                |
|:----------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------|
| [INLONG-3716](https://github.com/apache/incubator-inlong/issues/3716) | [Improve][Manager] Decrease the size of manager plugins                                                |
| [INLONG-3712](https://github.com/apache/incubator-inlong/issues/3712) | [Bug][Manager] validation-api dependency conflict                                                      |
| [INLONG-3710](https://github.com/apache/incubator-inlong/issues/3710) | [Bug][Manager] Update the import package for ObjectMapper                                              |
| [INLONG-3704](https://github.com/apache/incubator-inlong/issues/3704) | [Improve][Manager] change the log level for status report                                              |
| [INLONG-3701](https://github.com/apache/incubator-inlong/issues/3701) | [Improve][Manager] Decrease the size of manager client tools                                           |
| [INLONG-3697](https://github.com/apache/incubator-inlong/issues/3697) | [Improve][Manager]  Replenish manager client examples                                                  |
| [INLONG-3686](https://github.com/apache/incubator-inlong/issues/3686) | [Improve][Manager] Remove the check for the serialization type of file source                          |
| [INLONG-3683](https://github.com/apache/incubator-inlong/issues/3683) | [Improve] Add AUTO_PUSH source stream in Manager                                                       |
| [INLONG-3662](https://github.com/apache/incubator-inlong/issues/3662) | [Improve][Manager] Disable ZooKeeper by default and deserialize file source from stream info           |
| [INLONG-3652](https://github.com/apache/incubator-inlong/issues/3652) | [Improve][Agent] Improve TestBinlogOffsetManager unit test                                             |
| [INLONG-3647](https://github.com/apache/incubator-inlong/issues/3647) | [Bug] Manager caught Sniffer : error while sniffing nodes java.net.ConnectException                    |
| [INLONG-3642](https://github.com/apache/incubator-inlong/issues/3642) | [Improve][Manager] Update start script and log configuration                                           |
| [INLONG-3627](https://github.com/apache/incubator-inlong/issues/3627) | [Improve][Manager] Remove deprecated source_file related classes                                       |
| [INLONG-3603](https://github.com/apache/incubator-inlong/issues/3603) | [Improve][Manager] The serialization type cannot be empty for File source                              |
| [INLONG-3601](https://github.com/apache/incubator-inlong/issues/3601) | [Bug][Manager] Should not create Hive resource when sink type is Kafka                                 |
| [INLONG-3599](https://github.com/apache/incubator-inlong/issues/3599) | [Bug][Manager] Null pointer exception occurred when list file sources                                  |
| [INLONG-3596](https://github.com/apache/incubator-inlong/issues/3596) | [Bug] manager can not start successfully                                                               |
| [INLONG-3589](https://github.com/apache/incubator-inlong/issues/3589) | [Feature][Manager] Add Iceberg sink info for Sort                                                      |
| [INLONG-3580](https://github.com/apache/incubator-inlong/issues/3580) | [Improve][Manager] Remove agentIp param in StreamSource                                                |
| [INLONG-3565](https://github.com/apache/incubator-inlong/issues/3565) | [Improve][Manager] Unified the interface for Flink plugin                                              |
| [INLONG-3550](https://github.com/apache/incubator-inlong/issues/3550) | [Improve][Manager] Add file source in Manager Client                                                   |
| [INLONG-3544](https://github.com/apache/incubator-inlong/issues/3544) | [Feature][Manager] Refactor file source request and response                                           |
| [INLONG-3542](https://github.com/apache/incubator-inlong/issues/3542) | [Feature][Manager] Add Iceberg params and change SQL files                                             |
| [INLONG-3538](https://github.com/apache/incubator-inlong/issues/3538) | [Improve][Manager] Adjust mode of getting sort URL                                                     |
| [INLONG-3537](https://github.com/apache/incubator-inlong/issues/3537) | [Improve][Manager] Remove unused APIs and change Kafka sink params                                     |
| [INLONG-3535](https://github.com/apache/incubator-inlong/issues/3535) | [Improve][Manager] Update JDBC configs and maven pom files                                             |
| [INLONG-3510](https://github.com/apache/incubator-inlong/issues/3510) | [Bug][Manager] When deployed                                                                           |
| [INLONG-3507](https://github.com/apache/incubator-inlong/issues/3507) | [Bug][Manager] Upgrade Elasticsearch jar due to cve                                                    |
| [INLONG-3480](https://github.com/apache/incubator-inlong/issues/3480) | [Bug][Manager] Fix null pointer exception when calling sink method in manager client                   |
| [INLONG-3462](https://github.com/apache/incubator-inlong/issues/3462) | [Feature][Manager] Add test module for manager client                                                  |
| [INLONG-3454](https://github.com/apache/incubator-inlong/issues/3454) | [Improve][Manager] Remove the dependency of nimbusds which was unused                                  |
| [INLONG-3451](https://github.com/apache/incubator-inlong/issues/3451) | [Bug][Manager] Got wrong results when querying tube cluster info                                       |
| [INLONG-3448](https://github.com/apache/incubator-inlong/issues/3448) | [Improve][Manager] Limit the number of Agent pull tasks                                                |
| [INLONG-3438](https://github.com/apache/incubator-inlong/issues/3438) | [Manager] Sort out the LICENSEs of the third-party components of inlong-manager                        |
| [INLONG-3428](https://github.com/apache/incubator-inlong/issues/3428) | [Improve][Manager] Set the default value and code refactor                                             |
| [INLONG-3405](https://github.com/apache/incubator-inlong/issues/3405) | [Improve][Manager] Support generic partition configuration for Hive sink                               |
| [INLONG-3398](https://github.com/apache/incubator-inlong/issues/3398) | [Bug][Manager] Fix database error when saving sink field                                               |
| [INLONG-3397](https://github.com/apache/incubator-inlong/issues/3397) | [Bug][Manager] SQL error when saving sink fields                                                       |
| [INLONG-3383](https://github.com/apache/incubator-inlong/issues/3383) | [Bug][Manager] Fix the null pointer caused by sink field not configured with source field              |
| [INLONG-3376](https://github.com/apache/incubator-inlong/issues/3376) | [Improve][Manager] Support custom field format in client                                               |
| [INLONG-3370](https://github.com/apache/incubator-inlong/issues/3370) | [Improve][Manager] Optimize stream source delete logic                                                 |
| [INLONG-3369](https://github.com/apache/incubator-inlong/issues/3369) | [Improve][Manager] Add StreamSource in list API                                                        |
| [INLONG-3367](https://github.com/apache/incubator-inlong/issues/3367) | [Improve][Manager] Support custom field format                                                         |
| [INLONG-3362](https://github.com/apache/incubator-inlong/issues/3362) | [Improve][Manager] Make Group.updateStatus new Transaction                                             |
| [INLONG-3339](https://github.com/apache/incubator-inlong/issues/3339) | [Bug][Manager] Should update status when agent result was failed                                       |
| [INLONG-3337](https://github.com/apache/incubator-inlong/issues/3337) | [Bug][Manager] Fix API error in manger client                                                          |
| [INLONG-3334](https://github.com/apache/incubator-inlong/issues/3334) | [Improve][Manager] Get source field list from stream field table for Sort                              |
| [INLONG-3323](https://github.com/apache/incubator-inlong/issues/3323) | [Improve][Manager] Add APIs in manager client                                                          |
| [INLONG-3312](https://github.com/apache/incubator-inlong/issues/3312) | [Improve][Manager] Optimize the delete operation for stream source                                     |
| [INLONG-3310](https://github.com/apache/incubator-inlong/issues/3310) | [Improve][Manager] Optimize Pessimistic Lock for select stream sources                                 |
| [INLONG-3301](https://github.com/apache/incubator-inlong/issues/3301) | [Improve][Manager] Remove deprecated classes and tables                                                |
| [INLONG-3300](https://github.com/apache/incubator-inlong/issues/3300) | [Improve][Manager] Optimize the interface of the inlong-stream page                                    |
| [INLONG-3294](https://github.com/apache/incubator-inlong/issues/3294) | [Bug][Manager] Protocol of client and manager is inconsistent                                          |
| [INLONG-3293](https://github.com/apache/incubator-inlong/issues/3293) | [Improve][Manager] Add version controller for stream source                                            |
| [INLONG-3287](https://github.com/apache/incubator-inlong/issues/3287) | [Bug][Manager] Fix heartbeat manager init in Manager Service                                           |
| [INLONG-3280](https://github.com/apache/incubator-inlong/issues/3280) | [Bug][Manager][Dashboard] Update and delete datasource failed                                          |
| [INLONG-3269](https://github.com/apache/incubator-inlong/issues/3269) | [Improve][Manager] Change the request method of list query from GET to POST                            |
| [INLONG-3264](https://github.com/apache/incubator-inlong/issues/3264) | [Improve][Manager] MySQL deadlocked when operating stream source                                       |
| [INLONG-3257](https://github.com/apache/incubator-inlong/issues/3257) | [Bug][Manager][Dashboard] Create CommonServerDB return 404                                             |
| [INLONG-3252](https://github.com/apache/incubator-inlong/issues/3252) | [Bug][Manager] Remove transaction in select method                                                     |
| [INLONG-3246](https://github.com/apache/incubator-inlong/issues/3246) | [Improve][Manager] Add config_failed status after suspend/restart/delete failed for inlong group       |
| [INLONG-3242](https://github.com/apache/incubator-inlong/issues/3242) | [Bug][Manager] ConsumptionMqExtBase cannot be cast to ConsumptionPulsarInfo                            |
| [INLONG-3239](https://github.com/apache/incubator-inlong/issues/3239) | [Bug][Manager] Listing inlong group failed in manager client                                           |
| [INLONG-3228](https://github.com/apache/incubator-inlong/issues/3228) | [Bug][Manager] Deadlock found when trying to get lock                                                  |
| [INLONG-3225](https://github.com/apache/incubator-inlong/issues/3225) | [Improve][Manager] Resolves multiple IPs when querying a DataProxy cluster                             |
| [INLONG-3222](https://github.com/apache/incubator-inlong/issues/3222) | [Improve][Manager] Check source state while operate stop / restart / delete                            |
| [INLONG-3210](https://github.com/apache/incubator-inlong/issues/3210) | [Feature] [Manager] Support group batch query in manager client                                        |
| [INLONG-3209](https://github.com/apache/incubator-inlong/issues/3209) | [Improve][Manager] Optimize timeout handling in manager client                                         |
| [INLONG-3208](https://github.com/apache/incubator-inlong/issues/3208) | [Improve][Manager] Support batch query by inlong group name and inlong group id                        |
| [INLONG-3192](https://github.com/apache/incubator-inlong/issues/3192) | [Improve][Manager] Optimize group state collect in Manager Client                                      |
| [INLONG-3190](https://github.com/apache/incubator-inlong/issues/3190) | [Bug][Manager] Sql error in select source list                                                         |
| [INLONG-3188](https://github.com/apache/incubator-inlong/issues/3188) | [Bug][Manager] Inlong group status was not right after approve                                         |
| [INLONG-3179](https://github.com/apache/incubator-inlong/issues/3179) | [Improve][Manager] Check the source name can not be the same when saving stream source                 |
| [INLONG-3178](https://github.com/apache/incubator-inlong/issues/3178) | [Improve][Manager] Add check param for manager-client                                                  |
| [INLONG-3176](https://github.com/apache/incubator-inlong/issues/3176) | [Bug][Manager] Fix duplicate key  exception in manager client                                          |
| [INLONG-3175](https://github.com/apache/incubator-inlong/issues/3175) | [Feature][Manager] SortService check md5                                                               |
| [INLONG-3166](https://github.com/apache/incubator-inlong/issues/3166) | [Improve][Manager] Replace hdfsDefaultFs and warehouseDir of Hive sink with dataPath field             |
| [INLONG-3160](https://github.com/apache/incubator-inlong/issues/3160) | [Bug][Manager] Deleting stream source failed as the status was not allowed to delete                   |
| [INLONG-3156](https://github.com/apache/incubator-inlong/issues/3156) | [Feature][Manager] Add Shiro interfaces for manager authorization                                      |
| [INLONG-3152](https://github.com/apache/incubator-inlong/issues/3152) | [Improve][Manager] Stop and update operation in initializing state                                     |
| [INLONG-3149](https://github.com/apache/incubator-inlong/issues/3149) | [Improve][Manager] Add async method for inlong group stop/restart/delete                               |
| [INLONG-3146](https://github.com/apache/incubator-inlong/issues/3146) | [Improve][Manager] Optimize FieldType enums                                                            |
| [INLONG-3140](https://github.com/apache/incubator-inlong/issues/3140) | [Bug][Manager] Fix NPE in Manager Client                                                               |
| [INLONG-3134](https://github.com/apache/incubator-inlong/issues/3134) | [Bug][Manager] Save stream sink field error                                                            |
| [INLONG-3112](https://github.com/apache/incubator-inlong/issues/3112) | [Feature][Manager] Support metadata in manager and manager client                                      |
| [INLONG-3101](https://github.com/apache/incubator-inlong/issues/3101) | [Improve][Manager] Support user defined properties in StreamSource                                     |
| [INLONG-3095](https://github.com/apache/incubator-inlong/issues/3095) | [Improve][Manager] Update inlong group info in the complete listeners                                  |
| [INLONG-3090](https://github.com/apache/incubator-inlong/issues/3090) | [Improve][Manager] Add TDMQ_PULSAR type in manager                                                     |
| [INLONG-3089](https://github.com/apache/incubator-inlong/issues/3089) | [Bug][Manager] Create group resource faild after approving one inlong group                            |
| [INLONG-3073](https://github.com/apache/incubator-inlong/issues/3073) | [Improve][Manager] Get MQ cluster by the type and mq_set_name                                          |
| [INLONG-3068](https://github.com/apache/incubator-inlong/issues/3068) | [Improve][Manager] Add autoOffsetReset param for Kafka source                                          |
| [INLONG-3065](https://github.com/apache/incubator-inlong/issues/3065) | [Improve][Manager] Support download plugins from remote address                                        |
| [INLONG-3064](https://github.com/apache/incubator-inlong/issues/3064) | [Improve][Manager] Unify field types of sink and source in manager client                              |
| [INLONG-3062](https://github.com/apache/incubator-inlong/issues/3062) | [Improve][Manager] Merge the data_proxy_cluster table and the third_party_cluster table                |
| [INLONG-3053](https://github.com/apache/incubator-inlong/issues/3053) | [Bug][Manager] Push sort config failed as the mqExtInfo is null in workflow form                       |
| [INLONG-3046](https://github.com/apache/incubator-inlong/issues/3046) | [Bug][Manager] The status was incorrect after approving an inlong group                                |
| [INLONG-3042](https://github.com/apache/incubator-inlong/issues/3042) | [Improve][Manager] Supplements of  binlog allMigration stream                                          |
| [INLONG-3039](https://github.com/apache/incubator-inlong/issues/3039) | [Improve][Manager] Add properties in sinkRequest                                                       |
| [INLONG-3037](https://github.com/apache/incubator-inlong/issues/3037) | [Improve][Manager] Add field mapping support for source and sink in manage client                      |
| [INLONG-3024](https://github.com/apache/incubator-inlong/issues/3024) | [Bug][Manager] Save cluster failed as the token field is too long                                      |
| [INLONG-3017](https://github.com/apache/incubator-inlong/issues/3017) | [Bug][Manager] The interface of OpenAPI does not need authentication                                   |
| [INLONG-3012](https://github.com/apache/incubator-inlong/issues/3012) | [Improve][Manager] Support built-in field for source and sink info                                     |
| [INLONG-3000](https://github.com/apache/incubator-inlong/issues/3000) | [Improve][Manager] Add token field for cluster info                                                    |
| [INLONG-2993](https://github.com/apache/incubator-inlong/issues/2993) | [Bug][Manager] Check whether the mq info is NULL to avoid NPE                                          |
| [INLONG-2992](https://github.com/apache/incubator-inlong/issues/2992) | [Feature][Manager] Support the field mapping feature for Sort                                          |
| [INLONG-2985](https://github.com/apache/incubator-inlong/issues/2985) | [Bug][Manager] Fix task type and UTF question for agent                                                |
| [INLONG-2974](https://github.com/apache/incubator-inlong/issues/2974) | [Improve][Manager] Support agent to pull tasks without ip and uuid                                     |
| [INLONG-2973](https://github.com/apache/incubator-inlong/issues/2973) | [Bug][Manager] Fix get pulsar info from third party cluster table                                      |
| [INLONG-2971](https://github.com/apache/incubator-inlong/issues/2971) | [Improve][Manager] Support stream log collecting in manager client                                     |
| [INLONG-2969](https://github.com/apache/incubator-inlong/issues/2969) | [Bug][Manager] Fix interface of open API cluster                                                       |
| [INLONG-2957](https://github.com/apache/incubator-inlong/issues/2957) | [Improve][Manager] Optimize the cluster management interface                                           |
| [INLONG-2944](https://github.com/apache/incubator-inlong/issues/2944) | [Improve][Manager] Should not change the modify_time when updating the source snapshot                 |
| [INLONG-2939](https://github.com/apache/incubator-inlong/issues/2939) | [Improve][Manager] Support sync message transfer in manager client                                     |
| [INLONG-2934](https://github.com/apache/incubator-inlong/issues/2934) | [Bug][Manager] Manager client occured NPE since not check NULL                                         |
| [INLONG-2933](https://github.com/apache/incubator-inlong/issues/2933) | [Bug][Agent][Manager] Change the type of the deliveryTime field from Date to String                    |
| [INLONG-2930](https://github.com/apache/incubator-inlong/issues/2930) | [Feature][Manager] Add ClickHouse sink support in manager-client                                       |
| [INLONG-2913](https://github.com/apache/incubator-inlong/issues/2913) | [Bug][Manager] Fix get data proxy cluster failed and update inlong group failed                        |
| [INLONG-2912](https://github.com/apache/incubator-inlong/issues/2912) | [Improve][Manager] Add fields for the binlog task                                                      |
| [INLONG-2900](https://github.com/apache/incubator-inlong/issues/2900) | [Bug][Manager] Pulsar topics for DataProxy are inconsistent with topics for Sort                       |
| [INLONG-2898](https://github.com/apache/incubator-inlong/issues/2898) | [Bug][Manager] Fix parse Json exception in manager client                                              |
| [INLONG-2892](https://github.com/apache/incubator-inlong/issues/2892) | [Improve][Manager] Update status of StreamSource after approving the InlongGroup or InlongStream       |
| [INLONG-2890](https://github.com/apache/incubator-inlong/issues/2890) | [Feature][Manager] Support query source list in stream/listAll API                                     |
| [INLONG-2888](https://github.com/apache/incubator-inlong/issues/2888) | [Bug][Manager] Stream source was not deleted when calling delete operate                               |
| [INLONG-2886](https://github.com/apache/incubator-inlong/issues/2886) | [Improve][Manager] Check if the URL is valid to avoid network security attacks                         |
| [INLONG-2873](https://github.com/apache/incubator-inlong/issues/2873) | [Bug][Manager] Fix serialization problem                                                               |
| [INLONG-2869](https://github.com/apache/incubator-inlong/issues/2869) | [Feature][Manager] Support config sync send data for agent and sort                                    |
| [INLONG-2867](https://github.com/apache/incubator-inlong/issues/2867) | [Feature][Manager] Support report the task result and get tasks for the agent                          |
| [INLONG-2862](https://github.com/apache/incubator-inlong/issues/2862) | [Feature][Manager] Startup sort task through the ordinary flink cluster                                |
| [INLONG-2856](https://github.com/apache/incubator-inlong/issues/2856) | [Improve][Manager] Support multi-source and multi-sink in one stream                                   |
| [INLONG-2855](https://github.com/apache/incubator-inlong/issues/2855) | [Feature][Manager] Support use other plugin of Authorization                                           |
| [INLONG-2849](https://github.com/apache/incubator-inlong/issues/2849) | [Bug][Manager] Manager client occurred NPE                                                             |
| [INLONG-2845](https://github.com/apache/incubator-inlong/issues/2845) | [Bug][Manager] Manager client occurred NPE when parsing the ext info                                   |
| [INLONG-2841](https://github.com/apache/incubator-inlong/issues/2841) | [Bug][Manager] New Inlong group cannot invoke the related listeners                                    |
| [INLONG-2839](https://github.com/apache/incubator-inlong/issues/2839) | [Improve][Manager] Add intermediate state for Inlong group                                             |
| [INLONG-2837](https://github.com/apache/incubator-inlong/issues/2837) | [Bug][Manager] Loss update Kafka operation when using manager client to update config                  |
| [INLONG-2830](https://github.com/apache/incubator-inlong/issues/2830) | [Improve][Manager] Support more than one source for a pair of group and streams                        |
| [INLONG-2829](https://github.com/apache/incubator-inlong/issues/2829) | [Feature][Manager] Support for migrating all databases in a database server for the inlong-sort module |
| [INLONG-2827](https://github.com/apache/incubator-inlong/issues/2827) | [Feature][Manager] Support configurable plugin when creating Hive table                                |
| [INLONG-2821](https://github.com/apache/incubator-inlong/issues/2821) | [Improve][Manager] Change the status of the source after receiving the task snapshot                   |
| [INLONG-2815](https://github.com/apache/incubator-inlong/issues/2815) | [Improve][Manager] Optimize Inlong domains for manager-client                                          |
| [INLONG-2808](https://github.com/apache/incubator-inlong/issues/2808) | [Feature][Manager] Support kafka sink in manager client                                                |
| [INLONG-2807](https://github.com/apache/incubator-inlong/issues/2807) | [Improve][Manager] Optimize state defined in manager client                                            |
| [INLONG-2794](https://github.com/apache/incubator-inlong/issues/2794) | [Bug] Manager website should not display port when adding agent job                                    |
| [INLONG-2791](https://github.com/apache/incubator-inlong/issues/2791) | [Improve][Manager] Optimize manager client APIs                                                        |
| [INLONG-2768](https://github.com/apache/incubator-inlong/issues/2768) | [Bug][Manager] The middleware_type not same after creating group                                       |
| [INLONG-2764](https://github.com/apache/incubator-inlong/issues/2764) | [Bug][Manager] Key was duplicate when InlongGroup extList already has the same key                     |
| [INLONG-2760](https://github.com/apache/incubator-inlong/issues/2760) | [Bug][Manager] Delete data grouping exception                                                          |
| [INLONG-2759](https://github.com/apache/incubator-inlong/issues/2759) | [Bug][Manager] InlongGroupController update interface status problem                                   |
| [INLONG-2751](https://github.com/apache/incubator-inlong/issues/2751) | [Bug][Manager] Fix the response code while query failing                                               |
| [INLONG-2743](https://github.com/apache/incubator-inlong/issues/2743) | [Improve][Manager] Support getting inlong workflow error for manager-client module                     |
| [INLONG-2741](https://github.com/apache/incubator-inlong/issues/2741) | [Feature][Manager] Inlong client adds an interface for querying inlong group                           |
| [INLONG-2736](https://github.com/apache/incubator-inlong/issues/2736) | [Bug][Manager] Agent get task from manager error                                                       |
| [INLONG-2734](https://github.com/apache/incubator-inlong/issues/2734) | [Improve][Manager] Support multi serialization type for Sort in Manager                                |
| [INLONG-2732](https://github.com/apache/incubator-inlong/issues/2732) | [Feature][Manager] Support more parameters for Kafka source                                            |
| [INLONG-2723](https://github.com/apache/incubator-inlong/issues/2723) | [Bug][Manager] Manager module occurred exception when startup                                          |
| [INLONG-2720](https://github.com/apache/incubator-inlong/issues/2720) | [Bug][Manager] data_source_cmd_config table not exit                                                   |
| [INLONG-2717](https://github.com/apache/incubator-inlong/issues/2717) | [Improve][Manager] Support middleware of NONE                                                          |
| [INLONG-2715](https://github.com/apache/incubator-inlong/issues/2715) | [Feature][Manager] Support more parameters for the StreamSource entity                                 |
| [INLONG-2714](https://github.com/apache/incubator-inlong/issues/2714) | [Bug][Manager] Create stream_source table failed                                                       |
| [INLONG-2711](https://github.com/apache/incubator-inlong/issues/2711) | [Bug][SDK] Dataproxy-SDK get manager ip list error                                                     |
| [INLONG-2707](https://github.com/apache/incubator-inlong/issues/2707) | [Bug][Manager] Table name and field type was inconsistent in SQL and XML file                          |
| [INLONG-2701](https://github.com/apache/incubator-inlong/issues/2701) | [Bug][Manager] Occurred NPE as the data proxy cluster name is null                                     |
| [INLONG-2700](https://github.com/apache/incubator-inlong/issues/2700) | [Bug][Manager] Inlong group status was incorrect                                                       |
| [INLONG-2699](https://github.com/apache/incubator-inlong/issues/2699) | [Bug][Manager] Field ext_params in table data_proxy_cluster not exits                                  |
| [INLONG-2697](https://github.com/apache/incubator-inlong/issues/2697) | [Bug][Manager] Inlong manager occurred NullpointException                                              |
| [INLONG-2694](https://github.com/apache/incubator-inlong/issues/2694) | [Feature][Manager] Implement services of getSortSource interface                                       |
| [INLONG-2693](https://github.com/apache/incubator-inlong/issues/2693) | [Feature][Manager] Define tables and beans for getSortSource interface                                 |
| [INLONG-2690](https://github.com/apache/incubator-inlong/issues/2690) | [Improve][Manager] Optimize group state in workflow                                                    |
| [INLONG-2689](https://github.com/apache/incubator-inlong/issues/2689) | [Feature][Manager] Support report heartbeat for source agent                                           |
| [INLONG-2682](https://github.com/apache/incubator-inlong/issues/2682) | [Feature][Manager] Add metric and config log report interface                                          |
| [INLONG-2678](https://github.com/apache/incubator-inlong/issues/2678) | [Improve][Manager] Update field type in manager sql script                                             |
| [INLONG-2677](https://github.com/apache/incubator-inlong/issues/2677) | [Feature][Manager] Get MQ cluster Info from database                                                   |
| [INLONG-2676](https://github.com/apache/incubator-inlong/issues/2676) | [Improve][Manager] Support stop / restart / finish stream source task                                  |
| [INLONG-2669](https://github.com/apache/incubator-inlong/issues/2669) | [Improve][Manager] Optimizing source module code structure                                             |
| [INLONG-2662](https://github.com/apache/incubator-inlong/issues/2662) | [Bug][Manager] Fix duplicate listener in manager service                                               |
| [INLONG-2660](https://github.com/apache/incubator-inlong/issues/2660) | [Improve][Manager] Optimize manager state machine                                                      |
| [INLONG-2655](https://github.com/apache/incubator-inlong/issues/2655) | [Bug][Manager] Fix non-null limit in sql file                                                          |
| [INLONG-2653](https://github.com/apache/incubator-inlong/issues/2653) | [Feature][Manager] Support Kafka source in Inong Stream                                                |
| [INLONG-2638](https://github.com/apache/incubator-inlong/issues/2638) | [Bug][Manager] apache_inlong_manager.sql file execution exception                                      |
| [INLONG-2636](https://github.com/apache/incubator-inlong/issues/2636) | [Improve][Manager] Enable sort config generate when zookeeper is disabled;                             |
| [INLONG-2617](https://github.com/apache/incubator-inlong/issues/2617) | [Bug][Manager] After approving the new group                                                           |
| [INLONG-2616](https://github.com/apache/incubator-inlong/issues/2616) | [Improve][Manager] Optimize manager client and some APIs                                               |
| [INLONG-2614](https://github.com/apache/incubator-inlong/issues/2614) | [Feature][Sort] Support array and map data structures in Hive sink and ClickHouse sink                 |
| [INLONG-2612](https://github.com/apache/incubator-inlong/issues/2612) | [Improve][Manager] Unify the domain model of the Manager module                                        |
| [INLONG-2610](https://github.com/apache/incubator-inlong/issues/2610) | [Feature][Manager] Plug-in support for StreamSource                                                    |
| [INLONG-2605](https://github.com/apache/incubator-inlong/issues/2605) | [Improve][Manager] Refactor the manager-workflow module                                                |
| [INLONG-2600](https://github.com/apache/incubator-inlong/issues/2600) | [Improve][Manager] Rename the third party cluster class name and table name                            |
| [INLONG-2588](https://github.com/apache/incubator-inlong/issues/2588) | [Feature][Manager] Support cluster management                                                          |
| [INLONG-2586](https://github.com/apache/incubator-inlong/issues/2586) | [Feature][Manager] Support agent to get task from manager                                              |
| [INLONG-2579](https://github.com/apache/incubator-inlong/issues/2579) | [Feature][Manager] Support stream sink to ClickHouse                                                   |
| [INLONG-2574](https://github.com/apache/incubator-inlong/issues/2574) | [Feature][Manager] Add getSortSource interface for Sort                                                |
| [INLONG-2573](https://github.com/apache/incubator-inlong/issues/2573) | [Feature][Manager] Inlong manager support getSortSource interface                                      |
| [INLONG-2571](https://github.com/apache/incubator-inlong/issues/2571) | [Bug][Manager] Fix unit tests bugs                                                                     |
| [INLONG-2558](https://github.com/apache/incubator-inlong/issues/2558) | [Improve][Manager] Optimizing manager test pattern                                                     |
| [INLONG-2529](https://github.com/apache/incubator-inlong/issues/2529) | [Bug][manager] get NumberFormatException when creating a new stream                                    |
| [INLONG-2512](https://github.com/apache/incubator-inlong/issues/2512) | [Improve] [Manager] Add manager client                                                                 |
| [INLONG-2507](https://github.com/apache/incubator-inlong/issues/2507) | [Bug][Manager] Init sort config failed                                                                 |
| [INLONG-2492](https://github.com/apache/incubator-inlong/issues/2492) | [Feature][Manager] Plug-in support for DataStorage                                                     |
| [INLONG-2491](https://github.com/apache/incubator-inlong/issues/2491) | [Feature][Dataproxy] update netty version to 4.1.72.Final and log4j to log4j2                          |
| [INLONG-2490](https://github.com/apache/incubator-inlong/issues/2490) | [Feature][Manager] Support to startup a single tenant sort job                                         |
| [INLONG-2483](https://github.com/apache/incubator-inlong/issues/2483) | [Feature] Manager provide metadata interface to Dataproxy                                              |
| [INLONG-2414](https://github.com/apache/incubator-inlong/issues/2414) | [Manager] Exclude test jar file during the apache-rat-plugin check                                     |
| [INLONG-2410](https://github.com/apache/incubator-inlong/issues/2410) | [Improve] Inlong Manager support business workflow suspend                                             | 
| [INLONG-2353](https://github.com/apache/incubator-inlong/issues/2353) | [Feature] Tube manager cluster adds support for multi-master configuration                             |
| [INLONG-2286](https://github.com/apache/incubator-inlong/issues/2286) | [Feature][Manager] Put inlong group id in dataflow info for Sort                                       |
| [INLONG-2162](https://github.com/apache/incubator-inlong/issues/2162) | [Feature][Manager] Manager support getSortSourceConfig interface                                       |
| [INLONG-1517](https://github.com/apache/incubator-inlong/issues/1517) | [Feature][Manager] Support sink data to ClickHouse                                                     |


### Audit
| ISSUE                                                                 | Summary                                                                         |
|:----------------------------------------------------------------------|:--------------------------------------------------------------------------------|
| [INLONG-3606](https://github.com/apache/incubator-inlong/issues/3606) | [Bug] lack of the guide for Sort to configure Audit and Flink Plugin            |
| [INLONG-3573](https://github.com/apache/incubator-inlong/issues/3573) | [Feature][Dataproxy][Audit]Tidy up dependencies between dataproxy               |
| [INLONG-3543](https://github.com/apache/incubator-inlong/issues/3543) | [Feature][Audit]Upgrade audit netty version to 4.1.72.Final and log4j to log4j2 |
| [INLONG-3528](https://github.com/apache/incubator-inlong/issues/3528) | [Improve] unify the log directory for manager and audit                         |
| [INLONG-3440](https://github.com/apache/incubator-inlong/issues/3440) | [Audit] Sort out the LICENSEs of the third-party components of inlong-audit     |
| [INLONG-3417](https://github.com/apache/incubator-inlong/issues/3417) | [Improve] add audit configuration for other component docker image              |
| [INLONG-3288](https://github.com/apache/incubator-inlong/issues/3288) | [Improve][Audit] Support TubMQ for website                                      |
| [INLONG-3159](https://github.com/apache/incubator-inlong/issues/3159) | [Feature][Audit] Store support TubeMQ                                           |
| [INLONG-3158](https://github.com/apache/incubator-inlong/issues/3158) | [Feature][Audit] Proxy support TubeMQ                                           |
| [INLONG-3013](https://github.com/apache/incubator-inlong/issues/3013) | [Bug][Audit] Error occurred in started container on tencent eks                 |
| [INLONG-2960](https://github.com/apache/incubator-inlong/issues/2960) | [Bug][Audit] Unit tests error when executing mvn test command                   |
| [INLONG-2640](https://github.com/apache/incubator-inlong/issues/2640) | [Bug][K8s] The Audit Configmap can not be handled as a ConfigMap                |
| [INLONG-2623](https://github.com/apache/incubator-inlong/issues/2623) | [Improve][Audit] Add audit image for docker publish script                      |
| [INLONG-2591](https://github.com/apache/incubator-inlong/issues/2591) | [Bug][Audit] Audit proxy and store process with wrong options                   |
| [INLONG-2549](https://github.com/apache/incubator-inlong/issues/2549) | [Improve] [audit] update audit protobuf field type                              |
| [INLONG-2548](https://github.com/apache/incubator-inlong/issues/2548) | [Bug] update version of lombok from 1.18.20  to 1.18.22                         |
| [INLONG-2540](https://github.com/apache/incubator-inlong/issues/2540) | [agent] create db sql collect task by config from manager                       |
| [INLONG-2538](https://github.com/apache/incubator-inlong/issues/2538) | [TubeMQ] Optimize message write cache logic                                     |
| [INLONG-2535](https://github.com/apache/incubator-inlong/issues/2535) | [Improve][dashboard] Audit module display time in reverse order                 |
| [INLONG-2523](https://github.com/apache/incubator-inlong/issues/2523) | [Improve][Audit] Modify package name according to specification                 |
| [INLONG-2468](https://github.com/apache/incubator-inlong/issues/2468) | [Bug][Audit] CommunicationsException occurred in unit tests                     |
| [INLONG-2441](https://github.com/apache/incubator-inlong/issues/2441) | [Improve] [InLong audit] Modify the version of audit protobuf                   |
| [INLONG-2408](https://github.com/apache/incubator-inlong/issues/2408) | [Audit] protobuf-java dependency has security vulnerability                     |


### Sort
| ISSUE                                                                 | Summary                                                                                                          |
|:----------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------|
| [INLONG-3682](https://github.com/apache/incubator-inlong/issues/3682) | [Improve] Optimize classification for the sort and usage manual guide                                            |
| [INLONG-3672](https://github.com/apache/incubator-inlong/issues/3672) | [Feature][Sort-standalone] Tidy up dependencies.                                                                 |
| [INLONG-3670](https://github.com/apache/incubator-inlong/issues/3670) | [Improve][Dashboard] Add dashboard plugin docs to official website                                               |
| [INLONG-3668](https://github.com/apache/incubator-inlong/issues/3668) | [Sort-standalone] exclude spotbugs-annotations package                                                           |
| [INLONG-3606](https://github.com/apache/incubator-inlong/issues/3606) | [Bug] lack of the guide for Sort to configure Audit and Flink Plugin                                             |
| [INLONG-3591](https://github.com/apache/incubator-inlong/issues/3591) | [Feature] Support multiple SortTask with the one-on-one relationship of Source and SortTask.                     |
| [INLONG-3589](https://github.com/apache/incubator-inlong/issues/3589) | [Feature][Manager] Add Iceberg sink info for Sort                                                                |
| [INLONG-3546](https://github.com/apache/incubator-inlong/issues/3546) | [Feature] Support reporting metrics by audit-sdk in sort-single-tenant                                           |
| [INLONG-3538](https://github.com/apache/incubator-inlong/issues/3538) | [Improve][Manager] Adjust mode of getting sort URL                                                               |
| [INLONG-3523](https://github.com/apache/incubator-inlong/issues/3523) | [Sort-Flink] Remove lzo-core dependency                                                                          |
| [INLONG-3501](https://github.com/apache/incubator-inlong/issues/3501) | [Sort-standalone] Sort out the LICENSEs of the third-party components of inlong-standalone                       |
| [INLONG-3486](https://github.com/apache/incubator-inlong/issues/3486) | [Bug][Sort] Data with Timestamp/Date type are written wrongly when using parquet format                          |
| [INLONG-3483](https://github.com/apache/incubator-inlong/issues/3483) | [Bug][Sort] Wrong date data in ORC formatted output                                                              |
| [INLONG-3457](https://github.com/apache/incubator-inlong/issues/3457) | [Improve][Sort] Exclude partition fields when writing data with parquet/orc format to hive                       |
| [INLONG-3450](https://github.com/apache/incubator-inlong/issues/3450) | [Feature][SDK] Sort-SDK change ack log from info to debug                                                        |
| [INLONG-3426](https://github.com/apache/incubator-inlong/issues/3426) | [Improve][Sort] Unify the value of binlog event type                                                             |
| [INLONG-3418](https://github.com/apache/incubator-inlong/issues/3418) | [Feature][Sort-Standalone] Upgrade protobuf version to 3.19.4                                                    |
| [INLONG-3414](https://github.com/apache/incubator-inlong/issues/3414) | [Improve][Sort] Set the default value of field includeUpdateBefore for DebeziumDeserializationInfo               |
| [INLONG-3408](https://github.com/apache/incubator-inlong/issues/3408) | [Bug][Sort-Standalone] Replace IP and authentication in configuration example                                    |
| [INLONG-3396](https://github.com/apache/incubator-inlong/issues/3396) | [Feature][Sort] Support multiple dataflow to write the same hive table                                           |
| [INLONG-3378](https://github.com/apache/incubator-inlong/issues/3378) | [Feature] Add configuration example of Sort-standalone(Hive+ElasticSearch)                                       |
| [INLONG-3372](https://github.com/apache/incubator-inlong/issues/3372) | [Bug][Sort] The binlog type is always `INSERT` when the output format is Canal                                   |
| [INLONG-3340](https://github.com/apache/incubator-inlong/issues/3340) | [Bug][Sort-Standalone] ClsSink cannot acquire correct IdConfig and type overflow                                 |
| [INLONG-3332](https://github.com/apache/incubator-inlong/issues/3332) | [Bug][Sort-Standalone] NP when init ClsSink and data race problem when first get ClsIdConfig field list          |
| [INLONG-3329](https://github.com/apache/incubator-inlong/issues/3329) | [Bug][Sort] Wrong class mapping of debezium serialization info                                                   |
| [INLONG-3328](https://github.com/apache/incubator-inlong/issues/3328) | [Feature][Sort-Standalone] Support to load sort-sdk configuration from file                                      |
| [INLONG-3321](https://github.com/apache/incubator-inlong/issues/3321) | [Improve][Sort] Set the correspond field in output to null if the field value in input is null                   |
| [INLONG-3316](https://github.com/apache/incubator-inlong/issues/3316) | [Bug][Sort] Change target sort jar in inlong-distribution module                                                 |
| [INLONG-3285](https://github.com/apache/incubator-inlong/issues/3285) | [Bug][Sort] Elasticsearch jar has security issue                                                                 |
| [INLONG-3260](https://github.com/apache/incubator-inlong/issues/3260) | [Improve][Sort] Change the default semantic to at-least-once when using kafka producer                           |
| [INLONG-3256](https://github.com/apache/incubator-inlong/issues/3256) | [Improve][SDK] Improve sort-sdk log info                                                                         |
| [INLONG-3243](https://github.com/apache/incubator-inlong/issues/3243) | [Feature][Sort-Standalone] Support multiple scenes to request configs                                            |
| [INLONG-3237](https://github.com/apache/incubator-inlong/issues/3237) | [Feature][Sort-Standalone] SdkSource support periodiclly update sdk config and remove expire client.             |
| [INLONG-3218](https://github.com/apache/incubator-inlong/issues/3218) | [Bug][SDK] Sort-SDK may creating multiple duplicate consumers                                                    |
| [INLONG-3206](https://github.com/apache/incubator-inlong/issues/3206) | [Improve][Sort] Do not specify uid for kafka sink in case of transactionalId conflict                            |
| [INLONG-3202](https://github.com/apache/incubator-inlong/issues/3202) | [Feature][SDK] Unify SortSourceConfig of Sort-Sdk and Manager                                                    |
| [INLONG-3173](https://github.com/apache/incubator-inlong/issues/3173) | [Bug][Sort-Standalone] Unify SortClusterConfig in manager and sort-standalone                                    |
| [INLONG-3130](https://github.com/apache/incubator-inlong/issues/3130) | [Feature][Sort] Support extract specified metadata from input data with canal format                             |
| [INLONG-3122](https://github.com/apache/incubator-inlong/issues/3122) | [Bug][Sort-Standalone] Missing TASK_NAME parameter when report to Audit                                          |
| [INLONG-3117](https://github.com/apache/incubator-inlong/issues/3117) | [Bug][Sort-Standalone] Parameter error when invoking SortSdk ack method                                          |
| [INLONG-3116](https://github.com/apache/incubator-inlong/issues/3116) | [Bug][Sort-Standalone] SortSdkSource does not specify the manager url                                            |
| [INLONG-3115](https://github.com/apache/incubator-inlong/issues/3115) | [Bug][Sort-Standalone] optimize the sort-standalone                                                              |
| [INLONG-3113](https://github.com/apache/incubator-inlong/issues/3113) | [Bug][Sort] Date and Time related bugs                                                                           |
| [INLONG-3110](https://github.com/apache/incubator-inlong/issues/3110) | [Improve][Sort] Shade flink-avro to avoid potential conflicts                                                    |
| [INLONG-3108](https://github.com/apache/incubator-inlong/issues/3108) | [TubeMQ] Optimize the implementation of KeepAlive Interface                                                      |
| [INLONG-3086](https://github.com/apache/incubator-inlong/issues/3086) | [Improve][Sort] Check style error in Sort                                                                        |
| [INLONG-3078](https://github.com/apache/incubator-inlong/issues/3078) | [Bug][Sort] TubeClientException occurred in unit tests                                                           |
| [INLONG-3055](https://github.com/apache/incubator-inlong/issues/3055) | [Bug][Sort] Fix bugs of deserializing TransformationInfo json string                                             |
| [INLONG-3054](https://github.com/apache/incubator-inlong/issues/3054) | [Bug][Sort] Start sort task failed as parsing the config error                                                   |
| [INLONG-3053](https://github.com/apache/incubator-inlong/issues/3053) | [Bug][Manager] Push sort config failed as the mqExtInfo is null in workflow form                                 |
| [INLONG-3011](https://github.com/apache/incubator-inlong/issues/3011) | [Feature][Sort] Add deploy command of sort-standalone                                                            |
| [INLONG-2910](https://github.com/apache/incubator-inlong/issues/2910) | [Bug][Sort] Deserialization failure of BuiltInField                                                              |
| [INLONG-2872](https://github.com/apache/incubator-inlong/issues/2872) | [Feature][Sort] Support field mapping when transforming                                                          |
| [INLONG-2847](https://github.com/apache/incubator-inlong/issues/2847) | [Feature][Sort] Support whole-database migration from debezium format to canal format                            |
| [INLONG-2820](https://github.com/apache/incubator-inlong/issues/2820) | [Improve][Sort] Improve the deserialization processing of the update event in DebeziumDeserializationSchema      |
| [INLONG-2816](https://github.com/apache/incubator-inlong/issues/2816) | [Bug][Sort-sdk] java.lang.OutOfMemoryError: Java heap space                                                      |
| [INLONG-2793](https://github.com/apache/incubator-inlong/issues/2793) | [Bug][Sort] Bugs related to hive sink                                                                            |
| [INLONG-2785](https://github.com/apache/incubator-inlong/issues/2785) | [Feature][Sort] Support extract metadata from data with debezium format and write them to data with canal format |
| [INLONG-2774](https://github.com/apache/incubator-inlong/issues/2774) | [Bug][Sort] Fix bugs in sort-single-tenant                                                                       |
| [INLONG-2730](https://github.com/apache/incubator-inlong/issues/2730) | [Feature][Sort] Stand-alone CLS sink reduce the number of AsyncProducerClient                                    |
| [INLONG-2728](https://github.com/apache/incubator-inlong/issues/2728) | [TubeMQ] Optimize the content of statistical metrics                                                             |
| [INLONG-2723](https://github.com/apache/incubator-inlong/issues/2723) | [Bug][Manager] Manager module occurred exception when startup                                                    |
| [INLONG-2721](https://github.com/apache/incubator-inlong/issues/2721) | [Bug][Sort] Fix bugs in HiveSinkInfo                                                                             |
| [INLONG-2684](https://github.com/apache/incubator-inlong/issues/2684) | [Bug][SDK] Sort SDK occurred OOM in unit tests                                                                   |
| [INLONG-2667](https://github.com/apache/incubator-inlong/issues/2667) | [Bug][Sort] Bugs occurred when starting up sort-single-tenant                                                    |
| [INLONG-2659](https://github.com/apache/incubator-inlong/issues/2659) | [Bug][Sort] Could not build the program from JAR file.                                                           |
| [INLONG-2651](https://github.com/apache/incubator-inlong/issues/2651) | [Feature][Sort] Add CLS sink                                                                                     |
| [INLONG-2650](https://github.com/apache/incubator-inlong/issues/2650) | [Feature][Sort] Define sort stand-alone CLS context and config bean                                              |
| [INLONG-2649](https://github.com/apache/incubator-inlong/issues/2649) | [Feature][Sort] Implement default IEvent2LogItemHandler interface                                                |
| [INLONG-2642](https://github.com/apache/incubator-inlong/issues/2642) | [Feature][Sort] Use proxy user to write hive                                                                     |
| [INLONG-2634](https://github.com/apache/incubator-inlong/issues/2634) | [Feature][Sort] Support CHDFS filesystem when using Hive sink                                                    |
| [INLONG-2625](https://github.com/apache/incubator-inlong/issues/2625) | [Feature][Sort] Support extracting data time in deserialization                                                  |
| [INLONG-2614](https://github.com/apache/incubator-inlong/issues/2614) | [Feature][Sort] Support array and map data structures in Hive sink and ClickHouse sink                           |
| [INLONG-2572](https://github.com/apache/incubator-inlong/issues/2572) | [Bug][SDK] Sort sdk cause with name javax/management/MBeanServer in unit tests                                   |
| [INLONG-2561](https://github.com/apache/incubator-inlong/issues/2561) | [Feature][Sort] Update deploy settings of InLong-Sort                                                            |
| [INLONG-2554](https://github.com/apache/incubator-inlong/issues/2554) | [Feature][Sort] Support array and map data structures in ORC writer                                              |
| [INLONG-2526](https://github.com/apache/incubator-inlong/issues/2526) | [Feature][Sort] Support serialization and deserialization of debezium-json formatted data                        |
| [INLONG-2524](https://github.com/apache/incubator-inlong/issues/2524) | [Feature][InLong-Sort] Support deserialization of json                                                           |
| [INLONG-2507](https://github.com/apache/incubator-inlong/issues/2507) | [Bug][Manager] Init sort config failed                                                                           |
| [INLONG-2496](https://github.com/apache/incubator-inlong/issues/2496) | [Feature][Sort]Support COS filesystem when using hive sink                                                       |
| [INLONG-2435](https://github.com/apache/incubator-inlong/issues/2435) | [Feature] Fix Sort-standalone UT problem.                                                                        |
| [INLONG-2413](https://github.com/apache/incubator-inlong/issues/2413) | [Feature][Sort]Support non-partitioned table when using hive sink                                                |
| [INLONG-2382](https://github.com/apache/incubator-inlong/issues/2382) | [Feature] Sort-sdk support Pulsar consumer of PB compression cache message protocol.                             |
| [INLONG-2346](https://github.com/apache/incubator-inlong/issues/2346) | [Feature][InLong-Sort] Support avro and canal formats for sort sink                                              |
| [INLONG-1928](https://github.com/apache/incubator-inlong/issues/1928) | [Feature]Inlong-Sort-Standalone support to consume events from Tube cache clusters.                              |
| [INLONG-1896](https://github.com/apache/incubator-inlong/issues/1896) | [Feature]Inlong-Sort-Standalone support to sort the events to Kafka clusters.                                    |

### TubeMQ
| ISSUE                                                                 | Summary                                                                                         |
|:----------------------------------------------------------------------|:------------------------------------------------------------------------------------------------|
| [INLONG-3644](https://github.com/apache/incubator-inlong/issues/3644) | [Feature][TubeMQ]Upgrade netty version and tidy up dependencies.                                |
| [INLONG-3621](https://github.com/apache/incubator-inlong/issues/3621) | [Improve][TubeMQ] Added cluster switching method and delete cluster support to delete master    |
| [INLONG-3598](https://github.com/apache/incubator-inlong/issues/3598) | [Improve][TubeMQ] Add broker modify method                                                      |
| [INLONG-3568](https://github.com/apache/incubator-inlong/issues/3568) | [Improve][TubeMQ] Nodes realize batch online                                                    |
| [INLONG-3560](https://github.com/apache/incubator-inlong/issues/3560) | [Bug][TubeMQ][InLong] The tubemq pod is invalid                                                 |
| [INLONG-3547](https://github.com/apache/incubator-inlong/issues/3547) | [Bug][TubeMQ] curl and ps commands not found in tubemq docker container                         |
| [INLONG-3514](https://github.com/apache/incubator-inlong/issues/3514) | [Improve][TubeMQ] Add name and IP attributes for query cluster API                              |
| [INLONG-3509](https://github.com/apache/incubator-inlong/issues/3509) | [TubeMQ]Optimize the LICENSE file format of inlong-tubemq third-party components                |
| [INLONG-3477](https://github.com/apache/incubator-inlong/issues/3477) | [TubeMQ] Remove direct reference to log4j1.x                                                    |
| [INLONG-3453](https://github.com/apache/incubator-inlong/issues/3453) | [Feature][TubeMQ] Remove hibernete for tube manager                                             |
| [INLONG-3451](https://github.com/apache/incubator-inlong/issues/3451) | [Bug][Manager] Got wrong results when querying tube cluster info                                |
| [INLONG-3445](https://github.com/apache/incubator-inlong/issues/3445) | [Feature][TubeMQ] Remove the hibernate dependency for the tube manager                          |
| [INLONG-3432](https://github.com/apache/incubator-inlong/issues/3432) | [TubeMQ] Sort out the LICENSEs of the third-party components of inlong-tubemq-manager           |
| [INLONG-3431](https://github.com/apache/incubator-inlong/issues/3431) | [TubeMQ] Sort out the LICENSEs of the third-party components of inlong-tubemq                   |
| [INLONG-3429](https://github.com/apache/incubator-inlong/issues/3429) | [TubeMQ] Add missing adminQueryMasterVersion method                                             |
| [INLONG-3363](https://github.com/apache/incubator-inlong/issues/3363) | [TubeMQ]Added how to use optional BDB components and documentation                              |
| [INLONG-3354](https://github.com/apache/incubator-inlong/issues/3354) | [TubeMQ]Update master.ini configuration guidelines document                                     |
| [INLONG-3348](https://github.com/apache/incubator-inlong/issues/3348) | [TubeMQ] Update protobuf-java version to 3.19.4                                                 |
| [INLONG-3324](https://github.com/apache/incubator-inlong/issues/3324) | [TubeMQ]Optimize CliMetaDataBRU class implementation                                            |
| [INLONG-3290](https://github.com/apache/incubator-inlong/issues/3290) | [TubeMQ]Add the query API for finding the consumption group based on the specified topic        |
| [INLONG-3268](https://github.com/apache/incubator-inlong/issues/3268) | [TubeMQ] Fix some bugs when metadata is saved to ZooKeeper                                      |
| [INLONG-3254](https://github.com/apache/incubator-inlong/issues/3254) | [TubeMQ]Replace the call of MetaDataManager with DefaultMetaDataService                         |
| [INLONG-3201](https://github.com/apache/incubator-inlong/issues/3201) | [Improve][TubeMQ] Improve the cluster query function                                            |
| [INLONG-3154](https://github.com/apache/incubator-inlong/issues/3154) | [TubeMQ] Adjust the Master.ini file reading implementation                                      |
| [INLONG-3143](https://github.com/apache/incubator-inlong/issues/3143) | [TubeMQ] Optimize Metadatamanager class implementation                                          |
| [INLONG-3108](https://github.com/apache/incubator-inlong/issues/3108) | [TubeMQ] Optimize the implementation of KeepAlive Interface                                     |
| [INLONG-3105](https://github.com/apache/incubator-inlong/issues/3105) | [TubeMQ] Add MetaStoreMapper related implementation                                             |
| [INLONG-3095](https://github.com/apache/incubator-inlong/issues/3095) | [Improve][Manager] Update inlong group info in the complete listeners                           |
| [INLONG-3093](https://github.com/apache/incubator-inlong/issues/3093) | [TubeMQ] Optimize the AbsXXXMapperImpl implementation classes                                   |
| [INLONG-3079](https://github.com/apache/incubator-inlong/issues/3079) | [Bug][TubeMQ] An NPE was thrown when starting the Tube-Manager                                  |
| [INLONG-3078](https://github.com/apache/incubator-inlong/issues/3078) | [Bug][Sort] TubeClientException occurred in unit tests                                          |
| [INLONG-3072](https://github.com/apache/incubator-inlong/issues/3072) | [TubeMQ] Output the total count of control block in admin_query_cluster_topic_view              |
| [INLONG-3035](https://github.com/apache/incubator-inlong/issues/3035) | [TubeMQ] Optimize the MetaStoreService implementation class                                     |
| [INLONG-3029](https://github.com/apache/incubator-inlong/issues/3029) | [TubeMQ] Adjust the implementation classes under the impl.bdbimpl package                       |
| [INLONG-3020](https://github.com/apache/incubator-inlong/issues/3020) | [Improve] Format the some code of TubeMQ Go SDK                                                 |
| [INLONG-3015](https://github.com/apache/incubator-inlong/issues/3015) | [Feature][TubeMQ] Add configuration to support the number of reloaded machines per batch        |
| [INLONG-2980](https://github.com/apache/incubator-inlong/issues/2980) | [TubeMQ] Modify the code style problems of the metadata classes                                 |
| [INLONG-2979](https://github.com/apache/incubator-inlong/issues/2979) | [Feature] Tubemq cluster delete provides token code                                             |
| [INLONG-2955](https://github.com/apache/incubator-inlong/issues/2955) | [TubeMQ] Adjust the offsetstorage and zookeeper package paths                                   |
| [INLONG-2915](https://github.com/apache/incubator-inlong/issues/2915) | [TubeMQ] Fix code style issues                                                                  |
| [INLONG-2844](https://github.com/apache/incubator-inlong/issues/2844) | [TubeMQ] Implement the ZooKeeper-based metadata Mapper class                                    |
| [INLONG-2813](https://github.com/apache/incubator-inlong/issues/2813) | [Improve] update the docker config for getting TubeMq config dynamically                        |
| [INLONG-2803](https://github.com/apache/incubator-inlong/issues/2803) | [Improve][TubeMQ] Update the Python client package                                              |
| [INLONG-2776](https://github.com/apache/incubator-inlong/issues/2776) | [TubeMQ] Add metadata backup cli script                                                         |
| [INLONG-2728](https://github.com/apache/incubator-inlong/issues/2728) | [TubeMQ] Optimize the content of statistical metrics                                            |
| [INLONG-2620](https://github.com/apache/incubator-inlong/issues/2620) | [TubeMQ] Add direct write to disk control                                                       |
| [INLONG-2609](https://github.com/apache/incubator-inlong/issues/2609) | [TubeMQ] Fix Javadoc related errors                                                             |
| [INLONG-2603](https://github.com/apache/incubator-inlong/issues/2603) | [TubeMQ] Remove obsolete metric codes                                                           |
| [INLONG-2596](https://github.com/apache/incubator-inlong/issues/2596) | [Improve][TubeMQ] Fix param in the client module and the main class of tubeManager pom is error |
| [INLONG-2569](https://github.com/apache/incubator-inlong/issues/2569) | [TubeMQ] Discarded msgTime value when msgType is empty                                          |
| [INLONG-2555](https://github.com/apache/incubator-inlong/issues/2555) | [TubeMQ] Remove slf4j-log4j12                                                                   |
| [INLONG-2552](https://github.com/apache/incubator-inlong/issues/2552) | [TubeMQ] Add Master metric operation APIs                                                       |
| [INLONG-2538](https://github.com/apache/incubator-inlong/issues/2538) | [TubeMQ] Optimize message write cache logic                                                     |
| [INLONG-2518](https://github.com/apache/incubator-inlong/issues/2518) | [TubeMQ] Adjust the client's metric statistics logic                                            |
| [INLONG-2517](https://github.com/apache/incubator-inlong/issues/2517) | [TubeMQ] Adjust the statistical logic of the Master service status                              |
| [INLONG-2516](https://github.com/apache/incubator-inlong/issues/2516) | [TubeMQ] Optimize Broker's JMX metric interface                                                 |
| [INLONG-2508](https://github.com/apache/incubator-inlong/issues/2508) | [TubeMQ] Add Broker metric operation APIs                                                       |
| [INLONG-2505](https://github.com/apache/incubator-inlong/issues/2505) | [TubeMQ] Add MsgStoreStatsHolder class                                                          |
| [INLONG-2488](https://github.com/apache/incubator-inlong/issues/2488) | [TubeMQ] Optimize MsgFileStatisInfo implementation logic                                        |
| [INLONG-2484](https://github.com/apache/incubator-inlong/issues/2484) | [TubeMQ]Optimize MsgMemStatisInfo implementation logic                                          |
| [INLONG-2480](https://github.com/apache/incubator-inlong/issues/2480) | [TubeMQ] Add WebCallStatsHolder class for Web API call statistics                               |
| [INLONG-2478](https://github.com/apache/incubator-inlong/issues/2478) | [TubeMQ] Optimize GroupCountService logic implementation                                        |
| [INLONG-2474](https://github.com/apache/incubator-inlong/issues/2474) | [TubeMQ] Adjust the statistics of Broker's message service part                                 |
| [INLONG-2451](https://github.com/apache/incubator-inlong/issues/2451) | [TubeMQ] Add Histogram implementation classes                                                   |
| [INLONG-2445](https://github.com/apache/incubator-inlong/issues/2445) | [TubeMQ] Add Gauge and Counter implementation classes                                           |
| [INLONG-2433](https://github.com/apache/incubator-inlong/issues/2433) | [TubeMQ] Abstract metrics' interface                                                            |
| [INLONG-2353](https://github.com/apache/incubator-inlong/issues/2353) | [Feature] Tube manager cluster adds support for multi-master configuration                      |
| [INLONG-2282](https://github.com/apache/incubator-inlong/issues/2282) | [Feature][TubeMQ] Add ZooKeeper as the metadata storage component of TubeMQ                     |
| [INLONG-2204](https://github.com/apache/incubator-inlong/issues/2204) | [Improve][TubeMQ] Optimize the collection of metrics for TubeMQ                                 |
| [INLONG-1655](https://github.com/apache/incubator-inlong/issues/1655) | [Improve] TubeMQ Documents should use English pictures                                          |

### Dashboard
| ISSUE                                                                 | Summary                                                                                     |
|:----------------------------------------------------------------------|:--------------------------------------------------------------------------------------------|
| [INLONG-3684](https://github.com/apache/incubator-inlong/issues/3684) | [Improve][Dashboard]  Add tooltip for stream data type                                      |
| [INLONG-3670](https://github.com/apache/incubator-inlong/issues/3670) | [Improve][Dashboard] Add dashboard plugin docs to official website                          |
| [INLONG-3660](https://github.com/apache/incubator-inlong/issues/3660) | [Improve][Dashboard] Change visible for dataType and dataSeparator                          |
| [INLONG-3631](https://github.com/apache/incubator-inlong/issues/3631) | [Improve][Dashboard] Change the ClickHouse sink page to adapt the Manager module            |
| [INLONG-3617](https://github.com/apache/incubator-inlong/issues/3617) | [Improve][Dashboard] Add params for stream source to adapt Manager module                   |
| [INLONG-3556](https://github.com/apache/incubator-inlong/issues/3556) | [Feature][Dashboard] Add Iceberg params to adapt the Manager module                         |
| [INLONG-3518](https://github.com/apache/incubator-inlong/issues/3518) | [Feature][Dashboard] Support Iceberg Sink                                                   |
| [INLONG-3506](https://github.com/apache/incubator-inlong/issues/3506) | [Feature][Dashboard] Support Kafka                                                          |
| [INLONG-3498](https://github.com/apache/incubator-inlong/issues/3498) | [Improve][Dashboard] Adapt manager streams update API                                       |
| [INLONG-3496](https://github.com/apache/incubator-inlong/issues/3496) | [Improve][Dashboard] Update node version                                                    |
| [INLONG-3492](https://github.com/apache/incubator-inlong/issues/3492) | [Improve][Dashboard] Initialize a npmrc file                                                |
| [INLONG-3471](https://github.com/apache/incubator-inlong/issues/3471) | [Improve][Dashboard] Hive sink adapts to new manager API                                    |
| [INLONG-3442](https://github.com/apache/incubator-inlong/issues/3442) | [Dashboard] Sort out the LICENSEs of the third-party components of inlong-dashboard         |
| [INLONG-3423](https://github.com/apache/incubator-inlong/issues/3423) | [Improve][Dashboard] Add user and password config to binlog source                          |
| [INLONG-3394](https://github.com/apache/incubator-inlong/issues/3394) | [Improve][Dashboard] Remove the stream owner parameter and manage it uniformly by group     |
| [INLONG-3390](https://github.com/apache/incubator-inlong/issues/3390) | [Improve][Dashboard] Text form support date and array dataType                              |
| [INLONG-3341](https://github.com/apache/incubator-inlong/issues/3341) | [Feature][Dashboard] Sink supports plug-in configuration                                    |
| [INLONG-3314](https://github.com/apache/incubator-inlong/issues/3314) | [Improve][Dashboard] Support for new data stream API data formats                           |
| [INLONG-3280](https://github.com/apache/incubator-inlong/issues/3280) | [Bug][Manager][Dashboard] Update and delete datasource failed                               |
| [INLONG-3275](https://github.com/apache/incubator-inlong/issues/3275) | [Improve][Dashboard] Change the request method of list query from GET to POST               |
| [INLONG-3257](https://github.com/apache/incubator-inlong/issues/3257) | [Bug][Manager][Dashboard] Create CommonServerDB return 404                                  |
| [INLONG-3220](https://github.com/apache/incubator-inlong/issues/3220) | [Improve][Dashboard] The binlog configuration aligns the parameters of the managerAPI       |
| [INLONG-3128](https://github.com/apache/incubator-inlong/issues/3128) | [Feature][Dashboard] Make binlog as a source type                                           |
| [INLONG-2997](https://github.com/apache/incubator-inlong/issues/2997) | [Improve][Dashboard] The group execution log needs to distinguish between different states  |
| [INLONG-2996](https://github.com/apache/incubator-inlong/issues/2996) | [Bug][Dashboard] An error is reported after closing the group execution log modal           |
| [INLONG-2895](https://github.com/apache/incubator-inlong/issues/2895) | [Feature][Dashboard] The data source in the data stream supports binlog collection          |
| [INLONG-2861](https://github.com/apache/incubator-inlong/issues/2861) | [Feature][Dashboard] Support common data source module                                      |
| [INLONG-2799](https://github.com/apache/incubator-inlong/issues/2799) | [Bug][Dashboard] Some code specification issues                                             |
| [INLONG-2624](https://github.com/apache/incubator-inlong/issues/2624) | [Improve][Dashboard] Modify the interface and parameters to adapt to changes in the Manager |
| [INLONG-2535](https://github.com/apache/incubator-inlong/issues/2535) | [Improve][dashboard] Audit module display time in reverse order                             |
| [INLONG-2500](https://github.com/apache/incubator-inlong/issues/2500) | [Feature][Dashboard] Adapt to Manager's modification of data storage                        |
| [INLONG-2461](https://github.com/apache/incubator-inlong/issues/2461) | [Bug] a number of CVEs exist for NPMs exist in dashboard                                    |