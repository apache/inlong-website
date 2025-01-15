---
title: Overview
sidebar_position: 1
---

# Introduction
InLong Transform helps InLong expand its access and distribution capabilities, adapting to a richer variety of data protocols and reporting scenarios on the access side, and accommodating complex and diverse data analysis scenarios on the distribution side. It improves data quality and collaboration, providing computational capabilities decoupled from the computing engine such as connection, aggregation, filtering, grouping, value extraction, sampling, etc. It simplifies the preliminary operations for users to report data, lowers the threshold for data usage, and focuses on the business value of data, achieving the principle of "what is visible is usable."

![](img/transform_introduction.png)

# Application Scenarios
- Data Cleaning: During the data integration process, it is necessary to clean data from different sources to eliminate errors, duplicates, and inconsistencies. Transform capabilities can help enterprises clean data more effectively, improving data quality.
- Data Fusion: Combining data from different sources for unified analysis and reporting. Transform capabilities can handle data in various formats and structures, achieving data fusion and integration.
- Data Standardization: Converting data into a unified standard format for cross-system and cross-platform data analysis. Transform capabilities can help enterprises standardize and normalize data.
- Data Partitioning and Indexing: To improve the performance of data querying and analysis, partition data and create indexes. Transform capabilities can dynamically adjust the field values for partitioning and indexing, thereby improving the performance of data warehouses.
- Data Aggregation and Calculation: During data analysis, extract valuable business information through data aggregation and calculation. Transform capabilities can achieve complex data aggregation and calculation, covering multi-dimensional data analysis.
- Data Security and Privacy Protection: Ensure data security and privacy during the data integration process. Transform capabilities can achieve data masking, encryption, and authorization management, protecting data security and privacy.
- Cross-Team Data Sharing: Share only a filtered subset of the data stream for data security considerations; agree on data interfaces with partner teams for data dependency decoupling, dynamically adjusting the merging of multiple streams into the data stream interface.

# Features
- Describe the Transform processing logic of the data stream through SQL, supporting standard SQL syntax.
- Provide a rich SQL Function to handle various Transform needs and support UDF extensions.
- Support CSV, KV, ProtoBuffer, JSON, and other flat table and tree structure data source decoding frameworks.
- Support CSV, KV, and other data target encoding frameworks.
- Data source decoding and data target encoding are extensible for development.

# Future Planning
- Support richer Transform UDFs, data source decoders, and data target encoders.
- Support Group and Join capabilities based on Time Window.
- Integrate Transform into each module of InLong to enhance processing capabilities and user experience.
	- Agent: Responsible for collecting raw data from various data sources. After expanding Transform capabilities, it adds support for complex data source protocols such as PB, Json, and increases data filtering and format conversion capabilities.
	- Realtime Synchronization: Currently, real-time synchronization is implemented based on FlinkSQL transformation, one data stream per job; after expanding Transform capabilities, it adds support for complex data source protocols such as PB, Json; and supports multiple data streams per job.
	- Offline Synchronization: Offline synchronization is currently planned to be implemented based on Flink Batch, with InLongTransform as a custom function to expand its transformation capabilities; it can use the data target of the InLong data stream as a data source, achieve internal data integration, implement preprocessing, and trigger downstream offline jobs through the end of the pre-sort job or the offline synchronization job or partition closure event.
	- Manager: After expanding Transform capabilities, the Manager interface provides preliminary transformation operations for raw data, verifies the correctness of the transformation logic configuration, and improves user experience.
	- Sort: Currently, Sort defines that one data stream has only one offline data target per type, but after expanding Transform capabilities, it allows multiple copies and subsets to be stored, and enriches the final storage content through association with static database tables, optimizing the processing of subsequent business tasks.