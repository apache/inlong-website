---
title: InLong v0.7.0
---

使用以下链接下载 InLong。

## InLong

| 日期 | 版本| 备注 | 下载 |
|:---:|:--:|:--:|:--:|
| 2020-12-04 | 0.7.0 | 源码 | [[SRC](https://archive.apache.org/dist/incubator/tubemq/0.7.0-incubating/apache-tubemq-0.7.0-incubating-src.tar.gz)]                 [[ASC](https://archive.apache.org/dist/incubator/tubemq/0.7.0-incubating/apache-tubemq-0.7.0-incubating-src.tar.gz.asc)]             [[SHA512](https://archive.apache.org/dist/incubator/tubemq/0.7.0-incubating/apache-tubemq-0.7.0-incubating-src.tar.gz.sha512)] |
| |                       | 客户端 | [[TAR](https://archive.apache.org/dist/incubator/tubemq/0.7.0-incubating/apache-tubemq-client-0.7.0-incubating-bin.tar.gz)]          [[ASC](https://archive.apache.org/dist/incubator/tubemq/0.7.0-incubating/apache-tubemq-client-0.7.0-incubating-bin.tar.gz.asc)]      [[SHA512](https://archive.apache.org/dist/incubator/tubemq/0.7.0-incubating/apache-tubemq-client-0.7.0-incubating-bin.tar.gz.sha512)] |
| |                       | 服务端 | [[TAR](https://archive.apache.org/dist/incubator/tubemq/0.7.0-incubating/apache-tubemq-server-0.7.0-incubating-bin.tar.gz)]          [[ASC](https://archive.apache.org/dist/incubator/tubemq/0.7.0-incubating/apache-tubemq-server-0.7.0-incubating-bin.tar.gz.asc)]      [[SHA512](https://archive.apache.org/dist/incubator/tubemq/0.7.0-incubating/apache-tubemq-server-0.7.0-incubating-bin.tar.gz.sha512)] |

### 发布完整性

您必须 [验证](https://www.apache.org/info/verification.html) 下载文件的完整性。
我们为每个发布文件提供 OpenPGP 签名。此签名应与包含 InLong 发布经理的 OpenPGP 密钥的 [KEYS](https://downloads.apache.org/incubator/inlong/KEYS) 文件匹配。
我们还为每个发布文件提供 <code>SHA-512</code> 校验和。下载文件后，您应该计算下载的校验和，并确保它与我们提供的相同。

## 发版说明

### 新特性
| JIRA  | Summary  | Priority |
| :---- | :------- | :------- |
| [INLONG-162](https://issues.apache.org/jira/browse/INLONG-162) | Python SDK support in TubeMQ | High |
| [INLONG-336](https://issues.apache.org/jira/browse/INLONG-336) | Propose web portal to manage tube cluster Phase-I | Major |
| [INLONG-390](https://issues.apache.org/jira/browse/INLONG-390)   | support build C++ SDK with docker image | Normal |

### 改进
| JIRA  | Summary  | Priority |
| :---- | :------- | :------- |
| [INLONG-369](https://issues.apache.org/jira/browse/INLONG-369) | hope to add an option in the compilation script (like `make lib` etc...)                 | Major    |
| [INLONG-373](https://issues.apache.org/jira/browse/INLONG-373) | Reduce the redundant code of Utils::Split functions             | Major    |
| [INLONG-374](https://issues.apache.org/jira/browse/INLONG-374) | Adjust some coding style issues     | Major    |
| [INLONG-375](https://issues.apache.org/jira/browse/INLONG-375) | Add a section to the README file about how to compile the project| Major    |
| [INLONG-385](https://issues.apache.org/jira/browse/INLONG-385) | update docker images     | Major    |
| [INLONG-393](https://issues.apache.org/jira/browse/INLONG-393) | Optimize the mapping code of WEB API     | Major    |
| [INLONG-406](https://issues.apache.org/jira/browse/INLONG-406) | test_consumer.py works for both Python 2 and 3   | Minor |
| [INLONG-410](https://issues.apache.org/jira/browse/INLONG-410) | install python package and simplify test_consumer.py    | Major    |
| [INLONG-416](https://issues.apache.org/jira/browse/INLONG-416) | support consume from specified position   | Major    |
| [INLONG-417](https://issues.apache.org/jira/browse/INLONG-417) | C++ Client support parse message from binary data for Python SDK    | Major    |
| [INLONG-419](https://issues.apache.org/jira/browse/INLONG-419) | SetMaxPartCheckPeriodMs() negative number, getMessage() still  | Major    |

### BUG修复
| JIRA                                                         | Summary                                                      | Priority |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :------- |
| [INLONG-365](https://issues.apache.org/jira/browse/INLONG-365) | Whether the consumption setting is wrong after the processRequest exception | Major    |
| [INLONG-370](https://issues.apache.org/jira/browse/INLONG-370) | Calling GetCurConsumedInfo API always returns failure      | Major    |
| [INLONG-376](https://issues.apache.org/jira/browse/INLONG-376) | Move pullrequests_status notifications commits mail list | Major    |
| [INLONG-366](https://issues.apache.org/jira/browse/INLONG-366) | Found a nullpointerexception bug in broker | Normal |
| [INLONG-379](https://issues.apache.org/jira/browse/INLONG-379) | Modify the memory cache size default to 3M | Normal |
| [INLONG-380](https://issues.apache.org/jira/browse/INLONG-380) | Cpp client link error when gcc optimization is disabled   | Major    |
| [INLONG-405](https://issues.apache.org/jira/browse/INLONG-405) | python sdk install files lack of the whole cpp configuration | Major |
| [INLONG-401](https://issues.apache.org/jira/browse/INLONG-401) | python sdk readme bug | Minor |
| [INLONG-407](https://issues.apache.org/jira/browse/INLONG-407) | Fix some content in README.md | Trivial |
| [INLONG-418](https://issues.apache.org/jira/browse/INLONG-418) | C++ SDK function SetMaxPartCheckPeriodMs() can't work | Major |
