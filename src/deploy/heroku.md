---
title: Heroku 部署
date: 2021-01-20
sidebar: 'auto'
categories:
  - heroku
tags:
  - github
  - heroku
  - node
  - nuxt
---

heroku 是一個雲端平台，給你用來部屬 **動態程式語言** 的平台，所以你可以很輕鬆的部署上你的 **node** 專案。

## 參考

- [Deploy Nuxt on Heroku](https://nuxtjs.org/docs/2.x/deployment/heroku-deployment)
- [Deploy NUXT on Heroku Video1](https://www.youtube.com/watch?v=c4_xPM7zSAY)

## Heroku

- 註冊帳號 [HEROKU](https://dashboard.heroku.com/) 網站
- 安裝 heroku cli

---

## NUXT

### 創建的 **heroku** app (二擇一)

- heroku 創造：

  - [Create new app](https://dashboard.heroku.com/apps)
  - `heroku login`
  - `heroku git:remote -a nuxt-deploy-heroku` 連結 heroku git

- 在專案內創造：

  ```bash
  heroku create <yourAppName>
  ```

創建完成，會回覆一個 [heroku.com](http://heroku.com) 的 url ，可以看到你的 app 所在的地方。

或者，你也可以輸入 `heroku open` 會自動開始 app 的 link。

---

### 設置 heroku 環境變數

首先，我們希望 app 可以監聽 `0.0.0.0` 埠，且是在 `production` (正式)的模式下監聽。

```bash
heroku config:set HOST=0.0.0.0
heroku config:set NODE_ENV=production
heroku config:set NPM_CONFIG_PRODUCTION=false
```

當然，你也可以在 heroku dashboard 的 setting 進行設置。
:::tip
**設置完成後，查看 heroku `config` 設置**

```bash
heroku config
```

:::

---

### 建立 `Procfile` 檔案

這是供 `heroku` 明白的命令檔案。

```bash
web: nuxt start
```

這是指示 server `build` 後，要運行的命令，運行 `nuxt star`

---

### 部屬 `heroku`

- 如果在 `master`

  ```bash
  git push heroku master
  ```

- 如果在其它的支線

  需要指向到 `heroku` 的 `master` 這是它預設的部屬支線。

  ```bash
  git push heroku develop:master
  ```

---

## 例外處理

### heroku 卡在 build

某些時候，為何會卡在 `build` 一直 **pendding** 狀態，這樣會讓你的部署進不了下一步。(會持續 pedding 中 很久)。 ⇒ 這個時候，你必預要中止這個 `build` ，你可以這樣做：

- 安裝 heroku 套件

  ```bash
  heroku plugins:install heroku-builds
  ```

- 獲取最近 `build` 的列表

  ```bash
  heroku builds -a <YOUR_APP_NAME>
  ```

  就會出現，目前的列表：

  ![HEROKU%20NUXT%20PROJECT%2048c53277ea4b444387406f8b94c6f281/_2021-01-20_1.29.32.png](HEROKU%20NUXT%20PROJECT%2048c53277ea4b444387406f8b94c6f281/_2021-01-20_1.29.32.png)

  第一行將是您當前正在運行的構建，第一列是構建 ID。

- 取消列表工作

  ```bash
  heroku builds:cancel <BUILD_ID> -a <YOUR_APP_NAME>
  ```

  回覆：Stopping build 5c3967d1-fbdb-4f73-81de-bab1063e5a2b... done
