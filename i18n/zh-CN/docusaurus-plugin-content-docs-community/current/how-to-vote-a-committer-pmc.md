---
title: 如何投票 Committer 或 PMC 成员
sidebar_position: 5
---

## 发起社区 Private 邮件组投票讨论
任何 InLong 的 PMC 成员都可以发起投票讨论，PMC 在发现社区贡献者任何有价值的贡献并取得候选人本人同意后，可以在 InLong 的 Private 邮件列表发起讨论。
讨论邮件里提议者要把候选人的贡献阐述清楚，并且给出复核对应贡献的地址，便于大家讨论分析。
讨论邮件主送 private@inlong.apache.org 邮箱，讨论将持续至少 72 个小时，项目 PMC 成员会针对提议邮件充分发表自己的看法。
如下是讨论邮件模板：
```shell
[DISCUSS] ${Candidate_Full_Name} as an InLong a ${Committer or PMC Member}
 
I nominate ${Candidate_Full_Name} as an InLong a ${Committer or PMC Member}

Judging from the contributions in recent months, ${Candidate_Full_Name} has submitted many implementations[1],[2] to the project and improved the management module for the project. During the optimization and improvement period of the project, it is hoped that more people will participate in the actual project optimization and improvement, to let the project more perfect and easier to use.
 
So I nominated ${Candidate_Full_Name} as a ${Committer or PMC Member} of the InLong project.
 
1. https://github.com/apache/inlong/issues/created_by/${Candidate_GitHub_ID} 
2. https://github.com/apache/inlong/commits?author=${Candidate_GitHub_ID}
```

:::caution
可以向候选人提前沟通获得其全名（Full_Name），替换模板中的 `${Candidate_Full_Name}`。
:::

## 发起社区 Private 邮件组投票
如果讨论邮件在规定时间内没有收到分歧信息，投票发起者需要在 InLong 的 Private 邮件列表发起 Committer 或 PMC 成员的选举投票。
投票邮件主送 private@inlong.apache.org，至少持续 72 小时，至少要 3 票 +1 通过；如果 0 票或者有 1 票 -1 投票票则整个投票失败；如果发起 -1 投票，投票人需要把打分 -1 的原因说清楚，便于大家理解和知晓。
如下是投票邮件模板：
```shell
[VOTE] ${Candidate_Full_Name} as an InLong a ${Committer or PMC Member}
 
Judging from the contributions in recent months, ${Candidate_Full_Name} has submitted many implementations[1],[2],[3] to the project and improved the management module for the project. During the optimization and improvement period of the project, it is hoped that more people will participate in the actual project optimization and improvement, to let the project more perfect and easier to use.
I think making him a a ${Committer or PMC Member} will be a recognition of his outstanding work for InLong. So, I am happy to call VOTE to accept ${Candidate_Full_Name} as an InLong a ${Committer or PMC Member}.
 
Voting will continue for at least 72 hours or until the required number of votes is reached.

Please vote accordingly:
[ ] +1 approve
[ ] +0 no opinion
[ ] -1 disapprove with the reason  
  
Here are three links to his contributions to InLong:
1. Issues: https://github.com/apache/inlong/pulls?q=${Candidate_GitHub_ID}
2. PRs   : https://github.com/apache/inlong/issues?q=${Candidate_GitHub_ID}
3. Others:  https://xxx.com/xxx/xxx/?q=${Candidate_GitHub_ID}
```

## 投票结果反馈
投票邮件结束后，投票发起者需要在上一封 [VOTE] 邮件里`提醒投票结束`；同时，投票发起者需要发起邮票总结邮件，总结邮件主送 private@inlong.apache.org。
如下是投票总结邮件模板：
```shell
[RESULTS][VOTE] ${Candidate_Full_Name} as an InLong a ${Committer or PMC Member}

Hi everyone,

The vote for "${Candidate_Full_Name} as an InLong a ${Committer or PMC Member}" has PASSED and closed now.

The result is as follows:

3 PMC Member +1 Votes
- ${the name 1 of PMC Member}
- ${the name 2 of PMC Member}
- ${the name 3 of PMC Member}

Vote thread:
${vote_thread_url}

Then I'm going to invite ${Candidate_Full_Name} to join us.

Thanks for everyone's support!   
```

