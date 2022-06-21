---
title: InLong v1.0.0
---

使用以下链接下载 InLong。

## 1.0.0 release

| 日期 | 版本| 备注 |                                                                                                                                                                                                    下载                                                                                                                                                                                                    |
|:----------:| :----: | :----: |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| 2022-02-17 | 1.0.0 | Source | [[SRC](https://archive.apache.org/dist/incubator/inlong/1.0.0-incubating/apache-inlong-1.0.0-incubating-src.tar.gz)]                 [[ASC](https://archive.apache.org/dist/incubator/inlong/1.0.0-incubating/apache-inlong-1.0.0-incubating-src.tar.gz.asc)]             [[SHA512](https://archive.apache.org/dist/incubator/inlong/1.0.0-incubating/apache-inlong-1.0.0-incubating-src.tar.gz.sha512)] |

### 发布完整性

您必须 [验证](https://www.apache.org/info/verification.html) 下载文件的完整性。
我们为每个发布文件提供 OpenPGP 签名。此签名应与包含 InLong 发布经理的 OpenPGP 密钥的 [KEYS](https://downloads.apache.org/incubator/inlong/KEYS) 文件匹配。
我们还为每个发布文件提供 <code>SHA-512</code> 校验和。下载文件后，您应该计算下载的校验和，并确保它与我们提供的相同。

## 版本 Notes

### 特性
| ISSUE  | Summary  |
| :---- | :------- |
| [INLONG-2347](https://github.com/apache/incubator-inlong/issues/2347) | [Feature]Support hive sink in sort-single-tenant |
| [INLONG-2334](https://github.com/apache/incubator-inlong/issues/2334) | [Feature][inlong-dataproxy]create pulsar client need support config ioThreads |
| [INLONG-2333](https://github.com/apache/incubator-inlong/issues/2333) | [Feature]Support clickhouse sink in sort-single-tenant |
| [INLONG-2266](https://github.com/apache/incubator-inlong/issues/2266) | [Feature]Support reporting metrics by audit-sdk in sort | 
| [INLONG-2250](https://github.com/apache/incubator-inlong/issues/2250) | [Feature][InLong-Sort] Support Kafka sink in InLong-Sort | 
| [INLONG-2247](https://github.com/apache/incubator-inlong/issues/2247) | Read the consume group offset and store to the specified topic | 
| [INLONG-2236](https://github.com/apache/incubator-inlong/issues/2236) | [Feature]Support iceberg sink in sort-single-tenant |
| [INLONG-2232](https://github.com/apache/incubator-inlong/issues/2232) | Add start and end timestamp of segment |
| [INLONG-2218](https://github.com/apache/incubator-inlong/issues/2218) | [Feature][InLong-DataProxy] Inlong-DataProxy support authentication access pulsar |
| [INLONG-2217](https://github.com/apache/incubator-inlong/issues/2217) | [Feature][InLong-DataProxy] Add TCP protocol client demo and config doc feature |
| [INLONG-2216](https://github.com/apache/incubator-inlong/issues/2216) | [Feature][InLong-DataProxy] Add UDP protocol  client demo and config doc |
| [INLONG-2215](https://github.com/apache/incubator-inlong/issues/2215) | [Feature][InLong-DataProxy] Add http protocol  client demo and config doc |
| [INLONG-2326](https://github.com/apache/incubator-inlong/issues/2326) | [Feature] Inlong-Sort-Standalone support to sort the events to ElasticSearch cluster. |
| [INLONG-2322](https://github.com/apache/incubator-inlong/issues/2322) | [Feature][InLong-Sort] Support json format for kafka sink |
| [INLONG-2301](https://github.com/apache/incubator-inlong/issues/2301) | [Feature]  Support Standalone deployment for InLong |
| [INLONG-2207](https://github.com/apache/incubator-inlong/issues/2207) | [Feature][InLong-Website] Add component about charts |  
| [INLONG-2187](https://github.com/apache/incubator-inlong/issues/2187) | [Feature] Website support audit view |                
| [INLONG-2183](https://github.com/apache/incubator-inlong/issues/2183) | [Feature][InLong-Sort] Bump flink version to 1.13.5 | 
| [INLONG-2176](https://github.com/apache/incubator-inlong/issues/2176) | Add histogram metric and client-side metric output |  
| [INLONG-2170](https://github.com/apache/incubator-inlong/issues/2170) | [Feature] add Inlong-Sort-standalone document. |
| [INLONG-2169](https://github.com/apache/incubator-inlong/issues/2169) | [Feature] [Agent] should provide docs for agent db sql collect |
| [INLONG-2167](https://github.com/apache/incubator-inlong/issues/2167) | [Feature] [Agent] support db SQL collect |
| [INLONG-2164](https://github.com/apache/incubator-inlong/issues/2164) | [Feature] Sort-standalone expose metric data using prometheus HttpServer. |
| [INLONG-2161](https://github.com/apache/incubator-inlong/issues/2161) | [Feature][InLong-Manager] Manager support getClusterConfig  |
| [INLONG-2138](https://github.com/apache/incubator-inlong/issues/2138) | [Feature] Agent should provide docs for programmers to customize their own source or sink | 
| [INLONG-2106](https://github.com/apache/incubator-inlong/issues/2106) | [Feature] DataProxy expose metric data using prometheus HttpServer. | 
| [INLONG-2096](https://github.com/apache/incubator-inlong/issues/2096) | [Feature] DataProxy add InlongGroupId+InlongStreamId metric dimensions in TDSDKSource and TubeSink. |
| [INLONG-2077](https://github.com/apache/incubator-inlong/issues/2077) | [Feature]sort-sdk change pulsar consume mode from listener to fetch |
| [INLONG-2076](https://github.com/apache/incubator-inlong/issues/2076) | [Feature] Tube sink of DataProxy support new Message format. |
| [INLONG-2075](https://github.com/apache/incubator-inlong/issues/2075) | [Feature] SDK Source of DataProxy support new Message format. |
| [INLONG-2058](https://github.com/apache/incubator-inlong/issues/2058) | [Feature] The metric of Sort-standalone append a dimension(minute level) of event time, supporting audit reconciliation of minute level.  |
| [INLONG-2056](https://github.com/apache/incubator-inlong/issues/2056) | [Feature]The metric of DataProxy append a dimension(minute level) of event time, supporting audit reconciliation of minute level. |
| [INLONG-2055](https://github.com/apache/incubator-inlong/issues/2055) | [Feature] [InLong audit] Audit SDK Support real-time report  |
| [INLONG-2054](https://github.com/apache/incubator-inlong/issues/2054) | [Feature] [InLong audit] Audit SDK Support disaster tolerance |
| [INLONG-2053](https://github.com/apache/incubator-inlong/issues/2053) | [Feature] [InLong audit] Audit Web Page Display |
| [INLONG-2051](https://github.com/apache/incubator-inlong/issues/2051) | [Feature] [InLong audit] Add Audit API for Manager |
| [INLONG-2050](https://github.com/apache/incubator-inlong/issues/2050) | [Feature] [InLong audit] Audit Strore for Elasticsearch |
| [INLONG-2045](https://github.com/apache/incubator-inlong/issues/2045) | [Feature]sort-sdk support Prometheus monitor |
| [INLONG-2028](https://github.com/apache/incubator-inlong/issues/2028) | [Feature][CI] Add support for docker build on GitHub Actions |
| [INLONG-1992](https://github.com/apache/incubator-inlong/issues/1992) | [Feature]sort-flink support configurable loader of getting configuration. |
| [INLONG-1950](https://github.com/apache/incubator-inlong/issues/1950) | [Feature] DataProxy add supporting to udp protocol for reporting data |
| [INLONG-1949](https://github.com/apache/incubator-inlong/issues/1949) | [Feature] DataProxy sdk add demo  |
| [INLONG-1931](https://github.com/apache/incubator-inlong/issues/1931) | [Feature]Inlong-Sort-Standalone-readapi support to consume events from inlong cache clusters(tube) |
| [INLONG-1895](https://github.com/apache/incubator-inlong/issues/1895) | [Feature]Inlong-Sort-Standalone support to sort the events to Hive cluster. |
| [INLONG-1894](https://github.com/apache/incubator-inlong/issues/1894) | [Feature]Inlong-Sort-Standalone support JMX metrics listener for pushing. |
| [INLONG-1892](https://github.com/apache/incubator-inlong/issues/1892) | [Feature]Inlong-Sort-Standalone support to consume events from Pulsar cache clusters. |
| [INLONG-1738](https://github.com/apache/incubator-inlong/issues/1738) | [Feature]  InLong audit |

### 改进
| ISSUE  | Summary  |
| :---- | :------- |
| [INLONG-2373](https://github.com/apache/incubator-inlong/issues/2373) | [Improve] Refactor of CreateBusinessWorkflow |
| [INLONG-2358](https://github.com/apache/incubator-inlong/issues/2358) | [InLong audit] modify audit proxy name of introduction |               
| [INLONG-2352](https://github.com/apache/incubator-inlong/issues/2352) | [InLong audit] add audit introduction |                                
| [INLONG-2349](https://github.com/apache/incubator-inlong/issues/2349) | [inlong-dataproxy] change log file name from flum.log to dataproxy.log |
| [INLONG-2331](https://github.com/apache/incubator-inlong/issues/2331) | [Improve] Extract connector related code to sort-connector module | 
| [INLONG-2329](https://github.com/apache/incubator-inlong/issues/2329) | [Improve][inlong-dataproxy-sdk] asyncSendMessage in sender.java can be optimized to reduce the number of invalid objects |
| [INLONG-2297](https://github.com/apache/incubator-inlong/issues/2297) | [Improve][agent] support audit for source and sink |
| [INLONG-2296](https://github.com/apache/incubator-inlong/issues/2296) | Added lag consumption log |
| [INLONG-2294](https://github.com/apache/incubator-inlong/issues/2294) | Rename the variable BROKER_VERSION to SERVER_VERSION |
| [INLONG-2279](https://github.com/apache/incubator-inlong/issues/2279) | [Improve] Supplement TubeMQ's  Javadoc information |
| [INLONG-2274](https://github.com/apache/incubator-inlong/issues/2274) | [Improve][Manager] Supports configuring whether to create a Hive database or table |
| [INLONG-2271](https://github.com/apache/incubator-inlong/issues/2271) | [Improve] rename the TDMsg to InLongMsg |
| [INLONG-2258](https://github.com/apache/incubator-inlong/issues/2258) | [Improve][dashboard] Audit page support auto select datastream |
| [INLONG-2254](https://github.com/apache/incubator-inlong/issues/2254) | Add historical offset query API |
| [INLONG-2245](https://github.com/apache/incubator-inlong/issues/2245) | [Improve] Supports database-level isolation of audit queries | 
| [INLONG-2229](https://github.com/apache/incubator-inlong/issues/2229) | [Improve] Manager support pulsar authentification  | 
| [INLONG-2225](https://github.com/apache/incubator-inlong/issues/2225) | [Improve][InLong-Dashboard] Audit module support i18n | 
| [INLONG-2220](https://github.com/apache/incubator-inlong/issues/2220) | [Improve] move dataproxy-sdk to inlong-sdk | 
| [INLONG-2210](https://github.com/apache/incubator-inlong/issues/2210) | [Improve] package `inlong-manager-web` as `inlong-manager` | 
| [INLONG-2200](https://github.com/apache/incubator-inlong/issues/2200) | [Feature] DataProxy add supporting to http protocol for reporting data |  
| [INLONG-2196](https://github.com/apache/incubator-inlong/issues/2196) | [Improve] move website to dashboard |         
| [INLONG-2193](https://github.com/apache/incubator-inlong/issues/2193) | [Improve] optimize inlong manager structure | 
| [INLONG-2160](https://github.com/apache/incubator-inlong/issues/2160) | [Improve] Time format conversion using DateTimeFormatter |  
| [INLONG-2151](https://github.com/apache/incubator-inlong/issues/2151) | [Improve] Add time and sort statistics by topic | 
| [INLONG-2133](https://github.com/apache/incubator-inlong/issues/2133) | Update year to 2022 | 
| [INLONG-2126](https://github.com/apache/incubator-inlong/issues/2126) | [Improve]prepare_env.sh can be merged into dataproxy-start.sh，as a InLong beginner maybe forgot this step |
| [INLONG-2122](https://github.com/apache/incubator-inlong/issues/2122) | [Improve] Send a dev notifications email for issue status |
| [INLONG-2119](https://github.com/apache/incubator-inlong/issues/2119) | [Improve][Website][CI] Add support for building inlong website when building or testing project |
| [INLONG-2117](https://github.com/apache/incubator-inlong/issues/2117) | [Improve][agent] optimize class name  |
| [INLONG-2116](https://github.com/apache/incubator-inlong/issues/2116) | [Improve][Website] Improve the README document |
| [INLONG-2107](https://github.com/apache/incubator-inlong/issues/2107) | [Improve] [InLong Manager] remove gson and json-simple from dependency |  
| [INLONG-2103](https://github.com/apache/incubator-inlong/issues/2103) | [Improve] update the definition of Apache InLong | 
| [INLONG-2073](https://github.com/apache/incubator-inlong/issues/2073) | [Improve] [InLong agent] remove spring 2.5.6 from dependencyManagement |
| [INLONG-2072](https://github.com/apache/incubator-inlong/issues/2072) | [Improve] update the deployment guide for sort |
| [INLONG-2070](https://github.com/apache/incubator-inlong/issues/2070) | [Improve] update the default pulsar demo configuration for dataproxy  |
| [INLONG-1944](https://github.com/apache/incubator-inlong/issues/1944) | Bumped version to 0.13.0-incubating-SNAPSHOT for the master branch |

### Bug 修复
| ISSUE  | Summary                                                                                                                          |
| :---- |:---------------------------------------------------------------------------------------------------------------------------------|
| [INLONG-2371](https://github.com/apache/incubator-inlong/issues/2371) | [Bug][inlong-dataproxy] monitorIndex should not use msgid for key,it affects performance                                         |
| [INLONG-2361](https://github.com/apache/incubator-inlong/issues/2361) | [Bug] audit have no data                                                                                                         |
| [INLONG-2344](https://github.com/apache/incubator-inlong/issues/2344) | [Bug][InLong-Sort] Kafka sink ut failed under multithread compiling                                                              | 
| [INLONG-2338](https://github.com/apache/incubator-inlong/issues/2338) | [Bug] agent can not get dataproxy for docker-compose environment                                                                 |
| [INLONG-2336](https://github.com/apache/incubator-inlong/issues/2336) | [Bug][agent] the manager fetcher thread was shielded                                                                             |
| [INLONG-2288](https://github.com/apache/incubator-inlong/issues/2288) | [Bug] sort-flink task catches an NPE                                                                                             |
| [INLONG-2264](https://github.com/apache/incubator-inlong/issues/2264) | [Bug] DataProxy get metric value with error JMX ObjectName                                                                       |
| [INLONG-2263](https://github.com/apache/incubator-inlong/issues/2263) | [Bug] SortStandalone get metric value with error JMX ObjectName                                                                  |
| [INLONG-2252](https://github.com/apache/incubator-inlong/issues/2252) | [Bug] Remove character in sort-standalone quick_start.md.                                                                        |     
| [INLONG-2242](https://github.com/apache/incubator-inlong/issues/2242) | [BUG][manager] table field incorrect: db_collector_detail_task, 'sql' should be 'sql_statement'                                  |
| [INLONG-2237](https://github.com/apache/incubator-inlong/issues/2237) | [Bug] call audit query interface error                                                                                           |
| [INLONG-2230](https://github.com/apache/incubator-inlong/issues/2230) | [Bug]  manager started get jackson error                                                                                         |    
| [INLONG-2227](https://github.com/apache/incubator-inlong/issues/2227) | [Bug] build failed for dataproxy-sdk                                                                                             |
| [INLONG-2224](https://github.com/apache/incubator-inlong/issues/2224) | [Bug][inlong-DataProxy] Source receive one message will be send to pulsar twice when config both memery channel and file channel | 
| [INLONG-2202](https://github.com/apache/incubator-inlong/issues/2202) | [Bug] add lower version log4j exclusion in sort-standalone pom.xml                                                               |   
| [INLONG-2199](https://github.com/apache/incubator-inlong/issues/2199) | [Bug][inlong-audit][audit-source] one message will put tow channel, and store two message                                        | 
| [INLONG-2191](https://github.com/apache/incubator-inlong/issues/2191) | [Bug][inlong-audit][audit-source] requestId is not set in response message                                                       |
| [INLONG-2190](https://github.com/apache/incubator-inlong/issues/2190) | [Bug][inlong-audit][audit-store] can not started by start shell                                                                  |
| [INLONG-2174](https://github.com/apache/incubator-inlong/issues/2174) | [Bug]Clickhouse sink can cause data loss when checkpointing                                                                      | 
| [INLONG-2155](https://github.com/apache/incubator-inlong/issues/2155) | [Bug][Manager] Some unit tests running failed                                                                                    | 
| [INLONG-2148](https://github.com/apache/incubator-inlong/issues/2148) | [Bug][sort]Pattern used for extracting clickhouse metadata is not compatible with some versions of clickhouse                    |
| [INLONG-2143](https://github.com/apache/incubator-inlong/issues/2143) | [Bug][sort] caught a NoClassDefFoundError exception                                                                              |
| [INLONG-2137](https://github.com/apache/incubator-inlong/issues/2137) | [Bug] version 0.12.0 cannot pass UT                                                                                              |
| [INLONG-2130](https://github.com/apache/incubator-inlong/issues/2130) | [Bug] inlong-sort occurs `ClassNotFoundException: og.objenesis..ClassUtils`                                                      | 
| [INLONG-2113](https://github.com/apache/incubator-inlong/issues/2113) | [Bug][Docker] Audit docker image build failed                                                                                    |
| [INLONG-2098](https://github.com/apache/incubator-inlong/issues/2098) | [Bug] agent can not restart successfully                                                                                         |
| [INLONG-2097](https://github.com/apache/incubator-inlong/issues/2097) | [Bug][Docker] error while building tubemq image                                                                                  |
| [INLONG-2094](https://github.com/apache/incubator-inlong/issues/2094) | [Bug] summit job failed after enabling Prometheus                                                                                |
| [INLONG-2089](https://github.com/apache/incubator-inlong/issues/2089) | [Bug]tubemq-manager throws error when starting:   java.lang.ClassNotFoundException: javax.validation.ClockProvider               |
| [INLONG-2087](https://github.com/apache/incubator-inlong/issues/2087) | [Bug] Miss a "-p" flag before 2181:2181 in the command "Start Standalone Container"                                              |
| [INLONG-2085](https://github.com/apache/incubator-inlong/issues/2085) | [Bug] Solve the incubator-inlong-website Compilation failure problem                                                             |
| [INLONG-2084](https://github.com/apache/incubator-inlong/issues/2084) | [Bug]A bug in the Go SDK demo, and the API result class is not clear enough                                                      |
| [INLONG-2082](https://github.com/apache/incubator-inlong/issues/2082) | [Bug] file agent collector file failed                                                                                           |
| [INLONG-2080](https://github.com/apache/incubator-inlong/issues/2080) | [Bug] file agent send file failed                                                                                                |
| [INLONG-2078](https://github.com/apache/incubator-inlong/issues/2078) | [Bug] create pulsar subscription failed                                                                                          |
| [INLONG-2068](https://github.com/apache/incubator-inlong/issues/2068) | [Bug] the class name in dataproxy stop.sh  is wrong                                                                              |
| [INLONG-2066](https://github.com/apache/incubator-inlong/issues/2066) | Each message will be consumed twice.[Bug]                                                                                        |
| [INLONG-2064](https://github.com/apache/incubator-inlong/issues/2064) | [Bug]master branch, tubemq-manager  module occurs: package Java.validation.constraints not exists                                |
| [INLONG-2061](https://github.com/apache/incubator-inlong/issues/2061) | [Bug][Office-Website] The homepage structure image error                                                                         |
| [INLONG-1989](https://github.com/apache/incubator-inlong/issues/1989) | [Bug]some font of " DataProxy-SDK architecture " page  incorrectly                                                               |
| [INLONG-1342](https://github.com/apache/incubator-inlong/issues/1342) | [Bug] Create tube consumer group failed where the group exists                                                                   |  

