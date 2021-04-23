---
title: Download - Apache TubeMQ
---

# Download the TubeMQ releases

Use the links below to download the Apache TubeMQ from one of our mirrors.

## TubeMQ
| Date | Version| Comment | Downloads |
|:---:|:--:|:--:|:--:|
| October. 21th, 2020 | 0.6.0 | Source | [[SRC](http://www.apache.org/dyn/closer.lua/incubator/tubemq/0.6.0-incubating/apache-tubemq-0.6.0-incubating-src.tar.gz)]                 [[PGP](https://downloads.apache.org/incubator/tubemq/0.6.0-incubating/apache-tubemq-0.6.0-incubating-src.tar.gz.asc)]             [[SHA512](https://downloads.apache.org/incubator/tubemq/0.6.0-incubating/apache-tubemq-0.6.0-incubating-src.tar.gz.sha512)] |
| |                       | Client | [[TAR](http://www.apache.org/dyn/closer.lua/incubator/tubemq/0.6.0-incubating/apache-tubemq-client-0.6.0-incubating-bin.tar.gz)]          [[PGP](https://downloads.apache.org/incubator/tubemq/0.6.0-incubating/apache-tubemq-client-0.6.0-incubating-bin.tar.gz.asc)]      [[SHA512](https://downloads.apache.org/incubator/tubemq/0.6.0-incubating/apache-tubemq-client-0.6.0-incubating-bin.tar.gz.sha512)] |
| |                       | Server | [[TAR](http://www.apache.org/dyn/closer.lua/incubator/tubemq/0.6.0-incubating/apache-tubemq-server-0.6.0-incubating-bin.tar.gz)]          [[PGP](https://downloads.apache.org/incubator/tubemq/0.6.0-incubating/apache-tubemq-server-0.6.0-incubating-bin.tar.gz.asc)]      [[SHA512](https://downloads.apache.org/incubator/tubemq/0.6.0-incubating/apache-tubemq-server-0.6.0-incubating-bin.tar.gz.sha512)] |


## Release Notes

### New Features
- [[TUBEMQ-319](https://issues.apache.org/jira/browse/TUBEMQ-319)] In the pull mode, consumers support the  suspension of consumption for a certain partition
- [[TUBEMQ-3](https://issues.apache.org/jira/browse/TUBEMQ-3)] C++ SDK support in TubeMQ

### IMPROVEMENTS
- [[TUBEMQ-311](https://issues.apache.org/jira/browse/TUBEMQ-311)] Feedback more production information
- [[TUBEMQ-312](https://issues.apache.org/jira/browse/TUBEMQ-312)] Feedback more consumption information
- [[TUBEMQ-325](https://issues.apache.org/jira/browse/TUBEMQ-325)] Add 406 ~ 408 error code to pullSelect call
- [[TUBEMQ-345](https://issues.apache.org/jira/browse/TUBEMQ-345)] Optimize the call logic of getMessage() in Pull mode
- [[TUBEMQ-352](https://issues.apache.org/jira/browse/TUBEMQ-352)] Set the parameters of the example at startup
- [[TUBEMQ-353](https://issues.apache.org/jira/browse/TUBEMQ-353)] Update LICENSE about C/C++ SDK's code reference
- [[TUBEMQ-356](https://issues.apache.org/jira/browse/TUBEMQ-356)] C++ SDK Codec decode add requestid
- [[TUBEMQ-327](https://issues.apache.org/jira/browse/TUBEMQ-327)] Fix the concurrency problem in the example

### BUG FIXES
- [[TUBEMQ-316](https://issues.apache.org/jira/browse/TUBEMQ-316)] Where the port the port is aleady used, the  process throw the exception, but not exit
- [[TUBEMQ-317](https://issues.apache.org/jira/browse/TUBEMQ-317)] The Store Manager throws java.lang.NullPointerException
- [[TUBEMQ-320](https://issues.apache.org/jira/browse/TUBEMQ-320)] Request for static web contents would get responses with no content
- [[TUBEMQ-354](https://issues.apache.org/jira/browse/TUBEMQ-354)] Found a dns translate bug in C/C++ sdk
- [[TUBEMQ-306](https://issues.apache.org/jira/browse/TUBEMQ-306)] Raise Nullpointer Exception when create tubemq instance
- [[TUBEMQ-359](https://issues.apache.org/jira/browse/TUBEMQ-359)] TubeMQ consume speed dropped to 0 in some partitions, it is a very serious bug  Blocker
