---
title: 监控指标
sidebar_position: 3
---

## JMX 配置
Agent 提供了 JMX 和 Prometheus 方式的监控指标能力，默认使用 JMX 方式。JMX 方式的监控指标已经注册到 MBeanServer
用户可以在 Agen t的启动参数中增加如下类似 JMX 定义（端口和鉴权根据情况进行调整），实现监控指标从远端采集。

```shell
-Dcom.sun.management.jmxremote
-Djava.rmi.server.hostname=127.0.0.1
-Dcom.sun.management.jmxremote.port=9999
-Dcom.sun.management.jmxremote.authenticate=false
-Dcom.sun.management.jmxremote.ssl=false
```
`agent.properties` 文件需要指定监听类
```properties
# JMX监听类是AgentJmxMetricListener
agent.domainListeners=org.apache.inlong.agent.metrics.AgentJmxMetricListener
```

## Prometheus 配置 
```properties
# Prometheus监听类是AgentPrometheusMetricListener
agent.domainListeners=org.apache.inlong.agent.metrics.AgentPrometheusMetricListener
# 默认端口为9080
agent.prometheus.exporter.port=9080
```

## 自定义配置
如果用户想通过其他监控指标能力，可以继承`org.apache.inlong.agent.metrics.AgentMetricBaseListener`类并实现，
最后在 `agent.properties` 文件中配置 `agent.domainListeners` 属性。

## 附录：指标项

### AgentTaskMetric
|  属性名称   | 说明  |
|  ----  | ----  |
| runningTasks  | 当前正在执行的任务 |
| retryingTasks  | 当前正在重试的任务 |
| fatalTasks  | 当前失败的任务总数 |

### JobMetrics
|  属性名称   | 说明  |
|  ----  | ----  |
| runningJobs  | 当前正在运行的job总数 |
| fatalJobs  | 当前失败的job总数 |

### PluginMetric
|  属性名称   | 说明  |
|  ----  | ----  |
| readNum  | 读取的条数 |
| sendNum  | 发送的条数 |
| sendFailedNum  | 发送失败条数 |
| readFailedNum  | 读取失败条数 |
| readSuccessNum  | 读取成功条数 |
| sendSuccessNum  | 发送成功条数 |

### SourceMetric

| 属性名称                   | 类型    | 说明                |
|----------------------------|---------|-------------------|
| agent_source_count_success | Counter | source 读取成功次数 |
| agent_source_count_fail    | Counter | source 读取失败次数 |

### SinkMetric

| 属性名称                 | 类型    | 说明              |
|--------------------------|---------|-----------------|
| agent_sink_count_success | Counter | sink 写入成功次数 |
| agent_sink_count_fail    | Counter | sink 写入失败次数 |