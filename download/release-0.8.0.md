---
title: InLong v0.8.0
---

Use the links below to download the Apache InLong from one of our mirrors.

## InLong

| Date | Version| Comment | Downloads |
|:---:|:--:|:--:|:--:|
| March. 4th, 2021 | 0.8.0 | Source | [[SRC](https://archive.apache.org/dist/incubator/tubemq/0.8.0-incubating/apache-tubemq-0.8.0-incubating-src.tar.gz)]                 [[PGP](https://archive.apache.org/dist/incubator/tubemq/0.8.0-incubating/apache-tubemq-0.8.0-incubating-src.tar.gz.asc)]             [[SHA512](https://archive.apache.org/dist/incubator/tubemq/0.8.0-incubating/apache-tubemq-0.8.0-incubating-src.tar.gz.sha512)] |
| |                       | Client | [[TAR](https://archive.apache.org/dist/incubator/tubemq/0.8.0-incubating/apache-tubemq-client-0.8.0-incubating-bin.tar.gz)]          [[PGP](https://archive.apache.org/dist/incubator/tubemq/0.8.0-incubating/apache-tubemq-client-0.8.0-incubating-bin.tar.gz.asc)]      [[SHA512](https://archive.apache.org/dist/incubator/tubemq/0.8.0-incubating/apache-tubemq-client-0.8.0-incubating-bin.tar.gz.sha512)] |
| |                       | Server | [[TAR](https://archive.apache.org/dist/incubator/tubemq/0.8.0-incubating/apache-tubemq-server-0.8.0-incubating-bin.tar.gz)]          [[PGP](https://archive.apache.org/dist/incubator/tubemq/0.8.0-incubating/apache-tubemq-server-0.8.0-incubating-bin.tar.gz.asc)]      [[SHA512](https://archive.apache.org/dist/incubator/tubemq/0.8.0-incubating/apache-tubemq-server-0.8.0-incubating-bin.tar.gz.sha512)] |

### Release Integrity

You must [verify](https://www.apache.org/info/verification.html) the integrity of the downloaded files.
We provide OpenPGP signatures for every release file. This signature should be matched against the [KEYS](https://downloads.apache.org/incubator/inlong/KEYS) file which contains the OpenPGP keys of InLong's Release Managers.
We also provide <code>SHA-512</code> checksums for every release file. After you download the file, you should calculate a checksum for your download, and make sure it is the same as ours.

## Release Notes

### IMPROVEMENTS:
| JIRA  | Summary  | Priority |
| :---- | :------- | :------- |
| [INLONG-430](https://issues.apache.org/jira/browse/INLONG-430) | Optimizing the implementation of HTTP API for broke  | Major |
| [INLONG-445](https://issues.apache.org/jira/browse/INLONG-445) | Adjust the status check default sleep interval of pullConsumeReadyChkSliceMs  | Major |
| [INLONG-448](https://issues.apache.org/jira/browse/INLONG-448) | Add Committer and PPMC operation process  | Major |
| [INLONG-449](https://issues.apache.org/jira/browse/INLONG-449) | Adjust Example implementation  | Major |
| [INLONG-452](https://issues.apache.org/jira/browse/INLONG-452) | Optimize rebalance performance | Major |
| [INLONG-467](https://issues.apache.org/jira/browse/INLONG-467) | Add WEB APIs of Master and Broker | Major |
| [INLONG-489](https://issues.apache.org/jira/browse/INLONG-489) | Add the maximum message length parameter setting | Major |
| [INLONG-495](https://issues.apache.org/jira/browse/INLONG-495) | Code implementation adjustment based on SpotBugs check | Major |
| [INLONG-511](https://issues.apache.org/jira/browse/INLONG-511) | Replace the conditional operator (?:) with mid()  | Major |
| [INLONG-512](https://issues.apache.org/jira/browse/INLONG-512) | Add package length control based on Topic  | Major |
| [INLONG-515](https://issues.apache.org/jira/browse/INLONG-515) | Add cluster Topic view web api  | Major |

### BUG FIXES:
| JIRA  | Summary  | Priority |
| :---- | :------- | :------- |
| [INLONG-437](https://issues.apache.org/jira/browse/INLONG-437) | Fix tubemq table source sink factory instance creating problem | Major |
| [INLONG-441](https://issues.apache.org/jira/browse/INLONG-441) | An error occurred when using the Tubemq class to create a sink table | Major |
| [INLONG-442](https://issues.apache.org/jira/browse/INLONG-442) | Modifying the jvm parameters when the broker starts does not take effect  | Major    |
| [INLONG-443](https://issues.apache.org/jira/browse/INLONG-443) | TubemqSourceFunction class prints too many logs problem | Major |
| [INLONG-446](https://issues.apache.org/jira/browse/INLONG-446) | Small bugs fix that do not affect the main logics | Major |
| [INLONG-450](https://issues.apache.org/jira/browse/INLONG-450) | TubeClientException: Generate producer id failed  | Major |
| [INLONG-453](https://issues.apache.org/jira/browse/INLONG-453) | TubemqSourceFunction class prints too many logs problem | Major |
| [INLONG-506](https://issues.apache.org/jira/browse/INLONG-506) | cmakelist error | Major |
| [INLONG-510](https://issues.apache.org/jira/browse/INLONG-510) | Found a bug in MessageProducerExample class | Major |
| [INLONG-518](https://issues.apache.org/jira/browse/INLONG-518) | fix parameter pass error | Major |
| [INLONG-526](https://issues.apache.org/jira/browse/INLONG-526) | Adjust the packaging script and version check list, remove the "-WIP" tag | Major |
| [INLONG-555](https://issues.apache.org/jira/browse/INLONG-555) | short session data can only be written to a specific partition | Major |
| [INLONG-556](https://issues.apache.org/jira/browse/INLONG-556) | Index value is bigger than the actual number of records | Low |


### TASK:
| JIRA | Summary | Priority |
|:---- |:---- | :--- |
| [INLONG-505](https://issues.apache.org/jira/browse/INLONG-505) | Remove the "WIP" label of the DISCLAIMER file  | Major |
| [INLONG-543](https://issues.apache.org/jira/browse/INLONG-543) | Modify the LICENSE statement of multiple files and others  | Major |
| [INLONG-557](https://issues.apache.org/jira/browse/INLONG-557) | Handle the issues mentioned in the 0.8.0-RC2 review  | Major |
| [INLONG-562](https://issues.apache.org/jira/browse/INLONG-562) | Update project contents according to the 0.8.0-RC3 review  | Major |

### SUB-TASK:
| JIRA  | Summary  | Priority |
| :---- | :------- | :------- |
| [INLONG-428](https://issues.apache.org/jira/browse/INLONG-433) | Bumped version to 0.8.0-SNAPSHOT | Major |
| [INLONG-433](https://issues.apache.org/jira/browse/INLONG-433) | add tubemq perf-consumer/producer scripts | Major |
| [INLONG-434](https://issues.apache.org/jira/browse/INLONG-434) | Adjust Broker API mapping | Major |
| [INLONG-435](https://issues.apache.org/jira/browse/INLONG-435) | Create Web field Mapping | Major |
| [INLONG-436](https://issues.apache.org/jira/browse/INLONG-436) | Adjust Broker's HTTP API implementation | Major |
| [INLONG-439](https://issues.apache.org/jira/browse/INLONG-439) | Add Cli field Scheme definition | Major |
| [INLONG-440](https://issues.apache.org/jira/browse/INLONG-440) | Add feature package tube-manager to zip  | Major |
| [INLONG-444](https://issues.apache.org/jira/browse/INLONG-444) | Add consume and produce Cli commands | Major |
| [INLONG-447](https://issues.apache.org/jira/browse/INLONG-447) | Add Broker-Admin Cli | Major |
| [INLONG-451](https://issues.apache.org/jira/browse/INLONG-451) | Replace ConsumeTupleInfo with Tuple2  | Major    |
| [INLONG-457](https://issues.apache.org/jira/browse/INLONG-457) | There is no need to return StringBuilder in Master.java | Major |
| [INLONG-463](https://issues.apache.org/jira/browse/INLONG-463) | Adjust Master rebalance process implementation  | Major |
| [INLONG-464](https://issues.apache.org/jira/browse/INLONG-464) | Add parameter rebalanceParallel in master.ini | Major |
| [INLONG-470](https://issues.apache.org/jira/browse/INLONG-470) | Add query API of TopicName and BrokerId collection  | Major |
| [INLONG-471](https://issues.apache.org/jira/browse/INLONG-471) | Add query API Introduction of TopicName and BrokerId collection | Major |
| [INLONG-472](https://issues.apache.org/jira/browse/INLONG-472) | Adjust Broker's AbstractWebHandler class implementation  | Major |
| [INLONG-475](https://issues.apache.org/jira/browse/INLONG-475) | add the offset clone api of the consume group  | Major |
| [INLONG-482](https://issues.apache.org/jira/browse/INLONG-482) | Add offset query api  | Major |
| [INLONG-484](https://issues.apache.org/jira/browse/INLONG-484) | Add query API for topic publication information  | Major |
| [INLONG-485](https://issues.apache.org/jira/browse/INLONG-485) | Add the batch setting API of consume group offset  | Major |
| [INLONG-486](https://issues.apache.org/jira/browse/INLONG-486) | Add the delete API of consumer group offset  | Major |
| [INLONG-494](https://issues.apache.org/jira/browse/INLONG-494) | Update API interface instruction document | Major |
| [INLONG-499](https://issues.apache.org/jira/browse/INLONG-499) | Add configure store  | Major |
| [INLONG-500](https://issues.apache.org/jira/browse/INLONG-500) | Add setting operate API  | Major |
| [INLONG-501](https://issues.apache.org/jira/browse/INLONG-501) | Adjust max message size check logic  | Major |
| [INLONG-502](https://issues.apache.org/jira/browse/INLONG-502) | Add setting API interface document  | Major |
| [INLONG-504](https://issues.apache.org/jira/browse/INLONG-504) | Adjust the WebMethodMapper class interfaces  | Major |
| [INLONG-508](https://issues.apache.org/jira/browse/INLONG-508) | Optimize Broker's PB parameter check processing logic  | Major |
| [INLONG-509](https://issues.apache.org/jira/browse/INLONG-509) | Adjust the packet length check when data is loaded  | Major |
| [INLONG-522](https://issues.apache.org/jira/browse/INLONG-522) | Add admin_query_cluster_topic_view API document  | Major |
| [INLONG-544](https://issues.apache.org/jira/browse/INLONG-544) | Adjust the LICENSE statement in the client.conf files of Python and C/C++ SDK | Major |
| [INLONG-546](https://issues.apache.org/jira/browse/INLONG-546) | Restore the original license header of the referenced external source files | Major |
| [INLONG-547](https://issues.apache.org/jira/browse/INLONG-547) | Recode the implementation of the *Startup.java classes in the Tool package | Major |
| [INLONG-548](https://issues.apache.org/jira/browse/INLONG-548) | Handle the LICENSE authorization of font files in the resources | Major |
| [INLONG-549](https://issues.apache.org/jira/browse/INLONG-549) | Handling the problem of compilation failure | Major |
| [INLONG-550](https://issues.apache.org/jira/browse/INLONG-550) | Adjust LICENSE file content | Major |
| [INLONG-551](https://issues.apache.org/jira/browse/INLONG-551) | Adjust NOTICE file content | Major |
| [INLONG-558](https://issues.apache.org/jira/browse/INLONG-558) | Adjust the LICENSE of the file header | Major |
| [INLONG-559](https://issues.apache.org/jira/browse/INLONG-559) | Update the LICENSE file according to the 0.8.0-RC2 review | Major |
| [INLONG-560](https://issues.apache.org/jira/browse/INLONG-560) | Remove unprepared modules | Major |