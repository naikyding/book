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

## 名詞說明

### Dockerize ⇒

所謂的 dockerize 就是把你的應用程式 Docker 化，把你的程式跟環境包成一個 image，部屬的時候就直接使用這個 image 不需要額外安裝其他東西

### Repository 倉庫 ⇒

倉庫分為公開倉庫（Public）和私有倉庫（Private）兩種形式。
最大的公開倉庫是 [Docker Hub](https://hub.docker.com/)，存放了數量龐大的映像檔供使用者下載。 大陸的公開倉庫包括 [Docker Pool](http://www.dockerpool.com/) 等，可以提供大陸使用者更穩定快速的存取。
當然，使用者也可以在本地網路內建立一個私有倉庫。

:::warning
註：Docker 倉庫的概念跟 Git 類似，註冊伺服器可以理解為 GitHub 這樣的託管服務。
:::

### Image 映象檔 (鏡像) ⇒

在 Docker Hub 上有很多官方的 image 可以直接拿來用。
所謂的 image 就是一個已經打包好的環境，譬如說 Debian 或是 Ubuntu + Node.js 等等，需要這個環境時就可以直接把這個 image pull 下來用；但還沒有跑起來，所以就只是一堆檔案。

### Container 容器 ⇒

則是把 image 跑起來之後產生的 `實例`，它可以被啟動、開始、停止、刪除。每個容器都是相互隔離的、保證安全的平台。
可以把容器看做是一個簡易版的 Linux 環境（包括 root 使用者權限、程式空間、使用者空間和網路空間等）和在其中執行的應用程式。
:::warning
註：映像檔是唯讀的，容器在啟動的時候建立一層可寫層作為最上層。
:::

---

## 鏡像操作

### 拉取鏡像 image

```bash
docker pull [OPTIONS] NAME[:TAG|@DIGEST]
docker pull <名稱>:<版本>
docker pull ubuntu:18.04
```

### 列出本機鏡像列表 `docker image ls`

```bash
docker image ls
```

列出特定鏡像

```bash
docker image ls ubuntu:18.04
```

### 刪除本地鏡像 `docker image rm`

```bash
docker image rm [选项] <镜像1> [<镜像2> ...]
```

### 運行容器命令

```bash
docker run -it --rm ubuntu:18.04 bash
```

- `it`：这是两个参数，一个是 `i`：交互式操作，一个是 `t` 终端。我们这里打算进入 `bash` 执行一些命令并查看返回结果，因此我们需要交互式终端。
- `-rm`：这个参数是说容器退出后随之将其删除。默认情况下，为了排障需求，退出的容器并不会立即删除，除非手动 `docker rm`。我们这里只是随便执行个命令，看看结果，不需要排障和保留结果，因此使用 `-rm` 可以避免浪费空间。
- `ubuntu:18.04`：这是指用 `ubuntu:18.04` 镜像为基础来启动容器。
- `bash`：放在镜像名后的是 **命令**，这里我们希望有个交互式 Shell，因此用的是 `bash`。
