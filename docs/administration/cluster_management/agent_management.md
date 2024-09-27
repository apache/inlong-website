---
title: Agent management
sidebar_position: 1
---

## Overview
The platform has implemented interface based management capabilities for agents, supporting installation package management, version management, installation operations, uninstallation operations, upgrade operations, restart operations, and batch operations.

## Installation package management
Installation package management mainly involves managing the name, address, and MD5 of installation packages.
### Add
As shown in the figure, click "Create Package" in "Operation-Package" to create a new installation package:
![](img/agent_package_new.png)
File Name: Agent Installation Package Name

Download Url: The download url for the installation package. We download the installation package through wget.

MD5: The MD5 value of the installation package file, used to verify whether the installation package is damaged after downloading.

Storage Path: The storage path after the installation package is downloaded.

### Modify and Delete
Click on "Details" to modify the Agent; Click 'Delete' to delete the installation package.
![](img/agent_package_modify_delete.png)

### Installer 
The Installer is the daemon process of the Agent, and in fact, we install both the Installer and Agent processes on the business machine. The installation package, version management, and agent of the Installer are the same.

## Version Management
Version management is based on installation package management, mainly managing the installation, inspection, start, and stop commands required for this installation package.
### Add
As shown in the figure, click "Create Module" in "Operations-Version Management" to create a new version:
![](img/agent_version_new.png)
Name: Version name.

Version: Version number, which must follow the X.X.X three part specification and can only be a number.

Installation package: Select the installation package corresponding to this version.

Check Command: A command used to detect the existence of a process.

Start command: Used to start the process.

Stop command: Used to stop the process.

Uninstall command: Used to uninstall the agent.

### Modify and Delete
Click on 'Details' to modify the version; Click 'Delete' to delete the version.
![](img/agent_version_modify_delete.png)


## Agent Installation
After finding the Agent cluster in the cluster management as shown in the figure, select "Create":
![](img/agent_install.png)
IP: The IP of the machine where the agent is to be installed.

Protocol Type: Identify the protocol type used by the Agent and Manager for interaction. If they are on the same local area network, we choose HTTP; If cross public network transmission is required, choose HTTPS.

Version: Select the version of the Agent.

Installation: If you want the platform to install automatically, please choose SSH installation, and usually install through SSH password.

SSH Username: SSH login username

SSH Password: SSH login password

SSH Port: SSH port number

After completing the form, you can click the "Test Connection" button to test whether the SSH login was successful.
After clicking the 'Save' button, automatic installation will begin.
## Modify and Delete
Click 'Edit' to modify the Agent node; Click 'Delete' to delete the Agent node.
![](img/agent_modify_delete.png)

## Batch Update
As shown in the figure, we can select multiple Agent nodes and click the "Batch Update" button to perform batch operations.
![](img/agent_batch.png)
Batch Num: We can perform batch operations, which are divided into batches.

Interval: The time interval between each batch.

Operation type: The operation to be performed on this batch of nodes,

Version: Agent version.

Installer: Installer version.