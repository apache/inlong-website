---
title: 下载 - Apache inlong
---

# 下载inlong
  使用以下镜像下载inlong

## inlong
| 日期 | 版本| 备注 | 下载 |
|:---:|:--:|:--:|:--:|
| 2020-06-06 | 0.3.0 | 源码 | [[SRC](http://www.apache.org/dyn/closer.lua/incubator/inlong/0.3.0-incubating/apache-inlong-0.3.0-incubating-src.tar.gz)]                 [[PGP](https://downloads.apache.org/incubator/inlong/0.3.0-incubating/apache-inlong-0.3.0-incubating-src.tar.gz.asc)]             [[SHA512](https://downloads.apache.org/incubator/inlong/0.3.0-incubating/apache-inlong-0.3.0-incubating-src.tar.gz.sha512)] |
| |                       | 客户端 | [[TAR](http://www.apache.org/dyn/closer.lua/incubator/inlong/0.3.0-incubating/apache-inlong-client-0.3.0-incubating-bin.tar.gz)]          [[PGP](https://downloads.apache.org/incubator/inlong/0.3.0-incubating/apache-inlong-client-0.3.0-incubating-bin.tar.gz.asc)]      [[SHA512](https://downloads.apache.org/incubator/inlong/0.3.0-incubating/apache-inlong-client-0.3.0-incubating-bin.tar.gz.sha512)] |
| |                       | 服务端 | [[TAR](http://www.apache.org/dyn/closer.lua/incubator/inlong/0.3.0-incubating/apache-inlong-server-0.3.0-incubating-bin.tar.gz)]          [[PGP](https://downloads.apache.org/incubator/inlong/0.3.0-incubating/apache-inlong-server-0.3.0-incubating-bin.tar.gz.asc)]      [[SHA512](https://downloads.apache.org/incubator/inlong/0.3.0-incubating/apache-inlong-server-0.3.0-incubating-bin.tar.gz.sha512)] |


## 发版说明

### 新特性
 - [[inlong-42](https://issues.apache.org/jira/browse/inlong-42)] Add peer information about message received Major New Feature
 
### 改进
 - [[inlong-7](https://issues.apache.org/jira/browse/inlong-7)] Using StringBuilder instead of StringBuffer in BaseResult
 - [[inlong-9](https://issues.apache.org/jira/browse/inlong-9)] Remove some unnecessary code
 - [[inlong-16](https://issues.apache.org/jira/browse/inlong-16)] Correct BdbStoreService#isPrimaryNodeActived to BdbStoreService#isPrimaryNodeActive
 - [[inlong-18](https://issues.apache.org/jira/browse/inlong-18)] Correct TMaster#idGenerater to TMaster#idGenerator
 - [[inlong-19](https://issues.apache.org/jira/browse/inlong-19)] Correct parameter names to fit in camel case
 - [[inlong-20](https://issues.apache.org/jira/browse/inlong-20)] Correct DefaultLoadBalancer#balance parameter
 - [[inlong-21](https://issues.apache.org/jira/browse/inlong-21)] Change version number from x.y-SNAPSHOT to x.y.z-incubating-SNAPSHOT
 - [[inlong-22](https://issues.apache.org/jira/browse/inlong-22)] Correct ClientSubInfo#getTopicProcesser -> ClientSubInfo#getTopicProcessor
 - [[inlong-23](https://issues.apache.org/jira/browse/inlong-23)] Improve project README content introduction
 - [[inlong-24](https://issues.apache.org/jira/browse/inlong-24)] Add NOTICE and adjust LICENSE
 - [[inlong-26](https://issues.apache.org/jira/browse/inlong-26)] correct spelling (difftime-> diffTime)
 - [[inlong-27](https://issues.apache.org/jira/browse/inlong-27)] replace StringBuffer with StringBuilder
 - [[inlong-28](https://issues.apache.org/jira/browse/inlong-28)] ignore path error
 - [[inlong-29](https://issues.apache.org/jira/browse/inlong-29)] Change the package name to org.apache.inlong.""
 - [[inlong-33](https://issues.apache.org/jira/browse/inlong-33)] refactor enum implement from annoymouse inner class
 - [[inlong-38](https://issues.apache.org/jira/browse/inlong-38)] Correct DefaultLoadBalancer#balance parameter
 - [[inlong-39](https://issues.apache.org/jira/browse/inlong-39)] Optimize the loadMessageStores() logic
 - [[inlong-40](https://issues.apache.org/jira/browse/inlong-40)] Optimize message disk store classes's logic
 - [[inlong-43](https://issues.apache.org/jira/browse/inlong-43)] Add DeletePolicy's value check
 - [[inlong-44](https://issues.apache.org/jira/browse/inlong-44)] Remove unnecessary synchronized definition of shutdown () function
 - [[inlong-49](https://issues.apache.org/jira/browse/inlong-49)] setTimeoutTime change to updTimeoutTime
 - [[inlong-50](https://issues.apache.org/jira/browse/inlong-50)] Replace fastjson to gson
 
 
### Bug修复
 - [[inlong-10](https://issues.apache.org/jira/browse/inlong-10)] Fix Javadoc error
 - [[inlong-14](https://issues.apache.org/jira/browse/inlong-14)] Some compilation errors
 - [[inlong-15](https://issues.apache.org/jira/browse/inlong-15)] Correct typo in http_access_API_definition.md
 - [[inlong-32](https://issues.apache.org/jira/browse/inlong-32)] File path not match with package name in inlong-client module
 - [[inlong-35](https://issues.apache.org/jira/browse/inlong-35)] check illegal package's field value
 - [[inlong-36](https://issues.apache.org/jira/browse/inlong-36)] Remove unnecessary removefirst() function printing
 - [[inlong-37](https://issues.apache.org/jira/browse/inlong-37)] Offset is set to 0 when Broker goes offline
 - [[inlong-45](https://issues.apache.org/jira/browse/inlong-45)] Check groupName with checkHostName function
 - [[inlong-48](https://issues.apache.org/jira/browse/inlong-48)] No timeout when setting consumer timeout
 - [[inlong-59](https://issues.apache.org/jira/browse/inlong-59)] Null pointer exception is thrown while constructing ConsumerConfig with MasterInfo
 - [[inlong-62](https://issues.apache.org/jira/browse/inlong-62)] consumed and set consumerConfig.setConsumeModel (0) for the first time
 - [[inlong-66](https://issues.apache.org/jira/browse/inlong-66)] TubeSingleSessionFactory shutdown bug
 - [[inlong-85](https://issues.apache.org/jira/browse/inlong-85)] There is NPE when creating PullConsumer with TubeSingleSessionFactory
 - [[inlong-88](https://issues.apache.org/jira/browse/inlong-88)] Broker does not take effect after the deletePolicy value is changed
 - [[inlong-149](https://issues.apache.org/jira/browse/inlong-149)] Some of the consumers stop consuming their corresponding partitions and never release the partition to others
 - [[inlong-153](https://issues.apache.org/jira/browse/inlong-153)] Some of the consumers stop consuming their corresponding partitions and never release the partition to others
 - [[inlong-165](https://issues.apache.org/jira/browse/inlong-165)] Remove unnecessary fiiles
 
