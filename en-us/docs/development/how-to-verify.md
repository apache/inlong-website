# 验证候选版本

<font color="#dd0000" size="4">TODO: This page needs to be translated into English. If you are interested, just do it.</font>

详细的检查列表请参考: [check list](https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist)

## 1. 下载要发布的候选版本到本地环境
```shell
svn co https://dist.apache.org/repos/dist/dev/incubator/tubemq/${release_version}-${rc_version}/
```
## 2. 验证上传的版本是否合规
> 开始验证环节，验证包含但不局限于以下内容和形式

### 2.1 查看发布包是否完整
> 上传到dist的包必须包含源码包，二进制包可选

1. 是否包含源码包
2. 是否包含源码包的签名
3. 是否包含源码包的sha512
4. 是否包含源码包的md5
5. 如果上传了二进制包，则同样检查(2)-(4)所列的内容

### 2.2 检查gpg签名
  - 导入公钥
  ```shell
  curl https://dist.apache.org/repos/dist/dev/tubemq/KEYS >> KEYS # 下载KEYS
  gpg --import KEYS # 导入KEYS到本地
  ```
  - 使用如下命令检查签名
  ```shell
  for i in *.tar.gz; do echo $i; gpg --verify $i.asc $i ; done
  #或者
  gpg --verify apache-tubemq-${release_version}-src.tar.gz.asc apache-tubemq-${release_version}-src.tar.gz
  # 如果上传二进制包，则同样需要检查二进制包的签名是否正确
  gpg --verify apache-tubemq-server-${release_version}-bin.tar.gz.asc apache-tubemq-server-${release_version}-bin.tar.gz
  gpg --verify apache-tubemq-client-${release_version}-bin.tar.gz.asc apache-tubemq-client-${release_version}-bin.tar.gz
```
  - 检查结果
出现类似以下内容则说明签名正确，关键字：`Good signature`
```shell
apache-tubemq-0.3.0-incubating-src.tar.gz
gpg: Signature made Sat May 30 11:45:01 2020 CST
gpg:                using RSA key 9B12C2228BDFF4F4CFE849445EF3A66D57EC647A
gpg: Good signature from "Guangxu Cheng <gxcheng@apache.org>" [ultimate]gular2
```

### 2.3 检查sha512哈希
> 本地计算sha512哈希后，验证是否与dist上的一致
```shell
for i in *.tar.gz; do echo $i; gpg --print-md SHA512 $i; done
#或者
gpg --print-md SHA512 apache-tubemq-${release_version}-src.tar.gz
# 如果上传二进制包，则同样需要检查二进制包的sha512哈希
gpg --print-md SHA512 apache-tubemq-server-${release_version}-bin.tar.gz
gpg --print-md SHA512 apache-tubemq-client-${release_version}-bin.tar.gz
# 或者
for i in *.tar.gz.sha512; do echo $i; sha512sum -c $i; done
```

#### 2.4 检查MD5
> 本地计算MD5后，验证是否与dist上的一致
```shell
for i in *.tar.gz; do echo $i; gpg --print-md MD5 $i; done
#或者
gpg --print-md MD5 apache-tubemq-${release_version}-src.tar.gz
# 如果上传二进制包，则同样需要检查二进制包的MD5
gpg --print-md MD5 apache-tubemq-server-${release_version}-bin.tar.gz
gpg --print-md MD5 apache-tubemq-client-${release_version}-bin.tar.gz
```

### 2.5. 检查源码包的文件内容

  解压缩`apache-tubemq-${release_version}-src.tar.gz`，进行如下检查:

  - DISCLAIMER文件是否存在及内容是否正确
  - LICENSE and NOTICE文件是否存在及内容是否正确
  - 所有文件是否带有ASF License头
  - 源码是否能够正常编译
  - 单测是否能够跑通
  - ....

### 2.6 检查二进制包(如果上传了二进制包)
  解压缩`apache-tubemq-client-${release_version}-src.tar.gz`和`
  apache-tubemq-server-${release_version}-src.tar.gz`，进行如下检查:
  - DISCLAIMER文件是否存在及内容是否正确
  - LICENSE and NOTICE文件是否存在及内容是否正确
  - 能否正常部署成功
  - 部署测试环境、验证生产消费能否正常运行
  - 验证你认为可能会出问题的地方
  - ....
