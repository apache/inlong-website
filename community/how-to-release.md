---
title: How to Release
sidebar_position: 6
---

> This article mainly introduces how the Release Manager releases a new version in accordance with the Apache requirements.

## Prolegomenon
Source Release is the key point which Apache values, also, is necessary for a release;
Binary Release is optional. InLong can choose whether to release the binary package to the Apache repository or to the Maven central repository.

Note that for binary distribution packages, it is necessary to check that the new version does not contain third-party dependencies of class x, including direct reference and indirect reference parts.

For more guideline, you can refer the following links:

[ASF Release Creation Process](https://infra.apache.org/release-publishing.html)

[ASF Release Policy](https://www.apache.org/legal/release-policy.html)


## Adding PG KEY
> Ref：https://infra.apache.org/openpgp.html
**This section is the requirements for release manager who is the first time to be a release manager**

### Install gpg
For more details, please ref to [Official website](https://www.gnupg.org/download/index.html), configurations under Mac OS:
```shell
$ brew install gpg
$ gpg --version #check the version, should be 2.x
```
### Generate gpg Key
#### Attentions：
- Name is best to keep consistent with your full name of Apache ID
- The mailbox used is apache. It is recommended that pg -k view all the keys. If the first one is not the key of the apache mailbox, if you need to specify the key in the step for encryption operation, the parameter is -u
- Make sure that there is only one key, and delete the keys of other spare mailboxes first
- Name is best to only use English to avoid garbled

#### Generate the key as prompt
```shell
➜  ~ gpg --full-gen-key
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

### upload your key to public gpg keyserver

```shell
➜  ~ gpg --list-keys                                                        
-------------------------------
pub   rsa4096 2020-05-18 [SC]
      5931F8CFD04B37A325E4465D8C0D31C4149B3A87
uid           [ultimate] Guangxu Cheng <gxcheng@apache.org>
sub   rsa4096 2020-05-18 [E]

# command for sending your key id to key server
$ gpg --keyserver pgpkeys.mit.edu --send-key <key id>
# Among them, pgpkeys.mit.edu is a randomly selected keyserver, and the keyserver list is: https://sks-keyservers.net/status/, which is automatically synchronized with each other, you can choose any one of them.
```

### Check whether the key is created successfully
Uploading takes about one minute, after that, you can check by your email at `https://pgpkeys.mit.edu/`.


### Add your gpg public key to the KEYS document
> SVN is required for this step
The svn repository of the DEV branch is: https://dist.apache.org/repos/dist/dev/inlong
The svn repository of the Release branch is: https://dist.apache.org/repos/dist/release/inlong
#### Add the public key to KEYS in the dev branch to release the RC version
```shell
➜  ~ svn co https://dist.apache.org/repos/dist/dev/inlong /tmp/inlong-dist-dev
# As this step will copy all the versions, it will take some time. If the network is broken, please use svn cleanup to delete the lock before re-execute it.
➜  ~ cd inlong-dist-dev
➜  inlong-dist-dev ~ (gpg --list-sigs YOUR_NAME@apache.org && gpg --export --armor YOUR_NAME@apache.org) >> KEYS # Append your key to the KEYS file
➜  inlong-dist-dev ~ svn add .	# It is not needed if the KEYS document exists before.
➜  inlong-dist-dev ~ svn ci -m "add gpg key for YOUR_NAME" # Later on, if you are asked to enter a username and password, just use your apache username and password.
```

#### Add the public key to the KEYS in the release branch for releasing official version
```shell
➜  ~ svn co https://dist.apache.org/repos/dist/release/inlong /tmp/inlong-dist-release
➜  ~ cd inlong-dist-release
➜  inlong-dist-release ~ (gpg --list-sigs YOUR_NAME@apache.org && gpg --export --armor YOUR_NAME@apache.org) >> KEYS	# Append the KEY you generated to the document KEYS, after appending, it is best to check whether it is correct
➜  inlong-dist-release ~ svn add .	# It is not needed if the KEYS document exists before.
➜  inlong-dist-release ~ svn ci -m "add gpg key for YOUR_NAME" # Later on, if you are asked to enter a username and password, just use your apache username and password.
```
### Upload the GPG public key to your Github account
1. Enter https://github.com/settings/keys to add GPG KEYS.
2. Please remember to bind the email address used in the GPG key to your github account (https://github.com/settings/emails)., if you find "unverified" after adding it.
## Mavne settings

**Skip if your have done this before**

Adding `<server>` configurations in ~/.m2/settings.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<settings xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.1.0 http://maven.apache.org/xsd/settings-1.1.0.xsd" xmlns="http://maven.apache.org/SETTINGS/1.1.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <servers>
    <!-- Apache Repo Settings -->
    <server>
        <id>apache.snapshots.https</id>
        <username>{user-id}</username>
        <password>{user-pass}</password>
    </server>
    <server>
        <id>apache.releases.https</id>
        <username>{user-id}</username>
        <password>{user-pass}</password>
    </server>
  </servers>
<profiles>
    <profile>
      <id>apache-release</id>
      <properties>
        <gpg.keyname>Your KEYID</gpg.keyname><!-- Your GPG Keyname here -->
        <!-- Use an agent: Prevents being asked for the password during the build -->
        <gpg.useagent>true</gpg.useagent>
        <gpg.passphrase>Password for you private key</gpg.passphrase>
      </properties>
    </profile>
</profiles>
</settings>
```

## Build
### Prepare branch
  - Checkout out a new branch from the master branch as the release branch，release-${release_version}

  - update `CHANGES.md`

  - check the code, including whether compile, unit test, RAT check etc.

    ```shell
    # build check
    $ mvn clean package -Dmaven.javadoc.skip=true
    # RAT check
    $ mvn apache-rat:check
    ```

  - update version

### create tag
>Make sure code check is pass before creating tag, including compile success, unit test pass, RAT check pass etc.

**Create a tag with annotation**
```shell
$ git_tag=${release_version}-${rc_version}
$ git tag -s $git_tag -m "Tagging the ${release_version} first Releae Candidate (Candidates start at zero)"
# if met error  gpg: signing failed: secret key not available, you should set private key first.
$ git config user.signingkey ${KEY_ID}
```
### Building source code package 

> You should package the source code as a tar file after creating tag

```shell
mkdir /tmp/apache-inlong-${release_version}-${rc_version}
git archive --format=tar.gz --output="/tmp/apache-inlong-${release_version}-${rc_version}/apache-inlong-${release_version}-src.tar.gz" --prefix="apache-inlong-${release_version}/" $git_tag
```

### Building binary package
> compile the code in the step above.

```shell
cd /tmp/apache-inlong-${release_version}-${rc_version} # go to directory where the source code package stay
tar xzvf apache-inlong-${release_version}-src.tar.gz # uncompress the tar file
cd apache-inlong-${release_version} # go to the source code directory
cp ./inlong-distribution/target/apache-inlong-${release_version}-bin.tar.gz /tmp/apache-inlong-${release_version}-${rc_version}/  # for signature convenient, copy the binary package to the source code directory
cp ./inlong-distribution/target/apache-inlong-${release_version}-sort-connectors.tar.gz /tmp/apache-inlong-${release_version}-${rc_version}/ # for signature convenient, copy the connectors binary package to the source code directory
```

### sign the source package/binary package/sha512
```shell
for i in *.tar.gz; do echo $i; gpg --print-md SHA512 $i > $i.sha512 ; done # calculate SHA512
for i in *.tar.gz; do echo $i; gpg --armor --output $i.asc --detach-sig $i ; done # calculate signature
```

### check the signature/sha512
Ref：[check the candidate version](how-to-verify.md)
e.g. check the signature:
```shell
for i in *.tar.gz; do echo $i; gpg --verify $i.asc $i ; done
```
## Prepare for Apache release
### Deploy jar to Apache Nexus repository
```shell
cd /tmp/apache-inlong-${release_version}-${rc_version} # go to the source code directory
tar xzvf apache-inlong-${release_version}-src.tar.gz # uncompress source code package
cd apache-inlong-${release_version}
mvn -DskipTests deploy -Papache-release -Dmaven.javadoc.skip=true  # uploading
```

### Upload tag to git repository

```shell
git push origin ${release_version}-${rc_version}
```

### Upload tar file to dist repo
> SVN is need in this step, SVN repo for DEV branch is https://dist.apache.org/repos/dist/dev/inlong

### Checkout InLong to local directory
```shell
# As this step will copy all the versions, it will take some time. If the network is broken, please use svn cleanup to delete the lock before re-execute it.
svn co https://dist.apache.org/repos/dist/dev/inlong /tmp/inlong-dist-dev
```

### Add public key to KEYS file adn commit to SVN repository
```shell
cd /tmp/inlong-dist-dev
mkdir ${release_version}-${rc_version} # create a directory named by version
cp /tmp/apache-inlong-${release_version}-${rc_version}/*tar.gz* ${release_version}-${rc_version}/ # copy source code and signature package to the versioned directory  
svn status # check svn status
svn add ${release_version}-${rc_version} # addi to svn
svn status # check svn status
svn commit -m "prepare for ${release_version} ${rc_version}"     # commit to SVN remote server
```
### Close Apache Staging repository
> make sure all artifacts is ok
1. **Log in **http://repository.apache.org wit your Apache account
2. Click the Staging repositories on the left 
3. Search `InLong` and select the latest unloaded repository
4. Click the close button which will trigger a serials of checks
5. You will get a link like `https://repository.apache.org/content/repositories/orgapacheinlong-xxxx` on the Summary page if all checks passed. This link will be posted in the vote email, so, keep it safe.


WARN: Close operation may fail, you should check the causes and fix them.

## Voting
> InLong has graduated and only needs to vote once now.
- InLong community vote，send email to ：`dev@inlong.apache.org`

### InLong community vote

#### Vote template

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

    Artifacts were signed with the {YOUR_PUB_KEY} key which can be found in:

    https://downloads.apache.org/inlong/KEYS

    ${release_version} includes ~ ${issue_count} bug fixes and improvements done since last versions which can be found at:

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

      More detailed checklist  please refer to:
      https://inlong.apache.org/community/how-to-verify

Thanks,
Your InLong Release Manager
```

#### Vote Result template
```html
Title：[RESULT][VOTE] Release Apache InLong ${release_version} ${rc_version}

Content：

Hello Apache InLong PMC and Community,

    The vote closes now as 72hr have passed. The vote PASSES with
    xx (+1 non-binding) votes from the PMC,
    xx (+1 non-binding) vote from the rest of the developer community,
    and no further 0 or -1 votes.

    The vote thread: {vote_mail_address}

    The release is accepted and will be published.

Thank you for your support.
Your InLong Release Manager
```

## Officially released

### Merge branch release-${release_version} to master branch
### Move source code and binary package from DEV to release repository on SVN.
```shell
svn mv https://dist.apache.org/repos/dist/dev/inlong/${release_version}-${rc_version} https://dist.apache.org/repos/dist/release/inlong/${release_version} -m "Release ${release_version}"
```
### Check whether the dev and release is correct
1. Make sure `${release_version}-${rc_version}` is deleted in [dev](https://dist.apache.org/repos/dist/dev/inlong/).
2. Delete release package of pre versions[release](https://dist.apache.org/repos/dist/release/inlong/)，these packages will be saved [here](https://archive.apache.org/dist/inlong/)
```shell
svn delete https://dist.apache.org/repos/dist/release/inlong/${last_release_version} -m "Delete ${last_release_version}"
```

### Release version in Apache Staging
> Make sure all artifacts are ok
1. Log in http://repository.apache.org with your Apache account
2. Click the Staging repositories on the left
3. Searching InLong at choose the latest uploaded repository which is specified in the vote email
4. Click the `Release` button above which will trigger a serials of checks

** Wait the repository sync to other repositories which generally takes 24 hours**

### Update links on official website

### Send email to `dev@inlong.apache.org` and CC `announce@apache.org`
**Please make sure deployment in step 6.4 is successfully, and generally wait 24 hours between 6.4 and send emails**
**The way to ensure that the release is successful is to log in to https://downloads.apache.org/inlong/${release-version}/ to see if there is an installation package**

Release announce email template：
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
1. xxxxx
2. yyyyyy
3. zzzzzz

Please refer to the change log for the complete list of changes:
https://github.com/apache/inlong/blob/${release_version}-${rc_version}/CHANGES.md

Apache InLong website: https://inlong.apache.org/

Download Links: https://inlong.apache.org/download

InLong Resources:
- Issue: https://github.com/apache/inlong/issues
- Mailing list: dev@inlong.apache.org

Thanks
On behalf of Apache InLong community
```

### Official website added release package

1. Go to https://github.com/apache/inlong, click the + sign under Releases on the right, then click Draft a new release
2. The release title is ${release_version}, upload all files under https://downloads.apache.org/inlong/${release-version}
