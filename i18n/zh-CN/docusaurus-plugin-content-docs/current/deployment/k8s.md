---
title: Kubernetes 部署
sidebar_position: 3
---

## 准备条件

- Kubernetes 1.10+
- Helm 3.0+
- [InLong Helm Chart](https://github.com/apache/incubator-inlong/tree/master/docker/kubernetes)
- A dynamic provisioner for the PersistentVolumes(`production environment`)

## 使用

### 安装

如果不存在名为 `inlong` 的命名空间，则可通过以下命令创建：

```shell
kubectl create namespace inlong
```

在 [docker/kubernetes](https://github.com/apache/incubator-inlong/tree/master/docker/kubernetes) 目录下安装 chart：

```shell
helm upgrade inlong --install -n inlong ./
```

### 进入 InLong Dashboard

如果 [values.yaml](https://github.com/apache/incubator-inlong/blob/master/docker/kubernetes/values.yaml) 中的 `ingress.enabled` 字段值是 `true`，
则直接在浏览器中访问 `http://${ingress.host}/dashboard` 即可

否则，如果 `dashboard.service.type` 字段值设置为 `ClusterIP`，则需要执行以下命令进行端口转发：

```shell
export DASHBOARD_POD_NAME=$(kubectl get pods -l "app.kubernetes.io/name=inlong-dashboard,app.kubernetes.io/instance=inlong" -o jsonpath="{.items[0].metadata.name}" -n inlong)
export DASHBOARD_CONTAINER_PORT=$(kubectl get pod $DASHBOARD_POD_NAME -o jsonpath="{.spec.containers[0].ports[0].containerPort}" -n inlong)
kubectl port-forward $DASHBOARD_POD_NAME 8181:$DASHBOARD_CONTAINER_PORT -n inlong
```

之后就可以访问 [http://127.0.0.1:8181](http://127.0.0.1:8181) 进入 InLong Dashboard 了。

> 提示：如果出现 `unable to do port forwarding: socat not found` 的错误，则首先需要安装 `socat`

如果 `dashboard.service.type` 字段值设置为 `NodePort`，则需要执行以下命令：

```shell
export DASHBOARD_NODE_IP=$(kubectl get nodes -o jsonpath="{.items[0].status.addresses[0].address}" -n inlong)
export DASHBOARD_NODE_PORT=$(kubectl get svc inlong-dashboard -o jsonpath="{.spec.ports[0].nodePort}" -n inlong)
```

之后就可以访问 `http://$DASHBOARD_NODE_IP:$DASHBOARD_NODE_PORT` 进入 InLong Dashboard 了。

如果 `dashboard.service.type` 字段值设置为 `LoadBalancer`，则需要执行以下命令：

```shell
export DASHBOARD_SERVICE_IP=$(kubectl get svc inlong-dashboard --template "{{"{{ range (index .status.loadBalancer.ingress 0) }}{{.}}{{ end }}"}}"  -n inlong)
```

之后就可以访问 `http://$DASHBOARD_SERVICE_IP:30080` 进入 InLong Dashboard 了。

> 注意：这将花费一些时间，可以运行 `kubectl get svc inlong-dashboard -n inlong -w` 命令来查看其状态

默认的用户名是 `admin`，默认密码是 `inlong`，你可以通过它们进入 InLong Dashboard。

### 配置

配置项在 [values.yaml](https://github.com/apache/incubator-inlong/blob/master/docker/kubernetes/values.yaml) 文件中，下表展示了所有可配置项及其默认值：

|                                    Parameter                                     |     Default      |                                                                         Description                                                                          | 
|:--------------------------------------------------------------------------------:|:----------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|                                    `timezone`                                    | `Asia/Shanghai`  |                                                       World time and date for cities in all time zones                                                       |
|                               `images.pullPolicy`                                |  `IfNotPresent`  |                                                 Image pull policy. One of `Always`, `Never`, `IfNotPresent`                                                  |
|                         `images.<component>.repository`                          |                  |                                                          Docker image repository for the component                                                           |
|                             `images.<component>.tag`                             |     `latest`     |                                                              Docker image tag for the component                                                              |
|                             `<component>.component`                              |                  |                                                                        Component name                                                                        |
|                              `<component>.replicas`                              |       `1`        |                                                Replicas is the desired number of replicas of a given Template                                                |
|                        `<component>.podManagementPolicy`                         |  `OrderedReady`  |                PodManagementPolicy controls how pods are created during initial scale up, when replacing pods on nodes, or when scaling down                 |
|                            `<component>.annotations`                             |       `{}`       |                                 The `annotations` field can be used to attach arbitrary non-identifying metadata to objects                                  |
|                            `<component>.tolerations`                             |       `[]`       |                     Tolerations are applied to pods, and allow (but do not require) the pods to schedule onto nodes with matching taints                     |
|                            `<component>.nodeSelector`                            |       `{}`       |                 You can add the `nodeSelector` field to your Pod specification and specify the node labels you want the target node to have                  |
|                              `<component>.affinity`                              |       `{}`       |        Node affinity is conceptually similar to nodeSelector, allowing you to constrain which nodes your Pod can be scheduled on based on node labels        |
|                   `<component>.terminationGracePeriodSeconds`                    |       `30`       |                                              Optional duration in seconds the pod needs to terminate gracefully                                              |
|                             `<component>.resources`                              |       `{}`       |                                                Optionally specify how much of each resource a container needs                                                |
|                              `<component>.port(s)`                               |                  |                                                            The port(s) for each component service                                                            |
|                                `<component>.env`                                 |       `{}`       |                                                      Environment variables for each component container                                                      |
|       <code>\<component\>.probe.\<liveness&#124;readiness\>.enabled</code>       |      `true`      |                                                         Turn on and off liveness or readiness probe                                                          |
|  <code>\<component\>.probe.\<liveness&#124;readiness\>.failureThreshold</code>   |       `10`       |                                                         Minimum consecutive successes for the probe                                                          |
| <code>\<component\>.probe.\<liveness&#124;readiness\>.initialDelaySeconds</code> |       `10`       |                                                             Delay before the probe is initiated                                                              |
|    <code>\<component\>.probe.\<liveness&#124;readiness\>.periodSeconds</code>    |       `30`       |                                                                How often to perform the probe                                                                |
|                            `<component>.volumes.name`                            |                  |                                                                         Volume name                                                                          |
|                            `<component>.volumes.size`                            |      `10Gi`      |                                                                         Volume size                                                                          |
|                        `<component>.service.annotations`                         |       `{}`       |                                        The `annotations` field may need to be set when service.type is `LoadBalancer`                                        |
|                            `<component>.service.type`                            |   `ClusterIP`    |             The `type` field determines how the service is exposed. Valid options are `ClusterIP`, `NodePort`, `LoadBalancer` and `ExternalName`             |
|                         `<component>.service.clusterIP`                          |      `nil`       |                                  ClusterIP is the IP address of the service and is usually assigned randomly by the master                                   |
|                          `<component>.service.nodePort`                          |      `nil`       |                              NodePort is the port on each node on which this service is exposed when service type is `NodePort`                              |
|                       `<component>.service.loadBalancerIP`                       |      `nil`       |                            LoadBalancer will get created with the IP specified in this field when service type is `LoadBalancer`                             |
|                        `<component>.service.externalName`                        |      `nil`       | ExternalName is the external reference that kubedns or equivalent will return as a CNAME record for this service, requires service type to be `ExternalName` |
|                        `<component>.service.externalIPs`                         |       `[]`       |                        ExternalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service                        |
|                             `external.mysql.enabled`                             |     `false`      |                                         If not exists external MySQL, InLong will use the internal MySQL by default                                          |
|                            `external.mysql.hostname`                             |   `localhost`    |                                                                   External MySQL hostname                                                                    |
|                              `external.mysql.port`                               |      `3306`      |                                                                     External MySQL port                                                                      |
|                            `external.mysql.username`                             |      `root`      |                                                                   External MySQL username                                                                    |
|                            `external.mysql.password`                             |    `password`    |                                                                   External MySQL password                                                                    |
|                            `external.pulsar.enabled`                             |     `false`      |                                        If not exists external Pulsar, InLong will use the internal TubeMQ by default                                         |
|                           `external.pulsar.serviceUrl`                           | `localhost:6650` |                                                                 External Pulsar service URL                                                                  |
|                            `external.pulsar.adminUrl`                            | `localhost:8080` |                                                                  External Pulsar admin URL                                                                   |

> 可选的组件有：`agent`、`audit`、`dashboard`、`dataproxy`、`manager`、`tubemq-manager`、`tubemq-master`、`tubemq-broker`、`zookeeper` 和 `mysql`。

### 卸载

通过以下命令卸载 chart：

```shell
helm uninstall inlong -n inlong
```

上述命令会删除除与 chart 关联的 `PVC` 之外的所有 Kubernetes 组件。

如果不再使用 `PVC`，可通过下列命令删除，它将会删除所有数据。

```shell
kubectl delete pvc -n inlong --all
```

> 注意：删除 PVC 也会删除所有数据。在做之前请小心。

## 开发

在开发前需要有一个装有 [helm](https://helm.sh) 的 Kubernetes 集群。
但是没有也没有关系，推荐使用 [kind](https://github.com/kubernetes-sigs/kind) ，
它能够在 Docker 容器中运行一个本地的 Kubernetes 集群，因此，只需花费很少的时间即可启动和停止 kubernetes 节点。

### kind 快速开始

你可以按照 [快速开始](https://kind.sigs.k8s.io/docs/user/quick-start) 章节中的指示安装 kind。
安装好 kind 后，你可以通过 [kind.yml](https://github.com/apache/incubator-inlong/tree/master/.github/kind.yml) 配置文件来创建一个 Kubernetes 集群。

```shell
kind create cluster --config kind.yml
```

可以通过 `--image` 指定具体的 Docker 镜像 —— `kind create cluster --image=....`。
使用不同的镜像可以改变集群的 kubernetes 版本。
要找到适合当前版本的镜像，你可以查看 [发行说明](https://github.com/kubernetes-sigs/kind/releases) 。

之后，你可以通过以下命令与集群进行交互：

```shell
kubectl cluster-info --context kind-inlong-cluster
```

现在，你已经拥有了一个可以进行本地开发的 Kubernetes 集群！

### 安装 Helm

请按照 [安装指引](https://helm.sh/zh/docs/intro/install) 进行安装。

### 安装 chart

通过以下命令创建命名空间并安装 chart：

```shell
kubectl create namespace inlong
helm upgrade inlong --install -n inlong ./
```

这将花费一段时间，通过以下命令查看所有 pod 是否能够正常启动：

```shell
watch kubectl get pods -n inlong -o wide
```

### 开发与调试

按照 [模板调试指引](https://helm.sh/zh/docs/chart_template_guide/debugging) 来调试你所开发的 chart。

除此以外，你可以通过以下命令保存渲染的模板：

```shell
helm template ./ --output-dir ./result
```

之后，你可以在 `result` 文件夹下检查渲染后的模板。

## 故障排除

我们已尽最大努力使这些 chart 尽可能正确，但偶尔也会出现我们无法控制的情况。
我们已经收集了用于解决常见问题的提示和技巧。
请在提出 [issue](https://github.com/apache/incubator-inlong/issues/new/choose) 之前先检查这些内容，并随时欢迎向我们提出 [Pull Request](https://github.com/apache/incubator-inlong/compare) ！
