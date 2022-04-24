---
title: Manager 插件
sidebar_position: 4
---
# 总览

本文面向 InLong-Manager 插件开发人员, 尝试尽可能全面地阐述开发一个 Manager 插件所经过的历程，力求消除开发者的困惑，让插件开发变得简单。

## 开发之前

- Inlong 作为一个流式数据同步框架，采用 Group + Stream 的构建方式。
- Inlong Group 可包含多个 Inlong Stream, 每个 Inlong Stream 负责一条独立的数据同步链路。
- Inlong Group 负责任务所需的物理资源的定义及初始化，这些物理资源主要包括数据同步所需的中间件集群及 Sort 函数；该 Group 下所有的 Stream 共享这些资源。
- Inlong Manager 通过 **CreateGroupWorkflowDefinition** 这个工作流创建对应的 Inlong Group 并初始化所有的物理资源, 每个工作流包括数个相互独立的 Service Task。当这个工作流被创建并执行时, 麾下的 Service Task 按照预先定义的顺序依次执行。
- Service Task 采用**监听者模式**——也被称作**发布-订阅模式**构建, 每一个独立的 task 会注册一个或多个 Listener (监听器). Listener 接受工作流上下文信息并执行相关的逻辑。
- 作为开发人员, 你需要开发原生 Listener 以实现自定义的操作逻辑。

## 流程图示

- Inlong Manager 插件机制如下图所示:

  ![](img/Inlong_Plugin.png)

- 如图所示，插件需要被放置在安装路径之下, 当 Inlong Manager 进程启动时，会自动寻找插件编译的 jar 包并加载其中的代码。

![](img/Plugin_Location.png)

- 作为开发人员，当你看到下图所示的日志时，可以确认插件已经加载成功了:

![](img/Plugin_Log.png)

## 参考 Demo

- 为方便开发人员理解. 我们在 Inlong Manager 目录下增加了 **manager-pluin-example** , 开发人员可参考 **EmptyProcessPlugin** 进行自己的插件开发;

```java
public class EmptyProcessPlugin implements ProcessPlugin {

    @Override
    public Map<DataSourceOperateListener, EventSelector> createSourceOperateListeners() {
        return new LinkedHashMap<>();
    }

    @Override
    public Map<QueueOperateListener, EventSelector> createQueueOperateListeners() {
        return new LinkedHashMap<>();
    }

    @Override
    public Map<SortOperateListener, EventSelector> createSortOperateListeners() {
        return ProcessPlugin.super.createSortOperateListeners();
    }

    @Override
    public Map<SinkOperateListener, EventSelector> createSinkOperateListeners() {
        return ProcessPlugin.super.createSinkOperateListeners();
    }

}
```

- **DataSourceOperateListener**,**QueueOperateListener**,**SortOperateListener**,**SinkOperateListener** 是 **TaskEventListener** 的子类, 分别负责源数据端，消息队列，sort 函数，目标数据端的初始化工作。 与 Listener 绑定的**EventSelector**决定该 Listener 是否在运行时被激活。

```java
public interface EventSelector {

    boolean accept(WorkflowContext context);

}
```

- 完成插件的开发工作后, 你需要编写对应的**Yaml**格式的插件定义文件, 将其放置在工程目录 resources/META-INF 下。

```yaml
name: example
description: example for manager plugin
javaVersion: 1.8
pluginClass: org.apache.inlong.manager.plugin.EmptyProcessPlugin
```
- 如果你不确定怎样开发一个可用的 Listener ,请参考`org.apache.inlong.manager.service.workflow.ServiceTaskListenerFactory`中原生 Listener 的逻辑。

## 写在最后

我们在 Inlong Manager 中提供插件化机制，希望可以方便开发人员在 Inlong 现有的框架下定制化开发自己的功能。
诚然，当前的插件机制还很不完善，我们会持续致力于功能的改进，也欢迎您的加入。