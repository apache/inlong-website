---
title: Deployment
---

All deploying files at `inlong-dataproxy` directory.
## Configuration

### Configure InLong-Manager URL

configuration file: `conf/common.properties`:
```
# manager address
manager_hosts=127.0.0.1:8083
# audit proxy address
audit.proxys=127.0.0.1:10081
```

## run

```
sh bin/dataproxy-start.sh
```
	

## check
```
telnet 127.0.0.1 46801
```

## Add DataProxy configuration to InLong-Manager

After installing the DataProxy, you need to add the IP of the DataProxy service into the InLong-Manager.

- Modify the following information:
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
- Open your command line tool, copy the above info, and click the Enter key, the above info will be saved to InLong-Manager.
