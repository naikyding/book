---
title: 可選式鏈結 ?.
date: 2020-12-21
sidebar: 'auto'
categories:
  - js
tags:
  - optionalChaining
  - object
  - array
---

## ?.

可選式鏈結 `?.` ，允許進行深層次的物件值存取，而無需透過明確的物件值串連驗證。
很多時候，你在`.` 存取運算子，取過深的物件時(三個`.`) 或 這個物件又是`非同步`回來的資料，很容易會 **報錯** 。因為在`data` 設置時，還沒有那麼深層的物伴資料。

:::tip
**常常我們又要在`父層`加上`v-if`的判斷式，來判斷當這個內部的`資料`存在時才 render，這是可以使用這個方式，會更簡潔!!**
:::
當有機會存在參照不存在的時候，可選串連可以提供更簡短的表述式來進行串連性的屬性存取。這有助於在無法保證物件屬性為必要存在的狀況下，進行物件內容的探索。

### 使用方式

```vue {2}
<template>
  <div v-if="data.list.teacher">
    <img :src="data.list.teacher.img" />
  </div>
</template>
```

**使用可選式鏈結**

```vue {2}
<template>
  <img :src="data.list?.teacher.img" />
</template>
```

:::danger
你只需要在可能不存在的資料前，加上 `?.` ，這個時候就算沒有資料也不會報錯，而會等到有資料就會進行 `render`
:::
