---
title: Dashboard Plugin
sidebar_position: 4
---

## Overview

This article is aimed at InLong Dashboard plug-in developers, trying to describe the process of developing a Dashboard plug-in as comprehensively as possible, helping developers quickly add a data storage LoadNode, and making plug-in development easier.
The InLong Dashboard itself acts as a front-end console, built with the React framework.

## Extend Load Node

In the `inlong-dashboard/src/components/MetaData` directory, create a new `StorageExample.tsx` file, and at the same time export the file in the `index.ts` file in the current directory (refer to the existing LoadNode writing method ), which completes a new sink named `Example`.

````js
// export in index
export const Storages: StoragesType[] = [
  // ... omit existing code
  {
    label: 'Example',
    value: 'Example',
    ...StorageExample,
  },
];
````

Next, we will introduce how to define the internal structure of the LoadNode.

In the definition of LoadNode, we can view the unified specification of our agreement through the type declaration in the `import type { GetStorageFormFieldsType, GetStorageColumnsType } from '@/utils/metaData';` file, here we show a simplest LoadNode definition (emphasis inside the `--Focus--` tag):

````js
import { getColsFromFields, GetStorageFormFieldsType } from '@/utils/metaData';
import { ColumnsType } from 'antd/es/table';
import { excludeObject } from '@/utils';

const getForm: GetStorageFormFieldsType = (
  type: 'form' | 'col' = 'form',
  { currentValues, isEdit } = {} as any,
) => {
  // -- Focus Start --
  const fileds = [
    {
      name: 'name',
      type: 'input',
      label: 'Name',
      _inTable: true,
    },
    {
      name: 'sex',
      type: 'radio',
      label: 'Sex',
      initialValue: 'female',
      props: {
        options: [
          {
            label: 'female',
            value: 'female',
          },
          {
            label: 'male',
            value: 'male',
          },
        ],
        disabled: isEdit && [110, 130].includes(currentValues?.status),
      },
      _inTable: true,
    },
    {
      name: 'age',
      type: 'inputnumber',
      label: 'Age',
      props: {
        min: 1,
        max: 200,
      },
    },
    // -- Focus End --
  ];
  // The following is a generic return
  return type === 'col'
    ? getColsFromFields(fileds)
    : fileds.map(item => excludeObject(['_inTable'], item));
};
// The following is a generic export
const tableColumns = getForm('col') as ColumnsType;

export const StorageExample = {
  getForm,
  tableColumns,
};
````

In the above example, we define a sink of `Example`, which consists of three fields: name, sex, age. The field name corresponds to the name attribute (the API interface field that interacts with the manager), and the type attribute represents the display on the front-end page. The input form usually includes input, inputnumber, radio, select and other forms. More complex display forms or the complete definition of the entire object can be obtained through the ts type description.