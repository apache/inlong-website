---
title: Deployment
sidebar_position: 2
---

## Prepare Docker Image
pull image from central hub：
```
docker pull inlong/website:latest
```
or build image from source：
```
mvn package -DskipTests -Pdocker -pl inlong-website
```

## Run
```
# MANAGER_API_ADDRESS must be replaced by inlong-manager-web address
docker run -d --name website -e MANAGER_API_ADDRESS=127.0.0.1:8083 -p 80:80 inlong/website
```