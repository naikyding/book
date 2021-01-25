---
title: npm
date: 2021-01-25
sidebar: 'auto'
categories:
  - npm
tags:
  - npm
  - node
  - 套件
  - 常用指令
---

## 常用指令

### 查看目前版本號

```bash
<plugins name> -v
```

### 安裝套件

```bash
npm install <套件名稱> <安裝位置>
```

安裝位置：

- `-g` 全域安裝
- `—-save` 專案內安裝 (package.json 的 "dependencies")

  與專案 produciton 與 develop 產生依附關係。

- `—save-dev` 專案內安裝(寫入 package.json 的 "devDependencies")

  **開發階段** 才會使用此套件，正式環境不存在。

### 顯示本機安裝的 npm 列表

```bash
npm list
```

### mac npm 全域安裝的路徑

```bash
/user/local/lib/node_modules
```

---

## 專案指令

### 初始化 `node` 專案

方便管理專案的所有相依的套件。

(新增 package.json)

```bash
npm init
```

### 安裝專案內所有套件

專案套件包 `node_module` 通常檔案過於龐大，所以通常不會上傳到 `git` ，所以**初次下載**專案時一定要先跑：

```bash
npm install
```

### 刪除套件內套件

```bash
npm uninstall <套件名稱>
```

### 看懂版本號

```bash
"@nuxtjs/axios": "^5.11.0",
```

- 5 : 主要版本號 (重大架構)
- 11 : 次要版本號 (此架構下的下功能調整)
- 0 :bug 修正

安裝版本(符號)：

- 箭頭 (^)

  這代表的意思是它會自動更新第二及第三數字的版本更新，例如 3.7.2 更新至 3.8.0，但是它並不會更新第一個主要版本號碼，因為通常第一個數字的更新都是屬於重大改版，隨意更新可能會導致 GG

- 蚯蚓(~)

  這個符號的意思代表著，我只更新 bug 的修正，也就是第三個數字。

- `latest` 永遠最新版本

  一般來講很少有開發者使用，因為這樣子會導致出現一些奇怪的問題。

  ```bash
  "hexo": "latest",
  ```
