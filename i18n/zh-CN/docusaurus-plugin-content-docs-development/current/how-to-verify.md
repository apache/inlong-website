---
title: 如何验证版本
sidebar_position: 7
---

# 验证候选版本

详细的检查列表请参考: [check list](https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist)

## 1. 下载要发布的候选版本到本地环境
```shell
svn co https://dist.apache.org/repos/dist/dev/incubator/inlong/${release_version}-${rc_version}/
```
## 2. 验证上传的版本是否合规
> 开始验证环节，验证包含但不局限于以下内容和形式

### 2.1 查看发布包是否完整
> 上传到dist的包必须包含源码包，二进制包可选

1. 是否包含源码包
2. 是否包含源码包的签名
3. 是否包含源码包的sha512
4. 如果上传了二进制包，则同样检查(2)-(4)所列的内容

### 2.2 检查gpg签名
  - 导入公钥
  ```shell
  curl https://dist.apache.org/repos/dist/dev/incubator/inlong/KEYS > KEYS # 下载KEYS
  gpg --import KEYS # 导入KEYS到本地
  ```
  - 信任公钥
  > 信任此次版本所使用的KEY
  ```shell
    gpg --edit-key xxxxxxxxxx #此次版本所使用的KEY
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
    
    gpg> trust #信任
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
    
    Your decision? 5 #选择5
    Do you really want to set this key to ultimate trust? (y/N) y #选择y
                                                                 
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
  - 使用如下命令检查签名
  ```shell
  for i in *.tar.gz; do echo $i; gpg --verify $i.asc $i ; done
  #或者
  gpg --verify apache-inlong-${release_version}-src.tar.gz.asc apache-inlong-${release_version}-src.tar.gz
  # 如果上传二进制包，则同样需要检查二进制包的签名是否正确
  gpg --verify apache-inlong-server-${release_version}-bin.tar.gz.asc apache-inlong-server-${release_version}-bin.tar.gz
  gpg --verify apache-inlong-client-${release_version}-bin.tar.gz.asc apache-inlong-client-${release_version}-bin.tar.gz
```
  - 检查结果
  > 出现类似以下内容则说明签名正确，关键字：**`Good signature`**
```shell
apache-inlong-0.3.0-incubating-src.tar.gz
gpg: Signature made Sat May 30 11:45:01 2020 CST
gpg:                using RSA key 9B12C2228BDFF4F4CFE849445EF3A66D57EC647A
gpg: Good signature from "Guangxu Cheng <gxcheng@apache.org>" [ultimate]gular2
```

### 2.3 检查sha512哈希
> 本地计算sha512哈希后，验证是否与dist上的一致
```shell
for i in *.tar.gz; do echo $i; gpg --print-md SHA512 $i; done
#或者
gpg --print-md SHA512 apache-inlong-${release_version}-src.tar.gz
# 如果上传二进制包，则同样需要检查二进制包的sha512哈希
gpg --print-md SHA512 apache-inlong-server-${release_version}-bin.tar.gz
gpg --print-md SHA512 apache-inlong-client-${release_version}-bin.tar.gz
# 或者
for i in *.tar.gz.sha512; do echo $i; sha512sum -c $i; done
```

### 2.4. 检查源码包的文件内容

  解压缩`apache-inlong-${release_version}-src.tar.gz`，进行如下检查:

  - DISCLAIMER文件是否存在及内容是否正确
  - LICENSE and NOTICE文件是否存在及内容是否正确
  - 所有文件是否带有ASF License头
  - 源码是否能够正常编译
  - 单测是否能够跑通
  - ....
  
  注意事项：
  在实践过程中，发现比较多的困扰问题影响到我们的版本验证，如下处理供参考：
  - 校验版本前先清理掉本地仓库；
  - 编译方法不限制，但由于项目里的模块做了docker化处理，首次编译建议先”mvn clean package install“，其他推荐的操作还有”mvn compile“，”mvn clean package“；
  - 执行单元测试时，大家要用”mvn clean test“单独运行，确保没有隐藏问题。

### 2.5 检查二进制包(如果上传了二进制包)
  解压缩`apache-inlong-client-${release_version}-src.tar.gz`和`
  apache-inlong-server-${release_version}-src.tar.gz`，进行如下检查:
  - DISCLAIMER文件是否存在及内容是否正确
  - LICENSE and NOTICE文件是否存在及内容是否正确
  - 能否正常部署成功
  - 部署测试环境、验证生产消费能否正常运行
  - 验证你认为可能会出问题的地方
  - ....