---
title: 安装部署
---

所有的安装文件都在 `inlong-dataproxy` 目录下。

## 配置

### 配置消息队列

- 如果使用InLong TubeMQ, 按以下配置即可。`tubemq_master_list`是TubeMQ master rpc地址，多个逗号分隔。
```
$ sed -i 's/TUBE_LIST/tubemq_master_list/g' conf/flume.conf
```
- 如果使用Apache Pulsar, 替换`conf/flume-mulit-pulsar-tcp-example.conf`中`pulsar_server_url_list`并覆盖`conf/flume.conf`。

注意conf/flume.conf中FLUME_HOME为proxy的中间数据文件存放地址

### 配置InLong-Manager 地址

配置文件：`conf/common.properties`:
```
# manager 地址
manager_hosts=127.0.0.1:8083
# audit proxy 地址
audit.proxys=127.0.0.1:10081
```

## 启动

```
sh bin/dataproxy-start.sh
```

## 检查

```
telnet 127.0.0.1 46801
```

## 将 DataProxy 配置添加到 InLong-Manager

安装完 DataProxy 后，需要将 DataProxy 所在主机的 IP 插入到 InLong-Manager 的后台数据库中。

SQL 语句为：

```sql
-- address 为 DataProxy 服务所在主机的 IP
UPDATE apache_inlong_manager.data_proxy_cluster SET address="replace_by_dataproxy_ip" WHERE name="default_dataproxy";
```

