# 1. User login

Requires the user to enter the account name and password of the system

![](img/image-1624433272455.png)

# 2. Data access

The data access module displays a list of all tasks connected to the system within the current user authority, and can
view, edit, update and delete the details of these tasks Click [Data Access] access process, there are two steps to fill
in data access information: business information, data stream.

![](img/image-1624431177918.png)

## 2.1 Business Information

### 2.1.1 Business Information

You are required to fill in basic business information for access tasks.

![](img/image-1624431271642.png)

- Business English ID: Unified lowercase English name, please try to include the product name and concise
  specifications, such as wechat_pay_base
- Business Chinese name: Chinese description of the business, easy to use and retrieve, up to 128 characters
- Business responsible person: at least 2 people, the business responsible person can view and modify business
  information, add and modify all access configuration items
- Business introduction: Cut SMS to introduce the business background and application of this access task:

### 2.1.2 Access requirements

Access requirements require users to choose message middleware: high throughput (TUBE)

![](img/image-1624431306077.png)

High-throughput-Tube: high-throughput message transmission component, suitable for log message transmission

### 2.1.3 Access scale

The scale of access requires users to judge the scale of access data in advance, to allocate computing and storage
resources later

![](img/image-1624431333949.png)

## 2.2 Data stream

Click [Next] to enter the data flow information filling step. There are four modules for data flow information filling:
basic information, data source, data information, and data flow direction In the data flow process, you can
click [New Data Stream] to create a new data stream page

![](img/image-1624431416449.png)

### 2.2.1 Basic information

You are required to fill in the basic information of the data stream in the access task

![](img/image-1624431435574.png)

- Data stream ID: The prefix is automatically generated according to the product/project, the unique identifier of
  the data in the business, the unique identifier defined by a certain business data in InLong, the data stream ID in
  the data source, and the entry in the TDW library information table The data stream ID is the same
- Data stream name: interface information description, the length is limited to varchar (64), 32 Chinese
- Data stream owner: The data stream owner can view and modify data stream information, add and modify all access
  configuration items
- Introduction to data flow: simple text introduction to data flow

### 2.2.2 Data source

You are required to select the source of the data stream. Currently, three methods of file and independent push are
supported, and the detailed information of the data source can be supplemented in the advanced options;

- File: The business data is stored in the form of a file, and the business machine deploys TDBank Agent, which is read
  according to the customized policy rules, and the detailed description link
- Autonomous push: The copy is to be determined, and the technical implementation is related to the 109 message
  middleware type
  
  ![](img/image-1624431594406.png)

### 2.2.3 Data Information

You are required to fill in the data-related information in the data stream

![](img/image-1624431617259.png)

- Data Format
- Data encoding: If the data source contains Chinese, you need to choose UTF-8 or GBK, otherwise the encoding format is
  incorrect and the storage is garbled
- Source field separator: the format of data sent to mq
- Source data field: attributes with different meanings divided by a certain format in mq

### 2.2.4 Data storage

You are required to select the final flow direction of this task, this part is not Currently supports both
hive flow direction and autonomous push

![](img/image-1624431713360.png)

Add HIVE storage

![](img/image-1624431787323.png)

- Target database: hive database name (prepared to create in advance)
- Target table: hive table name
- First-level partition: the field name of the first-level subdirectory of hdfs data divided by hive data
- Secondary partition: the field name of the first-level subdirectory of hdfs data divided by hive data
- Username: hive server connection account name
- User password: hive server connection account password
- HDFS url: Hive bottom HDFS connection
- JDBC url: jdbc url of hive server
- Field related information: source field name, source field type, HIVE field name, HIVE field type, field description,
  and support deletion and addition-

# 3. Access details

## 3.1 Execution log

When the status of the data access task is "approved successfully" and "configuration failed", the "execution log"
function can be used to allow users to view the progress and details of the task execution process

![](img/image-1624432002615.png)

Click [Execution Log] to display the details of the task execution log in a pop-up window

![](img/image-1624432022859.png)

The execution log will display the task type, execution result, execution log content, end time, and the end time of the
execution of the access process. If the execution fails, you can "restart" the task and execute it again.

## 3.2 Task details

