## deploy
All deploying files at `inlong-tubemq-manager` directory.

### configuration
Add mysql information in conf/application.properties:

```ini
spring.jpa.hibernate.ddl-auto=update
# configuration for manager
spring.datasource.url=jdbc:mysql://[replace_by_mysql_address]:3306/tubemanager
spring.datasource.username=[replace_by_usename]
spring.datasource.password=[replace_by_password]
# server port 
server.port=8089
```

### start service
Add the database tubemanager and start:

``` bash
$ bin/start-admin.sh
```

## usage

### create cluster

Before using tubeAdmin to operate the cluster, you first need to register the cluster information, and use the following interface to add a cluster:
/v1/cluster?method=add

    POST

parameter:

    {
    "masterIp": "127.0.0.1",   (tubemq master ip)
    "clusterName": "test",    
    "masterPort": "8000",  (tubemq master port)
    "masterWebPort": "8080",  (tubemq master web port)
    "createUser": "test",  
    "token": "abc"  (tubemq token)
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

    {
    "clusterId": "1",
    "topicName": "1",
    "user": "test"
    }

return json

    { "result":true, "errCode":0, "errMsg":"OK", }
    { "result":false, "errCode": 100, "errMsg":"topic test is not writable"}
    { "result":false, "errCode": 101, "errMsg":"no such topic in master"}

result is false as not writable



### curls for operations

    curl --header "Content-Type: application/json" --request POST --data \
    '{"masterIp":"masterip","clusterName":"test","masterPort":"8099","masterWebPort":"8080","createUser":"test","token":"abc"}' \
    http://tubemanagerip:tubemanagerport/v1/cluster?method=add

    curl --header "Content-Type: application/json" --request POST --data \
    '{"clusterId":"1","addTopicTasks":[{"topicName": "testfordocker"}],"user":"test"}' \
    http://tubemanagerip:tubemanagerport/v1/task?method=addTopicTask

    curl --header "Content-Type: application/json" --request POST --data \
    '{"clusterId":"1","topicName":"testfordocker","user":"test"}' \
    http://tubemanagerip:tubemanagerport/v1/topic?method=queryCanWrite