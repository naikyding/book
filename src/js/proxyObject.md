---
title: proxy 物件資料代理
date: 2020-12-17
sidebar: 'auto'
categories:
  - js
tags:
  - proxy
  - object
  - reactive
---

## Proxy ??

<img :src="$withBase('/img/proxyApi.png')" alt="proxyApi">

`proxy` 可以創建一個 **原資料** 的`虛擬代理` (像是分身一樣)，你可以對這個 **分身** 進行 `讀取`、`重寫` 或 `攔載行為`… 的基本操作。
:::tip
new Proxy(`target`, `headler`)

- **target**
  你要代理的目標 (`object` , `array`)
- **headler**
  針對目標，執行的方法或攔載操作
  :::

### 基本範例

如下，`headler` 執行方法可以為空，那它就是單純的讀取原本的資料。

```js {8}
const target = {
  name: 'naiky',
  age: 22,
}

const headler = {}

const proxyData = new Proxy(target, headler)
```

```js
console.log(proxyData.name) // naiky
console.log(proxyData.age) // 22
```

### 讀取時執行 (攔載方法)

我們可以在 `headler` 上，新增**讀取** 資料時攔載的方法`get()`。在每次讀取資料時，都會被調用執行!
:::tip
get(`target`, `prop`, `receiver`) {
// todo
}

- **target** 原本目標的物件
- **prop** 目前讀取物件的`索引`
- **receiver** 目前這個代理的物件本體
  :::

```js
const target = {
  msg1: 'Hello',
  msg2: 'world',
}

const headler = {
  get(target, prop, receiver) {
    return '被攔載了!'
  },
}

const proxyData = new Proxy(target, headler)
```

```js
console.log(proxyData.msg1) // 被攔載了!
console.log(proxyData.msg2) // 被攔載了!
```

上面的範例，可以看到在 `headler` 方法中設定不管你讀取什麼東西，我只會 return 同樣的文字；
`get()` 作為在讀取`代理資料`前所執行的**函式**，大多可以被使用在 **攔載** 的功能或**預先處理**。

---
