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

Each Apache InLong module has a clear responsibility boundary for security based on its design purpose. The following situations are not considered Apache InLong vulnerabilities and do not need to be reported as security issues (suggestions for hardening the codebase are still welcome):

1. Vulnerabilities triggered by the content of synchronized data

The Sort module provides real-time data synchronization, supporting reading from and writing to trusted data across various databases. Unless otherwise specified, malicious data within a database is considered untrusted input, and users are responsible for ensuring the security of their data sources.

2. Tenant members viewing business information within their own tenant

The Manager module provides tenant isolation. Any member within a tenant can view all business information under that tenant, including Groups, Sinks, Streams, etc. To prevent business information from being viewed by others, users simply need to ensure that irrelevant personnel are not added to the tenant.

3. Normal operations performed within the scope of authorization

Under the tenant permission model, only the Group owner has the authority to modify and delete the Group, Sink, Stream, and other associated information. Normal operations performed by members within their granted permissions fall into this category.

4. Security issues caused by improper user configuration or deployment

Information leakage or risks arising from the user's own actions — such as failure to properly configure tenant isolation, failure to properly manage member enrollment, or an insecure deployment environment.

5. Issues arising when the trusted data or trusted environment premise is broken

InLong operates by default on trusted data sources and a trusted deployment environment. When this trust premise is broken on the user side — for example, by connecting untrusted data sources or exposing access points that should not be public — the resulting issues fall into this category.es arising when the trusted-data / trusted-environment assumption is broken InLong assumes it runs on top of trusted data sources and a trusted deployment environment. Issues that arise when this trust assumption is broken on the user's side (e.g., connecting to untrusted data sources, or exposing access entries that should not be public) should not be reported as an InLong vulnerability.