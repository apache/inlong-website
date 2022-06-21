---
title: InLong v0.5.0
---

Use the links below to download the Apache InLong from one of our mirrors.

## InLong

| Date | Version| Comment | Downloads |
|:---:|:--:|:--:|:--:|
| August. 4th, 2020 | 0.5.0 | Source | [[SRC](https://archive.apache.org/dist/incubator/tubemq/0.5.0-incubating/apache-tubemq-0.5.0-incubating-src.tar.gz)]                 [[PGP](https://archive.apache.org/dist/incubator/tubemq/0.5.0-incubating/apache-tubemq-0.5.0-incubating-src.tar.gz.asc)]             [[SHA512](https://archive.apache.org/dist/incubator/tubemq/0.5.0-incubating/apache-tubemq-0.5.0-incubating-src.tar.gz.sha512)] |
| |                       | Client | [[TAR](https://archive.apache.org/dist/incubator/tubemq/0.5.0-incubating/apache-tubemq-client-0.5.0-incubating-bin.tar.gz)]          [[PGP](https://archive.apache.org/dist/incubator/tubemq/0.5.0-incubating/apache-tubemq-client-0.5.0-incubating-bin.tar.gz.asc)]      [[SHA512](https://archive.apache.org/dist/incubator/tubemq/0.5.0-incubating/apache-tubemq-client-0.5.0-incubating-bin.tar.gz.sha512)] |
| |                       | Server | [[TAR](https://archive.apache.org/dist/incubator/tubemq/0.5.0-incubating/apache-tubemq-server-0.5.0-incubating-bin.tar.gz)]          [[PGP](https://archive.apache.org/dist/incubator/tubemq/0.5.0-incubating/apache-tubemq-server-0.5.0-incubating-bin.tar.gz.asc)]      [[SHA512](https://archive.apache.org/dist/incubator/tubemq/0.5.0-incubating/apache-tubemq-server-0.5.0-incubating-bin.tar.gz.sha512)] |

### Release Integrity

You must [verify](https://www.apache.org/info/verification.html) the integrity of the downloaded files.
We provide OpenPGP signatures for every release file. This signature should be matched against the [KEYS](https://downloads.apache.org/incubator/inlong/KEYS) file which contains the OpenPGP keys of InLong's Release Managers.
We also provide <code>SHA-512</code> checksums for every release file. After you download the file, you should calculate a checksum for your download, and make sure it is the same as ours.

## Release Notes

### New Features
 - [[INLONG-122](https://issues.apache.org/jira/browse/INLONG-122)] Increase JAVA version collection of SDK environment
 - [[INLONG-163](https://issues.apache.org/jira/browse/INLONG-163)] Flume sink for TubeMQ
 - [[INLONG-197](https://issues.apache.org/jira/browse/INLONG-197)] Support TubeMQ connector for Apache Flink
 - [[INLONG-238](https://issues.apache.org/jira/browse/INLONG-238)] Support TubeMQ connector for Apache Spark Streaming
 - [[INLONG-239](https://issues.apache.org/jira/browse/INLONG-239)] support deployment on kubernetes

### IMPROVEMENTS:
 - [[INLONG-46](https://issues.apache.org/jira/browse/INLONG-46)] Correct some spelling issues
 - [[INLONG-53](https://issues.apache.org/jira/browse/INLONG-53)] fix some typos
 - [[INLONG-55](https://issues.apache.org/jira/browse/INLONG-55)] fix some typos
 - [[INLONG-57](https://issues.apache.org/jira/browse/INLONG-57)] fix some typos
 - [[INLONG-58](https://issues.apache.org/jira/browse/INLONG-58)] fix some typos
 - [[INLONG-60](https://issues.apache.org/jira/browse/INLONG-60)] Remove unnecessary synchronized & using IllegalArgumentException instead of IllegalStateException
 - [[INLONG-61](https://issues.apache.org/jira/browse/INLONG-61)] minor update & fix some typos
 - [[INLONG-64](https://issues.apache.org/jira/browse/INLONG-64)] minor update & fix some typos
 - [[INLONG-67](https://issues.apache.org/jira/browse/INLONG-67)] remove synchronized & fix some typos
 - [[INLONG-71](https://issues.apache.org/jira/browse/INLONG-71)] using IllegalArgumentException & fix some typos
 - [[INLONG-73](https://issues.apache.org/jira/browse/INLONG-73)] remove duplicate codes & some minor updates
 - [[INLONG-74](https://issues.apache.org/jira/browse/INLONG-74)] minor updates for DefaultBdbStoreService
 - [[INLONG-75](https://issues.apache.org/jira/browse/INLONG-75)] remove unused Logger
 - [[INLONG-76](https://issues.apache.org/jira/browse/INLONG-76)] rename the classes
 - [[INLONG-77](https://issues.apache.org/jira/browse/INLONG-77)] fix typo
 - [[INLONG-79](https://issues.apache.org/jira/browse/INLONG-79)] fix typo
 - [[INLONG-80](https://issues.apache.org/jira/browse/INLONG-80)] Fix some typos
 - [[INLONG-82](https://issues.apache.org/jira/browse/INLONG-82)] Fix some typos & update comments
 - [[INLONG-83](https://issues.apache.org/jira/browse/INLONG-83)] Fix some typos
 - [[INLONG-87](https://issues.apache.org/jira/browse/INLONG-87)] Minor updates
 - [[INLONG-89](https://issues.apache.org/jira/browse/INLONG-89)] Minor updates
 - [[INLONG-90](https://issues.apache.org/jira/browse/INLONG-90)] Remove unused codes in TubeBroker
 - [[INLONG-91](https://issues.apache.org/jira/browse/INLONG-91)] replace explicit type with `<>`
 - [[INLONG-93](https://issues.apache.org/jira/browse/INLONG-93)] Substitute the parameterized type for client module & missed server module
 - [[INLONG-94](https://issues.apache.org/jira/browse/INLONG-94)] Substitute the parameterized type for core module
 - [[INLONG-95](https://issues.apache.org/jira/browse/INLONG-95)] Substitute the parameterized type for server module
 - [[INLONG-96](https://issues.apache.org/jira/browse/INLONG-96)] Fix typo & use IllegalArgumentException
 - [[INLONG-98](https://issues.apache.org/jira/browse/INLONG-98)] Fix typo & Simplify 'instanceof' judgment
 - [[INLONG-100](https://issues.apache.org/jira/browse/INLONG-100)] Fix typos & remove unused codes
 - [[INLONG-101](https://issues.apache.org/jira/browse/INLONG-101)] Optimize code & Fix type
 - [[INLONG-103](https://issues.apache.org/jira/browse/INLONG-103)] Substitute Chinese comments with English
 - [[INLONG-108](https://issues.apache.org/jira/browse/INLONG-108)] About maven jdk version configuration problem
 - [[INLONG-127](https://issues.apache.org/jira/browse/INLONG-127)] Fixed a bug & minor changes
 - [[INLONG-128](https://issues.apache.org/jira/browse/INLONG-128)] Shorten the log clearup check cycle
 - [[INLONG-138](https://issues.apache.org/jira/browse/INLONG-138)] Optimize core module test case code
 - [[INLONG-141](https://issues.apache.org/jira/browse/INLONG-141)] Remove the requirement to provide localHostIP
 - [[INLONG-152](https://issues.apache.org/jira/browse/INLONG-152)] Modify the master.ini file's annotations
 - [[INLONG-154](https://issues.apache.org/jira/browse/INLONG-154)] Modify the wrong comment & Minor changes for example module
 - [[INLONG-155](https://issues.apache.org/jira/browse/INLONG-155)] Use enum class for consume position
 - [[INLONG-156](https://issues.apache.org/jira/browse/INLONG-156)] Update for README.md
 - [[INLONG-166](https://issues.apache.org/jira/browse/INLONG-166)] Hide `bdbStore` configs in master.ini
 - [[INLONG-167](https://issues.apache.org/jira/browse/INLONG-167)] Change to relative paths in default configs
 - [[INLONG-168](https://issues.apache.org/jira/browse/INLONG-168)] Example module: remove localhost IP configuration parameters
 - [[INLONG-170](https://issues.apache.org/jira/browse/INLONG-170)] improve build/deployment/configuration for quick start
 - [[INLONG-196](https://issues.apache.org/jira/browse/INLONG-196)] use log to print exception
 - [[INLONG-201](https://issues.apache.org/jira/browse/INLONG-201)] [Website] Adjust user guide & fix demo example
 - [[INLONG-202](https://issues.apache.org/jira/browse/INLONG-202)] Add protobuf protocol syntax declaration
 - [[INLONG-213](https://issues.apache.org/jira/browse/INLONG-213)] Optimize code & Minor changes
 - [[INLONG-216](https://issues.apache.org/jira/browse/INLONG-216)] use ThreadUtil.sleep replace Thread.sleep
 - [[INLONG-222](https://issues.apache.org/jira/browse/INLONG-222)] Optimize code: Unnecessary boxing/unboxing conversion
 - [[INLONG-224](https://issues.apache.org/jira/browse/INLONG-224)] Fixed: Unnecessary conversion to string inspection for server module
 - [[INLONG-226](https://issues.apache.org/jira/browse/INLONG-226)] Add Windows startup scripts
 - [[INLONG-227](https://issues.apache.org/jira/browse/INLONG-227)] remove build guide in docker-build readme
 - [[INLONG-232](https://issues.apache.org/jira/browse/INLONG-232)] TubeBroker#register2Master, reconnect and wait
 - [[INLONG-234](https://issues.apache.org/jira/browse/INLONG-234)] Add .asf.yaml to change notifications
 - [[INLONG-235](https://issues.apache.org/jira/browse/INLONG-235)] Add code coverage supporting for pull request created.
 - [[INLONG-237](https://issues.apache.org/jira/browse/INLONG-237)] add maven module build for docker image

### BUG FIXES:
 - [[INLONG-47](https://issues.apache.org/jira/browse/INLONG-47)] Fix some typos
 - [[INLONG-102](https://issues.apache.org/jira/browse/INLONG-102)] Fix question [INLONG-101] [Optimize code]
 - [[INLONG-121](https://issues.apache.org/jira/browse/INLONG-121)] Fix compilation alarm
 - [[INLONG-139](https://issues.apache.org/jira/browse/INLONG-139)] a bug in the equals method of the TubeClientConfig class
 - [[INLONG-157](https://issues.apache.org/jira/browse/INLONG-157)] Optimize Broker disk anomaly check
 - [[INLONG-158](https://issues.apache.org/jira/browse/INLONG-158)] nextWithAuthInfo2B status should be managed independently according to Broker
 - [[INLONG-159](https://issues.apache.org/jira/browse/INLONG-159)] Fix some typos
 - [[INLONG-165](https://issues.apache.org/jira/browse/INLONG-165)] Remove unnecessary fiiles
 - [[INLONG-205](https://issues.apache.org/jira/browse/INLONG-205)] Duplicate dependency of jetty in tuber-server pom file
 - [[INLONG-206](https://issues.apache.org/jira/browse/INLONG-206)] There are some residual files after executed unit tests
 - [[INLONG-210](https://issues.apache.org/jira/browse/INLONG-210)] Add log4j properties file for unit tests
 - [[INLONG-217](https://issues.apache.org/jira/browse/INLONG-217)] UPdate the je download path
 - [[INLONG-218](https://issues.apache.org/jira/browse/INLONG-218)] build failed: Too many files with unapproved license
 - [[INLONG-230](https://issues.apache.org/jira/browse/INLONG-230)] TubeMQ run mvn test failed with openjdk version 13.0.2
 - [[INLONG-236](https://issues.apache.org/jira/browse/INLONG-236)] Can't get dependencies from the maven repository
 - [[INLONG-253](https://issues.apache.org/jira/browse/INLONG-253)] tube-consumer fetch-worker cpu used too high
 - [[INLONG-254](https://issues.apache.org/jira/browse/INLONG-254)] support using different mapping port for standalone mode
 - [[INLONG-265](https://issues.apache.org/jira/browse/INLONG-265)] Unexpected broker disappearance in broker list after updating default broker metadata
  