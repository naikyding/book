---
title: 本地端 https
date: 2020-01-12
sidebar: 'auto'
categories:
  - vue
  - nxut
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

## 掛載入 nuxt 專案

在 `nuxt.config.js` 內新增方法，如下：(意思就是將為 `server` 內的兩個檔案為憑證)

```js {5-10}
import path from 'path'
import fs from 'fs'

export default {
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'localhost-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 'localhost.pem')),
    },
  },
}
```

再重新啟動專案，這個時候本地就會是 `https://127.0.0.1:3000/`
