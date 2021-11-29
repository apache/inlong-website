---
title: Apache InLong welcomes new Committers
---

InLong (应龙) is a divine beast in Chinese mythology who guides river into the sea, it is regarded as a metaphor of the InLong system for reporting streams of data.

### Apache InLong(incubating) Introduction

[Apache InLong](https://inlong.apache.org) is a one-stop data access platform donated by Tencent to the Apache community.  It provides automatic,  safe,  reliable,  and high-performance data transmission capabilities to facilitate the construction of streaming-based data analysis,  modeling,  and applications.  
The Apache InLong project was originally called TubeMQ,  focusing on high-performance,  low-cost message queuing services.  In order to further release the surrounding ecological capabilities of TubeMQ,  we upgraded the project to InLong,  focusing on creating a one-stop data integration solution.

Apache InLong uses TDBank internally used by Tencent as the prototype,  and relies on trillion-level data access and processing capabilities to integrate the entire process of data collection,  aggregation,  storage,  and sorting data processing.  It is simple to use,  flexible to expand,  stable and reliable characteristic.
<img src="/img/inlong-structure-en.png" align="center" alt="Apache InLong"/>

Apache InLong serves the entire life cycle from data collection to landing,  and provides different processing modules according to different stages of data,  including the next modules:

- **inlong-agent**,  data collection agent, supports reading regular logs from specified directories or files and reporting data one by one.  In the future,  DB collection and HTTP reporting capabilities will also be expanded.
- **inlong-dataproxy**,  a Proxy component based on Flume-ng,  supports data transmission blocking,  placing retransmission, and has the ability to forward received data to different MQ (message queues).
- **inlong-tubemq**,  Tencent's self-developed message queuing service,  focuses on high-performance storage and transmission of massive data in big data scenarios and has a relatively good core advantage in mass practice and low cost.
- **inlong-sort**,  after consuming data from different MQ services,  perform ETL processing,  and then aggregate and write the data into Apache Hive, ClickHouse,  Hbase,  IceBerg,  etc.
- **inlong-manager**, provides complete data service management and control capabilities,  including metadata,  OpenAPI,  task flow,  authority,  etc.
- **inlong-website**, a front-end page for managing data access,  simplifying the use of the entire InLong control platform.

### The Apache InLong community welcomes two new Committers

In a beautiful November , two contributors, Zhou Kang (@healchow) and Lu Zijie (@TszKitLo40), were successfully selected as the Apache InLong Committer. Congratulations!
Zhou Kang and Lu Zijie were early contributors to Apache InLong. They are participating in the feature development of InLong 0.12.0. Welcome everyone to watch their contributions in the upcoming InLong 0.12.0.

### What the new committer said

#### Zhou Kang (@healchow)

Thanks to the InLong community for recognizing me, I am honored to be a Committer of InLong, and I deeply feel the responsibility.
In the open-source community, people from all over the world can communicate and collide together. While broadening their technical horizons, they can also improve coding and collaboration capabilities. This is a good opportunity for developers to exercise.
While contributing to InLong, I have a deeper understanding of InLong's architecture and underlying technology, and I hope to continue to participate in InLong's open-source process to create a more powerful InLong.

#### Lu Zijie (@TszKitLo40)

I am very happy to be a Committer of the Apache InLong project. I am very grateful to the InLong community for their help with my questions. At the same time, I am very grateful to the InLong community for their recognition of my contribution.
In participating in the development of the Apache InLong project, I think that Apache InLong is a rapidly growing project, and I hope that more and more people can participate in the construction of the community!

### New Committer Contributions

#### Zhou Kang (@healchow)

Contributed to most of the functions of InLong-Manager, including the configuration of data access, data source, data storage, and other information, resources for creating associated modules (such as TubeMQ Topic and consumer groups, pushing the configuration required for the Sort module...), etc.
InLong-Manager is the manager of the InLong project. It connects other low-level modules in series, and there are many features that need to be developed urgently. Partners who love open source are eagerly welcome to collaborate and build together!

#### Lu Zijie (@TszKitLo40)

Contributed the Go SDK of InLong-TubeMQ entirely. The Go language is becoming more and more popular in China, and more and more users need to use the Go SDK.
The Go SDK maintains the API consistency with the Java/C++ version, and the business layer processing logic is the same as the Java/C++ version. Users of other language SDKs can also quickly get started.
At present, the Go SDK only implements the consumption function, and it is expected that more contributors can participate in the development of the production function together.

### Suggestions for future Committer

#### Zhou Kang (@healchow)

Don't be afraid to join open source. You can check "How to participate in contribution (https://inlong.apache.org/zh-CN/development/how-to-contribute)," then fork the code repository, compile and run a functional module.
Have you encountered a problem during the process? Congratulations, this may be a bug, or it may be due to insufficient documentation. You can add a communication group to ask questions and then go to issue (https://github.com/apache/incubator-inlong/issues/new/choose).
At this point, you are already a Contributor to InLong. Come on, and the next step is Committer :-)

#### Lu Zijie (@TszKitLo40)

The InLong project is still in the incubation stage, and there are still many areas that can be improved, such as the production function of the Go SDK. It may be challenging to get started with open-source projects. My experience is that you can start with simple Issues and slowly gain a sense of accomplishment.
At the same time, if you have any questions, you can communicate with friends in the community in time. The community atmosphere is very nice, and everyone is willing to help new partners. If you find it more difficult to contribute code, you can start with contributing documents and expect more friends to join the InLong community and move forward.

### Apache InLong(incubating) contributor recruitment

Apache InLong (incubating) currently has 64 contributors, and it is still in the early stages of project incubation. There are still many to-dos, including Feature development, community operation, document translation, etc. We look forward to more open source enthusiasts joining InLong and bringing InLong together. Become a top-level Apache project.

The following is the timeline of the InLong project:

- November 5, 2021, release 0.11.0 version
- September 3, 2021, release 0.10.0 version
- July 12, 2021, the first version after the name change was initiated 0.9.0 vote
- On April 11, 2021, complete the community name change and change to Apache InLong
- On February 11, 2021, initiate a community name change application
- On December 20, 2020, discuss and vote on the project name change
- On May 30, 2020, the first community version was released in accordance with the Apache community specifications
- On November 3, 2019, enter the Apache community incubation
- On September 12, 2019, TubeMQ was open sourced and donated to the Apache community

Apache InLong Project official website ：https://inlong.apache.org

Apache InLong GitHub address ：https://github.com/apache/incubator-inlong