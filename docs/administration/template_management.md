---
title: Template Management
sidebar_position: 7
---

Template management provides users with the convenient ability to reuse field templates, allowing users to create, modify, and delete templates, as well as reuse configured field template information during data access.

### Create template

Users can generate a commonly used field template information by creating a template:

![](img/create_template.png)

- Template Name：A user-defined name used to identify this field template configuration.
- Owner：The person responsible for this template; only the person in charge can modify the template's configuration information.
- Visible Range：The visibility range of this template, including three options: tenant, person in charge, and globally visible. Users within the visibility range can use this template.
- Source fields：The field information configured for this template.

### Delete template

For templates that are no longer needed, users can perform a deletion operation, and the deleted template will no longer be available.

![](img/delete_template.png)

### Update template

Users can modify an already created template according to their needs.

![](img/update_template.png)

### Use template

After configuring the field template, users can use the pre-configured field template information during data access:

- Select【Ingestion】and click【Detail】
  ![img.png](img/use_template_1.png)
- Select【Create】and click【Select Template】.
  ![img.png](img/use_template_2.png)
- Select the pre-configured template and click Save.
  ![img.png](img/use_template_3.png)
  By following these steps, you have successfully used the field template
