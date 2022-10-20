---
title: Configuration
sidebar_position: 3
---
## Basic Configuration (common.properties)

| Parameter                                                     | Description                                                                       | Default                                  | Notes                                                                                                             |
|--------------------------------------------------------|-----------------------------------------------------------------------------------|--------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| manager.hosts                                           | InLong-Manager http host and port                                                 | 127.0.0.1:8083                        | Empty is not allowed, the format is configured according to the format of {ip1:port1}[,{ip2:port2}][,{ip3:port3}] |
| manager.auth.secretId                                   | InLong-Manager authentic secretId                                                 | `blank`                                 | If InLong-Manager doesn't open authentic service, this parameter can be empty.                                    |
| manager.auth.secretKey                                  | InLong-Manager authentic secretKey                                                | `blank`                                    |                                                                                                                   |
| proxy.cluster.tag                                       | The cluster set name where the dataproxy is located                               | default_cluster                      | A cluster set can contain multiple dataproxy and MQ clusters                                                      |
| proxy.cluster.name                                      | The cluster name where dataproxy is located                                       | default_dataproxy                    | used to distinguish different environments                                                                        |
| proxy.cluster.inCharges                                 | The incharge of the cluster where dataproxy is located                            | admin                                |                                                                                                                   |
| configCheckInterval                                     | Configuration file checking and loading interval of the conf directory (unit: ms) | 10000                          |                                                                                                                   |
| metricDomains                                           | JMX domain name                                                                   | DataProxy                             | Obtain the following configuration items of "metricDomains.${metricDomains}.xxx" through this configuration value |
| metricDomains.DataProxy.domainListeners                 | The class for indicator monitoring, and the service is started through reflection of the class name                                                               | org.apache.inlong.dataproxy.metrics.prometheus.PrometheusMetricListener    | If there are multiple indicator monitoring class configurations, separate them by spaces, carriage returns, or line feeds                                                                                    |
| metricDomains.DataProxy.snapshotInterval                | Time interval for periodic reporting of indicators (unit: ms)                                                                 | 60000                             |                                                                                                                   |
| prometheusHttpPort                                      | The port when reporting using Prometheus                                                           | 9081                               |                                                                                                                   |
| audit.enable                                            | Whether to enable data reporting InLong-Audit service                                                         | true                                |                                                                                                                   |
| audit.proxys                                            | The address of the InLong-Audit service                                                                | 127.0.0.1:10081                      | 格式按照 {ip1:port1}[ {ip2:port2}][ {ip3:port3}]进行配置，不同ip:port间通过空格、回车，或换行符进行分隔                                       |


## Log Output Configuration（log4j2.xml）
DataProxy uses Log4j2 to output logs, and the related configuration is set based on Log4j2. This configuration only mentions common setting items:

| Parameter                                                     | Description                                                            | Default                                  | Notes                              |
|-------------------------|------------------------------------------------------------------------|-------|----------------|
| basePath      | Storage path of log files                                                              | ${sys:dataproxy.log.path}    |                |
| every_file_size      | The size of each log file                                                         | 1G    |                |
| output_log_level | log output level                                                                | DEBUG | It is recommended to set to INFO when using online |
| rolling_max    | The number of logs of the same type that can be stored in the same directory                            | 50    |                |
| debug_max    | The number of DEBUG type logs that can be stored in the same directory | 7     |                |
| info_max    | The number of INFO type logs that can be stored in the same directory  | 7     |                |
| warn_max    | The number of WARN type logs that can be stored in the same directory  | 7     |                |
| error_max    | The number of ERROR type logs that can be stored in the same directory | 7     |                |


## Source-Channel-Sink Configuration（dataproxy-*.conf）
DataProxy supports configurable source-channel-sink, which is similar to flume's configuration file structure. The configuration file is placed in the dataproxy-*.conf file. Currently, dataproxy-pulsar.conf and dataproxy-tube.conf are supported to distinguish different middleware types. The specific type can be specified at startup. The default (when not specified) ) using dataproxy-pulsar.conf as configuration file.


## Other Auto-Update Configurations
After DataProxy is started and successfully linked to the Manager, it will automatically synchronize the running configuration from the Manager and update it regularly. The following configuration cannot be modified.

| File Name             | Description                    |  Notes             |
|-----------------------|-----------------------|-----------------|
| mq_cluster.properties | MQ cluster configuration                |     |
| topics.properties     | Mapping configuration of groupId to MQ topic |     |
| weight.properties     | System Load Weight Configuration             |  |
