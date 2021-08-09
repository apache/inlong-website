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
配置文件`conf/common.properties`:
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


