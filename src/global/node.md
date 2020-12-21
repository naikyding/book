---
title: 正確裝好你的 node
date: 2020-12-04
sidebar: 'auto'
categories:
  - node
  - nvm
tags:
  - 環境安裝
  - install
  - nvm
---

[參考](https://titangene.github.io/article/nvm.html)

## 說明

- ### nvm

  nvm 可以用來安裝 Node.js，如果有需求測試不同版本的話，也可以安裝多種版本、隨時切換不同版本的 Node.js。

  > nvm 的全名是 Node Version Manager。由於 Node.js 更新迅速，官方的軟體清單可能會無法安裝到最新的版本。

* ### node 開發時運行的環境

* ### npm 套件管理工具

## install

- ### nvm

  **安裝**

  - 一般安裝

  ```
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
  ```

  - zsh 安裝

  ```
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | zsh
  ```

  :::danger
  安裝完成後，重啟 item2
  :::

  **確認版本**

  ```
  nvm -v
  ```

- ### node

  **列出目前所有版本**

  > 可以選擇最新的 LTS 版本安裝

  ```
  nvm ls-remote
  ```

  **安裝版本**

  ```
  nvm install v14.15.1
  ```

  :::warning
  安裝完成不表示可以使用!! 需要再切換!
  :::

  **切換目前使用版本**

  ```
  nvm use v14.15.1
  ```

  **查看目前本機 node 列表**

  ```
  nvm ls
  ```

  **確認 node 版號**

  ```
  node -v
  ```
