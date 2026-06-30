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

Apache InLong's modules have clear divisions of responsibility regarding security boundaries based on their design intent. The following cases are not considered Apache InLong vulnerabilities and need not be reported as security issues:

1.Vulnerabilities triggered by synchronized data content

The Sort module provides real-time data synchronization capabilities, supporting the reading and writing of trusted data across various databases. Unless otherwise agreed, malicious data within databases is considered untrusted input, and users are responsible for ensuring the security of their own data sources.

2.Tenant members viewing business information within their own tenant

The Manager module provides tenant isolation. Any member within the same tenant can view all business information under that tenant, including Group, Sink, Stream, etc. Under the tenant permission model, only Group owners have the authority to modify and delete their Groups, Sinks, Streams, and other associated information; normal operations performed by members within their granted permissions also fall under this category. To prevent business information from being viewed by others, users simply need to ensure that unrelated personnel are not added to the current tenant.

We welcome suggestions for hardening the codebase.