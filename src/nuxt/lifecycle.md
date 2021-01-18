---
title: NXUT liftcycle 生命週期
date: 2020-12-18
sidebar: 'auto'
categories:
  - vue
  - nxut
tags:
  - lifecycle
---

<img :src="$withBase('/img/nuxt-lifecycle.svg')" alt="nuxt-lifecycle" >

[詳細說明](https://nuxtjs.org/docs/2.x/concepts/nuxt-lifecycle)

## SERVER SIDE

- ### `middleware` 中間層執行

  在 `渲染頁面` 之前調用
  [操作技巧](https://ithelp.ithome.com.tw/articles/10207822)
  :::tip
  可以 **設置**或**檢查條件**甚至**重定向頁面**
  :::

  **並按照 `middleware` 設定層級，依序執行，從 1~3**

  1. **Global**：影響所有 `routes`。定義位置： `nuxt.config.js` 設的 `middleware`
  2. **Layout** ：影響群組 `routes`。定義位置： **Layout Component** 設的 `middleware`
  3. **Page** : 影響頁面 `route`。 定義位置： **Page Component** 設的 `middleware`

---

- ### `validate` 驗證

  在 `渲染頁面` 之前調用
  :::tip
  用於**驗證動態路由參數**，大多只有使用 `true`、`false`來做判斷依據!!
  :::

  ```js {2-4}
  export default {
    validate({ params, query, store }) {
      return params.id // true || false
    },
  }
  ```

  假設，沒有經過驗證的`id`，無法進入此頁面，你可以使用這個 `hook`

  :::danger
  如果 `validate` 為 `false`，則頁面將會無法進入且導引為 **404**。
  通常需要先定義到 `layout` 上，`404` or `500` 的頁面。
  :::

- ### `asyncData`

  每次渲染頁面前，都會執行的 `hook`，[asyncData 操作](./async.md)
  :::tip
  通常，由此操作 **非同步** 取得資料的 `hook`；
  這邊 `return` 的操作，會**覆蓋**掉 `data`的資料。
  :::

- ### `beforeCreate`
  在進入 `client` 還會被執行一次
- ### `create`
  在進入 `client` 還會被執行一次

* ### `fetch()`
  每次渲染頁面前，都會執行的 `hook`，類似 `asyncData` **nuxt 2.12 新增的功能**
  - 可以使用 `this`
  - 可以在 `methods` 被操作，`this.$fetch()` or `<button @click="$fetch"></button>`
  -
  :::danger
  當 `fetch(context)` 被傳入引入時，它就會變成 **舊的 fetch(context)** 功能，**this** 將會失效!!
  :::
