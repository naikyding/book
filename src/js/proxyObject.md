---
title: Proxy 物件資料代理
date: 2020-12-17
sidebar: 'auto'
categories:
  - js
tags:
  - proxy
  - object
  - reactive
---

## 說明

<img :src="$withBase('/img/proxyApi.png')" alt="proxyApi">

`proxy` 可以創建一個 **原資料** 的`虛擬代理` (像是分身一樣)，不直接針對`物件`的本身做操作!!
但你可以對這個 **分身** 進行 `讀取`、`重寫` 或 `攔載行為`… 的基本操作。

:::tip
new Proxy(`target`, `headler`)

- **target**
  你要代理的目標 (`object` , `array`)
- **headler**
  針對目標，執行的方法或攔載操作
  :::

### 範例

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

## 範列

### [純讀取代理](#範例)

---

### 基本範例 (默認資料)

當內部沒有這個**資料**，但你又想要有默認資料時，可以這麼做

```js
const headler = {
  get(target, prop) {
    return prop in target ? target[prop] : 999
  },
}

const proxy = new Proxy({}, headler)

proxy.aa = 1
proxy.bb = undefined

console.log(proxy.aa, proxy.bb) // 1  undefined

console.log(proxy.cc) // 999
console.log(proxy.cc in proxy) // false
```

`cc` 在 `proxy` 中是不存在的，但你想取值，還是有**默認值**的!!

---

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

```js {7-9}
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

### 驗證 (設置資料前 攔截)

設置`年齡` 前，先進行**驗證** ，如果超過 `100` 、`非整數`，都是無法設置成功

:::tip

set(`target`, `prop`, `value`) {
// todo
}

- **target**
  原本目標的物件
- **prop**
  目前讀取，所屬物件的`索引`
- **value**
  要設置的`值`
  :::

```js {2-10}
const headler = {
  set(target, prop, value) {
    if (prop === 'age') {
      if (value > 100) {
        throw '這是無效的年齡設置'
      } else if (!Number.isInteger(value)) {
        throw '年齡必須為整數哦!'
      } else target[prop] = value // 必須加上 設置方法，不然還是無法寫入資料
    }
  },
}
const person = {
  name: 'naiky',
  age: 34,
}

const proxyPerson = new Proxy(person, headler)
```

```js
proxyPerson.age = 999 // Uncaught 這是無效的年齡設置
proxyPerson.age = 12.3 // Uncaught 年齡必須為整數哦!
proxyPerson.age = 40 // 40
```

:::danger
除非，不希望將`值` 設置進物件內，不然驗證通過後，都應該將`值`設置至物件。
:::

## [更多應用](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
