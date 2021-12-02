---
title: Deployment
---

## 1 Deploy TubeMQ Manager
All deploying files at `inlong-tubemq-manager` directory.

### 1.1 configuration
- create `tubemanager` and account in MySQL.
- Add mysql information in conf/application.properties:

```ini
# mysql configuration for manager
spring.datasource.url=jdbc:mysql://mysql_ip:mysql_port/tubemanager
spring.datasource.username=mysql_username
spring.datasource.password=mysql_password
```

### 1.2 start service

``` bash
$ bin/start-manager.sh 
```

### 1.3 register TubeMQ cluster

    vim bin/init-tube-cluster.sh

replace the parameters below
```
TUBE_MANAGER_IP=  
TUBE_MANAGER_PORT=   
TUBE_MASTER_IP=   
TUBE_MASTER_PORT=
TUBE_MASTER_WEB_PORT=
TUBE_MASTER_TOKEN=
```

then run：
```
sh bin/init-tube-cluster.sh
```

this will create a cluster with id = 1, note that this operation should not be executed repeatedly.