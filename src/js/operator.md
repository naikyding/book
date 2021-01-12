---
title: ...Operator
date: 2020-09-20
sidebar: 'auto'
categories:
  - js
tags:
  - operator
  - 擴展運算子
---

## 說明

### ...擴展運算子

ES6 允許將數組表達式或字符串之類的可迭代對象擴展到需要零個或多個參數（用於函數調用）或元素（用於數組文字）的位置，或者將對象表達式擴展到零位置期望有更多或更多的鍵/值對（用於對象文字）。

## 展開 / 拆解功能

會將**目標物外層拆掉**，變成把內容用`,` 串起，比如 `num, num, num`

```js
var data = [1, 2, 3, 4]
console.log(...data) // 1 2 3 4

// 等同 console.log(1, 2, 3, 4)

console.log(...['a', 'b']) // 'a' 'b'
```

### 字串使用

將拆解每一個字元

```js
let str = 'string'
console.log(...str) // console.log(s,t,r,i,n,g)
```

### 引數使用

```js
const data = [1, 2, 3]

function plus(num1, num2, num3) {
  return num1 + num2 + num3
}

// 使用
plus(...data) // 6
// plus(1, 2, 3)
```

## 複製功能

可將目標物複製到指定變數。

### 複製陣列

(類 **淺拷貝**，只有拷貝一層)

```js
let data = [1, 2, 3]
let newData = [..data]
console.log(newData) // [1, 2, 3]
```

### 複製物件

(類 **淺拷貝**，只有拷貝一層) **傳值**

```js
let user = { id: 1, name: 'naiky' }
let newUser = { ...user }
console.log(newUser) //  { id: 1, name: 'naiky' }

newUser.id = 2

// 原物件不會被改變
console.log(user.id) // 1
```

```js
let user = { id: 1, name: { first: 'naiky', last: 'ding' } }
let newUser = { ...user }

newUser.name.first = 'NIKI'

// 第一層會 傳值，第二層是值址 (第二層依舊會被改變)
console.log(user.name.first) // NIKI
console.log(newUser.name.first) // NIKI
```

:::warning
**第一層是傳值**，**第二層是傳值**!! 這點很重要!!

```js
let data = [1, 2, 3, 4]
let data2 = [data]

data2 === data // false
```

```js
let data = [
  { id: 1, name: 'nico' },
  { id: 2, name: 'NIKE' },
  { id: 3, name: 'NIKI' },
]
let newData = [...data]

data === newData // false
data[0] === newData[0] // true
```

:::

## 組合功能

無擴散的語法，使用現有陣列作為它的一個部分創建一個新的數組，數組文本語法不再足夠和命令性代碼必須使用的組合來代替 push()，splice()，concat()等。隨著擴展語法此變得更加簡潔的：

```js
const parts = ['shoulders', 'knees']
const lyrics = ['head', ...parts, 'and', 'toes']
//  ["head", "shoulders", "knees", "and", "toes"]
```
