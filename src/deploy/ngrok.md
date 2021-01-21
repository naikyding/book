---
title: Ngrok 本機對外服務
date: 2021-01-21
sidebar: 'auto'
categories:
  - ngrok
tags:
  - localhost
  - ssl
  - https
  - http
  - demo
  - demo站
---

<img :src="$withBase('/img/ngrok.png')" >

## Feature

- 本機服務轉為**對外開放** (方便 demo 網站給 boss)
- 承上，本機 `api` 對外
- 本機使用 `https` ，方便開發階段 `request`

## 使用

### install

```bash
sudo npm install --unsafe-perm -g ngrok
```

### 轉發本地 server

```bash
ngrok http <prot>
```

## 實例

- 啟動本地 `nuxt` 專案 (預設會開 3000 prot)
  ```bash
  npm run dev
  ```
- 由 `ngrok` 轉發對外
  ```
  ngrok http 3000
  ```
