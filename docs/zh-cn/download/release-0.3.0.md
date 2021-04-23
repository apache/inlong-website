---
title: 下载 - Apache TubeMQ
---

# 下载TubeMQ
  使用以下镜像下载TubeMQ

## TubeMQ
| 日期 | 版本| 备注 | 下载 |
|:---:|:--:|:--:|:--:|
| 2020-06-06 | 0.3.0 | 源码 | [[SRC](http://www.apache.org/dyn/closer.lua/incubator/tubemq/0.3.0-incubating/apache-tubemq-0.3.0-incubating-src.tar.gz)]                 [[PGP](https://downloads.apache.org/incubator/tubemq/0.3.0-incubating/apache-tubemq-0.3.0-incubating-src.tar.gz.asc)]             [[SHA512](https://downloads.apache.org/incubator/tubemq/0.3.0-incubating/apache-tubemq-0.3.0-incubating-src.tar.gz.sha512)] |
| |                       | 客户端 | [[TAR](http://www.apache.org/dyn/closer.lua/incubator/tubemq/0.3.0-incubating/apache-tubemq-client-0.3.0-incubating-bin.tar.gz)]          [[PGP](https://downloads.apache.org/incubator/tubemq/0.3.0-incubating/apache-tubemq-client-0.3.0-incubating-bin.tar.gz.asc)]      [[SHA512](https://downloads.apache.org/incubator/tubemq/0.3.0-incubating/apache-tubemq-client-0.3.0-incubating-bin.tar.gz.sha512)] |
| |                       | 服务端 | [[TAR](http://www.apache.org/dyn/closer.lua/incubator/tubemq/0.3.0-incubating/apache-tubemq-server-0.3.0-incubating-bin.tar.gz)]          [[PGP](https://downloads.apache.org/incubator/tubemq/0.3.0-incubating/apache-tubemq-server-0.3.0-incubating-bin.tar.gz.asc)]      [[SHA512](https://downloads.apache.org/incubator/tubemq/0.3.0-incubating/apache-tubemq-server-0.3.0-incubating-bin.tar.gz.sha512)] |


## 发版说明

### 新特性
 - [[TUBEMQ-42](https://issues.apache.org/jira/browse/TUBEMQ-42)] Add peer information about message received Major New Feature
 
### 改进
 - [[TUBEMQ-7](https://issues.apache.org/jira/browse/TUBEMQ-7)] Using StringBuilder instead of StringBuffer in BaseResult
 - [[TUBEMQ-9](https://issues.apache.org/jira/browse/TUBEMQ-9)] Remove some unnecessary code
 - [[TUBEMQ-16](https://issues.apache.org/jira/browse/TUBEMQ-16)] Correct BdbStoreService#isPrimaryNodeActived to BdbStoreService#isPrimaryNodeActive
 - [[TUBEMQ-18](https://issues.apache.org/jira/browse/TUBEMQ-18)] Correct TMaster#idGenerater to TMaster#idGenerator
 - [[TUBEMQ-19](https://issues.apache.org/jira/browse/TUBEMQ-19)] Correct parameter names to fit in camel case
 - [[TUBEMQ-20](https://issues.apache.org/jira/browse/TUBEMQ-20)] Correct DefaultLoadBalancer#balance parameter
 - [[TUBEMQ-21](https://issues.apache.org/jira/browse/TUBEMQ-21)] Change version number from x.y-SNAPSHOT to x.y.z-incubating-SNAPSHOT
 - [[TUBEMQ-22](https://issues.apache.org/jira/browse/TUBEMQ-22)] Correct ClientSubInfo#getTopicProcesser -> ClientSubInfo#getTopicProcessor
 - [[TUBEMQ-23](https://issues.apache.org/jira/browse/TUBEMQ-23)] Improve project README content introduction
 - [[TUBEMQ-24](https://issues.apache.org/jira/browse/TUBEMQ-24)] Add NOTICE and adjust LICENSE
 - [[TUBEMQ-26](https://issues.apache.org/jira/browse/TUBEMQ-26)] correct spelling (difftime-> diffTime)
 - [[TUBEMQ-27](https://issues.apache.org/jira/browse/TUBEMQ-27)] replace StringBuffer with StringBuilder
 - [[TUBEMQ-28](https://issues.apache.org/jira/browse/TUBEMQ-28)] ignore path error
 - [[TUBEMQ-29](https://issues.apache.org/jira/browse/TUBEMQ-29)] Change the package name to org.apache.tubemq.""
 - [[TUBEMQ-33](https://issues.apache.org/jira/browse/TUBEMQ-33)] refactor enum implement from annoymouse inner class
 - [[TUBEMQ-38](https://issues.apache.org/jira/browse/TUBEMQ-38)] Correct DefaultLoadBalancer#balance parameter
 - [[TUBEMQ-39](https://issues.apache.org/jira/browse/TUBEMQ-39)] Optimize the loadMessageStores() logic
 - [[TUBEMQ-40](https://issues.apache.org/jira/browse/TUBEMQ-40)] Optimize message disk store classes's logic
 - [[TUBEMQ-43](https://issues.apache.org/jira/browse/TUBEMQ-43)] Add DeletePolicy's value check
 - [[TUBEMQ-44](https://issues.apache.org/jira/browse/TUBEMQ-44)] Remove unnecessary synchronized definition of shutdown () function
 - [[TUBEMQ-49](https://issues.apache.org/jira/browse/TUBEMQ-49)] setTimeoutTime change to updTimeoutTime
 - [[TUBEMQ-50](https://issues.apache.org/jira/browse/TUBEMQ-50)] Replace fastjson to gson
 
 
### Bug修复
 - [[TUBEMQ-10](https://issues.apache.org/jira/browse/TUBEMQ-10)] Fix Javadoc error
 - [[TUBEMQ-14](https://issues.apache.org/jira/browse/TUBEMQ-14)] Some compilation errors
 - [[TUBEMQ-15](https://issues.apache.org/jira/browse/TUBEMQ-15)] Correct typo in http_access_API_definition.md
 - [[TUBEMQ-32](https://issues.apache.org/jira/browse/TUBEMQ-32)] File path not match with package name in tubemq-client module
 - [[TUBEMQ-35](https://issues.apache.org/jira/browse/TUBEMQ-35)] check illegal package's field value
 - [[TUBEMQ-36](https://issues.apache.org/jira/browse/TUBEMQ-36)] Remove unnecessary removefirst() function printing
 - [[TUBEMQ-37](https://issues.apache.org/jira/browse/TUBEMQ-37)] Offset is set to 0 when Broker goes offline
 - [[TUBEMQ-45](https://issues.apache.org/jira/browse/TUBEMQ-45)] Check groupName with checkHostName function
 - [[TUBEMQ-48](https://issues.apache.org/jira/browse/TUBEMQ-48)] No timeout when setting consumer timeout
 - [[TUBEMQ-59](https://issues.apache.org/jira/browse/TUBEMQ-59)] Null pointer exception is thrown while constructing ConsumerConfig with MasterInfo
 - [[TUBEMQ-62](https://issues.apache.org/jira/browse/TUBEMQ-62)] consumed and set consumerConfig.setConsumeModel (0) for the first time
 - [[TUBEMQ-66](https://issues.apache.org/jira/browse/TUBEMQ-66)] TubeSingleSessionFactory shutdown bug
 - [[TUBEMQ-85](https://issues.apache.org/jira/browse/TUBEMQ-85)] There is NPE when creating PullConsumer with TubeSingleSessionFactory
 - [[TUBEMQ-88](https://issues.apache.org/jira/browse/TUBEMQ-88)] Broker does not take effect after the deletePolicy value is changed
 - [[TUBEMQ-149](https://issues.apache.org/jira/browse/TUBEMQ-149)] Some of the consumers stop consuming their corresponding partitions and never release the partition to others
 - [[TUBEMQ-153](https://issues.apache.org/jira/browse/TUBEMQ-153)] Some of the consumers stop consuming their corresponding partitions and never release the partition to others
 - [[TUBEMQ-165](https://issues.apache.org/jira/browse/TUBEMQ-165)] Remove unnecessary fiiles
 
