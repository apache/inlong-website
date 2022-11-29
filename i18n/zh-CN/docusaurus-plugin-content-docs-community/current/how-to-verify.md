---
title: 如何验证发布版本
sidebar_position: 7
---

## 下载候选版本
`release_version` 为即将发布的版本号，比如 1.4.0；`rc_version` 为 Releae Candidate，比如 RC0，RC1...;KEY_ID 是你创建的 GPG Key ID.
```shell
svn co https://dist.apache.org/repos/dist/dev/inlong/${release_version}-${rc_version}/
```

## 验证版本
### 查看发布包是否完整
- 是否包含源码包
- 是否包含源码包的签名和 sha512
- 如果上传了二进制包，则同样检查的签名和 sha512

### 检查 GPG 签名
- 导入公钥
```shell
# 下载KEYS
curl https://downloads.apache.org/inlong/KEYS > KEYS
# 导入KEYS到本地
gpg --import KEYS
```

- 信任公钥
替换 `THE_KEY_USED` 为此次版本所使用的 KEY。
```shell
# 执行后依次输入 trust -> 5(I trust ultimately) -> Y(Yes) -> quit
gpg --edit-key THE_KEY_USED
```

- 使用如下命令检查签名
```shell
cd ${release_version}-${rc_version}
for i in *.tar.gz; do echo $i; gpg --verify $i.asc $i ; done
```

:::note
如果出现 **`Good signature`** 关键字，则说明签名正确。
:::

### 检查源码包的文件内容
解压缩 `apache-inlong-${release_version}-src.tar.gz`，进行如下检查:
- LICENSE and NOTICE 文件是否存在及内容是否正确
- 所有文件是否带有 ASF License 头
- 源码是否能够正常编译
- 单测是否能够跑通

:::note
可以通过 `mvn clean package install` 检查编译和单测，如果编译失败，先清理掉本地仓库。
:::

### 检查二进制包
解压缩 `apache-inlong-${release_version}-bin.tar.gz` 和 `apache-inlong-${release_version}-sort-connectors.tar.gz`，进行如下检查:
- LICENSE and NOTICE 文件是否存在及内容是否正确
- 能否正常部署成功
- 部署测试环境、验证生产消费能否正常运行
- 验证你认为可能会出问题的地方

## 回复邮件
如果验证通过，可参考以下模板进行邮件回复。
```shell
+1 from me, and I checked the following items:
- [X] Download links are valid.
- [X] Checksums and PGP signatures are valid.
- [X] Source code artifacts have correct names matching the current release.
- [X] LICENSE and NOTICE files are correct for the repository.
- [X] All files have license headers if necessary.
- [X] No compiled archives bundled in the source archive.
- [X] Building is OK.
```