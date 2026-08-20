---
title: Manager 自定义插件
sidebar_position: 2
---
## 总览

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

![](img/inlong_plugin.png)

如图所示，插件主要服务于 InLong 中的工作流，工作流中的 task 对应一个 listener 队列，例如 Init Mq 对应 QueueOperateListener、Init Sink 对应 SinkOperateListener、Init Sort 对应 SortOperateListener、Init Source 对应 SourceOperateListener。

当开发人员需要为工作流增加一个 task 时，就可以通过插件的方式添加 Listener，并将 Listener 注册到 task 中。

下面以为 Init Sort 这个 Task 添加一个 TestListener 流程为例，主要添加三个文件，TestListener、TestProcessPlugin、plugin.yaml。

![](img/plugin.png)

```java
@Slf4j
public class TestListener implements SortOperateListener {

    @Override
    public TaskEvent event() {
        return TaskEvent.COMPLETE;
    }

    @Override
    public boolean accept(WorkflowContext workflowContext) {
        return true;
    }

    @Override
    public ListenerResult listen(WorkflowContext context) throws Exception {
        log.info("Success execute test stream listener");
        return ListenerResult.success();
    }
}
```
TestListener 实现了 SortOperateListener，并重写了 listen 方法，当执行到 TestListener 时，将会打印一行日志。

```java
@Slf4j
public class TestProcessPlugin implements ProcessPlugin {

    @Override
    public List<SourceOperateListener> createSourceOperateListeners() {
        return new LinkedList<>();
    }

    @Override
    public List<SortOperateListener> createSortOperateListeners() {
        List<SortOperateListener> listeners = new LinkedList<>();
        listeners.add(new TestListener());
        return listeners;
    }

    @Override
    public Map<DataSourceOperateListener, EventSelector> createSourceOperateListeners() {
        return new LinkedHashMap<>();
    }

    @Override
    public Map<QueueOperateListener, EventSelector> createQueueOperateListeners() {
        return new LinkedHashMap<>();
    }

    @Override
    public Map<SinkOperateListener, EventSelector> createSinkOperateListeners() {
        return new LinkedHashMap<>();
    }

}
```
TestProcessPlugin 实现了 ProcessPlugin，并重写了 createSortOperateListeners 方法，当插件被加载时，Manager 就会将 TestListener 加载到 SortOperateListener 的队列中，当工作流执行到 Init Sort 时，TestListener 就会被执行。

- 完成插件的开发工作后, 你需要编写对应的**Yaml**格式的插件定义文件, 将其放置在工程目录 resources/META-INF 下。

```yaml
name: test
description: example for manager plugin
javaVersion: 1.8
pluginClass: org.apache.inlong.manager.plugin.TestProcessPlugin
```

- 如图所示，当插件开放完成后，插件需要被放置在安装路径之下, 当 Inlong Manager 进程启动时，会自动寻找插件编译的 jar 包并加载其中的代码。

![](img/plugin_location.png)

- 作为开发人员，当你看到下图所示的日志时，可以确认插件已经加载成功了:

![](img/plugin_log.png)

- 这样当执行工作流后就会打印以下日志，此时表示插件已经成功执行。

![](img/workflow_plugin.png)

- 如果你仍然不确定怎样开发一个可用的 Listener ,请参考`org.apache.inlong.manager.service.workflow.listener.GroupTaskListenerFactory`中原生 Listener 的逻辑。

## 写在最后

我们在 Inlong Manager 中提供插件化机制，希望可以方便开发人员在 Inlong 现有的框架下定制化开发自己的功能。
诚然，当前的插件机制还很不完善，我们会持续致力于功能的改进，也欢迎您的加入。