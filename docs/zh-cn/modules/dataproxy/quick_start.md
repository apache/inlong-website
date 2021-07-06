

##一、安装

    mvn clean package -DskipTests

在inlong-dataproxy/dataproxy-dist/target项目下可以找到tgz安装包apache-inlong-proxy-0.9.0-incubating-SNAPSHOT-bin.tar.gz

	解压
	tar -zxvf apache-inlong-proxy-0.9.0-incubating-SNAPSHOT-bin.tar.gz


## 二、配置

	cd apache-inlong-proxy-0.9.0-incubating-SNAPSHOT-bin

### 配置tube地址
	vim conf/flume.conf
	vim命令行模式，执行以下替换命令,其中xxx为tube地址
	:%s/TUBE_LIST/xx.xx.xx.xx:port,xx.xx.xx.xx:port

### 环境准备
	cd bin
	sh prepare_env.sh
	cd ..

### 配置manager地址
	vim conf/commmon.properties
	写入以下配置：
	cluster_id=1
	manager_hosts=xx.xx.xx.xx:port

## 三、启动
	sh bin/start.sh

## 四、检查启动情况
	telnet 127.0.0.1 46801

## 五、测试
	使用proxySdk发送数据测试


