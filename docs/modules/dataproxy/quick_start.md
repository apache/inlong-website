---
title: Build && Deployment
---
## Deploy DataProxy

All deploying files at `inlong-dataproxy` directory.

### config TubeMQ master

`tubemq_master_list` is the rpc address of TubeMQ Master.
```
$ sed -i 's/TUBE_LIST/tubemq_master_list/g' conf/flume.conf
```

notice that conf/flume.conf FLUME_HOME is proxy the directory for proxy inner data

### Environmental preparation

```
sh prepare_env.sh
```

### config manager web url

configuration file: `conf/common.properties`:
```
# manager web 
manager_hosts=ip:port 
```

## run

```
sh bin/start.sh
```
	

## check
```
telnet 127.0.0.1 46801
```

## Add DataProxy configuration to InLong-Manager

After installing the DataProxy, you need to insert the IP and port of the DataProxy service is located into the backend database of InLong-Manager.

For the background database address of InLong-Manager, please refer to the deployment document of the InLong-Manager module.

The insert SQL statement is:

```sql
-- name is the name of the DataProxy, which can be customized
-- address is the IP of the DataProxy service is located
-- port is the port of the DataProxy service, default is 46801
insert into data_proxy_cluster (name, address, port, status, is_deleted, create_time, modify_time)
values ("data_proxy_name", "data_proxy_ip", 46801, 0, 0, now(), now());
```

