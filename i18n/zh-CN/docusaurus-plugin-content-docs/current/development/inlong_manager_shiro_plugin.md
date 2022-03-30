---
title: 自定义认证
sidebar_position: 2
---

## 总览
Inlong Manager中使用了Apache Shiro框架实现了认证和授权等功能，Manager已经集成好了默认的实现逻辑，如果您想在Inlong Manager中实现自定义的基于Shiro的认证和授权功能，您可以按照如下的说明，进行相关功能的插件化开发。

## 依赖
- 增加maven 依赖
```xml
<dependency>
        <groupId>org.apache.inlong</groupId>
        <artifactId>manager-common</artifactId>
        <version>inlong_version</version>
</dependency>
```

## 编码
- 实现其中关于Shiro相关模块的接口
```java
org.apache.inlong.manager.common.auth.InlongShiro

public interface InlongShiro {

    WebSecurityManager getWebSecurityManager();

    AuthorizingRealm getShiroRealm();

    WebSessionManager getWebSessionManager();

    CredentialsMatcher getCredentialsMatcher();

    ShiroFilterFactoryBean getShiroFilter(SecurityManager securityManager);

    AuthorizationAttributeSourceAdvisor getAuthorizationAttributeSourceAdvisor(SecurityManager securityManager);

}
```

- 实现*InlongShiro*接口，并在"@ConditionalOnProperty"指定配置
```java
@ConditionalOnProperty(name = "type", prefix = "inlong.auth", havingValue = "Custom")
@Component
public class InlongShiroImpl implements InlongShiro {
   //todo
}
```

- 修改manager-web module下application.properties文件中配置
```java
inlong.auth.type=Custom
```