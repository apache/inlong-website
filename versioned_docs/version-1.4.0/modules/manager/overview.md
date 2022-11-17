---
title: Overview
sidebar_position: 1
---

## 1 Introduction to Apache InLong Manager

- Target positioning: Apache InLong is positioned as a one-stop mass data integration framework, providing technical capabilities for big data from collection -> transmission -> sorting -> landing.

- Platform value: Users can complete task configuration, management and indicator monitoring through the management and configuration platform in the platform, and at the same time, through the plug-in expansion capability provided by the platform, they can realize customized expansion on demand.

- InLong Manager is a unified management platform for the Apache InLong project. The platform provides maintenance portals for various basic configurations (such as data flow configuration, consumption configuration, cluster management, etc.). Users can create data collection tasks and view indicator data.

## 2 Architecture

![](img/inlong-manager.png)


## 3 Module division of labor

| Modules   | Responsibilities |
| :---------| :--------------- |
| manager-common | Module common code, such as exception definition, tool class, enumeration, etc. |
| manager-dao   | database operations |
| manager-service | business logic layer |
| manager-workflow | Workflow Services |
| manager-plugins | Sort plugin service |
| manager-web | Front-end interactive interface layer |
| manager-client | Client Services |
| manager-client-examples | Client usage examples |
| manager-client-tools | Client command line tools |

## 4 use process 
![](img/interactive.jpg)

## 5 data model
![](img/datamodel.jpg)
