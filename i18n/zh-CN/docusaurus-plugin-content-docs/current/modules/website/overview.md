---
title: 概览
sidebar_position: 1
---

WebSite 是 [Apache InLong](https://github.com/apache/incubator-inlong)的管控端。

## 开发指引

确认 `nodejs >= 12.0` 已经安装。

在新创建的项目中，您可以运行一些内置命令：

如果没有安装 `node_modules`，你应该首先运行 `npm install` 或 `yarn install`。

使用 `npm run dev` 或 `yarn dev` 在开发模式下运行应用程序。

如果服务器运行成功，浏览器将打开 [http://localhost:8080](http://localhost:8080) 在浏览器中查看。

如果您进行编辑，页面将重新加载。
您还将在控制台中看到任何 lint 错误。

web服务器的启动依赖于后端服务 `manger api` 接口。

您应该先启动后端服务器，然后将 `/inlong-website/src/setupProxy.js` 中的变量`target` 设置为api服务的地址。

### 测试

运行 `npm test` 或 `yarn test`

在交互式观察模式下启动测试运行器。
有关更多信息，请参阅有关 [运行测试](https://create-react-app.dev/docs/running-tests/) 的部分。

### 构建

首先保证项目已运行过 `npm install` 或 `yarn install` 安装了 `node_modules`。

运行 `npm run build` 或 `yarn build`。

将用于生产的应用程序构建到构建文件夹。
在构建后的生产模式下可以获得较好的页面性能。

构建后代码被压缩，文件名包括哈希值。
您的应用程序已准备好部署！

有关详细信息，请参阅有关 [deployment](https://create-react-app.dev/docs/deployment/) 的部分。

