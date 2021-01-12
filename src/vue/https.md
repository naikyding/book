---
title: 本地端 https
date: 2020-01-12
sidebar: 'auto'
categories:
  - vue
tags:
  - ssl
  - https
  - http
  - 憑証
---

很多時候，使用 **第三方服務** ，端基於安全性 **請求** 必須要是 `https`

## 產生本地憑證套件 mkcert

- 安裝套件

  ```
  brew install mkcert
  brew install
  ```

## 產生專案憑證

- 專案產生**憑證**
  **在專案的路逕上，執行：**

  ```
  mkcert localhost
  ```

  產生以 `localhost` 為域名的 **憑證**，會在專案最外層產生：

  - `localhost-key.pem`
  - `localhost.pem`

## 設定專案 `config`

在 `vue.config.js` 內新增方法，如下：(意思就是將為 `server` 內的兩個檔案為憑證)

```js {11-20}
const path = require('path')
const fs = require('fs')

module.exports = {
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },

    https: {
      key:
        process.env.NODE_ENV === 'development'
          ? fs.readFileSync(`${__dirname}/localhost-key.pem`)
          : '',
      cert:
        process.env.NODE_ENV === 'development'
          ? fs.readFileSync(`${__dirname}/localhost.pem`)
          : '',
    },
  },
}
```

再重新啟動專案，這個時候本地就會是 `https`

## chrome 不信任網站問題

[Nuxt 本地端加載 HTTPS](https://medium.com/@jedy05097952/nuxt-%E6%9C%AC%E5%9C%B0%E7%AB%AF%E5%8A%A0%E8%BC%89-https-516668bf103)
