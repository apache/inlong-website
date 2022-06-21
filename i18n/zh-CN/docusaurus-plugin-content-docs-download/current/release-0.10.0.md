---
title: InLong v0.10.0
---

使用以下链接下载 InLong。

## InLong

| 日期 | 版本| 备注 | 下载 |
|:---:|:--:|:--:|:--:|
| 2021-09-11 | 0.10.0 | Source | [[SRC](https://archive.apache.org/dist/incubator/inlong/0.10.0-incubating/apache-inlong-0.10.0-incubating-src.tar.gz)]                 [[ASC](https://archive.apache.org/dist/incubator/inlong/0.10.0-incubating/apache-inlong-0.10.0-incubating-src.tar.gz.asc)]             [[SHA512](https://archive.apache.org/dist/incubator/inlong/0.10.0-incubating/apache-inlong-0.10.0-incubating-src.tar.gz.sha512)] |

### 发布完整性

您必须 [验证](https://www.apache.org/info/verification.html) 下载文件的完整性。
我们为每个发布文件提供 OpenPGP 签名。此签名应与包含 InLong 发布经理的 OpenPGP 密钥的 [KEYS](https://downloads.apache.org/incubator/inlong/KEYS) 文件匹配。
我们还为每个发布文件提供 <code>SHA-512</code> 校验和。下载文件后，您应该计算下载的校验和，并确保它与我们的相同。

## 发版说明

### 改进:
| ISSUE  | Summary  |
| :---- | :------- |
| [INLONG-570](https://issues.apache.org/jira/browse/INLONG-570) | Optimizing the implementations of HTTP API for Master
| [INLONG-726](https://issues.apache.org/jira/browse/INLONG-726) | Optimize The Deployment For InLong
| [INLONG-732](https://issues.apache.org/jira/browse/INLONG-732) | Optimize the CI/CD workflow for build and integration test
| [INLONG-733](https://issues.apache.org/jira/browse/INLONG-733) | Unity the Manger-API/Manger-OpenAPI, and change Manager-API to Manager-Web
| [INLONG-744](https://issues.apache.org/jira/browse/INLONG-744) | Error log, should use log4j
| [INLONG-750](https://issues.apache.org/jira/browse/INLONG-750) | Add configuration descriptions for 'defEthName' in 'broker.ini'
| [INLONG-756](https://issues.apache.org/jira/browse/INLONG-756) | package start.sh script executable for agent
| [INLONG-768](https://issues.apache.org/jira/browse/INLONG-768) | add github pull request template
| [INLONG-789](https://issues.apache.org/jira/browse/INLONG-789) | make agent readme more friendly
| [INLONG-792](https://issues.apache.org/jira/browse/INLONG-792) | tubemanager add a cluster after configuration
| [INLONG-800](https://issues.apache.org/jira/browse/INLONG-800) | Fix codestyle of some comments and methods names.
| [INLONG-804](https://issues.apache.org/jira/browse/INLONG-804) | Optimize the ASF Configuration
| [INLONG-805](https://issues.apache.org/jira/browse/INLONG-805) | Migrate InLong Issues from JIRA to GitHub
| [INLONG-808](https://issues.apache.org/jira/browse/INLONG-808) | Missing dataproxy sdk readme
| [INLONG-809](https://issues.apache.org/jira/browse/INLONG-809) | dataproxy readme delete reference url
| [INLONG-1498](https://github.com/apache/incubator-inlong/issues/1498) |  ignore the files with versionsBackup suffix for the bumped version
| [INLONG-1487](https://github.com/apache/incubator-inlong/issues/1487) |  remove the user number limit  when create a new data stream
| [INLONG-1486](https://github.com/apache/incubator-inlong/issues/1486) |  [agent] update the document about configuring the dataprxy address
| [INLONG-1485](https://github.com/apache/incubator-inlong/issues/1485) |  [sort] add the guide documents for using Pulsar
| [INLONG-1484](https://github.com/apache/incubator-inlong/issues/1484) |  Bid and Tid is not well explained in agent and might cause send error
| [INLONG-1464](https://github.com/apache/incubator-inlong/issues/1464) |  Add code CheckStyle rules
| [INLONG-1459](https://github.com/apache/incubator-inlong/issues/1459) |  proxy address configuration is redundant for inlong-agent
| [INLONG-1457](https://github.com/apache/incubator-inlong/issues/1457) |  remove the user limit for creating a new data access
| [INLONG-1455](https://github.com/apache/incubator-inlong/issues/1455) |  add a script to publish docker images
| [INLONG-1443](https://github.com/apache/incubator-inlong/issues/1443) |   Provide management interface SDK
| [INLONG-1439](https://github.com/apache/incubator-inlong/issues/1439) |  Add the port legal check and remove the useless deleteWhen field
| [INLONG-1430](https://github.com/apache/incubator-inlong/issues/1430) |  Go SDK example
| [INLONG-1429](https://github.com/apache/incubator-inlong/issues/1429) |  update the asf config for inlong office website
| [INLONG-1427](https://github.com/apache/incubator-inlong/issues/1427) |  Go SDK return maxOffset and updateTime in ConsumerOffset
| [INLONG-1424](https://github.com/apache/incubator-inlong/issues/1424) |  change the format of the configuration file: make the yaml to properties
| [INLONG-1423](https://github.com/apache/incubator-inlong/issues/1423) |  modify the docker image of the inlong-manager module
| [INLONG-1417](https://github.com/apache/incubator-inlong/issues/1417) |  rename the distribution file for inlong
| [INLONG-1415](https://github.com/apache/incubator-inlong/issues/1415) |  [TubeMQ Docker] expose zookeeper port for other component usages
| [INLONG-1409](https://github.com/apache/incubator-inlong/issues/1409) |  Sort out the LICENSE information of the 3rd-party components that the DataProxy submodule depends on
| [INLONG-1407](https://github.com/apache/incubator-inlong/issues/1407) |  [DataProxy]Adjust the pom dependency of the DataProxy module
| [INLONG-1405](https://github.com/apache/incubator-inlong/issues/1405) |  too many issues mail at dev@inlong mailbox

### bug修复:
| ISSUE  | Summary  |
| :---- | :------- |
| [INLONG-751](https://issues.apache.org/jira/browse/INLONG-751) | InLong Manager start up error
| [INLONG-776](https://issues.apache.org/jira/browse/INLONG-776) | fix the version error for tubemq cpp client docker image
| [INLONG-777](https://issues.apache.org/jira/browse/INLONG-777) | InLong Manager new data stream error
| [INLONG-782](https://issues.apache.org/jira/browse/INLONG-782) | Optimize The PULL_REQUEST_TEMPLATE
| [INLONG-787](https://issues.apache.org/jira/browse/INLONG-787) | The actions "reviewdog/action-setup" is not allowed to be used
| [INLONG-797](https://issues.apache.org/jira/browse/INLONG-797) | the document for deployment DataProxy is not complete
| [INLONG-799](https://issues.apache.org/jira/browse/INLONG-799) | can not find common.properties for dataproxy
| [INLONG-1488](https://github.com/apache/incubator-inlong/issues/1488) |  there are still some chinese characters for website
| [INLONG-1475](https://github.com/apache/incubator-inlong/issues/1475) |  Tube manager compile ch.qos.logback with error
| [INLONG-1474](https://github.com/apache/incubator-inlong/issues/1474) |  the interface of get data proxy configurations got abnormal status result
| [INLONG-1470](https://github.com/apache/incubator-inlong/issues/1470) |  Java.util.ConcurrentModificationException error when rebalance
| [INLONG-1468](https://github.com/apache/incubator-inlong/issues/1468) |  The update interval of dataproxy is quite long and may cause produce error when config is not updated
| [INLONG-1466](https://github.com/apache/incubator-inlong/issues/1466) |  get snappy error when the agent collecting data
| [INLONG-1462](https://github.com/apache/incubator-inlong/issues/1462) |  dataproxy can not create configuration properties successfully in the docker container
| [INLONG-1458](https://github.com/apache/incubator-inlong/issues/1458) |  The http port in agent readme should be 8008 to be consistent with the code
| [INLONG-1453](https://github.com/apache/incubator-inlong/issues/1453) |  agent connect dataproxy fail when using docker-compose
| [INLONG-1448](https://github.com/apache/incubator-inlong/issues/1448) |  The Manager throws an exception when creating a business
| [INLONG-1447](https://github.com/apache/incubator-inlong/issues/1447) |  Fix Group Control API logic bug
| [INLONG-1444](https://github.com/apache/incubator-inlong/issues/1444) |  Fix Web API multiple field search logic bug
| [INLONG-1441](https://github.com/apache/incubator-inlong/issues/1441) |  Repair Broker configuration API bugs
| [INLONG-1436](https://github.com/apache/incubator-inlong/issues/1436) |  [CI] The checkstyle workflow is redundant
| [INLONG-1432](https://github.com/apache/incubator-inlong/issues/1432) |  The manager url of agent and dataproxy need to be updated since manager merged openapi and api into one module
| [INLONG-1403](https://github.com/apache/incubator-inlong/issues/1403) |  fix some error in dataproxy-sdk readme

### 子任务:
| ISSUE  | Summary  |
| :---- | :------- |
| [INLONG-576](https://issues.apache.org/jira/browse/INLONG-576) | Build metadata entity classes
| [INLONG-578](https://issues.apache.org/jira/browse/INLONG-578) | Build implementation classes based on BDB storage
| [INLONG-579](https://issues.apache.org/jira/browse/INLONG-579) | Add structure mapping of BDB and metadata entity classes
| [INLONG-580](https://issues.apache.org/jira/browse/INLONG-580) | Build active and standby keep-alive services
| [INLONG-581](https://issues.apache.org/jira/browse/INLONG-581) | Add data cache in BDB metadata Mapper implementations
| [INLONG-582](https://issues.apache.org/jira/browse/INLONG-582) | Adjust the business logic related to the BdbClusterSettingEntity class
| [INLONG-583](https://issues.apache.org/jira/browse/INLONG-583) | Adjust BrokerConfManager class implementation
| [INLONG-584](https://issues.apache.org/jira/browse/INLONG-584) | Adjust WebMasterInfoHandler class implementation
| [INLONG-593](https://issues.apache.org/jira/browse/INLONG-593) | Add WebGroupConsumeCtrlHandler class implementation
| [INLONG-595](https://issues.apache.org/jira/browse/INLONG-595) | Add WebBrokerConfHandler class implementation
| [INLONG-596](https://issues.apache.org/jira/browse/INLONG-596) | Add WebTopicConfHandler class implementation
| [INLONG-597](https://issues.apache.org/jira/browse/INLONG-597) | Adjust WebTopicCtrlHandler class implementation
| [INLONG-598](https://issues.apache.org/jira/browse/INLONG-598) | Adjust WebTopicCtrlHandler class implementation
| [INLONG-599](https://issues.apache.org/jira/browse/INLONG-599) | Adjust WebParameterUtils.java's static functions
| [INLONG-601](https://issues.apache.org/jira/browse/INLONG-601) | Adjust WebBrokerDefConfHandler class implementation
| [INLONG-602](https://issues.apache.org/jira/browse/INLONG-602) | Add replacement processing after metadata changes
| [INLONG-611](https://issues.apache.org/jira/browse/INLONG-611) | Add FSM for broker configure manage
| [INLONG-617](https://issues.apache.org/jira/browse/INLONG-617) | Add unit tests for WebParameterUtils
| [INLONG-618](https://issues.apache.org/jira/browse/INLONG-618) | Add unit tests for metastore.dao.entity.*
| [INLONG-625](https://issues.apache.org/jira/browse/INLONG-625) | Add unit tests for metamanage.metastore.impl.*
| [INLONG-626](https://issues.apache.org/jira/browse/INLONG-626) | Fix broker and topic confiugre implement bugs
| [INLONG-707](https://issues.apache.org/jira/browse/INLONG-707) | Bumped version to 0.10.0-SNAPSHOT
| [INLONG-740](https://issues.apache.org/jira/browse/INLONG-740) | Merge the changes in INLONG-739 to master and delete the temporary branch
| [INLONG-755](https://issues.apache.org/jira/browse/INLONG-755) | Go SDK Consumer Result
| [INLONG-757](https://issues.apache.org/jira/browse/INLONG-757) | fix the artifactId of dataproxy
| [INLONG-758](https://issues.apache.org/jira/browse/INLONG-758) | remove redundant baseDirectory for manager output files
| [INLONG-759](https://issues.apache.org/jira/browse/INLONG-759) | fix assembly issue for TubeMQ manager
| [INLONG-760](https://issues.apache.org/jira/browse/INLONG-760) | standardize the directories name for the sort sub-module
| [INLONG-761](https://issues.apache.org/jira/browse/INLONG-761) | unify all modules target files to a singe directory
| [INLONG-762](https://issues.apache.org/jira/browse/INLONG-762) | refactor the deployment document
| [INLONG-763](https://issues.apache.org/jira/browse/INLONG-763) | make the inlong-websit be a maven module of InLong project
| [INLONG-764](https://issues.apache.org/jira/browse/INLONG-764) | Fix Go SDK RPC Request bug
| [INLONG-766](https://issues.apache.org/jira/browse/INLONG-766) | Fix Go SDK Codec Bug
| [INLONG-770](https://issues.apache.org/jira/browse/INLONG-770) | update the readme document
| [INLONG-771](https://issues.apache.org/jira/browse/INLONG-771) | Fix Go SDK Authorization Bug
| [INLONG-773](https://issues.apache.org/jira/browse/INLONG-773) | add manager docker image
| [INLONG-774](https://issues.apache.org/jira/browse/INLONG-774) | update TubeMQ docker images to InLong repo
| [INLONG-778](https://issues.apache.org/jira/browse/INLONG-778) | Fix Go SDK Consumer Bug
| [INLONG-779](https://issues.apache.org/jira/browse/INLONG-779) | update tubemq manager docker image
| [INLONG-781](https://issues.apache.org/jira/browse/INLONG-781) | add inlong agent docker image support
| [INLONG-784](https://issues.apache.org/jira/browse/INLONG-784) | Fix Go SDK Heartbeat Bug
| [INLONG-785](https://issues.apache.org/jira/browse/INLONG-785) | Fix Go SDK Metadata Bug
| [INLONG-786](https://issues.apache.org/jira/browse/INLONG-786) | add dataproxy docker image
| [INLONG-788](https://issues.apache.org/jira/browse/INLONG-788) | Fix Go SDK Remote Cache Bug
| [INLONG-791](https://issues.apache.org/jira/browse/INLONG-791) | Go SDK Support multiple topic address
| [INLONG-793](https://issues.apache.org/jira/browse/INLONG-793) | Fix Some Corner Case in Go SDK
| [INLONG-794](https://issues.apache.org/jira/browse/INLONG-794) | add website docker image
| [INLONG-803](https://issues.apache.org/jira/browse/INLONG-803) | add docker requirement for building InLong
| [INLONG-806](https://issues.apache.org/jira/browse/INLONG-806) | open GitHub Issue For InLong
| [INLONG-807](https://issues.apache.org/jira/browse/INLONG-807) | migrate issue history to inlong
| [INLONG-1491](https://github.com/apache/incubator-inlong/issues/1491) |  Add 0.10.0 version release modification to CHANGES.md
| [INLONG-1492](https://github.com/apache/incubator-inlong/issues/1492) |  Bumped version to 0.11.0-incubating-SNAPSHOT
| [INLONG-1493](https://github.com/apache/incubator-inlong/issues/1493) |  Modify download&release notes for 0.10.0
| [INLONG-1494](https://github.com/apache/incubator-inlong/issues/1494) |  Adjust the version information of all pom.xml to 0.10.0-incubating
| [INLONG-1495](https://github.com/apache/incubator-inlong/issues/1495) |  Update Office website content for release 0.10.0
| [INLONG-1496](https://github.com/apache/incubator-inlong/issues/1496) |  Release InLong 0.10.0
| [INLONG-1497](https://github.com/apache/incubator-inlong/issues/1497) |  create a 0.10.0 branch to release
| [INLONG-1502](https://github.com/apache/incubator-inlong/issues/1502) |  publish all 0.10.0 images to docker hub