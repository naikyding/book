---
title: Proxy 代理設定
date: 2021-03-09
sidebar: 'auto'
categories:
  - vue
  - proxy
tags:
  - proxy
  - 代理
---

## 代理請求

有些請求-在非同一個-domain-時-將會形成 `cros`
在 `vue.config.js` 設定後，之後打 api 只要前綴`/api`就會是 `target`

```js {2-12}
// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://giocoplus.gf-gaming.com/',
        changeOrigin: true,
        pathRewrite: {
          '/api': '',
        },
      },
    },
  },
}
```
