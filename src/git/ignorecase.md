---
title: 檔名忽略大小寫
date: 2020-10-12
categories:
  - git
tags:
  - ignorecase
---

[關於檔名的大小寫](https://gitbook.tw/posts/2018-06-05-case-sensitive)

> 在 Git 裡如果只有檔名大小寫改變而沒有改變內容的話，git status 指令不會感受到有任何的變化

首先，這件事跟作業系統的檔案系統（File System）有關，以我自己的電腦（macOS High Sierra 10.13.4）來說，檔案系統是無視檔名大小寫的差別的（case insensitive），所以當我執行下面這個指令：

```
$ rm CAT1.HTML
```

雖然刪的是大寫檔名，但會把小寫檔名的 cat1.html 給刪掉。

## 修改 git 設定檔

可以籍由修改設定檔來達到是否可以判別大小寫

```
$  git config --local core.ignorecase false
```

這樣一來就可以把該專案的「忽略大小寫」設定改成 true。如果想改成全域設定，只要把 --local 改成 --global 就行了。設定檔一改完立馬就有效果了：
