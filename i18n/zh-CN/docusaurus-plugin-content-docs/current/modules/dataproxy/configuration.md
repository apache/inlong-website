---
title: 配置
sidebar_position: 3
---

## 基本配置（common.properties）

| 参数                                                      | 描述                       | 默认值                                  | 备注                                                                          |
|---------------------------------------------------------|--------------------------|--------------------------------------|-----------------------------------------------------------------------------|
| manager.hosts                                           | Manager服务器IP和端口列表        | 127.0.0.1:8083                      | 不允许为空，格式按照 {ip1:port1}[,{ip2:port2}][,{ip3:port3}] 格式进行配置                   |
| manager.auth.secretId                                   | 登录所需帐号                   | 无                                    | 允许为空不填写                                                                     |
| manager.auth.secretKey                                  | 登录所需密码                   | 无                                    | 允许为空不填写                                                                     |
| proxy.cluster.tag                                       | dataproxy所处的集群Set名       | default_cluster                      | 一个集群set里可以包含多个dataproxy、MQ的集群                                               |
| proxy.cluster.name                                      | dataproxy所处的集群名          | default_dataproxy                    | 用于区分不同的环境                                                                   |
| proxy.cluster.inCharges                                 | dataproxy所处的集群负责人        | admin                                |                                                                             |
| configCheckInterval                                     | conf目录的配置文件检查及加载间隔（单位ms） | 10000                          |                                                                             |
| metricDomains                                           | JMX域名                    | DataProxy                             | 通过该配置值获取如下“metricDomains.${metricDomains}.xxx”的配置项                          |
| metricDomains.DataProxy.domainListeners                 | 指标监听的类，通过该类名反射开启服务       | org.apache.inlong.dataproxy.metrics.prometheus.PrometheusMetricListener    | 如果存在多个指标监听类配置，通过空格、回车，或换行符进行分隔                                              |
| metricDomains.DataProxy.snapshotInterval                | 周期性上报指标的时隙（单位ms）         | 60000                             |                                                                             |
| prometheusHttpPort                                      | 使用 Prometheus 上报时设置的端口号  | 9081                               |                                                                             |
| audit.enable                                            | 是否开启数据上报 InLong-Audit 服务 | true                                |                                                                             |
| audit.proxys                                            | InLong-Audit 服务的地址       | 127.0.0.1:10081                      | 格式按照 {ip1:port1}[ {ip2:port2}][ {ip3:port3}]进行配置，不同ip:port间通过空格、回车，或换行符进行分隔 |


## 日志输出配置（log4j2.xml）
DataProxy采用的是Log4j2输出日志，相关配置基于Log4j2进行设置，本配置只提及常用设置项：

| 参数                      | 描述        | 默认值   | 备注             |
|-------------------------|-----------|-------|----------------|
| basePath      | 日志文件的存储路径 | ${sys:dataproxy.log.path}    |                |
| every_file_size      | 每个日志文件的大小，单位字节       | 1G    |                |
| output_log_level | 日志输出级别               | DEBUG | 线上使用时建议设置为INFO |
| rolling_max    | 同类型日志同一目录下可存放的数量     | 50    |                |
| debug_max    | DEBUG类型日志同一目录下可存放的数量 | 7     |                |
| info_max    | INFO类型日志同一目录下可存放的数量  | 7     |                |
| warn_max    | WARN类型日志同一目录下可存放的数量  | 7     |                |
| error_max    | ERROR类型日志同一目录下可存放的数量 | 7     |                |


## source-channel-sink管道配置（dataproxy-*.conf）

DataProxy 支持配置化的 source-channel-sink，配置方式与 flume 的配置文件结构类似。配置文件放在 dataproxy-*.conf 文件中，目前支持 dataproxy-pulsar.conf 和 dataproxy-tube.conf 两种，用于区分不同的中间件类型，具体类型可以在启动时指定，默认（未指定时）使用 dataproxy-pulsar.conf 作为配置文件。


## 其他自动更新配置
DataProxy启动并成功链接到Manager后，会自动从Manager同步运行配置，并定期更新，如下部分配置不可修改

| 配置文件名            | 描述                    |  备注             |
|------------------|-----------------------|-----------------|
| mq_cluster.properties         | MQ集群配置                |     |
| topics.properties  | groupId到MQ的Topic的映射配置 |     |
| weight.properties | 系统负载权重配置              |  |
