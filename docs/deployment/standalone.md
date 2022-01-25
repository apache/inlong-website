---
title: Standalone
sidebar_position: 1
---
## Environment Requirements

- ZooKeeper 3.5+
- MySQL 5.7+
- Flink 1.13.5
- Apache Pulsar 2.6+ (Optional)
- Docker or Nginx 

##  Configure 

Add relevant global configuration parameters to the conf file in conf / standalone:

```ini
# Selection of message queue source: tubemq or pulsar
source_type=tubemq
# Selection of sort sink: hive or clickhouse
sink_type=hive
# MySQL service, IP, port, user and password
spring_datasource_hostname=MYSQL_HOSTNAME
spring_datasource_port=MYSQL_PORT
spring_datasource_username=MYSQL_USERNAME
spring_datasource_password=MYSQL_PASSWORD
###############################################################################
# zookeeper address
zkServerAddr=127.0.0.1:2181
###############################################################################
# tubemq (Optional)
tubemqMaster_hostName=YOU_LOCAL_IP
tubemqBroker_hostName=YOU_LOCAL_IP
TUBE_MANAGER_IP=YOU_LOCAL_IP
metaDataPath=/stage/meta_data
primaryPath=/stage/msg_data
###############################################################################
# pulsar (Optional)
###############################################################################
# Service address of pulsar (Required)
pulsar_adminUrl=http://pulsar_ip:web_port
# Pulsar broker address（Required）
pulsar_serviceUrl=pulsar://pulsar_ip:api_port
# Default tenant of Pulsar
pulsar_defaultTenant=public
###############################################################################
# local_ip(Required)
###############################################################################
local_ip=YOU_LOCAL_IP
###############################################################################
```

 Initialization inlong global configuration parameters of each component:

```shell
bin/init-config.sh 
```

## Start

```shell
bin/inlong-daemon.sh start standalone
```

## Stop

```shell
bin/inlong-daemon.sh stop standalone
```

## Check

1.After the startup script is completed, JPS checks whether there are the following processes:

```
1393 QuorumPeerMain
24529 Application
23058 MasterStartup
23812 InLongWebApplication
2148 Jps
24631 CliFrontend
24908 AgentMain
23548 TubeMQManager
23149 BrokerStartup
```

2.If you use tubemq as the message middleware and visit the web page provided by it, you can get the information shown in the figure:
![1643034789289](https://user-images.githubusercontent.com/97139576/150918086-d7c35eab-bc9f-4e39-aa8a-7e018b88bf56.png)



3.Whether the inlong web page can be accessed normally:
![1643034702665](https://user-images.githubusercontent.com/97139576/150918194-587f5e50-3c1c-47aa-893b-edf2df683a2f.png)


If there is no problem, the inlong standalone deployment is successful.
