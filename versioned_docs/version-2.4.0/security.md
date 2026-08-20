---
title: Security
sidebar_position: 11
---

## Security Issues

The Apache Software Foundation takes a very active stance in eliminating security issues and denial of service attacks against its products.

We strongly encourage folks to report such issues to our **private security list** first, before disclosing them in a public forum.

Please note that this mailing list should only be used for reporting **undisclosed security vulnerabilities** and managing the process of fixing such vulnerabilities. Regular bug reports or other queries should be created as an [issue](https://github.com/apache/inlong/issues).

The security mailing address is:  
**security@apache.org**

## Security Model

Apache InLong modules have clearly defined responsibilities for security boundaries based on their design roles. The following scenarios are not considered vulnerabilities in Apache InLong and should not be reported as security issues:

- The Sort module provides real-time data synchronization capabilities, responsible for reading and writing trusted data across various databases. Unless otherwise specified, malicious data within the database is considered unsafe input, and users must ensure the security of their data sources themselves, including but not limited to validating incoming data and authenticating access origins.

- The Manager module provides tenant isolation capabilities. Within the same tenant, any member can view all business information under that tenant, including Groups, Sinks, Streams, and more. Under the tenant permission model, only the Group owner has the authority to modify or delete their respective Groups, Sinks, Streams, and related data; normal operations performed by members within their granted permissions also fall under this category. To prevent business information from being accessed by others, users simply need to ensure that unauthorized individuals are not added to the current tenant.

It should be noted that the above explanation aims to clarify the security boundaries. We always welcome community input on enhancing codebase security and improving boundary protection, working together to drive the project's continuous evolution.