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
#By default, pulsar is used as the message middleware, and the dataproxy-pulsar.conf configuration file is loaded.
bash +x bin/dataproxy-start.sh
or
bash +x bin/dataproxy-start.sh pulsar
# If using Inlong TubeMQ
# bash +x bin/dataproxy-start.sh tube
```
	

## check
```
telnet 127.0.0.1 46801
```

## Add DataProxy configuration to InLong-Manager

After installing the DataProxy, you need to insert the IP address of the DataProxy service is located into the backend database of InLong-Manager.

The SQL statement is:

```sql
-- address is the IP of the DataProxy service is located
UPDATE apache_inlong_manager.data_proxy_cluster SET address="replace_by_dataproxy_ip", mq_set_name="default_set_name" WHERE name="default_dataproxy";
```

