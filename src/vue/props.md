---
title: 組件傳參數
date: 2020-11-23
sidebar: 'auto'
categories:
  - vue
  - router
tags:
  - component
  - 組件
  - router
  - props
---

<img width="300px" :src="$withBase('/img/coupling.gif')" alt="coupling">

在 `router` 中使用組件，會讓路由與組件形成高度的耦合(資料)，但也失去了靈活性!
你或許可以在 `router` 使用 `props` 來讓組件與路由解開耦合，讓 `props` 的資料來結耦!

## router 使用 `props` 傳送`參數`(資料)

- ### 開啟 `props` 傳送

在 routes 路由中，使用 `props: true` 開啟以 `porps` 傳送資料

```js {2}
const router = new VueRouter({
  routes: [{ path: '/user/:id', component: User, props: true }],
})
```

- ### 接收 `props` 參數
  在組件中，使用 `props` 接收參數，就如組件接收參數一樣 [參考]()

```js {2}
const User = {
  props: ['id'],
  template: '<div>User {{ id }}</div>',
}
```

---

## ▲ 傳參模式 ▲

- ### 布林模式 Boolean `props: true`

  當 `props: true`，在**組件**中 `route.params` 全部會被當作 `props` 傳入。
  (前提是，你必須要記得接收)

  **router：**

  ```js {2}
  const router = new VueRouter({
    routes: [{ path: '/user/:id/:name', component: User, props: true }],
  })
  ```

  **component：**

  ```js {2}
  const User = {
    props: ['id', 'name'],
    template: '<div>User {{ id }}</div>',
  }
  ```

---

- ### 物件模式 Object `props: { 參數名稱: '靜態資料' }`

  使用**物件** 模式時，可以直接用物件寫入`靜態資料`

  **routes：**

  ```js {6-9}
  const router = new VueRouter({
    routes: [
      {
        path: '/user/:id/:name',
        component: User,
        props: {
          newId: 123,
          newName: 'naiky',
        },
      },
    ],
  })
  ```

  **component：**

  ```js {3}
  const User = {
    // 此時就算 props 有設 id && name 也是 undefind
    props: ['newId', 'newName'],
    template: '<div>User {{ id }}</div>',
  }
  ```

---

- ### 函式模式 function

  這是**最推薦的方式** 也是最活用的方式。
  可以使用`函式` 透過 return 來回傳資料，這樣可以傳送動態的資料，也可以結合上靜態的資料，

  **router：**

  ```js {6-9}
  const router = new VueRouter({
    routes: [
      {
        path: '/seatch/:type',
        component: seatch,
        props: (route) => ({
          type: route.params.type,
          query: route.query.q,
        }),
      },
    ],
  })
  ```

  **component：**

  ```js {2-3}
  const seatch = {
    props: ['type', 'query']
    template: '<div>seatch</div>',
  }
  ```
