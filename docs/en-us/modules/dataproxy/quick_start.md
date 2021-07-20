## configuration

	cd inlong-dataproxy

### config tube

	ip:port are tube address

sed -i 's/TUBE_LIST/ip1:port,ip2:port/g' conf/flume.conf

    change proxy port
    agent1.sources.tcp-source.port = 46801

notice that conf/flume.conf FLUME_HOME is proxy the directory for proxy inner data

### Environmental preparation
	cd bin
	sh prepare_env.sh
	cd ..

### config manager
	vim conf/common.properties
	write：
	cluster_id=1   // cluter id is for future use please write 1
	manager_hosts=ip:port // manager open api 

## run
	sh bin/start.sh

## check
	telnet 127.0.0.1 46801

