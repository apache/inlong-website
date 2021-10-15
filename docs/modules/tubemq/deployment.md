---
title: Deployment
---

## 1 Compile and Package Project：

Enter the root directory of project and run:

```
mvn clean package -Dmaven.test.skip
```

e.g. We put the TubeMQ project package at `E:/`, then run the above command. Compilation is complete when all subdirectories are compiled successfully.

![](img/sysdeployment/sys_compile.png)

We can also run individual compilation in each subdirectory. Steps are the same as the whole project's compilation.

## 2 Server Deployment

As example above, entry directory `..\InLong\inlong-tubemq\tubemq-server\target`, we can see several JARs. `apache-inlong-tubemq-server-0.9.0-incubating-SNAPSHOT-bin.tar.gz` is the complete server-side installation package， including execution scripts, configuration files, dependencies, and frontend source code. `apache-inlong-tubemq-server-0.9.0-incubating-SNAPSHOT.jar` is a server-side processing package included in `lib` of the complete project installer. Consider to daily changes and upgrades are most made to server side, we place this jar separately so that we just need to replace this jar during upgrade.


![](img/sysdeployment/sys_package.png)

Here we have a complete package deployed onto server and we place it in `/data/inlong`

![](img/sysdeployment/sys_package_list.png)


## 3 Configuration System

There are 3 roles in server package: Master, Broker and Tools. Master and Broker can be deployed on the same or different machine. It depends on the bussiness layouts. As example below, we have 3 machine to startup a complete production and consumption cluster with 2 Masters.

| Machine | Role | TCP Port | TLS Port | WEB Port | Note |
| --- | --- | --- | --- | --- | --- |
| 9.23.27.24 | **Master** | 8099 | 8199 | 8080 | Metadata stored at `/stage/meta_data` |
| | Broker | 8123 | 8124 | 8081 | Message stored at`/stage/msg_data` |
| | ZooKeeper | 2181 | | | Offset stored at root directory`/tubemq` |
| 9.23.28.24 | **Master** | 8099 | 8199 | 8080 | Metadata stored at `/stage/meta_data` |
| | Broker | 8123 | 8124 | 8081 | Message stored at`/stage/msg_data` |
| 9.23.27.160 | Producer ||||
| | Consumer ||||
|

Something should be noticed during deploying Master:

1. Master cluster can be deployed in 1, 2 or 3 machines. 3 machines is suggested if HA is necessary so that reading/writing configuration and access to new production/consumption is still available when one of them is shutdown. In common situation, 2 machines provide readable configuration and proper state of production/consumption already registered when one is shutdown. The minimum is 1 and it provides proper state of production/consumption already registered when is shutdown.
2. For machines with Master Role, we should promise clock synchronization. At the same time, IP address of each Master machine should be set in `/etc/hosts` on each Master machine.

![](img/sysdeployment/sys_address_host.png)

Take `9.23.27.24` and `9.23.28.24` as examples, if we want to deploy both Master and Broker role on them, we need to configure in `/conf/master.ini`, `/resources/velocity.properties` and `/conf/broker.ini`. First set up the configuration of `9.23.27.24`,

![](img/sysdeployment/sys_configure_1.png)

then it is `9.23.28.24`.

![](img/sysdeployment/sys_configure_2.png)

Note that the upper right corner is configured with Master's web frontend configuration and configuration `file.resource.loader.path` in `/resources/velocity.properties` need to be modified according to the Master's installation path.

## 4 Start up Master：

After configuration, entry directory `bin` of Master environment and start up master.

![](img/sysdeployment/sys_master_start.png)

We First start up `9.23.27.24`, and then start up Master on `9.23.28.24`. The following messages indicate that the master and backup master have been successfully started up and the external service ports are reachable.

![](img/sysdeployment/sys_master_startted.png)

Visiting Master's Administrator panel([http://9.23.27.24:8080](http://9.23.27.24:8080)), search operation working well indicates that master has been successfully started up.

![](img/sysdeployment/sys_master_console.png)

## 5 Start up Broker：

Starting up Broker is a little bit different to starting Master: Master is responsible for managing the entire TubeMQ cluster, including Broker node with Topic configuration on them, production and consumption managament. So we need to add metadata on Master before starting up Broker.

![](img/sysdeployment/sys_broker_configure.png)

Confirm and create a draft record of Broker.

![](img/sysdeployment/sys_broker_online.png)

We try to start up the Broker.

![](img/sysdeployment/sys_broker_start.png)

But we got an error message.

![](img/sysdeployment/sys_broker_start_error.png)

Because the broker record is currently in draft status and it is not available now. Let's go back to Master Administrator panel and publish.

![](img/sysdeployment/sys_broker_online_2.png)

Every changing operation need to text in an Authorization Code when submited to Master. Authorization Code is defined by `confModAuthToken` in `master.ini`. If you have the Code of this cluster, we consider you as administrator and you have permission to operate the modification.

![](img/sysdeployment/sys_broker_deploy.png)


Then we restart the Broker.

![](img/sysdeployment/sys_broker_restart_1.png)

![](img/sysdeployment/sys_broker_restart_2.png)

Check the Master Control Panel, broker has successfully registered.

![](img/sysdeployment/sys_broker_finished.png)


## 6 Topic Configuration and Activation：

Configuration of Topic is similar with Broker's, we should add metadata on Master before using them, otherwise it will report an Not Found Error during production/consumption. For example, if we try to consum a non-existent topic `test`,
![](img/sysdeployment/test_sendmessage.png)

Demo returns error message.
![](img/sysdeployment/sys_topic_error.png)

First we add a topic in topic list page in Master Control Panel.

![](img/sysdeployment/sys_topic_create.png)

![](img/sysdeployment/sys_topic_select.png)

Choose publish scope and confirm after submit topic detail. After adding a new topic, we need to overload the topic.

![](img/sysdeployment/sys_topic_deploy.png)

Topic is available after overload. We can see some status of topic has changed after overload.

![](img/sysdeployment/sys_topic_finished.png)


**Note** When we are executing overload opertaion, we should make it in batches. Overload operations are controlled by state machines. It would become unwritable and un readale, read-only, readable and writable in order before published. Waiting for overloads on all brokers make topic temporary unreadable and unwritable, which result in production and consumption failure, especially production failure.

## 7 Message Production and Consumption：

We pack Demo for test in package or `tubemq-client-0.9.0-incubating-SNAPSHOT.jar` can be used for implementing your own production and consumption.
We run Producer Demo in below script and we can see data accepted on Broker.
![](img/sysdeployment/test_sendmessage_2.png)

![](img/sysdeployment/sys_node_status.png)

Then we run the Consumption Demo and we can see that consumption is also working properly.
![](img/sysdeployment/sys_node_status_2.png)

As we can see, files relative to broker's production and consumption already exist.

![](img/sysdeployment/sys_node_log.png)

Here, the compilation, deployment, system configuration, startup, production and consumption of TubeMQ has been completed!
If you need to get further, please refer to "TubeMQ HTTP API" and make your appropriate configuration settings.