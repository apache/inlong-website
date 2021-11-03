---
title: Build && Deployment
---

## 1、Configuration
```
cd inlong-agent
```

The agent supports two modes of operation: local operation and online operation


### Agent configuration

Online operation needs to pull the configuration from inlong-manager, the configuration conf/agent.properties is as follows:
```ini
agent.fetcher.classname=org.apache.inlong.agent.plugin.fetcher.ManagerFetcher (the class name for fetch tasks, default ManagerFetcher）
agent.local.ip=Write local ip
agent.manager.vip.http.host=manager web host
agent.manager.vip.http.port=manager web port
```

## 2、run
After decompression, run the following command

```bash
sh agent.sh start
```


## 3、Add job configuration in real time

#### 3.1 agent.properties Modify the following two places
```ini
# whether enable http service
agent.http.enable=true
# http default port
agent.http.port=Available ports
```

#### 3.2 Execute the following command
```bash
    curl --location --request POST 'http://localhost:8008/config/job' \
    --header 'Content-Type: application/json' \
    --data '{
    "job": {
    "dir": {
    "path": "",
    "pattern": "/data/inlong-agent/test.log"
    },
    "trigger": "org.apache.inlong.agent.plugin.trigger.DirectoryTrigger",
    "id": 1,
    "thread": {
    "running": {
    "core": "4"
    },
    "onejob": true
    },
    "name": "fileAgentTest",
    "source": "org.apache.inlong.agent.plugin.sources.TextFileSource",
    "sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",
    "channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"
    },
    "proxy": {
  "groupId": "groupId10",
  "streamId": "groupId10"
    },
    "op": "add"
    }'
```

    The meaning of each parameter is ：
    - job.dir.pattern: Configure the read file path, which can include regular expressions
    - job.trigger: Trigger name, the default is DirectoryTrigger, the function is to monitor the files under the folder to generate events
    - job.source: The type of data source used, the default is TextFileSource, which reads text files
    - job.sink：The type of writer used, the default is ProxySink, which sends messages to the proxy
    - proxy.groupId: The groupId type used when writing proxy, groupId is group id showed on data access in inlong-manager, not the topic name.
    - proxy.streamId: The streamId type used when writing proxy, streamId is the data flow id showed on data flow window in inlong-manager


## 4、eg for directory config

    E.g:
    /data/inlong-agent/test.log //Represents reading the new file test.log in the inlong-agent folder
    /data/inlong-agent/test[0-9]{1} // means to read the new file test in the inlong-agent folder followed by a number at the end
    /data/inlong-agent/test //If test is a directory, it means to read all new files under test
    /data/inlong-agent/^\\d+(\\.\\d+)? // Start with one or more digits, followed by. or end with one. or more digits (? stands for optional, can match Examples: "5", "1.5" and "2.21"


## 5. Support to get data time from file name

    Agent supports obtaining the time from the file name as the production time of the data. The configuration instructions are as follows:
    /data/inlong-agent/***YYYYMMDDHH***
    Where YYYYDDMMHH represents the data time, YYYY represents the year, MM represents the month, DD represents the day, and HH represents the hour
    Where *** is any character

    At the same time, you need to add the current data cycle to the job conf, the current support day cycle and hour cycle,
    When adding a task, add the property job.cycleUnit
    
    job.cycleUnit contains the following two types:
    1. D: Represents the data time and day dimension
    2. H: Represents the data time and hour dimension

    E.g:
    The configuration data source is
    /data/inlong-agent/YYYYMMDDHH.log
    Write data to 2021020211.log
    Configure job.cycleUnit as D
    Then the agent will try the 202020211.log file at the time of 202020211. When reading the data in the file, it will write all the data to the backend proxy at the time of 20210202.
    If job.cycleUnit is configured as H
    When collecting data in the 2021020211.log file, all data will be written to the backend proxy at the time of 2021020211

    
    Examples of job submission

```bash
curl --location --request POST'http://localhost:8008/config/job' \
--header'Content-Type: application/json' \
--data'{
"job": {
"dir": {
"path": "",
"pattern": "/data/inlong-agent/test.log"
},
"trigger": "org.apache.inlong.agent.plugin.trigger.DirectoryTrigger",
"id": 1,
"thread": {
"running": {
"core": "4"
}
},
"name": "fileAgentTest",
"cycleUnit": "D",
"source": "org.apache.inlong.agent.plugin.sources.TextFileSource",
"sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",
"channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"
},
"proxy": {
"group": "group10",
"group": "group10"
},
"op": "add"
}'
```

## 6. Support time offset reading

    After the configuration is read by time, if you want to read data at other times than the current time, you can configure the time offset to complete
    Configure the job attribute name as job.timeOffset, the value is number + time dimension, time dimension includes day and hour
    For example, the following settings are supported
    1. 1d Read the data one day after the current time
    2. -1h read the data one hour before the current time


    Examples of job submission
```bash
curl --location --request POST'http://localhost:8008/config/job' \
--header'Content-Type: application/json' \
--data'{
"job": {
"dir": {
"path": "",
"pattern": "/data/inlong-agent/test.log"
},
"trigger": "org.apache.inlong.agent.plugin.trigger.DirectoryTrigger",
"id": 1,
"thread": {
"running": {
"core": "4"
}
},
"name": "fileAgentTest",
"cycleUnit": "D",
"timeOffset": "-1d",
"source": "org.apache.inlong.agent.plugin.sources.TextFileSource",
"sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",
"channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"
},
"proxy": {
"groupId": "groupId10",
"streamId": "streamId10"
},
"op": "add"
}'
```