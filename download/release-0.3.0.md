---
title: InLong v0.3.0
---

Use the links below to download the Apache InLong from one of our mirrors.

## InLong

| Date | Version| Comment | Downloads |
|:---:|:--:|:--:|:--:|
| June. 6th, 2020 | 0.3.0 | Source | [[SRC](https://archive.apache.org/dist/incubator/tubemq/0.3.0-incubating/apache-tubemq-0.3.0-incubating-src.tar.gz)]                 [[PGP](https://archive.apache.org/dist/incubator/tubemq/0.3.0-incubating/apache-tubemq-0.3.0-incubating-src.tar.gz.asc)]             [[SHA512](https://archive.apache.org/dist/incubator/tubemq/0.3.0-incubating/apache-tubemq-0.3.0-incubating-src.tar.gz.sha512)] |
| |                       | Client | [[TAR](https://archive.apache.org/dist/incubator/tubemq/0.3.0-incubating/apache-tubemq-client-0.3.0-incubating-bin.tar.gz)]          [[PGP](https://archive.apache.org/dist/incubator/tubemq/0.3.0-incubating/apache-tubemq-client-0.3.0-incubating-bin.tar.gz.asc)]      [[SHA512](https://archive.apache.org/dist/incubator/tubemq/0.3.0-incubating/apache-tubemq-client-0.3.0-incubating-bin.tar.gz.sha512)] |
| |                       | Server | [[TAR](https://archive.apache.org/dist/incubator/tubemq/0.3.0-incubating/apache-tubemq-server-0.3.0-incubating-bin.tar.gz)]          [[PGP](https://archive.apache.org/dist/incubator/tubemq/0.3.0-incubating/apache-tubemq-server-0.3.0-incubating-bin.tar.gz.asc)]      [[SHA512](https://archive.apache.org/dist/incubator/tubemq/0.3.0-incubating/apache-tubemq-server-0.3.0-incubating-bin.tar.gz.sha512)] |

### Release Integrity

You must [verify](https://www.apache.org/info/verification.html) the integrity of the downloaded files.
We provide OpenPGP signatures for every release file. This signature should be matched against the [KEYS](https://downloads.apache.org/incubator/inlong/KEYS) file which contains the OpenPGP keys of InLong's Release Managers.
We also provide <code>SHA-512</code> checksums for every release file. After you download the file, you should calculate a checksum for your download, and make sure it is the same as ours.

## Release Notes

### New Features
 - [[INLONG-42](https://issues.apache.org/jira/browse/INLONG-42)] Add peer information about message received Major New Feature
 
### Improvements
 - [[INLONG-7](https://issues.apache.org/jira/browse/INLONG-7)] Using StringBuilder instead of StringBuffer in BaseResult
 - [[INLONG-9](https://issues.apache.org/jira/browse/INLONG-9)] Remove some unnecessary code
 - [[INLONG-16](https://issues.apache.org/jira/browse/INLONG-16)] Correct BdbStoreService#isPrimaryNodeActived to BdbStoreService#isPrimaryNodeActive
 - [[INLONG-18](https://issues.apache.org/jira/browse/INLONG-18)] Correct TMaster#idGenerater to TMaster#idGenerator
 - [[INLONG-19](https://issues.apache.org/jira/browse/INLONG-19)] Correct parameter names to fit in camel case
 - [[INLONG-20](https://issues.apache.org/jira/browse/INLONG-20)] Correct DefaultLoadBalancer#balance parameter
 - [[INLONG-21](https://issues.apache.org/jira/browse/INLONG-21)] Change version number from x.y-SNAPSHOT to x.y.z-incubating-SNAPSHOT
 - [[INLONG-22](https://issues.apache.org/jira/browse/INLONG-22)] Correct ClientSubInfo#getTopicProcesser -> ClientSubInfo#getTopicProcessor
 - [[INLONG-23](https://issues.apache.org/jira/browse/INLONG-23)] Improve project README content introduction
 - [[INLONG-24](https://issues.apache.org/jira/browse/INLONG-24)] Add NOTICE and adjust LICENSE
 - [[INLONG-26](https://issues.apache.org/jira/browse/INLONG-26)] correct spelling (difftime-> diffTime)
 - [[INLONG-27](https://issues.apache.org/jira/browse/INLONG-27)] replace StringBuffer with StringBuilder
 - [[INLONG-28](https://issues.apache.org/jira/browse/INLONG-28)] ignore path error
 - [[INLONG-29](https://issues.apache.org/jira/browse/INLONG-29)] Change the package name to org.apache.tubemq.""
 - [[INLONG-33](https://issues.apache.org/jira/browse/INLONG-33)] refactor enum implement from annoymouse inner class
 - [[INLONG-38](https://issues.apache.org/jira/browse/INLONG-38)] Correct DefaultLoadBalancer#balance parameter
 - [[INLONG-39](https://issues.apache.org/jira/browse/INLONG-39)] Optimize the loadMessageStores() logic
 - [[INLONG-40](https://issues.apache.org/jira/browse/INLONG-40)] Optimize message disk store classes's logic
 - [[INLONG-43](https://issues.apache.org/jira/browse/INLONG-43)] Add DeletePolicy's value check
 - [[INLONG-44](https://issues.apache.org/jira/browse/INLONG-44)] Remove unnecessary synchronized definition of shutdown () function
 - [[INLONG-49](https://issues.apache.org/jira/browse/INLONG-49)] setTimeoutTime change to updTimeoutTime
 - [[INLONG-50](https://issues.apache.org/jira/browse/INLONG-50)] Replace fastjson to gson
 
 
### Bug Fixes
 - [[INLONG-10](https://issues.apache.org/jira/browse/INLONG-10)] Fix Javadoc error
 - [[INLONG-14](https://issues.apache.org/jira/browse/INLONG-14)] Some compilation errors
 - [[INLONG-15](https://issues.apache.org/jira/browse/INLONG-15)] Correct typo in http_access_API_definition.md
 - [[INLONG-32](https://issues.apache.org/jira/browse/INLONG-32)] File path not match with package name in tubemq-client module
 - [[INLONG-35](https://issues.apache.org/jira/browse/INLONG-35)] check illegal package's field value
 - [[INLONG-36](https://issues.apache.org/jira/browse/INLONG-36)] Remove unnecessary removefirst() function printing
 - [[INLONG-37](https://issues.apache.org/jira/browse/INLONG-37)] Offset is set to 0 when Broker goes offline
 - [[INLONG-45](https://issues.apache.org/jira/browse/INLONG-45)] Check groupName with checkHostName function
 - [[INLONG-48](https://issues.apache.org/jira/browse/INLONG-48)] No timeout when setting consumer timeout
 - [[INLONG-59](https://issues.apache.org/jira/browse/INLONG-59)] Null pointer exception is thrown while constructing ConsumerConfig with MasterInfo
 - [[INLONG-62](https://issues.apache.org/jira/browse/INLONG-62)] consumed and set consumerConfig.setConsumeModel (0) for the first time
 - [[INLONG-66](https://issues.apache.org/jira/browse/INLONG-66)] TubeSingleSessionFactory shutdown bug
 - [[INLONG-85](https://issues.apache.org/jira/browse/INLONG-85)] There is NPE when creating PullConsumer with TubeSingleSessionFactory
 - [[INLONG-88](https://issues.apache.org/jira/browse/INLONG-88)] Broker does not take effect after the deletePolicy value is changed
 - [[INLONG-149](https://issues.apache.org/jira/browse/INLONG-149)] Some of the consumers stop consuming their corresponding partitions and never release the partition to others
 - [[INLONG-153](https://issues.apache.org/jira/browse/INLONG-153)] Some of the consumers stop consuming their corresponding partitions and never release the partition to others
 - [[INLONG-165](https://issues.apache.org/jira/browse/INLONG-165)] Remove unnecessary fiiles
 
