---
title: cherry-pick 別支線的commit 拿來拼
date: 2020-12-10
sidebar: 'auto'
categories:
  - git
tags:
  - cherryPick
  - cherry
  - pick
  - commit
  - git
---

[參考：Cherry-pick - 選擇某個分支的某些提交記錄](https://cythilya.github.io/2018/05/30/git-cherry-pick/)

## 複製合拼 `cherry-pick`

某些時候，你在 `Feature` 開發了且 `commit` **功能一**、**功能二**、**功能三**，這個時候必須先將 **功能一**、**功能二** 先並入 `master` 時，你可以這樣做!!

### 把其它`分支`的 `commit` 拿來合拼

```
    功能一  功能二  功能三
----o-----o------o Feature
          |
          ∨
----------o master
```

## 使用方法

`git cherry-pick <commit code>`

```
git cherry-pick fd23e1c
```

也可以一次拿多個 `commit` 來合拼

```
git cherry-pick fd23e1c 6a498ec f4f4442
```

合拼完成 `master` 就多了 **功能一**、**功能二**，而 `Feature` 還是原本的支線狀態!

```
    功能一  功能二  功能三
----o-----o------o Feature

----------o----o-----o master
               功能一  功能二

```

## 復制過來，但不合拼

上面的作法是，復制 `commit` 過來，直接拼上去，你也可以選擇複制過來，但**先不合拼**，你統一 `commit` 合拼的方式，在指令的最後加上 `--no-commit`

```
git cherry-pick 6a498ec --no-commit
```

然後，你再自已做上這筆 `commit`
