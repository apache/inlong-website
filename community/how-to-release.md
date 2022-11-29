---
title: How to Release
sidebar_position: 6
---

This article mainly introduces how to release a new version for Apache InLong in accordance with the Apache requirements. For more guideline, you can refer the following links:
- [ASF Release Creation Process](https://infra.apache.org/release-publishing.html)
- [ASF Release Policy](https://www.apache.org/legal/release-policy.html)

:::caution
For binary distribution packages, it is necessary to check that the new version does not contain third-party dependencies of class x, including direct reference and indirect reference parts.
:::

## Add GPG Key
:::note
This section is refer to [Cryptography with OpenPGP](https://infra.apache.org/openpgp.html), ** only for release manager who is the first time to release. **
:::

### Install GPG
For more details, please ref to [Official website](https://www.gnupg.org/download/index.html), configurations under Mac OS:
```shell
$ brew install gpg
# check the version, should be 2.x
$ gpg --version
```

### Generate GPG Key
:::caution
- Name is best to keep consistent with your full name of Apache ID
- The mailbox used is apache. It is recommended that pg -k view all the Key ID. If the first one is not the Key ID of the apache mailbox, if you need to specify the Key ID in the step for encryption operation, the parameter is -u
- Make sure that there is only one key, and delete the keys of other spare mailboxes first
- Name is best to only use English to avoid garbled
:::

```shell
$ gpg --full-gen-key
gpg (GnuPG) 2.2.20; Copyright (C) 2020 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Please select what kind of key you want:
   (1) RSA and RSA (default)
   (2) DSA and Elgamal
   (3) DSA (sign only)
   (4) RSA (sign only)
  (14) Existing key from card
Your selection? 1 # input 1
RSA keys may be between 1024 and 4096 bits long.
What keysize do you want? (2048) 4096 # input 4096
Requested keysize is 4096 bits       
Please specify how long the key should be valid.
         0 = key does not expire
      <n>  = key expires in n days
      <n>w = key expires in n weeks
      <n>m = key expires in n months
      <n>y = key expires in n years
Key is valid for? (0) 0 # input 0
Key does not expire at all
Is this correct? (y/N) y # input y

GnuPG needs to construct a user ID to identify your key.

Real name: Guangxu Cheng # input your name
Email address: gxcheng@apache.org # input your emal
Comment:                          # input some annotations, optional
You selected this USER-ID:
    "Guangxu Cheng <gxcheng@apache.org>"

Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O # input 0
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.

# Input the security key
┌──────────────────────────────────────────────────────┐
│ Please enter this passphrase                         │
│                                                      │
│ Passphrase: _______________________________          │
│                                                      │
│       <OK>                              <Cancel>     │
└──────────────────────────────────────────────────────┘
# key generatio[n will be done after your inputting the key with the following output
gpg: key 2DD587E7B10F3B1F marked as ultimately trusted
gpg: revocation certificate stored as '/Users/cheng/.gnupg/openpgp-revocs.d/41936314E25F402D5F7D73152DD587E7B10F3B1F.rev'
public and secret key created and signed.

pub   rsa4096 2020-05-19 [SC]
      41936314E25F402D5F7D73152DD587E7B10F3B1F
uid                      Guangxu Cheng <gxcheng@apache.org>
sub   rsa4096 2020-05-19 [E]
```

### Upload your key to public GPG keyserver

```shell
$ gpg --list-keys                                                        
-------------------------------
pub   rsa4096 2020-05-18 [SC]
      5931F8CFD04B37A325E4465D8C0D31C4149B3A87
uid           [ultimate] Guangxu Cheng <gxcheng@apache.org>
sub   rsa4096 2020-05-18 [E]

# command for sending your key id to key server
$ gpg --keyserver pgpkeys.mit.edu --send-key <key id>
# Among them, the keyserver list is: https://sks-keyservers.net/status/, which is automatically synchronized with each other, you can choose any one of them.
```

### Check whether the GPG Key is created successfully
Uploading takes about one minute, after that, you can check it by your email at `https://pgpkeys.mit.edu/`.

### Upload the GPG public key to SVN repo
:::note
The svn repository of the DEV branch is: https://dist.apache.org/repos/dist/dev/inlong

The svn repository of the Release branch is: https://dist.apache.org/repos/dist/release/inlong
:::

- Add the public key to KEYS in the dev branch to release the RC version
```shell
# As this step will copy all the versions, it will take some time. If the network is broken, please use svn cleanup to delete the lock before re-execute it.
$ svn co https://dist.apache.org/repos/dist/dev/inlong /tmp/inlong-dist-dev
$ cd inlong-dist-dev
# # Append your key to the KEYS file
$ gpg --export --armor YOUR_NAME@apache.org >> KEYS 
# Later on, if you are asked to enter a username and password, just use your apache username and password.
$ svn ci -m "add gpg key for YOUR_NAME" 
```

- Add the public key to the KEYS in the release branch for releasing official version
```shell
$ svn co https://dist.apache.org/repos/dist/release/inlong /tmp/inlong-dist-release
$ cd inlong-dist-release
$ gpg --export --armor YOUR_NAME@apache.org >> KEYS 
$ svn ci -m "add gpg key for YOUR_NAME" 
```

### Upload the GPG public key to your Github account
 Enter https://github.com/settings/keys to add GPG KEYS. Please bind the email address used in the GPG key to your [GitHub account](https://github.com/settings/emails), if you find "unverified" after adding it.

## Maven settings
Adding `<servers>/<profiles>` configurations in your maven `settings.xml` with correct values:
```xml
<servers>
    <server>
        <id>apache.snapshots.https</id>
        <username>{Your Apache ID}</username>
        <password>{Your Apache Password}</password>
    </server>
    <server>
        <id>apache.releases.https</id>
        <username>{Your Apache ID}</username>
        <password>{Your Apache Password}</password>
    </server>
</servers>
<profiles>
    <profile>
      <id>apache-release</id>
      <properties>
        <gpg.keyname>{Your GPG Key ID}</gpg.keyname>
        <gpg.useagent>true</gpg.useagent>
        <gpg.passphrase>{Password for you GPG key}</gpg.passphrase>
      </properties>
    </profile>
</profiles>
```

## Build
The following `release_version` is the upcoming release number, such as 1.4.0; `rc_version` is Release Candidate, such as RC0, RC1...; `KEY_ID` is your GPG Key ID.

### Prepare branch
- Create the release branch from the main version branch and modify the POM version number and CHANGES.md. For example, create `release-1.4.0` from `branch-1.4`

- check the code, including whether compile, unit test, RAT check, Docker images etc.
```shell
# build check
$ mvn clean package -Dmaven.javadoc.skip=true
# RAT check
$ mvn apache-rat:check
# Docker images
$ mvn clean package -DskipTests -Pdocker
```

:::caution
Make sure code check is pass before executing next step, including compile success, unit test pass, RAT check pass etc.
:::

### create tag
Create a tag with annotation:
```shell
$ git_tag=${release_version}-${rc_version}
$ export GPG_TTY=`tty` && git config user.signingkey ${KEY_ID}
$ git tag -s $git_tag -m "Tagging the ${release_version} first Releae Candidate (Candidates start at zero)"
```

### Building source code package 
```shell
$ mkdir /tmp/apache-inlong-${release_version}-${rc_version}
$ git archive --format=tar.gz --output="/tmp/apache-inlong-${release_version}-${rc_version}/apache-inlong-${release_version}-src.tar.gz" --prefix="apache-inlong-${release_version}/" $git_tag
```

### Building binary package
```shell
# go to directory where the source code package stay
$ cd /tmp/apache-inlong-${release_version}-${rc_version} 
# uncompress the tar file
$ tar xzvf apache-inlong-${release_version}-src.tar.gz 
# go to the source code directory
$ cd apache-inlong-${release_version}
# for signature convenient, copy the binary package to the source code directory
$ cp ./inlong-distribution/target/apache-inlong-${release_version}-bin.tar.gz /tmp/apache-inlong-${release_version}-${rc_version}/
# for signature convenient, copy the connectors binary package to the source code directory
$ cp ./inlong-distribution/target/apache-inlong-${release_version}-sort-connectors.tar.gz /tmp/apache-inlong-${release_version}-${rc_version}/
```

### Sign the source package/binary package/sha512
```shell
# 进入源码包目录
$ cd /tmp/apache-inlong-${release_version}-${rc_version}
# calculate SHA512
$ for i in *.tar.gz; do echo $i; gpg -u ${KEY_ID} --print-md SHA512 $i > $i.sha512 ; done 
# calculate signature
$ for i in *.tar.gz; do echo $i; gpg -u ${KEY_ID} --armor --output $i.asc --detach-sig $i ; done 
```

### Check the signature/sha512
Ref：[check the candidate version](how-to-verify.md), e.g. check the signature:
```shell
$ for i in *.tar.gz; do echo $i; gpg -u ${KEY_ID} --verify $i.asc $i ; done
```

## Prepare for Apache release
### Deploy jar to Apache Nexus repository
```shell
# go to the source code directory
$ cd /tmp/apache-inlong-${release_version}-${rc_version}/apache-inlong-${release_version}
# start to upload, and make sure the settings.xml is the file updated before
$ mvn -DskipTests deploy -Papache-release -Dmaven.javadoc.skip=true
```

### Upload tag to git repository
```shell
# under the directory where you create the tag
$ git push origin ${release_version}-${rc_version}
```

### Upload tar file to dist repo
- Checkout dist repo to local directory
```shell
# As this step will copy all the versions, it will take some time. If the network is broken, please use svn cleanup to delete the lock before re-execute it.
$ svn co https://dist.apache.org/repos/dist/dev/inlong /tmp/inlong-dist-dev
```

- Add source and binary files and commit to SVN repository
```shell
$ cd /tmp/inlong-dist-dev
# create a directory named by version
$ mkdir ${release_version}-${rc_version} 
# copy source code and signature package to the versioned directory
$ cp /tmp/apache-inlong-${release_version}-${rc_version}/*tar.gz* ${release_version}-${rc_version}/ 
# check svn status
$ svn status
# addi to svn
$ svn add ${release_version}-${rc_version}
# check svn status
$ svn status
# commit to SVN remote server
$ svn commit -m "prepare for ${release_version} ${rc_version}"     
```

### Close Apache Staging repository
- Login http://repository.apache.org with your Apache account
- Click the Staging repositories on the left 
- Search `InLong` and select the latest unloaded repository
- Click the close button which will trigger a serials of checks
- You will get a link like `https://repository.apache.org/content/repositories/orgapacheinlong-{staging-id}` on the Summary page if all checks passed. This link will be posted in the vote email, so, keep it safe.

:::caution
Close operation may fail, you should check the causes and fix them.
:::

## Apache InLong community vote
### Start Vote
Send email to `dev@inlong.apache.org`, the vote template is:
```html
Title：[VOTE] Release Apache InLong ${release_version} ${rc_version}

Content：

Hello Apache InLong PMC and Community,

    This is a call for a vote to release Apache InLong version ${release_version}-${rc_version}.

    The tag to be voted on is ${release_version}-${rc_version}:

    https://github.com/apache/inlong/tree/${release_version}-${rc_version}

    The release tarball, signature, and checksums can be found at:

    https://dist.apache.org/repos/dist/dev/inlong/${release_version}-${rc_version}/

    Maven artifacts are available in a staging repository at:

    https://repository.apache.org/content/repositories/orgapacheinlong-{staging-id}

    Artifacts were signed with the {YOUR_GPG_KEY_ID} key, which can be found in:

    https://downloads.apache.org/inlong/KEYS

    ${release_version} includes ~ ${issue_count} bug fixes and improvements done since the last versions, which can be found at:

    https://github.com/apache/inlong/blob/${release_version}-${rc_version}/CHANGES.md

    Please download, verify, and test.

    The VOTE will remain open for at least 72 hours.

    [ ] +1 Release this package as Apache InLong ${release_version}
    [ ] +0
    [ ] -1 Do not release this package because...

    To learn more about apache inlong, please see
    http://inlong.apache.org/

    Checklist for reference:

      [ ] Download links are valid.
      [ ] Checksums and signatures.
      [ ] LICENSE/NOTICE files exist
      [ ] No unexpected binary files
      [ ] All source files have ASF headers
      [ ] Can compile from source
      [ ] All Tests Passed

      More detailed checklist, please refer to the following:
      https://inlong.apache.org/community/how-to-verify

Thanks,
Your InLong Release Manager
```

### Counting the vote result
Send email to `dev@inlong.apache.org`, the vote template is:
```html
Title：[RESULT][VOTE] Release Apache InLong ${release_version} ${rc_version}

Content：

Hello Apache InLong PMC and Community,

    The vote closes now as 72hr have passed. The vote passed with
    xx (+1 binding) votes from the PMC,
    xx (+1 non-binding) vote from the rest of the developer community,
    and no further 0 or -1 votes.

    The voting thread: {vote_mail_address}

    The release is accepted and will be published.

Thank you for your support.
Your InLong Release Manager
```

## Officially release
### Move source code and binary package from DEV to release repository on SVN.
```shell
$ svn mv https://dist.apache.org/repos/dist/dev/inlong/${release_version}-${rc_version} https://dist.apache.org/repos/dist/release/inlong/${release_version} -m "Release ${release_version}"
```
Then make sure `${release_version}-${rc_version}` directory is deleted in [dev](https://dist.apache.org/repos/dist/dev/inlong/).

### Release version in Apache Staging
- Log in http://repository.apache.org with your Apache account
- Click the Staging repositories on the left
- Searching InLong at choose the latest uploaded repository which is specified in the vote email
- Click the `Release` button above which will trigger a serials of checks

:::caution
Wait the repository sync to other repositories which generally takes 24 hours
:::

### Update Documents and download links on official website
- Update [download](https://inlong.apache.org/download/) resource links

- Create ${release-version} related version document

### Send email to `dev@inlong.apache.org` and CC `announce@apache.org`
- Please make sure deployment in Apache Staging is successfully

- Log in to https://downloads.apache.org/inlong/${release-version}/ to see if there is an installation package

- Release announce email, the template is：
```html
Title： [ANNOUNCE] Release Apache InLong ${release_version}

Content：

Hi all,

The Apache InLong community is pleased to announce 
that Apache InLong ${release_version} has been released!

Apache InLong is a one-stop integration framework for massive data that provides automatic, secure,
distributed, and efficient data publishing and subscription capabilities.
This platform helps you easily build stream-based data applications.

This release contains a number of new features, bug fixes and
improvements compared to the last version released before.
The notable changes since ${release_version} include:

1. Feature-1
2. Feature-2
3. Feature-3
...

${release_version} since the last versions, which can be found at:

Please refer to the change log for the complete list of changes:
https://github.com/apache/inlong/blob/release-${release_version}/CHANGES.md

Apache InLong website: https://inlong.apache.org/

Download Links: https://inlong.apache.org/download

InLong Resources:
- Issue: https://github.com/apache/inlong/issues
- Mailing list: dev@inlong.apache.org

Thanks
On behalf of the Apache InLong community
```

### GitHub release package
- Go to https://github.com/apache/inlong, click the + sign under Releases on the right, then click Draft a new release
- The release title is ${release_version}, upload all files under https://downloads.apache.org/inlong/${release-version}

## After the release
### Clean up temporary files
If the above steps are successful, the version release is booming, and you can clean up local temporary files and conduct community voting.
```shell
$ rm -rf /tmp/apache-inlong-${release_version}-${rc_version}/
$ rm -rf /tmp/inlong-dist-dev/
```

### Archive the previous version packages
Delete release package of previous versions [release](https://dist.apache.org/repos/dist/release/inlong/)，these packages will be saved [here](https://archive.apache.org/dist/inlong/)
```shell
# last_release_version is the last version number, you can check is by accessing https://dist.apache.org/repos/dist/release/inlong/ ,e.g 1.3.0
$ svn delete https://dist.apache.org/repos/dist/release/inlong/${last_release_version} -m "Delete ${last_release_version}"
```

