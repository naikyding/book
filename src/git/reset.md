---
title: remote 遠端回復版本
date: 2017-12-28
categories:
  - git
tags:
  - git
  - reset
  - 回復
  - 遠端回復
  - remote
---

## 回復之前版本

此為不保留的回復方式

```sh
git reset --hard <commit id>
```

## 更新遠端

此命令為強制上傳，忽略舊版本覆蓋較新版本的提醒!

```sh
git push -f
```
