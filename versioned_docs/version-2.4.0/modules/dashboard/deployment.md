---
title: Deployment
sidebar_position: 2
---

## Option 1 : Dashboard in Docker
### Prepare Docker Image
pull image from central hub：
```shell
docker pull inlong/dashboard:latest
```

### Run
```shell
# MANAGER_API_ADDRESS must be replaced by inlong-manager address
docker run -d --name dashboard -e MANAGER_API_ADDRESS=127.0.0.1:8083 -p 80:80 inlong/dashboard
```

## Option 2 : Dashboard in Nginx
For example, please replace the value according to the path of `inlong-dashboard` and the manager service address:
```nginx
server {
    listen       80;
    listen       [::]:80;
    server_name  _;
    root         ${dashboard_installed_path};
    # API prefix of InlongManager
    location /inlong/manager {
        proxy_pass      http://{manager_api_address};
    }
}
```