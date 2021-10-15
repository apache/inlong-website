---
title: 编译部署
---

##  配置flink运行环境
当前inlong-sort是基于flink的一个应用，因此运行inlong-sort应用前，需要准备好flink环境。

[如何配置flink环境](https://ci.apache.org/projects/flink/flink-docs-release-1.9/ops/deployment/cluster_setup.html "how to set up flink environment")

由于当前inlong-sort依赖的是flink1.9.3版本，因此在下载部署包时，请选择`flink-1.9.3-bin-scala_2.11.tgz`

flink环境配置完成后，可以通过浏览器访问flink的web ui，对应的地址是`/{flink部署路径}/conf/masters`文件中的地址

##  准备安装文件
安装文件在`inlong-sort`目录。

##  启动inlong-sort应用
有了上述编译阶段产出的jar包后，就可以启动inlong-sort的应用了。

[如何提交flink作业](https://ci.apache.org/projects/flink/flink-docs-release-1.9/ops/deployment/yarn_setup.html#submit-job-to-flink "如何提交flink作业")

示例：

- `./bin/flink run -c org.apache.inlong.sort.flink.Entrance inlong-sort-core-1.0-SNAPSHOT.jar --cluster-id my_application --zookeeper.quorum 127.0.0.1:2181 --zookeeper.path.root /inlong-sort --source.type tubemq --sink.type hive`

注意：

- `-c org.apache.inlong.sort.flink.Entrance` 表示main class name

- `inlong-sort-core-1.0-SNAPSHOT.jar` 为编译阶段产出的jar包

##  必要的配置
- `--cluster-id ` 用来唯一标识一个inlong-sort作业
- `--zookeeper.quorum` zk quorum
- `--zookeeper.path.root` zk根目录
- `--source.type` 数据源的种类, 当前支持："tubemq"、"pulsar"
- `--sink.type` 存储系统的种类，当前支持："clickhouse"、"hive"

**配置示例**

`--cluster-id my_application --zookeeper.quorum 192.127.0.1:2181 --zookeeper.path.root /zk_root --source.type tubemq --sink.type hive`

##  所有支持的配置
|  配置名 | 是否必须  | 默认值  |描述   |
| ------------ | ------------ | ------------ | ------------ |
|cluster-id   | Y | NA  |  用来唯一标识一个inlong-sort作业 |
|zookeeper.quorum   | Y  | NA  | zk quorum  |
|zookeeper.path.root   | Y  | "/inlong-sort"  |  zk根目录  |
|source.type   | Y | NA | 数据源的种类, 当前支持"tubemq"和"pulsar"  |
|sink.type   | Y  | NA  | 存储系统的种类，当前支持"clickhouse" 和 "hive" |
|source.parallelism   | N  | 1  | source的并行度  |
|deserialization.parallelism | N | 1 | deserialization的并行度  |
|sink.parallelism   | N  | 1  | sink的并行度 |
|tubemq.master.address | N  | NA  | 订阅tube的master address，优先级低于zk上的元数据  |
|tubemq.session.key | N |"inlong-sort" | 订阅tube使用的session key前缀 |
|tubemq.bootstrap.from.max | N | false | 是否从最大位置开始消费tube |
|tubemq.message.not.found.wait.period | N | 350ms | tube返回message not found后的等待时间 |
|tubemq.subscribe.retry.timeout | N | 300000 | 订阅tube的重试超时时间，单位为ms |
|zookeeper.client.session-timeout | N | 60000 | zk session的超时时间，单位为ms |
|zookeeper.client.connection-timeout | N | 15000 | zk连接的超时时间，单位为ms |
|zookeeper.client.retry-wait | N | 5000 | zk重连间的等待时间，单位为ms |
|zookeeper.client.max-retry-attempts | N | 3 | zk重连的最大重试次数 |
|zookeeper.client.acl | N | "open" | Defines the ACL (open/creator) to be configured on ZK node. The configuration value can be set to “creator” if the ZooKeeper server configuration has the “authProvider” property mapped to use SASLAuthenticationProvider and the cluster is configured to run in secure mode (Kerberos) |
|zookeeper.sasl.disable | N | false | 是否禁用sasl |