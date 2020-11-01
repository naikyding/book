---
title: Router 路由
date: 2020-09-31
sidebar: 'auto'
categories:
  - vue
tags:
  - router
---

## 安裝方式

- 安裝 `vue-router`
- 引入 router
  ```js
  import Vue from 'vue' // 引入 vue
  import VueRouter from 'vue-router' // 引入 router 套件
  Vue.use(VueRouter) // 使用套件
  ```
- 建立 router

  ```js
  const router = new VueRouter({
    routes, // short for `routes: routes` 你的路由定義
  })
  ```

  :::tip 引入、建立 資料位置：
  於 `src`之下，新增資料夾 `router`在內部 新增檔案`index.js`
  :::

- 掛載 router
  ```js
  const app = new Vue(
    router, // 路由定義
  }).$mount('#app')
  ```
  :::warning
  通常是在 入口的那隻 js (ex: main.js)
  :::

## 說明

```vue {4-6}
<template>
  <div>
    <h1>這是主頁，下面將會出現路由區塊
    <router-link to="/">HOME</router-link> // 切換路由方法
    <router-link to="/profile">PROFILE</router-link>
    <router-view> // 顯示路由區塊
  </div>
</template>
```

- **`router` 、`this.$router`**：`router` 實例 就等於 `this.$router`
- **`$router` 操作路由方法**
- **`$route` 查詢目前路由狀態資訊**
- **`<router-view>` 顯示路由組件區塊**
- **`<router-link>` 切換路由方法** ：會產生一個`<a>`標籤

  `router-link-exact-active` 這是當你路由正在被啟用時，會出現的 `class`
