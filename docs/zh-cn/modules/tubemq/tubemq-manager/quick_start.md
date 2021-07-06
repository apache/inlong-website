## 编译

    mvn clean package 

## 部署

环境要求：

mysql
java(1.8+)
在dist目录当中，能够找到文件为tubemq-manager-bin.zip

    unzip tubemq-manager-bin.zip

在conf/application.properties中添加mysql信息：

    spring.jpa.hibernate.ddl-auto=update
    # configuration for manager
    spring.datasource.url=jdbc:mysql://x.x.x.x:3306/tubemanager
    spring.datasource.username=xx
    spring.datasource.password=xxx

添加数据库tubemanager，并启动：

    bin/start-manager.sh

## 使用

### 新建集群

在使用tubeAdmin操作集群之前，首先需要注册集群信息，使用如下接口添加一个集群：

    /v1/cluster?method=add

    POST

参数：

    {
    "masterIp": "9.23.28.86",   (tube master ip)
    "clusterName": "test",    
    "masterPort": "8000",  (tube master port)
    "masterWebPort": "8080",  (tube master web port)
    "createUser": "test",  
    "token": "abc"  (tube token)
    }

### 操作接口

#### cluster
查询clusterId以及clusterName全量数据 （get)

示例
    GET
    /v1/cluster

返回值

    {
    "errMsg": "",
    "errCode": 0,
    "result": true,
    "data": "[{\"clusterId\":1,\"clusterName\":\"1124\", \"masterIp\":\"127.0.0.1\"}]"
    }

#### topic

#####添加topicTask

    type	(必填) 请求类型，字段填写：op_query
    clusterId	(必填) 请求集群id
    addTopicTasks (必填) topicTasks，创建task任务json，
    user	(必填) 之后接入权限验证需要验证用户，这里预留出来

addTopicTasks目前只包括一个字段为topicName
之后接入region设计会新加入region字段表示不同区域的broker
目前一个addTopicTask会在cluster中的所有broker创建topic


AddTopicTasks 为以下对象的List，可携带多个创建topic请求

    topicName	(必填) topic名称

示例

POST
    /v1/task?method=addTopicTask

    {
    "clusterId": "1",
    "addTopicTasks": [{"topicName": "1"}],
    "user": "test"
    }

返回json格式样例

    {
    "errMsg": "There are topic tasks [a12322] already in adding status",
    "errCode": 200,
    "result": false,
    "data": ""
    }

result为false为写入task失败



#####查询某一个topic是否创建成功（业务可以写入）

    clusterId	(必填) 请求集群id
    topicName   (必填) 查询topic名称
    user	(必填) 之后接入权限验证需要验证用户，这里预留出来


示例

POST

    /v1/topic?method=queryCanWrite

    {
    "clusterId": "2",
    "topicName": "pzrTestss1123123",
    "user": "test"
    }


返回json格式样例

    { "result":true, "errCode":0, "errMsg":"OK", }
    { "result":false, "errCode": 100, "errMsg":"topic thirty5is not writable"}
    { "result":false, "errCode": 101, "errMsg":"no such topic in master"}

result为false为不可写