---
title: 容器操作
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

## 啟動 `container`

容器啟動有兩種方式：

- 一種是基於 `image` 新建一個容器並啟動
- 一個是將終止狀態的容器啟動。

### 新建並啟動 `docker run`

```bash
docker run hello-world
```

指定運行

```bash
docker run ubuntu:18.04 /bin/echo 'Hello world'
Hello world
```

:::tip
当利用 `docker run` 来創建容器时，Docker 在后台运行的标准操作包括：

- 检查本地是否存在指定的镜像，不存在就从 `dockerHub` 下载
- 利用镜像创建并启动一个容器
- 分配一个文件系统，并在只读的镜像层外面挂载一层可读写层
- 从宿主主机配置的网桥接口中桥接一个虚拟接口到容器中去
- 从地址池配置一个 ip 地址给容器
- 执行用户指定的应用程序
- 执行完毕后容器被终止
  :::

### 啟動已終止的容器 `docker container start`

### 進入容器 `docker exec`

是 Docker 內建的命令。下面示範如何使用該命令

```bash
docker exec -it vuecli4 /bin/bash/

docker exec -it vuecli4 bash   # 也行
```

進入 `vuecli4`容器 (正在運行的容器)，使用 `bash` 命令操作

### 退出容器 `exit`
