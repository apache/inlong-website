---
title: File
sidebar_position: 3
---

## File Agent Configuration
```
/data/inlong-agent/test.log //Represents reading the new file test.log in the inlong-agent folder
/data/inlong-agent/test[0-9]{1} // means to read the new file test in the inlong-agent folder followed by a number at the end
/data/inlong-agent/test //If test is a directory, it means to read all new files under test
/data/inlong-agent/^\\d+(\\.\\d+)? // Start with one or more digits, followed by. or end with one. or more digits (? stands for optional, can match Examples: "5", "1.5" and "2.21"
```

## Get data time from file name

Agent supports obtaining the time from the file name as the production time of the data. The configuration instructions are as follows:
```
/data/inlong-agent/***YYYYMMDDHH***
```
Where YYYYDDMMHH represents the data time, YYYY represents the year, MM represents the month, DD represents the day, and HH represents the hour
Where *** is any character

At the same time, you need to add the current data cycle to the job conf, the current support day cycle and hour cycle,
When adding a task, add the property job.cycleUnit

job.cycleUnit contains the following two types:
- D: Represents the data time and day dimension
- H: Represents the data time and hour dimension

E.g:
The configuration data source is
```
/data/inlong-agent/2021020211.log
```
Write data to 2021020211.log
Configure job.cycleUnit as D
Then the agent will try the 202020211.log file at the time of 202020211. When reading the data in the file, it will write all the data to the backend proxy at the time of 20210202.
If job.cycleUnit is configured as H
When collecting data in the 2021020211.log file, all data will be written to the backend proxy at the time of 2021020211。

Examples of job submission：
```bash
curl --location --request POST'http://localhost:8008/config/job' \
--header'Content-Type: application/json' \
--data'{
"job": {
"dir": {
"path": "",
"pattern": "/data/inlong-agent/2021020211.log"
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
"inlongGroupId": "group10",
"inlongStreamId": "group10"
},
"op": "add"
}'
```

## Time offset reading
After the configuration is read by time, if you want to read data at other times than the current time, you can configure the time offset to complete
Configure the job attribute name as job.timeOffset, the value is number + time dimension, time dimension includes day and hour
For example, the following settings are supported:
- 1d Read the data one day after the current time
- -1h read the data one hour before the current time

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
"inlongGroupId": "groupId10",
"inlongStreamId": "streamId10"
},
"op": "add"
}'
```