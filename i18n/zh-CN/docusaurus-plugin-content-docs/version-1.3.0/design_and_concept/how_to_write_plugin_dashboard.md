---
title: Dashboard 插件
sidebar_position: 4
---

## 总览

本文面向 InLong Dashboard 插件开发人员，尝试尽可能全面地阐述开发一个 Dashboard 插件所经过的历程，帮助开发者快速新增一个 Load Node，让插件开发变得简单。
InLong Dashboard 本身作为前端控制台，采用 React 框架构建。

## 扩展 Load Node

在 `inlong-dashboard/src/components/MetaData` 目录下，新建一个 `StorageExampleNode.tsx` 文件，同时讲该文件在当前目录的 `index.ts` 文件内部进行导出（可参考已有 LoadNode 的写法），这样便完成了新增一种名为 `ExampleNode` 的 LoadNode，接下来，我们将介绍怎么定义该 LoadNode 的内部结构。

在 LoadNode 的定义中，可通过 `import type { GetStorageFormFieldsType, GetStorageColumnsType } from '@/utils/metaData';` 文件中的类型声明查看我们约定的统一规范，这里我们展示了一个最简单的 LoadNode 定义（重点在于`--关注点--`标签内部）:

```js
import { getColsFromFields, GetStorageFormFieldsType } from '@/utils/metaData';
import { ColumnsType } from 'antd/es/table';
import { excludeObject } from '@/utils';

const getForm: GetStorageFormFieldsType = (
  type: 'form' | 'col' = 'form',
  { currentValues, isEdit } = {} as any,
) => {
  // -- 关注点 Start --
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
    // -- 关注点 End --
  ];
  // 下面为通用的 return
  return type === 'col'
    ? getColsFromFields(fileds)
    : fileds.map(item => excludeObject(['_inTable'], item));
};
// 下面为通用的 export
const tableColumns = getForm('col') as ColumnsType;

export const StorageExampleNode = {
  getForm,
  tableColumns,
};
```

在上述例子中，我们定义了一个 `ExampleNode` 的 LoadNode，它由 name, sex, age 三个字段构成，字段名对应了 name 属性（与 manager 交互的 API 接口字段），type 属性表示前端页面中展示的输入表单，通常包含 input, inputnumber, radio, select 等多种形式，更多的复杂展示形式或整个对象的完整定义都可通过 ts 类型描述获得。
