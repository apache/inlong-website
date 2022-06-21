---
title: InLong v0.12.0
---

Use the links below to download the Apache InLong from one of our mirrors.

## InLong

| Date | Version| Comment | Downloads |
|:---:|:--:|:--:|:--:|
| Dec 22, 2021 | 0.12.0 | Source | [[SRC](https://archive.apache.org/dist/incubator/inlong/0.12.0-incubating/apache-inlong-0.12.0-incubating-src.tar.gz)]                 [[ASC](https://archive.apache.org/dist/incubator/inlong/0.12.0-incubating/apache-inlong-0.12.0-incubating-src.tar.gz.asc)]             [[SHA512](https://archive.apache.org/dist/incubator/inlong/0.12.0-incubating/apache-inlong-0.12.0-incubating-src.tar.gz.sha512)] |

### Release Integrity

You must [verify](https://www.apache.org/info/verification.html) the integrity of the downloaded files.
We provide OpenPGP signatures for every release file. This signature should be matched against the [KEYS](https://downloads.apache.org/incubator/inlong/KEYS) file which contains the OpenPGP keys of InLong's Release Managers.
We also provide <code>SHA-512</code> checksums for every release file. After you download the file, you should calculate a checksum for your download, and make sure it is the same as ours.

## Release Notes

### FEATURES:
| ISSUE  | Summary  |
| :---- | :------- |
| [INLONG-1310](https://github.com/apache/incubator-inlong/issues/1310) | [Feature] [Feature] Support Pulsar
| [INLONG-1711](https://github.com/apache/incubator-inlong/issues/1711) | [feature] website support process pulsar dataflow
| [INLONG-1712](https://github.com/apache/incubator-inlong/issues/1712) | [Feature][agent] Add agent metric statistics
| [INLONG-1722](https://github.com/apache/incubator-inlong/issues/1722) | [Feature] Add IssueNavigationLink for IDEA
| [INLONG-1725](https://github.com/apache/incubator-inlong/issues/1725) | [Feature] [InLong-Manager] Modify bid and tid (or dsid) to inlongGroupId and inlongStreamId
| [INLONG-1726](https://github.com/apache/incubator-inlong/issues/1726) | [Feature] [InLong-Website] Adapt the Manager module and modify the field names of bid and dsid
| [INLONG-1732](https://github.com/apache/incubator-inlong/issues/1732) | [Feature] [InLong-Agent] Modify bid and tid to inlongGroupId and inlongStreamId
| [INLONG-1738](https://github.com/apache/incubator-inlong/issues/1738) | [Feature] InLong audit
| [INLONG-1764](https://github.com/apache/incubator-inlong/issues/1764) | [Feature]Use black for code block background style
| [INLONG-1768](https://github.com/apache/incubator-inlong/issues/1768) | [Feature] Adding consume type that allows partition assign from the client
| [INLONG-1785](https://github.com/apache/incubator-inlong/issues/1785) | [Feature] add 0.11.0 release article for blog
| [INLONG-1786](https://github.com/apache/incubator-inlong/issues/1786) | [Feature]Inlong-common provide monitoring indicator reporting mechanism with JMX, user can implement the code that read the metrics and report to user-defined monitor system.
| [INLONG-1791](https://github.com/apache/incubator-inlong/issues/1791) | [Feature][InLong-Manager] Some bid fields have not been modified
| [INLONG-1796](https://github.com/apache/incubator-inlong/issues/1796) | [Feature]DataProxy support monitor indicator with JMX.
| [INLONG-1809](https://github.com/apache/incubator-inlong/issues/1809) | [Feature] Adjust the font style of the official home page
| [INLONG-1814](https://github.com/apache/incubator-inlong/issues/1814) | [Feature] Show document file subdirectories
| [INLONG-1817](https://github.com/apache/incubator-inlong/issues/1817) | [Feature][InLong-Manager] Workflow supports data stream for Pulsar
| [INLONG-1821](https://github.com/apache/incubator-inlong/issues/1821) | [INLONG-810] Sort Module Support store data to ApacheDoris
| [INLONG-1826](https://github.com/apache/incubator-inlong/issues/1826) | [Feature] Use jmx metric defined in inlong-common
| [INLONG-1830](https://github.com/apache/incubator-inlong/issues/1830) | [Feature] Add a star reminder
| [INLONG-1833](https://github.com/apache/incubator-inlong/issues/1833) | [Feature] Add Team button to the navigation bar
| [INLONG-1840](https://github.com/apache/incubator-inlong/issues/1840) | [Feature] add a Welcome committer articles to official website blog
| [INLONG-1847](https://github.com/apache/incubator-inlong/issues/1847) | [Feature][InLong-Manager] Add consumption APIs for Pulsar MQ
| [INLONG-1849](https://github.com/apache/incubator-inlong/issues/1849) | [Feature][InLong-Manager] Push Sort config for Pulsar
| [INLONG-1851](https://github.com/apache/incubator-inlong/issues/1851) | [Feature]TubeMQ supports monitoring indicators with JMX.
| [INLONG-1853](https://github.com/apache/incubator-inlong/issues/1853) | [Feature] Agent should provide docs for jmx metrics
| [INLONG-1854](https://github.com/apache/incubator-inlong/issues/1854) | [Feature] Agent Rmi args should be added in agent-env.sh
| [INLONG-1856](https://github.com/apache/incubator-inlong/issues/1856) | [Feature] Add a news tab on the official website
| [INLONG-1867](https://github.com/apache/incubator-inlong/issues/1867) | [Feature] Add a user column display to the official website
| [INLONG-1873](https://github.com/apache/incubator-inlong/issues/1873) | [Feature] refactor the structure of the document for the official website
| [INLONG-1874](https://github.com/apache/incubator-inlong/issues/1874) | [Feature] Add contact information and common links at the bottom of the homepage of the official website
| [INLONG-1878](https://github.com/apache/incubator-inlong/issues/1878) | [Feature] Optimize user display page layout style
| [INLONG-1901](https://github.com/apache/incubator-inlong/issues/1901) | [Feature] Optimize the layout of the user display page
| [INLONG-1910](https://github.com/apache/incubator-inlong/issues/1910) | [Feature]Inlong-Sort-Standalone-sort-sdk support to consume events from inlong cache clusters(pulsar)
| [INLONG-1926](https://github.com/apache/incubator-inlong/issues/1926) | [Feature]Inlong-Sort-Standalone support JMX metrics listener for pulling.
| [INLONG-1938](https://github.com/apache/incubator-inlong/issues/1938) | [Feature] DataProxy send message to multi-pulsar cluster conf demo
| [INLONG-2002](https://github.com/apache/incubator-inlong/issues/2002) | [Feature]creating data access with pulsar, users should be able to change the ensemble param

### IMPROVEMENTS:
| ISSUE  | Summary  |
| :---- | :------- |
| [INLONG-1708](https://github.com/apache/incubator-inlong/issues/1708) | [Improve] Add restrict of @author and Chinese in java file
| [INLONG-1729](https://github.com/apache/incubator-inlong/issues/1729) | [Improve] Avoid using constant value as version when referencing other modules
| [INLONG-1739](https://github.com/apache/incubator-inlong/issues/1739) | [Improve] Optimization of TubeMQ SDK usage demo
| [INLONG-1740](https://github.com/apache/incubator-inlong/issues/1740) | [Improve] change bid/tid to be more identifiable
| [INLONG-1746](https://github.com/apache/incubator-inlong/issues/1746) | [improve] the log4j properties for dataproxy contains some useless code and some class name are incorrect
| [INLONG-1756](https://github.com/apache/incubator-inlong/issues/1756) | [Improve] Use metadata to manage data sources and flow fields
| [INLONG-1772](https://github.com/apache/incubator-inlong/issues/1772) | [Improve]Adjust the ProcessResult class implementation
| [INLONG-1798](https://github.com/apache/incubator-inlong/issues/1798) | [Improve]RestTemplate does not read configuration from the configuration file
| [INLONG-1802](https://github.com/apache/incubator-inlong/issues/1802) | [Improve] Optimize document version management
| [INLONG-1808](https://github.com/apache/incubator-inlong/issues/1808) | [Improve] Optimize document of DataProxy about monitor metric.
| [INLONG-1810](https://github.com/apache/incubator-inlong/issues/1810) | [Improve] update the architecture for office-website
| [INLONG-1811](https://github.com/apache/incubator-inlong/issues/1811) | [Improve] Modify the architecture diagram of README.md
| [INLONG-1815](https://github.com/apache/incubator-inlong/issues/1815) | [Improve][translation] the blog of the 0.11.0 release should be translated into English
| [INLONG-1819](https://github.com/apache/incubator-inlong/issues/1819) | Optimize GC parameter configuration in TubeMQ's env.sh file
| [INLONG-1822](https://github.com/apache/incubator-inlong/issues/1822) | Optimize the table formatting in some MD documents
| [INLONG-1824](https://github.com/apache/incubator-inlong/issues/1824) | Refine the how-to-vote-a-committer-ppmc.md
| [INLONG-1857](https://github.com/apache/incubator-inlong/issues/1857) | [Improve] Adjust the content of the Disclaimer and Events column
| [INLONG-1859](https://github.com/apache/incubator-inlong/issues/1859) | [Improve][InLong-Manager] Remove duplicate SQL files
| [INLONG-1861](https://github.com/apache/incubator-inlong/issues/1861) | [Improve] Update document for docker-compose
| [INLONG-1863](https://github.com/apache/incubator-inlong/issues/1863) | [Improve][TubeMQ] repHelperHost for master should be exposed in configuration
| [INLONG-1864](https://github.com/apache/incubator-inlong/issues/1864) | [Improve] Agent Website doc contains a typo
| [INLONG-1865](https://github.com/apache/incubator-inlong/issues/1865) | [Improve] There are several errors in TubeMQ's guidance document
| [INLONG-1877](https://github.com/apache/incubator-inlong/issues/1877) | [Improve] improve the document's format for the office website
| [INLONG-1886](https://github.com/apache/incubator-inlong/issues/1886) | [Improve][InLong-Manager] Refactor and delete unused entities
| [INLONG-1916](https://github.com/apache/incubator-inlong/issues/1916) | [Improve][website] modify the Business to InLong Group
| [INLONG-1934](https://github.com/apache/incubator-inlong/issues/1934) | [Improve] update the image of the hive example after the bid changed
| [INLONG-1935](https://github.com/apache/incubator-inlong/issues/1935) | [Improve] package the SQL file for the manager
| [INLONG-1939](https://github.com/apache/incubator-inlong/issues/1939) | [Improve] add basic concepts for InLong
| [INLONG-1952](https://github.com/apache/incubator-inlong/issues/1952) | [Improve] Update the office website structure image
| [INLONG-1987](https://github.com/apache/incubator-inlong/issues/1987) | [Improve] Add function comment information in TubeMQ
| [INLONG-2017](https://github.com/apache/incubator-inlong/issues/2017) | [Improve] Add more guide documents for Pulsar

### BUG FIXES:
| ISSUE  | Summary  |
| :---- | :------- |
| [INLONG-1706](https://github.com/apache/incubator-inlong/issues/1706) | [Bug] there are some incorrect expressions for issues tracking in the how-to-contribute file
| [INLONG-1716](https://github.com/apache/incubator-inlong/issues/1716) | [Bug][manager] can not login successfully
| [INLONG-1731](https://github.com/apache/incubator-inlong/issues/1731) | [Bug] release template has sth wrong with KEY URL
| [INLONG-1745](https://github.com/apache/incubator-inlong/issues/1745) | [Bug]TubeMQ HTTP API download link cannot be opened
| [INLONG-1752](https://github.com/apache/incubator-inlong/issues/1752) | [Bug] The official website action failed to build, it may be that the node version needs to be upgraded
| [INLONG-1754](https://github.com/apache/incubator-inlong/issues/1754) | [Bug] confused navigation in download page
| [INLONG-1755](https://github.com/apache/incubator-inlong/issues/1755) | [Bug] Broken link in the ANNOUNCE email template
| [INLONG-1769](https://github.com/apache/incubator-inlong/issues/1769) | [Bug][TubeMQ]Util function SpitToMap in Go SDK panic
| [INLONG-1771](https://github.com/apache/incubator-inlong/issues/1771) | [Bug] Website readme error
| [INLONG-1776](https://github.com/apache/incubator-inlong/issues/1776) | [Bug] Get error while parse td msg with go client
| [INLONG-1777](https://github.com/apache/incubator-inlong/issues/1777) | [Bug][TubeMQ]Go SDK failed to parse tdmsg v4
| [INLONG-1781](https://github.com/apache/incubator-inlong/issues/1781) | [Bug] Get uncorrect time value of attributes
| [INLONG-1783](https://github.com/apache/incubator-inlong/issues/1783) | [Bug] Topic filters config has't any effects
| [INLONG-1828](https://github.com/apache/incubator-inlong/issues/1828) | [Bug]parse message error: invalid default attr's msg Length
| [INLONG-1876](https://github.com/apache/incubator-inlong/issues/1876) | [Bug] office website build failed
| [INLONG-1897](https://github.com/apache/incubator-inlong/issues/1897) | [Bug][Website] form cannot use chain name
| [INLONG-1898](https://github.com/apache/incubator-inlong/issues/1898) | [Bug][Website] The error of the person responsible for the second edit of the new consumption
| [INLONG-1902](https://github.com/apache/incubator-inlong/issues/1902) | [Bug][Website] Access create params error
| [INLONG-1911](https://github.com/apache/incubator-inlong/issues/1911) | [Bug] Some questions about the metric implementation in the common module
| [INLONG-1915](https://github.com/apache/incubator-inlong/issues/1915) | [Bug] tubemq master can not start
| [INLONG-1919](https://github.com/apache/incubator-inlong/issues/1919) | [Bug] TubeMQ HTTP API xls can not download
| [INLONG-1920](https://github.com/apache/incubator-inlong/issues/1920) | [Bug]Failed to start up MultiSession factory by following the demo code
| [INLONG-1953](https://github.com/apache/incubator-inlong/issues/1953) | [Bug]It can not be submitted when I create data access using file data source
| [INLONG-1954](https://github.com/apache/incubator-inlong/issues/1954) | [Bug]inlong-sort does not support pulsar ???
| [INLONG-1955](https://github.com/apache/incubator-inlong/issues/1955) | [Bug]Source data fields' type are all mapped to tinyint, and can not be modified
| [INLONG-1958](https://github.com/apache/incubator-inlong/issues/1958) | [Bug]Avoid the security risks of log4j package
| [INLONG-1966](https://github.com/apache/incubator-inlong/issues/1966) | [Bug][InLong-Manager] The stream name field is not required, but error occurs when create a data stream with name field not filled
| [INLONG-1967](https://github.com/apache/incubator-inlong/issues/1967) | [Bug][InLong-Manager] Cannot create the Pulsar subscription
| [INLONG-1973](https://github.com/apache/incubator-inlong/issues/1973) | [Bug]with the demo conf of dataproxy, the app can not start rightly
| [INLONG-1975](https://github.com/apache/incubator-inlong/issues/1975) | [Bug]error occurs when deleting a data access
| [INLONG-1978](https://github.com/apache/incubator-inlong/issues/1978) | [Bug]Create multiple file import tasks, and inlong-agent reports an error when registering metric
| [INLONG-1980](https://github.com/apache/incubator-inlong/issues/1980) | [Bug]the content of topics.properties generated incorrectly，and too much backup files generate automatically
| [INLONG-1981](https://github.com/apache/incubator-inlong/issues/1981) | [Bug] When compiling the project, the InLong-audit module reported Warning errors
| [INLONG-1984](https://github.com/apache/incubator-inlong/issues/1984) | [Bug][InLong-Manager] Create pulsar access, modify pulsar related parameters failed
| [INLONG-1995](https://github.com/apache/incubator-inlong/issues/1995) | [Bug] Compile Audit-SDK and report TestNGException
| [INLONG-1996](https://github.com/apache/incubator-inlong/issues/1996) | [Bug] Compile the project and InLong-Agent module throws 3 exceptions
| [INLONG-1997](https://github.com/apache/incubator-inlong/issues/1997) | [Bug]after the compilation of inlong, no lib directory in inlong-dataproxy
| [INLONG-2009](https://github.com/apache/incubator-inlong/issues/2009) | [Bug]Topic obtained through "/api/inlong/manager/openapi/dataproxy/getConfig" is not right
| [INLONG-2012](https://github.com/apache/incubator-inlong/issues/2012) | [Bug] Inlong-agent could not fetch file agent task through api --"/api/inlong/manager/openapi/agent/fileAgent/getTaskConf"
| [INLONG-2014](https://github.com/apache/incubator-inlong/issues/2014) | [Bug]inlong-dataproxy could not identify the groupId and topic format of topics.properties
| [INLONG-2018](https://github.com/apache/incubator-inlong/issues/2018) | [Bug]after approving a data access, some failures happen and the data access is always in the state of configuration
| [INLONG-2020](https://github.com/apache/incubator-inlong/issues/2020) | [Bug] Dependency of "jul-to-slf4j" is missing for pulsar connector
| [INLONG-2023](https://github.com/apache/incubator-inlong/issues/2023) | [Bug] Agent stream id is not passed to proxy
| [INLONG-2026](https://github.com/apache/incubator-inlong/issues/2026) | [Bug] Found Pulsar client create failure when starting Sort
| [INLONG-2030](https://github.com/apache/incubator-inlong/issues/2030) | [Bug]inlong-agent raises NPE error when running
| [INLONG-2032](https://github.com/apache/incubator-inlong/issues/2032) | [Bug]"javax.xml.parsers.FactoryConfigurationError" throwed in flink when starting a inlong-sort job
| [INLONG-2035](https://github.com/apache/incubator-inlong/issues/2035) | [Bug] Agent use wrong tid __ to generate message
| [INLONG-2038](https://github.com/apache/incubator-inlong/issues/2038) | [Bug]inlong-sort abandon data from pulsar due to an ClassCastException
| [INLONG-2043](https://github.com/apache/incubator-inlong/issues/2043) | [Bug] Sort module renames tid to streamId

