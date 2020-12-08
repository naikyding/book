---
title: composition Api 生命週期
date: 2020-12-08
sidebar: 'auto'
categories:
  - vue
  - vue3
tags:
  - lifecyle
  - 生命週期
  - compositionApi
---

<img :src="$withBase('/img/vue3_lifecycle.png')" alt="lifecyle" width="700px">

## 在 setup 裡的小宇宙

這是一般 vue 生命週期 與 `compostion api 生命週期` 的對照使用方式：

- ### `beforeCreate` 👉 use `setup()`
  > Vue 初始化時期，在這邊的動作會在 vue 導入期就被執行，但在這個階段還拿不到 Vue Data，也沒有辦法使用 vue 裡面的 Methods, Watch, Computed...等。
- ### `created` 👉 use `setup()`
  > Vue 已被建立，在這個階段的動作可以拿到 Vue Data, Function, Watch, Computed...等，但網頁內容必須依靠 HTML Element 才能取得，這時 HTML 還沒準備好，所以拿不到元素內容。
- ### `beforeMount` 👉 `onBeforeMount`
  > 已經載入原始 HTML 至 Virtual DOM，但內容尚未透過 Vue 進行渲染。
- ### `mounted` 👉 `onMounted`
  > 已經透過 Vue 進行渲染 HTML，並且取代原本的元素內容。
- ### `beforeUpdate` 👉 `onBeforeUpdate`
  > 當 Vue 中的 Data 被改變或是強制讓 Vue Update（vm.\$forceUpdate），準備重新渲染頁面之前。
- ### `updated` 👉 `onUpdated`
  > 承上，當頁面已經完成渲染之後。
- ### `beforeUnmount` 👉 `onBeforeUnmount`
  > 在 Vue 被摧毀前
- ### `unmounted` 👉 `onUnmounted`
  > 所有綁定、事件監聽、Watch 與渲染至目標的 HTML DOM…等等皆移除
