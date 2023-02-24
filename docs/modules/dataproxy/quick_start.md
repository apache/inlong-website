---
title: Deployment
sidebar_position: 2
---

All deploying files at `inlong-dataproxy` directory.

## Configuration
### Configure InLong-Manager URL
configuration file: `conf/common.properties`:
```
# local IP
proxy.local.ip=127.0.0.1
# manager address
manager.hosts=127.0.0.1:8083
# audit proxy address
audit.proxys=127.0.0.1:10081
```

## run
```
# Default using Pulsar to cache data, and the dataproxy-pulsar.conf configuration file is loaded.
bash +x bin/dataproxy-start.sh
# or
bash +x bin/dataproxy-start.sh pulsar
# If using Inlong TubeMQ to cache data
# bash +x bin/dataproxy-start.sh tube
```
	
## check
```
telnet 127.0.0.1 46801
```