---
title: Quick Start - Apache TubeMQ
---

## Build TubeMQ
### Prerequisites
- Java JDK 1.7 or 1.8
- Maven 3.3+

### Build Distribution Tarball
- Compile and Package
```bash
mvn clean package -DskipTests
```
- (Optional) Build Using Docker：
```bash
docker run -v REPLACE_WITH_SOURCE_PATH:/tubemq  apachetubemq/tubemq-build clean package -DskipTests
```
- Run Unit Tests：
```bash
mvn test
```
- Build Individual Module：
```bash
mvn clean install
cd module-name (e.g. tubemq-client)
mvn test
```
After the build, please go to `tubemq-server/target`. You can find the
**tubemq-server-[TUBEMQ-VERSION]-bin.tar.gz** file. It is the TubeMQ deployment package, which includes
scripts, configuration files, dependency jars and web GUI code.

### Setting Up Your IDE
If you want to build and debug source code in IDE, go to the project root, and run

```bash
mvn compile
```

This command will generate the Java source files from the `protoc` files, the generated files located in `target/generated-sources`.

(Optional) If you want to use local `protoc` executable, you can change the configuration of `protobuf-maven-plugin` in `tubemq-core/pom.xml` as below

```xml
<configuration>
    <outputDirectory>${project.build.directory}/generated-sources/java</outputDirectory>
    <protocExecutable>/usr/local/bin/protoc</protocExecutable>
</configuration>
```

## Deploy and Start
### Deploy TubeMQ Standalone
Standalone mode starts zookeeper/master/broker services in one docker container：
```
docker run -p 8080:8080 -p 8000:8000 -p 8123:8123 --name tubemq -d apachetubemq/tubemq-all:latest
```
Afater container is running, you can access ` http://127.0.0.1:8080`, and reference to next `Quick Start` chapter for experience.

**Tips**：Standalone Mode is only available for development and experience, it's not designed for production environment.

### Deploy TubeMQ Cluster
#### Prerequisites
- ZooKeeper Cluster
- [tubemq-server-[TUBEMQ-VERSION]-bin.tar.gz](download/download.md) package file

After you extract the package file, here's the folder structure.
```
/INSTALL_PATH/tubemq-server-[TUBEMQ-VERSION]-bin/
├── bin
├── conf
├── lib
├── logs
└── resources
```
#### Configuration Example
There're two components in the cluster: **Master** and **Broker**. Master and Broker
can be deployed on the same server or different servers. In this example, we setup our cluster
like this, and all services run on the same node. Zookeeper should be setup in your environment also.

| Role | TCP Port | TLS Port | Web Port | Comment |
| ---- | -------- | -------- | -------- | ------- |
| Master | 8099 | 8199 | 8080 | Meta data is stored at /stage/metadata |
| Broker | 8123 | 8124 | 8081 | Message is stored at /stage/msgdata |
| Zookeeper | 2181 | | | Offset is stored at /tubemq |

#### Configure Master
You can change configurations in `conf/master.ini` according to cluster information.
- Master IP and Port
```ini
[master]
hostName=YOUR_SERVER_IP                  // replaced with your server IP
port=8000
webPort=8080
```
- Access Authorization Token
```ini
confModAuthToken=abc                    // for configuring Web Resources\API etc
```
- ZooKeeper Cluster
```ini
[zookeeper]
zkNodeRoot=/tubemq
zkServerAddr=localhost:2181             // multi zookeeper addresses can separate with ","
```
- Replication Strategy 
```ini
[replication]
repNodeName=tubemqMasterGroupNode1       // using different name for each master node
repHelperHost=FIRST_MASTER_NODE_IP:9001  // helperHost is used for building HA master.
```
- Resource Path of Web

You can change configurations in `resources/velocity.properties`
```properties
file.resource.loader.path=/INSTALL_PATH/tubemq-server-[TUBEMQ-VERSION]-bin/resources/templates
```

- (Optional) Master High Availability

In the example above, we run the services on a single node. However, in real production environment, you
need to run multiple master services on different servers for high availability purpose. Here's
the introduction of availability level.

| HA Level | Master Number | Description |
| -------- | ------------- | ----------- |
| High | 3 masters | After any master crashed, the cluster meta data is still in read/write state and can accept new producers/consumers. |
| Medium | 2 masters | After one master crashed, the cluster meta data is in read only state. There's no affect on existing producers and consumers. |
| Minimum | 1 master | After the master crashed, there's no affect on existing producer and consumer. |

**Tips**：Please notice that the master servers should be clock synchronized.

