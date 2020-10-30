---
title: Swagger UI
date: 2020-10-30
sidebar: 'auto'
categories:
  - swagger
tags:
  - yaml
  - yam
  - swagger
  - openApi2.0
  - swaggerUi
---

[Swagger ui](https://swagger.io/tools/swagger-ui/) 是一個工具讓你的後端 API 接口可以更視覺化被呈現，透過 Swagger UI 工具可以產生 HTML && CSS && Javascript 產生網頁版的 API 靜態文件。

![swaggerEdit](/img/swaggerui.png)

## 建置專案內容

- 開啟專案資料夾
- 初始化專案
  ```
  npm init
  ```
- 安裝 `swagger-ui-dist`
  ```
  npm install --save swagger-ui-dist
  ```
- 將 `node_module/swagger-ui-dist` 的檔案全部，copy 到最外層。
  ![](/img/settingSwaggerUi.png)

## 操作與說明

- 首頁入口，即 `index.html`
- 另新增`yml`為引入首頁的 openApi 文件
- 範列[可參考](https://naikyding.github.io/apiDoc/)
