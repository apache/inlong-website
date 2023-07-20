---
title: Multiple Tenant
author: vernedeng
author_url: https://github.com/vernedeng
author_image_url: https://avatars.githubusercontent.com/u/45282474?v=4
tags: [Apache InLong, MultiTenant]
---
# Multi-tenant

For the implementation of InLong multi-tenant, please refer to:
https://github.com/apache/inlong/issues/7914

:::caution
- Resources and permissions are isolated between different tenants, and users can only see resources under their tenant.

- After upgrading from a lower version to version 1.8, all resources will be migrated to the `public` tenant.
:::

## Create a tenant
Currently, only **InLong Admins** are allowed to create and modify tenants.

- Select `Tenant Management`, and click `Create`.
  ![img.png](img/create_tenant_1.png)
- Choose to `Create` a new tenant.
  ![img_1.png](img/create_tenant_2.png)
- Complete the `Tenant Name` and description, click `OK` to finish creating the tenant.
  ![img.png](img/create_tenant_3.png)
  The tenant has been created at this point.

## Create tenant role

- Select `Tenant Management`, and click `Create`.
  ![img.png](img/create_tenant_1.png)
- Choose the target `Tenant Name`, `User Name`, and the `Tenant Role` you want to grant (if the tenant does not exist, please refer to [Create a tenant](#create-a-tenant)).
  ![img.png](img/create_tenant_role_1.png)
- After successful creation, you can see the tenants and their corresponding user roles in the `Tenant Management`.
  ![img.png](img/create_tenant_role_2.png)

## Tenant switching
- Click the `Tenant` field in the upper right corner and choose the tenant you switch to.
  ![img.png](img/create_tenant_role_3.png)