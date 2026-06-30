---
title: Security
sidebar_position: 11
---

## Security Issues

The Apache Software Foundation takes a very active stance in eliminating security issues and denial of service attacks against its products.

We strongly encourage folks to report such issues to our **developing mailing list** first, before disclosing them in a public forum.

Please note that this mailing list should only be used for reporting **undisclosed security vulnerabilities** and managing the process of fixing such vulnerabilities. Regular bug reports or other queries should be created as an [issue](https://github.com/apache/inlong/issues).

The security mailing address is:  
**dev@inlong.apache.org**

## Security Model

Each Apache InLong module defines clear security boundaries based on its design purpose. The following situations are NOT considered vulnerabilities in Apache InLong and should NOT be submitted as security reports (suggestions for hardening the codebase are always welcome):

1. Vulnerabilities triggered by the content of synchronized data (Sort module) The Sort module provides real-time synchronization, supporting reading from and writing trusted data to various types of databases. Unless otherwise specified, malicious data residing in a database is considered unsafe, and users are responsible for ensuring the data in their databases is safe. Cases where a vulnerability can be triggered by the content of the synchronized data itself fall into this category.

2. Tenant members viewing business information within their own tenant (Manager module) The Manager module provides tenant-level isolation. Any member of a tenant can view all business information (Group, Sink, Stream, etc.) under the current tenant. If a user needs to keep business information private from others, they only need to ensure that other users do not join the current tenant. Cases where the concern is that tenant members can view Group, Stream, and other information fall into this category.

3. Normal operations performed within granted permissions (Manager module) Under the tenant permission model, only the owner of a Group can modify or delete Group, Sink, Stream, and related information. Normal operations performed by members within the scope of their granted permissions fall into this category.

4. Security issues caused by the user's own misconfiguration or deployment Information disclosure or risks caused by the user's own actions — such as failing to configure tenant isolation correctly, improperly managing tenant membership, or deploying in an insecure environment — fall into this category.

5. Issues arising when the trusted-data / trusted-environment assumption is broken InLong assumes it runs on top of trusted data sources and a trusted deployment environment. Issues that arise when this trust assumption is broken on the user's side — such as connecting to untrusted data sources, or exposing access entries that should not be public — fall into this category.

 Issues arising when the trusted-data / trusted-environment assumption is broken InLong assumes it runs on top of trusted data sources and a trusted deployment environment. Issues that arise when this trust assumption is broken on the user's side (e.g., connecting to untrusted data sources, or exposing access entries that should not be public) should not be reported as an InLong vulnerability.