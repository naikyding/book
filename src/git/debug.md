---
title: GIT 常見問題
date: 2021-02-08
categories:
  - git
tags:
  - bug
---

## does not have a commit checked out

git 提交的时候报错：does not have a commit checked out
fatal: adding files failed

- 方式一 删除暫存

```bash
git rm -r -f --cached ./
```

- 方式二
  另一種可能性，是這個專案已經有兩個 git 的追蹤，所以衝突到，這時就需要刪除多餘的 git

  ```bash
  cd [file name]
  rm -rf .git # 刪除 .git 檔案
  ```
