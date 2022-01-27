---
title: Deployment
---

All deploying files at `inlong-dataproxy` directory.
## Configuration

### Configure Message Queue

- If you use InLong TubeMQ, `tubemq_master_list` is the rpc address of TubeMQ Master.
```
$ sed -i 's/TUBE_LIST/tubemq_master_list/g' conf/flume.conf
```

- If you use Apache Pulsar, replace `pulsar_server_url_list` in `conf/flume-mulit-pulsar-tcp-example.conf` and overwrite `conf/flume.conf`.

notice that conf/flume.conf FLUME_HOME is proxy the directory for proxy inner data

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

After installing the DataProxy, you need to insert the IP and port of the DataProxy service is located into the backend database of InLong-Manager.

The SQL statement is:

```sql
-- address is the IP of the DataProxy service is located
UPDATE apache_inlong_manager.data_proxy_cluster SET address="replace_by_dataproxy_ip" WHERE name="default_dataproxy";
```

