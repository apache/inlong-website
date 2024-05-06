---
title: 参数配置
sidebar_position: 3
---

## 概览

Agent 相关参数均在配置文件 `agent.properties` 中设置。

## 通用设置

| 参数                         | 描述                                        | 默认值                                                | 备注                                                   |
|----------------------------|---------------------------------------------|-------------------------------------------------------|--------------------------------------------------------|
| thread.pool.await.time     | 异常发生或关闭 Agent 时，线程等待的最大时间（秒）  | 30                                                    |                                                        |
| agent.local.ip             | Agent 进程的本机 IP                           | 127.0.0.1                                             |                                                        |
| agent.enable.oom.exit      | 发生 OutOfMemory 异常时，是否自动退出 Agent 进程 | false                                                 |                                                        |
| agent.custom.fixed.ip      | 定制化 Agent IP                              | `blank`                                               | 如果 `agent.local.ip` 和`agent.custom.fixed.ip` 都设置，优先使用后者 |
| agent.fetchCenter.interval | 从 InLong-Manager 拉取采集任务的单位周期（秒）   | 30                                                    |                                                        |
| agent.fetcher.classname    | 从 InLong-Manager 拉取采集任务的实现类         | org.apache.inlong.agent.plugin.fetcher.ManagerFetcher | 用于支持 Fetcher 的可插拔化功能                             |
| channel.memory.capacity    | 内存 Channel 中的最大消息条数                  | 5000                                                  |                                                         |

## 本地缓存数据（用于 agent 重启后的任务恢复）设置

| 参数                       | 描述               | 默认值  | 备注                                        |
|---------------------------|--------------------|-------|---------------------------------------------|
| agent.localStore.readonly | 本地缓存文件是否只读  | false  |                                            |
| agent.http.enable         | 是否开启 HTTP 服务  | true   | 如果开启，会启动一个 HTTP 服务器，支持通过 HTTP 方式来获取采集任务 |
| agent.http.port           | HTTP 服务端口号     | 8008   |                                            |

## Job 和 JobManager 相关设置

| 参数                       | 描述                      | 默认值 | 备注 |
|--------------------------|----------------------------|------|-----|
| job.monitor.interval     | Job 指标监控的单位周期（秒）   | 5    |     |
| job.finish.checkInterval | 检查任务是否完成的单位周期（秒  | 6    |     |
| job.number.limit         | Agent 能同时采集的最大任务个数 | 15   |     |

## Task 和 TaskManager 相关配置

| 参数                     | 描述                            | 默认值 | 备注 |
|------------------------|----------------------------------|-------|-----|
| task.retry.maxCapacity | 最大可重试 Task 个数               | 10000 |     |
| task.monitor.interval  | Task 指标监控的单位周期（秒）        | 6     |     |
| task.maxRetry.time     | 单个 Task 最大可重试次数            | 3     |     |
| task.push.maxSecond    | 向 Channel 写数据的最大等待时间（秒） | 2     |     |
| task.pull.maxSecond    | 从 Channel 读数据的最大等待时间（秒） | 2     |     |

## InLong-Manager 配置

| 参数                           | 描述                      | 默认值       | 备注                                  |
|------------------------------|----------------------------|-----------|----------------------------------------|
| agent.manager.vip.http.host  | InLong-Manager 服务的地址    | 127.0.0.1 |                                        |
| agent.manager.vip.http.port  | InLong-Manager 服务的端口号  | 8083      |                                        |
| agent.manager.auth.secretId  | InLong-Manager 的认证ID     | `blank`   | 如果 InLong-Manager 没有开启认证服务，这个参数无需设置 |
| agent.manager.auth.secretKey | InLong-Manager 的认证密钥   | `blank`   |                                         |

## 指标服务配置

| 参数                                  | 描述                            | 默认值                                                         | 备注                      |
|--------------------------------------|---------------------------------|---------------------------------------------------------------|-------------------------|
| metricDomains.Agent.domainListeners  | 指标监听的类，通过该类名反射开启服务  | org.apache.inlong.agent.metrics.AgentPrometheusMetricListener | 支持多种方式，不同实现类用空格分割 |
| metricDomains.Agent.snapshotInterval | 周期性上报指标的时隙（毫秒）         | 60000                                                         |                         |
| agent.prometheus.exporter.port       | 如果使用 Prometheus 上报，设置端口号 | 9080                                                         |                         |

## 审计服务配置

| 参数           | 描述                    | 默认值            | 备注  |
|--------------|--------------------------|------------------|-----|
| audit.enable | 是否开启 InLong-Audit 服务 | true             |     |
| audit.proxys | InLong-Audit 服务的地址    | 127.0.0.1:10081 |     |
