---
title: TAG
date: 2020-09-16
sidebar: 'auto'
categories:
  - git
tags:
  - tag
  - git
---

## 使用標籤

如果加標籤為現在的位置，就不需要 commit code

### **輕量標籤（lightweight tag）**

```sh
git tag tagMsg <commit code>
```

### **有附註標籤（annotated tag）**

可以看到詳細上標籤時間

```sh
git tag big_cats 51d54ff -a -m "Big Cats are comming"
```

> 那個 -a 參數就是請 Git 幫你建立有附註的標籤，而後面的 -m 則是跟我們在做一般的 Commit 一樣輸入的訊息，如果沒有使用 -m 參數，會自動跳出一個 Vim 編輯器出來。而在 SourceTree 上要加上有附註的標籤也很容易，跟一般的輕量標籤一樣的流程，但不要勾選「Lightweight tag（not recommended）」的選項就好了。
