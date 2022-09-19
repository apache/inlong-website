---
title: 如何发布版本
sidebar_position: 6
---

> 本文主要介绍了 Release Manager 如何按照 Apache 的流程发布版本，

Source Release 是 Apache 关注的重点，也是发布的必须内容；
Binary Release 是可选项，InLong 可以选择是否发布二进制包到 Apache 仓库或者发布到 Maven 中央仓库。

注意，对于二进制发布包，需要检查新版本里是否包含了 x类 的第三方依赖包，包括直接引用和间接引用部分，如果包含了，需要去掉后再发布版本

相关说明和工具将遵守 ASF 的版本发布指南及 ASF 的发布政策，具体详情请参考以下链接:

[ASF 版本创建过程](https://infra.apache.org/release-publishing.html)

[ASF 发布政策](https://www.apache.org/legal/release-policy.html)

## 添加 GPG KEY
> 本章节主要参考：https://infra.apache.org/openpgp.html
**该章节仅仅对第一次当该项目的 Release Manager 需要。**

### 安装 gpg
详细的安装文档可以参考[官网](https://www.gnupg.org/download/index.html), Mac OS 环境配置如下
```shell
$ brew install gpg
$ gpg --version #检查版本，应该为2.x
```
### 生成 gpg Key
#### 需要注意以下几点：
- 输入名字时最好与 Apache 中登记的 Full name 保持一致
- 使用的邮箱必须是 apache 邮箱，建议先 gpg -k 查看所有 key, 如果列表中第一个不是 apache 邮箱的 key ，需要在后续步骤中指定 key 来进行加密解密操作，参数为 -u
- 名字最好使用拼音或者英文，否则会出现乱码

#### 根据提示，生成key
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
Your selection? 1 # 这里输入1
RSA keys may be between 1024 and 4096 bits long.
What keysize do you want? (2048) 4096 # 这里输入4096
Requested keysize is 4096 bits       
Please specify how long the key should be valid.
         0 = key does not expire
      <n>  = key expires in n days
      <n>w = key expires in n weeks
      <n>m = key expires in n months
      <n>y = key expires in n years
Key is valid for? (0) 0 # 这里输入0
Key does not expire at all
Is this correct? (y/N) y # 这里输入y

GnuPG needs to construct a user ID to identify your key.

Real name: Guangxu Cheng # 这里输入你的名字
Email address: gxcheng@apache.org # 这里输入你的邮箱
Comment:                          # 这里输入一些注释，可以为空
You selected this USER-ID:
    "Guangxu Cheng <gxcheng@apache.org>"

Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O #这里输入O
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.

# 此时会弹出对话框，要求你为这个gpg输入密钥。
┌──────────────────────────────────────────────────────┐
│ Please enter this passphrase                         │
│                                                      │
│ Passphrase: _______________________________          │
│                                                      │
│       <OK>                              <Cancel>     │
└──────────────────────────────────────────────────────┘
#输入秘钥完毕后就创建好了。并会输出以下信息
gpg: key 2DD587E7B10F3B1F marked as ultimately trusted
gpg: revocation certificate stored as '/Users/cheng/.gnupg/openpgp-revocs.d/41936314E25F402D5F7D73152DD587E7B10F3B1F.rev'
public and secret key created and signed.

pub   rsa4096 2020-05-19 [SC]
      41936314E25F402D5F7D73152DD587E7B10F3B1F
uid                      Guangxu Cheng <gxcheng@apache.org>
sub   rsa4096 2020-05-19 [E]
```

### 上传生成的 key 到公共服务器

```shell
➜  ~ gpg --list-keys                                                        
-------------------------------
pub   rsa4096 2020-05-18 [SC]
      5931F8CFD04B37A325E4465D8C0D31C4149B3A87
uid           [ultimate] Guangxu Cheng <gxcheng@apache.org>
sub   rsa4096 2020-05-18 [E]

# 通过key id发送public key到keyserver
$ gpg --keyserver pgpkeys.mit.edu --send-key <key id>
# 其中，pgpkeys.mit.edu为随意挑选的keyserver，keyserver列表为：https://sks-keyservers.net/status/，为相互之间是自动同步的，选任意一个都可以。
```

### 查看 key 是否创建成功
通过下面的网址，使用邮箱查询上传成功没，大概需要一分钟才能查到
https://pgpkeys.mit.edu/


### 将你的 gpg 公钥加入 KEYS 文件

> 这个步骤需要使用 SVN

DEV 分支的 svn 库是 https://dist.apache.org/repos/dist/dev/inlong

Release 分支的 SVN 库是 https://dist.apache.org/repos/dist/release/inlong

#### 在 dev 分支中添加公钥到 KEYS，用于发布 RC 版本

```shell
➜  ~ svn co https://dist.apache.org/repos/dist/dev/inlong /tmp/inlong-dist-dev
# 这个步骤比较慢，会把所有版本都拷贝下来，如果网断了，用svn cleanup删掉锁，重新执行一下，会断点续传
➜  ~ cd inlong-dist-dev
➜  inlong-dist-dev ~ (gpg --list-sigs YOUR_NAME@apache.org && gpg --export --armor YOUR_NAME@apache.org) >> KEYS # 追加你生成的KEY到文件KEYS中, 追加后最好检查一下是否正确
➜  inlong-dist-dev ~ svn add .	# 如果之前存在KEYS文件，则不需要
➜  inlong-dist-dev ~ svn ci -m "add gpg key for YOUR_NAME" # 接下来会要求输入用户名和密码，就用你的apache的用户名和密码。
```

#### 在 release 分支中添加公钥到 KEYS，用于发布正式版本

```shell
➜  ~ svn co https://dist.apache.org/repos/dist/release/inlong /tmp/inlong-dist-release
➜  ~ cd inlong-dist-release
➜  inlong-dist-release ~ (gpg --list-sigs YOUR_NAME@apache.org && gpg --export --armor YOUR_NAME@apache.org) >> KEYS # 追加你生成的KEY到文件KEYS中, 追加后最好检查一下是否正确
➜  inlong-dist-release ~ svn add .	# 如果之前存在KEYS文件，则不需要
➜  inlong-dist-release ~ svn ci -m "add gpg key for YOUR_NAME" # 接下来会要求输入用户名和密码，就用你的apache的用户名和密码。
```

### 上传 GPG 公钥到 Github 账户

1. 进入 https://github.com/settings/keys ，添加 GPG KEYS。
2. 如果添加后你发现这个密钥后面写了“未经过验证” (unverified)，记得去将 GPG key 中用到的邮箱绑定到你的 github 账户上 (https://github.com/settings/emails)。

## 设置 maven 设置

**如果已经设置过则跳过**

在 maven 的配置文件 ~/.m2/settings.xml 中，则添加下面的 `<server>` 项
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
        <gpg.keyname>你的KEYID</gpg.keyname><!-- Your GPG Keyname here -->
        <!-- Use an agent: Prevents being asked for the password during the build -->
        <gpg.useagent>true</gpg.useagent>
        <gpg.passphrase>你的私钥的密码</gpg.passphrase>
      </properties>
    </profile>
</profiles>
</settings>
```

## 编译打包
### 准备分支
  - 从主干分支拉取新分支作为发布分支，release-${release_version}

  - 更新 `CHANGES.md`

  - 检查代码是否正常，包括编译成功、单元测试全部成功，RAT 检查成功等等

    ```shell
    # build检查
    $ mvn clean package -Dmaven.javadoc.skip=true
    # RAT检查
    $ mvn apache-rat:check
    ```

  - 更改版本号


### 创建 tag
> 创建 tag 前，要确保代码已经检查无误，包括：编译成功、单元测试全部成功，RAT 检查成功等

**创建一个带签名的 tag **
```shell
$ git_tag=${release_version}-${rc_version}
$ git tag -s $git_tag -m "Tagging the ${release_version} first Releae Candidate (Candidates start at zero)"
# 如果遇到错误 gpg: signing failed: secret key not available，先配置下私钥
$ git config user.signingkey ${KEY_ID}
```
### 打包源码

> tag创建成功后，我需要将 tag 源码打包成一个 tar 包

```shell
mkdir /tmp/apache-inlong-${release_version}-${rc_version}
git archive --format=tar.gz --output="/tmp/apache-inlong-${release_version}-${rc_version}/apache-inlong-${release_version}-src.tar.gz" --prefix="apache-inlong-${release_version}/" $git_tag
```

### 打包二进制包
> 编译上一步打包的源码

```shell
cd /tmp/apache-inlong-${release_version}-${rc_version} # 进入源码包目录
tar xzvf apache-inlong-${release_version}-src.tar.gz #解压源码包
cd apache-inlong-${release_version} # 进入源码目录
mvn compile clean install package -DskipTests # 编译
cp ./inlong-distribution/target/apache-inlong-${release_version}-bin.tar.gz /tmp/apache-inlong-${release_version}-${rc_version}/  # 拷贝二进制包拷到源码包目录下，方便下一步对包进行签名
cp ./inlong-distribution/target/apache-inlong-${release_version}-sort-connectors.tar.gz /tmp/apache-inlong-${release_version}-${rc_version}/ # 拷贝connectors二进制包拷到源码包目录下，方便下一步对包进行签名
```

### 对源码包/二进制包进行签名/sha512
```shell
for i in *.tar.gz; do echo $i; gpg --print-md SHA512 $i > $i.sha512 ; done # 计算SHA512
for i in *.tar.gz; do echo $i; gpg --armor --output $i.asc --detach-sig $i ; done # 计算签名
```

### 检查生成的签名/sha512是否正确
具体可以参考：[验证候选版本](how-to-verify.md)
比如验证签名是否正确如下：
```shell
for i in *.tar.gz; do echo $i; gpg --verify $i.asc $i ; done
```
## 准备 Apache 发布
### 发布 jar 包到 Apache Nexus 仓库
```shell
cd /tmp/apache-inlong-${release_version}-${rc_version} # 进入源码包目录
tar xzvf apache-inlong-${release_version}-src.tar.gz #解压源码包
cd apache-inlong-${release_version}
mvn -DskipTests deploy -Papache-release -Dmaven.javadoc.skip=true  # 开始上传
```

### 上传 tag 到 git 仓库

```shell
git push origin ${release_version}-${rc_version}
```

### 上传编译好的文件到 dist
> 这个步骤需要使用 SVN, DEV 分支的 svn 库是 https://dist.apache.org/repos/dist/dev/inlong

### 将 InLong checkout 到本地目录
```shell
# 这个步骤可能会比较慢，会把所有版本都考下来，如果网断了，用 svn cleanup 删掉锁，重新执行一下，会断点续传
svn co https://dist.apache.org/repos/dist/dev/inlong /tmp/inlong-dist-dev
```

### 添加 public key 到 KEYS 文件并提交到 SVN 仓库
```shell
cd /tmp/inlong-dist-dev
mkdir ${release_version}-${rc_version} #创建版本目录
# 将源码包和签名包拷贝到此处
cp /tmp/apache-inlong-${release_version}-${rc_version}/*tar.gz* ${release_version}-${rc_version}/
svn status # 检查svn状态
svn add ${release_version}-${rc_version} # 添加到svn版本
svn status # 检查svn状态
svn commit -m "prepare for ${release_version} ${rc_version}" # 提交至svn远程服务器
```
### 关闭 Apache Staging 仓库
> 请确保所有的 artifact 都是 ok 的
1. **先登录** http://repository.apache.org , 使用 Apache 账号登录
2. 点击左侧的 Staging repositories，
3. 搜索 InLong 关键字，选择你最近上传的仓库
4. 点击上方的 Close 按钮，这个过程会进行一系列检查
5. 检查通过以后, 在下方的 Summary 标签页上出现一个连接，请保存好这个链接，需要放在接下来的投票邮件当中。
链接应该是类似这样的: `https://repository.apache.org/content/repositories/orgapacheinlong-xxxx`

WARN: 请注意点击 Close 可能会出现失败，请检查失败原因并处理

## 进入投票
> InLong 已毕业，只需要进行一次投票。
- InLong社区投票，发邮件至：`dev@inlong.apache.org`

### InLong 社区投票

#### 投票模板

```html
标题：[VOTE] Release Apache InLong ${release_version} ${rc_version}

内容：

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

    To learn more about apache InLong, please see
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

#### 宣布投票结果模板
```html
标题：[RESULT][VOTE] Release Apache InLong ${release_version} ${rc_version}

内容：

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

## 正式发布

### 合并 release-${release_version} 分支的改动到 master 分支
### 将源码和二进制包从 svn 的 dev 目录移动到 release 目录
```shell
svn mv https://dist.apache.org/repos/dist/dev/inlong/${release_version}-${rc_version} https://dist.apache.org/repos/dist/release/inlong/${release_version} -m "Release ${release_version}"
```
### 确认 dev 和 release 下的包是否正确
1. 确认[dev](https://dist.apache.org/repos/dist/dev/inlong/)下的`${release_version}-${rc_version}`已被删除
2. 删除[release](https://dist.apache.org/repos/dist/release/inlong/)目录下上一个版本的发布包，这些包会被自动保存在[这里](https://archive.apache.org/dist/inlong/)
```shell
svn delete https://dist.apache.org/repos/dist/release/inlong/${last_release_version} -m "Delete ${last_release_version}"
```

### 在 Apache Staging 仓库发布版本
> 请确保所有的 artifact 都是 ok 的
1. 登录 http://repository.apache.org , 使用 Apache 账号登录
2. 点击左侧的 Staging repositories，
3. 搜索 InLong 关键字，选择你最近上传的仓库，投票邮件中指定的仓库
4. 点击上方的 `Release` 按钮，这个过程会进行一系列检查

**等仓库同步到其他数据源，一般需要24小时**

### 更新官网链接

### 发ANNOUNCE邮件，主送 `dev@inlong.apache.org`，抄送 `announce@apache.org`
**请确保6.4中的仓库已发布成功，一般是在6.4后的24小时后发布邮件**
**登陆 https://downloads.apache.org/inlong/${release-version}/ 查看是否有安装包**

宣布 release 邮件模板：
```html
标题： [ANNOUNCE] Release Apache InLong ${release_version}
内容：
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

### 官网新增 release 包

1. 进入 https://github.com/apache/inlong ，点击右侧 Releases 下 + 号， 然后点击 Draft a new release
2. release title 为 ${release_version}，上传 https://downloads.apache.org/inlong/${release-version} 下的所有文件到上传栏中再发布