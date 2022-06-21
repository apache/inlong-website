---
title: InLong v0.9.0
---

Use the links below to download the Apache InLong from one of our mirrors.

## InLong

| Date | Version| Comment | Downloads |
|:---:|:--:|:--:|:--:|
| July 11, 2021 | 0.9.0 | Source | [[SRC](https://archive.apache.org/dist/incubator/inlong/0.9.0-incubating/apache-inlong-0.9.0-incubating-src.tar.gz)]                 [[ASC](https://archive.apache.org/dist/incubator/inlong/0.9.0-incubating/apache-inlong-0.9.0-incubating-src.tar.gz.asc)]             [[SHA512](https://archive.apache.org/dist/incubator/inlong/0.9.0-incubating/apache-inlong-0.9.0-incubating-src.tar.gz.sha512)] |

### Release Integrity

You must [verify](https://www.apache.org/info/verification.html) the integrity of the downloaded files.
We provide OpenPGP signatures for every release file. This signature should be matched against the [KEYS](https://downloads.apache.org/incubator/inlong/KEYS) file which contains the OpenPGP keys of InLong's Release Managers.
We also provide <code>SHA-512</code> checksums for every release file. After you download the file, you should calculate a checksum for your download, and make sure it is the same as ours.

## Release Notes

### IMPROVEMENTS:
| JIRA  | Summary  | Priority |
| :---- | :------- | :------- |
| [INLONG-594](https://issues.apache.org/jira/browse/INLONG-594) | Trpc-go  tube sdk strongly rely on local config  | Major |
| [INLONG-616](https://issues.apache.org/jira/browse/INLONG-616) | Adjust the content in .asf.yaml according to the new project name  | Major |
| [INLONG-651](https://issues.apache.org/jira/browse/INLONG-651) | Refine the tubemq-client-cpp build description  | Major |
| [INLONG-655](https://issues.apache.org/jira/browse/INLONG-655) | add dependency in tube-manager  | Major |
| [INLONG-656](https://issues.apache.org/jira/browse/INLONG-656) | fix tubemanager start.sh  | Major |
| [INLONG-657](https://issues.apache.org/jira/browse/INLONG-657) | remove some test cases in agent  | Major |
| [INLONG-659](https://issues.apache.org/jira/browse/INLONG-659) | fix unit test in agent  | Major |
| [INLONG-666](https://issues.apache.org/jira/browse/INLONG-666) | change tar name in agent  | Major |
| [INLONG-697](https://issues.apache.org/jira/browse/INLONG-697) | fix decode error in proxySdk  | Major |
| [INLONG-705](https://issues.apache.org/jira/browse/INLONG-705) | add stop.sh in dataproxy  | Major |
| [INLONG-743](https://issues.apache.org/jira/browse/INLONG-743) | Adjust the rat check setting of the pom.xml  | Major |

### BUG FIXES:
| JIRA  | Summary  | Priority |
| :---- | :------- | :------- |
| [INLONG-577](https://issues.apache.org/jira/browse/INLONG-577) | reload status output and topic config output mismatch | Major |
| [INLONG-612](https://issues.apache.org/jira/browse/INLONG-612) | Restful api "admin_snapshot_message" is not compatible with the old version | Major |
| [INLONG-638](https://issues.apache.org/jira/browse/INLONG-638) | Issues About Disk Error recovery | Major |
| [INLONG-688](https://issues.apache.org/jira/browse/INLONG-688) | change additionstr to additionAtr in agent | Major |
| [INLONG-703](https://issues.apache.org/jira/browse/INLONG-703) | Query after adding a consumer group policy and report a null error | Major |
| [INLONG-724](https://issues.apache.org/jira/browse/INLONG-724) | Encountered a symbol not found error when compiling | Major |


### TASK:
| JIRA | Summary | Priority |
|:---- |:---- | :--- |
| [INLONG-613](https://issues.apache.org/jira/browse/INLONG-613) | Adjust the project codes according to the renaming requirements  | Major |

### SUB-TASK:
| JIRA  | Summary  | Priority |
| :---- | :------- | :------- |
| [INLONG-519](https://issues.apache.org/jira/browse/INLONG-519) | Bumped version to 0.9.0-SNAPSHOT | Major |
| [INLONG-565](https://issues.apache.org/jira/browse/INLONG-565) | Replace simple scripts and code implementation | Major |
| [INLONG-571](https://issues.apache.org/jira/browse/INLONG-571) | Adjust WebOtherInfoHandler class implementation | Major |
| [INLONG-573](https://issues.apache.org/jira/browse/INLONG-573) | Adjust WebAdminFlowRuleHandler class implementation | Major |
| [INLONG-574](https://issues.apache.org/jira/browse/INLONG-574) | Adjust WebAdminGroupCtrlHandler class implementation | Major |
| [INLONG-632](https://issues.apache.org/jira/browse/INLONG-632) | Add inlong-manager subdirectory | Major |
| [INLONG-633](https://issues.apache.org/jira/browse/INLONG-633) | Add inlong-sort subdirectory | Major |
| [INLONG-634](https://issues.apache.org/jira/browse/INLONG-634) | Add inlong-tubemq subdirectory | Major |
| [INLONG-635](https://issues.apache.org/jira/browse/INLONG-635) | Add inlong-dataproxy subdirectory | Major |
| [INLONG-636](https://issues.apache.org/jira/browse/INLONG-636) | Add inlong-agent subdirectory | Major |
| [INLONG-640](https://issues.apache.org/jira/browse/INLONG-640) | Adjust the main frame of the InLong project | Major |
| [INLONG-641](https://issues.apache.org/jira/browse/INLONG-641) | Add inlong-common module | Major |
| [INLONG-642](https://issues.apache.org/jira/browse/INLONG-642) | Add inlong-website subdirectory | Major |
| [INLONG-643](https://issues.apache.org/jira/browse/INLONG-643) | Add inlong-dataproxy-sdk subdirectory | Major |
| [INLONG-644](https://issues.apache.org/jira/browse/INLONG-644) | Remove "/dist" from .gitignore and add subdirectory dist in inlong-sort | Major |
| [INLONG-646](https://issues.apache.org/jira/browse/INLONG-646) | Remove time related unit tests until timezone is configurable in inlong-sort | Major |
| [INLONG-647](https://issues.apache.org/jira/browse/INLONG-647) | Adjust the introduction content of the README.md | Major |
| [INLONG-648](https://issues.apache.org/jira/browse/INLONG-648) | Change initial version of inlong-sort to 0.9.0-incubating-SNAPSHOT | Major |
| [INLONG-649](https://issues.apache.org/jira/browse/INLONG-649) | Modify the suffix of the docs/zh-cn/download/release-0.8.0.md file | Major |
| [INLONG-650](https://issues.apache.org/jira/browse/INLONG-650) | Adjust .asf.yaml's label | Major |
| [INLONG-654](https://issues.apache.org/jira/browse/INLONG-654) | Adjust the link in ReadMe.md according to the latest document | Major |
| [INLONG-658](https://issues.apache.org/jira/browse/INLONG-658) | modify the dependency of inlong-manager | Major |
| [INLONG-663](https://issues.apache.org/jira/browse/INLONG-663) | modify the tar package name of inlong-manager | Major |
| [INLONG-667](https://issues.apache.org/jira/browse/INLONG-667) | rename tar in agent | Major |
| [INLONG-673](https://issues.apache.org/jira/browse/INLONG-673) | add tube cluster id in inlong-manager | Major |
| [INLONG-674](https://issues.apache.org/jira/browse/INLONG-674) | adjust HiveSinkInfo in inlong-manager | Major |
| [INLONG-675](https://issues.apache.org/jira/browse/INLONG-675) | modify the npm script of inlong-website | Major |
| [INLONG-676](https://issues.apache.org/jira/browse/INLONG-676) | modify manager-web to manager-api in inlong-manager module | Major |
| [INLONG-677](https://issues.apache.org/jira/browse/INLONG-677) | Support dt as built-in data time partition field in inlong-sort | Major |
| [INLONG-681](https://issues.apache.org/jira/browse/INLONG-681) | modify assembly in agent proxy tubemanager | Major |
| [INLONG-687](https://issues.apache.org/jira/browse/INLONG-687) | set schemaName to m0_day when save business in inlong-manager | Major |
| [INLONG-689](https://issues.apache.org/jira/browse/INLONG-689) | add sort app name | Major |
| [INLONG-691](https://issues.apache.org/jira/browse/INLONG-691) | update properties and scripts for inlong-manager | Major |
| [INLONG-692](https://issues.apache.org/jira/browse/INLONG-692) | remove hive cluster entity in inlong-manager | Major |
| [INLONG-693](https://issues.apache.org/jira/browse/INLONG-693) | change data type to tdmsg | Major |
| [INLONG-694](https://issues.apache.org/jira/browse/INLONG-694) | Add retry mechanism for creating tube consumer group | Major |
| [INLONG-695](https://issues.apache.org/jira/browse/INLONG-695) | update getConfig API in inlong-manager | Major |
| [INLONG-696](https://issues.apache.org/jira/browse/INLONG-696) | modify the status of the entities after approval | Major |
| [INLONG-699](https://issues.apache.org/jira/browse/INLONG-699) | Fix serialization issue of DeserializationInfo 's subType in inlong-sort | Major |
| [INLONG-700](https://issues.apache.org/jira/browse/INLONG-700) | Optimize dependencies in inlong-sort | Major |
| [INLONG-701](https://issues.apache.org/jira/browse/INLONG-701) | Update create resource workflow definition | Major |
| [INLONG-702](https://issues.apache.org/jira/browse/INLONG-702) | sort config field spillter | Major |
| [INLONG-706](https://issues.apache.org/jira/browse/INLONG-706) | Add 0.9.0 version release modification to CHANGES.md | Major |
| [INLONG-709](https://issues.apache.org/jira/browse/INLONG-709) | Adjust the version information of all pom.xml to 0.9.0-incubating | Major |
| [INLONG-712](https://issues.apache.org/jira/browse/INLONG-712) | adjust partition info for hive sink | Major |
| [INLONG-713](https://issues.apache.org/jira/browse/INLONG-713) | add partition filed when create hive table | Major |
| [INLONG-714](https://issues.apache.org/jira/browse/INLONG-714) | Enable checkpointing in inlong-sort | Major |
| [INLONG-715](https://issues.apache.org/jira/browse/INLONG-715) | Make shouldRollOnCheckpoint always return true in DefaultRollingPolicy in inlong-sort | Major |
| [INLONG-716](https://issues.apache.org/jira/browse/INLONG-716) | set terminated symbol when create hive table | Major |
| [INLONG-717](https://issues.apache.org/jira/browse/INLONG-717) | Declare the 3rd party Catagory x LICENSE components in use | Major |
