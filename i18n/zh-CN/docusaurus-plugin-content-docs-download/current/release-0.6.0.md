---
title: InLong v0.6.0
---

使用以下链接下载 InLong。

## InLong

| 日期 | 版本| 备注 | 下载 |
|:---:|:--:|:--:|:--:|
| 2020-10-21 | 0.6.0 | 源码 | [[SRC](https://archive.apache.org/dist/incubator/tubemq/0.6.0-incubating/apache-tubemq-0.6.0-incubating-src.tar.gz)]                 [[ASC](https://archive.apache.org/dist/incubator/tubemq/0.6.0-incubating/apache-tubemq-0.6.0-incubating-src.tar.gz.asc)]             [[SHA512](https://archive.apache.org/dist/incubator/tubemq/0.6.0-incubating/apache-tubemq-0.6.0-incubating-src.tar.gz.sha512)] |
| |                       | 客户端 | [[TAR](https://archive.apache.org/dist/incubator/tubemq/0.6.0-incubating/apache-tubemq-client-0.6.0-incubating-bin.tar.gz)]          [[ASC](https://archive.apache.org/dist/incubator/tubemq/0.6.0-incubating/apache-tubemq-client-0.6.0-incubating-bin.tar.gz.asc)]      [[SHA512](https://archive.apache.org/dist/incubator/tubemq/0.6.0-incubating/apache-tubemq-client-0.6.0-incubating-bin.tar.gz.sha512)] |
| |                       | 服务端 | [[TAR](https://archive.apache.org/dist/incubator/tubemq/0.6.0-incubating/apache-tubemq-server-0.6.0-incubating-bin.tar.gz)]          [[ASC](https://archive.apache.org/dist/incubator/tubemq/0.6.0-incubating/apache-tubemq-server-0.6.0-incubating-bin.tar.gz.asc)]      [[SHA512](https://archive.apache.org/dist/incubator/tubemq/0.6.0-incubating/apache-tubemq-server-0.6.0-incubating-bin.tar.gz.sha512)] |

### 发布完整性

您必须 [验证](https://www.apache.org/info/verification.html) 下载文件的完整性。
我们为每个发布文件提供 OpenPGP 签名。此签名应与包含 InLong 发布经理的 OpenPGP 密钥的 [KEYS](https://downloads.apache.org/incubator/inlong/KEYS) 文件匹配。
我们还为每个发布文件提供 <code>SHA-512</code> 校验和。下载文件后，您应该计算下载的校验和，并确保它与我们提供的相同。

## 发版说明

### 新特性
- [[INLONG-319](https://issues.apache.org/jira/browse/INLONG-319)] In the pull mode, consumers support the  suspension of consumption for a certain partition
- [[INLONG-3](https://issues.apache.org/jira/browse/INLONG-3)] C++ SDK support in TubeMQ

### 改进
- [[INLONG-311](https://issues.apache.org/jira/browse/INLONG-311)] Feedback more production information
- [[INLONG-312](https://issues.apache.org/jira/browse/INLONG-312)] Feedback more consumption information
- [[INLONG-325](https://issues.apache.org/jira/browse/INLONG-325)] Add 406 ~ 408 error code to pullSelect call
- [[INLONG-345](https://issues.apache.org/jira/browse/INLONG-345)] Optimize the call logic of getMessage() in Pull mode
- [[INLONG-352](https://issues.apache.org/jira/browse/INLONG-352)] Set the parameters of the example at startup
- [[INLONG-353](https://issues.apache.org/jira/browse/INLONG-353)] Update LICENSE about C/C++ SDK's code reference
- [[INLONG-356](https://issues.apache.org/jira/browse/INLONG-356)] C++ SDK Codec decode add requestid
- [[INLONG-327](https://issues.apache.org/jira/browse/INLONG-327)] Fix the concurrency problem in the example

### BUG修复
- [[INLONG-316](https://issues.apache.org/jira/browse/INLONG-316)] Where the port the port is aleady used, the  process throw the exception, but not exit
- [[INLONG-317](https://issues.apache.org/jira/browse/INLONG-317)] The Store Manager throws java.lang.NullPointerException
- [[INLONG-320](https://issues.apache.org/jira/browse/INLONG-320)] Request for static web contents would get responses with no content
- [[INLONG-354](https://issues.apache.org/jira/browse/INLONG-354)] Found a dns translate bug in C/C++ sdk
- [[INLONG-306](https://issues.apache.org/jira/browse/INLONG-306)] Raise Nullpointer Exception when create tubemq instance
- [[INLONG-359](https://issues.apache.org/jira/browse/INLONG-359)] TubeMQ consume speed dropped to 0 in some partitions, it is a very serious bug  Blocker
