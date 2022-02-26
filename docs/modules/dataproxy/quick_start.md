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
# proxy cluster name
proxy_cluster_name=default_dataproxy
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

After installing the DataProxy, you need to insert the IP and port of the DataProxy service is located into the backend database of InLong-Manager.

The SQL statement is:

```sql
-- address is the IP of the DataProxy service is located
UPDATE apache_inlong_manager.data_proxy_cluster SET address="replace_by_dataproxy_ip", mq_set_name="default_set_name" WHERE name="default_dataproxy";
```

