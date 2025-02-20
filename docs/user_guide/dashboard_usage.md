---
title: Dashboard Guide
sidebar_position: 1
---

## Overview
The guide in this section will show you how to manage data flows through the `Inlong` dashboard and introduce some management configurations. 
Through this guide, you will learn to perform operations such as data access, data consumption, data synchronization, and cluster management.

## Getting started
To start using the `InLong` dashboard, please deploy it first. Here are several ways to do it:

- [Standalone](/docs/deployment/standalone.md)
- [Docker](/docs/deployment/docker.md)
- [Kubernetes](/docs/deployment/k8s.md)
- [Bare Metal](/docs/deployment/bare_metal.md)

:::tip
We recommend using `docker` for deployment.
:::

## User Login

Requires the user to enter the system account name and password. The default account name is `admin` and the password is `inlong`. 
It is recommended that you change the password in time after logging in.

![User login](img/user-login.png)

## Data Access

The data access module displays a list of all tasks connected to the system within the current user authority, and can
view, edit, update and delete the details of these tasks.

Click [Create], there are two steps to fill in data access information: Group information, data stream.

![Create Group](img/create-group.png)

### Data Stream Group Information

![Create Group](img/group-information.png)

#### Access Requirements

Access requirements require users to choose message middleware: high throughput (TUBE) or High reliability (PULSAR):

- high throughput (Inlong TubeMQ): high-throughput message transmission component, suitable for log message transmission.
- high reliability (Apache PULSAR): high-reliability message transmission component, suitable for billing transmission.

#### Group Information

You are required to fill in basic data stream group information for access tasks.

- Group Name: Unified lowercase English name, please try to include the product name and concise
  specifications, such as pay_base
- Group Label: the label of the group, easy to use and retrieve, up to 128 characters
- Group responsible person: at least 1 people, the group responsible person can view and modify group
  information, add and modify all access configuration items
- Group introduction: Cut SMS to introduce the group background and application of this access task:

#### Access Scale

The scale of access requires users to judge the scale of access data in advance, to allocate computing and storage
resources later.

### Data Stream

Click [Next] to enter the data stream information filling step. There are four modules for data stream information filling:
basic information, data source, data information, and data stream.

In the data stream process, you can click [Create] to create a new data stream:

![Create stream](img/create-stream.png)

#### Basic Information

You are required to fill in the basic information of the data stream in the access task:

- Data stream id: The prefix is automatically generated according to the product/project, which is unique in a 
  specific group and is consistent with the stream id in the data source and the storage table
- Data stream name: interface information description, the length is limited to 64 characters (32 Chinese characters)
- Data stream owner: The data stream owner can view and modify data stream information, add and modify all access
  configuration items
- Introduction to data stream: simple text introduction to data stream

#### Data Sources

You are required to select the source of the data stream.

Currently, two methods of file and independent push are supported, and the detailed information of the data source can
be supplemented in the advanced options.

- File: The business data is in the file, and the business machine deploys InLong Agent, which is read according to
  customized policy rules
- Autonomous push: Push data to the messaging middleware through the SDK

#### Data Information

You are required to fill in the data-related information in the data stream.

![Data info](img/data-info.png)

- Data Format
- Data encoding
- Source field separator
- Source data field

#### Data Storage

You are required to select the final flow direction of this data stream, this part is not currently supports both hive storage
and autonomous push.

Add HIVE storage:

![Hive info](img/hive-info.png)

- Target database: hive database name (prepared to create in advance)
- Target table: hive table name
- First-level partition: the field name of the first-level subdirectory of hdfs data divided by hive data
- Secondary partition: the field name of the first-level subdirectory of hdfs data divided by hive data
- Username: hive server connection account name
- User password: hive server connection account password
- HDFS url: Hive bottom HDFS connection
- JDBC url: jdbc url of hive server
- Field related information: source field name, source field type, HIVE field name, HIVE field type, field description,
  and support deletion and addition

## My Application

The approval management function module currently includes my application and my approval, and all tasks of data access
and consumption application approval in the management system.

![My application](img/my-application.png)

Display the current task list submitted by the applicant for data access and consumption in the system, click [Details]
to view the current basic information and approval process of the task.

#### Application Data Access Details

![Application detail](img/application-detail.png)

Data access task detailed display The current basic information of the application task includes: applicant-related
information, basic information about application access, and current approval process nodes.

## Data Consumption

Data consumption currently does not support direct consumption access to data, and data can be consumed normally after
the approval process.

Click [Create] to enter the data consumption process, and you need to fill in information related to
consumption.

