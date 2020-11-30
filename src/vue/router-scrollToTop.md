---
title: 滾動至頂
date: 2020-11-30
sidebar: 'auto'
categories:
  - vue
tags:
  - router
  - scrolltotop
---

當你 `spa` 在進行換頁，總會遇到滾動位置的問題。

這是你可以使用 `router` 的原生功能，不用另外寫功能!!
以下是最常使用到的方式 [更多方法](https://router.vuejs.org/guide/advanced/scroll-behavior.html)

```js {3-5}
const router = new VueRouter({
  routes: [...],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
```
