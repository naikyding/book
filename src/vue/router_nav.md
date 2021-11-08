---
title: 路由導航
date: 2020-11-20
sidebar: 'auto'
categories:
  - vue
tags:
  - router
  - routes
  - push
  - 重定向
  - 別名
  - alias
  - redirect
  - 轉址
---

除了使用 `<router-link>` 來產生 a 連結導航路由之外，也可以通過 `$router`的操作導航。

:::tip
在 vue 實體內，你可以通過 `this.$router.push` 來操作路由；
如果不在實體內，你可以引入 `router` ，再使用 router.push() 來操作。
:::

## router-link 方法

```js
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
```

與 `<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>` 是相同的作用!

这两种方式都会把路由导航到 /user/123 路径。

## router 方法

### .push()

會在 history 中添加一個新的紀錄，可以回到上一頁
|router-link|\$router|
|-|-|
|`<router-link :to="...">`|`router.push(...)`|

```js
this.$router.push('/home')

this.$router.push({ path: '/home' })

// url 帶動態參數
// path => user/:userId  user/123
this.$router.push({
  name: 'user',
  params: { userId: 123 },
})

// URL 帶動態參數 帶get
// user/:userId?to=  user/123?to=select
this.$router.push({
  name: 'user',
  params: { userId: 123 },
  query: { to: 'select' },
})
```

### .replace()

直接轉址到指定路徑上，不會添加一個紀錄
|router-link|\$router|
|-|-|
|`<router-link :to="..." replace>`|`router.replace(...)`|
操作與 push 相關

### .go()

單純操作 history 的紀錄，前幾頁 or 後幾頁`如果紀錄不夠用，會停留在最末`
|router-link|\$router|
|-|-|
|`<router-link :to="...">`|`router.push(...)`|

```js
// 在浏览器记录中前进一步，等同于 history.forward()
router.go(1)

// 后退一步记录，等同于 history.back()
router.go(-1)

// 前进 3 步记录
router.go(3)

// 如果 history 记录不够用，那就默默地失败呗
router.go(-100)
router.go(100)
```

## routes 轉址 / 重定向 `redirect`

通過 `routes` 配置來完成重定向，會將 URL `/a` 改成 `/b`

- 將 `/a` 轉址 `/b`

  ```js {2}
  const router = new VueRouter({
    routes: [{ path: '/a', redirect: '/b' }],
  })
  ```

  也可以以是指定名稱的方式

  ```js
  const router = new VueRouter({
    routes: [{ path: '/a', redirect: { name: 'foo' } }],
  })
  ```

  或者是動態轉址

  ```js
  const router = new VueRouter({
    routes: [
      {
        path: '/a',
        redirect: (to) => {
          // 方法接收 目标路由 作为参数
          // return 重定向的 字符串路径/路径对象
        },
      },
    ],
  })
  ```

## routes 路徑鏡射 / 別名 `alias`

這個操作 url 路徑不會變更，不同於 `redirect` 轉址

路徑 `/b` 就等於訪問 路徑 `/a`，兩個路徑內容是完全一樣的東西。

```js
const router = new VueRouter({
  routes: [{ path: '/a', component: A, alias: '/b' }],
})
```

:::tip
“别名”的功能让你可以自由地将 UI 结构映射到任意的 URL，而不是受限于配置的嵌套路由结构。
:::

