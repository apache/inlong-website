---
title: Download - Apache inlong
---

# Download the inlong releases

Use the links below to download the Apache inlong from one of our mirrors.

## inlong
| Date | Version| Comment | Downloads |
|:---:|:--:|:--:|:--:|
| October. 21th, 2020 | 0.6.0 | Source | [[SRC](http://www.apache.org/dyn/closer.lua/incubator/inlong/0.6.0-incubating/apache-inlong-0.6.0-incubating-src.tar.gz)]                 [[PGP](https://downloads.apache.org/incubator/inlong/0.6.0-incubating/apache-inlong-0.6.0-incubating-src.tar.gz.asc)]             [[SHA512](https://downloads.apache.org/incubator/inlong/0.6.0-incubating/apache-inlong-0.6.0-incubating-src.tar.gz.sha512)] |
| |                       | Client | [[TAR](http://www.apache.org/dyn/closer.lua/incubator/inlong/0.6.0-incubating/apache-inlong-client-0.6.0-incubating-bin.tar.gz)]          [[PGP](https://downloads.apache.org/incubator/inlong/0.6.0-incubating/apache-inlong-client-0.6.0-incubating-bin.tar.gz.asc)]      [[SHA512](https://downloads.apache.org/incubator/inlong/0.6.0-incubating/apache-inlong-client-0.6.0-incubating-bin.tar.gz.sha512)] |
| |                       | Server | [[TAR](http://www.apache.org/dyn/closer.lua/incubator/inlong/0.6.0-incubating/apache-inlong-server-0.6.0-incubating-bin.tar.gz)]          [[PGP](https://downloads.apache.org/incubator/inlong/0.6.0-incubating/apache-inlong-server-0.6.0-incubating-bin.tar.gz.asc)]      [[SHA512](https://downloads.apache.org/incubator/inlong/0.6.0-incubating/apache-inlong-server-0.6.0-incubating-bin.tar.gz.sha512)] |


## Release Notes

### New Features
- [[inlong-319](https://issues.apache.org/jira/browse/inlong-319)] In the pull mode, consumers support the  suspension of consumption for a certain partition
- [[inlong-3](https://issues.apache.org/jira/browse/inlong-3)] C++ SDK support in inlong

### IMPROVEMENTS
- [[inlong-311](https://issues.apache.org/jira/browse/inlong-311)] Feedback more production information
- [[inlong-312](https://issues.apache.org/jira/browse/inlong-312)] Feedback more consumption information
- [[inlong-325](https://issues.apache.org/jira/browse/inlong-325)] Add 406 ~ 408 error code to pullSelect call
- [[inlong-345](https://issues.apache.org/jira/browse/inlong-345)] Optimize the call logic of getMessage() in Pull mode
- [[inlong-352](https://issues.apache.org/jira/browse/inlong-352)] Set the parameters of the example at startup
- [[inlong-353](https://issues.apache.org/jira/browse/inlong-353)] Update LICENSE about C/C++ SDK's code reference
- [[inlong-356](https://issues.apache.org/jira/browse/inlong-356)] C++ SDK Codec decode add requestid
- [[inlong-327](https://issues.apache.org/jira/browse/inlong-327)] Fix the concurrency problem in the example

### BUG FIXES
- [[inlong-316](https://issues.apache.org/jira/browse/inlong-316)] Where the port the port is aleady used, the  process throw the exception, but not exit
- [[inlong-317](https://issues.apache.org/jira/browse/inlong-317)] The Store Manager throws java.lang.NullPointerException
- [[inlong-320](https://issues.apache.org/jira/browse/inlong-320)] Request for static web contents would get responses with no content
- [[inlong-354](https://issues.apache.org/jira/browse/inlong-354)] Found a dns translate bug in C/C++ sdk
- [[inlong-306](https://issues.apache.org/jira/browse/inlong-306)] Raise Nullpointer Exception when create inlong instance
- [[inlong-359](https://issues.apache.org/jira/browse/inlong-359)] inlong consume speed dropped to 0 in some partitions, it is a very serious bug  Blocker
