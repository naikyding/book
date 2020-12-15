---
title: directive 客製化指令 v-?
date: 2020-12-07
sidebar: 'auto'
categories:
  - vue
  - vue3
tags:
  - ref
  - 綁定
  - 客製指令
  - v-
  - directive
---

## VUE 指供客製化組件 `v-`

vue 可以提供使用者來自定義，客製化的指令比如 `v-?`，像一般的 `v-html` `v-show` 就是 vue **預先定義**的。

最常被 **定義** 的指令，就是頁面載入後，**自動聚焦** 在 `<input />`

### 全域定義-

想要在**全域** 使用這個`客製指令`，就必須在 `vue` 掛載上元素前，將方法寫入：

- **`createApp` 後，掛載 `客製方法`**

  `.directive(<指令名稱>, { // 哪個生命周期，執行什麼 })`
  這時的生命週期，就與一般的生命周期一樣，不用`onMounted`

  ```js
  const app = Vue.createApp({})
  // 註冊一個 全域的指令 叫做 `v-focus`
  app.directive('focus', {
    // 當 mounted 時，會加入這個元素
    mounted(el) {
      console.log(el) // <input type="text" />

      el.focus() // Focus the element
    },
  })
  ```

  :::tip
  生命週期函式：

  - 第一個參數： 使用這個`指令`的元件
  - 第二個參數： 這個`指令`所傳入的**值** ，ex:`v-focus="這是傳入的值"`
    :::

- **使用方式**

  ```html
  <input v-focus type="text" />
  ```
