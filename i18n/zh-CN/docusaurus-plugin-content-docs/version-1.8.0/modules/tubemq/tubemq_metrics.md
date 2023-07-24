---
title: TubeMQ指标
---

## 1 TubeMQ指标集介绍

TubeMQ从0.12.0版本开始支持Jmx的指标项输出，目前主要在Master、Broker模块上增加整体的运行指标；后续考虑在Producer、Consumer模块上增加对应指标，同时Master、Broker模块的指标根据需要进行继续扩充。

指标输出的形式目前只支持标准的Jmx访问方式，接下来将增加Prometheus，以及HTTP接口访问模式的指标输出。指标通过getMetrics()及getAndReSetMetrics()方法进行获取，getMetrics()仅进行指标数据的拉取，并不改变当前的数据指标值；getAndReSetMetrics()方法在完成当前指标数据的拉取后，对于Counter以及极大值、极小值的指标进行重置，便于业务重新统计系统运行情况。

## 2 Master指标项

|           指标项           |            指标类型           |                  含义                      |
| ------------------------- | --------------------------- | ------------------------------------------ |
|     consume_group_cnt     |            Gauge            |             当前在线的消费组个数               |
| consume_group_timeout_cnt |           Counter           |          自上次统计以来消费组超时的总次数         |
| client_balance_group_cnt  |            Gauge            |       当前注册的客户端分区分配的消费组个数        |
| clt_balance_timeout_cnt   |           Counter           |    自上次统计以来客户端分区分配消费组超时的总次数   |
|   consumer_online_cnt     |            Gauge            |              当前在线的消费者个数               |
|  consumer_timeout_cnt     |           Counter           |        自上次统计以来消费者超时退出的总次数        |
|  producer_online_cnt      |            Gauge            |              当前在线的生产者个数               |
|  producer_timeout_cnt     |           Counter           |        自上次统计以来生产者超时退出的总次数数      |
|  broker_configure_cnt     |            Gauge            |              当前配置的Broker记录个数           |
|  broker_online_cnt        |            Gauge            |              当前在线的Broker节点个数           |
|  broker_timeout_cnt       |           Counter           |       自上次统计以来Broker节点超时的总次数        |
|  broker_abn_current_cnt   |            Gauge            |              当前上报异常的Broker节点个数        |
|  broker_abn_total_cnt     |           Counter           |       自上次统计以来上报异常的Broker节点个数       |
|  broker_fbd_current_cnt   |            Gauge            |        当前上报异常并被禁止服务的Broker节点个数    |
|  broker_fbd_total_cnt     |           Counter           |  自上次统计以来上报异常并被禁止服务的Broker节点个数  |
|  svrbalance_duration      |            Gauge            |           当前服务器负载均衡持续的时耗            |
|  svrbalance_duration_min  |            Gauge            |           当前服务器负载均衡最小时耗             |
|  svrbalance_duration_max  |            Gauge            |           当前服务器负载均衡最大时耗             |
| svrbal_reset_duration_min |            Gauge            |           当前重置均衡的最小均衡时耗             |
| svrbal_reset_duration_max |            Gauge            |           当前重置均衡的最大均衡时耗             |
| svrbal_con_consumer_cnt   |            Gauge            |           当前在处理连接任务的客户端个数          |
| svrbal_discon_consumer_cnt |            Gauge            |          当前在处理断连任务的客户端个数          |

## 3 Broker指标项

|           指标项           |            指标类型           |                  含义                      |
| ------------------------- | --------------------------- | ------------------------------------------ |
|     fSync_duration_min    |            Gauge            |             当前数据同步到文件最小时耗          |
|     fSync_duration_max    |            Gauge            |            当前数据同步到文件最大时耗           |
|    zkSync_duration_min    |            Gauge            |          当前数据同步到ZooKeeper最小时耗       |
|    zkSync_duration_max    |            Gauge            |          当前数据同步到ZooKeeper最大时耗       |
|    zk_exception_cnt       |           Counter           |          进行ZooKeeper操作抛异常的次数         |
|    online_timeout_cnt     |           Counter           |          Master报本节点心跳超时的总次数         |
|    io_exception_cnt       |           Counter           |          读写数据磁盘报IOException异常的总次数  |
|    consumer_online_cnt    |            Gauge            |          注册到本节点的消费者总个数             |
|    consumer_timeout_cnt   |           Counter            |          本节点注册的消费者出现心跳超时的总次数   |


---
<a href="#top">Back to top</a>