---
title: 成为InLong Committer 或 PPMC 的投票过程
sidebar_position: 5
---

## 发起社区Private邮件组投票讨论
   任何InLong的PPMC成员都可以发起投票讨论，在PPMC发现社区贡献者任何有价值的贡献并取得候选人本人同意后，可以在InLong的private邮件列表发起讨论。讨论邮件里提议者要把候选人的贡献说清楚，并且给出复核对应贡献的地址，便于大家讨论分析。讨论邮件主送private@inlong.apache.org邮箱，讨论将持续至少72个小时，项目组成员，包括mentor们会针对提议邮件充分发表自己的看法。如下是讨论邮件样例：
   ```shell
    [DISCUSS] YYYYY as an InLong XXXXXX
     
    I nominate YYYYY as an InLong XXXXXX
    
    Judging from the contributions in recent months, YYYYY has submitted many implementations[1],[2] to the project and improved the management module for the project. During the optimization and improvement period of the project, it is hoped that more people will participate in the actual project optimization and improvement, to let the project more perfect and easier to use.
     
    So I nominated YYYYY as XXXXXX of the InLong project.
     
    1. https://github.com/apache/incubator-inlong/issues/created_by/YYYYY 
    2. https://github.com/apache/incubator-inlong/commits?author=YYYYY 
   ```
    
## 发起社区Private邮件组投票
   如果讨论邮件在规定时间内没有收到分歧信息，投票发起者需要在InLong的private邮件列表发起Committer或PPMC的选举投票。投票邮件主送private@inlong.apache.org，至少持续72小时，至少要3票+1通过；如果0票或者有1票-1投票票则整个投票失败；如果发起-1投票，投票人需要把打分-1的原因说清楚，便于大家理解和知晓。如下是投票邮件样例：
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
    1. Issues: https://github.com/apache/incubator-inlong/pulls?q=YYYYY
    2. PRs   : https://github.com/apache/incubator-inlong/issues?q=YYYYY
    3. Others:  https://xxx.com/xxx/xxx/?q=YYYYY
   ```

## 投票结果反馈
投票邮件结束后，投票发起者需要在第二封[VOTE]邮件里提醒投票结束；同时，投票发起者需要发起邮票总结邮件，总结邮件主送private@inlong.apache.org。如下是投票总结邮件样例：
   ```shell
   [RESULTS][VOTE] YYYYY as an InLong XXXXXX
   
   Hi everyone,

   The vote for "YYYYY as an InLong XXXXXX" has PASSED and closed now.

   The result is as follows:

   3 PPMC  +1 Votes
   - aaa
   - bbb
   - ccc

   Vote thread:
   https://lists.apache.org/thread/aaaaaxxxx

   Then I'm going to invite YYYYY to join us.

   Thanks for everyone's support!   
   ```
   备注：如果是未通过，结果是 "The vote for "YYYYY as an InLong XXXXXX" has FAILED and closed now."

## 新增PPMC通知邮件
该步骤只针对投票通过的PPMC进行处理，如果选举的是Committer，该步跳过不执行。投票发起者需要向IPMC的private邮件组发送知会邮件，并等待至少72小时；邮件主送private@incubator.apache.org，抄送private@inlong.apache.org；IPMC们会分析合规性，直到没有疑义。如下是新增PPMC通知邮件样例：
   ```shell
   [NOTICE] YYYYY for InLong PPMC
   
   Hi everyone,

   YYYYY has been voted as a new member of the InLong PPMC. 

   The vote thread is at:
   https://lists.apache.org/thread/aaaaaxxxx
 
   Thanks!
   ```

## 发起邀请邮件
投票总结邮件发出后，投票发起人要给候选人发送邀请邮件。邀请邮件主送被邀请人，抄送private@inlong.apache.org；被邀请的候选人必须通过指定的邮箱地址回复接受或者拒绝该邀请。如下是邀请候选人邮件样例：
   ```shell
   [Invitation] Invitation to join Apache InLong as a XXXXXX
   
   Hi YYYYY,

   In recognition of your contributions to Apache InLong, the InLong PPMC
   has recently voted to add you as a XXXXXX. The XXXXXX role gives
   you access to merge patches into Apache InLong and is also a
   stepping-stone towards membership in the
   Podling Project Management Committee (PPMC). We hope that you accept
   this invitation and continue to help us make Apache InLong better.

   If you'd like to accept, you will need to send an Individual
   Contributor License Agreement (ICLA) to secretary@apache.org, CCing
   private@inlong.apache.org, and request an Apache account name as
   described at http://www.apache.org/dev/new-committers-guide.html if
   you don’t already have one, once you get an account name, or if you
   have one already, please email it to me.

   With the expectation of your acceptance, welcome!

   The Apache InLong PPMC
   ```

## 接受邀请后处理
创建Apache帐号并将候选人帐号加入项目。候选人接受邀请后，如果候选人没有apache邮箱帐号，投票发起人需要协助候选人按照指引创建好apache帐号。在签署ICLA时，候选人需要在“notify project:”栏目写上Apache InLong项目名，这样候选人帐号才会被Apache加入对应项目人员名单，如果候选人没有加入项目，投票发起人需要向Mentors申请添加项目组成员，开通apache项目的权限帐号，确认候选人的Apache帐号已加入项目的地址：http://people.apache.org/phonebook.html?podling=inlong 。

## 向社区发布申明邮件
如上步骤都完成后，投票发起人向dev@inlong.apache.org邮件组发通知邮件。如下是通知邮件样例：
   ```shell
   [ANNOUNCE] New XXXXXX: YYYYY
   
   Hi everyone,
   
   The Project Management Committee(PMC) for Apache InLong has invited YYYYY to become a XXXXXX and we are pleased to announce that he has accepted.

   YYYYY is being active in the InLong community, and we are glad to see his more interactions with the community in the future.
   
   Welcome YYYYY, and please enjoy your journey.:)

   Thanks!
      
   ```   
 
到此，整个流程才算走完，候选人才正式的成为项目的Committer或者PPMC。

