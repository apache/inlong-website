## 关于 WebSite
WebSite[Apache InLong incubator](https://github.com/apache/incubator-inlong)的管控端。

## 编译
```
mvn package -DskipTests -Pdocker -pl inlong-website
```

## 运行
```
docker run -d --name website -e MANAGER_API_ADDRESS=127.0.0.1:8083 -p 80:80 inlong/website
```