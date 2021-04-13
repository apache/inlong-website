---
title: 下载 - Apache inlong
---

# 下载inlong
  使用以下镜像下载inlong

## inlong
| 日期 | 版本| 备注 | 下载 |
|:---:|:--:|:--:|:--:|
| 2020-12-04 | 0.7.0 | Source | [[SRC](http://www.apache.org/dyn/closer.lua/incubator/inlong/0.7.0-incubating/apache-inlong-0.7.0-incubating-src.tar.gz)]                 [[PGP](https://downloads.apache.org/incubator/inlong/0.7.0-incubating/apache-inlong-0.7.0-incubating-src.tar.gz.asc)]             [[SHA512](https://downloads.apache.org/incubator/inlong/0.7.0-incubating/apache-inlong-0.7.0-incubating-src.tar.gz.sha512)] |
| |                       | Client | [[TAR](http://www.apache.org/dyn/closer.lua/incubator/inlong/0.7.0-incubating/apache-inlong-client-0.7.0-incubating-bin.tar.gz)]          [[PGP](https://downloads.apache.org/incubator/inlong/0.7.0-incubating/apache-inlong-client-0.7.0-incubating-bin.tar.gz.asc)]      [[SHA512](https://downloads.apache.org/incubator/inlong/0.7.0-incubating/apache-inlong-client-0.7.0-incubating-bin.tar.gz.sha512)] |
| |                       | Server | [[TAR](http://www.apache.org/dyn/closer.lua/incubator/inlong/0.7.0-incubating/apache-inlong-server-0.7.0-incubating-bin.tar.gz)]          [[PGP](https://downloads.apache.org/incubator/inlong/0.7.0-incubating/apache-inlong-server-0.7.0-incubating-bin.tar.gz.asc)]      [[SHA512](https://downloads.apache.org/incubator/inlong/0.7.0-incubating/apache-inlong-server-0.7.0-incubating-bin.tar.gz.sha512)] |

## 发版说明

### 新特性
| JIRA  | Summary  | Priority |
| :---- | :------- | :------- |
| [inlong-162](https://issues.apache.org/jira/browse/inlong-162) | Python SDK support in inlong | High |
| [inlong-336](https://issues.apache.org/jira/browse/inlong-336) | Propose web portal to manage tube cluster Phase-I | Major |
| [inlong-390](https://issues.apache.org/jira/browse/inlong-390)   | support build C++ SDK with docker image | Normal |

### 改进
| JIRA  | Summary  | Priority |
| :---- | :------- | :------- |
| [inlong-369](https://issues.apache.org/jira/browse/inlong-369) | hope to add an option in the compilation script (like `make lib` etc...)                 | Major    |
| [inlong-373](https://issues.apache.org/jira/browse/inlong-373) | Reduce the redundant code of Utils::Split functions             | Major    |
| [inlong-374](https://issues.apache.org/jira/browse/inlong-374) | Adjust some coding style issues     | Major    |
| [inlong-375](https://issues.apache.org/jira/browse/inlong-375) | Add a section to the README file about how to compile the project| Major    |
| [inlong-385](https://issues.apache.org/jira/browse/inlong-385) | update docker images     | Major    |
| [inlong-393](https://issues.apache.org/jira/browse/inlong-393) | Optimize the mapping code of WEB API     | Major    |
| [inlong-406](https://issues.apache.org/jira/browse/inlong-406) | test_consumer.py works for both Python 2 and 3   | Minor |
| [inlong-410](https://issues.apache.org/jira/browse/inlong-410) | install python package and simplify test_consumer.py    | Major    |
| [inlong-416](https://issues.apache.org/jira/browse/inlong-416) | support consume from specified position   | Major    |
| [inlong-417](https://issues.apache.org/jira/browse/inlong-417) | C++ Client support parse message from binary data for Python SDK    | Major    |
| [inlong-419](https://issues.apache.org/jira/browse/inlong-419) | SetMaxPartCheckPeriodMs() negative number, getMessage() still  | Major    |

### BUG修复
| JIRA                                                         | Summary                                                      | Priority |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :------- |
| [inlong-365](https://issues.apache.org/jira/browse/inlong-365) | Whether the consumption setting is wrong after the processRequest exception | Major    |
| [inlong-370](https://issues.apache.org/jira/browse/inlong-370) | Calling GetCurConsumedInfo API always returns failure      | Major    |
| [inlong-376](https://issues.apache.org/jira/browse/inlong-376) | Move pullrequests_status notifications commits mail list | Major    |
| [inlong-366](https://issues.apache.org/jira/browse/inlong-366) | Found a nullpointerexception bug in broker | Normal |
| [inlong-379](https://issues.apache.org/jira/browse/inlong-379) | Modify the memory cache size default to 3M | Normal |
| [inlong-380](https://issues.apache.org/jira/browse/inlong-380) | Cpp client link error when gcc optimization is disabled   | Major    |
| [inlong-405](https://issues.apache.org/jira/browse/inlong-405) | python sdk install files lack of the whole cpp configuration | Major |
| [inlong-401](https://issues.apache.org/jira/browse/inlong-401) | python sdk readme bug | Minor |
| [inlong-407](https://issues.apache.org/jira/browse/inlong-407) | Fix some content in README.md | Trivial |
| [inlong-418](https://issues.apache.org/jira/browse/inlong-418) | C++ SDK function SetMaxPartCheckPeriodMs() can't work | Major |
