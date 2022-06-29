---
title: 成为 InLong Committer 或 PMC 的投票过程
sidebar_position: 5
---

## 发起社区 Private 邮件组投票讨论
   任何 InLong 的 PMC 成员都可以发起投票讨论，PMC 在发现社区贡献者任何有价值的贡献并取得候选人本人同意后，可以在 InLong 的 private 邮件列表发起讨论。
   讨论邮件里提议者要把候选人的贡献说清楚，并且给出复核对应贡献的地址，便于大家讨论分析。
   讨论邮件主送 private@inlong.apache.org 邮箱，讨论将持续至少72个小时，项目 PMC 成员会针对提议邮件充分发表自己的看法。
   如下是讨论邮件样例，其中 YYYYY 为候选人的 github ID，XXXXXX 为希望候选人成为的角色，包括 Committer，PMC，候选人也可以直接被提名为PMC：
   ```shell
    [DISCUSS] YYYYY as an InLong XXXXXX
     
    I nominate YYYYY as an InLong XXXXXX
    
    Judging from the contributions in recent months, YYYYY has submitted many implementations[1],[2] to the project and improved the management module for the project. During the optimization and improvement period of the project, it is hoped that more people will participate in the actual project optimization and improvement, to let the project more perfect and easier to use.
     
    So I nominated YYYYY as XXXXXX of the InLong project.
     
    1. https://github.com/apache/inlong/issues/created_by/YYYYY 
    2. https://github.com/apache/inlong/commits?author=YYYYY 
   ```
    
## 发起社区 Private 邮件组投票
   如果讨论邮件在规定时间内没有收到分歧信息，投票发起者需要在 InLong 的 private 邮件列表发起 Committer 或 PMC 的选举投票。
   投票邮件主送 private@inlong.apache.org，至少持续72小时，至少要3票+1通过；如果0票或者有1票-1投票票则整个投票失败；如果发起-1投票，投票人需要把打分-1的原因说清楚，便于大家理解和知晓。
   如下是投票邮件样例，其中 YYYYY 为候选人的 github ID，XXXXXX 为希望候选人成为的角色，包括 Committer，PMC，候选人也可以直接被提名为PMC：
   ```shell
    [VOTE] YYYYY as an InLong XXXXXX
     
    Judging from the contributions in recent months, YYYYY has submitted many implementations[1],[2],[3] to the project and improved the management module for the project. During the optimization and improvement period of the project, it is hoped that more people will participate in the actual project optimization and improvement, to let the project more perfect and easier to use.
    I think making him a XXXXXX will be a recognition of his outstanding work for InLong. So, I am happy to call VOTE to accept YYYYY as an InLong XXXXXX.
     
    Voting will continue for at least 72 hours or until the required number of votes is reached.
    
    Please vote accordingly:
    [ ] +1 approve
    [ ] +0 no opinion
    [ ] -1 disapprove with the reason  
      
    Here are three links to his contributions to InLong:
    1. Issues: https://github.com/apache/inlong/pulls?q=YYYYY
    2. PRs   : https://github.com/apache/inlong/issues?q=YYYYY
    3. Others:  https://xxx.com/xxx/xxx/?q=YYYYY
   ```

## 投票结果反馈
投票邮件结束后，投票发起者需要在上一封 [VOTE] 邮件里提醒投票结束；同时，投票发起者需要发起邮票总结邮件，总结邮件主送 private@inlong.apache.org。
如下是投票总结邮件样例：
   ```shell
   [RESULTS][VOTE] YYYYY as an InLong XXXXXX
   
   Hi everyone,

   The vote for "YYYYY as an InLong XXXXXX" has PASSED and closed now.

   The result is as follows:

   3 PMC  +1 Votes
   - aaa
   - bbb
   - ccc

   Vote thread:
   https://lists.apache.org/thread/aaaaaxxxx

   Then I'm going to invite YYYYY to join us.

   Thanks for everyone's support!   
   ```
   备注：如果是未通过，结果是 "The vote for "YYYYY as an InLong XXXXXX" has FAILED and closed now."

## 新增 PMC 通知邮件
该步骤只针对投票通过的 PMC 进行处理，如果选举的是 Committer，该步跳过不执行。
投票发起者需要向 Board 邮件组发送知会邮件，并等待至少72小时；邮件主送 board@apache.org，抄送 private@inlong.apache.org。
Board 们会分析合规性，直到没有疑义。如下是新增 PMC 通知邮件样例：
   ```shell
   [NOTICE] YYYYY for Apache InLong PMC
   
   Hi everyone,

   Apache InLong proposes to invite YYYYY to join the PMC.

   The vote result is available here: https://lists.apache.org/...
 
   Thanks!
   ```

## 发起邀请邮件
投票总结邮件发出后，或者 PMC 选举的周知邮件到期后，投票发起人要给候选人发送邀请邮件。
邀请邮件主送被邀请人，抄送 private@inlong.apache.org；被邀请的候选人必须通过指定的邮箱地址回复接受或者拒绝该邀请。
如下是邀请候选人邮件样例：
   ```shell
   [Invitation] Invitation to join Apache InLong as a XXXXXX
   
   Hi YYYYY,

   In recognition of your contributions to Apache InLong, the InLong PMC
   has recently voted to add you as a XXXXXX. The XXXXXX role gives
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

## 接受邀请后处理
创建 Apache 帐号并将候选人帐号加入项目。
候选人接受邀请后，如果候选人没有 apache 邮箱帐号，投票发起人需要协助候选人按照指引创建好 apache 帐号。
在签署 ICLA 时，候选人需要在 “notify project:” 栏目写上 Apache InLong 项目名，这样候选人帐号才会被 Apache 正确的加入对应项目人员名单，确认候选人的 Apache 帐号已加入项目的地址：http://people.apache.org/phonebook.html?project=inlong。

## 向社区发布申明邮件
如上步骤都完成后，投票发起人向 dev@inlong.apache.org 邮件组发通知邮件。
如下是通知邮件样例：
   ```shell
   [ANNOUNCE] New XXXXXX: YYYYY
   
   Hi everyone,
   
   The Project Management Committee(PMC) for Apache InLong has invited YYYYY to become a XXXXXX and we are pleased to announce that he has accepted.

   YYYYY is being active in the InLong community, and we are glad to see his more interactions with the community in the future.
   
   Welcome YYYYY, and please enjoy your journey.:)

   Thanks!
      
   ```   
 
到此，整个流程才算走完，候选人才正式的成为项目的 Committer 或者 PMC。

