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

[官方說明](https://router.vuejs.org/guide/essentialsdynamic-matching.html#reacting-to-params-changes)

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

## 巢狀路由

當基礎路由內部，還需要一層路由時，這時就可以使用巢狀路由。

```
/user/foo/profile                     /user/foo/posts
+------------------+                  +-----------------+
| User             |                  | User            |
| +--------------+ |                  | +-------------+ |
| | Profile      | |  +------------>  | | Posts       | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+
```

### 方式

- 在父層再加上一個 `<router-view></router-view>`
- 定義子層路由
  子層路徑，就不用再加上 `/`

  ```js
  const routes = [
    {
      path: '/',
      name: 'index'
      component: ()=>import('@/views/...')
    },
    {
      path: '/user/:id',
      component: User,
      children: [
            {
              // 当 /user/:id/profile 匹配成功，
              // UserProfile 会被渲染在 User 的 <router-view> 中
              path: 'profile',
              component: UserProfile
            },
            {
              // 当 /user/:id/posts 匹配成功
              // UserPosts 会被渲染在 User 的 <router-view> 中
              path: 'posts',
              component: UserPosts
            }
          ]
    }
  ]
  ```

  ### 加入子層後的首頁定義

  但這時父層的 `path: '/user/:id'` 會是空頁，如果你想要在父層的首頁加上頁面，可以使用 `path: ''`：

  ```js
  routes: [
    {
      path: '/user/:id',
      component: User,
      children: [
        // 当 /user/:id 匹配成功，
        // UserHome 会被渲染在 User 的 <router-view> 中
        { path: '', component: UserHome },

        // ...其他子路由
      ],
    },
  ]
  ```

## 動態匹配路由

當你希望路徑中，可以依名稱`動態變更`內容時，可以使用這個方式。

### 使用方式

在定義路由時，`動態名稱`前面加上 `:`

```js {8}
const User = {
  template: '<div>User</div>',
}

const router = new VueRouter({
  routes: [
    // dynamic segments start with a colon
    { path: '/user/:id', component: User },
  ],
})
```

### 配置說明

此時，你的 URL `/user/foo` 或 `/user/bar` 的時候，它將會有不同的對應在 `this.$route.params` 而 `params` 內的索引，就是定義時 `:名稱`。

| 定義路由                      | URL 路徑            | \$route.params                         |
| ----------------------------- | ------------------- | -------------------------------------- |
| /user/:username               | /user/evan          | `{ username: 'evan' }`                 |
| /user/:username/post/:post_id | /user/evan/post/123 | `{ username: 'evan', post_id: '123' }` |

:::tip 提示
除了 `$route.params` 之外，`$route` 還有其它的用法!
比如，`$route.query` 來讀取 url 的 `get ?do=select` … [其它 api](https://router.vuejs.org/api/#the-route-object)
:::

### 更新組件

:::warning 注意
當路由已經渲染，此時如果再修改 url 後面的`動態名稱`，`component` **不會再重新渲染**，這意謂著你無法再使用組件某些`hook`來進行些更新的動作!!

可以使用`組件`中，的 `watch`觀察目前的`route`變更，來執行你要的程式

```js {3-6}
const User = {
  template: '...',
  watch: {
    $route(to, from) {
      // react to route changes...
    },
  },
}
```

or

```js
const User = {
  template: '...',
  beforeRouteUpdate(to, from, next) {
    // react to route changes...
    // don't forget to call next()
  },
}
```

:::

## 捕獲所有路徑

想要匹配**所有**的路徑，可以使用 `*`

```js
{
  // 会匹配所有路径
  path: '*'
}
{
  // 会匹配以 `/user-` 开头的任意路径
  path: '/user-*'
}
```

 當通過 `*` 捕獲路徑時，在 `$route.params` 會出多一個 `pathMatch` 參數，可以來顯示目前捕獲的路徑名稱。

```js
// 當路徑為 { path: '/user-*' }
this.$router.push('/user-admin')
this.$route.params.pathMatch // 'admin'

// 當路徑為 { path: '*' }
this.$router.push('/non-existing')
this.$route.params.pathMatch // '/non-existing'
```

## 路徑匹配的優先權

有時候，同一個路徑可以匹配多個路由，此時，匹配的優先級就按照路由的定義順序：誰先定義的，誰的優先級就最高。
