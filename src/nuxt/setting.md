---
title: 專案設置
date: 2020-12-18
sidebar: 'auto'
categories:
  - nxut
tags:
  - sass
  - scss
  - ssr
  - spa
  - comfig
---

## 使用 `scss` 編譯

原始的專案，是沒有 `sass` 預處理，需要另外設定

```
npm install --save-dev sass sass-loader fibers
```

## 模式切換

預設是使用 `ssr` ，若你不使用的話，可以在**專案最外層**的 `nuxt.confit.js` 設定檔，調整如下：

```js {2}
export default {
  ssr: false,
}
```
