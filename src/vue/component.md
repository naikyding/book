---
title: Component 組件
date: 2020-09-24
sidebar: 'auto'
categories:
  - vue
tags:
  - component
  - 組件
  - 元件
---

所有功能切分、分類、容器或重復使用的區塊，都可以使用 component 來組件化。

:::warning
component 內的 **data (資料)**，都必須使用 **函式** 來避免資料被其它父層使用時汙染!
:::

## 註冊方式

### 全域註冊

這會使得在打包時，產生比較大的容量，因為所有組件被打包。
也不需要被特別引入!

```js
Vue.component('組件名稱', {
  /* 屬性設置 */
})
```

[屬性設置](#屬性設置)

---

### 區域註冊

註冊必須要在連立實體(**new Vue({})**)之前，才可以使用

```js
const componentA = {
  /* 屬性設置 */
}
const componentB = {
  /* 屬性設置 */
}
const componentC = {
  /* 屬性設置 */
}
```

#### 使用方式：

```js {7}
import ComponentA from './ComponentA.vue' // 引入組件

new Vue({
  el: '#app',

  // 掛入實體
  components: {
    /* 組件名稱 */
    componentA,
    componentB,
  },
})
```

:::warning 注意
在實體要新增時組件，是使用 `compoennts` 要加`s`
:::

## 屬性設置

```js
Vue.component('組件名稱', {
  // 除了 el 與 data 之外，其他屬性與.vue的用法完全一樣。
  template: `<div>組件內容</div>`,

  data: () => ({}),
  computed: {},
  methods: {},
  // ...以及其他選項、各種 lifecycle hooks
})
```

## 組件模組化

你也可以將多個模組集合到一個模組輸出

```js
const componentA = {}
const componentB = {}
const componentC = {}

const componentD = {
  components: {
    componentA,
    componentB,
    componentC,
  },
}
```
