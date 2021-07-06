---
title: 下载 - Apache TubeMQ
---

# 下载TubeMQ
  使用以下镜像下载TubeMQ

## TubeMQ
| 日期 | 版本| 备注 | 下载 |
|:---:|:--:|:--:|:--:|
| 2021-03-04 | 0.8.0 | Source | [[SRC](http://www.apache.org/dyn/closer.lua/incubator/tubemq/0.8.0-incubating/apache-tubemq-0.8.0-incubating-src.tar.gz)]                 [[PGP](https://downloads.apache.org/incubator/tubemq/0.8.0-incubating/apache-tubemq-0.8.0-incubating-src.tar.gz.asc)]             [[SHA512](https://downloads.apache.org/incubator/tubemq/0.8.0-incubating/apache-tubemq-0.8.0-incubating-src.tar.gz.sha512)] |
| |                       | Client | [[TAR](http://www.apache.org/dyn/closer.lua/incubator/tubemq/0.8.0-incubating/apache-tubemq-client-0.8.0-incubating-bin.tar.gz)]          [[PGP](https://downloads.apache.org/incubator/tubemq/0.8.0-incubating/apache-tubemq-client-0.8.0-incubating-bin.tar.gz.asc)]      [[SHA512](https://downloads.apache.org/incubator/tubemq/0.8.0-incubating/apache-tubemq-client-0.8.0-incubating-bin.tar.gz.sha512)] |
| |                       | Server | [[TAR](http://www.apache.org/dyn/closer.lua/incubator/tubemq/0.8.0-incubating/apache-tubemq-server-0.8.0-incubating-bin.tar.gz)]          [[PGP](https://downloads.apache.org/incubator/tubemq/0.8.0-incubating/apache-tubemq-server-0.8.0-incubating-bin.tar.gz.asc)]      [[SHA512](https://downloads.apache.org/incubator/tubemq/0.8.0-incubating/apache-tubemq-server-0.8.0-incubating-bin.tar.gz.sha512)] |

## 发版说明

### 改进:
| JIRA  | Summary  | Priority |
| :---- | :------- | :------- |
| [TUBEMQ-430](https://issues.apache.org/jira/browse/TUBEMQ-430) | Optimizing the implementation of HTTP API for broke  | Major |
| [TUBEMQ-445](https://issues.apache.org/jira/browse/TUBEMQ-445) | Adjust the status check default sleep interval of pullConsumeReadyChkSliceMs  | Major |
| [TUBEMQ-448](https://issues.apache.org/jira/browse/TUBEMQ-448) | Add Committer and PPMC operation process  | Major |
| [TUBEMQ-449](https://issues.apache.org/jira/browse/TUBEMQ-449) | Adjust Example implementation  | Major |
| [TUBEMQ-452](https://issues.apache.org/jira/browse/TUBEMQ-452) | Optimize rebalance performance | Major |
| [TUBEMQ-467](https://issues.apache.org/jira/browse/TUBEMQ-467) | Add WEB APIs of Master and Broker | Major |
| [TUBEMQ-489](https://issues.apache.org/jira/browse/TUBEMQ-489) | Add the maximum message length parameter setting | Major |
| [TUBEMQ-495](https://issues.apache.org/jira/browse/TUBEMQ-495) | Code implementation adjustment based on SpotBugs check | Major |
| [TUBEMQ-511](https://issues.apache.org/jira/browse/TUBEMQ-511) | Replace the conditional operator (?:) with mid()  | Major |
| [TUBEMQ-512](https://issues.apache.org/jira/browse/TUBEMQ-512) | Add package length control based on Topic  | Major |
| [TUBEMQ-515](https://issues.apache.org/jira/browse/TUBEMQ-515) | Add cluster Topic view web api  | Major |

### BUG修复:
| JIRA  | Summary  | Priority |
| :---- | :------- | :------- |
| [TUBEMQ-437](https://issues.apache.org/jira/browse/TUBEMQ-437) | Fix tubemq table source sink factory instance creating problem | Major |
| [TUBEMQ-441](https://issues.apache.org/jira/browse/TUBEMQ-441) | An error occurred when using the Tubemq class to create a sink table | Major |
| [TUBEMQ-442](https://issues.apache.org/jira/browse/TUBEMQ-442) | Modifying the jvm parameters when the broker starts does not take effect  | Major    |
| [TUBEMQ-443](https://issues.apache.org/jira/browse/TUBEMQ-443) | TubemqSourceFunction class prints too many logs problem | Major |
| [TUBEMQ-446](https://issues.apache.org/jira/browse/TUBEMQ-446) | Small bugs fix that do not affect the main logics | Major |
| [TUBEMQ-450](https://issues.apache.org/jira/browse/TUBEMQ-450) | TubeClientException: Generate producer id failed  | Major |
| [TUBEMQ-453](https://issues.apache.org/jira/browse/TUBEMQ-453) | TubemqSourceFunction class prints too many logs problem | Major |
| [TUBEMQ-506](https://issues.apache.org/jira/browse/TUBEMQ-506) | cmakelist error | Major |
| [TUBEMQ-510](https://issues.apache.org/jira/browse/TUBEMQ-510) | Found a bug in MessageProducerExample class | Major |
| [TUBEMQ-518](https://issues.apache.org/jira/browse/TUBEMQ-518) | fix parameter pass error | Major |
| [TUBEMQ-526](https://issues.apache.org/jira/browse/TUBEMQ-526) | Adjust the packaging script and version check list, remove the "-WIP" tag | Major |
| [TUBEMQ-555](https://issues.apache.org/jira/browse/TUBEMQ-555) | short session data can only be written to a specific partition | Major |
| [TUBEMQ-556](https://issues.apache.org/jira/browse/TUBEMQ-556) | Index value is bigger than the actual number of records | Low |


### 任务:
| JIRA | Summary | Priority |
|:---- |:---- | :--- |
| [TUBEMQ-505](https://issues.apache.org/jira/browse/TUBEMQ-505) | Remove the "WIP" label of the DISCLAIMER file  | Major |
| [TUBEMQ-543](https://issues.apache.org/jira/browse/TUBEMQ-543) | Modify the LICENSE statement of multiple files and others  | Major |
| [TUBEMQ-557](https://issues.apache.org/jira/browse/TUBEMQ-557) | Handle the issues mentioned in the 0.8.0-RC2 review  | Major |
| [TUBEMQ-562](https://issues.apache.org/jira/browse/TUBEMQ-562) | Update project contents according to the 0.8.0-RC3 review  | Major |

### 子任务:
| JIRA  | Summary  | Priority |
| :---- | :------- | :------- |
| [TUBEMQ-428](https://issues.apache.org/jira/browse/TUBEMQ-433) | Bumped version to 0.8.0-SNAPSHOT | Major |
| [TUBEMQ-433](https://issues.apache.org/jira/browse/TUBEMQ-433) | add tubemq perf-consumer/producer scripts | Major |
| [TUBEMQ-434](https://issues.apache.org/jira/browse/TUBEMQ-434) | Adjust Broker API mapping | Major |
| [TUBEMQ-435](https://issues.apache.org/jira/browse/TUBEMQ-435) | Create Web field Mapping | Major |
| [TUBEMQ-436](https://issues.apache.org/jira/browse/TUBEMQ-436) | Adjust Broker's HTTP API implementation | Major |
| [TUBEMQ-439](https://issues.apache.org/jira/browse/TUBEMQ-439) | Add Cli field Scheme definition | Major |
| [TUBEMQ-440](https://issues.apache.org/jira/browse/TUBEMQ-440) | Add feature package tube-manager to zip  | Major |
| [TUBEMQ-444](https://issues.apache.org/jira/browse/TUBEMQ-444) | Add consume and produce Cli commands | Major |
| [TUBEMQ-447](https://issues.apache.org/jira/browse/TUBEMQ-447) | Add Broker-Admin Cli | Major |
| [TUBEMQ-451](https://issues.apache.org/jira/browse/TUBEMQ-451) | Replace ConsumeTupleInfo with Tuple2  | Major    |
| [TUBEMQ-457](https://issues.apache.org/jira/browse/TUBEMQ-457) | There is no need to return StringBuilder in Master.java | Major |
| [TUBEMQ-463](https://issues.apache.org/jira/browse/TUBEMQ-463) | Adjust Master rebalance process implementation  | Major |
| [TUBEMQ-464](https://issues.apache.org/jira/browse/TUBEMQ-464) | Add parameter rebalanceParallel in master.ini | Major |
| [TUBEMQ-470](https://issues.apache.org/jira/browse/TUBEMQ-470) | Add query API of TopicName and BrokerId collection  | Major |
| [TUBEMQ-471](https://issues.apache.org/jira/browse/TUBEMQ-471) | Add query API Introduction of TopicName and BrokerId collection | Major |
| [TUBEMQ-472](https://issues.apache.org/jira/browse/TUBEMQ-472) | Adjust Broker's AbstractWebHandler class implementation  | Major |
| [TUBEMQ-475](https://issues.apache.org/jira/browse/TUBEMQ-475) | add the offset clone api of the consume group  | Major |
| [TUBEMQ-482](https://issues.apache.org/jira/browse/TUBEMQ-482) | Add offset query api  | Major |
| [TUBEMQ-484](https://issues.apache.org/jira/browse/TUBEMQ-484) | Add query API for topic publication information  | Major |
| [TUBEMQ-485](https://issues.apache.org/jira/browse/TUBEMQ-485) | Add the batch setting API of consume group offset  | Major |
| [TUBEMQ-486](https://issues.apache.org/jira/browse/TUBEMQ-486) | Add the delete API of consumer group offset  | Major |
| [TUBEMQ-494](https://issues.apache.org/jira/browse/TUBEMQ-494) | Update API interface instruction document | Major |
| [TUBEMQ-499](https://issues.apache.org/jira/browse/TUBEMQ-499) | Add configure store  | Major |
| [TUBEMQ-500](https://issues.apache.org/jira/browse/TUBEMQ-500) | Add setting operate API  | Major |
| [TUBEMQ-501](https://issues.apache.org/jira/browse/TUBEMQ-501) | Adjust max message size check logic  | Major |
| [TUBEMQ-502](https://issues.apache.org/jira/browse/TUBEMQ-502) | Add setting API interface document  | Major |
| [TUBEMQ-504](https://issues.apache.org/jira/browse/TUBEMQ-504) | Adjust the WebMethodMapper class interfaces  | Major |
| [TUBEMQ-508](https://issues.apache.org/jira/browse/TUBEMQ-508) | Optimize Broker's PB parameter check processing logic  | Major |
| [TUBEMQ-509](https://issues.apache.org/jira/browse/TUBEMQ-509) | Adjust the packet length check when data is loaded  | Major |
| [TUBEMQ-522](https://issues.apache.org/jira/browse/TUBEMQ-522) | Add admin_query_cluster_topic_view API document  | Major |
| [TUBEMQ-544](https://issues.apache.org/jira/browse/TUBEMQ-544) | Adjust the LICENSE statement in the client.conf files of Python and C/C++ SDK | Major |
| [TUBEMQ-546](https://issues.apache.org/jira/browse/TUBEMQ-546) | Restore the original license header of the referenced external source files | Major |
| [TUBEMQ-547](https://issues.apache.org/jira/browse/TUBEMQ-547) | Recode the implementation of the *Startup.java classes in the Tool package | Major |
| [TUBEMQ-548](https://issues.apache.org/jira/browse/TUBEMQ-548) | Handle the LICENSE authorization of font files in the resources | Major |
| [TUBEMQ-549](https://issues.apache.org/jira/browse/TUBEMQ-549) | Handling the problem of compilation failure | Major |
| [TUBEMQ-550](https://issues.apache.org/jira/browse/TUBEMQ-550) | Adjust LICENSE file content | Major |
| [TUBEMQ-551](https://issues.apache.org/jira/browse/TUBEMQ-551) | Adjust NOTICE file content | Major |
| [TUBEMQ-558](https://issues.apache.org/jira/browse/TUBEMQ-558) | Adjust the LICENSE of the file header | Major |
| [TUBEMQ-559](https://issues.apache.org/jira/browse/TUBEMQ-559) | Update the LICENSE file according to the 0.8.0-RC2 review | Major |
| [TUBEMQ-560](https://issues.apache.org/jira/browse/TUBEMQ-560) | Remove unprepared modules | Major |
