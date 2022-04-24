---
title: Overview
sidebar_position: 1
---

InLong-Agent is a collection tool that supports multiple types of data sources, and is committed to achieving stable and efficient data collection functions between multiple heterogeneous data sources including File, SQL, Binlog, Metrics, etc.

## Design Concept
In order to solve the problem of data source diversity, InLong-agent abstracts multiple data sources into a unified source concept, and abstracts sinks to write data. When you need to access a new data source, you only need to configure the format and reading parameters of the data source to achieve efficient reading.

## InLong-Agent Architecture
![](img/architecture.png)

The InLong Agent task is used as a data acquisition framework, constructed with a channel + plug-in architecture. Read and write the data source into a reader/writer plug-in, and then into the entire framework.

- Reader: Reader is the data collection module, responsible for collecting data from the data source and sending the data to the channel.
- Writer: Writer is a data writing module, which reuses data continuously to the channel and writes the data to the destination.
- Channel: The channel used to connect the reader and writer, and as the data transmission channel of the connection, which realizes the function of data reading and monitoring

## Different kinds of agent
### File
File collection includes the following functions:

User-configured path monitoring, able to monitor the created file information
Directory regular filtering, support YYYYMMDD+regular expression path configuration
Breakpoint retransmission, when InLong-Agent restarts, it can automatically re-read from the last read position to ensure no reread or missed reading.

### Sql
This type of data refers to the way it is executed through SQL
SQL regular decomposition, converted into multiple SQL statements
Execute SQL separately, pull the data set, the pull process needs to pay attention to the impact on mysql itself
The execution cycle, which is generally executed regularly

### Binlog
This type of collection reads binlog and restores data by configuring mysql slave
Need to pay attention to multi-threaded parsing when binlog is read, and multi-threaded parsing data needs to be labeled in order
The code is based on the old version of dbsync, the main modification is to change the sending of tdbus-sender to push to agent-channel for integration

## Monitor Metrics configuration

Agent provides the ability of monitoring indicators in JMX and Prometheus mode, and JMX mode is used by default. The monitoring indicators have been registered to MBeanServer
Users can add similar JMX (port and authentication are adjusted according to the situation) to the startup parameters of the Agent to realize the collection of monitoring indicators from the remote end.

```Shell
-Dcom.sun.management.jmxremote
-Djava.rmi.server.hostname=127.0.0.1
-Dcom.sun.management.jmxremote.port=9999
-Dcom.sun.management.jmxremote.authenticate=false
-Dcom.sun.management.jmxremote.ssl=false
```

The agent indicators are divided into the following items, and the indicators are as follows:

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

> In addition, Agent also has built-in Prometheus `simpleclient-hotspot`, which is used to collect JVM-related metrics.

### Configure Prometheus

You can declare whether to enable Prometheus and HTTPServer port in `agent.properties`.

```properties
# the default is false
agent.prometheus.enable=true
# the default is 8080
agent.prometheus.exporter.port=8080
```
