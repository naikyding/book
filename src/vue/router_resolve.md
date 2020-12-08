---
title: 解析 router url
date: 2020-12-08
sidebar: 'auto'
categories:
  - vue
tags:
  - route
  - resolve
---

## 解析 router 完整網址 `router.resolve()`

當你在 `vue` 操作 `router` 常常是片段的，比如

```js
this.router.push({{ path: `/courses/${id}` }})
```

如果這時你想要將網址 **另開分頁** 你該怎麼做，可以抓到完整的`網址` ?

**你可以這樣做**

```js {1}
const url = this.router.resolve({ path: `/courses/${id}` }) // 此時url 是一個完整的 網址資訊
window.open(url.href) // 取得完整的 href
```
