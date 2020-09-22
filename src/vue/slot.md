---
title: slot 複合式組件
date: 2020-09-20
sidebar: 'auto'
categories:
  - vue
tags:
  - slot
  - v-slot
  - 組件
  - 元件
---

::: details 參考影片

<iframe width="560" height="315" src="https://www.youtube.com/embed/Tn1X7jJNoL4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/TDz6DPZeO0M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
:::

## 概念

在  compoent 中 `<slot>`提供了一個`插槽`的概念，可以讓你先預留一個位子，後續父層使用時將內容**插入**。

## 基本使用

- 在元件中，設置 `<slot>`
- 在父層引用的標籤中，寫上想插入的內容

**父層使用 BtoomNav 元件**

```vue
<BtoomNav> 你想插入的內容 </BtoomNav>
```

**BtoomNav 元件**

```vue
<template>
  <div>
    <span>這是元件的內容</span>
    <slot></slot> // 這裡是預留位子
  </div>
</template>
```

**實際呈現** 渲染時 `<slot>` 就會被替換成插入的內容

```vue {4}
<template>
  <div>
    <span>這是元件的內容</span>
    你想插入的內容
  </div>
</template>
```

::: warning 注意
如果 `<BtoomNav>` 內沒有用 `<slot>` 標籤來預留位子，那 `<BtoomNav>`我會被丟棄`</BtoomNav>` 標籤就算有插入內容，都會被丟棄!!
:::

## 編譯範圍