:::caution
如果是未通过，结果是 "The vote for "${Candidate_Full_Name} as an InLong a ${Committer or PMC Member}" has FAILED and closed now."
:::

## 新增 PMC 成员通知邮件
该步骤只针对投票通过的 PMC 成员进行处理，如果选举的是 Committer，该步跳过不执行。
投票发起者需要向 Board 邮件组发送知会邮件，并等待至少 72 小时；邮件主送 board@apache.org，抄送 private@inlong.apache.org。
Board 们会分析合规性，直到没有疑义。如下是新增 PMC 成员通知邮件模板：
```shell
[NOTICE] ${Candidate_Full_Name} for Apache InLong PMC

Hi everyone,

Apache InLong proposes to invite ${Candidate_Full_Name} to join the PMC.

The vote result is available here: ${vote_thread_url}

Thanks!
```

## 发起邀请邮件
投票总结邮件发出后，或者 PMC 成员选举的周知邮件到期后，投票发起人要给候选人发送邀请邮件。
邀请邮件主送被邀请人，抄送 private@inlong.apache.org；被邀请的候选人必须通过指定的邮箱地址回复接受或者拒绝该邀请。
如下是邀请候选人邮件模板：
```shell
[Invitation] Invitation to join Apache InLong as a a ${Committer or PMC Member}

Hi ${Candidate_Full_Name},

In recognition of your contributions to Apache InLong, the InLong PMC
has recently voted to add you as a a ${Committer or PMC Member}. The a ${Committer or PMC Member} role gives
you access to merge patches into Apache InLong and is also a
stepping-stone towards membership in the
Project Management Committee (PMC). We hope that you accept
this invitation and continue to help us make Apache InLong better.

If you'd like to accept, you will need to send an Individual
Contributor License Agreement (ICLA) to secretary@apache.org, CCing
private@inlong.apache.org, and request an Apache account name as
described at http://www.apache.org/dev/new-committers-guide.html if
you don’t already have one, once you get an account name, or if you
have one already, please email it to me.

NOTICE: when you fill out ICLA file, the value of preferred Apache id(s)
        needs to be a valid ID, including:
        1. The ID must not already be in use in https://people.apache.org/committer-index.html;
        2. The characters "-" and "_" are not allowed in id;
        3. The id must consist of lowercase alphanumeric characters only,
           start with an alphabetic character, have a minimum length of 3 characters,
           and have no special characters.

With the expectation of your acceptance, welcome!

The Apache InLong PMC
```

:::note
在签署 ICLA 时，候选人需要在 “notify project:” 栏目写上 Apache InLong 项目名，这样候选人帐号才会被 Apache 正确的加入对应项目人员名单。
:::

## 接受邀请后处理
创建 Apache 帐号并将候选人帐号加入项目。
候选人接受邀请后，如果候选人没有 Apache 邮箱帐号，投票发起人需要协助候选人按照指引创建好 Apache 帐号，确认候选人的 Apache 帐号已加入项目的地址：http://people.apache.org/phonebook.html?project=inlong。

## 向社区发布申明邮件
如上步骤都完成后，投票发起人向 dev@inlong.apache.org 邮件组发通知邮件。
如下是通知邮件模板：
```shell
[ANNOUNCE] New a ${Committer or PMC Member}: ${Candidate_Full_Name}

Hi everyone,

The Project Management Committee(PMC) for Apache InLong has invited ${Candidate_Full_Name} to become a a ${Committer or PMC Member} and we are pleased to announce that he has accepted.

${Candidate_Full_Name} is being active in the InLong community, and we are glad to see his more interactions with the community in the future.

Welcome ${Candidate_Full_Name}, and please enjoy your journey.:)

Thanks!
   
```   
 
到此，整个流程才算走完，候选人才正式的成为项目的 Committer 或者 PMC 成员。

