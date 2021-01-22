---
title: NUXT CROS 請求代理
date: 2021-01-08
sidebar: 'auto'
categories:
  - vue
  - nxut
tags:
  - proxy
  - cros
  - 代理
---

## 有些請求，在非同一個 `domain` 時，將會形成 **cros**

## Access to XMLHttpRequest at 'http://www.vscinemas.com.tw//VsWeb/api/GetLstDicCinema' from origin 'http://localhost:3000' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header contains multiple values 'http://www.vscinemas.com.tw/vsweb/, https://www.vscinemas.com.tw/vsweb/', but only one is allowed.

## 代理請求

- 下載套件
  ```
  npm i @nuxtjs/proxy
  ```
- 載入套件 && 設定代理

  ```js
  // nuxt.config.js
  modules: [
    '@nuxtjs/proxy'
  ],
  proxy: {
    '/VsWeb/api/*': {
      target: 'http://www.vscinemas.com.tw',
      changeOrigin: true
      }
  },
  ```

- 使用

  ```js
  mounted() {
      this.$axios.get('/VsWeb/api/GetLstDicCinema').then(({data})=>{
      console.log(data)
    })
  }
  ```
