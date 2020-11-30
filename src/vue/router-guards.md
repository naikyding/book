---
title: 導覽守衛 hook
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

## 守衛流程 hook

<span style="color: lightskyblue">Router</span>
<span style="color:lightgreen">Route</span>
<span style="color: deeppink">Component</span>

 <div style="border:5px solid deeppink; hegiht: 300px; padding: 30px 20px; color: deeppink">- beforeRouteLeave() {}</div>
<div style=" border:5px solid lightskyblue; width: 100%; hegiht: 300px; padding: 30px 20px; color: lightskyblue">
  router.befoerEach()

  <div style="border:5px solid lightgreen; hegiht: 300px; padding: 30px 20px; color:lightgreen">
    beforeEnter: ()=>{}
        <div style="border:5px solid deeppink; hegiht: 300px; padding: 30px 20px; color: deeppink">
          <div>- beforeRouteEnter() {}</div>
          <div>- beforeRouteUpdate() {}  (如果重用組件)</div>
        </div>
  </div>
  router.afterEach()
</div>

## **全域**Router 守衛

全域守衛，是掛載在 `router` 上的守衛

:::tip
是所有路由內容的最外層，是**最先** 與 **最後** 執行層級
:::

- `beforeEach` 每次進入路由的守衛
- `afterEach` 所有路由守衛完後，執行

---

### `beforeEach` 進入路由守衛

你可以使用 `router.beforeEach` 來註冊全域的路由守衛

```js {3-5}
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // 每次觸發路由時，要做什麼事
})
```

:::danger
每次使用 `router` 時，**守衛** 都會被調用且會帶有 3 個 hook 的函式，在 next 沒有執行之前, 導航將會是 **等待** 狀態，不會進行下一個頁面!!
:::

### 守衛 hook (to, from, next)

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

### `afterEach` 路由結束後執行

這是用於調用完**所有**`守衛`hook 後執行的事項，算是最後的一步(所以沒有 `next` 參數)

```js
router.afterEach((to, from) => {
  // 最後要執行什麼
})
```

---

## Routes 路由守衛

在進入路由指定頁面之前的守衛，此處還可以防止進入頁面。
會在 `routes` 設置

```js
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // 進入頁面之前還想執行什麼
      },
    },
  ],
})
```

## Component 守衛

這是進入頁面的守衛，是最後的保護

- `beforeRouteEnter` 在此處無法訪問到 `this` ，因為在在創建之前
- `beforeRouteUpdate` 可以訪問到 `this`，但只有**組件** 被重用時，才會調用
- `beforeRouteLeave` 可以訪問 `this` ，但只有 **組件** 離開時，才會被調用

```js
const Foo = {
  template: `...`,
  beforeRouteEnter(to, from, next) {
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
  },
  beforeRouteUpdate(to, from, next) {
    // called when the route that renders this component has changed.
    // This component being reused (by using an explicit `key`) in the new route or not doesn't change anything.
    // For example, for a route with dynamic params `/foo/:id`, when we
    // navigate between `/foo/1` and `/foo/2`, the same `Foo` component instance
    // will be reused (unless you provided a `key` to `<router-view>`), and this hook will be called when that happens.
    // has access to `this` component instance.
  },
  beforeRouteLeave(to, from, next) {
    // called when the route that renders this component is about to
    // be navigated away from.
    // has access to `this` component instance.
  },
}
```

### 如何訪問 `this`

由於這個 `beforeRouteEnter` vue 實例還沒有被創建出來，所以無法使用 `this`
但可以在 `next()` 調用函式，而 `this` 將會是由 **參數** 引入

```js
beforeRouteEnter (to, from, next) {
  next(vm => {
    // 這個時候，你的 this 就可以使用了
  })
}
```

:::tip
這個引入 `this` 的方式，只有 `beforeRouteEnter` 可以在 `next` 調用，
其它兩個 hook 由於已經可以訪問到 `this` 所以就不支持這個引入 `this` 的方式。
:::

### 離開頁面的 hook

當頁面離開時，會調用到 `beforeRouteLeave` ，而這個 hook 最好運用的地方，就在使用者還沒完成表單的填寫，就想離開時，可以用 `next(false)` 來阻止這件事。

```js
beforeRouteLeave (to, from, next) {
  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  if (answer) {
    next()
  } else {
    next(false)
  }
}
```

### 全域 mixins 使用 組件守衛

如果全域的 mixins 會使用到組件守衛，這時你必預要注意!!
全域 mixins 的掛載，要在 掛載 router 之後

```js
Vue.use(Router) // 先

Vue.mixin({
  // 後
  beforeRouteUpdate(to, from, next) {
    // ...
  },
})
```
