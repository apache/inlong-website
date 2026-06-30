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

Based on the Apache InLong security model, the following situations do not need to be reported as security vulnerabilities:

- **Malicious data in the database triggering issues** — When the Sort module synchronizes data, if vulnerabilities are triggered by malicious data content in the database, it should not be reported as a vulnerability of Apache InLong. Users are responsible for ensuring the security of their database data.
- **Tenant members can view business information** — In the Manager module, members within the same tenant can view all business information under that tenant (such as Group, Stream, etc.). If vulnerabilities are triggered by tenant members being able to view this information, it should not be reported as a vulnerability of Apache InLong. Users only need to ensure that untrusted users do not join their tenant.

We welcome suggestions for enhancing our code base.
