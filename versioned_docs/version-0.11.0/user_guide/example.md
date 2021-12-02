---
title: Hive Example
sidebar_position: 3
---

Here we use a simple example to help you experience InLong by Docker.

## Install Hive
Hive is the necessary component. If you don't have Hive in your machine, we recommand using Docker to install it. Details can be found [here](https://github.com/big-data-europe/docker-hive).

> Note that if you use Docker, you need to add a port mapping `8020:8020`, because it's the port of HDFS DefaultFS, and we need to use it later.

## Install InLong
Before we begin, we need to install InLong. Here we provide two ways:
1. Install InLong with Docker by according to the [instructions here](https://github.com/apache/incubator-inlong/tree/master/docker/docker-compose).(Recommanded)
2. Install InLong binary according to the [instructions here](./quick_start).

## Create a data access
After deployment, we first enter the "Data Access" interface, click "Create an Access" in the upper right corner to create a new date access, and fill in the business information as shown in the figure below.

<img src="/img/create-business.png" align="center" alt="Create Business"/>

Then we click the next button, and fill in the stream information as shown in the figure below.

<img src="/img/create-stream.png" align="center" alt="Create Stream"/>

Note that the message source is "File", and we don't need to create a message source manually.

Then we fill in the following information in the "data information" column below.

<img src="/img/data-information.png" align="center" alt="Data Information"/>

Then we select Hive in the data flow and click "Add" to add Hive configuration

<img src="/img/hive-config.png" align="center" alt="Hive Config"/>

Note that the target table does not need to be created in advance, as InLong Manager will automatically create the table for us after the access is approved. Also, please use connection test to ensure that InLong Manager can connect to your Hive.

Then we click the "Submit for Approval" button, the connection will be created successfully and enter the approval state.

## Approve the data access
Then we enter the "Approval Management" interface and click "My Approval" to approve the data access that we just applied for.

At this point, the data access has been created successfully. We can see that the corresponding table has been created in Hive, and we can see that the corresponding topic has been created successfully in the management GUI of TubeMQ.

## Configure the agent
Here we use `docker exec` to enter the container of the agent and configure it.
```
$ docker exec -it agent sh
```

Then we create a directory of `.inlong`, and new a file named `groupid.local` (Here groupId is group id showed on data access in inlong-manager) and fill in the configuration of Dataproxy as follows.
```
$ mkdir .inlong
$ cd .inlong
$ touch b_test.local
$ echo '{"cluster_id":1,"isInterVisit":1,"size":1,"address": [{"port":46801,"host":"dataproxy"}], "switch":0}' >> b_test.local
```

Then we exit the container, and use `curl` to make a request.
```
curl --location --request POST 'http://localhost:8008/config/job' \
--header 'Content-Type: application/json' \
--data '{
"job": {
"dir": {
"path": "",
"pattern": "/data/collect-data/test.log"
},
"trigger": "org.apache.inlong.agent.plugin.trigger.DirectoryTrigger",
"id": 1,
"thread": {
"running": {
"core": "4"
}
},
"name": "fileAgentTest",
"source": "org.apache.inlong.agent.plugin.sources.TextFileSource",
"sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",
"channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"
},
"proxy": {
"groupId": "b_test",
"streamId": "test_stream"
},
"op": "add"
}'
```

At this point, the agent is configured successfully.
Then we need to create a new file `./collect-data/test.log` and add content to it to trigger the agent to send data to the dataproxy.

```
$ touch collect-data/test.log
$ echo 'test,24' >> collect-data/test.log
```

Then we can observe the logs of agent and dataproxy, and we can see that the relevant data has been sent successfully.

```
$ docker logs agent
$ docker logs dataproxy
```

