---
title: 安装部署
---

所有的安装文件都在 `inlong-dataproxy` 目录下。

## 配置

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
UPDATE apache_inlong_manager.data_proxy_cluster SET address="replace_by_dataproxy_ip", mq_set_name="default_set_name" WHERE name="default_dataproxy";
```

