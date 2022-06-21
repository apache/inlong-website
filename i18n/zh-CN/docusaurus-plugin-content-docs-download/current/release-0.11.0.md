---
title: InLong v0.11.0
---

使用以下链接下载 InLong。

## InLong

| 日期 | 版本| 备注 | 下载 |
|:---:|:--:|:--:|:--:|
| 2021-11-05 | 0.11.0 | Source | [[SRC](https://archive.apache.org/dist/incubator/inlong/0.11.0-incubating/apache-inlong-0.11.0-incubating-src.tar.gz)]                 [[ASC](https://archive.apache.org/dist/incubator/inlong/0.11.0-incubating/apache-inlong-0.11.0-incubating-src.tar.gz.asc)]             [[SHA512](https://archive.apache.org/dist/incubator/inlong/0.11.0-incubating/apache-inlong-0.11.0-incubating-src.tar.gz.sha512)] |

### 发布完整性

您必须 [验证](https://www.apache.org/info/verification.html) 下载文件的完整性。
我们为每个发布文件提供 OpenPGP 签名。此签名应与包含 InLong 发布经理的 OpenPGP 密钥的 [KEYS](https://downloads.apache.org/incubator/inlong/KEYS) 文件匹配。
我们还为每个发布文件提供 <code>SHA-512</code> 校验和。下载文件后，您应该计算下载的校验和，并确保它与我们提供的相同。

## Release Notes

### 特性:
| ISSUE  | Summary  |
| :---- | :------- |
| [INLONG-624](https://github.com/apache/incubator-inlong/issues/624) | [Feature] Go SDK support for TubeMQ
| [INLONG-1308](https://github.com/apache/incubator-inlong/issues/1308) | [Feature] Support Deploying All Modules on Kubernetes
| [INLONG-1330](https://github.com/apache/incubator-inlong/issues/1330) | [Feature] DataProxy support Pulsar
| [INLONG-1631](https://github.com/apache/incubator-inlong/issues/1631) | [Feature] [office-website] Refactor incubator-inlong-website by docusaurus

### 改进:
| ISSUE  | Summary  |
| :---- | :------- |
| [INLONG-1324](https://github.com/apache/incubator-inlong/issues/1324) | [Improve] [Manager] The consumption details should be refreshed after editing successfully
| [INLONG-1327](https://github.com/apache/incubator-inlong/issues/1327) | [Improve] [Manager] Supports pagi`ng query for workflow execution log
| [INLONG-1578](https://github.com/apache/incubator-inlong/issues/1570) | [Improve] Go SDK should provide a more elegant way to set the parameter of config`
| [INLONG-1571](https://github.com/apache/incubator-inlong/issues/1571) | [Improve] [CI] Check License Heade
| [INLONG-1584](https://github.com/apache/incubator-inlong/issues/1584) | [Improve] TDMsg Decode Support For Go SDK
| [INLONG-1585](https://github.com/apache/incubator-inlong/issues/1585) | [Improve] Improve issue template with issue forms
| [INLONG-1589](https://github.com/apache/incubator-inlong/issues/1589) | [Improve] [Manager] Manager provide an openapi of DataProxy configuration data for multi-subcluster
| [INLONG-1593](https://github.com/apache/incubator-inlong/issues/1593) | [Improve] Add EmptyLineSeparator java code checkstyle rule
| [INLONG-1595](https://github.com/apache/incubator-inlong/issues/1595) | [Improve] inlong-dataproxy start by the configuration data from inlong-manager
| [INLONG-1623](https://github.com/apache/incubator-inlong/issues/1602) | [Improve] Optimize EntityStatus enum
| [INLONG-1619](https://github.com/apache/incubator-inlong/issues/1619) | [Improve] Add improve suggestion template
| [INLONG-1611](https://github.com/apache/incubator-inlong/issues/1611) | [Improve] Enable Merge Button
| [INLONG-1623](https://github.com/apache/incubator-inlong/issues/1623) | [Improve] add contribution guide document for the main repo
| [INLONG-1626](https://github.com/apache/incubator-inlong/issues/1626) | [Improve] [office-website] Agent introduce a Message filter
| [INLONG-1628](https://github.com/apache/incubator-inlong/issues/1628) | [Improve] Remove commitlint in package.json
| [INLONG-1629](https://github.com/apache/incubator-inlong/issues/1629) | [Improve] Disable merge commit
| [INLONG-1632](https://github.com/apache/incubator-inlong/issues/1632) | [Improve] [office-website] Refactoring of basic projects
| [INLONG-1633](https://github.com/apache/incubator-inlong/issues/1633) | [Improve] [office-website] Migrate modules documentation
| [INLONG-1634](https://github.com/apache/incubator-inlong/issues/1634) | [Improve] [office-website] Migrate download documentation
| [INLONG-1635](https://github.com/apache/incubator-inlong/issues/1635) | [Improve] [office-website] Migrate development documentation
| [INLONG-1636](https://github.com/apache/incubator-inlong/issues/1636) | [Improve] [office-website] Replace the default language selection icon
| [INLONG-1637](https://github.com/apache/incubator-inlong/issues/1637) | [Improve] [office-website] Add docusaurus i18n docs
| [INLONG-1638](https://github.com/apache/incubator-inlong/issues/1638) | [Improve] [office-website] Adapt new github action command
| [INLONG-1641](https://github.com/apache/incubator-inlong/issues/1641) | [Improve] [Agent] Agent introduce a Message filter
| [INLONG-1642](https://github.com/apache/incubator-inlong/issues/1642) | [Improve] [Agent] Agent Use Message filter to get tid from different lines in a file
| [INLONG-1650](https://github.com/apache/incubator-inlong/issues/1650) | [Improve] [TubeMQ] Provide a more elegant way to define config address
| [INLONG-1662](https://github.com/apache/incubator-inlong/issues/1662) | [Improve] [GitHub] Improve issue templates
| [INLONG-1666](https://github.com/apache/incubator-inlong/issues/1666) | [Improve] [TubeMQ] README for Go SDK
| [INLONG-1668](https://github.com/apache/incubator-inlong/issues/1668) | [Improve] [office-website] Adapt quick edit link
| [INLONG-1669](https://github.com/apache/incubator-inlong/issues/1669) | [Improve] [office-website] Adapt docusaurus build command
| [INLONG-1670](https://github.com/apache/incubator-inlong/issues/1670) | [Improve] [Manager] Add H2 in UT
| [INLONG-1680](https://github.com/apache/incubator-inlong/issues/1680) | [Improve] [doc] remove the redundant download links
| [INLONG-1682](https://github.com/apache/incubator-inlong/issues/1682) | [Improve] [TubeMQ] New Go module for Go SDK
| [INLONG-1699](https://github.com/apache/incubator-inlong/issues/1699) | [Improve] [doc] add a correct interpretation for InLong
| [INLONG-1701](https://github.com/apache/incubator-inlong/issues/1701) | [Improve] [InLong-Manager] Adjust unit tests

### bug修复:
| ISSUE  | Summary  |
| :---- | :------- |
| [INLONG-1498](https://github.com/apache/incubator-inlong/issues/1498) | ignore the files with versionsBackup suffix for the bumped version
| [INLONG-1507](https://github.com/apache/incubator-inlong/issues/1507) | Go Client should reconnect to server if the server is shutdown and restarted
| [INLONG-1509](https://github.com/apache/incubator-inlong/issues/1509) | duplicate issues be counted in CHANGES.md
| [INLONG-1511](https://github.com/apache/incubator-inlong/issues/1511) | release guild documents has some errors
| [INLONG-1514](https://github.com/apache/incubator-inlong/issues/1514) | the license header is not correct for inlong-website/nginx.conf
| [INLONG-1525](https://github.com/apache/incubator-inlong/issues/1525) | Go SDK fail to parse SubscribeInfo
| [INLONG-1527](https://github.com/apache/incubator-inlong/issues/1527) | GoSDK should throw error if it fail to connect to master
| [INLONG-1529](https://github.com/apache/incubator-inlong/issues/1529) | Go SDK should reset heartbeat if register to master successfully
| [INLONG-1531](https://github.com/apache/incubator-inlong/issues/1531) | Go SDK should init the flow control item of the partition
| [INLONG-1533](https://github.com/apache/incubator-inlong/issues/1533) | Go SDK should provide more example
| [INLONG-1535](https://github.com/apache/incubator-inlong/issues/1535) | Go SDK should be closed before stopping the event processing goroutine
| [INLONG-1538](https://github.com/apache/incubator-inlong/issues/1538) | TubeMQ reports the error "Topic xxx not publish" when producing data
| [INLONG-1550](https://github.com/apache/incubator-inlong/issues/1550) | Go SDK should obey the flow control rule
| [INLONG-1552](https://github.com/apache/incubator-inlong/issues/1552) | Java SDK should deal with the default flow control rule
| [INLONG-1553](https://github.com/apache/incubator-inlong/issues/1553) | migrate the user manual documents at first class
| [INLONG-1554](https://github.com/apache/incubator-inlong/issues/1554) | remove the Console Introduction for manager
| [INLONG-1555](https://github.com/apache/incubator-inlong/issues/1555) | Go SDK should record the consumer config to the log
| [INLONG-1558](https://github.com/apache/incubator-inlong/issues/1558) | Go SDK should provide a multi goroutine consumer example
| [INLONG-1560](https://github.com/apache/incubator-inlong/issues/1560) | C++ SDK can not return error code of PartInUse and PartWaiting correctly
| [INLONG-1562](https://github.com/apache/incubator-inlong/issues/1562) | [K8s] There are some syntax bugs and configuration bugs in helm chart
| [INLONG-1563](https://github.com/apache/incubator-inlong/issues/1563) | Go SDK can not stop the heartbeat timer after the consumer has been closed
| [INLONG-1566](https://github.com/apache/incubator-inlong/issues/1566) | The user defined partition offset of Go SDK can not take effect
| [INLONG-1568](https://github.com/apache/incubator-inlong/issues/1568) | C++ SDK cant not return the whether the partition has been registered correctly
| [INLONG-1569](https://github.com/apache/incubator-inlong/issues/1569) | The first_registered is not the same with its naming
| [INLONG-1573](https://github.com/apache/incubator-inlong/issues/1573) | Add TDMsg decode logic to TubeMQ's C++ SDK
| [INLONG-1575](https://github.com/apache/incubator-inlong/issues/1575) | Modify the download url of version 0.9.0
| [INLONG-1579](https://github.com/apache/incubator-inlong/issues/1579) | lots of files are not standard License Header
| [INLONG-1581](https://github.com/apache/incubator-inlong/issues/1581) | InLong's website does not work without Javascript
| [INLONG-1587](https://github.com/apache/incubator-inlong/issues/1587) | Fix compile error
| [INLONG-1592](https://github.com/apache/incubator-inlong/issues/1592) | TextFileReader: The cpu utilization rate is very high, nearly 50%
| [INLONG-1600](https://github.com/apache/incubator-inlong/issues/1600) | There are some YAML errors in bug report and feature request issue forms
| [INLONG-1604](https://github.com/apache/incubator-inlong/issues/1604) | Some resultType is wrong in mapper
| [INLONG-1607](https://github.com/apache/incubator-inlong/issues/1607) | The master version should be added in the bug-report.yml
| [INLONG-1614](https://github.com/apache/incubator-inlong/issues/1614) | dataProxyConfigRepository constructor error
| [INLONG-1617](https://github.com/apache/incubator-inlong/issues/1617) | Ignore mysql directory after run docker compose
| [INLONG-1621](https://github.com/apache/incubator-inlong/issues/1621) | RestTemplateConfig cannot load config from properties
| [INLONG-1625](https://github.com/apache/incubator-inlong/issues/1625) | some page links are not available for Contribution Guide
| [INLONG-1645](https://github.com/apache/incubator-inlong/issues/1645) | [Bug] Druid datasource is not used
| [INLONG-1665](https://github.com/apache/incubator-inlong/issues/1665) | Adjust the content of the document title
| [INLONG-1673](https://github.com/apache/incubator-inlong/issues/1673) | some links are not available after office-website refactored
| [INLONG-1676](https://github.com/apache/incubator-inlong/issues/1676) | two recent PRs were overwritten after the office-website refactored
| [INLONG-1677](https://github.com/apache/incubator-inlong/issues/1677) | the architecture picture is lost in README
| [INLONG-1685](https://github.com/apache/incubator-inlong/issues/1685) | the Chinese Quick Start Guide has some incorrect place after the office-webiste refactored
| [INLONG-1694](https://github.com/apache/incubator-inlong/issues/1694) | Build docker mirror error for TubeMQ C++
| [INLONG-1695](https://github.com/apache/incubator-inlong/issues/1695) | [Bug][DataProxy] Build failed
