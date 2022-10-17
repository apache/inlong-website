---
title: 配置
---

## 基本配置

- 本节介绍在给定配置文件中指定的重要参数：
- application.properties

| 参数                                                     | 值                                    | 默认值                                  | 注释                                            |
|--------------------------------------------------------|--------------------------------------|--------------------------------------|-----------------------------------------------|
| server.host                                            | 服务器地址                                | 127.0.0.1                            |                                               |
| server.port                                            | 服务器端口号                               | 8083                                 |                                               |
| default.admin.user                                     | 登录所需用户名                              | admin                                |                                               |
| default.admin.password                                 | 登录所需密码                               | inlong                               |                                               |
| server.servlet.context-path                            | 项目路径                                 |                                      | 构成url的一部分                                     |
| spring.application.name                                | 服务名称                                 |                                      |                                               |
| spring.profiles.active                                 | dev/prod/test                        | dev                                  | 用于区分不同的环境                                     |
| spring.mvc.pathmatch.matching-strategy                 | ANT_PATH_MATCHER/PATH_PATTERN_PARSER | ANT_PATH_MATCHER                     | MVC的路径匹配策略                                    |
| spring.jackson.serialization.write-dates-as-timestamps | true/false                           | true                                 | 是否将date转化为时间戳                                 |
| spring.jackson.date-format                             | 日期格式                                 | yyyy-MM-dd HH:mm:ss                  |                                               |
| spring.jackson.time-zone                               | 默认时区                                 | GMT+8                                |                                               |
| mybatis.mapper-locations                               | mapper文件所在路径                         | classpath:mappers/*.xml              |                                               |
| mybatis.type-aliases-package                           | 实体类所在路径                              | org.apache.inlong.manager.dao.entity |                                               |
| mybatis.configuration.map-underscore-to-camel-case     | true/false                           | true                                 | 是否将带有下划线的表字段映射为驼峰类型的实体类属性                     |
| pagehelper.helperDialect                               | 数据库类型                                | mysql                                | 用于指定分页的数据库类型                                  |
| pagehelper.reasonable                                  | true/false                           | false                                | 分页是否合理化                                       |
| pagehelper.params                                      | 支持的参数配置                              |                                      | 用于支持参数配置，例如pagehelper.params=count=countSql   |
| common.http-client.maxTotal                            | 总连接数                                 | 20                                   | 同时间正在使用的最大连接数                                 |
| common.http-client.defaultMaxPerRoute                  | 同一host:port同时间正在使用的最大连接数             | 2                                    | 每个路由默认连接数，某一个/每服务每次能并行接收的请求数量                 |
| common.http-client.validateAfterInactivity             | 连接不活跃后的校验时间                          |                                      | 从连接池获取连接时，应验证连接处于非活动状态后多长时间                   |
| common.http-client.connectionTimeout                   | 建立连接超时时间                             |                                      | 以毫秒为单位                                        |
| common.http-client.readTimeout                         | 传输数据超时时间                             |                                      | 以毫秒为单位                                        |
| common.http-client.connectionRequestTimeout            | 获取连接超时时间                             |                                      | 以毫秒为单位                                        |
| inlong.auth.type                                       | 自定义认证配置                              | default                              |                                               |
| inlong.encrypt.version                                 | 加密版本                                 | 1                                    |                                               |
| inlong.encrypt.key.value1                              |                                      |                                      |                                               |
| openapi.auth.enabled                                   | true/false                           | false                                | 是否开启openapi认证                                 |

## 日志配置

- 本节介绍在给定配置文件中指定的重要参数：
- application-dev.properties, application-prod.properties, application-test.properties

| 参数                               | 值               | 默认值  | 注释                                                   |
|----------------------------------|-----------------|------|------------------------------------------------------|
| logging.level.{effective_area}   | info/warn/error | info | effective_area是日志级别的有效面积，root代表整个项目。它还可以设置为某个包的全限定类名 |

## 数据库配置

- 本节介绍在给定配置文件中指定的重要参数：
- application-dev.properties, application-prod.properties, application-test.properties

| 参数                                                 | 值                | 默认值                                                                                                                                                                     | 注释                                                                |
|----------------------------------------------------|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| spring.datasource.druid.url                        | 数据库的地址           | jdbc:mysql://127.0.0.1:3306/apache_inlong_manager?useSSL=false&allowPublicKeyRetrieval=true&characterEncoding=UTF-8&nullCatalogMeansCurrent=true&serverTimezone=GMT%2b8 |                                                                   |
| spring.datasource.druid.username                   | 数据库的用户名          | root                                                                                                                                                                    |                                                                   |
| spring.datasource.druid.password                   | 数据库的密码           | inlong                                                                                                                                                                  |                                                                   |
| spring.datasource.druid.driver-class-name          | 数据库驱动类名          | com.mysql.cj.jdbc.Driver                                                                                                                                                |                                                                   |
| spring.datasource.druid.validationQuery            | sql语句            | SELECT 'x'                                                                                                                                                              | 系统启动时通过该sql语句验证数据库是否可用                                            |
| spring.datasource.druid.initialSize                | 数据库连接池初始化大小      | 20                                                                                                                                                                      |                                                                   |
| spring.datasource.druid.minIdle                    | 数据库连接池最小大小       | 20                                                                                                                                                                      |                                                                   |
| spring.datasource.druid.maxActive                  | 数据库连接池最大大小       | 300                                                                                                                                                                     |                                                                   |
| spring.datasource.druid.maxWait                    | 获取连接时最大等待时间      | 600000                                                                                                                                                                  | 以毫秒为单位                                                            |
| spring.datasource.druid.minEvictableIdleTimeMillis | 连接保持空闲而不被驱逐的最长时间 | 3600000                                                                                                                                                                 | 以毫秒为单位                                                            |
| spring.datasource.druid.testWhileIdle              | true/false       | true                                                                                                                                                                    | 是否启用空闲连接检测，以便回收                                                   |
| spring.datasource.druid.testOnBorrow               | true/false       | false                                                                                                                                                                   | 从连接池获取连接时，是否检测连接可用性，开启会对性能造成一定影响                                  |
| spring.datasource.druid.testOnReturn               | true/false       | false                                                                                                                                                                   | 释放连接到连接池时，是否检测连接可用性，开启会对性能造成一定影响                                  |
| spring.datasource.druid.filters                    | stat,wall,log4j  | stat,wall                                                                                                                                                               | 监控统计用的filter:stat日志用的filter:log4j防御sql注入的filter:wall  'wall'用于防火墙 |
| spring.datasource.druid.connectionProperties       | 数据库连接属性          | druid.stat.mergeSql=true;druid.stat.slowSqlMillis=5000                                                                                                                  | 通过connectProperties属性来打开mergeSql功能；慢SQL记录                         |

## 审计配置

- 本节介绍在给定配置文件中指定的重要参数：
- application-dev.properties, application-prod.properties, application-test.properties

| 参数                               | 值         | 默认值   | 注释                                                  |
|----------------------------------|-----------|-------|-----------------------------------------------------|
| audit.query.source   | MYSQL/ELASTICSEARCH/CLICKHOUSE | MYSQL | 决定要查询的数据源的审计信息，当前仅支持，MYSQL，ELASTICSEARCH，CLICKHOUSE |

## Elasticsearch配置

- 本节介绍在给定配置文件中指定的重要参数：
- application-dev.properties, application-prod.properties, application-test.properties

| 参数                 | 值                 | 默认值   | 注释                                |
|---------------------------|-------------------|-----------|-----------------------------------|
| es.index.search.hostname  | Elasticsearch的主机地址 | 127.0.0.1 | 主机地址如果存在多个使用逗号分隔开，比如'host1,host2' |
| es.index.search.port      | Elasticsearch端口号  | 9200      |                                   |
| es.auth.enable            | true/false        | false     | 是否支持认证                            |
| es.auth.user              | Elasticsearch用户名  | admin     |                                   |
| es.auth.password          | Elasticsearch密码   | inlong    |                                   |

## 额外配置

- 本节介绍在给定配置文件中指定的重要参数：
- application-dev.properties, application-prod.properties, application-test.properties

| 参数                               | 值         | 默认值  | 注释          |
|----------------------------------|-----------|------|-------------|
| spring.autoconfigure.exclude   | 配置类的全限定类名 | org.springframework.boot.autoconfigure.elasticsearch.ElasticsearchRestClientAutoConfiguration | 用来排除相关自动配置类 |

