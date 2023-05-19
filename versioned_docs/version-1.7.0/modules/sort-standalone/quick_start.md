---
title: Deployment
sidebar_position: 2
---
## Prepare to get module archive
Module archive is in the directory:inlong-sort-standalone/sort-standalone-dist/target/, the archive file is apache-inlong-sort-standalone-${project.version}-bin.tar.gz.

## Start inlong-sort-standalone application
- Decompress the archive file;
- Prepare conf/common.properties (and other config files if choosing local file config mode);
- Start SortStandalone ```./bin/sort-start.sh```
- You can check the log file "sort.log".
