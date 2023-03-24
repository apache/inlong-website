---
title: InLong v1.6.0
---

使用以下链接下载 InLong。

## 1.6.0 release

|          名称           |  版本   |     日期     |                                                                                                                                                                                        Downloads                                                                                                                                                                                        |
|:---------------------:|:-----:|:----------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|  InLong Source Code   | 1.6.0 | 2023-03-23 |                                            [[SRC](https://downloads.apache.org/inlong/1.6.0/apache-inlong-1.6.0-src.tar.gz)]                [[ASC](https://downloads.apache.org/inlong/1.6.0/apache-inlong-1.6.0-src.tar.gz.asc)]                [[SHA512](https://downloads.apache.org/inlong/1.6.0/apache-inlong-1.6.0-src.tar.gz.sha512)]                                            |
|  InLong Binary file   | 1.6.0 | 2023-03-23 |                                            [[BIN](https://downloads.apache.org/inlong/1.6.0/apache-inlong-1.6.0-bin.tar.gz)]                [[ASC](https://downloads.apache.org/inlong/1.6.0/apache-inlong-1.6.0-bin.tar.gz.asc)]                [[SHA512](https://downloads.apache.org/inlong/1.6.0/apache-inlong-1.6.0-bin.tar.gz.sha512)]                                            |
| Connector Binary file | 1.6.0 | 2023-03-23 |                    [[BIN](https://downloads.apache.org/inlong/1.6.0/apache-inlong-1.6.0-sort-connectors.tar.gz)]                [[ASC](https://downloads.apache.org/inlong/1.6.0/apache-inlong-1.6.0-sort-connectors.tar.gz.asc)]                [[SHA512](https://downloads.apache.org/inlong/1.6.0/apache-inlong-1.6.0-incubating-sort-connectors.tar.gz.sha512)]                     |

### 发布完整性

您必须 [验证](https://www.apache.org/info/verification.html) 下载文件的完整性。
我们为每个发布文件提供 OpenPGP 签名。此签名应与包含 InLong 发布经理的 OpenPGP 密钥的 [KEYS](https://downloads.apache.org/inlong/KEYS) 文件匹配。
我们还为每个发布文件提供 <code>SHA-512</code> 校验和。下载文件后，您应该计算下载的校验和，并确保它与我们提供的相同。

## 版本 Notes

### Agent
|                            ISSUE                             | Summary                                                                                                       |
|:------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------|
| [INLONG-7548](https://github.com/apache/inlong/issues/7548)  | [Improve][Agent][Manager] Use try-with-resource to close resources                                            |
| [INLONG-7533](https://github.com/apache/inlong/issues/7533)  | [Improve][Agent] Log cannot be collected for position reset                                                   |
| [INLONG-7516](https://github.com/apache/inlong/issues/7516)  | [Improve][Manager][Sort][Agent] Decoupling Flink version dependencies for multiple versions of Apache Flink   |
| [INLONG-7419](https://github.com/apache/inlong/issues/7419)  | [Bug][Agent] The connector of MQTT is unable to connect                                                       |
| [INLONG-7404](https://github.com/apache/inlong/issues/7404)  | [Bug][Agent] Missing Redis job for Redis connector                                                            |
| [INLONG-7387](https://github.com/apache/inlong/issues/7387)  | [Bug][Agent] The connector of SQLServer is closed                                                             |
| [INLONG-7365](https://github.com/apache/inlong/issues/7365)  | [Bug][Agent] The username for the MongoDB connector is missing                                                |
| [INLONG-7353](https://github.com/apache/inlong/issues/7353)  | [Bug][Agent] The connector of PostgreSQL is closed                                                            |
| [INLONG-7322](https://github.com/apache/inlong/issues/7322)  | [Bug][Agent] The archived logs cannot be collected                                                            |
| [INLONG-7174](https://github.com/apache/inlong/issues/7174)  | [Feature][Agent] Support converting DataConfig to TriggerProfile for PostgreSQL                               |
| [INLONG-7156](https://github.com/apache/inlong/issues/7156)  | [Improve][Agent] Support directly sending raw file data                                                       |

### DataProxy
|                            ISSUE                             | Summary                                                                                                       |
|:------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------|
| [INLONG-7513](https://github.com/apache/inlong/issues/7513)  | [Improve][DataProxy] Delete duplicate definitions                                                             |
| [INLONG-7231](https://github.com/apache/inlong/issues/7231)  | [Feature][DataProxy] Add selector policy of cache cluster list                                                |
| [INLONG-7191](https://github.com/apache/inlong/issues/7191)  | [Improve][DataProxy] Remove unused code                                                                       |
| [INLONG-7166](https://github.com/apache/inlong/issues/7166)  | [Bug][DataProxy] Fix audit data report                                                                        |

### TubeMQ
|                            ISSUE                             | Summary                                                                                                       |
|:------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------|
| [INLONG-7466](https://github.com/apache/inlong/issues/7466)  | [Improve][TubeMQ] Adjust code style issues                                                                    |
| [INLONG-7430](https://github.com/apache/inlong/issues/7430)  | [Bug][TubeMQ] Zookeeper caught an NPE when deploying TubeMQ by K8s                                            |
| [INLONG-7184](https://github.com/apache/inlong/issues/7184)  | [Improve][TubeMQ] Replace CertifiedResult with ProcessResult                                                  |
| [INLONG-7182](https://github.com/apache/inlong/issues/7182)  | [Improve][TubeMQ] Replace ParamCheckResult with ProcessResult                                                 |

### Manager
|                            ISSUE                             | Summary                                                                                                       |
|:------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------|
| [INLONG-7593](https://github.com/apache/inlong/issues/7593)  | [Bug][Manager] Unable to delete InlongGroup                                                                   |
| [INLONG-7591](https://github.com/apache/inlong/issues/7591)  | [Improve][Manager] Support updating related streamSources after updating DataNode                             |
| [INLONG-7586](https://github.com/apache/inlong/issues/7586)  | [Bug][Manager] The audit information in the database cannot be obtained after being updated                   |
| [INLONG-7577](https://github.com/apache/inlong/issues/7577)  | [Bug][Manager] The number of StreamSource is too large, resulting in high CPU usage                           |
| [INLONG-7575](https://github.com/apache/inlong/issues/7575)  | [Improve][Manager] Add audit_base table change script of 1.6.0 for Manager                                    |
| [INLONG-7565](https://github.com/apache/inlong/issues/7565)  | [Improve][Manager] Add audit id for Apache Kudu                                                               |
| [INLONG-7555](https://github.com/apache/inlong/issues/7555)  | [Bug][Manager] The ttl time is invalid in ClickHouse                                                          |
| [INLONG-7548](https://github.com/apache/inlong/issues/7548)  | [Improve][Agent][Manager] Use try-with-resource to close resources                                            |
| [INLONG-7535](https://github.com/apache/inlong/issues/7535)  | [Bug][Manager] Optimize the serializationType setting to prevent NullPointerException                         |
| [INLONG-7529](https://github.com/apache/inlong/issues/7529)  | [Improve][Manager] Change the pattern limitation of InlongGroupId and InlongStreamId                          |
| [INLONG-7525](https://github.com/apache/inlong/issues/7525)  | [Improve][Manager] Support to save additional info for the ClickHouse field                                   |
| [INLONG-7516](https://github.com/apache/inlong/issues/7516)  | [Improve][Manager][Sort][Agent] Decoupling Flink version dependencies for multiple versions of Apache Flink   |
| [INLONG-7501](https://github.com/apache/inlong/issues/7501)  | [Bug][Manager] InlongStream status is not updated after InlongGroup configuration is successful               |
| [INLONG-7496](https://github.com/apache/inlong/issues/7496)  | [Improve][Manager] Add parseFields method for manager-client                                                  |
| [INLONG-7490](https://github.com/apache/inlong/issues/7490)  | [Improve][Manager] Support paging query InLong objects info based on conditions in manager-client             |
| [INLONG-7479](https://github.com/apache/inlong/issues/7479)  | [Bug][Manager] The stream can still be configured under the failed group                                      |
| [INLONG-7473](https://github.com/apache/inlong/issues/7473)  | [Bug][Manager] StreamSource in the TO_BE_ISSUED_DELETE state cannot be issued properly                        |
| [INLONG-7468](https://github.com/apache/inlong/issues/7468)  | [Bug][Manager] Re-executing the workflow fails to load the new configuration information                      |
| [INLONG-7460](https://github.com/apache/inlong/issues/7460)  | [Improve][Manager] Add user authentication when operate Datanode                                              |
| [INLONG-7444](https://github.com/apache/inlong/issues/7444)  | [Improve][Manager] Support query InLong objects by status list                                                |
| [INLONG-7429](https://github.com/apache/inlong/issues/7429)  | [Bug][Manager] The information returned when deleting a non-existent StreamSource is incorrect                |
| [INLONG-7426](https://github.com/apache/inlong/issues/7426)  | [Improve][Manager] Improve the accuracy of variable naming for MySQLSinkDTO                                   |
| [INLONG-7421](https://github.com/apache/inlong/issues/7421)  | [Improve][Manager] Add encoding check to the MySQL JDBC URL in MySQLDataNode                                  |
| [INLONG-7415](https://github.com/apache/inlong/issues/7415)  | [Feature][Dashboard][Manager] Creating schema of StreamSource by JSON                                         |
| [INLONG-7406](https://github.com/apache/inlong/issues/7406)  | [Improve][Manager] Add the query criteria for streamSource                                                    |
| [INLONG-7401](https://github.com/apache/inlong/issues/7401)  | [Bug][Manager] Cannot create Pulsar partitions based on numPartitions                                         |
| [INLONG-7395](https://github.com/apache/inlong/issues/7395)  | [Improve][Manager] Reduce log in SortSouceService and SortClusterService                                      |
| [INLONG-7389](https://github.com/apache/inlong/issues/7389)  | [Improve][Manager][Sort] Add audit id info for source                                                         |
| [INLONG-7375](https://github.com/apache/inlong/issues/7375)  | [Improve][Manager] Change the pattern limitation of InlongCluster name                                        |
| [INLONG-7373](https://github.com/apache/inlong/issues/7373)  | [Improve][Manager] Change the length limitation of InlongStreamId                                             |
| [INLONG-7358](https://github.com/apache/inlong/issues/7358)  | [Improve][Manager] Ungraceful Import of Util Tool Classes                                                     |
| [INLONG-7355](https://github.com/apache/inlong/issues/7355)  | [Bug][Manager] HiveDataNode cannot save the dataPath                                                          |
| [INLONG-7337](https://github.com/apache/inlong/issues/7337)  | [Bug][Manager] Test Pulsar connection error                                                                   |
| [INLONG-7334](https://github.com/apache/inlong/issues/7334)  | [Feature][Manager] Support stream join dimension table                                                        |
| [INLONG-7332](https://github.com/apache/inlong/issues/7332)  | [Improve][Manager] Improve the field length in SQL files                                                      |
| [INLONG-7331](https://github.com/apache/inlong/issues/7331)  | [Improve][Sort][Manager] Support complex type field                                                           |
| [INLONG-7328](https://github.com/apache/inlong/issues/7328)  | [Bug][Manager] Error in querying audit info                                                                   |
| [INLONG-7325](https://github.com/apache/inlong/issues/7325)  | [Bug][Manager] The topic name format error of Kafka                                                           |
| [INLONG-7317](https://github.com/apache/inlong/issues/7317)  | [Bug][Manager] Unit tests of Manager threw database not found                                                 |
| [INLONG-7310](https://github.com/apache/inlong/issues/7310)  | [Bug][Manager] Unit tests of Manager threw too many AuthenticationException                                   |
| [INLONG-7300](https://github.com/apache/inlong/issues/7300)  | [Improve][Manager] Replace getRoles() with getAccountType()                                                   |
| [INLONG-7299](https://github.com/apache/inlong/issues/7299)  | [Feature][Sort][Manager] Support InLongMsg in KafkaConnector                                                  |
| [INLONG-7294](https://github.com/apache/inlong/issues/7294)  | [Bug][Manager] Failed to suspend, restart and delete Sort task                                                |
| [INLONG-7284](https://github.com/apache/inlong/issues/7284)  | [Improve][Manager] Use Preconditions.expectNotBlank to check whether a string is null                         |
| [INLONG-7280](https://github.com/apache/inlong/issues/7280)  | [Improve][Manager] rename checkXXX to expectXXX in Preconditions                                              |
| [INLONG-7278](https://github.com/apache/inlong/issues/7278)  | [Improve][Manager] Optimize OpenInLongClusterController implementation                                        |
| [INLONG-7275](https://github.com/apache/inlong/issues/7275)  | [Bug][Manager] The specified plugin path does not take effect                                                 |
| [INLONG-7271](https://github.com/apache/inlong/issues/7271)  | [Feature][Manager] Support comma separation for primary key and partition key of Hudi table                   |
| [INLONG-7265](https://github.com/apache/inlong/issues/7265)  | [Feature][Manager] Support register and manage the resource of Kudu sink                                      |
| [INLONG-7261](https://github.com/apache/inlong/issues/7261)  | [Improve][Manager] Optimize OpenStreamTransformController implementation                                      |
| [INLONG-7256](https://github.com/apache/inlong/issues/7256)  | [Bug][Manager] The test connection address is wrong, but it shows success                                     |
| [INLONG-7254](https://github.com/apache/inlong/issues/7254)  | [Bug][Manager] Fix config error when InlongGroupId is in the process of switching                             |
| [INLONG-7242](https://github.com/apache/inlong/issues/7242)  | [Feature][Manager] Support register and manage the resource of Redis                                          |
| [INLONG-7232](https://github.com/apache/inlong/issues/7232)  | [Improve][Manager] Supports automatic management of audit ids                                                 |
| [INLONG-7229](https://github.com/apache/inlong/issues/7229)  | [Improve][Manager] Add checks for unmodifiable field values                                                   |
| [INLONG-7226](https://github.com/apache/inlong/issues/7226)  | [Improve][Manager] Optimize OpenStreamSourceController implementation                                         |
| [INLONG-7222](https://github.com/apache/inlong/issues/7222)  | [Improve][Manager] Decode the MySQL JDBC URL thoroughly                                                       |
| [INLONG-7220](https://github.com/apache/inlong/issues/7220)  | [Improve][Manager] Optimize OpenStreamSinkController implementation                                           |
| [INLONG-7213](https://github.com/apache/inlong/issues/7213)  | [Improve][Manager] Add encoding check to the MySQL JDBC URL                                                   |
| [INLONG-7206](https://github.com/apache/inlong/issues/7206)  | [Bug][Manager] The selectBriefList method in the InlongGroupEntity.xml file is incorrect                      |
| [INLONG-7204](https://github.com/apache/inlong/issues/7204)  | [Improve][Manager] Optimize OpenInLongStreamController implementation                                         |
| [INLONG-7199](https://github.com/apache/inlong/issues/7199)  | [Improve][Manager] Support save extension params for inlong cluster node                                      |
| [INLONG-7178](https://github.com/apache/inlong/issues/7178)  | [Improve][Manager] Optimize OpenInLongGroupController implementation                                          |
| [INLONG-7169](https://github.com/apache/inlong/issues/7169)  | [Improve][Manager] Optimize OpenDataNodeController implementation                                             |
| [INLONG-7151](https://github.com/apache/inlong/issues/7151)  | [Bug][Manager] Init sort faild when create node                                                               |
| [INLONG-7149](https://github.com/apache/inlong/issues/7149)  | [Bug][Manager] The tableName parameter in ClickHouseLoadNode is incorrect                                     |
| [INLONG-7089](https://github.com/apache/inlong/issues/7089)  | [Improve][Manager] Separate the concept of node tag from the node table and extract the concept of task group |
| [INLONG-7030](https://github.com/apache/inlong/issues/7030)  | [Feature][Manager] Build tool for local debugging environment                                                 |
| [INLONG-7616](https://github.com/apache/inlong/issues/7616)  | [Bug][Manager]Failed to obtain audit information                                                              |
| [INLONG-7273](https://github.com/apache/inlong/issues/7273)  | [Feature][Manager] Support creating table in Kudu cluster                                                     |

### Sort
|                            ISSUE                             | Summary                                                                                                  |
|:------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------|
| [INLONG-7609](https://github.com/apache/inlong/issues/7609)  | [Feature][Sort] Add audit for kafka source connector                                                     |
| [INLONG-7595](https://github.com/apache/inlong/issues/7595)  | [Improve][Sort] Mongo read phase metrics need to update when no incremental data                         |
| [INLONG-7589](https://github.com/apache/inlong/issues/7589)  | [Feature][Sort] Support multi node relation with same output but different input nodes                   |
| [INLONG-7584](https://github.com/apache/inlong/issues/7584)  | [Feature][Sort] Doris connector supports writing CSV and archiving dirty data                            |
| [INLONG-7567](https://github.com/apache/inlong/issues/7567)  | [Improve][Sort] Extract metrics as common parameters                                                     |
| [INLONG-7559](https://github.com/apache/inlong/issues/7559)  | [Bug][Sort] Fix Oracle CDC reads timestamp error                                                         |
| [INLONG-7557](https://github.com/apache/inlong/issues/7557)  | [Bug][Sort] Fix class incompatible error between elasticsearch6 with elasticsearch7                      |
| [INLONG-7550](https://github.com/apache/inlong/issues/7550)  | [Improve][Sort] Optimize the log printing level of dirty data to avoid generating a large number of logs |
| [INLONG-7546](https://github.com/apache/inlong/issues/7546)  | [Bug][Sort] Fix dirty data not archived  for iceberg connector                                           |
| [INLONG-7543](https://github.com/apache/inlong/issues/7543)  | [Bug][Sort] PostgreSQL connector output two data with the same UPDATE operation                          |
| [INLONG-7539](https://github.com/apache/inlong/issues/7539)  | [Bug][Sort] StarRocks connector uses wrong operation type                                                |
| [INLONG-7537](https://github.com/apache/inlong/issues/7537)  | [Improve][Sort] MongoDB CDC 2.3 supports enabling incremental snapshot                                   |
| [INLONG-7508](https://github.com/apache/inlong/issues/7508)  | [Improve][Sort] Carry right RowKind when cdc-base sends RowData to sink                                  |
| [INLONG-7504](https://github.com/apache/inlong/issues/7504)  | [Bug][Sort] StarRocks will throw NullPointerException when dirty.ignore is false                         |
| [INLONG-7503](https://github.com/apache/inlong/issues/7503)  | [Feature][Sort] Support multipule audit ids and fix audit time won't fit                                 |
| [INLONG-7488](https://github.com/apache/inlong/issues/7488)  | [Bug][Sort] Oracle CDC 2.3 can only read one record during snapshot reading                              |
| [INLONG-7487](https://github.com/apache/inlong/issues/7487)  | [Improve][Sort] Change changelog mode to capture update_before for ES                                    |
| [INLONG-7485](https://github.com/apache/inlong/issues/7485)  | [Improve][Sort] Kafka extract node decide connector option by format                                     |
| [INLONG-7483](https://github.com/apache/inlong/issues/7483)  | [Bug][Sort] Connector dependency shade range is not right                                                |
| [INLONG-7477](https://github.com/apache/inlong/issues/7477)  | [Bug][Sort] Fix the metadata of table write error for canal-json                                         |
| [INLONG-7470](https://github.com/apache/inlong/issues/7470)  | [Bug][Sort] Iceberg's data were duplicated when delete records in upsert mode                            |
| [INLONG-7464](https://github.com/apache/inlong/issues/7464)  | [Bug][Sort] Elasticsearch connector lost dependency                                                      |
| [INLONG-7459](https://github.com/apache/inlong/issues/7459)  | [Bug][Sort] Fix dirty data can't be archived to s3 for hbase                                             |
| [INLONG-7457](https://github.com/apache/inlong/issues/7457)  | [Improve][Sort] Change changelog mode to capture update_before for Doris                                 |
| [INLONG-7455](https://github.com/apache/inlong/issues/7455)  | [Bug][Sort] Fix dirty data archival format issues in Iceberg connector                                   |
| [INLONG-7453](https://github.com/apache/inlong/issues/7453)  | [Bug][Sort] The blacklist of Iceberg connector will lose the metric and archiving of dirty data          |
| [INLONG-7451](https://github.com/apache/inlong/issues/7451)  | [Bug][Sort] FileSystem connector dependency lost                                                         |
| [INLONG-7449](https://github.com/apache/inlong/issues/7449)  | [Bug][Sort] Kafka connector dependency lost                                                              |
| [INLONG-7446](https://github.com/apache/inlong/issues/7446)  | [Improve][Sort] Upgrade MongoDB CDC to version 2.3                                                       |
| [INLONG-7441](https://github.com/apache/inlong/issues/7441)  | [Bug][Sort] HBase connector dependency lost and dirty data process error                                 |
| [INLONG-7437](https://github.com/apache/inlong/issues/7437)  | [Improve][Sort] Support metrics for Oracle CDC connector with incremental snapshot enabled               |
| [INLONG-7417](https://github.com/apache/inlong/issues/7417)  | [Improve][Sort] Use SinkTableMetricData instead of SinkMetricData in IcebergSingleStreamWriter           |
| [INLONG-7412](https://github.com/apache/inlong/issues/7412)  | [Bug][Sort] Fix dependency error: java.lang.NoClassDefFoundError                                         |
| [INLONG-7411](https://github.com/apache/inlong/issues/7411)  | [Bug][Sort] Fix the invalid of kafka source meitric due to inlongMetric being null                       |
| [INLONG-7410](https://github.com/apache/inlong/issues/7410)  | [Improve][Sort] Support open incremental snapshot in oracle cdc connector                                |
| [INLONG-7400](https://github.com/apache/inlong/issues/7400)  | [Improve][Sort] Upgrade Oracle CDC to version 2.3.0                                                      |
| [INLONG-7397](https://github.com/apache/inlong/issues/7397)  | [Bug][Sort] MySql connector output two data with the same UPDATE operation                               |
| [INLONG-7392](https://github.com/apache/inlong/issues/7392)  | [Improve][Sort] Refactor Doris single table to solve performance issues                                  |
| [INLONG-7391](https://github.com/apache/inlong/issues/7391)  | [Improve][Sort] Support CSV format and dirty data collecting for StarRocks connector                     |
| [INLONG-7389](https://github.com/apache/inlong/issues/7389)  | [Improve][Manager][Sort] Add audit id info for source                                                    |
| [INLONG-7377](https://github.com/apache/inlong/issues/7377)  | [Bug][Sort] Protobuf conflicts in sort-dist and sort-connectors                                          |
| [INLONG-7363](https://github.com/apache/inlong/issues/7363)  | [Bug][Sort] Icebreg connector has null pointer exception                                                 |
| [INLONG-7351](https://github.com/apache/inlong/issues/7351)  | [Bug][Sort] Table level metric name is error for starrocks and doris                                     |
| [INLONG-7346](https://github.com/apache/inlong/issues/7346)  | [Improve][Sort] Add metadata support for join of Redis dimension table                                   |
| [INLONG-7339](https://github.com/apache/inlong/issues/7339)  | [Improve][Sort] Adjust the Sort structure for multiple versions of Apache Flink                          |
| [INLONG-7335](https://github.com/apache/inlong/issues/7335)  | [Bug][Sort] Hbase connector lost spi file when shade                                                     |
| [INLONG-7331](https://github.com/apache/inlong/issues/7331)  | [Improve][Sort][Manager] Support complex type field                                                      |
| [INLONG-7311](https://github.com/apache/inlong/issues/7311)  | [Bug][Sort] Doris StreamLoad unable to archive dirty data                                                |
| [INLONG-7306](https://github.com/apache/inlong/issues/7306)  | [Improve][Sort] Use properties to save extended parameters in Redis LoadNode                             |
| [INLONG-7299](https://github.com/apache/inlong/issues/7299)  | [Feature][Sort][Manager] Support InLongMsg in KafkaConnector                                             |
| [INLONG-7293](https://github.com/apache/inlong/issues/7293)  | [Bug][Sort] S3DirtySink flushes too quickly                                                              |
| [INLONG-7292](https://github.com/apache/inlong/issues/7292)  | [Bug][Sort] The invokeMultiple method cannot accurately detect and archive dirty data                    |
| [INLONG-7291](https://github.com/apache/inlong/issues/7291)  | [Bug][Sort] Fix bug of dirtysink not opening for jdbc multiple sink                                      |
| [INLONG-7286](https://github.com/apache/inlong/issues/7286)  | [Bug][Sort] Fix issue of tableidentifier being null when addRow                                          |
| [INLONG-7268](https://github.com/apache/inlong/issues/7268)  | [Feature][Sort] Support Apache Kudu LoadNode                                                             |
| [INLONG-7257](https://github.com/apache/inlong/issues/7257)  | [Bug][Sort] Doris connector throw NPE when DATE type data is null                                        |
| [INLONG-7250](https://github.com/apache/inlong/issues/7250)  | [Improve][Sort] Output the read phase metrics for MySQL reader                                           |
| [INLONG-7245](https://github.com/apache/inlong/issues/7245)  | [Feature][Sort] Support metric and audio in sort-connect-redis                                           |
| [INLONG-7240](https://github.com/apache/inlong/issues/7240)  | [Feature][Sort] Support load node of Redis                                                               |
| [INLONG-7197](https://github.com/apache/inlong/issues/7197)  | [Improve][Sort] Iceberg connector supports keyby with the primary key                                    |
| [INLONG-7186](https://github.com/apache/inlong/issues/7186)  | [Bug][Sort] Incorrect time zone for data writing to Iceberg                                              |
| [INLONG-7140](https://github.com/apache/inlong/issues/7140)  | [Improve][Sort] MySql cdc connector split exit without catch exception                                   |
| [INLONG-7060](https://github.com/apache/inlong/issues/7060)  | [Feature][Sort] Support write redis in sort-connector-redis                                              |
| [INLONG-7058](https://github.com/apache/inlong/issues/7058)  | [Feature][Sort] Support Apache Kudu connector                                                            |
| [INLONG-7249](https://github.com/apache/inlong/issues/7249)  | [Feature][Sort] JDBC accurate dirty data archive and metric calculation                                  |
| [INLONG-7614](https://github.com/apache/inlong/issues/7614)  | [Bug][Sort] Fix pulsar connector data loss                                                               |
### Audit
|                            ISSUE                             | Summary                                                                                                       |
|:------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------|
| [INLONG-7607](https://github.com/apache/inlong/issues/7607)  | [Bug][Docker]  Audit store service can not start in docker-compose                                            |
| [INLONG-7519](https://github.com/apache/inlong/issues/7519)  | [Feature][Audit] Proxy support Kafka                                                                          |
| [INLONG-7518](https://github.com/apache/inlong/issues/7518)  | [Feature][Audit] Store support Kafka                                                                          |
| [INLONG-7234](https://github.com/apache/inlong/issues/7234)  | [Improve][Audit] Add log4j for audit-store                                                                    |
| [INLONG-7159](https://github.com/apache/inlong/issues/7159)  | [Bug] [Audit]  Fix the problem of audit sdk  create thread  when the audit service is not deployed            |
| [INLONG-6919](https://github.com/apache/inlong/issues/6919)  | [Bug][Audit] No exceptions are printed in the log                                                             |

### Dashboard
|                            ISSUE                             | Summary                                                                                                       |
|:------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------|
| [INLONG-7613](https://github.com/apache/inlong/issues/7613)  | [Improve][Dashboard] Data reporting moved to Approval Information                                             |
| [INLONG-7611](https://github.com/apache/inlong/issues/7611)  | [Improve][Dashboard] File source select cluster add limit                                                     |
| [INLONG-7582](https://github.com/apache/inlong/issues/7582)  | [Improve][Dashboard] Support responseParse config                                                             |
| [INLONG-7563](https://github.com/apache/inlong/issues/7563)  | [Feature][Dashboard] Support specific partitions in the kudu sink                                             |
| [INLONG-7560](https://github.com/apache/inlong/issues/7560)  | [Improve][Dashboard] When submitting group approval, determine whether to create source and sink              |
| [INLONG-7542](https://github.com/apache/inlong/issues/7542)  | [Improve][Dashboard] File source supports selecting clusters                                                  |
| [INLONG-7531](https://github.com/apache/inlong/issues/7531)  | [Improve][Dashboard] Clickhouse source supports filling life cycle                                            |
| [INLONG-7521](https://github.com/apache/inlong/issues/7521)  | [Improve][Dashboard] Arrange according to the size of Auditid                                                 |
| [INLONG-7506](https://github.com/apache/inlong/issues/7506)  | [Improve][Dashboard] Change query method of source and sink from get to post                                  |
| [INLONG-7499](https://github.com/apache/inlong/issues/7499)  | [Feature][Dashboard] Support redis node management                                                            |
| [INLONG-7495](https://github.com/apache/inlong/issues/7495)  | [Feature][Dashboard] Support hudi node management                                                             |
| [INLONG-7493](https://github.com/apache/inlong/issues/7493)  | [Improve][Dashboard] Not use upper case for source, sink, and audit labels                                    |
| [INLONG-7438](https://github.com/apache/inlong/issues/7438)  | [Improve][Dashboard] Support more Sort index display instead of directly displaying ID                        |
| [INLONG-7415](https://github.com/apache/inlong/issues/7415)  | [Feature][Dashboard][Manager] Creating schema of StreamSource by JSON                                         |
| [INLONG-7384](https://github.com/apache/inlong/issues/7384)  | [Bug][Dashboard] Login page error                                                                             |
| [INLONG-7382](https://github.com/apache/inlong/issues/7382)  | [Improve][Dashboard] Add a database name for MySQL sink                                                       |
| [INLONG-7368](https://github.com/apache/inlong/issues/7368)  | [Improve][Dashboard] InLongGroup adds status display and adjustment operations                                |
| [INLONG-7367](https://github.com/apache/inlong/issues/7367)  | [Improve][Dashboard] Enabled more global config                                                               |
| [INLONG-7360](https://github.com/apache/inlong/issues/7360)  | [Bug][Dashboard] env.local variable can not work                                                              |
| [INLONG-7327](https://github.com/apache/inlong/issues/7327)  | [Improve][Dashboard] Support using different env variable                                                     |
| [INLONG-7319](https://github.com/apache/inlong/issues/7319)  | [Improve][Dashboard] Support global configuration of Provider and Layout                                      |
| [INLONG-7313](https://github.com/apache/inlong/issues/7313)  | [Improve][Dashboard] Automatically generate a unique ID and depth key for the menu                            |
| [INLONG-7305](https://github.com/apache/inlong/issues/7305)  | [Improve][Dashboard]  Use properties to save extended parameters in Redis LoadNode                            |
| [INLONG-7297](https://github.com/apache/inlong/issues/7297)  | [Improve][Dashboard] Hive node parameter optimization                                                         |
| [INLONG-7264](https://github.com/apache/inlong/issues/7264)  | [Feature][Dashboard] Support sink Apache Kudu                                                                 |
| [INLONG-7246](https://github.com/apache/inlong/issues/7246)  | [Improve][Dashboard] Remove helper info of DataType in Stream configuration                                   |
| [INLONG-7238](https://github.com/apache/inlong/issues/7238)  | [Feature][Dashboard] Support cascading of redis cluster / data-type and format configuration                  |
| [INLONG-7215](https://github.com/apache/inlong/issues/7215)  | [Improve][Dashboard] PostgreSQL source parameter optimization                                                 |
| [INLONG-7211](https://github.com/apache/inlong/issues/7211)  | [Feature][Dashboard] Support Redis sink                                                                       |
| [INLONG-7190](https://github.com/apache/inlong/issues/7190)  | [Improve][Dashboard] New data subscription optimization                                                       |
| [INLONG-7176](https://github.com/apache/inlong/issues/7176)  | [Feature][Dashboard] Add restart and stop operations for InlongGroup                                          |
| [INLONG-7162](https://github.com/apache/inlong/issues/7162)  | [Improve][Dashboard] Kafka MQ type details optimization                                                       |
| [INLONG-7153](https://github.com/apache/inlong/issues/7153)  | [Improve][Dashboard] The data subscription status code shows the specific meaning                             |

### Other
|                            ISSUE                             | Summary                                                                                                       |
|:------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------|
| [INLONG-7572](https://github.com/apache/inlong/issues/7572)  | [Feature][Docker] Add the Kafka support for audit docker deployment                                           |
| [INLONG-7528](https://github.com/apache/inlong/issues/7528)  | [Feature][Script] Add the Kafka support for audit standalone deployment                                       |
| [INLONG-7480](https://github.com/apache/inlong/issues/7480)  | [Improve][CVE] Dependency org.apache.tomcat.embed:tomcat-embed-core leading to CVE problem                    |
| [INLONG-7475](https://github.com/apache/inlong/issues/7475)  | [Improve][Docker] Add Kafka connector to the manager image for test                                           |
| [INLONG-7423](https://github.com/apache/inlong/issues/7423)  | [Feature] Pulsar connector with adminUrl cannot output audit metrics                                          |
| [INLONG-7349](https://github.com/apache/inlong/issues/7349)  | [Bug][SDK] Init failure when a single SortTask create multiple SortClients                                    |
| [INLONG-7323](https://github.com/apache/inlong/issues/7323)  | [Improve][Docker] Add push manifest for tubemq-all and tubemq-manager                                         |
| [INLONG-7266](https://github.com/apache/inlong/issues/7266)  | [Improve][Document] Add document for Apache Kudu                                                              |
| [INLONG-7244](https://github.com/apache/inlong/issues/7244)  | [Feature][Document] Add user docs for Redis LoadNote                                                          |
| [INLONG-7161](https://github.com/apache/inlong/issues/7161)  | [Bug] Mysql connector only output the latest record in snapshot stage for table without primary key           |
| [INLONG-7154](https://github.com/apache/inlong/issues/7154)  | [Bug][SDK] Fix metric report failure when topic does not exist                                                |
| [INLONG-6560](https://github.com/apache/inlong/issues/6560)  | [Feature][Docker] Add arm64 image for inlong/tubemq-all                                                       |
| [INLONG-5643](https://github.com/apache/inlong/issues/5643)  | [Bug][CVE] There is a vulnerability in  Apache Flume 1.10.0                                                   |