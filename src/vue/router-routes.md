---
title: Routes 路由定義
date: 2020-11-01
sidebar: 'auto'
categories:
  - vue
tags:
  - router
  - routes
---

## 基礎路由

router 實體中 `routes`(陣列) 就是定義所有路由的地方，
裡面的每個路由請使用`物件`定義。

```js {1-2,6-7}
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const router = new VueRouter({
  routes: [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
  ],
})
```

:::warning 注意
path 當中 `/` 所代表的就是`根入口`，所以子層不可加 `/`
:::

## 動態路由

```js
```
