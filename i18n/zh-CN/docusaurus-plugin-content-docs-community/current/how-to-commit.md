---
title: 如何提交代码
sidebar_position: 2
---

Apache InLong 使用 Github 的 Pull Request (PR) 来接收贡献的代码，本文将介绍提交代码的详细流程。
- InLong 代码库：https://github.com/apache/inlong
- InLong 官网库：https://github.com/apache/inlong-website

## 确定要处理的 Issue 
可以是[已经存在的 Issue](https://github.com/apache/inlong/issues)，或者是你[新创建的 issue](https://github.com/apache/inlong/issues/new/choose)，并记录 `Issue ID`。

## Fork 仓库
进入 [apache/inlong](https://github.com/apache/inlong) 的 Github 页面 ，点击右上角按钮 `Fork`。

## 配置 Git 和提交修改
### 将代码克隆到本地
```shell
git clone https://github.com/<your_github_name>/inlong.git
```

### 将 apache/inlong 添加为本地仓库的远程分支 upstream
```shell
cd  inlong
git remote add upstream https://github.com/apache/inlong.git
```

### 检查远程仓库设置
```shell
git remote -v
origin    https://github.com/<your_github_name>/inlong.git (fetch)
origin    https://github.com/<your_github_name>/inlong.git(push)
upstream  https://github.com/apache/inlong.git (fetch)
upstream  https://github.com/apache/inlong.git (push)
```
:::note
origin 为自己 fork 的仓库，upstream 为官方的仓库
:::

### 获取 upstream 仓库代码，并更新本地 master 分支代码为最新
```shell
git fetch upstream
git pull upstream master
```

### 新建分支
一般以`INLONG-[Issue ID]`作为分支名，比如：INLONG-XYZ
```shell
git checkout -b INLONG-XYZ
```
:::caution
如果是处理新的 issue，需确保分支`INLONG-XYZ`是基于官方 master 分支的最新代码
:::

### 修改代码并格式化
修改完代码，可以通过以下命令进行格式化。
```shell
mvn spotless:check
mvn spotless:apply
```

### 提交代码到远程分支
commit 信息的格式必须与Issue标题保持一致且以`[INLONG-XYZ][Component]`开头。
```shell
git commit -a -m "[INLONG-XYZ][Component] commit msg"
git push origin INLONG-XYZ
```
:::note
`Component` 使用 InLong 组件名称进行替换，比如Manager、Sort、DataProxy...
:::

## 创建 PR
### 打开自己的 GitHub 仓库页面
```shell
https://github.com/<your_github_name>/inlong
```

### 切换分支
切换到提交的分支 `INLONG-XYZ`

### 创建新的 pull request(即 PR)
点击 `New pull request`或者`Compare & pull request`

### 点击`Create pull request`按钮进行创建 PR
需要注意以下几点：
- PR 的标题必须以`[INLONG-XYZ][Component]`开头，最好与commit信息保持一致
- 为了加速 Review 速度，建议按提交模板，补充必要的信息，比如修改动机、实现细节等

:::note
进入 [apache/inlong](https://github.com/apache/inlong) 首页，会出现 Pull Request 的弹窗，也可以直接点击进行创建。
:::

## Review 代码
:::note
一般该PR必须有 2 位以上的社区 PMC/Committer +1后，才可能正式合入官方代码库。
:::

最后，恭喜您已经成为了 Apache InLong 的官方贡献者了！
