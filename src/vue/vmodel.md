---
title: v-model
date: 2020-12-04
sidebar: 'auto'
categories:
  - vue
tags:
  - vmodel
  - 雙向綁定
  - 資料
  - 綁定
  - 修飾符
---

## v-model 修飾符

- ### `.lazy`

  一般來說，只要綁定 `v-model` 的物件，只要資料一變動，就會狂更新
  `lazy` 只有在離開目前的物件，才會**同步資料**!

  ```html
  <input v-model.lazy="msg" />
  ```

- ### `.trim`

  去頭尾的空白、空格，中間段不會去除

  ```html
  <input v-model.trim="msg" />
  ```

- ### `.number`

  輸入的資料為 `數字` 型別 (一般不指定的話，都是 `字串`)

  ```html
  <input v-model.number="age" type="number" />
  ```
