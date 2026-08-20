---
title: 安装部署
sidebar_position: 2
---

## 选择 1：Docker 部署
### 准备镜像
从仓库拉起最新镜像：
```shell
docker pull inlong/dashboard:latest
```

### 运行
```shell
# MANAGER_API_ADDRESS 环境变量 使用inlong-manager 部署地址替换
docker run -d --name dashboard -e MANAGER_API_ADDRESS=127.0.0.1:8083 -p 80:80 inlong/dashboard
```

## 选择 2：Nginx 部署
例如，修改 `inlong-dashboard` 安装路径和 Manager 服务地址。
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