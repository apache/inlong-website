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

安装完 DataProxy 后，需要将 DataProxy 服务的 IP 添加到 InLong-Manager 中。

- 打开 InLong-Manager 的 Swagger API 页面。

  地址是：<http://your_manager_host:8083/api/inlong/manager/doc.html#/default/Open-Cluster-API/saveUsingPOST_4>

- 点击 [调试] 标签, 修改下面的信息，然后拷贝到参数框中。
  ```json
  {
      "name": "default_dataproxy",
      "type": "DATA_PROXY",
      "ip": "your_data_proxy_host",
      "port": 46801,
      "mqSetName": "default_set_name",
      "inCharges": "admin",
      "creator": "admin"
  }
  ```

- 点击 [发送] 按钮, 上面的信息就会保存到 InLong-Manager 中。

**当然你也可以通过 `curl` 发起保存请求。**

- 修改下面的配置信息：
  ```html
  curl --header "Content-Type: application/json" --request POST http://your_manager_host:8083/api/inlong/manager/openapi/cluster/save --data '
  {
     "name": "default_dataproxy",
     "type": "DATA_PROXY",
     "ip": "your_data_proxy_host",
     "port": 46801,
     "mqSetName": "default_set_name",
     "inCharges": "admin",
     "creator": "admin"
  }
  '
  ```
- 打开你的命令行工具，复制上面修改后的信息，然后敲击 [回车] 键，上面的信息就会保存到 InLong-Manager 中。
