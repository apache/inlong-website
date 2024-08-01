---
title: 监控指标
sidebar_position: 3
---

## JMX 配置
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