# Reporting New Security Problems with Apache InLong Components

The Apache Software Foundation takes a very active stance in eliminating security problems and denial of service attacks against its products.

We strongly encourage folks to report such problems to our **private security mailing list** first, before disclosing them in a public forum.

Please note that the security mailing list should only be used for reporting **undisclosed security vulnerabilities** and managing the process of fixing such vulnerabilities. Regular bug reports or other queries will be ignored.

The private security mailing address is:  
**security@inlong.apache.org**

## Security Model

Apache InLong's Sort module provides real-time synchronization capabilities, supporting reading from and writing to various types of databases with trusted data. Unless specified otherwise, the presence of malicious data in the database is considered a security risk for the user. We emphasize that users are responsible for ensuring the security of their database data. Therefore, if vulnerabilities are triggered by the content of the synchronized data, such issues should not be reported as vulnerabilities of Apache InLong. We welcome suggestions for enhancing our code base.

