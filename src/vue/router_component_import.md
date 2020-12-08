---
title: 元件載入 / chunk
date: 2020-12-08
sidebar: 'auto'
categories:
  - vue
tags:
  - router
  - routes
  - impotr
  - component
  - 動態載入
  - chunk
---

## routes 的 component

一個頁面的路由，可以是一個 組件或多個組件的型成，一般是使用 `import`來引入組件；
但，當路由過於龐大時，大部分都會選擇使用 `chunk` 方式來載入元件，那這兩種有什麼不同?

## `import` components

這是一般的 `引入` 元件方式，缺點是**一開始** 就會載入所有的元件!
相對的會延遲網站一開始的時間!!

```js
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import Produnt from '../views/Produnt.vue'

const routes = [
  {...
```

## `chunk`

這個方式，可以在路由進來時，才載入這個頁面! 可以加速一開始就全載入的缺失!
但缺點是，每一次 `chunk` 就會生成一個 `.js` 檔案，會使你的打包檔案非常龐大且數量多!
也可能造成，在訪問這個路由時被延遲加載!!

解決的方式是，在 `import 內` 使用 `* webpackChunkName: "about" */` 這個命名註解，它可以幫你相同的註解被打包在同一隻 `.js` 當中，使你方便分類與控制打包檔案數量。

```js
  {
    path: '/about',
    name: 'About',
    component: () =>
      // 當路由組件使用動態載入，將會生成**一個單獨的 js**，在訪問這個路由時，可能會被延遲加載
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/produnt',
    name: 'Produnt',
    component: () =>
      import(/* webpackChunkName: "Produnt" */ '../views/Produnt.vue'),
  },
```

<img :src="$withBase('/img/vueBuild.png')" alt="build">

:::danger
當 `/* webpackChunkName: "Produnt" */` 相同時，就會打包在同一隻檔案內，這是推薦的作法。
:::
