---
title: InLong v1.4.0
---

Use the links below to download the Apache InLong from one of our mirrors.

## 1.4.0 release

|         Name          | Version |      Date      |                                                                                                                                                                                   Downloads                                                                                                                                                                                    |
|:---------------------:|:-------:|:--------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|  InLong Source Code   |  1.4.0  | Nov. 16, 2022  |                                       [[SRC](https://downloads.apache.org/inlong/1.4.0/apache-inlong-1.4.0-src.tar.gz)]                [[ASC](https://downloads.apache.org/inlong/1.4.0/apache-inlong-1.4.0-src.tar.gz.asc)]                [[SHA512](https://downloads.apache.org/inlong/1.4.0/apache-inlong-1.4.0-src.tar.gz.sha512)]                                        |
|  InLong Binary file   |  1.4.0  | Nov. 16, 2022  |                                       [[BIN](https://downloads.apache.org/inlong/1.4.0/apache-inlong-1.4.0-bin.tar.gz)]                [[ASC](https://downloads.apache.org/inlong/1.4.0/apache-inlong-1.4.0-bin.tar.gz.asc)]                [[SHA512](https://downloads.apache.org/inlong/1.4.0/apache-inlong-1.4.0-bin.tar.gz.sha512)]                                        |
| Connector Binary file |  1.4.0  | Nov. 16, 2022  |                     [[BIN](https://downloads.apache.org/inlong/1.4.0/apache-inlong-1.4.0-sort-connectors.tar.gz)]                [[ASC](https://downloads.apache.org/inlong/1.4.0/apache-inlong-1.4.0-sort-connectors.tar.gz.asc)]                [[SHA512](https://downloads.apache.org/inlong/1.4.0/apache-inlong-1.4.0-sort-connectors.tar.gz.sha512)]                      |

### Release Integrity

You must [verify](https://www.apache.org/info/verification.html) the integrity of the downloaded files.
We provide OpenPGP signatures for every release file. This signature should be matched against the [KEYS](https://downloads.apache.org/inlong/KEYS) file which contains the OpenPGP keys of InLong's Release Managers.
We also provide <code>SHA-512</code> checksums for every release file. After you download the file, you should calculate a checksum for your download, and make sure it is the same as ours.

## Release Notes

### Agent
| ISSUE                                                       | Summary                                                                                          |
|:------------------------------------------------------------|:-------------------------------------------------------------------------------------------------|
| [INLONG-6376](https://github.com/apache/inlong/issues/6376) | [Improve][Agent] Refactor sink and complement send metric                                        |
| [INLONG-6366](https://github.com/apache/inlong/issues/6366) | [Bug][Agent] Missing position update operation when data is successfully sent in order-send mode |
| [INLONG-6332](https://github.com/apache/inlong/issues/6332) | [Bug][Agent]  Reboot will reset file position                                                    |
| [INLONG-6251](https://github.com/apache/inlong/issues/6251) | [Bug][Agent] The unit test occurred ConcurrentModification error                                 |
| [INLONG-6207](https://github.com/apache/inlong/issues/6207) | [Improve][Agent] Optimize the unit test for TestSQLServerReader                                  |
| [INLONG-6197](https://github.com/apache/inlong/issues/6197) | [Improve][Agent] Remove useless configuration in agent.properties                                |
| [INLONG-6194](https://github.com/apache/inlong/issues/6194) | [Feature][Agent] Support parsing metrics for different components                                |
| [INLONG-6181](https://github.com/apache/inlong/issues/6181) | [Feature][Agent][DataProxy][Manager] Support query and management for cluster protocol type      |
| [INLONG-6131](https://github.com/apache/inlong/issues/6131) | [Feature][Agent]  Support file filtering by condition                                            |
| [INLONG-6115](https://github.com/apache/inlong/issues/6115) | [Bug][Agent] Prometheus listeners miss some metrics                                              |
| [INLONG-6047](https://github.com/apache/inlong/issues/6047) | [Bug][Agent] File could not be matched in the k8s                                                |
| [INLONG-6033](https://github.com/apache/inlong/issues/6033) | [Improve][Agent] Support for hidden directories                                                  |
| [INLONG-6022](https://github.com/apache/inlong/issues/6022) | [Bug][Agent] Lost metrics values with send and read                                              |
| [INLONG-6009](https://github.com/apache/inlong/issues/6009) | [Improve][Agent] Report data size to InLong Audit                                                |
| [INLONG-5988](https://github.com/apache/inlong/issues/5988) | [Improve][Agent] Add the Partition Key settings for file source                                  |
| [INLONG-5948](https://github.com/apache/inlong/issues/5948) | [Improve][Agent][DataProxy] Add the enable audit environment                                     |
| [INLONG-5909](https://github.com/apache/inlong/issues/5909) | [Bug][Agent] WatchService is no effect in the k8s                                                |
| [INLONG-5874](https://github.com/apache/inlong/issues/5874) | [Improve][Agent] Add msgTime attribute in PackProxyMessage                                       |
| [INLONG-5861](https://github.com/apache/inlong/issues/5861) | [Improve][Agent] Support symbolic links for file                                                 |
| [INLONG-5828](https://github.com/apache/inlong/issues/5828) | [Bug][Agent] Merge data error when collect nonstandard log of k8s                                |
| [INLONG-5803](https://github.com/apache/inlong/issues/5803) | [Bug][Agent] NPE when collect file data                                                          |
| [INLONG-5743](https://github.com/apache/inlong/issues/5743) | [Feature][Agent] Read file data continuously through the monitoring file                         |
| [INLONG-5741](https://github.com/apache/inlong/issues/5741) | [Improve][Agent] Keep the docker config of Agent consistent with physical machine                |
| [INLONG-5722](https://github.com/apache/inlong/issues/5722) | [Feature][Agent] Support Redis Source                                                            |
| [INLONG-5720](https://github.com/apache/inlong/issues/5720) | [Bug][Agent] The data file cannot be fetched                                                     |
| [INLONG-5675](https://github.com/apache/inlong/issues/5675) | [Improve][Agent] Support custom fixed ip for Agent                                               |
| [INLONG-5045](https://github.com/apache/inlong/issues/5045) | [Feature][Agent] Support collect data from MongoDB                                               |
| [INLONG-4986](https://github.com/apache/inlong/issues/4986) | [Feature][Agent] Support MQTT Source                                                             |
| [INLONG-6327](https://github.com/apache/inlong/issues/6327) | [Improve][Agent] Support collect data from SQLServer by Debezium                                 |
| [INLONG-6176](https://github.com/apache/inlong/issues/6176) | [Feature][Agent] Support collect data from Oracle                                                |

### DataProxy
| ISSUE                                                       | Summary                                                                                     |
|:------------------------------------------------------------|:--------------------------------------------------------------------------------------------|
| [INLONG-6439](https://github.com/apache/inlong/issues/6439) | [Improve][DataProxy] Added service status and load fields in heartbeat request              |
| [INLONG-6406](https://github.com/apache/inlong/issues/6406) | [Improve][DataProxy] Should support creating sink dynamically after started                 |
| [INLONG-6369](https://github.com/apache/inlong/issues/6369) | [Improve][DataProxy] Use the defined message attribute key value in InLong-Common           |
| [INLONG-6331](https://github.com/apache/inlong/issues/6331) | [Bug][DataProxy] Unable to obtain prometheus metrics correctly                              |
| [INLONG-6329](https://github.com/apache/inlong/issues/6329) | [Improve][DataProxy] Add proxy-send mode message logic                                      |
| [INLONG-6324](https://github.com/apache/inlong/issues/6324) | [Improve][DataProxy] Optimize DataProxy's message processing on the source side             |
| [INLONG-6316](https://github.com/apache/inlong/issues/6316) | [Bug][DataProxy] Heartbeat information is null                                              |
| [INLONG-6285](https://github.com/apache/inlong/issues/6285) | [Improve][DataProxy] Add authorization info while reporting heartbeat to Manager            |
| [INLONG-6278](https://github.com/apache/inlong/issues/6278) | [Improve][DataProxy] Needless to sleep() for order event                                    |
| [INLONG-6266](https://github.com/apache/inlong/issues/6266) | [Improve][Manager][DataProxy]  Change the heartbeat configuration                           |
| [INLONG-6234](https://github.com/apache/inlong/issues/6234) | [Improve][DataProxy] Adjust the source report information acquisition source                |
| [INLONG-6228](https://github.com/apache/inlong/issues/6228) | [Improve][DataProxy] Modify the default values of the dataproxy-tube.conf file              |
| [INLONG-6217](https://github.com/apache/inlong/issues/6217) | [Improve][DataProxy] Delete the cluster.id in the common.properties file                    |
| [INLONG-6181](https://github.com/apache/inlong/issues/6181) | [Feature][Agent][DataProxy][Manager] Support query and management for cluster protocol type |
| [INLONG-6156](https://github.com/apache/inlong/issues/6156) | [Bug][DataProxy] Twice event write when topic is empty                                      |
| [INLONG-6065](https://github.com/apache/inlong/issues/6065) | [Bug][DataProxy] Delete the Pulsar client synchronously when deleting a topic               |
| [INLONG-6052](https://github.com/apache/inlong/issues/6052) | [Bug][DataProxy] Wrong value set in PulsarClientService                                     |
| [INLONG-6049](https://github.com/apache/inlong/issues/6049) | [Improve][DataProxy] Optimize exception stack information is not printed in some scenes     |
| [INLONG-6040](https://github.com/apache/inlong/issues/6040) | [Bug][DataProxy] DataProxy does not fully update the configurations                         |
| [INLONG-6012](https://github.com/apache/inlong/issues/6012) | [Bug][DataProxy] Adjust the fields statistics unit in DataProxyMetricItemSet                |
| [INLONG-6005](https://github.com/apache/inlong/issues/6005) | [Bug][DataProxy] Bug with metics values                                                     |
| [INLONG-5948](https://github.com/apache/inlong/issues/5948) | [Improve][Agent][DataProxy] Add the enable audit environment                                |
| [INLONG-5917](https://github.com/apache/inlong/issues/5917) | [Improve][DataProxy] Optimize TubeSink class                                                |
| [INLONG-5899](https://github.com/apache/inlong/issues/5899) | [Improve][DataProxy] Optimize Http's SimpleMessageHandler class                             |
| [INLONG-5880](https://github.com/apache/inlong/issues/5880) | [Improve][DataProxy] Add data reporting time process logic                                  |
| [INLONG-5834](https://github.com/apache/inlong/issues/5834) | [Bug][DataProxy] The sink metric in MQ Zone has some mistakes                               |
| [INLONG-5830](https://github.com/apache/inlong/issues/5830) | [Bug][DataProxy] Required parameter topic exception                                         |
| [INLONG-5788](https://github.com/apache/inlong/issues/5788) | [Bug][DataProxy] Incorrect readFailSize metric value                                        |
| [INLONG-5770](https://github.com/apache/inlong/issues/5770) | [Improve][DataProxy] Optimize the method of obtaining the local IP address                  |
| [INLONG-5723](https://github.com/apache/inlong/issues/5723) | [Bug][DataProxy] Source and sink metrics are incorrect when msgType=5                       |
| [INLONG-5718](https://github.com/apache/inlong/issues/5718) | [Bug][Manager][DataProxy] Fix the conflict of %m and %mask in the log4j2.xml                |
| [INLONG-5658](https://github.com/apache/inlong/issues/5658) | [Bug][DataProxy] Docker script error                                                        |
| [INLONG-4962](https://github.com/apache/inlong/issues/4962) | [Improve][DataProxy] Unify the Usage of Message Queue                                       |
| [INLONG-1959](https://github.com/apache/inlong/issues/1959) | [Feature][Manager][DataProxy] Support register DataProxy IP to the Manager automatically    |

### TubeMQ
| ISSUE                                                       | Summary                                                                                                |
|:------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------|
| [INLONG-6446](https://github.com/apache/inlong/issues/6446) | [Bug][TubeMQ] Fix misuse of SECT_TOKEN_BROKER                                                          |
| [INLONG-6422](https://github.com/apache/inlong/issues/6422) | [Bug][TubeMQ] Deleting the topic was unsuccessful                                                      |
| [INLONG-6421](https://github.com/apache/inlong/issues/6421) | [Bug][TubeMQ] Host should not be blank                                                                 |
| [INLONG-6419](https://github.com/apache/inlong/issues/6419) | [Bug][TubeMQ] Correct some misuse of META_DEFAULT_BROKER_PORT                                          |
| [INLONG-6303](https://github.com/apache/inlong/issues/6303) | [Improve][TubeMQ] Unify the guava version for the TubeMQ manager                                       |
| [INLONG-6158](https://github.com/apache/inlong/issues/6158) | [Improve][TubeMQ] Add ZooKeeper request timeout configuration                                          |
| [INLONG-6142](https://github.com/apache/inlong/issues/6142) | [Improve][TubeMQ] Added client-balanced consumer group control API                                     |
| [INLONG-6138](https://github.com/apache/inlong/issues/6138) | [Improve][TubeMQ] Update the API called by the js files in the resource                                |
| [INLONG-6133](https://github.com/apache/inlong/issues/6133) | [Improve][TubeMQ] Add query parameter groupName in method admin_query_consumer_regmap                  |
| [INLONG-6126](https://github.com/apache/inlong/issues/6126) | [Improve][TubeMQ] Optimize StoreRepairAdmin logic                                                      |
| [INLONG-6124](https://github.com/apache/inlong/issues/6124) | [Improve][TubeMQ] Small optimizations about the implementation of metadata logic                       |
| [INLONG-6117](https://github.com/apache/inlong/issues/6117) | [Improve][TubeMQ] Optimize the implementation of adminQueryBrokerTopicCfgAndRunInfo                    |
| [INLONG-6110](https://github.com/apache/inlong/issues/6110) | [Improve][TubeMQ] Optimize the implementation logic of adding or modifying TopicCtrlEntity records     |
| [INLONG-6108](https://github.com/apache/inlong/issues/6108) | [Improve][TubeMQ] Added booked consume group query APIs                                                |
| [INLONG-6098](https://github.com/apache/inlong/issues/6098) | [Improve][TubeMQ] Add preprocessing condition check                                                    |
| [INLONG-6096](https://github.com/apache/inlong/issues/6096) | [Improve][TubeMQ] Optimize some code styles under the nodeconsumer module                              |
| [INLONG-6092](https://github.com/apache/inlong/issues/6092) | [Bug][TubeMQ] Change the way to obtain the modifyUser  and modifyDate                                  |
| [INLONG-6038](https://github.com/apache/inlong/issues/6038) | [Improve][TubeMQ] Optimize FlowCtrlRuleHandler.updateFlowCtrlInfo()                                    |
| [INLONG-6035](https://github.com/apache/inlong/issues/6035) | [Improve][TubeMQ] Add Broker's message append and file refresh delay statistics                        |
| [INLONG-6019](https://github.com/apache/inlong/issues/6019) | [Improve][TubeMQ] Modify the name of variables and APIs in Broker statistics related classes           |
| [INLONG-5946](https://github.com/apache/inlong/issues/5946) | [Improve][TubeMQ] AbstractDaemonService implementation optimization                                    |
| [INLONG-5907](https://github.com/apache/inlong/issues/5907) | [Improve][TubeMQ] Replace the while-sleep with ScheduledExecutorService for tube server loopProcess    |
| [INLONG-5867](https://github.com/apache/inlong/issues/5867) | [Improve][TubeMQ] Add registered partition information printing                                        |
| [INLONG-5859](https://github.com/apache/inlong/issues/5859) | [Improve][TubeMQ] Optimize redundant code in DefaultOffsetManager                                      |
| [INLONG-5848](https://github.com/apache/inlong/issues/5848) | [Bug][TubeMQ] Get duplicated call when calling TubeMQConsumer::Start()                                 |
| [INLONG-5795](https://github.com/apache/inlong/issues/5795) | [Improve][TubeMQ]Optimize the implementation of ConsumerEvent.toStrBuilder()                           |
| [INLONG-5748](https://github.com/apache/inlong/issues/5748) | [Improve][TubeMQ] Remove the virtual keyword of the destructor of the TubeMQTDMsg and DataItem classes |
| [INLONG-5700](https://github.com/apache/inlong/issues/5700) | [Bug][TubeMQ] Core file generated while the C++ consumer is closed                                     |
| [INLONG-5687](https://github.com/apache/inlong/issues/5687) | [Improve][TubeMQ] Missing log content in the tests directory                                           |
| [INLONG-5681](https://github.com/apache/inlong/issues/5681) | [Bug][TubeMQ] The C++ SDK does not switch after the active Master node hangs up                        |

### Manager
| ISSUE                                                       | Summary                                                                                                                         |
|:------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| [INLONG-6415](https://github.com/apache/inlong/issues/6415) | [Bug][Manager] JSON serialization failure in SortSourceService                                                                  |
| [INLONG-6412](https://github.com/apache/inlong/issues/6412) | [Improve][Manager] Add a parameter to control whether to initiate the process for StreamSink                                    |
| [INLONG-6410](https://github.com/apache/inlong/issues/6410) | [Bug][Manager] The extension parameters of group and stream cannot be saved to ext_params                                       |
| [INLONG-6399](https://github.com/apache/inlong/issues/6399) | [Feature][Manager] Support adding extension params for InLong Group and InLong Stream                                           |
| [INLONG-6395](https://github.com/apache/inlong/issues/6395) | [Bug][Manager] Wrong annotation in the delete method of InlongStreamApi                                                         |
| [INLONG-6387](https://github.com/apache/inlong/issues/6387) | [Improve][Manager] Adapt auto-push source type status and fix source field update                                               |
| [INLONG-6371](https://github.com/apache/inlong/issues/6371) | [Bug][Manager] Lack of topic and cache zone properties in getSortSource method                                                  |
| [INLONG-6361](https://github.com/apache/inlong/issues/6361) | [Bug][Manager] Fix the deserialization error below jackson version 2.13                                                         |
| [INLONG-6352](https://github.com/apache/inlong/issues/6352) | [Improve][Manager] Add a global config for whether to use ZooKeeper to manage the Sort task                                     |
| [INLONG-6349](https://github.com/apache/inlong/issues/6349) | [Feature][Manager] Support update and delete StreamSink by key in Client                                                        |
| [INLONG-6347](https://github.com/apache/inlong/issues/6347) | [Bug][Manager] MQ type is missing from the getSortSource method and NPE should not be thrown                                    |
| [INLONG-6343](https://github.com/apache/inlong/issues/6343) | [Bug][Manager] Get NullPointerException when bind cluster                                                                       |
| [INLONG-6297](https://github.com/apache/inlong/issues/6297) | [Feature][Manager] Refactor the PollerPlugin and SortPoller interfaces                                                          |
| [INLONG-6288](https://github.com/apache/inlong/issues/6288) | [Feature][Manager] Refactor getSortClusterConfig by using MyBatis Cursor                                                        |
| [INLONG-6282](https://github.com/apache/inlong/issues/6282) | [Bug][Manager] The client deletes the sources or sinks not working                                                              |
| [INLONG-6276](https://github.com/apache/inlong/issues/6276) | [Bug][Manager] The data separator is a number when submitting the Sort task                                                     |
| [INLONG-6268](https://github.com/apache/inlong/issues/6268) | [Improve][Manager] Support raw format for Load nodes                                                                            |
| [INLONG-6266](https://github.com/apache/inlong/issues/6266) | [Improve][Manager][DataProxy]  Change the heartbeat configuration                                                               |
| [INLONG-6248](https://github.com/apache/inlong/issues/6248) | [Feature][Manager] Optimize task status management                                                                              |
| [INLONG-6232](https://github.com/apache/inlong/issues/6232) | [Feature][Manager] Support Apache Doris load node management                                                                    |
| [INLONG-6222](https://github.com/apache/inlong/issues/6222) | [Bug][Manager] Parse the source type error in Command tools                                                                     |
| [INLONG-6220](https://github.com/apache/inlong/issues/6220) | [Improve][Manager] Support query cluster nodes by the manager client                                                            |
| [INLONG-6216](https://github.com/apache/inlong/issues/6216) | [Feature][Manager] Support getting topic and backup topic for InlongGroup                                                       |
| [INLONG-6209](https://github.com/apache/inlong/issues/6209) | [Improve][Manager] Clean and reuse code for DataNode                                                                            |
| [INLONG-6192](https://github.com/apache/inlong/issues/6192) | [Improve][Manager] Clean and reuse code for StreamSink                                                                          |
| [INLONG-6188](https://github.com/apache/inlong/issues/6188) | [Bug][Manager] Join transform node should supports more than one fields to join                                                 |
| [INLONG-6181](https://github.com/apache/inlong/issues/6181) | [Feature][Agent][DataProxy][Manager] Support query and management for cluster protocol type                                     |
| [INLONG-6179](https://github.com/apache/inlong/issues/6179) | [Feature][Manager] Add RAW dataformat enum                                                                                      |
| [INLONG-6171](https://github.com/apache/inlong/issues/6171) | [Bug][Manager] Fix the lightweight group node relation compatibility error                                                      |
| [INLONG-6159](https://github.com/apache/inlong/issues/6159) | [Bug][Manager] Heartbeat update failed but return success                                                                       |
| [INLONG-6154](https://github.com/apache/inlong/issues/6154) | [Feature][Manager] Support to get audit data from the ClickHouse                                                                |
| [INLONG-6151](https://github.com/apache/inlong/issues/6151) | [Feature][Manager] Add logically deleted group purging                                                                          |
| [INLONG-6146](https://github.com/apache/inlong/issues/6146) | [Bug][Manager] Using error jackson dependency when build dataflow json string                                                   |
| [INLONG-6136](https://github.com/apache/inlong/issues/6136) | [Bug][Manager] Cannot find manager-web.log in docker mode                                                                       |
| [INLONG-6121](https://github.com/apache/inlong/issues/6121) | [Bug][Manager] Stream source list not assigned when list stream info                                                            |
| [INLONG-6105](https://github.com/apache/inlong/issues/6105) | [Umbrella] [Manager]  Manager support delete/update by unique key                                                               |
| [INLONG-6104](https://github.com/apache/inlong/issues/6104) | [Feature][Manager] Support getting backup info in getSortSource                                                                 |
| [INLONG-6101](https://github.com/apache/inlong/issues/6101) | [Feature][Manager] Support updating and deleting inlong cluster by key                                                          |
| [INLONG-6089](https://github.com/apache/inlong/issues/6089) | [Feature][Manager][Sort] Kafka extract node supports raw format and timestamp scan mode                                         |
| [INLONG-6088](https://github.com/apache/inlong/issues/6088) | [Improve][Sort][Manager] Scan mode support timestamp for Kafka extract node                                                     |
| [INLONG-6086](https://github.com/apache/inlong/issues/6086) | [Feature][Manager] Support updating and deleting stream sink by key                                                             |
| [INLONG-6085](https://github.com/apache/inlong/issues/6085) | [Improve][Manager] Remove the unused data consumption related classes                                                           |
| [INLONG-6080](https://github.com/apache/inlong/issues/6080) | [Bug][Manager] Change the unused DataNodeResponse to DataNodeInfo                                                               |
| [INLONG-6078](https://github.com/apache/inlong/issues/6078) | [Improve][Manager][Sort] Add VarBinary data type and extend binary for supporting length                                        |
| [INLONG-6068](https://github.com/apache/inlong/issues/6068) | [Improve][Manager] Optimize the usage of ObjectMapper                                                                           |
| [INLONG-6063](https://github.com/apache/inlong/issues/6063) | [Feature][Manager] Use the data node info for ClickHouse and Iceberg                                                            |
| [INLONG-6042](https://github.com/apache/inlong/issues/6042) | [Feature][Manager] Support updating and deleting DataNode by key                                                                |
| [INLONG-6018](https://github.com/apache/inlong/issues/6018) | [Improve][Manager] Using the Hive data node when creating group resources                                                       |
| [INLONG-6014](https://github.com/apache/inlong/issues/6014) | [Bug][Manager] Int type cannot be compared with null using ==                                                                   |
| [INLONG-6004](https://github.com/apache/inlong/issues/6004) | [Feature][Manager] Command tools add CRUD for inlong cluster node                                                               |
| [INLONG-6003](https://github.com/apache/inlong/issues/6003) | [Bug][Manager] The transform source node relation is incorrect under standard mode                                              |
| [INLONG-6001](https://github.com/apache/inlong/issues/6001) | [Improve][Manager] Workflow cannot be triggered when a new sink is created under a successful stream                            |
| [INLONG-6000](https://github.com/apache/inlong/issues/6000) | [Feature][Manager] Abstract Topic info to facilitate the expansion of different MQ                                              |
| [INLONG-5998](https://github.com/apache/inlong/issues/5998) | [Bug][Manager] Sub-source suffix name not consistent with the validation rule                                                   |
| [INLONG-5996](https://github.com/apache/inlong/issues/5996) | [Improve][Manager] Add a previous status field for InlongConsume                                                                |
| [INLONG-5990](https://github.com/apache/inlong/issues/5990) | [Feature][Manager] Command tools add CRUD for inlong cluster tag                                                                |
| [INLONG-5984](https://github.com/apache/inlong/issues/5984) | [Improve][Manager] Optimize the logic related to the InlongConsume process                                                      |
| [INLONG-5978](https://github.com/apache/inlong/issues/5978) | [Feature][Manager] Add protocol type in cluster nodes                                                                           |
| [INLONG-5975](https://github.com/apache/inlong/issues/5975) | [Bug][Manager] Unify transform node processing in both lightweight and standard modes                                           |
| [INLONG-5962](https://github.com/apache/inlong/issues/5962) | [Improve][Manager] Add additional parameters for the Agent cluster                                                              |
| [INLONG-5956](https://github.com/apache/inlong/issues/5956) | [Feature][Manager] Support MySQL node configuration                                                                             |
| [INLONG-5953](https://github.com/apache/inlong/issues/5953) | [Bug][Manager] DataProxy nodes are not filtered by status when necessary                                                        |
| [INLONG-5936](https://github.com/apache/inlong/issues/5936) | [Bug][Manager] Wrong return type in cluster API                                                                                 |
| [INLONG-5919](https://github.com/apache/inlong/issues/5919) | [Bug][Manager] Failed to obtain the group information of mq type kafka                                                          |
| [INLONG-5904](https://github.com/apache/inlong/issues/5904) | [Bug][Manager] Manager client and client tools missing some packages                                                            |
| [INLONG-5897](https://github.com/apache/inlong/issues/5897) | [Feature][Manager] Support query audit data by user role                                                                        |
| [INLONG-5885](https://github.com/apache/inlong/issues/5885) | [Improve][Manager] Refactor the task issue logic to simply code complexity                                                      |
| [INLONG-5881](https://github.com/apache/inlong/issues/5881) | [Improve][Manager] JDBC URL of MySQL was vulnerable to security attacks                                                         |
| [INLONG-5876](https://github.com/apache/inlong/issues/5876) | [Feature][Manager] Remove the check of data separator to support custom it                                                      |
| [INLONG-5875](https://github.com/apache/inlong/issues/5875) | [Bug][Manager] Sub source version is incorrectly copied from template entity                                                    |
| [INLONG-5863](https://github.com/apache/inlong/issues/5863) | [Feature][Manager] Extend Redis extract node                                                                                    |
| [INLONG-5849](https://github.com/apache/inlong/issues/5849) | [Bug][Manager] The inlong group ext info was not updated by the client                                                          |
| [INLONG-5846](https://github.com/apache/inlong/issues/5846) | [Bug][Manager] SQL exception to check if consumer exists                                                                        |
| [INLONG-5844](https://github.com/apache/inlong/issues/5844) | [Bug][Manager] Sub sources should be filtered when querying task status                                                         |
| [INLONG-5836](https://github.com/apache/inlong/issues/5836) | [Bug][Manager] Stream source status related behavior problem fix                                                                |
| [INLONG-5825](https://github.com/apache/inlong/issues/5825) | [Bug][Manager] SortSourceService should not limit the MQ type of group                                                          |
| [INLONG-5824](https://github.com/apache/inlong/issues/5824) | [Bug][Manager] Logging is broken due to log4j conflicts                                                                         |
| [INLONG-5820](https://github.com/apache/inlong/issues/5820) | [Bug][Manager] AutoPush source task cannot be deleted properly                                                                  |
| [INLONG-5812](https://github.com/apache/inlong/issues/5812) | [Bug][Manager] If the data groupfails to be executed after approval it cannot be executed again                                 |
| [INLONG-5810](https://github.com/apache/inlong/issues/5810) | [Feature][Manager] Supplement the workflow event API in the manager client                                                      |
| [INLONG-5799](https://github.com/apache/inlong/issues/5799) | [Bug][Manager] The stream source task is unable to be stopped/deleted/restarted                                                 |
| [INLONG-5781](https://github.com/apache/inlong/issues/5781) | [Feature][Manager] Support creating consumer groups for all sinks                                                               |
| [INLONG-5775](https://github.com/apache/inlong/issues/5775) | [Improve][Manager] Add unit tests for the Inlong Consume                                                                        |
| [INLONG-5769](https://github.com/apache/inlong/issues/5769) | [Bug][Manager] Unsupported type=FILE for SourceOperateListener                                                                  |
| [INLONG-5765](https://github.com/apache/inlong/issues/5765) | [Feature][Manager] Supplement the heartbeat API in the manager client                                                           |
| [INLONG-5756](https://github.com/apache/inlong/issues/5756) | [Improve][Manager] Change the accept condition for SortConfigListener                                                           |
| [INLONG-5752](https://github.com/apache/inlong/issues/5752) | [Improve][Manager] Change the text type to medium text to avoid saving long data failed                                         |
| [INLONG-5739](https://github.com/apache/inlong/issues/5739) | [Feature][Manager] Supplement the anno API in the manager client                                                                |
| [INLONG-5729](https://github.com/apache/inlong/issues/5729) | [Bug][Manager] Suspend the agent sources failed as the inlong group cannot be updated                                           |
| [INLONG-5726](https://github.com/apache/inlong/issues/5726) | [Improve][Manager] Remove unused DB and File source classes                                                                     |
| [INLONG-5718](https://github.com/apache/inlong/issues/5718) | [Bug][Manager][DataProxy] Fix the conflict of %m and %mask in the log4j2.xml                                                    |
| [INLONG-5705](https://github.com/apache/inlong/issues/5705) | [Bug][Manager] The PageInfo was deprecated in the pagination quey                                                               |
| [INLONG-5703](https://github.com/apache/inlong/issues/5703) | [Feature][Manager] Add separator-related fields for File/Kafka and Pulsar sources                                               |
| [INLONG-5701](https://github.com/apache/inlong/issues/5701) | [Feature][Manager][Sort] Support raw format                                                                                     |
| [INLONG-5698](https://github.com/apache/inlong/issues/5698) | [Bug][Manager] The DataProxy cluster tag was restored after restarting the manager                                              |
| [INLONG-5694](https://github.com/apache/inlong/issues/5694) | [Bug][Manager] Get the inlong group failed when the Init-Sort task execution failed                                             |
| [INLONG-5691](https://github.com/apache/inlong/issues/5691) | [Bug][Manager] Database field length is too small for agent_ip                                                                  |
| [INLONG-5689](https://github.com/apache/inlong/issues/5689) | [Feature][Manager] PulsarSource support set fieldDelimiter when use CSV format                                                  |
| [INLONG-5680](https://github.com/apache/inlong/issues/5680) | [Bug][Manager][Sort] Fix field relation object generate error cause generate union SQL throw NPE                                |
| [INLONG-5670](https://github.com/apache/inlong/issues/5670) | [Bug][Manager] Mask sensitive message in Java stack traces                                                                      |
| [INLONG-5650](https://github.com/apache/inlong/issues/5650) | [Improve][Manager] Remove the non-null check of the Pulsar adminURL                                                             |
| [INLONG-5611](https://github.com/apache/inlong/issues/5611) | [Bug][Manager] Wrong sink status after updating the sink info when the inlong group was not submitted                           |
| [INLONG-5302](https://github.com/apache/inlong/issues/5302) | [Feature][Manager] Supports the extension of data consumption for different MQs                                                 |
| [INLONG-5290](https://github.com/apache/inlong/issues/5290) | [Improve][Manager] Optimize the objects returned by paging queries                                                              |
| [INLONG-5102](https://github.com/apache/inlong/issues/5102) | [Feature][Manager] Support CRUD for inlong cluster                                                                              |
| [INLONG-5049](https://github.com/apache/inlong/issues/5049) | [Feature][Manager] Improve user management                                                                                      |
| [INLONG-5043](https://github.com/apache/inlong/issues/5043) | [Feature][Manager] Add Apache Doris load node management                                                                        |
| [INLONG-4976](https://github.com/apache/inlong/issues/4976) | [Feature][Manager] Support Kafka                                                                                                |
| [INLONG-1959](https://github.com/apache/inlong/issues/1959) | [Feature][Manager][DataProxy] Support register DataProxy IP to the Manager automatically                                        |
| [INLONG-5776](https://github.com/apache/inlong/issues/5776) | [Improve][Manager] Add tenant param for Pulsar info                                                                             |
| [INLONG-5024](https://github.com/apache/inlong/issues/5024) | [Bug][Manager] The error message is not right when deleting a successful inlong group                                           |

### Sort
| ISSUE                                                       | Summary                                                                                                        |
|:------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------|
| [INLONG-6402](https://github.com/apache/inlong/issues/6402) | [Improve][Sort] Modify the metadata field of Oracle connector                                                  |
| [INLONG-6401](https://github.com/apache/inlong/issues/6401) | [Bug][Sort] Schema update is stuck in an endless loop and causes stack overflow in multiple sink scenes        |
| [INLONG-6382](https://github.com/apache/inlong/issues/6382) | [Bug][Sort] Iceberg data is messed up when the source table has no primary key in multiple sink scenes         |
| [INLONG-6379](https://github.com/apache/inlong/issues/6379) | [Bug][Sort] Iceberg misses metric data in multiple sink scenes                                                 |
| [INLONG-6373](https://github.com/apache/inlong/issues/6373) | [Bug][Sort] The time value is wrong when the data type is datetime and timestamp                               |
| [INLONG-6370](https://github.com/apache/inlong/issues/6370) | [Bug][Sort] The debezium format supported by all-db-migration should be 'u' or 'update'                        |
| [INLONG-6356](https://github.com/apache/inlong/issues/6356) | [Bug][Sort] Verify all field types for Oracle connector                                                        |
| [INLONG-6353](https://github.com/apache/inlong/issues/6353) | [Bug][Sort] Fix delete event handle error for doris connector                                                  |
| [INLONG-6345](https://github.com/apache/inlong/issues/6345) | [Bug][Sort] Add metrics for Doris connector                                                                    |
| [INLONG-6335](https://github.com/apache/inlong/issues/6335) | [Bug][Sort] MySql all migrate not support blob and binary data                                                 |
| [INLONG-6326](https://github.com/apache/inlong/issues/6326) | [Improve][Sort] Incorrect log type in the all migrate converter                                                |
| [INLONG-6322](https://github.com/apache/inlong/issues/6322) | [Bug][Sort] Fix write data incorrect for doris connector with  sink multiple scenario                          |
| [INLONG-6318](https://github.com/apache/inlong/issues/6318) | [Improve][Sort] MySQL connector supports snapshots and restores the metric state                               |
| [INLONG-6311](https://github.com/apache/inlong/issues/6311) | [Bug][Sort] Missing fields error for the old Canal JSON data in multiple sink scenes                           |
| [INLONG-6307](https://github.com/apache/inlong/issues/6307) | [Improve][Sort] Add whether to ignore single-table error policy processing for multiple sink of DorisLoadNode  |
| [INLONG-6301](https://github.com/apache/inlong/issues/6301) | [Bug][Sort] Add metrics and strategies for the Doris connector                                                 |
| [INLONG-6296](https://github.com/apache/inlong/issues/6296) | [Improve][Sort] Split one record to multiple records when the physical data has more records for KafkaLoadNode |
| [INLONG-6283](https://github.com/apache/inlong/issues/6283) | [Bug][Sort] JAR conflict between sort-dist and sort-connector                                                  |
| [INLONG-6274](https://github.com/apache/inlong/issues/6274) | [Feature][Sort] Support multiple sink for IcebergLoadNode                                                      |
| [INLONG-6271](https://github.com/apache/inlong/issues/6271) | [Bug][Sort] Unhandled update_before data in canal json in multiple sink scene                                  |
| [INLONG-6256](https://github.com/apache/inlong/issues/6256) | [Feature][Sort] Support  debezium-json format with schema parse for DebeziumJsonDynamicSchemaFormat            |
| [INLONG-6250](https://github.com/apache/inlong/issues/6250) | [Bug][Sort] MySQL -> Iceberg exception when data is timestamp                                                  |
| [INLONG-6246](https://github.com/apache/inlong/issues/6246) | [Feature][Sort] Import multiple sink option  and schema update handle policy                                   |
| [INLONG-6243](https://github.com/apache/inlong/issues/6243) | [Feature][Sort] Support custom name for Sort job                                                               |
| [INLONG-6214](https://github.com/apache/inlong/issues/6214) | [Feature][Sort]  Import schema and data parsing ability for DynamicSchemaFormat                                |
| [INLONG-6212](https://github.com/apache/inlong/issues/6212) | [Feature][Sort] Support multiple sink for DorisLoadNode                                                        |
| [INLONG-6174](https://github.com/apache/inlong/issues/6174) | [Feature][Sort] MySQL connector support meta data with debezium format                                         |
| [INLONG-6166](https://github.com/apache/inlong/issues/6166) | [Bug][Sort] Fix can not get pkNames  metadata for MySqlExtractNode                                             |
| [INLONG-6160](https://github.com/apache/inlong/issues/6160) | [Feature][Sort] Support dynamic partition for KafkaLoadNode                                                    |
| [INLONG-6152](https://github.com/apache/inlong/issues/6152) | [Feature][Sort] MySQL connector support filtering kinds of row data                                            |
| [INLONG-6149](https://github.com/apache/inlong/issues/6149) | [Bug][Sort] Iceberg delete key cause ArrayIndexOutOfBoundsException                                            |
| [INLONG-6116](https://github.com/apache/inlong/issues/6116) | [Feature][Sort] Support dynamic topic for KafkaLoadNode                                                        |
| [INLONG-6113](https://github.com/apache/inlong/issues/6113) | [Feature][Sort] Mysql cdc connector support read table schema when using debezium function                     |
| [INLONG-6089](https://github.com/apache/inlong/issues/6089) | [Feature][Manager][Sort] Kafka extract node supports raw format and timestamp scan mode                        |
| [INLONG-6088](https://github.com/apache/inlong/issues/6088) | [Improve][Sort][Manager] Scan mode support timestamp for Kafka extract node                                    |
| [INLONG-6078](https://github.com/apache/inlong/issues/6078) | [Improve][Manager][Sort] Add VarBinary data type and extend binary for supporting length                       |
| [INLONG-6045](https://github.com/apache/inlong/issues/6045) | [Feature][Sort] Support all migrate for Oracle connector                                                       |
| [INLONG-6027](https://github.com/apache/inlong/issues/6027) | [Bug][Sort] Dlc did not restore metric data successfully                                                       |
| [INLONG-6016](https://github.com/apache/inlong/issues/6016) | [Bug][Sort] Serialization failed when submit load DLC sort job                                                 |
| [INLONG-5992](https://github.com/apache/inlong/issues/5992) | [Bug][Sort] Fix runtimeContext  not initialized in JDBC and ES when reload metric status                       |
| [INLONG-5971](https://github.com/apache/inlong/issues/5971) | [Feature][Sort] Support metrics state restore for dlc-iceberg connector                                        |
| [INLONG-5970](https://github.com/apache/inlong/issues/5970) | [Feature][Sort] Support metrics state restore for iceberg connector                                            |
| [INLONG-5969](https://github.com/apache/inlong/issues/5969) | [Feature][Sort] Support metrics state restore for hive connector                                               |
| [INLONG-5959](https://github.com/apache/inlong/issues/5959) | [Feature][Sort] Support metric state recovery for filesystem                                                   |
| [INLONG-5955](https://github.com/apache/inlong/issues/5955) | [Feature][Sort] Support metric state recovery for HBase                                                        |
| [INLONG-5952](https://github.com/apache/inlong/issues/5952) | [Feature][Sort] Support metrics state restore for Pulsar connector without adminurl                            |
| [INLONG-5950](https://github.com/apache/inlong/issues/5950) | [Feature][Sort] Support metric state recovery for mongodb-cdc                                                  |
| [INLONG-5944](https://github.com/apache/inlong/issues/5944) | [Improve][Sort] Add metric state for es6 and es7                                                               |
| [INLONG-5943](https://github.com/apache/inlong/issues/5943) | [Improve][Sort] Add metric state for JDBC                                                                      |
| [INLONG-5940](https://github.com/apache/inlong/issues/5940) | [Improve][Sort] Compatible with the old version of sort protocol with mysql and kafka extract node             |
| [INLONG-5933](https://github.com/apache/inlong/issues/5933) | [Feature][Sort] Support metric state recovery for mongodb-cdc                                                  |
| [INLONG-5930](https://github.com/apache/inlong/issues/5930) | [Feature][Sort] Support metric state recovery for sqlserver-cdc                                                |
| [INLONG-5922](https://github.com/apache/inlong/issues/5922) | [Improve][Sort] Add metric state for Kafka and modify mysql metric init                                        |
| [INLONG-5913](https://github.com/apache/inlong/issues/5913) | [Improve][Sort] Add metric state for Oracle                                                                    |
| [INLONG-5903](https://github.com/apache/inlong/issues/5903) | [Improve][Sort] Make InLong metric constructs factory more cohesive                                            |
| [INLONG-5889](https://github.com/apache/inlong/issues/5889) | [Bug][Sort] Fix MySQL node JDBC for RCE vulnerability                                                          |
| [INLONG-5822](https://github.com/apache/inlong/issues/5822) | [Bug][Sort] The metric is empty for Elasticsearch                                                              |
| [INLONG-5818](https://github.com/apache/inlong/issues/5818) | [Bug][Sort] Wrong metric computing for Pulsar connector                                                        |
| [INLONG-5784](https://github.com/apache/inlong/issues/5784) | [Improve][Sort] Add metric state for PostgreSQL                                                                |
| [INLONG-5767](https://github.com/apache/inlong/issues/5767) | [Improve][Sort] IOUtils interface is incompatible in jdk17                                                     |
| [INLONG-5762](https://github.com/apache/inlong/issues/5762) | [Bug][Sort] The computing of Pulsar source metric was wrong                                                    |
| [INLONG-5754](https://github.com/apache/inlong/issues/5754) | [Bug][Sort] Fix Pulsar connecotr deserialize complex format with multiple data will cause data loss            |
| [INLONG-5746](https://github.com/apache/inlong/issues/5746) | [Feature][Sort] Add SPI path for Inlong PB msg                                                                 |
| [INLONG-5737](https://github.com/apache/inlong/issues/5737) | [Bug][Sort] InLongMsg with inner format raw deserialize will throw NullPointException                          |
| [INLONG-5733](https://github.com/apache/inlong/issues/5733) | [Bug][Sort] Slf4j class conflict in Hive connector                                                             |
| [INLONG-5712](https://github.com/apache/inlong/issues/5712) | [Bug][Sort] Fix class not found in Elasticsearch 6 connector for producting                                    |
| [INLONG-5701](https://github.com/apache/inlong/issues/5701) | [Feature][Manager][Sort] Support raw format                                                                    |
| [INLONG-5680](https://github.com/apache/inlong/issues/5680) | [Bug][Manager][Sort] Fix field relation object generate error cause generate union SQL throw NPE               |
| [INLONG-5637](https://github.com/apache/inlong/issues/5637) | [Bug][Sort] Fix kafka  load node npe error                                                                     |
| [INLONG-5613](https://github.com/apache/inlong/issues/5613) | [Feature][Sort] Add interval join support for FlinkSqlParser                                                   |
| [INLONG-5608](https://github.com/apache/inlong/issues/5608) | [Improve][Sort] Reformat connector codes for reporting metrics                                                 |
| [INLONG-5599](https://github.com/apache/inlong/issues/5599) | [Feature][Sort] Add temporal join support for mysql                                                            |
| [INLONG-5469](https://github.com/apache/inlong/issues/5469) | [Feature][Sort] Add metric for Hive with Flink metrics group and audit SDK                                     |
| [INLONG-5193](https://github.com/apache/inlong/issues/5193) | [Feature][Sort] Dlc load data support auto compact file                                                        |

### Audit
| ISSUE                                                       | Summary                                                                              |
|:------------------------------------------------------------|:-------------------------------------------------------------------------------------|
| [INLONG-6309](https://github.com/apache/inlong/issues/6309) | [Bug][Audit] Druid connection pool still init when the store mode is not MySQL       |
| [INLONG-6289](https://github.com/apache/inlong/issues/6289) | [Feature][Docker][Audit] Add configuration to choose starting proxy or store or both |
| [INLONG-6069](https://github.com/apache/inlong/issues/6069) | [Bug][Audit] Not initialized the service before ClickHouse starts                    |
| [INLONG-6031](https://github.com/apache/inlong/issues/6031) | [Improve][Audit] Clean code for InLong Audit                                         |
| [INLONG-6026](https://github.com/apache/inlong/issues/6026) | [Bug][Audit] SQL file executed error for ClickHouse in Audit                         |
| [INLONG-6024](https://github.com/apache/inlong/issues/6024) | [Bug][Audit] Invalid default value for 'sdk_ts'                                      |
| [INLONG-5963](https://github.com/apache/inlong/issues/5963) | [Bug][Audit] Solve the sdk memory leak problem                                       |
| [INLONG-5772](https://github.com/apache/inlong/issues/5772) | [Improve][Audit] The config is missing the comment on ClickHoue option               |
| [INLONG-5710](https://github.com/apache/inlong/issues/5710) | [Bug][Audit] The clickhouse storage service is not initialized properly              |

### Dashboard
| ISSUE                                                       | Summary                                                                              |
|:------------------------------------------------------------|:-------------------------------------------------------------------------------------|
| [INLONG-6397](https://github.com/apache/inlong/issues/6397) | [Feature][Dashboard] Support management for MySQL data node                          |
| [INLONG-6391](https://github.com/apache/inlong/issues/6391) | [Feature][Dashboard] Supports deep merge of field decorator                          |
| [INLONG-6375](https://github.com/apache/inlong/issues/6375) | [Feature][Dashboard] Cluster supports new Kafka type                                 |
| [INLONG-6365](https://github.com/apache/inlong/issues/6365) | [Improve][Dashboard] Modify the options of the data type and modify some file names  |
| [INLONG-6363](https://github.com/apache/inlong/issues/6363) | [Feature][Dashboard] InLong Group supports Kafka MQ                                  |
| [INLONG-6359](https://github.com/apache/inlong/issues/6359) | [Improve][Dashboard] The utils method adds null data compatibility                   |
| [INLONG-6330](https://github.com/apache/inlong/issues/6330) | [Improve][Dashboard] Other sinks support asynchronous loading of plugins             |
| [INLONG-6315](https://github.com/apache/inlong/issues/6315) | [Feature][Dashboard] Support Doris sink                                              |
| [INLONG-6273](https://github.com/apache/inlong/issues/6273) | [Umbrella][Dashboard] Ability to load plugins asynchronously                         |
| [INLONG-6185](https://github.com/apache/inlong/issues/6185) | [Bug][Dashboard] The suffix configuration function will only be executed once        |
| [INLONG-6163](https://github.com/apache/inlong/issues/6163) | [Bug][Dashboard] Form will lose old data when data changes are merged                |
| [INLONG-5986](https://github.com/apache/inlong/issues/5986) | [Improve][Dashboard] Support fieldType field to set length                           |
| [INLONG-5938](https://github.com/apache/inlong/issues/5938) | [Bug][Dashboard] The API parameter of calling to get the topic is lost               |
| [INLONG-5931](https://github.com/apache/inlong/issues/5931) | [Improve][Dashboard] Support query audit data by user role                           |
| [INLONG-5926](https://github.com/apache/inlong/issues/5926) | [Improve][Dashboard] Change the consume related config to adapt the Manager module   |
| [INLONG-5911](https://github.com/apache/inlong/issues/5911) | [Improve][Dashboard] Modify the data group name to the data stream group             |
| [INLONG-5901](https://github.com/apache/inlong/issues/5901) | [Improve][Dashboard] Unified sinks type definition                                   |
| [INLONG-5832](https://github.com/apache/inlong/issues/5832) | [Improve][Dashboard] Unified sources type definition                                 |
| [INLONG-5814](https://github.com/apache/inlong/issues/5814) | [Bug][Dashboard] Supports setting the precision of a field when adding a table field |
| [INLONG-5798](https://github.com/apache/inlong/issues/5798) | [Improve][Dashboard] Support stream fields extends                                   |
| [INLONG-5761](https://github.com/apache/inlong/issues/5761) | [Feature][Dashboard] Add agent type to cluster management                            |
| [INLONG-5749](https://github.com/apache/inlong/issues/5749) | [Bug][Dashboard] Bad node public params                                              |
| [INLONG-5735](https://github.com/apache/inlong/issues/5735) | [Improve][Dashboard] Optimize the development environment and enable vite            |
| [INLONG-5731](https://github.com/apache/inlong/issues/5731) | [Feature][Dashboard] Add data node management                                        |
| [INLONG-5696](https://github.com/apache/inlong/issues/5696) | [Bug][Dashboard] EditableTable value update error when columns change                |
| [INLONG-5122](https://github.com/apache/inlong/issues/5122) | [Bug][Dashboard] The whitelist input format of binlog source need to be optimized    |

### Other
| ISSUE                                                       | Summary                                                                                                                |
|:------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------|
| [INLONG-6190](https://github.com/apache/inlong/issues/6190) | [Improve][SDK] Add protocolType field in DataProxy config                                                              |
| [INLONG-6182](https://github.com/apache/inlong/issues/6182) | [Bug][SDK] RequestTimeoutMillis initialization value error                                                             |
| [INLONG-6119](https://github.com/apache/inlong/issues/6119) | [Improve][SDK] Avoid printing a lot of useless logs                                                                    |
| [INLONG-5808](https://github.com/apache/inlong/issues/5808) | [Feature][SDK] SortSdk support InlongMsg                                                                               |
| [INLONG-5796](https://github.com/apache/inlong/issues/5796) | [Improve][SDK] Optimize fetcher builders                                                                               |
| [INLONG-5665](https://github.com/apache/inlong/issues/5665) | [Improve][SDK] Invoke callback in each MQ message                                                                      |
| [INLONG-5642](https://github.com/apache/inlong/issues/5642) | [Improve][SDK] Change SDK(cpp) logger framework                                                                        |
| [INLONG-5623](https://github.com/apache/inlong/issues/5623) | [Feature][SDK] Support multi-topic fetcher for Kafka                                                                   |
| [INLONG-5621](https://github.com/apache/inlong/issues/5621) | [Feature][SDK] Support multi-topic fetcher for Pulsar                                                                  |
| [INLONG-5495](https://github.com/apache/inlong/issues/5495) | [Feature][SDK] Support multi-topic manager                                                                             |
| [INLONG-5437](https://github.com/apache/inlong/issues/5437) | [Feature][SDK] Support initializing SDK(cpp) by ClientConfig object                                                    |
| [INLONG-6389](https://github.com/apache/inlong/issues/6389) | [Bug][Docker] Configuration file name is different with MQ_TYPE                                                        |
| [INLONG-6341](https://github.com/apache/inlong/issues/6341) | [Improve][Docker] Update the default cluster name for Agent                                                            |
| [INLONG-6339](https://github.com/apache/inlong/issues/6339) | [Improve][Docker] Add a global variable to define the InLong version                                                   |
| [INLONG-6289](https://github.com/apache/inlong/issues/6289) | [Feature][Docker][Audit] Add configuration to choose starting proxy or store or both                                   |
| [INLONG-6280](https://github.com/apache/inlong/issues/6280) | [Feature][Docker] Add tools for dashboard image                                                                        |
| [INLONG-6241](https://github.com/apache/inlong/issues/6241) | [Feature][Docker] Add manager and audit database name configuration                                                    |
| [INLONG-6169](https://github.com/apache/inlong/issues/6169) | [Improve][Docker] Make the topic and address configurable for the audit store                                          |
| [INLONG-6140](https://github.com/apache/inlong/issues/6140) | [Bug][Docker] Docker compose yml config type error                                                                     |
| [INLONG-5890](https://github.com/apache/inlong/issues/5890) | [Bug][Docker] Can not connect the MySQL deployed by Docker                                                             |
| [INLONG-5870](https://github.com/apache/inlong/issues/5870) | [Bug][Docker] Build arm images failed                                                                                  |
| [INLONG-5816](https://github.com/apache/inlong/issues/5816) | [Bug][Docker] CI build images lost aarch64 arch                                                                        |
| [INLONG-5652](https://github.com/apache/inlong/issues/5652) | [Bug][Docker] Push aarch64 images failed                                                                               |
| [INLONG-6291](https://github.com/apache/inlong/issues/6291) | [Improve][CVE] Denial of Service (DoS) risks of the org.ini4j                                                          |
| [INLONG-6263](https://github.com/apache/inlong/issues/6263) | [Improve][CVE] Upgrade com.google.guava to 30.0-jre                                                                    |
| [INLONG-6236](https://github.com/apache/inlong/issues/6236) | [Improve][CVE] Resource exhaustion can occur because of a lack of a check in primitive value for jackson-databind      |
| [INLONG-6231](https://github.com/apache/inlong/issues/6231) | [Improve][CVE] There are 1 security vulnerabilities found in org.apache.hive:hive-exec 3.1.2                           |
| [INLONG-5789](https://github.com/apache/inlong/issues/5789) | [Improve][CVE] Apache Hadoop argument injection vulnerability                                                          |
| [INLONG-5786](https://github.com/apache/inlong/issues/5786) | [Improve][CVE] PostgreSQL JDBC Driver SQL Injection in ResultSet.refreshRow() with malicious column names              |
| [INLONG-5647](https://github.com/apache/inlong/issues/5647) | [Bug][CVE] There is a vulnerability in Jetty 9.4.44.v20210927: Java based HTTP/1.x HTTP/2 / Servlet / WebSocket Server |
| [INLONG-5645](https://github.com/apache/inlong/issues/5645) | [Bug][CVE] There is a vulnerability in pagehelper  5.3.0                                                               |
| [INLONG-6082](https://github.com/apache/inlong/issues/6082) | [Bug][CI] The greeting action runs failed                                                                              |
| [INLONG-5724](https://github.com/apache/inlong/issues/5724) | [Improve][CI] Skip the apache-rat-plugin when building the docker-compose                                              |