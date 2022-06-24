---
title: How to Verify release
sidebar_position: 7
---

To verify the release, the following checklist can be used to reference:
- [ ] Download links are valid.
- [ ] Checksums and PGP signatures are valid.
- [ ] Source code artifacts have correct names matching the current release.
- [ ] LICENSE and NOTICE files are correct for the repository.
- [ ] All files have license headers if necessary.
- [ ] No compiled archives bundled in source archive.
- [ ] Building is OK.


## Download the release package to be verified to the local environment
> Use the following command to download all artifacts, replace "${release_version}-${rc_version}" with the version ID of the version to be released:
```shell
svn co https://dist.apache.org/repos/dist/dev/inlong/${release_version}-${rc_version}/
```

## Verify signature and hash
> Start the verification process, which includes but is not limited to the following content and verification methods.
> GnuPG is recommended, which can install by yum install gnupg or apt-get install gnupg.

### Check if the release package is complete
The package to release must check:
- Whether to include the source code package
- Whether to include the signature of the source code package
- Whether to include the sha512 of the source code package
- (if include) Check the binary package, also check the contents listed in (2)-(4)

### Verify signature and hash
GnuPG is recommended, which can install by yum install GnuPG or apt-get install GnuPG.
  - Import public key
  ```shell
  curl https://downloads.apache.org/inlong/KEYS > KEYS # Download KEYS
  gpg --import KEYS # Import KEYS to local
  ```
  - Trust the public key
  > Trust the KEY used in this version
  ```shell
    gpg --edit-key xxxxxxxxxx                           # KEY used in this version
    gpg (GnuPG) 2.2.21; Copyright (C) 2020 Free Software Foundation, Inc.
    This is free software: you are free to change and redistribute it.
    There is NO WARRANTY, to the extent permitted by law.
    
    Secret key is available.
    
    sec  rsa4096/5EF3A66D57EC647A
         created: 2020-05-19  expires: never       usage: SC  
         trust: ultimate      validity: ultimate
    ssb  rsa4096/17628566FEED6AF7
         created: 2020-05-19  expires: never       usage: E   
    [ultimate] (1). Guangxu Cheng <gxcheng@apache.org>
    
    gpg> trust                                          # Trust the KEY
    sec  rsa4096/5EF3A66D57EC647A
         created: 2020-05-19  expires: never       usage: SC  
         trust: ultimate      validity: ultimate
    ssb  rsa4096/17628566FEED6AF7
         created: 2020-05-19  expires: never       usage: E   
    [ultimate] (1). Guangxu Cheng <gxcheng@apache.org>
    
    Please decide how far you trust this user to correctly verify other users' keys
    (by looking at passports, checking fingerprints from different sources, etc.)
    
      1 = I don't know or won't say
      2 = I do NOT trust
      3 = I trust marginally
      4 = I trust fully
      5 = I trust ultimately
      m = back to the main menu
    
    Your decision? 5                                                    # select 5
    Do you really want to set this key to ultimate trust? (y/N) y       # select y
                                                                 
    sec  rsa4096/5EF3A66D57EC647A
         created: 2020-05-19  expires: never       usage: SC  
         trust: ultimate      validity: ultimate
    ssb  rsa4096/17628566FEED6AF7
         created: 2020-05-19  expires: never       usage: E   
    [ultimate] (1). Guangxu Cheng <gxcheng@apache.org>
    
    gpg> 
         
    sec  rsa4096/5EF3A66D57EC647A
         created: 2020-05-19  expires: never       usage: SC  
         trust: ultimate      validity: ultimate
    ssb  rsa4096/17628566FEED6AF7
         created: 2020-05-19  expires: never       usage: E   
    [ultimate] (1). Guangxu Cheng <gxcheng@apache.org>
  ```
  - Check signature and hash
  ```shell
  for i in *.tar.gz; do echo $i; gpg --verify $i.asc $i ; done
  # or
  gpg --verify apache-inlong-${release_version}-src.tar.gz.asc apache-inlong-${release_version}-src.tar.gz
  # Attention: if you upload a binary package, you also need to check whether the signature of the binary package is correct
  gpg --verify apache-inlong-server-${release_version}-bin.tar.gz.asc apache-inlong-server-${release_version}-bin.tar.gz
  gpg --verify apache-inlong-client-${release_version}-bin.tar.gz.asc apache-inlong-client-${release_version}-bin.tar.gz
```
  - Confirm result
  > If something similar to the following appears, it means that the signature is correct, and the keywords: **`Good signature`**
```shell
apache-inlong-1.3.0-src.tar.gz
gpg: Signature made Sat May 30 11:45:01 2020 CST
gpg:                using RSA key 9B12C2228BDFF4F4CFE849445EF3A66D57EC647A
gpg: Good signature from "Guangxu Cheng <gxcheng@apache.org>" [ultimate]gular2
```

### Verify sha512 hash
> Calculate the sha512 hash locally, and verify that it is consistent with the one on dist
```shell
for i in *.tar.gz; do echo $i; gpg --print-md SHA512 $i; done
# or
gpg --print-md SHA512 apache-inlong-${release_version}-src.tar.gz
# If include a binary package, you also need to check the sha512 hash of the binary package
gpg --print-md SHA512 apache-inlong-server-${release_version}-bin.tar.gz
gpg --print-md SHA512 apache-inlong-client-${release_version}-bin.tar.gz
# or
for i in *.tar.gz.sha512; do echo $i; sha512sum -c $i; done
```

### Check the file content of the source package
Unzip `apache-inlong-${release_version}-src.tar.gz` and check as follows:
- [ ] LICENSE and NOTICE files are correct for the repository.
- [ ] All files have ASF license headers if necessary.
- [ ] The source code can be compiled normally.
- [ ] The single test can run through.
- [ ] Building is OK.

Attentions:
   In the process of practice, it is found that many troublesome problems affect our version verification. The following processing is for reference:
   - Clean up the local repository before verifying the version;
   - The compilation commands are not limited, but since the modules in the project are dockerized, "mvn clean package install" is recommended for the first compilation, other recommended operations include "mvn clean compile", "mvn clean package";
   - When executing unit tests, you should run them separately with "mvn clean test" to ensure that there are no hidden problems.

### Check the binary package (if the binary package is included)
  Unzip `apache-inlong-client-${release_version}-src.tar.gz` and `
  apache-inlong-server-${release_version}-src.tar.gz`, check as follows:
- [ ] LICENSE and NOTICE files are correct for the repository.
- [ ] The deployment can be successful
- [ ] Deploy a test environment to verify whether production and consumption can run normally.
- [ ] Verify what you think might go wrong.

