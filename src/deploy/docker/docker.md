---
title: Docker
date: 2021-01-28
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

Docker 是個輕量級的虛擬化技術，底層使用 cgroup、chroot、namespace 實作，可以把你的應用程式連同環境一起打包，部屬的時候就不用再擔心環境的問題。

## 說明

下圖的例子就是使用 Docker 將三個已經打包起來的程式跑在不同的 container（容器）中，每個 container 都是一個獨立的環境，可以跑不同的系統跟安裝不同的資料庫、編譯器等等，意思就是說你可以 A 專案用 php5.3，另外一個用 php7，完全不會衝突。

<img :src="$withBase('/img/dockerImage.png')" >

## 安裝

- 安裝 [Docker](https://docs.docker.com/install/)
- 確認 docker 版號 `docker version`

## [名詞說明](./docker_info.md)

---

## [鏡像操作](./image.md)

---

## [容器操作](./container.md)
