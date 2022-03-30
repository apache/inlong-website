---
title: Deployment
---

## Environment Requirements
- Install and start MySQL 5.7+
- initialize database
  there is `sql/apache_inlong_manager.sql` in `inlong-manager` directory, load this file through the
  following command to complete the initialization of the table structure and basic data

  ```shell
  # initialize database：
  mysql -uDB_USER -pDB_PASSWD < sql/apache_inlong_manager.sql
  ```

## Dependencies
- If the backend database is MySQL, please download [mysql-connector-java-8.0.27.jar](https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.27/mysql-connector-java-8.0.27.jar) and put it into `lib/` directory.
- If the backend database is PostgreSQL, there's no need for additional dependencies.

## Configuration

Go to the decompressed `inlong-manager` directory and modify the `conf/application.properties` file:

```properties
# manager service port number
server.port=8083

# The configuration file used is dev
spring.profiles.active=dev
```

The dev configuration is specified above, then modify the `conf/application-dev.properties` file:
```properties
spring.datasource.druid.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_manager?useSSL=false&allowPublicKeyRetrieval=true&characterEncoding=UTF-8&nullCatalogMeansCurrent=true&serverTimezone=GMT%2b8
spring.datasource.druid.username=root
spring.datasource.druid.password=inlong
```

## 启动
```shell
bash +x bin/startup.sh
```

## Register Message Queue
- If using InLong TubeMQ, the register command is:
```bash
curl --header "Content-Type: application/json" --request POST http://localhost:8083/api/inlong/manager/openapi/cluster/save --data '
{
        "name": "tube_cluster",
        "type": "TUBE",
        "mqSetName": "default_set_name",
        "extParams": "{\"cluster_tube_manager\": \"127.0.0.1:8080\", \"tube_masterUrl\": \"127.0.0.1:8715\", \"cluster_tube_clusterId\": \"1\"}",
        "inCharges": "admin"
}'
```

- `extParams`: the other info of your cluster. It is described in JSON format, for example:
```json
{
  "cluster_tube_manager": "http://127.0.0.1:8081",
  "tube_masterUrl": "127.0.0.1:8715",
  "cluster_tube_clusterId": "1"
}
```

- If using Pulsar, the register command is:
```bash
curl --header "Content-Type: application/json" --request POST http://localhost:8083/api/inlong/manager/openapi/cluster/save --data '
{
        "name": "pulsar_cluster",
        "type": "PULSAR",
        "url": "pulsar://pulsar:6650",
        "token": "null",
        "mqSetName": "default_set_name",
        "extParams": "{\"pulsar_adminUrl\": \"http://pulsar:8080\"}",
        "inCharges": "admin",
        "creator": "admin"
}'
```

- `url`: the address of your Pulsar cluster, such as `pulsar://127.0.0.1:6650,127.0.0.1:6650,127.0.0.1:6650`
- `pulsar_adminUrl`: the other info of your cluster

## Start

Enter the decompressed directory, execute `sh bin/startup.sh` to start the service, and check the
log `tailf log/manager-web.log`. If a log similar to the following appears, the service has started successfully:

```shell
Started InLongWebApplication in 6.795 seconds (JVM running for 7.565)
```