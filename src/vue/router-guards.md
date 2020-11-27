---
title: 導覽守衛
date: 2020-11-27
sidebar: 'auto'
categories:
  - vue
tags:
  - router
  - routes
  - beforeEach
  - 導覽守衛
---

## 註冊**全域**守衛

你可以使用 `router.beforeEach` 來註冊全域的路由守衛

```js {3-5}
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // 每次觸發路由時，要做什麼事
})
```

:::tip
每次使用 `router` 時，**守衛** 都會被調用且會帶有 3 個 hook 的函式，在 next 沒有執行之前, 導航將會是 **等待** 狀態，不會進行下一個頁面!!
:::

### 守衛 hook

每一個 **守衛** 都有三個參數可以被調用
[路由導航]: ./router_nav.md

- **to** `Route`：直接操作 router 實體
- **from** `Route`： 直接操作 router 實體
- **next** `Function` 必須使用這個函式，來操作路由的下一個動作。**不然會等待**

### next 調用方法

- `next()` 如果沒有其它動作，那導航將會被確認進入 `to` hook。
- `next(false)` 會**阻止**路由進入 `to` ，將回到 `from` route，就算 url 直接被改動，也會恢復。
- `next('/')` or `next({ path: '/'})` 重定向到指定的頁面，將不會進入 `to` hook，直接被轉頁。操作方式 [路由導航 repacle](./router_nav.md#replace) 相同。
- `next(error)` 會停止前往下一個路由且會調用 [`router.onError` 函式](https://router.vuejs.org/api/#router-onerror)。

:::danger 注意
請確保 `next` 函式在每一個操作都被調用到**一次**，不然路由將會停留在現況，無法進行到下一個頁面。
也不要調用多次，不然路由錯亂!!

```js
// BAD
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  // if the user is not authenticated, `next` is called twice
  next()
})
```

```js
// GOOD
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})
```

:::
