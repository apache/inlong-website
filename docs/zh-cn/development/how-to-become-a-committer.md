---
title: 如何成为Committer - Apache TubeMQ
---

# 如何成为TubeMQ Committer 和 PPMC

> Apache TubeMQ是完全按照Apache的规则来构建社区的，Apache Committer是ASF（Apache软件基金会）中用来表示提交特定项目的人的术语，
Apache TubeMQ Committer拥有TubeMQ代码库的写权限，可以合并PR，任何人只要为社区做出了足够的贡献并获取到足够的信任就可以成为Apache TubeMQ Committer。

任何人只要对TubeMQ项目做了贡献，那你就是官方承认的TubeMQ项目的Contributor了，从Contributor成长为Committer并没有一个确切的标准，
也没有任何预期的时间表，但是Committer的候选人一般都是长期活跃的贡献者，成为Committer并没有要求必须有巨大的架构改进贡献，
或者多少行的代码贡献，贡献代码、贡献文档、参与邮件列表的讨论、帮助回答问题等等都提升自己影响力的方式。

潜在贡献清单（无特定顺序）：
- 提交自己发现的Bug、特性、改进到issue
- 更新官方文档使项目的文档是最近的、撰写TubeMQ的最佳实践、特性剖析的各种对用户有用的文档
- 执行测试并报告测试结果，性能测试与其他MQ的性能对比测试等
- 发布版本时，积极参与投票
- 参与邮件列表中的讨论，一般会有以[DISCUSS]开头的邮件
- 回答用户或开发人员在邮件列表中的提问
- 审查(Review)其他人的工作（包括代码和非代码）并发表你自己的建议
- 对JIRA上的issue进行审查，维护issue为最新状态，比如：关闭过时的issue、更改issue的错误信息等
- 指导新加入的贡献者，熟悉社区流程
- 发表关于TubeMQ的演讲和博客，并将这些添加到TubeMQ的官方网站
- 有利于TubeMQ社区发展的任何贡献
- ......

更多可以参考：[ASF官方文档](https://community.apache.org/contributors/)

并不是每个人都能完成这个清单上的所有（甚至任何）项目。如果你想用其他方式来做贡献，那就去做吧（并把它们添加到列表中）。
愉快的举止和乐于奉献的精神是您对TubeMQ项目产生积极影响所需要的全部。
邀请您成为Committer是您与社区长期稳定互动的结果，是TubeMQ社区对您的信任和认可。

Committer有义务审查(Review)和合并(merge)其他人提交的PR，版本发布时测试和投票候选版本，参与特性设计方案的讨论以及其他类型的项目贡献。
当你足够活跃且对社区的贡献比较大后，就可以晋升为TubeMQ项目的PPMC成员。



# 成为TubeMQ Committer 或 PPMC 的过程

1. TubeMQ的PPMC成员发现社区贡献者任何有价值的贡献并取得候选人本人同意后，在TubeMQ的private邮件列表发起讨论；
    > [DISCUSS] YYYYY as a TubeMQ XXXXXX

    邮件里要把对方的贡献，可以查看的出处说清楚，便于大家讨论分析；讨论邮件将持续至少72个小时，项目组成员，包括mentor们会针对提议邮件充分发表自己的看法；

    
2. 不管有没有分歧，在讨论邮件过后，投票发起者需要在在TubeMQ的private邮件列表发起Committer或PPMC的选举投票；
    > [VOTE] YYYYY as a TubeMQ XXXXXX

     投票邮件至少持续72小时，至少要3票+1通过，如果0票或者有1票-1票则投票失败；如果-1，需要把问题说清楚，便于大家理解和知晓


3. 投票邮件结束后，由投票发起者在投票线上总结并提醒投票结束，并发投票总结邮件；
   > [RESULTS][VOTE] YYYYY as a TubeMQ XXXXXX


4. 投票总结邮件发出后，投票发起者要给候选人发起邀请邮件，该邀请邮件需要候选人通过指定的邮箱回复接受或者拒绝；
    > [Invitation] Invitation to join Apache TubeMQ as a XXXXXX

    邮件主送邀请人，抄送private@tubemq.apache.org


5. 候选人接受邀请后，如果候选人没有apache邮箱帐号，投票发起者需要协助候选人按照指引创建apache帐号；

   
6. 如果选举的是PPMC，在候选人的Apache帐号创建完成后，投票发起者还需要向IPMC的private邮件组发送知会邮件，并等待至少72小时;
   > [NOTICE] XXXXXX for TubeMQ PPMC

   邮件主送private@incubator.apache.org，抄送private@tubemq.apache.org，IPMC们会分析合规性，直到没有疑义。

 
7. 如果以上内容都以完成，投票发起者还需要做如下2件事情：
   7.1 	向dev@tubemq.apache.org邮件组发通知邮件：
      >        [ANNOUNCE] New XXXXXX: YYYYY
        
   7.2  向项目负责人申请添加项目组成员，开通jira及apache项目的权限帐号。     


到此，整个流程才算走完，候选人才正式的成为项目的Committer或者PPMC。
