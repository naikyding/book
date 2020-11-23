---
title: 暫存目前工作狀態
date: 2017-12-28
categories:
  - git
tags:
  - git
  - stash
---

### 暫存目前工作狀態

常常會有一種情況發生，手邊工作進行到一半，臨時要進行別的工作，這時就可以使用 `stash`

## 暫存目前工作狀態 `stash`

```
git stash
```

:::danger
未加入追蹤的檔案，無法被 `stash` ，需要加上 `-u` 參數。

```
git stash -u
```

:::

這個時候，沒有 commit 的內容將會被儲存起來(如下)
<img :src="$withBase('/img/gitStash.png')" >

> 最前面的 stash@{0} 是這個 Stash 的代名詞，而後面的 WIP 字樣是「Work In Progress」，就是工作進行中的意思。Stash 可以放很多份

## 提出暫存 `pop`

- 提出所有暫存

```
git stash pop
```

- 提出指定暫存檔案

```
git stash pop stash@{0}
```
