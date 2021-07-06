## compile

    mvn clean package 

## deploy

environment requirements：

mysql
java(1.8+)
In the dist directory, you can find the file tubemq-manager-bin.zip

    unzip tubemq-manager-bin.zip

Add mysql information in conf/application.properties:

    spring.jpa.hibernate.ddl-auto=update
    # configuration for manager
    spring.datasource.url=jdbc:mysql://x.x.x.x:3306/tubemanager
    spring.datasource.username=xx
    spring.datasource.password=xxx

Add the database tubemanager and start:

    bin/start-manager.sh

## use

### create cluster

Before using tubeAdmin to operate the cluster, you first need to register the cluster information, and use the following interface to add a cluster:
    /v1/cluster?method=add

    POST

parameter:

    {
    "masterIp": "9.23.28.86",   (tube master ip)
    "clusterName": "test",    
    "masterPort": "8000",  (tube master port)
    "masterWebPort": "8080",  (tube master web port)
    "createUser": "test",  
    "token": "abc"  (tube token)
    }

### Operation interface

#### cluster
Query full data of clusterId and clusterName (get)

Example
GET
/v1/cluster

return value

    {
    "errMsg": "",
    "errCode": 0,
    "result": true,
    "data": "[{\"clusterId\":1,\"clusterName\":\"1124\", \"masterIp\":\"127.0.0.1\"}]"
    }

#### topic

##### add topicTask

parameter:

    type	 (required) request type, fill in the field: op_query
    clusterId	(required) Request cluster id
    addTopicTasks (required) topicTasks, create task task json
    user	(required) After the access authorization verification needs to verify the user, it is reserved here

addTopicTasks currently only includes one field as topicName
After accessing the region design, a new region field will be added to represent brokers in different regions
Currently an addTopicTask will create topics in all brokers in the cluster


AddTopicTasks is a list of the following objects, which can carry multiple create topic requests

    topicName (required) topic name

Example 

POST
    /v1/task?method=addTopicTask

    {
    "clusterId": "1",
    "addTopicTasks": [{"topicName": "1"}],
    "user": "test"
    }

return json

    {
    "errMsg": "There are topic tasks [a12322] already in adding status",
    "errCode": 200,
    "result": false,
    "data": ""
    }

If result is false, the writing task failed


##### Query whether a topic is successfully created (business can be written)

    clusterId	(Required) Request cluster id
    topicName   (Required) Query topic name
    user	(Required) After the access authorization verification needs to verify the user, it is reserved here

example

POST

    /v1/topic?method=queryCanWrite
    {
    "clusterId": "2",
    "topicName": "pzrTestss1123123",
    "user": "test"
    }

return json

    { "result":true, "errCode":0, "errMsg":"OK", }
    { "result":false, "errCode": 100, "errMsg":"topic thirty5is not writable"}
    { "result":false, "errCode": 101, "errMsg":"no such topic in master"}

result is false as not writable
