---
title: InLong v0.6.0
---

Use the links below to download the Apache InLong from one of our mirrors.

## InLong

| Date | Version| Comment | Downloads |
|:---:|:--:|:--:|:--:|
| October. 21th, 2020 | 0.6.0 | Source | [[SRC](https://archive.apache.org/dist/incubator/tubemq/0.6.0-incubating/apache-tubemq-0.6.0-incubating-src.tar.gz)]                 [[PGP](https://archive.apache.org/dist/incubator/tubemq/0.6.0-incubating/apache-tubemq-0.6.0-incubating-src.tar.gz.asc)]             [[SHA512](https://archive.apache.org/dist/incubator/tubemq/0.6.0-incubating/apache-tubemq-0.6.0-incubating-src.tar.gz.sha512)] |
| |                       | Client | [[TAR](https://archive.apache.org/dist/incubator/tubemq/0.6.0-incubating/apache-tubemq-client-0.6.0-incubating-bin.tar.gz)]          [[PGP](https://archive.apache.org/dist/incubator/tubemq/0.6.0-incubating/apache-tubemq-client-0.6.0-incubating-bin.tar.gz.asc)]      [[SHA512](https://archive.apache.org/dist/incubator/tubemq/0.6.0-incubating/apache-tubemq-client-0.6.0-incubating-bin.tar.gz.sha512)] |
| |                       | Server | [[TAR](https://archive.apache.org/dist/incubator/tubemq/0.6.0-incubating/apache-tubemq-server-0.6.0-incubating-bin.tar.gz)]          [[PGP](https://archive.apache.org/dist/incubator/tubemq/0.6.0-incubating/apache-tubemq-server-0.6.0-incubating-bin.tar.gz.asc)]      [[SHA512](https://archive.apache.org/dist/incubator/tubemq/0.6.0-incubating/apache-tubemq-server-0.6.0-incubating-bin.tar.gz.sha512)] |

### Release Integrity

You must [verify](https://www.apache.org/info/verification.html) the integrity of the downloaded files.
We provide OpenPGP signatures for every release file. This signature should be matched against the [KEYS](https://downloads.apache.org/incubator/inlong/KEYS) file which contains the OpenPGP keys of InLong's Release Managers.
We also provide <code>SHA-512</code> checksums for every release file. After you download the file, you should calculate a checksum for your download, and make sure it is the same as ours.

## Release Notes

### New Features
- [[INLONG-319](https://issues.apache.org/jira/browse/INLONG-319)] In the pull mode, consumers support the  suspension of consumption for a certain partition
- [[INLONG-3](https://issues.apache.org/jira/browse/INLONG-3)] C++ SDK support in TubeMQ

### IMPROVEMENTS
- [[INLONG-311](https://issues.apache.org/jira/browse/INLONG-311)] Feedback more production information
- [[INLONG-312](https://issues.apache.org/jira/browse/INLONG-312)] Feedback more consumption information
- [[INLONG-325](https://issues.apache.org/jira/browse/INLONG-325)] Add 406 ~ 408 error code to pullSelect call
- [[INLONG-345](https://issues.apache.org/jira/browse/INLONG-345)] Optimize the call logic of getMessage() in Pull mode
- [[INLONG-352](https://issues.apache.org/jira/browse/INLONG-352)] Set the parameters of the example at startup
- [[INLONG-353](https://issues.apache.org/jira/browse/INLONG-353)] Update LICENSE about C/C++ SDK's code reference
- [[INLONG-356](https://issues.apache.org/jira/browse/INLONG-356)] C++ SDK Codec decode add requestid
- [[INLONG-327](https://issues.apache.org/jira/browse/INLONG-327)] Fix the concurrency problem in the example

### BUG FIXES
- [[INLONG-316](https://issues.apache.org/jira/browse/INLONG-316)] Where the port the port is aleady used, the  process throw the exception, but not exit
- [[INLONG-317](https://issues.apache.org/jira/browse/INLONG-317)] The Store Manager throws java.lang.NullPointerException
- [[INLONG-320](https://issues.apache.org/jira/browse/INLONG-320)] Request for static web contents would get responses with no content
- [[INLONG-354](https://issues.apache.org/jira/browse/INLONG-354)] Found a dns translate bug in C/C++ sdk
- [[INLONG-306](https://issues.apache.org/jira/browse/INLONG-306)] Raise Nullpointer Exception when create tubemq instance
- [[INLONG-359](https://issues.apache.org/jira/browse/INLONG-359)] TubeMQ consume speed dropped to 0 in some partitions, it is a very serious bug  Blocker
