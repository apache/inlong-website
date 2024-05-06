---
title: Deployment
sidebar_position: 2
---

All deploying files at `inlong-dataproxy` directory.

## Configuration
### Configure Manager and Audit URL
configuration file: `conf/common.properties`:
```
# local IP
proxy.local.ip=127.0.0.1
# manager address
manager.hosts=127.0.0.1:8083
# audit proxy address
audit.proxys=127.0.0.1:10081
```

## Start
```
# If using Pulsar or Kafka to cache data
bash +x bin/dataproxy-start.sh
# If using Inlong TubeMQ to cache data
# bash +x bin/dataproxy-start.sh tubemq
```
	
## Check
```
telnet 127.0.0.1 46801
```