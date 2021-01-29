---
title: 名詞說明
date: 2021-01-29
sidebar: 'auto'
categories:
  - dokcer
tags:
  - 部署
  - ci
  - deploy
  - container
  - 容器
---

### Dockerize ⇒

所謂的 `dockerize` 就是把你的應用程式 Docker 化，把你的程式跟環境包成一個 `image`，部屬的時候就直接使用這個 `image` 不需要額外安裝其他東西

### Repository 倉庫 ⇒

倉庫分為公開倉庫（Public）和私有倉庫（Private）兩種形式。
最大的公開倉庫是 [Docker Hub](https://hub.docker.com/)，存放了數量龐大的映像檔供使用者下載。 大陸的公開倉庫包括 [Docker Pool](http://www.dockerpool.com/) 等，可以提供大陸使用者更穩定快速的存取。
當然，使用者也可以在本地網路內建立一個私有倉庫。
:::warning
註：Docker 倉庫的概念跟 Git 類似，註冊伺服器可以理解為 GitHub 這樣的託管服務。
:::

### image 映象檔 (鏡像) ⇒

在 Docker Hub 上有很多官方的 `image` 可以直接拿來用。
所謂的 `image` 就是一個已經打包好的環境，譬如說 Debian 或是 Ubuntu + Node.js 等等，需要這個環境時就可以直接把這個 `image pull` 下來用；但還沒有跑起來，所以就只是一堆檔案。

### container 容器 ⇒

則是把 image 跑起來之後產生的 `實例`，它可以被啟動、開始、停止、刪除。每個容器都是相互隔離的、保證安全的平台。
可以把容器看做是一個簡易版的 `Linux` 環境（包括 root 使用者權限、程式空間、使用者空間和網路空間等）和在其中執行的應用程式。
:::warning
註：映像檔是唯讀的，容器在啟動的時候建立一層可寫層作為最上層。
:::
