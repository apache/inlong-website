---
title: 安装部署
sidebar_position: 2
---
安装文件在 `inlong-agent` 目录。

## 配置
Agent 需要从 Manager 拉取配置，配置conf/agent.properties如下：
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

## 依赖
- 如果后端连接 MySQL 数据库，请下载 [mysql-connector-java-8.0.27.jar](https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.27/mysql-connector-java-8.0.27.jar), 并将其放入 `lib/` 目录。
- 如果后端连接 PostgreSQL 数据库，不需要引入额外依赖。

## 启动
```bash
bash +x bin/agent.sh start
```