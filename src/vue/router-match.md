---
title: 動態路由匹配
date: 2020-11-27
sidebar: 'auto'
categories:
  - vue
tags:
  - router
  - match
---

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

## 高級匹配模式

[example]: https://github.com/vuejs/vue-router/blob/dev/examples/route-matching/app.js

`vue-router` 支援一個或數個的配配方式，甚至可以自定義`正則式`，以下舉一個高級的模式 [example]
|方式|簡述|說明|
|-|-|-|
|`:params`|變數**前** + `:`|表示 params (參數)|
|`:params?` |參數**後** + `?` |這是**非必填**的參數|
|`:id(\\d+)`|參數**後** + `(正則式)`|定義參數的格式，以下面的例子這個參數必須為 **數字** 才會匹配。
| `*` | 在參數上填入`*` |任何東西，將被匹配成功。|
|`(path/)?`|`(路徑名稱/)?`|非必填的**路徑** |

```js
routes: [
  { path: '/' },
  // params are denoted with a colon ":"
  { path: '/params/:foo/:bar' },
  // a param can be made optional by adding "?"
  { path: '/optional-params/:foo?' },
  // a param can be followed by a regex pattern in parens
  // this route will only be matched if :id is all numbers
  { path: '/params-with-regex/:id(\\d+)' },
  // asterisk can match anything
  { path: '/asterisk/*' },
  // make part of the path optional by wrapping with parens and add "?"
  { path: '/optional-group/(foo/)?bar' },
]
```
