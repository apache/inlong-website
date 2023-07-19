---
title: 多租户
author: vernedeng
author_url: https://github.com/vernedeng
author_image_url: https://avatars.githubusercontent.com/u/45282474?v=4
tags: [Apache InLong, MultiTenant]
---
# 多租户

Inlong多租户实现可以参考：
https://github.com/apache/inlong/issues/7914

不同租户之间资源和权限互相隔离，用户只能看到该租户下的资源。

从低版本升级至1.8版本后，所有资源会被迁移到公共租户public下。


## 创建租户
目前只允许**inlong管理员**来进行租户的创建和修改操作。

- 选择租户管理，点击新建角色
![img.png](img/create_tenant_1.png)
- 选择新建租户
![img_1.png](img/create_tenant_2.png)
- 完善租户名称和描述，点击确定，则完成租户的创建
![img.png](img/create_tenant_3.png)
至此完成了租户的创建

## 创建租户角色

- 选择租户管理，点击新建角色
![img.png](img/create_tenant_1.png)
- 选则目标租户，用户名称，和想要授予的租户角色(如果租户不存在，请参考创建租户步骤)
![img.png](img/create_tenant_role_1.png)
- 创建成功后，可以在租户管理界面看到名下的租户以及对应的用户角色
![img.png](img/create_tenant_role_2.png)


## 租户切换
- 点击右上角租户字段，可以选择切换到名下拥有的租户
![img.png](img/create_tenant_role_3.png)

