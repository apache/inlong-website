---
title: Overview
sidebar_position: 1
---

Operation interface

#### cluster
Query full data of clusterId and clusterName (get)

Example:

```shell
curl -X GET /v1/cluster
```

Return Value:

```json
{
  "errMsg": "",
  "errCode": 0,
  "result": true,
  "data": "[{\"clusterId\":1,\"clusterName\":\"1124\", \"masterIp\":\"127.0.0.1\"}]"
}
```

#### Topic

##### Add topicTask

Parameter:

```text
type	 (required) request type, fill in the field: op_query
clusterId	(required) Request cluster id
addTopicTasks (required) topicTasks, create task task json
user	(required) After the access authorization verification needs to verify the user, it is reserved here
```

addTopicTasks currently only includes one field as topicName
After accessing the region design, a new region field will be added to represent brokers in different regions
Currently an addTopicTask will create topics in all brokers in the cluster


AddTopicTasks is a list of the following objects, which can carry multiple create topic requests

```
topicName (required) topic name
```

Example:

```shell
curl -X POST /v1/task?method=addTopicTask -H "Content-Type: application/json" -d '{
  "clusterId": "1",
  "addTopicTasks": [
    {
      "topicName": "1"
    }
  ],
  "user": "test"
}'
```

Return Json:

```json
{
  "errMsg": "There are topic tasks [a12322] already in adding status",
  "errCode": 200,
  "result": false,
  "data": ""
}
```

If result is false, the writing task failed


##### Query whether a topic is successfully created (business can be written)

```text
clusterId	(Required) Request cluster id
topicName   (Required) Query topic name
user	(Required) After the access authorization verification needs to verify the user, it is reserved here
```

Example:

```shell
curl -X POST /v1/topic?method=queryCanWrite -H "Content-Type: application/json" -d '{
  "clusterId": "1",
  "topicName": "1",
  "user": "test"
}'
```

Return Json: 

```json
{ 
  "result":true, 
  "errCode":0, 
  "errMsg":"OK"
}
```

```json
{ 
  "result":false, 
  "errCode": 100, 
  "errMsg":"topic test is not writable"
}
```

```json
{ 
  "result":false, 
  "errCode": 101, 
  "errMsg":"no such topic in master"
}
```

Result is false as not writable.