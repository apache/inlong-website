---
title: Getting Started - Apache InLong
---

This section contains a quick start guide to help you get started with Apache InLong.

# Overall architecture
<img src="https://github.com/apache/incubator-inlong-website/blob/master/img/inlong_architecture.png" align="center" alt="Apache InLong"/>
[Apache InLong](https://inlong.apache.org)(incubating) overall architecture is as above. This component is a one-stop data streaming platform that provides automated, secure, distributed, and efficient data publishing and subscription capabilities to help You can easily build stream-based data applications.

InLong (Yinglong) was originally built in Tencent and has served online business for more than 8 years. It supports massive data (over 40 trillion pieces of data per day) report services under big data scenarios. The entire platform integrates 5 modules including data collection, aggregation, caching, sorting and management modules. Through this system, the business only needs to provide data sources, data service quality, data landing clusters and data landing formats, that is, data can be continuous Push data from the source cluster to the target cluster, which greatly meets the data reporting service requirements in the business big data scenario.


# How to use
Through the overall architecture diagram of InLong above, we can see that InLong contains complete data reporting components, and we need to compile and deploy modules one by one.

## Compile and deploy Manager
[How to compile and deploy Manager](modules/manager/quick_start.md)

## Compile and deploy Manager web
[How to compile and deploy Manager Web](modules/console/quick_start.md)

## Compile and deploy TubeMQ
[How to compile and deploy TubeMQ](modules/tubemq/quick_start.md)

## Compile and deploy TubeMQ Manager
[How to compile and deploy TubeMQ Manager](modules/tubemq/tubemq-manager/quick_start.md)

## Compile and deploy Sort
[How to compile and deploy Sort](modules/sort/quick_start.md)

## Compile and deploy DataProxy
[How to compile and deploy DataProxy](modules/dataproxy/quick_start.md)

## Compile and deploy the Agent
[How to compile and deploy Agent](modules/agent/quick_start.md)

## Business configuration
[How to configure a new business](modules/manager/userManual.md)

## Data report verification
At this stage, you can collect data through the file agent and verify whether the received data is consistent with the sent data in the specified Hive table.