#### Configure Broker
You can change configurations in `conf/broker.ini` according to cluster information.
- Broker IP and Port
```ini
[broker]
brokerId=0
hostName=YOUR_SERVER_IP                 // replaced with your server IP
port=8123
webPort=8081
```
- Master Address
```ini
masterAddressList=MASTER_NODE_IP:8000   // multi addresses can separate with ","
```
- Metadata Path
```ini
primaryPath=/stage/msgdata
```
- ZooKeeper Cluster
```ini
[zookeeper]
zkNodeRoot=/tubemq
zkServerAddr=localhost:2181             // multi zookeeper addresses can separate with ","
```

#### Start Master
Please go to the `bin` folder and run this command to start
the master service.
```bash
./tubemq master start
```
You should be able to access `http://your-master-ip:8080` to see the
web GUI now.

![TubeMQ Console GUI](img/tubemq-console-gui.png)

#### Configure Broker Metadata
Before we start a broker service, we need to configure it on master web GUI first.

Go to the `Broker List` page, click `Add Single Broker`, and input the new broker 
information.

![Add Broker 1](img/tubemq-add-broker-1.png)

In this example, we only need to input broker IP and authToken:
1. broker IP: broker server ip
2. authToken: A token pre-configured in the `conf/master.ini` file. Please check the
`confModAuthToken` field in your `master.ini` file.

Click the online link to activate the new added broker.

![Add Broker 2](img/tubemq-add-broker-2.png)

#### Start Broker
Please go to the `bin` folder and run this command to start the broker service
```bash
./tubemq broker start
```

Refresh the GUI broker list page, you can see that the broker now is registered.

After the sub-state of the broker changed to `idle`, we can add topics to that broker.

![Add Broker 3](img/tubemq-add-broker-3.png)

## Quick Start
### Add Topic
We can add or manage the cluster topics on the web GUI. To add a new topic, go to the
topic list page and click the add new topic button

![Add Topic 1](img/tubemq-add-topic-1.png)

Then select the brokers which you want to deploy the topics to.

![Add Topic 5](img/tubemq-add-topic-5.png)

We can see the publish and subscribe state of the new added topic is still grey. We need
to go to the broker list page to reload the broker configuration.

![Add Topic 6](img/tubemq-add-topic-6.png)

![Add Topic 2](img/tubemq-add-topic-2.png)

When the broker sub-state changed to idle, go to the topic list page. We can see
that the topic publish/subscribe state is active now.

![Add Topic 3](img/tubemq-add-topic-3.png)

![Add Topic 4](img/tubemq-add-topic-4.png)

Now we can use the topic to send messages.

### Run Example
Now we can use `demo` topic which created before to test our cluster.

- Produce Messages

Please don't forget replace `YOUR_MASTER_IP` with your server ip, and start producer.
```bash
install_path=/INSTALL_PATH/tubemq-server-[TUBEMQ-VERSION]-bin
java -Dlog4j.configuration=file:${install_path}/conf/tools.log4j.properties  \
-Djava.net.preferIPv4Stack=true -cp  ${install_path}/lib/*:${install_path}/conf/* \
org.apache.tubemq.example.MessageProducerExample \
YOUR_MASTER_IP:8000 demo 100000
```
From the log, we can see the message is sent out.
```bash
[2020-06-04 11:19:04,405] INFO Send demo 1000 message, keyCount is 252 (org.apache.tubemq.example.MessageProducerExample)
[2020-06-04 11:19:04,652] INFO Send demo 2000 message, keyCount is 502 (org.apache.tubemq.example.MessageProducerExample)
[2020-06-04 11:19:05,096] INFO Send demo 3000 message, keyCount is 752 (org.apache.tubemq.example.MessageProducerExample)
[2020-06-04 11:19:05,181] INFO Send demo 4000 message, keyCount is 1002 (org.apache.tubemq.example.MessageProducerExample)
```

- Consume Messages

Please don't forget replace YOUR_MASTER_IP with your server ip, and start consumer.
```bash
java -Xmx512m -Dlog4j.configuration=file:/opt/tubemq-server/conf/tools.log4j.properties \
-Djava.net.preferIPv4Stack=true -cp /opt/tubemq-server/lib/*:/opt/tubemq-server/conf/* \
org.apache.tubemq.example.MessageConsumerExample \
YOUR_SERVER_IP:8000 demo demoGroup 3 1 1
```
From the log, we can see the message received by the consumer.

```bash
[2020-06-04 11:20:29,107] INFO Receive messages:270000 (org.apache.tubemq.example.MsgRecvStats)
[2020-06-04 11:20:31,206] INFO Receive messages:272500 (org.apache.tubemq.example.MsgRecvStats)
[2020-06-04 11:20:31,590] INFO Receive messages:275000 (org.apache.tubemq.example.MsgRecvStats)
[2020-06-04 11:20:31,910] INFO Receive messages:277500 (org.apache.tubemq.example.MsgRecvStats)
```

---


