---
title: TubeMQ Metrics
---

## 1 Introduction to TubeMQ metric set

TubeMQ has supported the output of JMX metric items since version 0.12.0. At present, it mainly adds overall operating metrics to the Master and Broker modules; in the future, we will consider adding corresponding metrics to the Producer and Consumer modules. At the same time, the metrics of the Master and Broker modules are implemented as needed to continue to expand.

The indicator output format currently only supports the standard JMX access method, next, Prometheus and HTTP access mode will be added. The metrics' values are obtained through the getMetrics() and getAndReSetMetrics() methods: getMetrics() only pulls the indicator data, and does not change the current data metric value; the getAndReSetMetrics() method performs the pull of the current metric data, for the Counter and The maximum and minimum metrics are reset to facilitate business re-statistics of system operation.

## 2 Master Metric Items

|       Metric Item         |          Metric Type        |                  Desc                      |
| ------------------------- | --------------------------- | ------------------------------------------ |
| consume_group_cnt | Gauge | The number of consumer groups currently online |
| consume_group_timeout_cnt | Counter | The total number of consumer group timeouts since the last count |
| client_balance_group_cnt | Gauge | The number of consumer groups allocated by the currently registered client partition |
| clt_balance_timeout_cnt | Counter | The total number of timeouts of client partition allocation consumer group timeouts since the last statistics |
| consumer_online_cnt | Gauge | Number of consumers currently online |
| consumer_timeout_cnt | Counter | The total number of consumer timeout exits since the last count |
| producer_online_cnt | Gauge | The number of producers currently online |
| producer_timeout_cnt | Counter | The total number of producer timeout exits since the last count |
| broker_configure_cnt | Gauge | Number of Broker records currently configured |
| broker_online_cnt | Gauge | Number of Broker nodes currently online |
| broker_timeout_cnt | Counter | The total number of broker node timeouts since the last count |
| broker_abn_current_cnt | Gauge | Number of Broker nodes that currently report exceptions |
| broker_abn_total_cnt | Counter | The number of Broker nodes that have reported exceptions since the last statistics |
| broker_fbd_current_cnt | Gauge | The number of Broker nodes that are currently reporting exceptions and are prohibited from serving |
| broker_fbd_total_cnt | Counter | The number of Broker nodes that have reported exceptions and are prohibited from serving since the last statistics |
| svrbalance_duration | Gauge | Current server load balancing continuous-time  |
| svrbalance_duration_min | Gauge | Current server load balancing minimum time consumption |
| svrbalance_duration_max | Gauge | Current server load balancing maximum time consumption |
| svrbal_reset_duration_min | Gauge | The current minimum equalization time to reset the equalization |
| svrbal_reset_duration_max | Gauge | The maximum equalization time consumption of the current reset equalization |
| svrbal_con_consumer_cnt | Gauge | The number of clients currently processing connection tasks |
| svrbal_discon_consumer_cnt | Gauge | The number of clients currently processing disconnected tasks |

## 3 Broker Metric Items

|       Metric Item         |          Metric Type        |                  Desc                      |
| ------------------------- | --------------------------- | ------------------------------------------ |
| fSync_duration_min | Gauge | Current data synchronization to file minimum time consumption |
| fSync_duration_max | Gauge | Maximum time consumption of current data synchronization to file |
| zkSync_duration_min | Gauge | Current data synchronization to ZooKeeper minimum time consumption |
| zkSync_duration_max | Gauge | Maximum time consumption of current data synchronization to ZooKeeper |
| zk_exception_cnt | Counter | Number of exceptions thrown during ZooKeeper operations |
| online_timeout_cnt | Counter | The total number of times the master reported the heartbeat timeout of this node |
| io_exception_cnt | Counter | Total number of IOExceptions reported by reading and writing data disks |
| consumer_online_cnt | Gauge | Total number of consumers registered to this node |
| consumer_timeout_cnt | Counter | The total number of heartbeat timeouts for consumers registered on this node |

---
<a href="#top">Back to top</a>