---
title: Deployment
---

All deploying files at `inlong-dataproxy` directory.
## Configuration

### Configure InLong-Manager URL

configuration file: `conf/common.properties`:
```
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

## Add DataProxy configuration to InLong-Manager

After installing the DataProxy, you need to add the IP of the DataProxy service into the InLong-Manager.
Modify the following information and execute command:
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
- Please modify the `ip` field to the real IP (or hostname) of the DataProxy, the format is `node1:port1,node2:port2`, and separate them with `,`.

- If all nodes in the `ip` field have the same port, you can use `node1,node2` and modify the `port` field to the default port for those nodes.