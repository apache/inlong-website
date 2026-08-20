---
title: Deployment
sidebar_position: 2
---

All deploying files at `inlong-tubemq-manager` directory.

## Environment Preparation
- Install and start MySQL 5.7+
- Load `sql/apache_tube_manager.sql` through the command to complete the initialization of the table structure and basic data:

```` shell
# Create database and table with username and password:
mysql -uDB_USER -pDB_PASSWD < sql/apache_tube_manager.sql
````
  
## Configuration
```ini
# MySQL configuration for Manager
spring.datasource.url=jdbc:mysql://mysql_ip:mysql_port/apache_tube_manager
spring.datasource.username=mysql_username
spring.datasource.password=mysql_password

# If you are on JDK version 11+, add the following extra
spring.jaxb-compatibility-mode=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
```

## Dependencies
- Please download [hibernate-commons-annotations-5.1.2.Final.jar](https://repo1.maven.org/maven2/org/hibernate/common/hibernate-commons-annotations/5.1.2.Final/hibernate-commons-annotations-5.1.2.Final.jar),
  [hibernate-core-5.6.7.Final.jar](https://repo1.maven.org/maven2/org/hibernate/hibernate-core/5.6.7.Final/hibernate-core-5.6.7.Final.jar), 
  [antlr-2.7.7.jar](https://repo1.maven.org/maven2/antlr/antlr/2.7.7/antlr-2.7.7.jar), 
  [jboss-logging-3.4.3.Final.jar](https://repo1.maven.org/maven2/org/jboss/logging/jboss-logging/3.4.3.Final/jboss-logging-3.4.3.Final.jar) and put it into `lib/` directory.

- If the backend database is MySQL, please download [mysql-connector-java-8.0.28.jar](https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.28/mysql-connector-java-8.0.28.jar) and put it into `lib/` directory.

- If the backend database is PostgreSQL, there's no need for additional dependencies.

## Start
```bash
$ bin/start-manager.sh 
```

## Restart
```bash
$ bin/restart-manager.sh 
```

## Register TubeMQ cluster

```bash
vim bin/init-tube-cluster.sh
``` 

replace the parameters below
```properties
TUBE_MANAGER_IP=  
TUBE_MANAGER_PORT=   
TUBE_MASTER_IP=   
TUBE_MASTER_PORT=
TUBE_MASTER_WEB_PORT=
TUBE_MASTER_TOKEN=
```

then run：
```bash
sh bin/init-tube-cluster.sh
```

this will create a cluster with id = 1, note that this operation should not be executed repeatedly.