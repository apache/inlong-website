---
title: HTTP API介绍
---

HTTP API是Master或者Broker对外功能暴露的接口，管控台的各项操作都是基于这些API进行；如果有最新的功能，或者管控台没有涵盖的功能，业务都可以直接通过调用HTTP API接口完成。

该部分接口一共有4个部分：

- Master元数据配置相关的操作接口，接口数量 24个
- Master消费权限操作接口，接口数量 33个 
- Master订阅关系接口，接口数量 2个
- Broker相关操作接口定义，接口数量 6个
![](img/api_interface/http-api.png)


由于接口众多且参数繁杂，md格式不能比较好的表达，因而以excel附件形式提供给到大家：
<a target="_blank" href="/appendixfiles/http_access_api_definition_cn.xls">TubeMQ HTTP API</a>

---
<a href="#top">Back to top</a>