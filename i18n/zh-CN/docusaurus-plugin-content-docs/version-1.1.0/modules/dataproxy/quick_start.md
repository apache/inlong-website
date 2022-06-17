---
title: 安装部署
---

所有的安装文件都在 `inlong-dataproxy` 目录下。

## 配置

### 配置InLong-Manager 地址

配置文件：`conf/common.properties`:
```
# manager 地址
manager.hosts=127.0.0.1:8083
# audit proxy 地址
audit.proxys=127.0.0.1:10081
```

## 启动

```
# 默认使用 Pulsar 来缓存数据，加载 dataproxy-pulsar.conf 配置文件
bash +x bin/dataproxy-start.sh
# 或者
bash +x bin/dataproxy-start.sh pulsar
# 如果使用 Inlong TubeMQ 来缓存数据
# bash +x bin/dataproxy-start.sh tube
```

## 检查

```
telnet 127.0.0.1 46801
```

## 将 DataProxy 配置添加到 InLong-Manager

安装完 DataProxy 后，需要将 DataProxy 服务的 IP 添加到 InLong-Manager 中，修改下面的配置信息然后执行命令：
```bash
curl --header "Content-Type: application/json" --request POST http://your_manager_host:8083/api/inlong/manager/openapi/cluster/save --data '
{
   "name": "default_dataproxy",
   "type": "DATA_PROXY",
   "ip": "your_dataproxy_ip",
   "port": 46801,
   "mqSetName": "default_set_name",
   "inCharges": "admin",
   "creator": "admin"
}
'
```
- 请将 `ip` 字段修改为 DataProxy 服务的真实 IP（或 hostname），格式为 `node1:port1,node2:port2`，多个时用 `,` 分隔。
- 如果 `ip` 字段中所有 node 的端口号都相同，可以使用 `node1,node2`，并将 `port` 字段修改为这些 node 的默认端口号。