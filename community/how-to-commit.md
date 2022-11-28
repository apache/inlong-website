---
title: How to Commit
sidebar_position: 2
---

Apache InLong uses GitHub's Pull Request (PR) to receive contributed code. This document will introduce the process of code commit in detail.
- InLong code base：https://github.com/apache/inlong
- InLong website base：https://github.com/apache/inlong-website

## Confirm the issue to fix
Can be an [existing issue](https://github.com/apache/inlong/issues) or your [newly created issue](https://github.com/apache/inlong/issues/new/choose), and record the `Issue ID`.

## Fork the repository
Open [apache/inlong](https://github.com/apache/inlong) 's GitHub page, clicking on the `fork` button at the top right to fork.

## Configure git and commit changes
### Clone your fork to your local machine
```shell
git clone https://github.com/<your_github_name>/inlong.git
```

### Add apache/inlong to local repository's remote branch upstream
```shell
cd  inlong
git remote add upstream https://github.com/apache/inlong.git
```

### Check remote repository settings
```shell
git remote -v
origin    https://github.com/<your_github_name>/inlong.git (fetch)
origin    https://github.com/<your_github_name>/inlong.git(push)
upstream  https://github.com/apache/inlong.git (fetch)
upstream  https://github.com/apache/inlong.git (push)
```
:::note
origin is its own fork repository, upstream is the official repository
:::

### Fetch code from upstream and update the local master branch code to the latest
```shell
git fetch upstream
git pull upstream master
```

### Create a new branch
Generally, issue id is used as the branch name, such as: INLONG-XYZ.
```shell
git checkout -b  INLONG-XYZ
```
:::caution
Make sure that the branch `INLONG-XYZ` is checkout from the latest code of the official master branch.
:::

### Modify the code and format
After modifying the code, you can format it with the following command.
```shell
mvn spotless:check
mvn spotless:apply
```

### Commit code to remote branch
The format of the commit message must be consistent with the issue title and start with `[INLONG-XYZ][Component]`.
```shell
git commit -a -m "[INLONG-XYZ][Component] commit msg"
git push origin INLONG-XYZ
```
:::note
`Component` should be replaced by the InLong component name, like Manager, Sort, DataProxy...
:::

## Open a Pull Request
### Open your GitHub repository page
```shell
https://github.com/<your_github_name>/inlong
```

### Switch branch
Switch to committed branch `INLONG-XYZ`

### New pull request(PR)
Click `New pull request` or `Compare & pull request`

### Click `Create pull request` button to open a PR
Considerations when opening a pull request:
- he title of PR must start with issue id, which is better consistent with the commit message
- To speed up the review, it is recommended to supplement the necessary information according to the submission template, such as modification motivation, implementation details, etc.

:::note
Enter the [apache/inlong](https://github.com/apache/inlong) home page, and a pop-up window for Pull Request will appear, or you can directly click to create it.
:::

## Review Code
:::note
Generally, the PR can be formally merged into the code base only after more than 2 PMC/Committer reply + 1.
:::

Finally, congratulations on becoming an official contributor to InLong!
