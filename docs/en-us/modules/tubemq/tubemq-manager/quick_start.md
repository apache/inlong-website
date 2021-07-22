## Deploy TubeMQ Manager
All deploying files at `inlong-tubemq-manager` directory.

### configuration
- create `tubemanager` and account in MySQL.
- Add mysql information in conf/application.properties:

```ini
# mysql configuration for manager
spring.datasource.url=jdbc:mysql://mysql_ip:mysql_port/tubemanager
spring.datasource.username=mysql_username
spring.datasource.password=mysql_password
```

### start service

``` bash
$ bin/start-manager.sh 
```

### register TubeMQ cluster
replace `master_ip` and other parameters of TubeMQ Clusters, .
```
curl --header "Content-Type: application/json" --request POST --data \
'{"masterIp":"master_ip","clusterName":"inlong","masterPort":"8715","masterWebPort":"8080","createUser":"manager","token":"abc"}' \
http://127.0.0.1:8089/v1/cluster?method=add
```

### Appendix: Other Operation interface

#### cluster
Query full data of clusterId and clusterName (get)

Example

【GET】 /v1/cluster

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

【POST】 /v1/task?method=addTopicTask

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

【POST】 /v1/topic?method=queryCanWrite

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