---
title: 如何编译
sidebar_position: 1
---
## 下载源码
从[InLong Download Page](https://inlong.apache.org/download)下载源码.

## 编译二进制文件
- Java [JDK 8](https://adoptopenjdk.net/?variant=openjdk8)
- Maven 3.6.1+

```
$ mvn clean install -DskipTests
```
(可选) 使用docker编译:
```
$ docker pull maven:3.6-openjdk-8
$ docker run -v `pwd`:/inlong  -w /inlong maven:3.6-openjdk-8 mvn clean install -DskipTests
```
若编译成功，在`inlong-distribution/target`下会找到`tar.gz`格式的安装包，解压安装目录，包括各个模块安装文件：
```
docker
inlong-agent
inlong-audit
inlong-dataproxy
inlong-manager
inlong-sort
inlong-tubemq-manager
inlong-tubemq-server
inlong-dashboard
```

## 编译Docker镜像
- [Docker](https://docs.docker.com/engine/install/) 19.03.1+

```
mvn clean package -DskipTests -Pdocker
```