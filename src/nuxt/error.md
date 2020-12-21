---
title: 錯誤頁面
date: 2020-12-21
sidebar: 'auto'
categories:
  - vue
  - nxut
tags:
  - 404
  - 500
  - error
  - layout
  - page
---

當頁面不存在指定的 `routes` 時，就會轉至 **錯誤頁面**；

錯誤頁面就像一般的頁面，它不是在 **server**端執行的。
**雖然它是一個頁面，但還是必須放在 `layouts` 的資料夾。**

## 新增錯誤頁 file

在 `layouts` 底下，新增 `error.vue`，**nuxt** 將會自動 將錯誤頁面引導到此。

```js
layouts / error.vue
```

## 設置 error page

`nuxt` 會自動將**錯誤**的資訊，傳到 `props`，錯誤頁面可以再依錯誤碼或其它資訊，來判斷該如何引導。

```vue {4,12}
<!-- layouts/error.vue -->
<template>
  <div>
    <h1 v-if="error.statusCode">404 找不到這個頁面</h1>
    <h1 v-else>頁面發生不知名錯誤</h1>
    <nuxt-link to="/">home</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>
```

通常 `error` 會傳這些資料

```json
{
  "statusCode": 404,
  "path": "/class12312312",
  "message": "This page could not be found"
}
```
