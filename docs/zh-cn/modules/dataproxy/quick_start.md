## 配置

	cd inlong-dataproxy

### 配置tube地址和端口号

	执行以下替换命令,其中ip:port为tube地址

sed -i 's/TUBE_LIST/ip1:port,ip2:port/g' conf/flume.conf

    修改以下内容为proxy端口号
    agent1.sources.tcp-source.port = 46801

注意conf/flume.conf中FLUME_HOME为proxy的中间数据文件存放地址

### 环境准备
	cd bin
	sh prepare_env.sh
	cd ..

### 配置manager地址
	vim conf/common.properties

	写入以下配置：
	cluster_id=1    // 预留字段，请填写默认值1
	manager_hosts=ip:port    // 这里写入的是manager open api地址

## 启动
	sh bin/start.sh

## 检查启动情况
	telnet 127.0.0.1 46801


