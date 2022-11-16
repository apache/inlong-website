---
title: InLong v1.3.0
---

Use the links below to download the Apache InLong from one of our mirrors.

## 1.3.0 release

|          Name          | Version |     Date     |                                                                                                                                                                    Downloads                                                                                                                                                                    |
|:----------------------:|:-------:|:------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|   InLong Source Code   |  1.3.0  | Sep 11, 2022 |                   [[SRC](https://archive.apache.org/dist/inlong/1.3.0/apache-inlong-1.3.0-src.tar.gz)]                [[ASC](https://archive.apache.org/dist/inlong/1.3.0/apache-inlong-1.3.0-src.tar.gz.asc)]                [[SHA512](https://archive.apache.org/dist/inlong/1.3.0/apache-inlong-1.3.0-src.tar.gz.sha512)]                    |
|   InLong Binary file   |  1.3.0  | Sep 11, 2022 |                   [[BIN](https://archive.apache.org/dist/inlong/1.3.0/apache-inlong-1.3.0-bin.tar.gz)]                [[ASC](https://archive.apache.org/dist/inlong/1.3.0/apache-inlong-1.3.0-bin.tar.gz.asc)]                [[SHA512](https://archive.apache.org/dist/inlong/1.3.0/apache-inlong-1.3.0-bin.tar.gz.sha512)]                    |
| Connector Binary file  |  1.3.0  | Sep 11, 2022 | [[BIN](https://archive.apache.org/dist/inlong/1.3.0/apache-inlong-1.3.0-sort-connectors.tar.gz)]                 [[ASC](https://archive.apache.org/dist/inlong/1.3.0/apache-inlong-1.3.0-sort-connectors.tar.gz.asc)]                [[SHA512](https://archive.apache.org/dist/inlong/1.3.0/apache-inlong-1.3.0-sort-connectors.tar.gz.sha512)] |

### Release Integrity

You must [verify](https://www.apache.org/info/verification.html) the integrity of the downloaded files.
We provide OpenPGP signatures for every release file. This signature should be matched against the [KEYS](https://downloads.apache.org/inlong/KEYS) file which contains the OpenPGP keys of InLong's Release Managers.
We also provide <code>SHA-512</code> checksums for every release file. After you download the file, you should calculate a checksum for your download, and make sure it is the same as ours.

## Release Notes

### Agent
| ISSUE                                                       | Summary                                                                                   |
|:------------------------------------------------------------|:------------------------------------------------------------------------------------------|
| [INLONG-5540](https://github.com/apache/inlong/issues/5540) | [Bug][Agent] MySQL binlog reader has NPE error                                            |
| [INLONG-5533](https://github.com/apache/inlong/issues/5533) | [Improve][Agent] Support structured output in the Kubernetes                              |
| [INLONG-5474](https://github.com/apache/inlong/issues/5474) | [Improve][Manager][Agent] Add metadata  parameter                                         |
| [INLONG-5466](https://github.com/apache/inlong/issues/5466) | [Improve][Agent] Add Manager Open API  secret config                                      |
| [INLONG-5428](https://github.com/apache/inlong/issues/5428) | [Improve][Agent] Abstract metrics interface to be easier to extend                        |
| [INLONG-5382](https://github.com/apache/inlong/issues/5382) | [Improve][Manager][Agent] Optimized the file collection configuration                     |
| [INLONG-5362](https://github.com/apache/inlong/issues/5362) | [Feature][Agent] Supports the collection of data splicing metadata information            |
| [INLONG-5347](https://github.com/apache/inlong/issues/5347) | [Feature][Agent] Incremental and full reads of file contents                              |
| [INLONG-5277](https://github.com/apache/inlong/issues/5277) | [Bug][Agent] The getManagerIpList request method should change to POST                    |
| [INLONG-5272](https://github.com/apache/inlong/issues/5272) | [Improve][Agent] Change agent.sh format                                                   |
| [INLONG-5224](https://github.com/apache/inlong/issues/5224) | [Improve][Agent][DataProxy] Remove unused StreamConfigLog related classes                 |
| [INLONG-5222](https://github.com/apache/inlong/issues/5222) | [Improve][Manager][Agent][DataProxy] Add heartbeat mechanism for Inlong component cluster |
| [INLONG-5164](https://github.com/apache/inlong/issues/5164) | [Bug][Agent] The agent receive count is zero but the send count not                       |
| [INLONG-5149](https://github.com/apache/inlong/issues/5149) | [Bug][Agent][DataProxy] The log directory for the unit test was incorrect                 |
| [INLONG-5054](https://github.com/apache/inlong/issues/5054) | [Bug][Agent] Agent can not import old job after reboot                                    |
| [INLONG-5046](https://github.com/apache/inlong/issues/5046) | [Feature][Agent] Support collect data from PostgreSQL                                     |
| [INLONG-4824](https://github.com/apache/inlong/issues/4824) | [Improve][Agent] Log output has no line numbers                                           |
| [INLONG-4821](https://github.com/apache/inlong/issues/4821) | [Bug][Agent] The error of null value for key job.instance.id                              |
| [INLONG-4535](https://github.com/apache/inlong/issues/4535) | [Feature][Agent] Support configurable automatic exit function when OOM happens            |
| [INLONG-4233](https://github.com/apache/inlong/issues/4233) | [Feature][Umbrella] Support collect data from a specified position for MySQL binlog       |
| [INLONG-4232](https://github.com/apache/inlong/issues/4232) | [Feature][Agent][Manager] Support collect data from a specified position for MySQL binlog |
| [INLONG-3407](https://github.com/apache/inlong/issues/3407) | [Feature] Make sure job send all messages before it stops                                 |
| [INLONG-3266](https://github.com/apache/inlong/issues/3266) | [Improve][Agent] Get local IP when IP in config is not present                            |
| [INLONG-5601](https://github.com/apache/inlong/issues/5601) | [Improve][Agent] The default triggering policy for file collection is FULL                |
| [INLONG-5259](https://github.com/apache/inlong/issues/5259) | [Feature][Agent] File data sources support custom end-of-line symbols                     |
| [INLONG-5393](https://github.com/apache/inlong/issues/5393) | [Bug][Agent] Docker image of agent stuck in starting                                      |
| [INLONG-5000](https://github.com/apache/inlong/issues/5000) | [Bug][Agent] The forked VM terminated without properly saying goodbye                     |
| [INLONG-4998](https://github.com/apache/inlong/issues/4998) | [Bug][Agent] Create PrometheusMetric repeatedly                                           |
| [INLONG-4854](https://github.com/apache/inlong/issues/4854) | [Improve][Agent] Report metrics at inongGroupId and inlongStreamId                        |
| [INLONG-5589](https://github.com/apache/inlong/issues/5589) | [Improve][Agent] To extend type of file data for k8s log                                  |


### Audit
| ISSUE                                                       | Summary                                                             |
|:------------------------------------------------------------|:--------------------------------------------------------------------|
| [INLONG-4983](https://github.com/apache/inlong/issues/4983) | [Bug][Audit] Unable to start audit proxy using proxy-start.sh       |
| [INLONG-4921](https://github.com/apache/inlong/issues/4921) | [Improve][Audit] Set the configuration file to an absolute path     |
| [INLONG-4579](https://github.com/apache/inlong/issues/4579) | [Feature][Audit] Delete redundant configuration in channel and sink |
| [INLONG-4559](https://github.com/apache/inlong/issues/4559) | [Feature][Audit] Support select channels by random routing          |
| [INLONG-4919](https://github.com/apache/inlong/issues/4919) | [Bug][Audit] Delete the wrong driver-class-name                     |
| [INLONG-4741](https://github.com/apache/inlong/issues/4741) | [Feature][Audit] AuditStore support ClickHouse sink                 |
| [INLONG-5402](https://github.com/apache/inlong/issues/5402) | [Bug][Audit] store-start.sh startup script exception                |


### Dashboard
| ISSUE                                                       | Summary                                                                                         |
|:------------------------------------------------------------|:------------------------------------------------------------------------------------------------|
| [INLONG-5596](https://github.com/apache/inlong/issues/5596) | [Improve][Dashboard] Support locales extends                                                    |
| [INLONG-5592](https://github.com/apache/inlong/issues/5592) | [Improve][Dashboard] HighSelect support addonAfter prop                                         |
| [INLONG-5574](https://github.com/apache/inlong/issues/5574) | [Improve][Dashboard] Support extended consumption fields                                        |
| [INLONG-5565](https://github.com/apache/inlong/issues/5565) | [Improve][Dashboard] Support extended group fields                                              |
| [INLONG-5523](https://github.com/apache/inlong/issues/5523) | [Improve][Dashboard] Support menu permission control                                            |
| [INLONG-5522](https://github.com/apache/inlong/issues/5522) | [Improve][Dashboard] Disable editing of user roles and names                                    |
| [INLONG-5520](https://github.com/apache/inlong/issues/5520) | [Improve][Dashboard] Move cluster config to metas                                               |
| [INLONG-5508](https://github.com/apache/inlong/issues/5508) | [Improve][Dashboard] Adaptive naming conventions                                                |
| [INLONG-5479](https://github.com/apache/inlong/issues/5479) | [Improve][Dashboard] Optimize the group configuration process and use meta management           |
| [INLONG-5456](https://github.com/apache/inlong/issues/5456) | [Improve][Dashboard] Support source/sink metadata management                                    |
| [INLONG-5391](https://github.com/apache/inlong/issues/5391) | [Improve][Dashboard] Unified consumption creation/management logic                              |
| [INLONG-5355](https://github.com/apache/inlong/issues/5355) | [Bug][Dashboard] SinkType config error                                                          |
| [INLONG-5345](https://github.com/apache/inlong/issues/5345) | [Improve][Dashboard] Group approval supports partial field modification                         |
| [INLONG-5340](https://github.com/apache/inlong/issues/5340) | [Bug][Dashboard] 404 error is reported when accessing the dashboard container                   |
| [INLONG-5330](https://github.com/apache/inlong/issues/5330) | [Improve][Dashboard] Stream page optimization adjustment, remove collapse mode                  |
| [INLONG-5319](https://github.com/apache/inlong/issues/5319) | [Bug][Dashboard] An error occurred while creating the  dataproxy cluster                        |
| [INLONG-5234](https://github.com/apache/inlong/issues/5234) | [Bug][Dashboard] Some fields are missing when creating a new stream                             |
| [INLONG-5213](https://github.com/apache/inlong/issues/5213) | [Improve][Dashboard] Adapt to the new data structure of the stream list API                     |
| [INLONG-5142](https://github.com/apache/inlong/issues/5142) | [Improve][Dashboard] Change API paths and parameters to adapt the Manager module                |
| [INLONG-5120](https://github.com/apache/inlong/issues/5120) | [Feature][Dashboard] The list page of stream, source and sink supports status filtering         |
| [INLONG-5082](https://github.com/apache/inlong/issues/5082) | [Bug][Dashboard] Elasticsearch fields cannot be saved                                           |
| [INLONG-5077](https://github.com/apache/inlong/issues/5077) | [Bug][Dashboard] Cannot read properties of undefined (reading 'version')                        |
| [INLONG-5076](https://github.com/apache/inlong/issues/5076) | [Feature][Dashboard] Support  HBase sink                                                        |
| [INLONG-5059](https://github.com/apache/inlong/issues/5059) | [Bug][Dashboard] Unable to get total number                                                     |
| [INLONG-5056](https://github.com/apache/inlong/issues/5056) | [Bug][Dashboard] Unable to get stream list when creating                                        |
| [INLONG-5004](https://github.com/apache/inlong/issues/5004) | [Feature][Dashboard] Support PostgreSQL sink                                                    |
| [INLONG-4997](https://github.com/apache/inlong/issues/4997) | [Improve][Dashboard] Support cluster tag bind and unbind                                        |
| [INLONG-4989](https://github.com/apache/inlong/issues/4989) | [Improve][Dashboard] Modify MySQL sink parameters                                               |
| [INLONG-4953](https://github.com/apache/inlong/issues/4953) | [Improve][Dashboard] Modify Greenplum sink parameters                                           |
| [INLONG-4906](https://github.com/apache/inlong/issues/4906) | [Feature][Dashboard] Support Oracle sink                                                        |
| [INLONG-4902](https://github.com/apache/inlong/issues/4902) | [Improve][Dashboard] Supports audit queries with different time precisions                      |
| [INLONG-4888](https://github.com/apache/inlong/issues/4888) | [Feature][Dashboard] Support MySQL sink                                                         |
| [INLONG-4885](https://github.com/apache/inlong/issues/4885) | [Feature][Dashboard] Support Greenplum Sink                                                     |
| [INLONG-4876](https://github.com/apache/inlong/issues/4876) | [Improve][Dashboard] Added prompt information on tag modification and deletion                  |
| [INLONG-4857](https://github.com/apache/inlong/issues/4857) | [Bug][Dashboard] Unable to get stream information                                               |
| [INLONG-4850](https://github.com/apache/inlong/issues/4850) | [Improve][Dashboard] Add prompt information for some fields in cluster management               |
| [INLONG-4845](https://github.com/apache/inlong/issues/4845) | [Improve][Dashboard] Update the Tube configuration form                                         |
| [INLONG-4809](https://github.com/apache/inlong/issues/4809) | [Improve][Dashboard] Remove and optimize some old logic                                         |
| [INLONG-4752](https://github.com/apache/inlong/issues/4752) | [Bug][Dashboard] Keyword param error                                                            |
| [INLONG-4739](https://github.com/apache/inlong/issues/4739) | [Bug][Dashboard] The pagination of the execution log of the group is invalid                    |
| [INLONG-4668](https://github.com/apache/inlong/issues/4668) | [Feature][Dashboard] Support the config management of the Elasticsearch sink                    |
| [INLONG-5406](https://github.com/apache/inlong/issues/5406) | [Bug][Dashboard] No restrictions are added to the input of port numbers, such as dataproxy node |
| [INLONG-5349](https://github.com/apache/inlong/issues/5349) | [Bug][Dashboard] Failed to create stream                                                        |
| [INLONG-5035](https://github.com/apache/inlong/issues/5035) | [Improve][Dashboard] Support version control for backend APIs                                   |
| [INLONG-4865](https://github.com/apache/inlong/issues/4865) | [Bug][Dashboard] The storage config can still be modified after submitting for approval         |
| [INLONG-4820](https://github.com/apache/inlong/issues/4820) | [Feature][Dashboard] Support cluster tag manage                                                 |


### DataProxy
| ISSUE                                                       | Summary                                                                                            |
|:------------------------------------------------------------|:---------------------------------------------------------------------------------------------------|
| [INLONG-5551](https://github.com/apache/inlong/issues/5551) | [Improve][DataProxy] Add metric log output information in TubeSink                                 |
| [INLONG-5538](https://github.com/apache/inlong/issues/5538) | [Improve][DataProxy] Optimize the Producer construction logic in TubeSink                          |
| [INLONG-5489](https://github.com/apache/inlong/issues/5489) | [Improve][DataProxy] Optimize message deduplication logic                                          |
| [INLONG-5433](https://github.com/apache/inlong/issues/5433) | [Improve][DataProxy] Select the corresponding configuration parameters according to the type of MQ |
| [INLONG-5238](https://github.com/apache/inlong/issues/5238) | [Bug][DataProxy] Error metric params in PulsarZoneSinkContext::addSendFailMetric                   |
| [INLONG-5192](https://github.com/apache/inlong/issues/5192) | [Improve][DataProxy] Added unit tests for the TubeMQ sink                                          |
| [INLONG-5163](https://github.com/apache/inlong/issues/5163) | [Bug][DataProxy] Dataproxy can not send data to pulsar as topic NotFoundException                  |
| [INLONG-5161](https://github.com/apache/inlong/issues/5161) | [Improve][SDK] Remove the redundant annotation for the author                                      |
| [INLONG-5055](https://github.com/apache/inlong/issues/5055) | [Bug][DataProxy] Data send failed due to Pulsar client error                                       |
| [INLONG-4816](https://github.com/apache/inlong/issues/4816) | [Bug][DataProxy] Caught IllegalStateException: No tube service url specified                       |
| [INLONG-4803](https://github.com/apache/inlong/issues/4803) | [Bug][DataProxy] Caught IllegalStateException: No pulsar server url specified                      |

### Manager
| ISSUE                                                       | Summary                                                                                                                      |
|:------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------|
| [INLONG-5585](https://github.com/apache/inlong/issues/5585) | [Bug][Manager] Some errors of inlong stream API and user API                                                                 |
| [INLONG-5577](https://github.com/apache/inlong/issues/5577) | [Feature][Manager][Sort] Support function fieldType                                                                          |
| [INLONG-5570](https://github.com/apache/inlong/issues/5570) | [Improve][Manager] Add manager client packages into the lib directory                                                        |
| [INLONG-5559](https://github.com/apache/inlong/issues/5559) | [Feature][Manager] Supplement the workflow approver API in the manager client                                                |
| [INLONG-5555](https://github.com/apache/inlong/issues/5555) | [Bug][Manager] Fix missing heartbeat fields and stream source subtask creation                                               |
| [INLONG-5536](https://github.com/apache/inlong/issues/5536) | [Bug][Manager]  Client api version missing on stream info update                                                             |
| [INLONG-5529](https://github.com/apache/inlong/issues/5529) | [Bug][Manager] Fix the error of version not set before updating operation                                                    |
| [INLONG-5517](https://github.com/apache/inlong/issues/5517) | [Bug][Manager] Manager client does not write back the version when updating info                                             |
| [INLONG-5515](https://github.com/apache/inlong/issues/5515) | [Bug][Manager] Repair type of form_data when data too long                                                                   |
| [INLONG-5501](https://github.com/apache/inlong/issues/5501) | [Bug][Manager] Repair type of workflow_process.form_data when data too long                                                  |
| [INLONG-5499](https://github.com/apache/inlong/issues/5499) | [Bug][Manager] The data source is successful, but the status always is issued or added                                       |
| [INLONG-5497](https://github.com/apache/inlong/issues/5497) | [Bug][Manager] DataProxyConfigRepository get error field name                                                                |
| [INLONG-5493](https://github.com/apache/inlong/issues/5493) | [Feature][Manager] Supplement the user API in the manager client                                                             |
| [INLONG-5491](https://github.com/apache/inlong/issues/5491) | [Bug][Manager] Pulsar failed to configure non partitioned topic                                                              |
| [INLONG-5476](https://github.com/apache/inlong/issues/5476) | [Bug][Manager] Heartbeat is not functioning properly under sparse report                                                     |
| [INLONG-5452](https://github.com/apache/inlong/issues/5452) | [Improve][Manager] Change creating resource after group approval to be asynchronous                                          |
| [INLONG-5432](https://github.com/apache/inlong/issues/5432) | [Improve][Manager] Return the type of the MQ cluster when processing the getConfig method                                    |
| [INLONG-5424](https://github.com/apache/inlong/issues/5424) | [Bug][Manager] JSON serialization error for Authentication when getting inlongGroupInfo                                      |
| [INLONG-5419](https://github.com/apache/inlong/issues/5419) | [Bug][Manager] Pulsar creates a specified queue model's error                                                                |
| [INLONG-5411](https://github.com/apache/inlong/issues/5411) | [Improve][Manager] Optimize the creation code of databases and tables of PostgreSQL                                          |
| [INLONG-5409](https://github.com/apache/inlong/issues/5409) | [Bug][Manager] Fix JSON serialization for class BaseSortConf                                                                 |
| [INLONG-5401](https://github.com/apache/inlong/issues/5401) | [Bug][Manager] Fix the problem that StreamSinkFieldEntity and SinkField fields do not match                                  |
| [INLONG-5397](https://github.com/apache/inlong/issues/5397) | [Feature][Manager] Add delete resource in manager client                                                                     |
| [INLONG-5394](https://github.com/apache/inlong/issues/5394) | [Feature][Manager] Support batch task for Inlong group                                                                       |
| [INLONG-5387](https://github.com/apache/inlong/issues/5387) | [Feature][Manager][Sort] Support encrypt records                                                                             |
| [INLONG-5380](https://github.com/apache/inlong/issues/5380) | [Feature][Manager] Modify the saving function of the data node                                                               |
| [INLONG-5369](https://github.com/apache/inlong/issues/5369) | [Improve][Manager] Optimize the user service related function to support third party authentication and authorization plugin |
| [INLONG-5368](https://github.com/apache/inlong/issues/5368) | [Bug][Manager] Update workflow approver error                                                                                |
| [INLONG-5359](https://github.com/apache/inlong/issues/5359) | [Improve][Manager] Add query workflow approver API                                                                           |
| [INLONG-5337](https://github.com/apache/inlong/issues/5337) | [Improve][Manager] Add Agent cluster info and operator                                                                       |
| [INLONG-5335](https://github.com/apache/inlong/issues/5335) | [Improve][Manager] Unserialize Sort config when getting GroupInfo                                                            |
| [INLONG-5333](https://github.com/apache/inlong/issues/5333) | [Improve][Manager] Add array, map, struct, and decimal format                                                                |
| [INLONG-5324](https://github.com/apache/inlong/issues/5324) | [Improve][Manager] Optimize configuration files and scripts                                                                  |
| [INLONG-5308](https://github.com/apache/inlong/issues/5308) | [Improve][Dashboard] Change MQ and cluster type to adapt the Manager module                                                  |
| [INLONG-5305](https://github.com/apache/inlong/issues/5305) | [Improve][Manager] Change the type enum that needs to be extended to a string constant                                       |
| [INLONG-5296](https://github.com/apache/inlong/issues/5296) | [Improve][Manager] Add fields for DataProxy cluster info                                                                     |
| [INLONG-5286](https://github.com/apache/inlong/issues/5286) | [Improve][Manager] Move pojo classes into the manager-pojo module                                                            |
| [INLONG-5285](https://github.com/apache/inlong/issues/5285) | [Improve][Manager] Support custom query for group, stream, source and sink                                                   |
| [INLONG-5283](https://github.com/apache/inlong/issues/5283) | [Improve][Manager] OpenAPI authentication should not be mandatory                                                            |
| [INLONG-5279](https://github.com/apache/inlong/issues/5279) | [Improve][Manager] Optimize the creation code of databases and tables, including Oracle and MySQL                            |
| [INLONG-5269](https://github.com/apache/inlong/issues/5269) | [Feature][Manager] Workflow supports rapid scaling of MQ resources                                                           |
| [INLONG-5264](https://github.com/apache/inlong/issues/5264) | [Improve][Manager] Remove unused StreamConfigLog related classes and tables                                                  |
| [INLONG-5246](https://github.com/apache/inlong/issues/5246) | [Bug][Manager] Agent gets dataproxy list and always returns empty                                                            |
| [INLONG-5245](https://github.com/apache/inlong/issues/5245) | [Improve][Manager] Optimize the URI paths of the WebAPI and OpenAPI                                                          |
| [INLONG-5240](https://github.com/apache/inlong/issues/5240) | [Improve][Manager] Unify the workflow approver and process classes and tables                                                |
| [INLONG-5232](https://github.com/apache/inlong/issues/5232) | [Improve][Manager] Unify the user and role tables                                                                            |
| [INLONG-5228](https://github.com/apache/inlong/issues/5228) | [Feature][Manager] Support create SQLServer databases and tables                                                             |
| [INLONG-5219](https://github.com/apache/inlong/issues/5219) | [Bug][Manager] The inlong group is still pending approval after approval                                                     |
| [INLONG-5212](https://github.com/apache/inlong/issues/5212) | [Feature][Manager] Merge the Selector classes into their related Listeners                                                   |
| [INLONG-5203](https://github.com/apache/inlong/issues/5203) | [Improve][Manager] Refactor the user interface                                                                               |
| [INLONG-5201](https://github.com/apache/inlong/issues/5201) | [Bug][Manager] The inlong group cannot be updated normally after the approval is successful                                  |
| [INLONG-5194](https://github.com/apache/inlong/issues/5194) | [Improve][Manager] Update MD5 hashing to SHA-256                                                                             |
| [INLONG-5188](https://github.com/apache/inlong/issues/5188) | [Bug][Manager] Create group workflow fail                                                                                    |
| [INLONG-5184](https://github.com/apache/inlong/issues/5184) | [Improve][Manager] Add more info for some error logs                                                                         |
| [INLONG-5178](https://github.com/apache/inlong/issues/5178) | [Improve][Manager] There is so much Warning info when compiling the Manager module                                           |
| [INLONG-5175](https://github.com/apache/inlong/issues/5175) | [Improve][Manager] Remove redundant StreamSinkExt table and classes                                                          |
| [INLONG-5167](https://github.com/apache/inlong/issues/5167) | [Feature][Manager] OpenAPI authentication support                                                                            |
| [INLONG-5166](https://github.com/apache/inlong/issues/5166) | [Bug][Manager] Cluster tags are not separated by commas when querying clusters                                               |
| [INLONG-5165](https://github.com/apache/inlong/issues/5165) | [Bug][Manager] Getting Sort source collects wrong topic properties of each stream                                            |
| [INLONG-5157](https://github.com/apache/inlong/issues/5157) | [Bug][Manager] Failed to build Sort config as the relations is empty                                                         |
| [INLONG-5148](https://github.com/apache/inlong/issues/5148) | [Improve][Manager] Handle the lightweight and standard inlong groups differently in workflow                                 |
| [INLONG-5144](https://github.com/apache/inlong/issues/5144) | [Bug][Manager] Fail to execute Group-InitSort                                                                                |
| [INLONG-5137](https://github.com/apache/inlong/issues/5137) | [Bug][Manager] The API to get the group list loses the mqType field                                                          |
| [INLONG-5136](https://github.com/apache/inlong/issues/5136) | [Improve][Manager] Update the get DataProxy cluster nodes API                                                                |
| [INLONG-5127](https://github.com/apache/inlong/issues/5127) | [Improve][Manager] Rename second_xxx to backup_xxx in sort-standalone management interface                                   |
| [INLONG-5112](https://github.com/apache/inlong/issues/5112) | [Improve][Manager] Improve creating Pulsar topic by using the lookups method                                                 |
| [INLONG-5104](https://github.com/apache/inlong/issues/5104) | [Improve][Manager] Update Flink address environment for Sort Flink plugin                                                    |
| [INLONG-5103](https://github.com/apache/inlong/issues/5103) | [Feature][Manager] Add constant field support for stream source and transform node                                           |
| [INLONG-5088](https://github.com/apache/inlong/issues/5088) | [Feature][Manager] Support only consumes the MQ cluster with the same tag                                                    |
| [INLONG-5086](https://github.com/apache/inlong/issues/5086) | [Feature][Manager] Support create Oracle databases and tables                                                                |
| [INLONG-5085](https://github.com/apache/inlong/issues/5085) | [Feature][Manager] Support create MySQL databases and tables                                                                 |
| [INLONG-5070](https://github.com/apache/inlong/issues/5070) | [Feature][Manager] Add more parameter settings support for stream source                                                     |
| [INLONG-5066](https://github.com/apache/inlong/issues/5066) | [Improve][Manager] Remove the LightGroup-related workflow listener and definitions                                           |
| [INLONG-5052](https://github.com/apache/inlong/issues/5052) | [Bug][Manager] The workflow that failed to execute still failed, but returned success                                        |
| [INLONG-5031](https://github.com/apache/inlong/issues/5031) | [Improve][Manager] Encryption saves all password fields                                                                      |
| [INLONG-5026](https://github.com/apache/inlong/issues/5026) | [Improve][Manager] The unit test code contains a real IP address                                                             |
| [INLONG-5018](https://github.com/apache/inlong/issues/5018) | [Feature][Manager]  Support for Tube data sources                                                                            |
| [INLONG-4993](https://github.com/apache/inlong/issues/4993) | [Improve][Manager] Return details when querying a list of StreamSources                                                      |
| [INLONG-4974](https://github.com/apache/inlong/issues/4974) | [Umbrella][Manager] Support create sink resource                                                                             |
| [INLONG-4965](https://github.com/apache/inlong/issues/4965) | [Improve][Manager] Eliminate NullPointerException on user management                                                         |
| [INLONG-4951](https://github.com/apache/inlong/issues/4951) | [Bug][Manger] Unable to save the change when updating the chargers of cluster tag                                            |
| [INLONG-4949](https://github.com/apache/inlong/issues/4949) | [Feature][Manager] Support to extend different types of Sort protocol                                                        |
| [INLONG-3922](https://github.com/apache/inlong/issues/3922) | [Feature][Manager] Fetch source failed and update task status through heartbeat                                              |
| [INLONG-5442](https://github.com/apache/inlong/issues/5442) | [Bug][Manager] Fix accept logic error for SortConfigListener                                                                 |
| [INLONG-5299](https://github.com/apache/inlong/issues/5299) | [Improve][Manager] Remove redundant configuration and class files                                                            |
| [INLONG-5371](https://github.com/apache/inlong/issues/5371) | [Feature][Manager] Supplement the data node API in the manager client                                                        |
| [INLONG-5029](https://github.com/apache/inlong/issues/5029) | [Umbrella][Manager] Unify the InlongGroup workflow                                                                           |
| [INLONG-5020](https://github.com/apache/inlong/issues/5020) | [Improve][Manager] Refactoring InnerInlongManagerClient of manager client                                                    |
| [INLONG-5007](https://github.com/apache/inlong/issues/5007) | [Feature][Manager] Client supports getting sink details by id                                                                |
| [INLONG-5006](https://github.com/apache/inlong/issues/5006) | [Improve][Manager] Return details when querying a list of StreamSinks                                                        |
| [INLONG-4897](https://github.com/apache/inlong/issues/4897) | [Improve][Manager] Change length of field name                                                                               |                                                          |
| [INLONG-4928](https://github.com/apache/inlong/issues/4928) | [Feature][Manager] Supplement or modify the inlong stream api in the manager client                                          |

### Sort
| ISSUE                                                       | Summary                                                                                                             |
|:------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------|
| [INLONG-5580](https://github.com/apache/inlong/issues/5580) | [Feature][Sort] Add InlongMetric interface for extract and load nodes                                               |
| [INLONG-5576](https://github.com/apache/inlong/issues/5576) | [Feature][Sort] Add redis extract node and support temporal join                                                    |
| [INLONG-5488](https://github.com/apache/inlong/issues/5488) | [Feature][Sort] Add metric for Iceberg and DLC with Flink metrics group and audit SDK                               |
| [INLONG-5485](https://github.com/apache/inlong/issues/5485) | [Feature][Sort] Support JSON UDF getter and JSON getter function                                                    |
| [INLONG-5484](https://github.com/apache/inlong/issues/5484) | [Feature][Sort] Add audit info for Elasticsearch 6 connector and report metric when delete mode                     |
| [INLONG-5478](https://github.com/apache/inlong/issues/5478) | [Improve][Sort] MySQL connector lost inlong metric feature for no primary key table                                 |
| [INLONG-5470](https://github.com/apache/inlong/issues/5470) | [Bug][Sort] Fix compile error                                                                                       |
| [INLONG-5464](https://github.com/apache/inlong/issues/5464) | [Improve][Sort] Optimize the implementation of the sort-connector-base metric common abstract                       |
| [INLONG-5463](https://github.com/apache/inlong/issues/5463) | [Feature][Sort] Add audit for HBase load node                                                                       |
| [INLONG-5462](https://github.com/apache/inlong/issues/5462) | [Feature][Sort] Add audit for Oracle extract Node                                                                   |
| [INLONG-5461](https://github.com/apache/inlong/issues/5461) | [Feature][Sort] Add audit for MongoDB extract node                                                                  |
| [INLONG-5460](https://github.com/apache/inlong/issues/5460) | [Feature][Sort] Add audit for PostgreSQL extract node                                                               |
| [INLONG-5448](https://github.com/apache/inlong/issues/5448) | [Improve][Sort] Optimize cls callback when send failed                                                              |
| [INLONG-5447](https://github.com/apache/inlong/issues/5447) | [Feature][Sort] Add lookup support for Redis                                                                        |
| [INLONG-5423](https://github.com/apache/inlong/issues/5423) | [Feature][SortStandalone] Revise invalid partition time when dispatch messages                                      |
| [INLONG-5404](https://github.com/apache/inlong/issues/5404) | [Bug][Sort] Fix EncryptFunction checkstyle                                                                          |
| [INLONG-5377](https://github.com/apache/inlong/issues/5377) | [Feature][Sort] Add reporting metrics for kafka connector sink                                                      |
| [INLONG-5375](https://github.com/apache/inlong/issues/5375) | [Improve][Sort] Iceberg-inlong connector lose its meta-inf                                                          |
| [INLONG-5352](https://github.com/apache/inlong/issues/5352) | [Feature][Sort] Add audit report for Pulsar source                                                                  |
| [INLONG-5327](https://github.com/apache/inlong/issues/5327) | [Bug][Sort] Lack of service file of Inlong Pb format msg                                                            |
| [INLONG-5262](https://github.com/apache/inlong/issues/5262) | [Feature][Sort] Add metric report for Pulsar source                                                                 |
| [INLONG-5242](https://github.com/apache/inlong/issues/5242) | [Feature][Sort] Add metric computing for Oracle and MongoDB                                                         |
| [INLONG-5215](https://github.com/apache/inlong/issues/5215) | [Bug][TubeMQ] Initialization script init-tube-cluster.sh execution error                                            |
| [INLONG-5211](https://github.com/apache/inlong/issues/5211) | [Improve][Sort] Replace 1.3.0-snapshot with inlong-version                                                          |
| [INLONG-5210](https://github.com/apache/inlong/issues/5210) | [Feature][Sort] Add reporting metrics for Elasticsearch 7 connector and audit SDK                                   |
| [INLONG-5205](https://github.com/apache/inlong/issues/5205) | [Feature][Sort] Add reporting metrics for Elasticsearch 6 connector                                                 |
| [INLONG-5169](https://github.com/apache/inlong/issues/5169) | [Bug][Sort] Metrics of HBaseSinkFunction are not collected accurately                                               |
| [INLONG-5158](https://github.com/apache/inlong/issues/5158) | [Feature][Sort] Add metric for Kafka source with Flink metrics group and audit SDK                                  |
| [INLONG-5156](https://github.com/apache/inlong/issues/5156) | [Feature][Sort] Add metric for SQLServer source with Flink metrics group and audit SDK                              |
| [INLONG-5152](https://github.com/apache/inlong/issues/5152) | [Feature][Manager][Sort] Add  union  parse support for FlinkSqlParser                                               |
| [INLONG-5119](https://github.com/apache/inlong/issues/5119) | [Feature][Sort] Import all changelog mode data ingest into Kafka                                                    |
| [INLONG-5117](https://github.com/apache/inlong/issues/5117) | [Feature][Sort-Standalone] Support specify component type from remote config                                        |
| [INLONG-5100](https://github.com/apache/inlong/issues/5100) | [Feature][Sort] Add reporting metrics for JDBC                                                                      |
| [INLONG-5094](https://github.com/apache/inlong/issues/5094) | [Feature][SortStandalone] Implements time interval interceptor                                                      |
| [INLONG-5072](https://github.com/apache/inlong/issues/5072) | [Feature][Sort] Add metric computing of MySQL and PostgreSQL and HBase for user query metric by label               |
| [INLONG-5068](https://github.com/apache/inlong/issues/5068) | [Bug][Sort] Fix RegexpReplace replacing uncorrectly                                                                 |
| [INLONG-4892](https://github.com/apache/inlong/issues/4892) | [Bug][Sort] Sort connector package without own Factory files                                                        |
| [INLONG-4858](https://github.com/apache/inlong/issues/4858) | [Bug][Sort] Building connectors twice without clean command causes failures                                         |
| [INLONG-4815](https://github.com/apache/inlong/issues/4815) | [Improve][Sort] Supporting field type cast when sinking data to HBase                                               |
| [INLONG-4808](https://github.com/apache/inlong/issues/4808) | [Feature][InLong] Extract end-to-end testing capabilities                                                           |
| [INLONG-4807](https://github.com/apache/inlong/issues/4807) | [Feature][Sort] CSV deserialization schema support process data whose input field length unmatch the register table |
| [INLONG-4806](https://github.com/apache/inlong/issues/4806) | [Feature][Sort] Sort support pb format deserializationSchema                                                        |
| [INLONG-4751](https://github.com/apache/inlong/issues/4751) | [Improve][Sort] Optimize the metadata implementation of Extract Nodes and Load Nodes                                |
| [INLONG-4735](https://github.com/apache/inlong/issues/4735) | [Improve][Sort] Add precision support for DecimalFormatInfo,TimeFormatInfo                                          |
| [INLONG-4732](https://github.com/apache/inlong/issues/4732) | [Bug][Sort] Table not found when Iceberg commit Hive table                                                          |
| [INLONG-4730](https://github.com/apache/inlong/issues/4730) | [Bug] [Sort] Fix meta field format is null when parse json to sql                                                   |
| [INLONG-4693](https://github.com/apache/inlong/issues/4693) | [Bug] [Sort] Fix DLC connector maven package problem                                                                |
| [INLONG-4685](https://github.com/apache/inlong/issues/4685) | [Improve][Sort] Add data type convert implicitly support                                                            |
| [INLONG-4678](https://github.com/apache/inlong/issues/4678) | [Improve][Sort] Add util class of parsing meta info for data node                                                   |
| [INLONG-4665](https://github.com/apache/inlong/issues/4665) | [Improve][Sort] The primary key of the MongoDB CDC connector must be _id                                            |
| [INLONG-4659](https://github.com/apache/inlong/issues/4659) | [Feature][Sort] Support routing field for Elasticsearch connector                                                   |
| [INLONG-4650](https://github.com/apache/inlong/issues/4650) | [Bug][Sort] Iceberg connector not found the Hive classpath                                                          |
| [INLONG-4431](https://github.com/apache/inlong/issues/4431) | [Feature][Sort] Sort lightwieght support load data to DLC                                                           |
| [INLONG-4166](https://github.com/apache/inlong/issues/4166) | [Feature][Sort] Add metrics test                                                                                    |
| [INLONG-4894](https://github.com/apache/inlong/issues/4894) | [Feature][Sort] Add TubeMQ extract node                                                                             |
| [INLONG-4890](https://github.com/apache/inlong/issues/4890) | [Feature][Sort] Support TubeMQ connector                                                                            |
| [INLONG-5315](https://github.com/apache/inlong/issues/5315) | [Feature][Sort] Import all changelog mode data ingest into JDBC                                                     |
| [INLONG-5312](https://github.com/apache/inlong/issues/5312) | [Feature][Sort] Add unified inlong.metric parameter injection support for nodes                                     |
| [INLONG-5451](https://github.com/apache/inlong/issues/5451) | [Improve][Sort] kafka sink use customized partitioner                                                               |
| [INLONG-5446](https://github.com/apache/inlong/issues/5446) | [Feature][Sort] Add reporting metric from JDBC to audit SDK and refactor according to connector-base                |
| [INLONG-5353](https://github.com/apache/inlong/issues/5353) | [Bug][Sort] Fix HBase connector packaging problem and inlong metrics delimiter problem                              |
| [INLONG-5217](https://github.com/apache/inlong/issues/5217) | [Feature][Sort]  Add connector-base component for common code                                                       |
| [INLONG-5074](https://github.com/apache/inlong/issues/5074) | [Improve][Sort] KafkaExtractNode support more StartupMode                                                           |
| [INLONG-5012](https://github.com/apache/inlong/issues/5012) | [Improve][Sort] Remove the duplicate declaration of elasticsearch7                                                  |
| [INLONG-4943](https://github.com/apache/inlong/issues/4943) | [Improve][Sort] Remove redundant information in licenses                                                            |
| [INLONG-4726](https://github.com/apache/inlong/issues/4726) | [Feature][SortStandalone] Support ClickHouse sink                                                                   |
| [INLONG-4763](https://github.com/apache/inlong/issues/4763) | [Feature][Sort] Import sort end2end unit test with sql file input                                                   |
| [INLONG-4670](https://github.com/apache/inlong/issues/4670) | [Improve][Sort] Update the README.md for the sort                                                                   |
| [INLONG-4777](https://github.com/apache/inlong/issues/4777) | [Feature][Sort-Standalone] Change ack policy from checking message count to checking every message                  |

### SDK
| ISSUE                                                       | Summary                                                                                              |
|:------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------|
| [INLONG-5496](https://github.com/apache/inlong/issues/5496) | [Improve][SDK] Refactor single topic manager in Sort SDK                                             |
| [INLONG-5418](https://github.com/apache/inlong/issues/5418) | [Feature][SDK] Sort SDK support seek topic or partitions to a given timestamp                        |
| [INLONG-5270](https://github.com/apache/inlong/issues/5270) | [Feature][SDK] Add unit tests and manual for DataProxy C++ SDK                                       |
| [INLONG-5267](https://github.com/apache/inlong/issues/5267) | [Feature][SDK] Add config file and demo for DataProxy C++ SDK                                        |
| [INLONG-5265](https://github.com/apache/inlong/issues/5265) | [Feature][SDK] Build config for DataProxy C++ SDK                                                    |
| [INLONG-5256](https://github.com/apache/inlong/issues/5256) | [Feature][SDK] Support network operation and management for DataProxy C++ SDK                        |
| [INLONG-5253](https://github.com/apache/inlong/issues/5253) | [Feature][SDK] Support buffer manager for DataProxy C++ SDK                                          |
| [INLONG-5251](https://github.com/apache/inlong/issues/5251) | [Feature][SDK] Add proxy client config and proxylist manager for DataProxy SDK(C++)                  |
| [INLONG-5249](https://github.com/apache/inlong/issues/5249) | [Feature][SDK] Add DataProxy SDK(C++) utils file                                                     |
| [INLONG-5160](https://github.com/apache/inlong/issues/5160) | [Improve][DataProxy-SDK] Update DataProxy cluster API and response parsing method                    |
| [INLONG-5095](https://github.com/apache/inlong/issues/5095) | [Feature][SortSDK] Support consume stream from a certain time                                        |
| [INLONG-5092](https://github.com/apache/inlong/issues/5092) | [Feature][SDK] Change Kafka default partition assignment strategy to RangeAssignor                   |
| [INLONG-4995](https://github.com/apache/inlong/issues/4995) | [Improve][SDK] The md5 digest is not secure and triggers a CodeQL warning.                           |
| [INLONG-4884](https://github.com/apache/inlong/issues/4884) | [Bug][SortSDK] Fix data duplicated problem when default ackTimeout value of Pulsar consumer is not 0 |
| [INLONG-4871](https://github.com/apache/inlong/issues/4871) | [Bug][SDK] The generateMd5 method generate md2 not md5                                               |
| [INLONG-4790](https://github.com/apache/inlong/issues/4790) | [Improve][DataProxySDK] Replace DES with a more secure encryption algorithm                          |
| [INLONG-5258](https://github.com/apache/inlong/issues/5258) | [Feature][SDK] Add core interface for DataProxy C++ SDK                                              |

### TubeMQ
| ISSUE                                                       | Summary                                                                                                                |
|:------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------|
| [INLONG-5567](https://github.com/apache/inlong/issues/5567) | [Bug][TubeMQ] Master start failed with NullPointerException                                                            |
| [INLONG-5435](https://github.com/apache/inlong/issues/5435) | [TubeMQ] Adjust the parameter requirements in Audit and Prometheus sections                                            |
| [INLONG-5386](https://github.com/apache/inlong/issues/5386) | [Feature][TubeMQ] Supports reporting metrics data through Prometheus                                                   |
| [INLONG-5373](https://github.com/apache/inlong/issues/5373) | [Feature][TubeMQ] Supports outputting traffic information through the audit SDK                                        |
| [INLONG-5314](https://github.com/apache/inlong/issues/5314) | [Bug][TubeMQ] When a non-master node is configured in the first position of the address, the service cannot be started |
| [INLONG-5303](https://github.com/apache/inlong/issues/5303) | [Improve][TubeMQ] Simplify flush check for appendMsg in FileMsgStore                                                   |
| [INLONG-5281](https://github.com/apache/inlong/issues/5281) | [Bug][TubeMQ] After running for a period of time, it has been unable to connect to the broker                          |
| [INLONG-5138](https://github.com/apache/inlong/issues/5138) | [Bug][TubeMQ] compile error with gcc >= 8.0 on rapidjson                                                               |
| [INLONG-5097](https://github.com/apache/inlong/issues/5097) | [Bug][TubeMQ] The protocol from 1.1.0 and later is not smoothly compatible with previous versions                      |
| [INLONG-5087](https://github.com/apache/inlong/issues/5087) | [Bug][TubeMQ] In MySQL 5.7 initialize the database failure: Unknown collation 'utf8mb4_0900_ai_ci'                     |
| [INLONG-4942](https://github.com/apache/inlong/issues/4942) | [Improve][TubeMQ] Add the display of the IP address of consumer                                                        |
| [INLONG-4934](https://github.com/apache/inlong/issues/4934) | [Bug][TubeMQ] Reversed value for admin_enable_stats methods                                                            |
| [INLONG-4927](https://github.com/apache/inlong/issues/4927) | [TubeMQ] Add version info in history offset record                                                                     |
| [INLONG-4924](https://github.com/apache/inlong/issues/4924) | [TubeMQ] Add admin_get_methods method                                                                                  |
| [INLONG-4883](https://github.com/apache/inlong/issues/4883) | [TubeMQ] No error report for incorrect topic subscription                                                              |
| [INLONG-4805](https://github.com/apache/inlong/issues/4805) | [Bug][TubeMQ] Tube-Manager startup failed                                                                              |
| [INLONG-4721](https://github.com/apache/inlong/issues/4721) | [TubeMQ] Remove the "incubat*" tag in the tubemq-go-sdk code                                                           |
| [INLONG-4664](https://github.com/apache/inlong/issues/4664) | [Feature][TubeMQ] Add GroupController and TopicBackendWorker                                                           |
| [INLONG-4551](https://github.com/apache/inlong/issues/4551) | [Feature][TubeMQ] Batch delete consumer groups and authorized consumer groups from the blacklist                       |
| [INLONG-4123](https://github.com/apache/inlong/issues/4123) | [BUG][TubeMQ] All images can not work when using go example                                                            |
| [INLONG-5282](https://github.com/apache/inlong/issues/5282) | [TubeMQ] An error when deploying tubemq-manager according to the documentation on the official website                 |

### Other
| ISSUE                                                       | Summary                                                                                                |
|:------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------|
| [INLONG-5583](https://github.com/apache/inlong/issues/5583) | [Improve][K8S] Add timezone to helm chart                                                              |
| [INLONG-5553](https://github.com/apache/inlong/issues/5553) | [Imporve][Common] Adjust the log output level of MetricListenerRunnable                                |
| [INLONG-5527](https://github.com/apache/inlong/issues/5527) | [Improve][Docker] Add configmap.yaml for MySQL                                                         |
| [INLONG-5439](https://github.com/apache/inlong/issues/5439) | [Bug][Docker] Fix arm docker build script                                                              |
| [INLONG-5294](https://github.com/apache/inlong/issues/5294) | [Improve][CVE] Upgrade gson version due to CVE                                                         |
| [INLONG-5292](https://github.com/apache/inlong/issues/5292) | [Improve][CVE] Upgrade shiro version due to CVE                                                        |
| [INLONG-5207](https://github.com/apache/inlong/issues/5207) | [Improve][K8S] Add components for helm chart                                                           |
| [INLONG-5190](https://github.com/apache/inlong/issues/5190) | [Bug][Build] The build of InLong is missing some packages                                              |
| [INLONG-5182](https://github.com/apache/inlong/issues/5182) | [Improve][CI] Upgrade apache-rat-plugin to compatible with parallel builds                             |
| [INLONG-5179](https://github.com/apache/inlong/issues/5179) | [Bug][K8S] External mysql information has not been used in manager                                     |
| [INLONG-5154](https://github.com/apache/inlong/issues/5154) | [Improve][Doc] Update the architecture image                                                           |
| [INLONG-5124](https://github.com/apache/inlong/issues/5124) | [Improve] Add initial sort connectors to the manager docker image                                      |
| [INLONG-5115](https://github.com/apache/inlong/issues/5115) | [Improve][Pom] There are redundant agent dependencies in Distribution                                  |
| [INLONG-5098](https://github.com/apache/inlong/issues/5098) | [Improve][CI] Use maven parallel build feature to improve project workflow build speed                 |
| [INLONG-5064](https://github.com/apache/inlong/issues/5064) | [Improve][CI] Decrease Vulnerabilities Scan run time                                                   |
| [INLONG-5016](https://github.com/apache/inlong/issues/5016) | [Improve][CI] Improve Vulnerabilities Scan build speed                                                 |
| [INLONG-5009](https://github.com/apache/inlong/issues/5009) | [Bug][Docker] Dataproxy proc cannot startup                                                            |
| [INLONG-4991](https://github.com/apache/inlong/issues/4991) | [Improve] Update the lables for CI/CD workflows                                                        |
| [INLONG-4977](https://github.com/apache/inlong/issues/4977) | [Bug][K8s] Divide persistent volume claim by statefulsets                                              |
| [INLONG-4910](https://github.com/apache/inlong/issues/4910) | [Improve][CI] CI_docker runs time too long                                                             |
| [INLONG-4862](https://github.com/apache/inlong/issues/4862) | [Improve][Docker] Add publish images by arch and push manifest script                                  |
| [INLONG-4838](https://github.com/apache/inlong/issues/4838) | [Improve][Docker] Add MQ Type environment for Audit and DataProxy                                      |
| [INLONG-4827](https://github.com/apache/inlong/issues/4827) | [Improve][Kubernets] Add Flink config into the YAML files                                              |
| [INLONG-4826](https://github.com/apache/inlong/issues/4826) | [Bug][K8s] Helm upgrade inlong failed                                                                  |
| [INLONG-4769](https://github.com/apache/inlong/issues/4769) | [Bug][CI] Error trigger conditions in the docker workflow                                              |
| [INLONG-4758](https://github.com/apache/inlong/issues/4758) | [Improve][Doc] Command-line codes in README should remove the leading $ sign                           |
| [INLONG-4746](https://github.com/apache/inlong/issues/4746) | [Website] Modify the how-to-vote-a-committer-pmc file                                                  |
| [INLONG-4737](https://github.com/apache/inlong/issues/4737) | [Doc] Remove "(Incubating)" tag in licenses dirs                                                       |
| [INLONG-4727](https://github.com/apache/inlong/issues/4727) | [Doc] Update InLong project link in readme and  pom.xml                                                |
| [INLONG-4724](https://github.com/apache/inlong/issues/4724) | [Pom] Change version to 1.3.0-SNAPSHOT                                                                 |
| [INLONG-4719](https://github.com/apache/inlong/issues/4719) | [Improve][All] Remove commons-lang 2.6 dependency                                                      |
| [INLONG-4717](https://github.com/apache/inlong/issues/4717) | [Doc] Remove DISCLAIMER file                                                                           |
| [INLONG-4716](https://github.com/apache/inlong/issues/4716) | [Bug][Doc] 404 issue for document links in guides                                                      |
| [INLONG-4710](https://github.com/apache/inlong/issues/4710) | [Improve][Website] Modify how to release and verify                                                    |
| [INLONG-4708](https://github.com/apache/inlong/issues/4708) | [Website] Modify the "(incubating)" tag associated with the link                                       |
| [INLONG-4702](https://github.com/apache/inlong/issues/4702) | [Umbrella][Website][Doc] Remove incubation related content information                                 |
| [INLONG-4698](https://github.com/apache/inlong/issues/4698) | [Improve][Doc] Update the definitions and features to make them accurate                               |
| [INLONG-4696](https://github.com/apache/inlong/issues/4696) | [Improve][Doc] Update the supported data nodes                                                         |
| [INLONG-4673](https://github.com/apache/inlong/issues/4673) | [Feature][Docker] Support for building Docker images for the ARM architecture                          |
| [INLONG-4653](https://github.com/apache/inlong/issues/4653) | [Improve][CI] Add concurrency support on GitHub Actions                                                |
| [INLONG-4636](https://github.com/apache/inlong/issues/4636) | [Feature][CI] Add check PR title workflow                                                              |
| [INLONG-4616](https://github.com/apache/inlong/issues/4616) | [Improve][Office-Website] Set Apache events on footer                                                  |
| [INLONG-4606](https://github.com/apache/inlong/issues/4606) | [Improve][CI] Improve the trigger conditions of the Docker image build                                 |
| [INLONG-2440](https://github.com/apache/inlong/issues/2440) | [Improve] add a workflow to Scan InLong common vulnerabilities                                         |
| [INLONG-1831](https://github.com/apache/inlong/issues/1831) | [Feature] Add official website content search button                                                   |
