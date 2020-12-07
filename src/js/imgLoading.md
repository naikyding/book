---
title: 圖片何時載入完成?
date: 2020-09-19
sidebar: 'auto'
categories:
  - js
tags:
  - image
  - loading
  - onload
---

## Image 加載事件

常常有一種可能，就是圖片較多，載入網頁時需要一點時間，這時就需要一些 loading 的效果，來替代圖片空白的時間。

### 創建 `<img>` 實體

你可以這樣做，先創立一個 `圖片實例`

```js
const newImg = new Image()

console.log(newImg)
// <img>
```

打印出來，會發現是一個 `<img>` 的標籤

### 加入 `src` 到實體

可以將後端取得的 `url` 加入這個 `<img>`

```js
newImg.src = resData.url
```

### 事件處理

這時就可以透過，圖片本身的事件，來決定 什麼階段需要執行什麼事情。

```js
// 加載完成
image.onload = () => {...}

// 加载错误
image.onerror = () => {...}

// 取消加载
image.onabort = () => {...}
```

[圖片到底載入了沒？](http://otischou.tw/notes/2017/01/01/detect-is-image-loaded.html)
