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

In `conf/inlong.conf`, replace the relevant global configuration parameters according to the actual situation:

```
###############################################################################
# Selection of message queue source: tubemq or pulsar
source_type=tubemq
# Selection of sort sink: hive or clickhouse
sink_type=hive
###############################################################################

# agent
###############################################################################
agent_local_ip=127.0.0.1
# whether to enable prometheus
agent_prometheus_enable=false
# whether to enable audit
agent_audit_enable=true
###############################################################################

# dataproxy
###############################################################################
dataproxy_ip=127.0.0.1
###############################################################################

# audit proxy
###############################################################################
audit_proxys_ip=127.0.0.1
###############################################################################

###############################################################################
# mysql(Required) (tubemanager,apache_inlong_manager,apache_inlong_audit)
###############################################################################
# MySQL service, IP, port, user and password
spring_datasource_hostname=MYSQL_HOSTNAME
spring_datasource_port=MYSQL_PORT
spring_datasource_username=MYSQL_USERNAME
spring_datasource_password=MYSQL_PASSWORD
###############################################################################

# zookeeper(Required)
###############################################################################
# zookeeper address
zkserver_addr=127.0.0.1:2181
###############################################################################

# tubemq (Optional)
###############################################################################
# master
# host address of master, required; must be configured at network card, enabled
tubemaster_hostname=YOU_LOCAL_IP
# port that master listens to, optional; default is 8715
tubemaster_port=8715
# port that master web console listens to
tubemaster_webport=8080
# metaDataPath
metadata_path=/stage/meta_data
# This token is used for page configuration, API call, etc
confmod_authtoken=abc

# broker
# unique id of broker server, required; when set to 0, TubeMQ will retrieve
# IP, convert to int and set as brokerID
broker_id=1
# hostname of broker server, required
tubebroker_hostname=YOU_LOCAL_IP
# port that broker server listens to, optional; default is 8123
tubebroker_port=8123
# port that broker web console listens to
tubebroker_webport=8081
# path to message files
primary_path=/stage/msg_data

# manager(Required)
# the parameters for init cluster
tube_manager_ip=YOU_LOCAL_IP
tube_manager_port=8089
###############################################################################

# pulsar (Optional)
###############################################################################
# Service address of pulsar (Required)
pulsar_admin_url=http://127.0.0.1:8080
# Pulsar broker address（Required）
pulsar_service_url=pulsar://127.0.0.1:6650
# Default tenant of Pulsar
pulsar_default_tenant=public
###############################################################################

# inlong manager
###############################################################################
# manager-web (Required)
manager_server_hostname=127.0.0.1
manager_server_port=8083
# The default configuration file is dev
spring_profiles_active=dev
cluster_zk_root=inlong_hive
# app_name-InLong Sort is cluster-id
sort_app_name=inlong_app
###############################################################################

# inlong website(Required)
###############################################################################
# port
inlong_web_port=80
# docker port
docker_inlong_web_port=80
###############################################################################

# local_ip(Required)
###############################################################################
local_ip=YOU_LOCAL_IP
############################################################################### 
```

## Start

```shell
bin/inlong-daemon start standalone
```

## Stop

```shell
bin/inlong-daemon stop standalone
```

## Check

After the startup script is completed, jps -l checks whether there are the following processes:

```
2417 org.apache.flink.runtime.taskexecutor.TaskManagerRunner
32658 org.apache.zookeeper.server.quorum.QuorumPeerMain
20676 org.apache.inlong.manager.web.InLongWebApplication
14628 org.apache.inlong.tubemq.manager.TubeMQManager
1909 org.apache.flink.runtime.entrypoint.StandaloneSessionClusterEntrypoint
13909 org.apache.inlong.tubemq.server.tools.MasterStartup
12071 /root/app/apache-inlong-1.1.0-incubating-SNAPSHOT/inlong-audit/lib/audit-store-1.1.0-incubating-SNAPSHOT.jar
19384 org.apache.inlong.dataproxy.node.Application
20168 org.apache.inlong.agent.core.AgentMain
14058 sun.tools.jps.Jps
13210 org.apache.inlong.audit.node.Application
17547 org.apache.inlong.tubemq.server.tools.BrokerStartup
```
If a component does not start or starts abnormally (stop and then start), you can use the following command:
```shell
bin/inlong-daemon start|stop agent/dataproxy/tubemaster/manager...
```
After all component run successfully, you can access `http://localhost` with default account:

```shell
User: admin
Password: inlong
```