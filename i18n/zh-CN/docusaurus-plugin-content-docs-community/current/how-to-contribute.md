---
title: 如何参与贡献
sidebar_position: 1
---

Apache InLong社区欢迎大家为Apache InLong做贡献，您可以通过很多方式为InLong项目成长贡献一份力量：
 - 贡献文档：浏览文档可以加深您对InLong的了解，一旦发现文档写得不清晰或逻辑混乱的地方，可以订正、修改、补充或[联系我们](mailto:dev@inlong.apache.org)
 - 贡献代码：欢迎大家为InLong社区贡献代码
    - 欢迎您认领Open状态的[Issues](https://github.com/apache/inlong/issues)和未完成的特性，提交PR，成为贡献者之一
    - 如果您在使用过程中发现有些功能无法满足您的需求或出现问题，请在Issues中记录
 - 参与邮件讨论：您可以参与dev邮件列表的任何讨论，或者发送任何疑问到dev邮件列表
 - 参与Issue讨论：您可以在任一[Issues](https://github.com/apache/inlong/issues)下发表您的建议
 - Review代码：您可以在[GitHub](https://github.com/apache/inlong/pulls)上看到所有贡献者提交的PR，您可以Review他们的代码并发表您的建议
> 欢迎大家提交Bug反馈、改进、新功能及PR，具体参与贡献流程可参考该指引。

## 主要链接
- 官网：https://inlong.apache.org/
- 代码库：https://github.com/apache/inlong
- 官网代码库：https://github.com/apache/inlong-website
- GitHub Issue任务管理：https://github.com/apache/inlong/issues

## 订阅InLong邮件列表
   详见[如何订阅邮件列表](how-to-subscribe.md)

## 提交Bug反馈/特性/改进/文档

> Apache InLong使用GitHub对InLong相关的任务进行管理，详见：https://github.com/apache/inlong/issues

### 创建issue
详见[GitHub Issue使用指南](https://github.com/apache/inlong/issues/new/choose)

### 如何提交Bug/特性/改进
在您提交特性/改进前，应该注意以下几点：
  - 请先确认该特性/改进是否被其他人已经提交
  - 一个通俗易懂的标题来阐述你提交的Bug/提交特性/改进
  - 如果是Bug则详细描述该bug产生的原因，如果能够复现，请尽量提供完整的重现步骤
  - 如果是特性，那么该特性应该有广泛的适用性，适用于大部分用户，最好能够提供详尽的设计文档
  - 如果是改进，尽可能描述清楚此改进所带来的益处
  - 如果新增模块或者修改pom.xml文件内容，需要进行第三方依赖的LICENSE维护，详情参考[如何维护第三方依赖](how-to-maintain-3rd-party-dependencies.md)

具体步骤：
- 创建issue，描述清楚问题
- 如果你要解决该issue则将issue assign到自己名下，如果你仅仅是提交Bug/特性/改进，并没有时间去贡献代码，则assignne设置为空
- 如果是比较大的特性/改进，尽量先输出设计文档，供其他人review
- 编码，编码完成后，提交代码，参考：[代码提交指南](how-to-commit.md)

### 如何贡献文档
InLong项目的所有文档将在[官网](https://inlong.apache.org/)展示，所有的文档都保存在官网代码库的[docs](https://github.com/apache/inlong-website/tree/master/docs)文件夹下。
贡献的文档包括：
- 编写与InLong相关的文档
- 将中文文档翻译成英文文档
- 将英文文档翻译成中文文档

具体步骤：
- 查看官网，确认你认为需要补充的文档，包含中英文文档
- 创建issue，描述清楚问题, Component请选择：website
- 撰写文档，完成后提交文档，参考：[代码提交指南](how-to-commit.md)

## 如何认领Bug/特性/改进/文档

在InLong的issue列表中，有很多由其他人创建的issue并未被修复，如果你感兴趣的话，可以认领这些issue。认领步骤如下：
  - 在该issue下留言，表达想认领该任务的想法
  - 如果提交者没有意见，则将该issue assign到自己名下并及时更新进度
  - 如果是比较大的特性，尽量先输出设计文档，供其他人review
  - 开发代码并提交代码至github，提交代码流程参考：[代码提交指南](how-to-commit.md)

**如果你是第一次参与InLong项目，可能该issue无法Assign给自己，此时你可以发邮件至：dev@inlong.apache.org或联系InLong的PMC申请加入InLong的contributor列表，加入后即可Assign其他issue给自己**

您的任何贡献都可以帮助Apache InLong项目成长，如果您刚接触InLong，您可以先从简单的任务入手，循序渐进，甚至可以逐渐成长为Apache InLong的Committer；

## 如何报告安全问题
InLong 社区非常关心安全问题，并将积极解决任何安全问题作为重中之重。 我们遵循 Apache 安全指南来处理安全问题，请参阅 Apache 文档关于 [处理安全问题](https://www.apache.org/security/)。 
如果您发现任何安全问题，请将漏洞报告发送至 [security@apache.org](mailto:security@apache.org)，InLong 安全团队将立即评估问题并与报告者一起制定修复计划。 在与安全团队合作之前，请不要将问题透露给任何公共论坛。