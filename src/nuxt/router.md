---
title: Router
date: 2020-12-18
sidebar: 'auto'
categories:
  - vue
  - nxut
tags:
  - router
  - nuxtlink
  - nuxtchild
---

## 頁面進入點 `<Nuxt />`

`<Nuxt/>` 是 `pages` 的進入點，位在 `/layouts/default.vue`

```vue {4}
<template>
  <div>
    <div>My nav bar</div>
    <Nuxt />
    <div>My footer</div>
  </div>
</template>
```

:::warning
`<Nuxt />` 這個元件，只可以使用在 `layouts` 裡面。
:::

## 嵌套路由 `<nuxt-child />`

nuxt 會自動幫你設置 `router`，當你頁面的資料夾只要建置好，`routes` 就會自動產生。

```js
-| pages/
---| parent/
------| child.vue
---| parent.vue
```

被設置出來的`routes` 就會是這樣

```js
;[
  {
    path: '/parent',
    component: '~/pages/parent.vue',
    name: 'parent',
    children: [
      {
        path: 'child',
        component: '~/pages/parent/child.vue',
        name: 'parent-child',
      },
    ],
  },
]
```

除了設置之外，也必須在**父層** 加上 `<nuxt-child>` (就像是 `vue-router` 的 `<router-view>`)

```vue {5}
<!-- parent.vue -->
<template>
  <div>
    <h1>I am the parent view</h1>
    <NuxtChild />
  </div>
</template>
```

## 路由導向 `<nuxt-link to="" />`

與 `vue-router` 的 `<router-link>` 是相同的使用方式，只要換成如下就可以了

```vue
<nuxt-link to="/about"></nuxt-lnik>
```

### lnik active class

當 **link** 被點擊時，都會自動增加 `class` 在被點擊的連結上：

- `.nuxt-link-exact-active`
  目前被點擊的 link 才會添加
- `.nuxt-link-active`
  所有經過路由的都會被添加 (類 麵包 shit)
