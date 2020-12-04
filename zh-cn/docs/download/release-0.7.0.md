---
title: 下载 - Apache TubeMQ
---

# 下载TubeMQ
  使用以下镜像下载TubeMQ

## TubeMQ
| 日期 | 版本| 备注 | 下载 |
|:---:|:--:|:--:|:--:|
| 2020-12-04 | 0.7.0 | Source | [[SRC](http://www.apache.org/dyn/closer.lua/incubator/tubemq/0.7.0-incubating/apache-tubemq-0.7.0-incubating-src.tar.gz)]                 [[PGP](https://downloads.apache.org/incubator/tubemq/0.7.0-incubating/apache-tubemq-0.7.0-incubating-src.tar.gz.asc)]             [[SHA512](https://downloads.apache.org/incubator/tubemq/0.7.0-incubating/apache-tubemq-0.7.0-incubating-src.tar.gz.sha512)] |
| |                       | Client | [[TAR](http://www.apache.org/dyn/closer.lua/incubator/tubemq/0.7.0-incubating/apache-tubemq-client-0.7.0-incubating-bin.tar.gz)]          [[PGP](https://downloads.apache.org/incubator/tubemq/0.7.0-incubating/apache-tubemq-client-0.7.0-incubating-bin.tar.gz.asc)]      [[SHA512](https://downloads.apache.org/incubator/tubemq/0.7.0-incubating/apache-tubemq-client-0.7.0-incubating-bin.tar.gz.sha512)] |
| |                       | Server | [[TAR](http://www.apache.org/dyn/closer.lua/incubator/tubemq/0.7.0-incubating/apache-tubemq-server-0.7.0-incubating-bin.tar.gz)]          [[PGP](https://downloads.apache.org/incubator/tubemq/0.7.0-incubating/apache-tubemq-server-0.7.0-incubating-bin.tar.gz.asc)]      [[SHA512](https://downloads.apache.org/incubator/tubemq/0.7.0-incubating/apache-tubemq-server-0.7.0-incubating-bin.tar.gz.sha512)] |

## 发版说明

### 新特性
| JIRA  | Summary  | Priority |
| :---- | :------- | :------- |
| [TUBEMQ-162](https://issues.apache.org/jira/browse/TUBEMQ-162) | Python SDK support in TubeMQ | High |
| [TUBEMQ-336](https://issues.apache.org/jira/browse/TUBEMQ-336) | Propose web portal to manage tube cluster Phase-I | Major |
| [TUBEMQ-390](https://issues.apache.org/jira/browse/TUBEMQ-390)   | support build C++ SDK with docker image | Normal |

### 改进
| JIRA  | Summary  | Priority |
| :---- | :------- | :------- |
| [TUBEMQ-369](https://issues.apache.org/jira/browse/TUBEMQ-369) | hope to add an option in the compilation script (like `make lib` etc...)                 | Major    |
| [TUBEMQ-373](https://issues.apache.org/jira/browse/TUBEMQ-373) | Reduce the redundant code of Utils::Split functions             | Major    |
| [TUBEMQ-374](https://issues.apache.org/jira/browse/TUBEMQ-374) | Adjust some coding style issues     | Major    |
| [TUBEMQ-375](https://issues.apache.org/jira/browse/TUBEMQ-375) | Add a section to the README file about how to compile the project| Major    |
| [TUBEMQ-385](https://issues.apache.org/jira/browse/TUBEMQ-385) | update docker images     | Major    |
| [TUBEMQ-393](https://issues.apache.org/jira/browse/TUBEMQ-393) | Optimize the mapping code of WEB API     | Major    |
| [TUBEMQ-406](https://issues.apache.org/jira/browse/TUBEMQ-406) | test_consumer.py works for both Python 2 and 3   | Minor |
| [TUBEMQ-410](https://issues.apache.org/jira/browse/TUBEMQ-410) | install python package and simplify test_consumer.py    | Major    |
| [TUBEMQ-416](https://issues.apache.org/jira/browse/TUBEMQ-416) | support consume from specified position   | Major    |
| [TUBEMQ-417](https://issues.apache.org/jira/browse/TUBEMQ-417) | C++ Client support parse message from binary data for Python SDK    | Major    |
| [TUBEMQ-419](https://issues.apache.org/jira/browse/TUBEMQ-419) | SetMaxPartCheckPeriodMs() negative number, getMessage() still  | Major    |

### BUG修复
| JIRA                                                         | Summary                                                      | Priority |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :------- |
| [TUBEMQ-365](https://issues.apache.org/jira/browse/TUBEMQ-365) | Whether the consumption setting is wrong after the processRequest exception | Major    |
| [TUBEMQ-370](https://issues.apache.org/jira/browse/TUBEMQ-370) | Calling GetCurConsumedInfo API always returns failure      | Major    |
| [TUBEMQ-376](https://issues.apache.org/jira/browse/TUBEMQ-376) | Move pullrequests_status notifications commits mail list | Major    |
| [TUBEMQ-366](https://issues.apache.org/jira/browse/TUBEMQ-366) | Found a nullpointerexception bug in broker | Normal |
| [TUBEMQ-379](https://issues.apache.org/jira/browse/TUBEMQ-379) | Modify the memory cache size default to 3M | Normal |
| [TUBEMQ-380](https://issues.apache.org/jira/browse/TUBEMQ-380) | Cpp client link error when gcc optimization is disabled   | Major    |
| [TUBEMQ-405](https://issues.apache.org/jira/browse/TUBEMQ-405) | python sdk install files lack of the whole cpp configuration | Major |
| [TUBEMQ-401](https://issues.apache.org/jira/browse/TUBEMQ-401) | python sdk readme bug | Minor |
| [TUBEMQ-407](https://issues.apache.org/jira/browse/TUBEMQ-407) | Fix some content in README.md | Trivial |
| [TUBEMQ-418](https://issues.apache.org/jira/browse/TUBEMQ-418) | C++ SDK function SetMaxPartCheckPeriodMs() can't work | Major |
