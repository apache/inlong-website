---
title: Configuration
sidebar_position: 3
---

## Overview

Uses can set customized configuration in `agent.properties`.

## Common Configuration

| Parameter                  | Description                                                        | Default Value                                         | Notes                                                                                   |
|----------------------------|--------------------------------------------------------------------|-------------------------------------------------------|-----------------------------------------------------------------------------------------|
| thread.pool.await.time     | max wait time(s) for thread pool to terminate running              | 30                                                    |                                                                                         |
| agent.local.ip             | local ip of Agent                                                  | 127.0.0.1                                             |                                                                                         |
| agent.enable.oom.exit      | whether allow Agent to automatically exit when OutOfMemory happens | false                                                 |                                                                                         |
| agent.custom.fixed.ip      | custom fixed ip for Agent                                          | `blank`                                               | If `agent.local.ip` and `agent.custom.fixed.ip` are both set, the latter is used first. |
| agent.fetchCenter.interval | interval time(s) of fetching Agent tasks from InLong-Manager       | 30                                                    |                                                                                         |
| agent.fetcher.classname    | customized class for fetching Agent tasks from InLong-Manager      | org.apache.inlong.agent.plugin.fetcher.ManagerFetcher | This parameter is used for supporting the development of fetcher plug-in.               |
| channel.memory.capacity    | max capacity of memory channel                                     | 5000                                                  |                                                                                         |

## Local Database Cache Configuration

| Parameter                 | Description                          | Default Value | Notes                                                      |
|---------------------------|--------------------------------------|---------------|------------------------------------------------------------|
| agent.localStore.readonly | whether local-store-data is readonly | false         |                                                            |
| agent.http.enable         | whether enable HTTP service          | true          | Start a HTTP server and getting job/agent config via http. |
| agent.http.port           | http port of HTTP service            | 8008          |                                                            |

## Job and JobManager Configuration

| Parameter                | Description                               | Default | Notes |
|--------------------------|-------------------------------------------|---------|-------|
| job.monitor.interval     | job metric monitor interval(s)            | 5       |       |
| job.finish.checkInterval | check interval(s) whether job is finished | 6       |       |
| job.number.limit         | the amount of jobs that Agent can support | 15      |       |

## Task and TaskManager Configuration

| Parameter              | Description                              | Default | Notes |
|------------------------|------------------------------------------|---------|-------|
| task.retry.maxCapacity | max number of retrying tasks             | 10000   |       |
| task.monitor.interval  | task metric monitor interval(s)          | 6       |       |
| task.maxRetry.time     | max retry time for single task           | 3       |       |
| task.push.maxSecond    | max time(s) of pushing data to channel   | 2       |       |
| task.pull.maxSecond    | max time(s) of pulling data from channel | 2       |       |

## InLong-Manager Configuration

| Parameter                    | Description                      | Default   | Notes                                                                          |
|------------------------------|----------------------------------|-----------|--------------------------------------------------------------------------------|
| agent.manager.vip.http.host  | InLong-Manager virtual http host | 127.0.0.1 |                                                                                |
| agent.manager.vip.http.port  | InLong-Manager virtual http port | 8083      |                                                                                |
| agent.manager.auth.secretId  | InLong-Manager authentic secretId | `blank`   | If InLong-Manager doesn't open authentic service, this parameter can be empty. |
| agent.manager.auth.secretKey | InLong-Manager authentic secretKey | `blank`   |                                                                                |

## Metric Service Configuration

| Parameter                            | Description                                      | Default                                                       | Notes                                                                                           |
|--------------------------------------|--------------------------------------------------|---------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| metricDomains.Agent.domainListeners  | class name of metriclistener                     | org.apache.inlong.agent.metrics.AgentPrometheusMetricListener | Support multiple methods of reporting metrics, and different class name is separated by spaces. |
| metricDomains.Agent.snapshotInterval | interval(ms) of reporting metrics                | 60000                                                         |                                                                                                 |
| agent.prometheus.exporter.port       | exporter server default port if using prometheus |                                                               |                                                                                                 |

## Audit Service Configuration

| Parameter    | Description                         | Default         | Notes |
|--------------|-------------------------------------|-----------------|-------|
| audit.enable | whether enable InLong-Audit service | true            |       |
| audit.proxys | audit proxy address                 | 127.0.0.1:10081 |       |