### Consumer Information

Applicants need to gradually fill in the basic consumer data stream group information related to data consumption applications in
the information filling module

![Consumer info](img/consumer-info.png)

- Consumer group name: The brief name of the
  consumer must be composed of lowercase letters, numbers, and underscores. The final approval will assign the consumer
  name based on the abbreviation splicing
- Consumer Responsible Person: At least 2 persons are required to choose the responsible person; the responsible person
  can view and modify the consumption information
- Consumer target data stream group id: you need to select the group id of the consumer data, you can click [Query] and 
  select the appropriate group id in the pop-up window
- Data usage: select data usage usage
- Data usage description: The applicant needs to briefly explain the items used and the purpose of the data according to
  their own consumption scenarios After completing the information, click [Submit], and the data consumption process
  will be formally submitted to the approver before it will take effect.

## Synchronization

The data synchronization module displays a list of all tasks in the synchronization system within the current user permissions. You can view, edit, update and delete the details of these tasks.
Click [New Data Synchronization] to enter the data synchronization process. You need to fill in the relevant information about the synchronization information. You can choose two synchronization types: real-time or offline.

![Create sync](img/create-sync.png)

### Base Information

#### Realtime Synchronization

After filling in the relevant basic information, you can proceed to the next step.

![Realtime sync](img/realtime-sync.png)

- Data flow group ID: The brief name of the synchronization task, which must be composed of lowercase letters, numbers, and underscores.
- Responsible person: The responsible person can view and modify synchronized information.
- Entire database migration: Choose whether you need to migrate the entire database according to your own needs.

#### Offline Synchronization

After filling in the relevant basic information, you also need to fill in the offline synchronization related information, such as: scheduling rules and dependency configuration.

![Offline sync](img/offline-sync.png)

Scheduling type: Choose regular or Crontab type according to your own needs.

##### Regular Type

- Scheduling unit: select minutes, hours, days, weeks, etc. according to your own needs.
- Scheduling cycle: Select the cycle according to your own needs, and its unit is determined by the selection of the scheduling unit.
- Delay time: fill in the required delay time.
- Validity time: Configure the validity time of offline rules.

##### Crontab Type

- Valid time: The time interval can be filled in, the format is: 2021-01-01 00:00-2021-12-31 23:59
- Crontab expression: Fill in the Crontab expression according to your own needs.

## Data Node

The data node module displays the list of data nodes within the current user permissions. You can view, edit, update and delete the details of these nodes.
Click [New] to pop up a dialog box for creating a new node. You can choose different node types, such as: Redis, Kafka, MySQL, etc.

![Create node](img/create-node.png)

![create note type](img/create-node-type.png)

- Node name: The brief name of the node, which must be composed of lowercase letters, numbers, and underscores.
- Node type: Select the type of node.
- Responsible person: The node responsible person can view and modify node information.

## Cluster Management

The cluster management module is divided into two modules: cluster label management and cluster management. Cluster label management is used to manage cluster labels, and cluster management is used to manage clusters.

### Cluster Tag Management

Cluster label management can add, delete, modify cluster labels, view the cluster list, bind clusters, etc.

![Cluster tag](img/cluster-tag.png)

#### Add New Cluster Label

![add_cluster_tag](img/add-cluster-tag.png)

- Cluster label: The brief name of the label, which must be composed of lowercase letters, numbers, and underscores. Modifying the cluster label name will also modify the label names in all clusters bound to this label. Make sure that this label is not used by InlongGroup. .
- Person in charge: The person in charge can view and modify cluster label information.
- Tenant: Select the tenant to be bound.

#### Bind Cluster

![Bind cluster](img/bind-cluster.png)

![detail bind cluster](img/detail-bind-cluster.png)

- Cluster name: When the cluster list is empty, you need to go to the cluster management page to create the required cluster so that the cluster label can be bound to the cluster.

### Cluster Management

Cluster management can add, delete, modify clusters, view the cluster list, view cluster details, view cluster nodes, etc.

#### Create  New Cluster

Click [New Cluster] and a dialog box for creating a new cluster will pop up. You can choose different cluster types, such as Agent, Kafka, etc.

![create cluster](img/create-cluster.png)

![cluster detail](img/cluster-detail.png)

- Cluster name: The brief name of the cluster, which must be composed of lowercase letters, numbers, and underscores.
- Cluster type: Select the type of cluster.
- Person in charge: The person in charge of the cluster can view and modify the cluster information.
- Cluster label: Select the label to be bound.