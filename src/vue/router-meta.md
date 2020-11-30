---
title: 路由信息 meta
date: 2020-11-30
sidebar: 'auto'
categories:
  - vue
tags:
  - route
  - meta
---

有時你會希望可以加入信息到路由裡，可以使用這個方法
例如：誰可以訪問、轉場名稱...等。
這個方法可以將參數放在 `route` 的 `meta`。

假設在 `/foo/bar` 這頁裡的信息，我塞了一個叫 `requiresAuth` 的參數，它的內容是 `true`
當你在訪問這個頁面的時候，你可以在 `meta` 找到這個參數，進而看如何運用。

## 設置路由信息

```js {11}
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      children: [
        {
          path: 'bar',
          component: Bar,
          // a meta field
          meta: { requiresAuth: true },
        },
      ],
    },
  ],
})
```

:::warning
當你設置 `meta` 參數時，它將會匹配父層、子層的紀錄
:::

## 使用路由信息

當你在訪問頁面時，想要使用這個信息，作為訪問的權限或其它使用，你可以在 `route` 上找到這個 `meta` 的參數

```js
this.route.meta.requiresAuth
```

或者，可以在路由的匹配紀錄上找到

`route.matched` 是路徑所有匹配的紀綠，它也可以找到 `meta`

```js {2}
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.loggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})
```
