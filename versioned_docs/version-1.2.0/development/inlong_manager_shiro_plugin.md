---
title: Custom Authentication
sidebar_position: 2
---

import {siteVariables} from '../version';

## Overview
The Apache Shiro framework is used in the inlong manager to realize the functions of authentication and authorization. The manager has integrated the default implementation logic. If you want to realize the custom Shiro based authentication and authorization function in the inlong manager, you can carry out the plug-in development of relevant functions according to the following instructions.

## Dependency
- Add Maven Dependency
<pre><code parentName="pre">
{`<dependency>
    <groupId>org.apache.inlong</groupId>
    <artifactId>manager-common</artifactId>
    <version>${siteVariables.inLongVersion}</version>
</dependency>
`}
</code></pre>

## Code
- Implement the following interfaces
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

- Implement * InlongShiro * interface and specify the configuration in "@ conditionalonproperty"
```java
@ConditionalOnProperty(name = "type", prefix = "inlong.auth", havingValue = "Custom")
@Component
public class InlongShiroImpl implements InlongShiro {
   //todo
}
```

- Modify the application.properties under the manager web module
```java
inlong.auth.type=Custom
```