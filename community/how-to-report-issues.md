---
title: How to Report Issues
sidebar_position: 8
---

## For InLong Users
If you have an issue with InLong operation, please follow these guidelines:

If you are having an issue with setup, configuration, or some other form of behavior not matching your expectation, ask your questions in [GitHub Discussions](https://github.com/apache/inlong/discussions). 
See the [how-to-subscribe page](https://inlong.apache.org/community/how-to-subscribe) for information on mailing lists. You can also ask the InLong slack channel for help, check the web page for details on how to join. 
If you have a bug that needs a fix in the code or in the documentation, please follow the procedure in the GitHub Issues below.

## For InLong Developers
GitHub Issues is used by the Apache InLong project to track all issues. These include:

- Add new features
- Improving existing features
- Report bugs that need to be fixed in the codebase

If you are interested in tracking development issues in GitHub Issues, you can browse this [link](https://github.com/apache/inlong/issues).

## Filing a GitHub Issues for InLong issues
Go to the [InLong GitHub Issues](https://github.com/apache/inlong/issues) page to file your issue.

Make sure the Project is set to InLong. Set the issue type field appropriately based on your analysis or request:

- Bug
- New Feature
- Improvement
- Umbrella

For Summary, please provide a detailed title e.g. `[Bug][Dataproxy] Repeated registration jmx metric bean` instead of `Dataproxy registration error`.

|    Component     |                                                                                                      Description                                                                                                      |
|:----------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|   InLong Agent   |              data collection agent, supports reading regular logs from specified directories or files and reporting data one by one.  In the future,  DB collection capabilities will also be expanded.               |
| InLong Dataproxy |                  a Proxy component based on Flume-ng,  supports data transmission blocking,  placing retransmission, and has the ability to forward received data to different MQ (message queues).                   |
|  InLong TubeMQ   | Tencent's self-developed message queuing service,  focuses on high-performance storage and transmission of massive data in big data scenarios and has a relatively good core advantage in mass practice and low cost. |
|   InLong Sort    |                        after consuming data from different MQ services,  perform ETL processing,  and then aggregate and write the data into Apache Hive, ClickHouse,  Hbase,  IceBerg,  etc.                         |
|  InLong Manager  |                                           provides complete data service management and control capabilities,  including metadata,  OpenAPI,  task flow,  authority,  etc.                                            |
| InLong Dashboard |                                                        a front-end page for managing data access,  simplifying the use of the entire InLong control platform.                                                         |
|   InLong Audit   |                                   performs real-time audit and reconciliation on the incoming and outgoing traffic of the Agent, DataProxy, and Sort modules of the InLong system.                                    |
|    InLong SDK    |                                                                                         include DataProxy SDK, Sort SDK etc.                                                                                          |

The Affects Versions/s field can be set to the earliest version of InLong where you have seen the bug. If you are not sure then just leave it empty.

If you are a developer intending to fix the bug, put your GitHub Issues ID in the Assignee field. 

Please put as much detail as possible in the Description field. Include your configuration changes, cluster size, and InLong version. Any related code or configuration that helps replicate the issue you should also add.

For bug reports: a short reproduction of the problem would be more than welcomed. If you have logs, the specific part of the log with the error message or stack trace. Attaching the entire log can be useful. If you have already tried to debug the issue describe the steps you have already done. Even if that result was that you were not able to reproduce the issue.

For new feature requests, it may include a design document. If you do not have that or it is just a generic request work with us to design your feature and implement it.

Please set the component field if you have isolated the issue to a particular component: