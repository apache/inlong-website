---
title: Monitor Metrics
sidebar_position: 3
---

## JMX Configuration
Agent provides the ability of monitoring indicators in JMX and Prometheus mode, and JMX mode is used by default. The monitoring indicators have been registered to MBeanServer
Users can add similar JMX (port and authentication are adjusted according to the situation) to the startup parameters of the Agent to realize the collection of monitoring indicators from the remote end.

```shell
-Dcom.sun.management.jmxremote
-Djava.rmi.server.hostname=127.0.0.1
-Dcom.sun.management.jmxremote.port=9999
-Dcom.sun.management.jmxremote.authenticate=false
-Dcom.sun.management.jmxremote.ssl=false
```

## Prometheus Configuration 
You can declare whether to enable Prometheus and HTTPServer port in `agent.properties`.

```properties
# the default is false
agent.prometheus.enable=true
# the default is 8080
agent.prometheus.exporter.port=8080
```

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