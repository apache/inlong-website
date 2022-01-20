---
title: 安装部署
sidebar_position: 2
---

## 准备镜像
从仓库拉起最新镜像：
```
docker pull inlong/dashboard:latest
```
或者从源码编译镜像：
```
mvn package -DskipTests -Pdocker -pl inlong-dashboard
```

## 运行
```
# MANAGER_API_ADDRESS 环境变量 使用inlong-manager 部署地址替换
docker run -d --name dashboard -e MANAGER_API_ADDRESS=127.0.0.1:8083 -p 80:80 inlong/dashboard
```