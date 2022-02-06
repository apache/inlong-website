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

Add relevant global configuration parameters to the conf file in conf/standalone.conf, 
and initialize inlong global configuration parameters of each component:

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

After the startup script is completed, JPS checks whether there are the following processes:

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

After all component run successfully, you can access `http://localhost` with default account:

```shell
User: admin
Password: inlong
```