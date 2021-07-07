## 一、安装

    mvn clean package -DskipTests

在inlong-dataproxy/dataproxy-dist/target项目下可以找到tgz安装包apache-inlong-dataproxy-0.9.0-incubating-SNAPSHOT-bin.tar.gz


解压

    tar -zxvf apache-inlong-dataproxy-0.9.0-incubating-SNAPSHOT-bin.tar.gz


## 二、配置

	cd apache-inlong-dataproxy-0.9.0-incubating-SNAPSHOT-bin

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
	cluster_id=1
	manager_hosts=ip:port    // 这里写入的是manager_api地址

## 三、启动
	sh bin/start.sh

## 四、检查启动情况
	telnet 127.0.0.1 46801


