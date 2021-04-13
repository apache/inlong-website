---
title: 下载 - Apache inlong
---

# 下载inlong
  使用以下镜像下载inlong

## inlong
| 日期 | 版本| 备注 | 下载 |
|:---:|:--:|:--:|:--:|
| 2020-08-04 | 0.5.0 | Source | [[SRC](http://www.apache.org/dyn/closer.lua/incubator/inlong/0.5.0-incubating/apache-inlong-0.5.0-incubating-src.tar.gz)]                 [[PGP](https://downloads.apache.org/incubator/inlong/0.5.0-incubating/apache-inlong-0.5.0-incubating-src.tar.gz.asc)]             [[SHA512](https://downloads.apache.org/incubator/inlong/0.5.0-incubating/apache-inlong-0.5.0-incubating-src.tar.gz.sha512)] |
| |                       | Client | [[TAR](http://www.apache.org/dyn/closer.lua/incubator/inlong/0.5.0-incubating/apache-inlong-client-0.5.0-incubating-bin.tar.gz)]          [[PGP](https://downloads.apache.org/incubator/inlong/0.5.0-incubating/apache-inlong-client-0.5.0-incubating-bin.tar.gz.asc)]      [[SHA512](https://downloads.apache.org/incubator/inlong/0.5.0-incubating/apache-inlong-client-0.5.0-incubating-bin.tar.gz.sha512)] |
| |                       | Server | [[TAR](http://www.apache.org/dyn/closer.lua/incubator/inlong/0.5.0-incubating/apache-inlong-server-0.5.0-incubating-bin.tar.gz)]          [[PGP](https://downloads.apache.org/incubator/inlong/0.5.0-incubating/apache-inlong-server-0.5.0-incubating-bin.tar.gz.asc)]      [[SHA512](https://downloads.apache.org/incubator/inlong/0.5.0-incubating/apache-inlong-server-0.5.0-incubating-bin.tar.gz.sha512)] |


## 发版说明

### 新特性
 - [[inlong-122](https://issues.apache.org/jira/browse/inlong-122)] Increase JAVA version collection of SDK environment
 - [[inlong-163](https://issues.apache.org/jira/browse/inlong-163)] Flume sink for inlong
 - [[inlong-197](https://issues.apache.org/jira/browse/inlong-197)] Support inlong connector for Apache Flink
 - [[inlong-238](https://issues.apache.org/jira/browse/inlong-238)] Support inlong connector for Apache Spark Streaming
 - [[inlong-239](https://issues.apache.org/jira/browse/inlong-239)] support deployment on kubernetes
 
### 改进
 - [[inlong-46](https://issues.apache.org/jira/browse/inlong-46)] Correct some spelling issues
 - [[inlong-53](https://issues.apache.org/jira/browse/inlong-53)] fix some typos
 - [[inlong-55](https://issues.apache.org/jira/browse/inlong-55)] fix some typos
 - [[inlong-57](https://issues.apache.org/jira/browse/inlong-57)] fix some typos
 - [[inlong-58](https://issues.apache.org/jira/browse/inlong-58)] fix some typos
 - [[inlong-60](https://issues.apache.org/jira/browse/inlong-60)] Remove unnecessary synchronized & using IllegalArgumentException instead of IllegalStateException
 - [[inlong-61](https://issues.apache.org/jira/browse/inlong-61)] minor update & fix some typos
 - [[inlong-64](https://issues.apache.org/jira/browse/inlong-64)] minor update & fix some typos
 - [[inlong-67](https://issues.apache.org/jira/browse/inlong-67)] remove synchronized & fix some typos
 - [[inlong-71](https://issues.apache.org/jira/browse/inlong-71)] using IllegalArgumentException & fix some typos
 - [[inlong-73](https://issues.apache.org/jira/browse/inlong-73)] remove duplicate codes & some minor updates
 - [[inlong-74](https://issues.apache.org/jira/browse/inlong-74)] minor updates for DefaultBdbStoreService
 - [[inlong-75](https://issues.apache.org/jira/browse/inlong-75)] remove unused Logger
 - [[inlong-76](https://issues.apache.org/jira/browse/inlong-76)] rename the classes
 - [[inlong-77](https://issues.apache.org/jira/browse/inlong-77)] fix typo
 - [[inlong-79](https://issues.apache.org/jira/browse/inlong-79)] fix typo
 - [[inlong-80](https://issues.apache.org/jira/browse/inlong-80)] Fix some typos
 - [[inlong-82](https://issues.apache.org/jira/browse/inlong-82)] Fix some typos & update comments
 - [[inlong-83](https://issues.apache.org/jira/browse/inlong-83)] Fix some typos
 - [[inlong-87](https://issues.apache.org/jira/browse/inlong-87)] Minor updates
 - [[inlong-89](https://issues.apache.org/jira/browse/inlong-89)] Minor updates
 - [[inlong-90](https://issues.apache.org/jira/browse/inlong-90)] Remove unused codes in TubeBroker
 - [[inlong-91](https://issues.apache.org/jira/browse/inlong-91)] replace explicit type with <>
 - [[inlong-93](https://issues.apache.org/jira/browse/inlong-93)] Substitute the parameterized type for client module & missed server module
 - [[inlong-94](https://issues.apache.org/jira/browse/inlong-94)] Substitute the parameterized type for core module
 - [[inlong-95](https://issues.apache.org/jira/browse/inlong-95)] Substitute the parameterized type for server module
 - [[inlong-96](https://issues.apache.org/jira/browse/inlong-96)] Fix typo & use IllegalArgumentException
 - [[inlong-98](https://issues.apache.org/jira/browse/inlong-98)] Fix typo & Simplify 'instanceof' judgment
 - [[inlong-100](https://issues.apache.org/jira/browse/inlong-100)] Fix typos & remove unused codes
 - [[inlong-101](https://issues.apache.org/jira/browse/inlong-101)] Optimize code & Fix type
 - [[inlong-103](https://issues.apache.org/jira/browse/inlong-103)] Substitute Chinese comments with English
 - [[inlong-108](https://issues.apache.org/jira/browse/inlong-108)] About maven jdk version configuration problem
 - [[inlong-127](https://issues.apache.org/jira/browse/inlong-127)] Fixed a bug & minor changes
 - [[inlong-128](https://issues.apache.org/jira/browse/inlong-128)] Shorten the log clearup check cycle
 - [[inlong-138](https://issues.apache.org/jira/browse/inlong-138)] Optimize core module test case code
 - [[inlong-141](https://issues.apache.org/jira/browse/inlong-141)] Remove the requirement to provide localHostIP
 - [[inlong-152](https://issues.apache.org/jira/browse/inlong-152)] Modify the master.ini file's annotations
 - [[inlong-154](https://issues.apache.org/jira/browse/inlong-154)] Modify the wrong comment & Minor changes for example module
 - [[inlong-155](https://issues.apache.org/jira/browse/inlong-155)] Use enum class for consume position
 - [[inlong-156](https://issues.apache.org/jira/browse/inlong-156)] Update for README.md
 - [[inlong-166](https://issues.apache.org/jira/browse/inlong-166)] Hide `bdbStore` configs in master.ini
 - [[inlong-167](https://issues.apache.org/jira/browse/inlong-167)] Change to relative paths in default configs
 - [[inlong-168](https://issues.apache.org/jira/browse/inlong-168)] Example module: remove localhost IP configuration parameters
 - [[inlong-170](https://issues.apache.org/jira/browse/inlong-170)] improve build/deployment/configuration for quick start
 - [[inlong-196](https://issues.apache.org/jira/browse/inlong-196)] use log to print exception
 - [[inlong-201](https://issues.apache.org/jira/browse/inlong-201)] [Website] Adjust user guide & fix demo example
 - [[inlong-202](https://issues.apache.org/jira/browse/inlong-202)] Add protobuf protocol syntax declaration
 - [[inlong-213](https://issues.apache.org/jira/browse/inlong-213)] Optimize code & Minor changes
 - [[inlong-216](https://issues.apache.org/jira/browse/inlong-216)] use ThreadUtil.sleep replace Thread.sleep
 - [[inlong-222](https://issues.apache.org/jira/browse/inlong-222)] Optimize code: Unnecessary boxing/unboxing conversion
 - [[inlong-224](https://issues.apache.org/jira/browse/inlong-224)] Fixed: Unnecessary conversion to string inspection for server module
 - [[inlong-226](https://issues.apache.org/jira/browse/inlong-226)] Add Windows startup scripts
 - [[inlong-227](https://issues.apache.org/jira/browse/inlong-227)] remove build guide in docker-build readme
 - [[inlong-232](https://issues.apache.org/jira/browse/inlong-232)] TubeBroker#register2Master, reconnect and wait
 - [[inlong-234](https://issues.apache.org/jira/browse/inlong-234)] Add .asf.yaml to change notifications
 - [[inlong-235](https://issues.apache.org/jira/browse/inlong-235)] Add code coverage supporting for pull request created.
 - [[inlong-237](https://issues.apache.org/jira/browse/inlong-237)] add maven module build for docker image
 
### Bug修复
 - [[inlong-47](https://issues.apache.org/jira/browse/inlong-47)] Fix some typos
 - [[inlong-102](https://issues.apache.org/jira/browse/inlong-102)] Fix question [inlong-101] [Optimize code]
 - [[inlong-121](https://issues.apache.org/jira/browse/inlong-121)] Fix compilation alarm
 - [[inlong-139](https://issues.apache.org/jira/browse/inlong-139)] a bug in the equals method of the TubeClientConfig class
 - [[inlong-157](https://issues.apache.org/jira/browse/inlong-157)] Optimize Broker disk anomaly check
 - [[inlong-158](https://issues.apache.org/jira/browse/inlong-158)] nextWithAuthInfo2B status should be managed independently according to Broker
 - [[inlong-159](https://issues.apache.org/jira/browse/inlong-159)] Fix some typos
 - [[inlong-165](https://issues.apache.org/jira/browse/inlong-165)] Remove unnecessary fiiles
 - [[inlong-205](https://issues.apache.org/jira/browse/inlong-205)] Duplicate dependency of jetty in tuber-server pom file
 - [[inlong-206](https://issues.apache.org/jira/browse/inlong-206)] There are some residual files after executed unit tests
 - [[inlong-210](https://issues.apache.org/jira/browse/inlong-210)] Add log4j properties file for unit tests
 - [[inlong-217](https://issues.apache.org/jira/browse/inlong-217)] UPdate the je download path
 - [[inlong-218](https://issues.apache.org/jira/browse/inlong-218)] build failed: Too many files with unapproved license
 - [[inlong-230](https://issues.apache.org/jira/browse/inlong-230)] inlong run mvn test failed with openjdk version 13.0.2
 - [[inlong-236](https://issues.apache.org/jira/browse/inlong-236)] Can't get dependencies from the maven repository
 - [[inlong-253](https://issues.apache.org/jira/browse/inlong-253)] tube-consumer fetch-worker cpu used too high
 - [[inlong-254](https://issues.apache.org/jira/browse/inlong-254)] support using different mapping port for standalone mode
 - [[inlong-265](https://issues.apache.org/jira/browse/inlong-265)] Unexpected broker disappearance in broker list after updating default broker metadata
