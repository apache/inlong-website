---
title: 安装部署
---

## 1 部署TubeMQ Manager
安装文件在inlong-tubemq-manager目录.

### 1.1 配置
- 在mysql中创建`tubemanager`数据和相应用户.
- 在conf/application.properties中添加mysql信息：

```ini
# mysql configuration for manager
spring.datasource.url=jdbc:mysql://mysql_ip:mysql_port/tubemanager
spring.datasource.username=mysql_username
spring.datasource.password=mysql_password
```

### 1.2 启动服务

``` bash
$ bin/start-manager.sh 
```

### 1.3 初始化TubeMQ集群

    vim bin/init-tube-cluster.sh

替换如下六个参数
```
TUBE_MANAGER_IP=   //tube manager服务启动ip
TUBE_MANAGER_PORT=   //tube manager服务启动port
TUBE_MASTER_IP=   //tube 集群master ip
TUBE_MASTER_PORT=
TUBE_MASTER_WEB_PORT=
TUBE_MASTER_TOKEN=
```

然后执行以下命令：
```
sh bin/init-tube-cluster.sh
```
如上操作会创建一个clusterId为1的tube集群，注意该操作只进行一次，之后重启服务无需新建集群