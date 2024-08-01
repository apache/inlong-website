---
title: Monitor Metrics
sidebar_position: 3
---

## JMX Configuration
```properties
# The listener of JMX is AgentJmxMetricListener
agent.domainListeners=org.apache.inlong.agent.metrics.AgentJmxMetricListener
```

## Prometheus Configuration 
```properties
# The listener of Prometheus is AgentPrometheusMetricListener
agent.domainListeners=org.apache.inlong.agent.metrics.AgentPrometheusMetricListener
# the default is 9080
agent.prometheus.exporter.port=9080
```

## Custom Configuration
If the user wants to monitor the indicator capabilities in other ways, You can inherit the `org.apache.inlong.agent.metrics.AgentMetricBaseListener`  class and implement it, 
and finally configure the `agent.domainListeners` property in the `agent.properties` file. 

## Appendix: Metrics Items

### AgentTaskMetric
|  property   | description  |
|  ----  | ----  |
| runningTasks  | tasks currently being executed |
| retryingTasks  | Tasks that are currently being retried |
| fatalTasks  | The total number of currently failed tasks |


### JobMetrics
|  property   | description  |
|  ----  | ----  |
| runningJobs  | the total number of currently running jobs |
| fatalJobs  | the total number of currently failed jobs |

### PluginMetric
|  property   | description  |
|  ----  | ----  |
| readNum  | the number of reads |
| sendNum  | the number of sent items |
| sendFailedNum  | the number of failed sending |
| readFailedNum  | the number of failed reads |
| readSuccessNum  | the number of successful reads |
| sendSuccessNum  | the number of successfully sent |

### SourceMetric

| property                   | type    | description                                                        |
|----------------------------|---------|--------------------------------------------------------------------|
| agent_source_count_success | Counter | the success message count in agent source since agent started      |
| agent_source_count_fail    | Counter | the sink success message count in agent source since agent started |

### SinkMetric

| property                 | type    | description                                                        |
|--------------------------|---------|--------------------------------------------------------------------|
| agent_sink_count_success | Counter | the sink success message count in agent source since agent started |
| agent_sink_count_fail    | Counter | the sink failed message count in agent source since agent started  |