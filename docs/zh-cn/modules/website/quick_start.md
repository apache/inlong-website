## 环境准备

- nginx

## 配置
增加`inlong-website`

```
server {
    listen       80;
    listen       [::]:80;
    server_name  _;
    # replaced by the directory of inlong-website
    root         /inlong_root_path/inlong-website;

    # replaced manager_api_ip
    location /api {
    proxy_pass      http://manager_api_ip:8083;
    }
}
```