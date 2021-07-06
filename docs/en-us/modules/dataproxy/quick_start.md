## 1、install

    mvn clean package -DskipTests

The tgz installation package apache-inlong-proxy-0.9.0-incubating-SNAPSHOT-bin.tar.gz can be found under the inlong-dataproxy/dataproxy-dist/target project

	un tar it
	tar -zxvf apache-inlong-proxy-0.9.0-incubating-SNAPSHOT-bin.tar.gz


## 2、configuration

	cd apache-inlong-proxy-0.9.0-incubating-SNAPSHOT-bin

### config tube
	vim conf/flume.conf
	In vim command line mode, execute the following replacement commands, where xxx is the tube address
	:%s/TUBE_LIST/xx.xx.xx.xx:port,xx.xx.xx.xx:port

### Environmental preparation
	cd bin
	sh prepare_env.sh
	cd ..

### config manager
	vim conf/commmon.properties
	写入以下配置：
	cluster_id=1
	manager_hosts=xx.xx.xx.xx:port

## 3、run
	sh bin/start.sh

## 4、check
	telnet 127.0.0.1 46801

## 5、test
	use proxySdk to test 