The business person in charge/following person can view the access details of the task, and can modify and update part
of the information under the status of [Pending Submit], [Configuration Successful], and [Configuration Failed]
There are three modules in the access task details: business information, data flow, flow direction, and

### 3.2.1 Business Information

Display the basic business information in the access task, click [Edit] to modify part of the content

![](img/image-1624432076857.png)

### 3.2.2 Data stream

Display the basic information of the data flow under the access task, click [New Data Flow] to create a new data flow
information

![](img/image-1624432092795.png)

### 3.2.3 Data Storage

Display the basic information of the data flow in the access task, select different flow types through the drop-down
box, and click [New Flow Configuration] to create a new data flow information

![](img/image-1624432114765.png)

# 4 Data consumption

Data consumption currently does not support direct consumption access to data, and data can be consumed normally after
the data approval process; Click [New Consumption] to enter the data consumption process, and you need to fill in
information related to consumption information.

![](img/image-1624432235900.png)

## 4.1 Consumer Information

Applicants need to gradually fill in the basic consumer business information related to data consumption applications in
the information filling module

![](img/image-1624432254118.png)

- Consumer group name: The prefix is automatically generated according to the product/project. The brief name of
  the consumer must be composed of lowercase letters, numbers, and underscores. The final approval will assign the
  consumer name based on the abbreviation splicing
- Consumer Responsible Person: At least 2 persons are required to choose the responsible person; the responsible person
  can view and modify the consumption information
- Consumer target business ID: you need to select the business ID of the consumer data, you can click [Query] and select
  the appropriate business ID in the pop-up window
  ![](img/image-1624432286674.png)
- Data usage: select data usage usage
- Data usage description: The applicant needs to briefly explain the items used and the purpose of the data according to
  their own consumption scenarios After completing the information, click [Submit], and the data consumption process
  will be formally submitted to the approver before it will take effect.

# 5. Approval management

The approval management function module currently includes my application and my approval, and all tasks of data access
and data consumption application approval in the management system

## 5.1 My application

Display the current task list submitted by the applicant for data access and consumption in the system, click [Details]
to view the current basic information and approval process of the task

![](img/image-1624432445002.png)

### 5.1.1 Data access details

Data access task detailed display The current basic information of the application task includes: applicant-related
information, basic information about application access, resource estimation information, and current approval process
nodes

![](img/image-1624432458971.png)

### 5.1.2 Data consumption details

Data consumption task details display basic information of current application tasks including: applicant information,
basic consumption information, resource estimation, and current approval process nodes

![](img/image-1624432474526.png)

## 5.2 My approval

As a data access officer and system member with approval authority, have the responsibility for data access or
consumption approval

![](img/image-1624432496461.png)

### 5.2.1 Data Access Approval

New data access approval: Currently it is a first-level approval, which is approved by the system administrator The
system administrator will review whether the access process meets the access requirements based on the data access
business information

![](img/image-1624432515850.png)

### 5.2.2 New data consumption approval

New data consumption approval: Currently it is a first-level approval, which is approved by the person in charge of the
business Business approval: The person in charge of the data access business judges whether the access requirements are
met according to the access parameter information, and then approves the application for consumption tasks based on this

![](img/image-1624432535541.png)

# 6 System Management

System management is currently aimed at users with system administrator status, which can create, modify, and delete
accounts

![](img/image-1624432652141.png)

## 6.1 New user

Users with system administrator rights can create new user accounts

![](img/image-1624432668340.png)

- Account type: Ordinary user (has data access and data consumption permissions, but does not have data access approval
  and account management permissions); system administrators (have data access and data consumption permissions, but
  also require data access approval and Account management permissions)
- username: username for login
- user password:
  -Effective duration: the account can be used in the system
  ![](img/image-1624432740241.png)

## 6.2 Delete user

The system administrator can delete the account of the created user, and the secondary account will stop using after
deletion

![](img/image-1624432759224.png)

## 6.3 User Edit

The system administrator can edit the created account for the second time
![](img/image-1624432778845.png)
Currently, system administrators support modification of existing accounts: account type and effective duration
![](img/image-1624432797226.png)

## 6.4 Change password

Users can change the account password by themselves, click [Change Password]

![](img/image-1624432829313.png)
The user needs to enter the old password and the new password, the new password of the second account will take effect
after confirmation