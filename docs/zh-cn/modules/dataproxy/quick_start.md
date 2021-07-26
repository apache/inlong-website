## 部署 DataProxy
所有安装文件在`inlong-dataproxy`目录。

### 配置tube地址和端口号
`tubemq_master_list`是TubeMQ master rpc地址，多个逗号分隔。
```
$ sed -i 's/TUBE_LIST/tubemq_master_list/g' conf/flume.conf
```

注意conf/flume.conf中FLUME_HOME为proxy的中间数据文件存放地址

### 环境准备
```
sh prepare_env.sh
```

### 配置manager地址
configuration file `conf/common.properties`:
```
# manager open api 
manager_hosts=ip:port 
```

## 启动
```
sh bin/start.sh
```

## 检查启动状态
```
telnet 127.0.0.1 46801
```


