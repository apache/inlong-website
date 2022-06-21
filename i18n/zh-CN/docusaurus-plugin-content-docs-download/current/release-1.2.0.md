---
title: InLong v1.2.0
---

使用以下链接下载 InLong。

## 1.2.0 release

|         名称           |   版本  |     日期     |                                                                                                                                                                                          Downloads                                                                                                                                                                                                       |
|:---------------------:| :----: | :----------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| InLong Source Code    | 1.2.0  | Jun 20, 2022 | [[SRC](https://downloads.apache.org/inlong/1.2.0-incubating/apache-inlong-1.2.0-incubating-src.tar.gz)]                [[ASC](https://downloads.apache.org/inlong/1.2.0-incubating/apache-inlong-1.2.0-incubating-src.tar.gz.asc)]                [[SHA512](https://downloads.apache.org/inlong/1.2.0-incubating/apache-inlong-1.2.0-incubating-src.tar.gz.sha512)]                                      |
| InLong Binary file    | 1.2.0  | Jun 20, 2022 | [[BIN](https://downloads.apache.org/inlong/1.2.0-incubating/apache-inlong-1.2.0-incubating-bin.tar.gz)]                [[ASC](https://downloads.apache.org/inlong/1.2.0-incubating/apache-inlong-1.2.0-incubating-bin.tar.gz.asc)]                [[SHA512](https://downloads.apache.org/inlong/1.2.0-incubating/apache-inlong-1.2.0-incubating-bin.tar.gz.sha512)]                                      |
| Connector Binary file | 1.2.0  | Jun 20, 2022 | [[BIN](https://downloads.apache.org/inlong/1.2.0-incubating/apache-inlong-1.2.0-incubating-sort-connectors.tar.gz)]                [[ASC](https://downloads.apache.org/inlong/1.2.0-incubating/apache-inlong-1.2.0-incubating-sort-connectors.tar.gz.asc)]                [[SHA512](https://downloads.apache.org/inlong/1.2.0-incubating/apache-inlong-1.2.0-incubating-sort-connectors.tar.gz.sha512)]  |

### 发布完整性

您必须 [验证](https://www.apache.org/info/verification.html) 下载文件的完整性。
我们为每个发布文件提供 OpenPGP 签名。此签名应与包含 InLong 发布经理的 OpenPGP 密钥的 [KEYS](https://downloads.apache.org/incubator/inlong/KEYS) 文件匹配。
我们还为每个发布文件提供 <code>SHA-512</code> 校验和。下载文件后，您应该计算下载的校验和，并确保它与我们提供的相同。

## 版本 Notes

### Agent
| ISSUE                                                                 | Summary                                                                                                |
|:----------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------|
| [INLONG-4483](https://github.com/apache/incubator-inlong/issues/4483) | [Bug][Agent] Many ConnectException logs in unit test of Kafka source                                   |
| [INLONG-4193](https://github.com/apache/incubator-inlong/issues/4193) | [Improve][Agent] Add Java docs                                                                         |
| [INLONG-4112](https://github.com/apache/incubator-inlong/issues/4112) | [Feature][Agent] Support collect data from a specified position for MySQL binlog                       |
| [INLONG-2563](https://github.com/apache/incubator-inlong/issues/2563) | [Feature][Agent] Move public domain from agent to agent-common                                         |
| [INLONG-4397](https://github.com/apache/incubator-inlong/issues/4397) | [Feature][Agent] Supports collect of full data for file type                                           |
| [INLONG-4359](https://github.com/apache/incubator-inlong/issues/4359) | [Improve][Agent] Simplify agent process commands                                                       |
| [INLONG-4292](https://github.com/apache/incubator-inlong/issues/4292) | [Improve][Agent][TubeMQ][Sort] Upgrade the property file for all modules from log4j to log4j2          |
| [INLONG-4283](https://github.com/apache/incubator-inlong/issues/4283) | [Bug][Agent] The kafka-clients with 3.0.0 does not package to the jar                                  |
| [INLONG-4235](https://github.com/apache/incubator-inlong/issues/4235) | [Bug][Agent] Config the log info for unit tests of the agent plugin                                    |

### Audit
| ISSUE                                                                 | Summary                                                                                                |
|:----------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------|
| [INLONG-4594](https://github.com/apache/incubator-inlong/issues/4594) | [Improve][Audit] Make Elasticsearch authentication configurable                                        |
| [INLONG-4520](https://github.com/apache/incubator-inlong/issues/4520) | [Improve][Audit] Audit-proxy supports Pulsar authenticate                                              |
| [INLONG-4477](https://github.com/apache/incubator-inlong/issues/4477) | [Improve][Audit] Audit-store supports Pulsar authenticate                                              |
| [INLONG-3895](https://github.com/apache/incubator-inlong/issues/3895) | [Bug][Audit] Proxy store startup script log path error                                                 |
| [INLONG-3853](https://github.com/apache/incubator-inlong/issues/3853) | [Bug][Audit] audit can not start for script bug                                                        |

### Dashboard
| ISSUE                                                                 | Summary                                                                                                |
|:----------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------|
| [INLONG-4612](https://github.com/apache/incubator-inlong/issues/4612) | [Improve][Dashboard][Manager] Iceberg sink configuration protocol key update                           |
| [INLONG-4610](https://github.com/apache/incubator-inlong/issues/4610) | [Improve][Dashboard] Save sink fields failed                                                           |
| [INLONG-4588](https://github.com/apache/incubator-inlong/issues/4588) | [Improve][Dashboard] Approval management splits different routes                                       |
| [INLONG-4580](https://github.com/apache/incubator-inlong/issues/4580) | [Bug][Dashboard] File source IP and Hive conf dir are mandatory                                        |
| [INLONG-4577](https://github.com/apache/incubator-inlong/issues/4577) | [Feature][Dashboard] Support TubeMQ cluster management                                                 |
| [INLONG-4550](https://github.com/apache/incubator-inlong/issues/4550) | [Feature][Dashboard] Support DataProxy Cluster and Node management                                     |
| [INLONG-4544](https://github.com/apache/incubator-inlong/issues/4544) | [Improve][Dashboard] Pulsar Cluster support tenant param                                               |
| [INLONG-4523](https://github.com/apache/incubator-inlong/issues/4523) | [Feature][Dashboard] Support Clusters Module                                                           |
| [INLONG-4500](https://github.com/apache/incubator-inlong/issues/4500) | [Improve][Manager][Dashboard] Remove non-null restriction on hiveConfDir parameter                     |
| [INLONG-4436](https://github.com/apache/incubator-inlong/issues/4436) | [Bug][Dashboard] Hive Sink confDir parameter tooltip error                                             |
| [INLONG-4488](https://github.com/apache/incubator-inlong/issues/4488) | [Improve][Dashboard] Remove useless modules                                                            |
| [INLONG-4423](https://github.com/apache/incubator-inlong/issues/4423) | [Improve][Dashboard] Hive Sink adds hiveConfDir parameter                                              |
| [INLONG-4319](https://github.com/apache/incubator-inlong/issues/4319) | [Improve][Dashboard] Approve page support cluster info                                                 |
| [INLONG-4284](https://github.com/apache/incubator-inlong/issues/4284) | [Improve][Dashboard] Modify ClickHouse sink parameters                                                 |
| [INLONG-4274](https://github.com/apache/incubator-inlong/issues/4274) | [Improve][Dashboard] Update the parameters to adapt the manager module                                 |
| [INLONG-4218](https://github.com/apache/incubator-inlong/issues/4218) | [Feature][Dashboard] Unified group page                                                                |
| [INLONG-4119](https://github.com/apache/incubator-inlong/issues/4119) | [Improve][Dashboard] Change the keyWord to keyword in query request params                             |
| [INLONG-4102](https://github.com/apache/incubator-inlong/issues/4102) | [Improve][Dashboard] Add tooltip for dataPath of the Hive sink                                         |
| [INLONG-4089](https://github.com/apache/incubator-inlong/issues/4089) | [Feature][Dashboard] Create ClickHouse sink need to fill more params                                   |
| [INLONG-4031](https://github.com/apache/incubator-inlong/issues/4031) | [Bug][Dashboard] Kafka sink storage topic partitionNum key error                                       |
| [INLONG-4028](https://github.com/apache/incubator-inlong/issues/4028) | [Bug][Dashboard] ClickHouse types do not match what ClickHouse using                                   |
| [INLONG-3938](https://github.com/apache/incubator-inlong/issues/3938) | [Bug][Dashboard] CI workflow build failed incidentally                                                 |
| [INLONG-3851](https://github.com/apache/incubator-inlong/issues/3851) | [Improve][Dashboard] Unify the naming of data streams                                                  |

### DataProxy
| ISSUE                                                                 | Summary                                                                                                |
|:----------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------|
| [INLONG-4521](https://github.com/apache/incubator-inlong/issues/4521) | [Improve][DataProxy][Manager] Change the naming of third-party cluster related classes                 |
| [INLONG-4056](https://github.com/apache/incubator-inlong/issues/4056) | [Feature][DataProxy] Return the response to the SDK/Agent after saving the event to the cache cluster  |

### Manager
| ISSUE                                                                 | Summary                                                                                                |
|:----------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------|
| [INLONG-4648](https://github.com/apache/incubator-inlong/issues/4648) | [Improve][Manager] Read the path of Sort connectors from configuration file                            |
| [INLONG-4626](https://github.com/apache/incubator-inlong/issues/4626) | [Improve][Manager] Remove redundant connector sub directory                                            |
| [INLONG-4622](https://github.com/apache/incubator-inlong/issues/4622) | [Bug][Manager] Append db name in JDBC URL for load node                                                |
| [INLONG-4615](https://github.com/apache/incubator-inlong/issues/4615) | [Improve][Manager] PluginClassLoader adapts to the Windows system                                      |
| [INLONG-4612](https://github.com/apache/incubator-inlong/issues/4612) | [Improve][Dashboard][Manager] Iceberg sink configuration protocol key update                           |
| [INLONG-4607](https://github.com/apache/incubator-inlong/issues/4607) | [Bug][Manager] Add ClickHouse field types for FormatInfo                                               |
| [INLONG-4601](https://github.com/apache/incubator-inlong/issues/4601) | [Bug][Manager] The fieldList in SinkRequest should be changed to sinkFieldList                         |
| [INLONG-4598](https://github.com/apache/incubator-inlong/issues/4598) | [Bug][Manager] Pulsar topic incorrect                                                                  |
| [INLONG-4586](https://github.com/apache/incubator-inlong/issues/4586) | [Improve][Manager] Fix redefined streamFields in stream source                                         |
| [INLONG-4583](https://github.com/apache/incubator-inlong/issues/4583) | [Bug][Manager] Query InlongGroup info error from the browser                                           |
| [INLONG-4563](https://github.com/apache/incubator-inlong/issues/4563) | [Feature][Manager] Support create TubeMQ resources by its origin APIs                                  |
| [INLONG-4556](https://github.com/apache/incubator-inlong/issues/4556) | [Improve][Manager] Optimize ProcessorExecutor Logic                                                    |
| [INLONG-4552](https://github.com/apache/incubator-inlong/issues/4552) | [Improve][Manager] Add composite index for table in DDL                                                |
| [INLONG-4543](https://github.com/apache/incubator-inlong/issues/4543) | [Improve][Manager] Query MQ clusters from inlong cluster table                                         |
| [INLONG-4541](https://github.com/apache/incubator-inlong/issues/4541) | [Feature][Manager] Support save extension params for inlong cluster                                    |
| [INLONG-4534](https://github.com/apache/incubator-inlong/issues/4534) | [Improve][Manager] Add complete unit test to create data flow                                          |
| [INLONG-4532](https://github.com/apache/incubator-inlong/issues/4532) | [Improve][Manager] Init sort config error during initing group info in the client                      |
| [INLONG-4529](https://github.com/apache/incubator-inlong/issues/4529) | [Improve][Manager] Fix PluginClassLoader unit test error                                               |
| [INLONG-4528](https://github.com/apache/incubator-inlong/issues/4528) | [Feature][Manager] Support Greenplum sink                                                              |
| [INLONG-4521](https://github.com/apache/incubator-inlong/issues/4521) | [Improve][DataProxy][Manager] Change the naming of third-party cluster related classes                 |
| [INLONG-4519](https://github.com/apache/incubator-inlong/issues/4519) | [Feature][Manager] Support Elasticsearch sink                                                          |
| [INLONG-4516](https://github.com/apache/incubator-inlong/issues/4516) | [Improve][Manager] Get the MQ cluster for data proxy from the inlong cluster table                     |
| [INLONG-4513](https://github.com/apache/incubator-inlong/issues/4513) | [Improve][Manager] Add Iceberg and HBase examples for the manager client                               |
| [INLONG-4512](https://github.com/apache/incubator-inlong/issues/4512) | [Improve][Manager] Remove third_party_cluster and data_proxy_cluster tables                            |
| [INLONG-4510](https://github.com/apache/incubator-inlong/issues/4510) | [Improve][Manager] Remove GsonUtils, InlongParser, and Gson dependency                                 |
| [INLONG-4508](https://github.com/apache/incubator-inlong/issues/4508) | [Improve][Manager] Remove the management of the DB and file servers' config                            |
| [INLONG-4505](https://github.com/apache/incubator-inlong/issues/4505) | [Improve][Manager] Improve the return information of validation rules                                  |
| [INLONG-4503](https://github.com/apache/incubator-inlong/issues/4503) | [Bug][Manager] Client executes request error                                                           |
| [INLONG-4500](https://github.com/apache/incubator-inlong/issues/4500) | [Improve][Manager][Dashboard] Remove non-null restriction on hiveConfDir parameter                     |
| [INLONG-4497](https://github.com/apache/incubator-inlong/issues/4497) | [Improve][Manager] Fix deleteGroup Async method in Client                                              |
| [INLONG-4487](https://github.com/apache/incubator-inlong/issues/4487) | [Improve][Manager] Fix json parse exception for streamSource/streamSink                                |
| [INLONG-4481](https://github.com/apache/incubator-inlong/issues/4481) | [Improve][Manager] Restore iceberg fields that may still have dependents                               |
| [INLONG-4473](https://github.com/apache/incubator-inlong/issues/4473) | [Bug][Manager] DuplicateKeyException when save StreamSinkField                                         |
| [INLONG-4471](https://github.com/apache/incubator-inlong/issues/4471) | [Improve][Manager] Fix json parse exception in Client                                                  |
| [INLONG-4468](https://github.com/apache/incubator-inlong/issues/4468) | [Improve][Manager] Use config url to create pulsar admin                                               |
| [INLONG-4466](https://github.com/apache/incubator-inlong/issues/4466) | [Bug][Manager] The Oracle data source could not be parsed                                              |
| [INLONG-4464](https://github.com/apache/incubator-inlong/issues/4464) | [Improve][Manager] Fix problems emerged from full link path test                                       |
| [INLONG-4462](https://github.com/apache/incubator-inlong/issues/4462) | [Improve][Manager] Fix NPE when parsing pageInfo in manager client                                     |
| [INLONG-4476](https://github.com/apache/incubator-inlong/issues/4476) | [Improve][Sort][Manager] Remove zk and related classes                                                 |
| [INLONG-4458](https://github.com/apache/incubator-inlong/issues/4458) | [Improve][Sort][Manager] Unify the meta field naming                                                   |
| [INLONG-4445](https://github.com/apache/incubator-inlong/issues/4445) | [Improve][Manager] Change the relationship to relation to adapt the Sort protocol                      |
| [INLONG-4443](https://github.com/apache/incubator-inlong/issues/4443) | [Improve][Manager] Remove some deprecated classes                                                      |
| [INLONG-4439](https://github.com/apache/incubator-inlong/issues/4439) | [Improve][Manager] Refactor gson adapter for managerctl                                                |
| [INLONG-4438](https://github.com/apache/incubator-inlong/issues/4438) | [Bug][Manager] Caught BusinessException when deploy InLong cluster firstly                             |
| [INLONG-4428](https://github.com/apache/incubator-inlong/issues/4428) | [Improve][Sort][Manager] Optimize the name for Data Node related modules and classes                   |
| [INLONG-4427](https://github.com/apache/incubator-inlong/issues/4427) | [Improve][Manager] The manager-client module reuses the source classes in manager-common               |
| [INLONG-4421](https://github.com/apache/incubator-inlong/issues/4421) | [Improve][Manager] Remove unused classes and table structures                                          |
| [INLONG-4419](https://github.com/apache/incubator-inlong/issues/4419) | [Improve][Manager] The manager-client module reuses the sink classes in manager-common                 |
| [INLONG-4417](https://github.com/apache/incubator-inlong/issues/4417) | [Improve][Manager] Manager print error logs when deploy by docker-compose                              |
| [INLONG-4414](https://github.com/apache/incubator-inlong/issues/4414) | [Feature][Manager]  Support MySQL data sink                                                            |
| [INLONG-4408](https://github.com/apache/incubator-inlong/issues/4408) | [Feature][Manager][Sort] Add iceberg sink load node                                                    |
| [INLONG-4406](https://github.com/apache/incubator-inlong/issues/4406) | [Improve][Manager] Fix InlongGroupInfo parse exception                                                 |
| [INLONG-4398](https://github.com/apache/incubator-inlong/issues/4398) | [Bug][Manager] Status display incomplete for managerctl                                                |
| [INLONG-4388](https://github.com/apache/incubator-inlong/issues/4388) | [Bug][Manager] Elasticsearch create command scaling_factor use wrong mapping info                      |
| [INLONG-4384](https://github.com/apache/incubator-inlong/issues/4384) | [Improve][Manager] Store the specific field params of the Iceberg to extParams                         |
| [INLONG-4381](https://github.com/apache/incubator-inlong/issues/4381) | [Improve][Manager] Optimize client http request                                                        |
| [INLONG-4377](https://github.com/apache/incubator-inlong/issues/4377) | [Feature][Manager] Add hbase and elasticsearch sink type support in manager client sdk                 |
| [INLONG-4376](https://github.com/apache/incubator-inlong/issues/4376) | [Feature][Manager] Support SqlServer sink                                                              |
| [INLONG-4369](https://github.com/apache/incubator-inlong/issues/4369) | [Improve][Manager] Support for modification of information after approval                              |
| [INLONG-4364](https://github.com/apache/incubator-inlong/issues/4364) | [Improve][Manager] Optimize sort protocol                                                              |
| [INLONG-4362](https://github.com/apache/incubator-inlong/issues/4362) | [Bug][Manager] Lack of flink dependencies for inlong-manager/manager-plugins                           |
| [INLONG-4361](https://github.com/apache/incubator-inlong/issues/4361) | [Improve][Manager] Refactor the manager client module                                                  |
| [INLONG-4358](https://github.com/apache/incubator-inlong/issues/4358) | [Feature][Manager] Support SqlServer source                                                            |
| [INLONG-4337](https://github.com/apache/incubator-inlong/issues/4337) | [Improve][Manager] Remove inlong group pulsar related tables and classes                               |
| [INLONG-4332](https://github.com/apache/incubator-inlong/issues/4332) | [Feature][Manager][Sort] Support ClickHouse load node                                                  |
| [INLONG-4325](https://github.com/apache/incubator-inlong/issues/4325) | [Bug][Manager] Register sql function exception                                                         |
| [INLONG-4315](https://github.com/apache/incubator-inlong/issues/4315) | [Bug][Manager] Incorrect task service node order in create-group workflow                              |
| [INLONG-4310](https://github.com/apache/incubator-inlong/issues/4310) | [Feature][Manager] Manager-plugin adapt changes in sort entrance                                       |
| [INLONG-4309](https://github.com/apache/incubator-inlong/issues/4309) | [Feature][Manager] Supplement hbase dependencies and license file                                      |
| [INLONG-4301](https://github.com/apache/incubator-inlong/issues/4301) | [Feature][Manager] Support oracle source                                                               |
| [INLONG-4300](https://github.com/apache/incubator-inlong/issues/4300) | [Improve][Manager] Autowired the workflow resources to simply the bean management                      |
| [INLONG-4299](https://github.com/apache/incubator-inlong/issues/4299) | [Improve][Manager] Add InlongStreamExtensionInfo                                                       |
| [INLONG-4295](https://github.com/apache/incubator-inlong/issues/4295) | [Improve][Manager] Add Json sub type support for InlongGroupInfo                                       |
| [INLONG-4280](https://github.com/apache/incubator-inlong/issues/4280) | [Feature][Manager] Add params for Iceberg sink                                                         |
| [INLONG-4278](https://github.com/apache/incubator-inlong/issues/4278) | [Improve][Manager] Support pulsar extract node in Manager                                              |
| [INLONG-4273](https://github.com/apache/incubator-inlong/issues/4273) | [Feature][Manager] Add MongoDB source support                                                          |
| [INLONG-4270](https://github.com/apache/incubator-inlong/issues/4270) | [Feature][Manager] Inlong group supports extensions of different types of MQ                           |
| [INLONG-4263](https://github.com/apache/incubator-inlong/issues/4263) | [Feature][Manager] Support HBase sink resource creation                                                |
| [INLONG-4254](https://github.com/apache/incubator-inlong/issues/4254) | [Bug][Manager] Lack of flink dependencies for inlong-manager/manager-plugins                           |
| [INLONG-4247](https://github.com/apache/incubator-inlong/issues/4247) | [Improve][Manager] Add stream create/suspend/restart/delete api                                        |
| [INLONG-4245](https://github.com/apache/incubator-inlong/issues/4245) | [Improve][Manager][Sort] Manager transmit consumer group name of kafka to sort                         |
| [INLONG-4240](https://github.com/apache/incubator-inlong/issues/4240) | [Feature][Manager] Add postgres source and sink node configuration utils                               |
| [INLONG-4239](https://github.com/apache/incubator-inlong/issues/4239) | [Improve][Manager] Remove fastjson dependency                                                          |
| [INLONG-4236](https://github.com/apache/incubator-inlong/issues/4236) | [Feature][Manager] Support operating the indices and mappings for Elasticsearch                        |
| [INLONG-4228](https://github.com/apache/incubator-inlong/issues/4228) | [Feature][Sort][Manager] Adaptive HDFS Load Node                                                       |
| [INLONG-4223](https://github.com/apache/incubator-inlong/issues/4223) | [Improve][Manager] Refactor the consumption table structure                                            |
| [INLONG-4221](https://github.com/apache/incubator-inlong/issues/4221) | [Improve][Manager] Remove duplicate serializationType in KafkaSourceListResponse                       |
| [INLONG-4220](https://github.com/apache/incubator-inlong/issues/4220) | [Feature][Manager] Add StreamResourceProcessForm                                                       |
| [INLONG-4212](https://github.com/apache/incubator-inlong/issues/4212) | [Bug][Manager] The processor executor maybe throws a null pointer exception                            |
| [INLONG-4208](https://github.com/apache/incubator-inlong/issues/4208) | [Improve][Manager] Merge UpdateGroupProcessForm into GroupResourceProcessForm                          |
| [INLONG-4203](https://github.com/apache/incubator-inlong/issues/4203) | [Improve][Manager] Improve the HTTP request and response parse                                         |
| [INLONG-4197](https://github.com/apache/incubator-inlong/issues/4197) | [Feature][Manager] Add Hbase sink info and load node utils                                             |
| [INLONG-4194](https://github.com/apache/incubator-inlong/issues/4194) | [Improve][Manager] Add update sort config API in manager client                                        |
| [INLONG-4188](https://github.com/apache/incubator-inlong/issues/4188) | [Improve][Manager] Check whether the stream exists in the manager client                               |
| [INLONG-4186](https://github.com/apache/incubator-inlong/issues/4186) | [Improve][Manager] Add token field in cluster and node table                                           |
| [INLONG-4183](https://github.com/apache/incubator-inlong/issues/4183) | [Improve][Manager] Fix splitFields in manager service                                                  |
| [INLONG-4181](https://github.com/apache/incubator-inlong/issues/4181) | [Improve][Manager]Fix transform update api                                                             |
| [INLONG-4179](https://github.com/apache/incubator-inlong/issues/4179) | [Improve][Manager] Add comments in manager modules                                                     |
| [INLONG-4177](https://github.com/apache/incubator-inlong/issues/4177) | [Feature][Manager] Refactor getSortClusterConfig interface                                             |
| [INLONG-4168](https://github.com/apache/incubator-inlong/issues/4168) | [Feature][Manager] Update inlong_group table schema                                                    |
| [INLONG-4164](https://github.com/apache/incubator-inlong/issues/4164) | [Improve][Manager] Migrate the use of third_party_cluster table to inlong_cluster table                |
| [INLONG-4155](https://github.com/apache/incubator-inlong/issues/4155) | [Improve][Manager] Change constants and remove clone method in WorkflowContext                         |
| [INLONG-4146](https://github.com/apache/incubator-inlong/issues/4146) | [Feature][Manager] Get DataProxy configuration data from inlong_cluster table                          |
| [INLONG-4142](https://github.com/apache/incubator-inlong/issues/4142) | [Improve][Manager] Improve ServiceTask clone method                                                    |
| [INLONG-4139](https://github.com/apache/incubator-inlong/issues/4139) | [Improve][Manager] Query inlong group by the status list in manager client                             |
| [INLONG-4133](https://github.com/apache/incubator-inlong/issues/4133) | [Improve][Manager] Not pass the type field when querying sources and sinks                             |
| [INLONG-4128](https://github.com/apache/incubator-inlong/issues/4128) | [Improve][Manager] Abstracting the logic for creating Hive tables                                      |
| [INLONG-4120](https://github.com/apache/incubator-inlong/issues/4120) | [Improve][Manager] Change the keyWord to keyword in query params                                       |
| [INLONG-4118](https://github.com/apache/incubator-inlong/issues/4118) | [Improve][Manager] It should not return an empty list when paging the auto-push source                 |
| [INLONG-4110](https://github.com/apache/incubator-inlong/issues/4110) | [Improve][Manager] Create cascade function wrapper                                                     |
| [INLONG-4108](https://github.com/apache/incubator-inlong/issues/4108) | [Improve][Manager] Merge two enums of manager                                                          |
| [INLONG-4105](https://github.com/apache/incubator-inlong/issues/4105) | [Improve][Manager] Refactor the sink workflow and sink resource operator                               |
| [INLONG-4100](https://github.com/apache/incubator-inlong/issues/4100) | [Improve][Manager] Add id in update request for source/sink/transform                                  |
| [INLONG-4099](https://github.com/apache/incubator-inlong/issues/4099) | [Feature][Manager] Support iceberg stream sink resource operator                                       |
| [INLONG-4095](https://github.com/apache/incubator-inlong/issues/4095) | [Bug][Manager] Managerctl unit test error and characters are not aligned                               |
| [INLONG-4092](https://github.com/apache/incubator-inlong/issues/4092) | [Improve][Manager] Add primary key in Kafka source                                                     |
| [INLONG-4085](https://github.com/apache/incubator-inlong/issues/4085) | [Improve][Manager] Change the inlong_group and inlong_stream table structure                           |
| [INLONG-4084](https://github.com/apache/incubator-inlong/issues/4084) | [Improve][Manager] Add some fields for stream_source and stream_sink                                   |
| [INLONG-4078](https://github.com/apache/incubator-inlong/issues/4078) | [Improve][Manager] Add notes for manager client api                                                    |
| [INLONG-4077](https://github.com/apache/incubator-inlong/issues/4077) | [Improve][Manager] Implement the APIs of data node management                                          |
| [INLONG-4071](https://github.com/apache/incubator-inlong/issues/4071) | [Feature][Manager] Add data cluster table                                                              |
| [INLONG-4070](https://github.com/apache/incubator-inlong/issues/4070) | [Improve][Manager] Add update api In Inlong stream                                                     |
| [INLONG-4069](https://github.com/apache/incubator-inlong/issues/4069) | [Improve][Manager] Add ext_tag field for inlong cluster table                                          |
| [INLONG-4067](https://github.com/apache/incubator-inlong/issues/4067) | [Improve][Manager] Optimize fieldRelationShip in split transform                                       |
| [INLONG-4063](https://github.com/apache/incubator-inlong/issues/4063) | [Umbrella][Manager] Refactor the inlong group interfaces to support easily extending different MQs     |
| [INLONG-4060](https://github.com/apache/incubator-inlong/issues/4060) | [Improve][Manager] Fix NodeUtils for sort                                                              |
| [INLONG-4052](https://github.com/apache/incubator-inlong/issues/4052) | [Improve][Manager] Remove zone tag field of inlong cluster table                                       |
| [INLONG-4046](https://github.com/apache/incubator-inlong/issues/4046) | [Feature][Manager] Fix Filter Function of Join node                                                    |
| [INLONG-4042](https://github.com/apache/incubator-inlong/issues/4042) | [Improve][Manager] Add properties in MysqlExtractNode for migrating all databases                      |
| [INLONG-4040](https://github.com/apache/incubator-inlong/issues/4040) | [Bug][Manager] Hive sink table path config error                                                       |
| [INLONG-4034](https://github.com/apache/incubator-inlong/issues/4034) | [Improve][Manager] Add originFieldName in StreamField                                                  |
| [INLONG-4026](https://github.com/apache/incubator-inlong/issues/4026) | [Improve][Manager] Fix field type of StreamSourceFieldMapper                                           |
| [INLONG-4017](https://github.com/apache/incubator-inlong/issues/4017) | [Bug][Manager] Fix DataType deserialized exception                                                     |
| [INLONG-4012](https://github.com/apache/incubator-inlong/issues/4012) | [Feature][Manager] Add kafka sink resource operator                                                    |
| [INLONG-4000](https://github.com/apache/incubator-inlong/issues/4000) | [Improve][Manager] Refactor the implementations of heartbeat interfaces                                |
| [INLONG-3993](https://github.com/apache/incubator-inlong/issues/3993) | [Improve][Manager] Support HiveLoadNode in light mode                                                  |
| [INLONG-3981](https://github.com/apache/incubator-inlong/issues/3981) | [Improve][Manager] Fix status check of lightweight Group                                               |
| [INLONG-3958](https://github.com/apache/incubator-inlong/issues/3958) | [Improve][Manager] Fix NPEs in manager service                                                         |
| [INLONG-3951](https://github.com/apache/incubator-inlong/issues/3951) | [Bug][Manager] Unique index error for cluster_name in SQL file                                         |
| [INLONG-3947](https://github.com/apache/incubator-inlong/issues/3947) | [Improve][Manager] Support blank middleware                                                            |
| [INLONG-3946](https://github.com/apache/incubator-inlong/issues/3946) | [Improve][Manager] Implement the APIs of cluster management                                            |
| [INLONG-3943](https://github.com/apache/incubator-inlong/issues/3943) | [Feature][Manager] Add inlong_cluster and inlong_cluster_node tables                                   |
| [INLONG-3942](https://github.com/apache/incubator-inlong/issues/3942) | [Umbrella][Manager] Provides cluster management features for the InLong                                |
| [INLONG-3929](https://github.com/apache/incubator-inlong/issues/3929) | [Improve][Manager] Support deDuplicate transform in manager                                            |
| [INLONG-3921](https://github.com/apache/incubator-inlong/issues/3921) | [Improve][Manager] Add primary key in Kafka source                                                     |
| [INLONG-3920](https://github.com/apache/incubator-inlong/issues/3920) | [Improve][Manager] Add primary key in Binlog source                                                    |
| [INLONG-3919](https://github.com/apache/incubator-inlong/issues/3919) | [Improve][Manager] Data consumption and data source module supports access control                     |
| [INLONG-3915](https://github.com/apache/incubator-inlong/issues/3915) | [Bug][Manager] Missing delete flag on entity creation                                                  |
| [INLONG-3888](https://github.com/apache/incubator-inlong/issues/3888) | [Bug][Manager] The method of batchSaveAll occurred error as the sink_name was null                     |
| [INLONG-3883](https://github.com/apache/incubator-inlong/issues/3883) | [Feature][Manager] Support create table of ClickHouse                                                  |
| [INLONG-3879](https://github.com/apache/incubator-inlong/issues/3879) | [Improve][Manager] Update status enum for group, stream,  source, and sink                             |
| [INLONG-3876](https://github.com/apache/incubator-inlong/issues/3876) | [Bug][Manager] The managerctl tool crashes when lunches with  -h or --help argument                    |
| [INLONG-3874](https://github.com/apache/incubator-inlong/issues/3874) | [Improve][Manager] Abstract the operator class for creating Sink resources                             |
| [INLONG-3866](https://github.com/apache/incubator-inlong/issues/3866) | [Improve][Manager] Rename the third-party package to resource                                          |
| [INLONG-3861](https://github.com/apache/incubator-inlong/issues/3861) | [Improve][Manager] Support the expansion of TubeMQ, Pulsar, or other message queues                    |
| [INLONG-3858](https://github.com/apache/incubator-inlong/issues/3858) | [Bug][Manager] The other admin role can not list all inlong group info and stream info                 |
| [INLONG-3856](https://github.com/apache/incubator-inlong/issues/3856) | [Feature][Manager] Add heartbeat report handler                                                        |
| [INLONG-3855](https://github.com/apache/incubator-inlong/issues/3855) | [Feature][Manager] Add lightweight mode for inlong group                                               |
| [INLONG-3782](https://github.com/apache/incubator-inlong/issues/3782) | [Improve][Manager] Improve the log configuration                                                       |
| [INLONG-3776](https://github.com/apache/incubator-inlong/issues/3776) | [Improve][Manager] Update the third-party components LICENSEs                                          |
| [INLONG-3775](https://github.com/apache/incubator-inlong/issues/3775) | [Improve][Manager] Add a specific meaning for the managerctl status output                             |
| [INLONG-3731](https://github.com/apache/incubator-inlong/issues/3731) | [Improve][Manager] Make state more abstract for managerctl                                             |
| [INLONG-3719](https://github.com/apache/incubator-inlong/issues/3719) | [Feature][Manager] Support data_transformation feature                                                 |
| [INLONG-3698](https://github.com/apache/incubator-inlong/issues/3698) | [Feature][Manager] Support complex data type distribution for hive-sink                                |
| [INLONG-3636](https://github.com/apache/incubator-inlong/issues/3636) | [Improve][Manager] Fix the warning logs during the build                                               |
| [INLONG-3392](https://github.com/apache/incubator-inlong/issues/3392) | [Improve][Manager] Optimize groupName and groupId                                                      |
| [INLONG-3238](https://github.com/apache/incubator-inlong/issues/3238) | [Bug][Manager] The data grouping list cannot be edited?                                                |
| [INLONG-2901](https://github.com/apache/incubator-inlong/issues/2901) | [Bug][Manager] Maven cannot run test classes                                                           |
| [INLONG-2544](https://github.com/apache/incubator-inlong/issues/2544) | [Improve][Manager] Refactor the CreateStreamWorkflowDefinition                                         |
| [INLONG-2305](https://github.com/apache/incubator-inlong/issues/2305) | [Feature][Manager] Add Cluster Management for MQ/DataProxy/Sort Cluster                                |
| [INLONG-1858](https://github.com/apache/incubator-inlong/issues/1858) | [Bug][Manager] Adding columns to a Hive table does not take effect                                     |

### SDK
| ISSUE                                                                 | Summary                                                                                                |
|:----------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------|
| [INLONG-4400](https://github.com/apache/incubator-inlong/issues/4400) | [Improve][SDK] Unified dataproxy sdk clusterId property name                                           |
| [INLONG-4354](https://github.com/apache/incubator-inlong/issues/4354) | [Bug][SDK] ProxyConfigEntry cluster id NPE                                                             |

### Sort
| ISSUE                                                                 | Summary                                                                                                |
|:----------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------|
| [INLONG-4647](https://github.com/apache/incubator-inlong/issues/4647) | [Improve][Sort] Re-optimize the distribution package of the Sort connectors                            |
| [INLONG-4638](https://github.com/apache/incubator-inlong/issues/4638) | [Improve][Sort] Remove the dependency of spotbugs-annotations                                          |
| [INLONG-4624](https://github.com/apache/incubator-inlong/issues/4624) | [Improve][Sort] Package Pulsar and Hive connectors to the same file                                    |
| [INLONG-4619](https://github.com/apache/incubator-inlong/issues/4619) | [Bug][Sort] Fix maven package problem of Hive connector                                                |
| [INLONG-4596](https://github.com/apache/incubator-inlong/issues/4596) | [Bug][Sort] Fix jdbc-connector packaging lost dependency                                               |
| [INLONG-4591](https://github.com/apache/incubator-inlong/issues/4591) | [Bug][Sort] Set the default Hive version and upgrade the log4j to log4j2                               |
| [INLONG-4557](https://github.com/apache/incubator-inlong/issues/4557) | [Bug][Sort] Fix HBase connector dependency and pom relocation problem                                  |
| [INLONG-4527](https://github.com/apache/incubator-inlong/issues/4527) | [Improve][Sort] Upgrade the Elasticsearch version and add related license                              |
| [INLONG-4493](https://github.com/apache/incubator-inlong/issues/4493) | [Improve][Sort] Remove hiveConfDir not null constraint                                                 |
| [INLONG-4491](https://github.com/apache/incubator-inlong/issues/4491) | [Bug][Sort] Missing dependencies after packaging for sort-dist module                                  |
| [INLONG-4476](https://github.com/apache/incubator-inlong/issues/4476) | [Improve][Sort][Manager] Remove zk and related classes                                                 |
| [INLONG-4458](https://github.com/apache/incubator-inlong/issues/4458) | [Improve][Sort][Manager] Unify the meta field naming                                                   |
| [INLONG-4448](https://github.com/apache/incubator-inlong/issues/4448) | [Feature][Sort] Add Greenplum database data load support                                               |
| [INLONG-4429](https://github.com/apache/incubator-inlong/issues/4429) | [Improve][Sort] Add sqlserver jdbc driver and management version                                       |
| [INLONG-4428](https://github.com/apache/incubator-inlong/issues/4428) | [Improve][Sort][Manager] Optimize the name for Data Node related modules and classes                   |
| [INLONG-4408](https://github.com/apache/incubator-inlong/issues/4408) | [Feature][Manager][Sort] Add iceberg sink load node                                                    |
| [INLONG-4405](https://github.com/apache/incubator-inlong/issues/4405) | [Feature][Sort] Support run SQL script                                                                 |
| [INLONG-4394](https://github.com/apache/incubator-inlong/issues/4394) | [Feature][Sort] Add Oracle data load support                                                           |
| [INLONG-4390](https://github.com/apache/incubator-inlong/issues/4390) | [Bug][Sort] Exclude mysql:mysql-connector-java:jar package                                             |
| [INLONG-4385](https://github.com/apache/incubator-inlong/issues/4385) | [Bug][Sort] Exclude or remove the mysql:mysql-connector-java:jar:8.0.21 package                        |
| [INLONG-4383](https://github.com/apache/incubator-inlong/issues/4383) | [Feature][Sort] Add MySQL data load support                                                            |
| [INLONG-4371](https://github.com/apache/incubator-inlong/issues/4371) | [Bug][Sort] Remove null constraint on Hive version                                                     |
| [INLONG-4353](https://github.com/apache/incubator-inlong/issues/4353) | [Improve][Sort] Optimize code structure and shading jar                                                |
| [INLONG-4346](https://github.com/apache/incubator-inlong/issues/4346) | [Improve][Sort] Enhance upsert capability for SqlServer                                                |
| [INLONG-4345](https://github.com/apache/incubator-inlong/issues/4345) | [Feature][Sort] Support sink changelog stream to TDSQL PostgreSQL                                      |
| [INLONG-4342](https://github.com/apache/incubator-inlong/issues/4342) | [Improve][Sort] Duplicate audit-sdk dependency in sort core                                            |
| [INLONG-4339](https://github.com/apache/incubator-inlong/issues/4339) | [Improve][Sort] Rollback debezium-core to 1.5.4                                                        |
| [INLONG-4332](https://github.com/apache/incubator-inlong/issues/4332) | [Feature][Manager][Sort] Support ClickHouse load node                                                  |
| [INLONG-4327](https://github.com/apache/incubator-inlong/issues/4327) | [Bug][Sort] Fix missing some connector table factory error after packaging                             |
| [INLONG-4312](https://github.com/apache/incubator-inlong/issues/4312) | [Feature][Sort] Add SqlServer data load support                                                        |
| [INLONG-4306](https://github.com/apache/incubator-inlong/issues/4306) | [Bug][Sort] Parameter error   connector of file system                                                 |
| [INLONG-4303](https://github.com/apache/incubator-inlong/issues/4303) | [Improve][Sort] Iceberg Load Node add required option                                                  |
| [INLONG-4292](https://github.com/apache/incubator-inlong/issues/4292) | [Improve][Agent][TubeMQ][Sort] Upgrade the property file for all modules from log4j to log4j2          |
| [INLONG-4282](https://github.com/apache/incubator-inlong/issues/4282) | [Improve][Sort] Optimize the sort package structure                                                    |
| [INLONG-4264](https://github.com/apache/incubator-inlong/issues/4264) | [Bug][Sort] Sort lightweight start 'pulsar-to-kafka' task failed                                       |
| [INLONG-4262](https://github.com/apache/incubator-inlong/issues/4262) | [Feature][Sort] Add SqlServer data extract support                                                     |
| [INLONG-4259](https://github.com/apache/incubator-inlong/issues/4259) | [Feature][Sort] Import inlong format json serialize/deserialize                                        |
| [INLONG-4250](https://github.com/apache/incubator-inlong/issues/4250) | [Feature][Sort] Add Elasticsearch load node                                                            |
| [INLONG-4245](https://github.com/apache/incubator-inlong/issues/4245) | [Improve][Manager][Sort] Manager transmit consumer group name of kafka to sort                         |
| [INLONG-4243](https://github.com/apache/incubator-inlong/issues/4243) | [Feature][Sort] Add Oracle data extract support                                                        |
| [INLONG-4228](https://github.com/apache/incubator-inlong/issues/4228) | [Feature][Sort][Manager] Adaptive HDFS Load Node                                                       |
| [INLONG-4227](https://github.com/apache/incubator-inlong/issues/4227) | [Feature][Sort] Sort lightweight support extract data to ClickHouse                                    |
| [INLONG-4224](https://github.com/apache/incubator-inlong/issues/4224) | [Improve][Sort] Add debezium module to connectors                                                      |
| [INLONG-4244](https://github.com/apache/incubator-inlong/issues/4244) | [Improve][Sort] Remove flink-avro relocation                                                           |
| [INLONG-4215](https://github.com/apache/incubator-inlong/issues/4215) | [Improve][Sort] Add license for Hive connector of Sort                                                 |
| [INLONG-4198](https://github.com/apache/incubator-inlong/issues/4198) | [Feature][Sort] Add Postgres load node                                                                 |
| [INLONG-4189](https://github.com/apache/incubator-inlong/issues/4189) | [Feature][Sort] Change the NOTICE to LICENSE                                                           |
| [INLONG-4174](https://github.com/apache/incubator-inlong/issues/4174) | [Feature][Sort] Add Postgres extract node supporting                                                   |
| [INLONG-4171](https://github.com/apache/incubator-inlong/issues/4171) | [Feature][Sort] Add FileSystem extract node                                                            |
| [INLONG-4170](https://github.com/apache/incubator-inlong/issues/4170) | [Feature][Sort] Add FileSystem load node                                                               |
| [INLONG-4169](https://github.com/apache/incubator-inlong/issues/4169) | [Improve][Sort] Add Java docs in sort                                                                  |
| [INLONG-4167](https://github.com/apache/incubator-inlong/issues/4167) | [Feature][Sort] Add MongoDB extract node                                                               |
| [INLONG-4157](https://github.com/apache/incubator-inlong/issues/4157) | [Feature][Sort] Sort lightweight support load data to Iceberg                                          |
| [INLONG-4156](https://github.com/apache/incubator-inlong/issues/4156) | [Feature][Sort] Support HBase load node                                                                |
| [INLONG-4141](https://github.com/apache/incubator-inlong/issues/4141) | [Feature][Sort] Sort lightweight support load data from Pulsar                                         |
| [INLONG-4097](https://github.com/apache/incubator-inlong/issues/4097) | [Improve][Sort] Use javax constrain notNull annotation                                                 |
| [INLONG-4090](https://github.com/apache/incubator-inlong/issues/4090) | [Improve][Sort] Add license for MySQL CDC in Sort single tenant                                        |
| [INLONG-4086](https://github.com/apache/incubator-inlong/issues/4086) | [Improve][Sort] Remove BufferedSocketInputStream class as it is not used                               |
| [INLONG-4081](https://github.com/apache/incubator-inlong/issues/4081) | [Bug][Sort] Fix upsert_kafka constant to upsert-kafka                                                  |
| [INLONG-4066](https://github.com/apache/incubator-inlong/issues/4066) | [Feature][Sort] Add Inlong Msg format for inlong msg                                                   |
| [INLONG-4058](https://github.com/apache/incubator-inlong/issues/4058) | [Improve][Sort] Resolve AVRO format dependency conflict                                                |
| [INLONG-4050](https://github.com/apache/incubator-inlong/issues/4050) | [Bug][Sort] Parameter definition error of HiveLoad                                                     |
| [INLONG-4048](https://github.com/apache/incubator-inlong/issues/4048) | [Bug][Sort] Fix metadata type process error and hive-exec dependency scope error                       |
| [INLONG-4044](https://github.com/apache/incubator-inlong/issues/4044) | [Bug][Sort] Resolve conflict of flink-table-api-java-bridge jar                                        |
| [INLONG-4035](https://github.com/apache/incubator-inlong/issues/4035) | [Bug][Sort] Change the restriction of Hive catalogName from not nullable to nullable                   |
| [INLONG-4030](https://github.com/apache/incubator-inlong/issues/4030) | [Improve][Sort] Import all changelog mode data ingest into Hive                                        |
| [INLONG-4022](https://github.com/apache/incubator-inlong/issues/4022) | [Bug][Sort] Flink table catalog only supports timestamp of precision 9                                 |
| [INLONG-4013](https://github.com/apache/incubator-inlong/issues/4013) | [Feature][Sort] Support write metadata in canal format                                                 |
| [INLONG-4007](https://github.com/apache/incubator-inlong/issues/4007) | [Improve][Sort] Modify default settings of CSV format                                                  |
| [INLONG-4005](https://github.com/apache/incubator-inlong/issues/4005) | [Bug][Sort] Remove some inappropriate comment and code                                                 |
| [INLONG-3996](https://github.com/apache/incubator-inlong/issues/3996) | [Feature][Sort] Support all migrate for database                                                       |
| [INLONG-3979](https://github.com/apache/incubator-inlong/issues/3979) | [Bug][Sort] Fix mysqlExtractNode options append error and conflict of flink jar                        |
| [INLONG-3973](https://github.com/apache/incubator-inlong/issues/3973) | [Feature][Sort] CDC support all migration                                                              |
| [INLONG-3961](https://github.com/apache/incubator-inlong/issues/3961) | [Feature][Sort] Add MySQL CDC append                                                                   |
| [INLONG-3956](https://github.com/apache/incubator-inlong/issues/3956) | [Feature][Sort] Add Hive connector to support CDC                                                      |
| [INLONG-3953](https://github.com/apache/incubator-inlong/issues/3953) | [Feature][Sort] Add MySQL dynamic table implementation -  modified from Flink CDC                      |
| [INLONG-3924](https://github.com/apache/incubator-inlong/issues/3924) | [Feature][Sort] Add MySQL cdc and support multiple meta data                                           |
| [INLONG-3899](https://github.com/apache/incubator-inlong/issues/3899) | [Feature][Sort] Add string regexp replace support for transform                                        |
| [INLONG-3893](https://github.com/apache/incubator-inlong/issues/3893) | [Feature][Sort] Add string delimiting support for transform                                            |
| [INLONG-3890](https://github.com/apache/incubator-inlong/issues/3890) | [Feature][Sort] Add StringConstantParam to enhance support for constant parameters                     |
| [INLONG-3885](https://github.com/apache/incubator-inlong/issues/3885) | [Feature][Sort] Add KafkaExtractNode to support Kafka source                                           |
| [INLONG-3868](https://github.com/apache/incubator-inlong/issues/3868) | [Feature][Sort] Support data from mysql binlog sync to kafka                                           |
| [INLONG-3860](https://github.com/apache/incubator-inlong/issues/3860) | [Improve][Sort] Add some format for ExtractNode and LoadNode                                           |
| [INLONG-3841](https://github.com/apache/incubator-inlong/issues/3841) | [Feature][Sort] Add distinct support based time column for transform                                   |
| [INLONG-3839](https://github.com/apache/incubator-inlong/issues/3839) | [Feature][Sort] Add cascade function support for transform                                             |
| [INLONG-3837](https://github.com/apache/incubator-inlong/issues/3837) | [Feature][Sort] Optimize the time window correlation function format                                   |
| [INLONG-3836](https://github.com/apache/incubator-inlong/issues/3836) | [Feature][Sort] Add join support for transform                                                         |
| [INLONG-3835](https://github.com/apache/incubator-inlong/issues/3835) | [Feature][Sort] Register CascadeFunctionWrapper in the parent interface                                |
| [INLONG-3834](https://github.com/apache/incubator-inlong/issues/3834) | [Feature][Sort] Fix unit test sporadic errors                                                          |
| [INLONG-3831](https://github.com/apache/incubator-inlong/issues/3831) | [Feature][Sort] Add meta field support for sort lightweight                                            |
| [INLONG-3829](https://github.com/apache/incubator-inlong/issues/3829) | [Feature][Sort] Optimize the sort entrance program to support lightweight                              |
| [INLONG-3827](https://github.com/apache/incubator-inlong/issues/3827) | [Feature][Sort] Add functions definition to support transform                                          |
| [INLONG-3826](https://github.com/apache/incubator-inlong/issues/3826) | [Feature][Sort] Enhance field format to support varchar types and timestamp of different precisions    |
| [INLONG-3823](https://github.com/apache/incubator-inlong/issues/3823) | [Feature][Sort] Fix error caused by unregistered custom function                                       |
| [INLONG-3822](https://github.com/apache/incubator-inlong/issues/3822) | [Feature][Sort] Add node relations definition to support transform                                     |
| [INLONG-3817](https://github.com/apache/incubator-inlong/issues/3817) | [Feature][Sort] Fix null point exception in canal-json format                                          |
| [INLONG-3816](https://github.com/apache/incubator-inlong/issues/3816) | [Feature][Sort] Fix NPE in RegexpReplaceFirstFunction                                                  |
| [INLONG-3815](https://github.com/apache/incubator-inlong/issues/3815) | [Feature][Sort] Fix meta field sync error                                                              |
| [INLONG-3805](https://github.com/apache/incubator-inlong/issues/3805) | [Feature][Sort] Add operators definition to support transform                                          |
| [INLONG-3800](https://github.com/apache/incubator-inlong/issues/3800) | [Feature][Sort] Add GroupInfo, StreamInfo definition to support transform                              |
| [INLONG-3794](https://github.com/apache/incubator-inlong/issues/3794) | [Feature][Sort] Add TimeUnitConstantParam definition to support transform                              |
| [INLONG-3793](https://github.com/apache/incubator-inlong/issues/3793) | [Feature][Sort] Add ConstantParam definition to support transform                                      |
| [INLONG-3791](https://github.com/apache/incubator-inlong/issues/3791) | [Feature][Sort] Add WatermarkField definition to support transform                                     |
| [INLONG-3790](https://github.com/apache/incubator-inlong/issues/3790) | [Feature][Sort] Add FieldRelationShip definition to support transform                                  |
| [INLONG-3789](https://github.com/apache/incubator-inlong/issues/3789) | [Feature][Sort] Add NodeRelationShip definition to support transform                                   |
| [INLONG-3788](https://github.com/apache/incubator-inlong/issues/3788) | [Feature][Sort] Add Node interface and derived interface definitions to support transform              |
| [INLONG-3787](https://github.com/apache/incubator-inlong/issues/3787) | [Feature][Sort] Add Function interface and derived interface definitions to support transform          |
| [INLONG-3786](https://github.com/apache/incubator-inlong/issues/3786) | [Feature][Sort] Add Operator interface and derived interface definitions to support transform          |
| [INLONG-3778](https://github.com/apache/incubator-inlong/issues/3778) | [Feature][Sort] FieldInfo enhanced to support transform in the future                                  |
| [INLONG-3777](https://github.com/apache/incubator-inlong/issues/3777) | [Feature][Sort] ExtractNode,LoadNode implementation                                                    |
| [INLONG-3658](https://github.com/apache/incubator-inlong/issues/3658) | [Umbrella][Sort] Data integration lightweight                                                          |
| [INLONG-1823](https://github.com/apache/incubator-inlong/issues/1823) | [Feature][Sort] Support store data to Elasticsearch                                                    |

### Sort-Standalone
| ISSUE                                                                 | Summary                                                                                                |
|:----------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------|
| [INLONG-4453](https://github.com/apache/incubator-inlong/issues/4453) | [Bug][Sort-Standalone] Wrong audit when send to kafka failed                                           |
| [INLONG-3773](https://github.com/apache/incubator-inlong/issues/3773) | [Feature][Sort-Standalone] Support configurable handler to transform data of Kafka                     |
| [INLONG-3667](https://github.com/apache/incubator-inlong/issues/3667) | [Feature][Sort-Standalone] Add manage entry to stop cache consumer before node offline or upgrade      |
| [INLONG-1933](https://github.com/apache/incubator-inlong/issues/1933) | [Feature][Sort-Standalone] Read API support inlong manager commands                                    |

### TubeMQ
| ISSUE                                                                 | Summary                                                                                                |
|:----------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------|
| [INLONG-4486](https://github.com/apache/incubator-inlong/issues/4486) | [Improve][TubeMQ] Adjust the parameter requirements of group consume delete control APIs               |
| [INLONG-4470](https://github.com/apache/incubator-inlong/issues/4470) | [Improve][TubeMQ] The adminQueryBlackGroupInfo method adds query topicName field                       |
| [INLONG-4451](https://github.com/apache/incubator-inlong/issues/4451) | [Bug][TubeMQ] The zookeeper service can not start for TubeMQ Docker Container                          |
| [INLONG-4324](https://github.com/apache/incubator-inlong/issues/4324) | [Improve][TubeMQ] Add Javadoc for methods                                                              |
| [INLONG-4321](https://github.com/apache/incubator-inlong/issues/4321) | [Improve][TubeMQ] Add Javadoc comments for methods                                                     |
| [INLONG-4292](https://github.com/apache/incubator-inlong/issues/4292) | [Improve][Agent][TubeMQ][Sort] Upgrade the property file for all modules from log4j to log4j2          |
| [INLONG-4217](https://github.com/apache/incubator-inlong/issues/4217) | [Improve][TubeMQ] Add the flow control method and filtering method of the consumption group settings   |
| [INLONG-4130](https://github.com/apache/incubator-inlong/issues/4130) | [Improve][TubeMQ] Optimize the broker replication method and topic replication method                  |
| [INLONG-4114](https://github.com/apache/incubator-inlong/issues/4114) | [Bug][TubeMQ] All container can not start successfully                                                 |
| [INLONG-3975](https://github.com/apache/incubator-inlong/issues/3975) | [Improve][TubeMQ] Modify the MasterConfigTest file to configure the incoming parameters                |
| [INLONG-3869](https://github.com/apache/incubator-inlong/issues/3869) | [Improve][TubeMQ] Remove hibernate for tube manager                                                    |
| [INLONG-3475](https://github.com/apache/incubator-inlong/issues/3475) | [Feature][TubeMQ] Add an API for batch deletion of authorized consumer group records                   |

### Other
| ISSUE                                                                 | Summary                                                                                                |
|:----------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------|
| [INLONG-4640](https://github.com/apache/incubator-inlong/issues/4640) | [License] Complete the LICENSE of the third-party dependencies of the Sort connectors                  |
| [INLONG-4633](https://github.com/apache/incubator-inlong/issues/4633) | [License] Add the third-party dependency LICENSE of Sort connectors module                             |
| [INLONG-4628](https://github.com/apache/incubator-inlong/issues/4628) | [License] Update inlong-manager's third-party dependency LICENSE                                       |
| [INLONG-4574](https://github.com/apache/incubator-inlong/issues/4574) | [Release] Bumped version to 1.3.0-incubating-SNAPSHOT                                                  |
| [INLONG-4568](https://github.com/apache/incubator-inlong/issues/4568) | [Release] Bumped version to 1.2.1-incubating-SNAPSHOT                                                  |
| [INLONG-4567](https://github.com/apache/incubator-inlong/issues/4567) | [Release] Update changes log for the 1.2.0 version                                                     |
| [INLONG-4565](https://github.com/apache/incubator-inlong/issues/4565) | [Release] Add the 1.2.0 version option for the bug report                                              |
| [INLONG-4368](https://github.com/apache/incubator-inlong/issues/4368) | [License] Final LICENSE check of all modules                                                           |
| [INLONG-4336](https://github.com/apache/incubator-inlong/issues/4336) | [License] Update inlong-sort's third-party dependency LICENSE                                          |
| [INLONG-4318](https://github.com/apache/incubator-inlong/issues/4318) | [License] Update inlong-manager's third-party dependency LICENSE                                       |
| [INLONG-4314](https://github.com/apache/incubator-inlong/issues/4314) | [License] Update Sort-standalone's third-party dependency LICENSE                                      |
| [INLONG-4305](https://github.com/apache/incubator-inlong/issues/4305) | [License] Update TubeMQ-Manager's third-party dependency LICENSE                                       |
| [INLONG-4296](https://github.com/apache/incubator-inlong/issues/4296) | [License] Update Audit, DataProxy, TubeMQ's third-party dependency LICENSE                             |
| [INLONG-4288](https://github.com/apache/incubator-inlong/issues/4288) | [License] Update Agent's third-party dependency LICENSE                                                |
| [INLONG-3968](https://github.com/apache/incubator-inlong/issues/3968) | [License] Remove the "WIP" label of the DISCLAIMER file                                                |
| [INLONG-3864](https://github.com/apache/incubator-inlong/issues/3864) | [License] Recheck the third-party dependencies by combing each module                                  |
| [INLONG-3849](https://github.com/apache/incubator-inlong/issues/3849) | [License] Update the third-party components LICENSEs for inlong-audit                                  |
| [INLONG-3771](https://github.com/apache/incubator-inlong/issues/3771) | [License] Update the third-party components LICENSEs for inlong-agent                                  |
| [INLONG-3422](https://github.com/apache/incubator-inlong/issues/3422) | [License] Sort out the LICENSEs of the third-party components that the project depends on              |
| [INLONG-4426](https://github.com/apache/incubator-inlong/issues/4426) | [Improve][Office-Website] Update CI Nodejs Version                                                     |
| [INLONG-4150](https://github.com/apache/incubator-inlong/issues/4150) | [Improve][Office-Website] Automatically identify version number sorting                                |
| [INLONG-4455](https://github.com/apache/incubator-inlong/issues/4455) | [Improve][GitHub] Update the Pull Request TEMPLATE to make it more clear                               |
| [INLONG-4267](https://github.com/apache/incubator-inlong/issues/4267) | [Bug][GitHub] The checks pipeline of PR was incorrect                                                  |
| [INLONG-4251](https://github.com/apache/incubator-inlong/issues/4251) | [Improve][GitHub] Improve GitHub configuration in `.asf.yaml`                                          |
| [INLONG-4205](https://github.com/apache/incubator-inlong/issues/4205) | [Bug][GitHub] Error in the greeting workflow                                                           |
| [INLONG-4201](https://github.com/apache/incubator-inlong/issues/4201) | [Improve][GitHub] Improve workflows and documentation                                                  |
| [INLONG-4161](https://github.com/apache/incubator-inlong/issues/4161) | [Bug][GitHub] Incorrect name in stale workflow                                                         |
| [INLONG-4153](https://github.com/apache/incubator-inlong/issues/4153) | [Feature][GitHub] Add support for first interaction                                                    |
| [INLONG-4038](https://github.com/apache/incubator-inlong/issues/4038) | [Improve][GitHub] Enable the alert of dependabot, and disable the automatic update                     |
| [INLONG-4024](https://github.com/apache/incubator-inlong/issues/4024) | [Improve][GitHub] Improve trigger conditions in the stable workflow                                    |
| [INLONG-4019](https://github.com/apache/incubator-inlong/issues/4019) | [Improve][GitHub] Update the dependency from dependabot                                                |
| [INLONG-4001](https://github.com/apache/incubator-inlong/issues/4001) | [Improve][Docker] Modify the MySQL Docker image version to 8.0.28                                      |
| [INLONG-3998](https://github.com/apache/incubator-inlong/issues/3998) | [Improve][GitHub] Improve labeler workflow with docker, k8s and github labels                          |
| [INLONG-3995](https://github.com/apache/incubator-inlong/issues/3995) | [Improve][GitHub] Improve Dependabot configuration                                                     |
| [INLONG-3974](https://github.com/apache/incubator-inlong/issues/3974) | [Feature][GitHub] Add support for Dependabot                                                           |
| [INLONG-3473](https://github.com/apache/incubator-inlong/issues/3473) | [Feature][GitHub][K8s] Add support for helm chart testing                                              |
| [INLONG-4349](https://github.com/apache/incubator-inlong/issues/4349) | [Improve][Doc] Update check style to avoid the Javadoc missing and error                               |
| [INLONG-4256](https://github.com/apache/incubator-inlong/issues/4256) | [Improve][Doc] Add java doc to solve the checkstyle issues                                             |
| [INLONG-4073](https://github.com/apache/incubator-inlong/issues/4073) | [Improve][Doc] Modify the invitation email templates of Committer or PPMC                              |
| [INLONG-3965](https://github.com/apache/incubator-inlong/issues/3965) | [Improve][Doc] Add how-to-maintain-3rd-party-dependencies.md                                           |
| [INLONG-3930](https://github.com/apache/incubator-inlong/issues/3930) | [Improve][Doc] Add more deployment and development guides in Readme                                    |
| [INLONG-3843](https://github.com/apache/incubator-inlong/issues/3843) | [Bug][Doc] The link to "Contribution Guide for Apache InLong" is invalid                               |
| [INLONG-1839](https://github.com/apache/incubator-inlong/issues/1839) | [Improve][Doc] Supplement deployment document                                                          |
| [INLONG-4351](https://github.com/apache/incubator-inlong/issues/4351) | [Improve][Pom] Update the fastjson to solve the CVEs                                                   |
| [INLONG-4484](https://github.com/apache/incubator-inlong/issues/4484) | [Improve][Pom] Upgrade Spring version from 5.3.19 to 5.3.20                                            |
| [INLONG-3940](https://github.com/apache/incubator-inlong/issues/3940) | [Improve][Pom] Bump spring-core from 5.3.18 to 5.3.19                                                  |
| [INLONG-3935](https://github.com/apache/incubator-inlong/issues/3935) | [Feature][Pom] Remove dependency of testng                                                             |
| [INLONG-3780](https://github.com/apache/incubator-inlong/issues/3780) | [Improve][Pom] Upgrade postgresql due to CVEs                                                          |
| [INLONG-4434](https://github.com/apache/incubator-inlong/issues/4434) | [Bug][Docker] Audit Container caught error when create pulsar topic                                    |
| [INLONG-3898](https://github.com/apache/incubator-inlong/issues/3898) | [Bug][Docker] The log paths of Agent, Audit, Dataproxy and TubeMQ Manager containers are incorrect     |
| [INLONG-3744](https://github.com/apache/incubator-inlong/issues/3744) | [Bug][Docker] Docker images are not pushed in release-* branches                                       |
| [INLONG-3553](https://github.com/apache/incubator-inlong/issues/3553) | [Bug][Docker][K8s] TubeMQ pod fails to start                                                           |
| [INLONG-4144](https://github.com/apache/incubator-inlong/issues/4144) | [Bug][K8s] HTTP error appears on the login dashboard when deploying InLong using helm                  |
| [INLONG-3845](https://github.com/apache/incubator-inlong/issues/3845) | [Bug][K8s] The manager pod fails to start                                                              |
| [INLONG-3635](https://github.com/apache/incubator-inlong/issues/3635) | [Improve][JavaDoc] Fix the Javadoc check style problems for all modules                                |
