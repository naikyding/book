---
title: 鏡像操作
date: 2021-01-29
sidebar: 'auto'
categories:
  - dokcer
tags:
  - 部署
  - ci
  - deploy
  - container
  - image
---

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

- 列出特定鏡像
  ```bash
  docker image ls ubuntu:18.04
  ```

### 刪除本地鏡像 `docker image rm`

```bash
docker image rm [选项] <镜像1> [<镜像2> ...]
docker rmi [image id] # 簡寫
```

### 建立 `image` (打包)

```bash
docker image build -t [鏡像名稱]:[版本號] .

docker build -t [鏡像名稱]:[版本號] . # 簡寫
```

- `-t` 標籤 名稱:版本號
- `.` 當前目錄建立 (非常重要，一定要加上)

### 運行容器命令

```bash
docker run -it --rm ubuntu:18.04 bash

docker run node
```

- `it`：这是两个参数，一个是 `i`：交互式操作，一个是 `t` 终端。我们这里打算进入 `bash` 执行一些命令并查看返回结果，因此我们需要交互式终端。
- `-rm`：这个参数是说容器退出后随之将其删除。默认情况下，为了排障需求，退出的容器并不会立即删除，除非手动 `docker rm`。我们这里只是随便执行个命令，看看结果，不需要排障和保留结果，因此使用 `-rm` 可以避免浪费空间。
- `ubuntu:18.04`：这是指用 `ubuntu:18.04` 镜像为基础来启动容器。
- `bash`：放在镜像名后的是 **命令**，这里我们希望有个交互式 Shell，因此用的是 `bash`。

- `-d` 在背景運行容器且 show 出 container id。
  (Run container in background and print container ID)

- `-p` 將 `container` 的端口與外部接上
  (Publish a container's port(s) to the host)

- `-v` 標記也可以從主機掛載單個檔案到容器中
