---
title: Deployment
sidebar_position: 2
---

All deploying files at `inlong-agent` directory.

## Configuration
Agent needs to pull the configuration from Manager, the configuration conf/agent.properties is as follows:
```ini
# replace by agent IP
agent.local.ip=127.0.0.1
agent.http.port=8008
# manager IP
agent.manager.vip.http.host=127.0.0.1
# manager port
agent.manager.vip.http.port=8083
# audit proxy address
audit.proxys=127.0.0.1:10081
```

## Dependencies
- If the backend database is MySQL, please download [mysql-connector-java-8.0.27.jar](https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.27/mysql-connector-java-8.0.27.jar) and put it into `lib/` directory.

- If the backend database is PostgreSQL, there's no need for additional dependencies.


## Start
```bash
bash +x bin/agent.sh start
```