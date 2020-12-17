---
title: number 數字處理
date: 2020-09-19
sidebar: 'auto'
categories:
  - js
tags:
  - number
  - math
---

## number 處理

| 方式                       | 說明                             |
| -------------------------- | :------------------------------- |
| isNaN()                    | 是否不是數值                     |
| .toFixed()                 | 四捨五入(指定小數點位置)字串回傳 |
| .toPrecision()             | 四捨五入至直接位數(包含小數點)   |
| Number.isInteger(`number`) | 判斷是否為整數                   |

```js
var num = 123.4

isNaN(num) // false

num.toFixed() // 123
num.toFixed(2) // 123.40 (小數點兩位數)

num.toPrecision() // 123.4
num.toPrecision(3) // 123
```

## Math 數字處理

| 方式          | 說明                                 |
| ------------- | :----------------------------------- |
| Math.random() | 隨機產生 0(包含)-1(不包含)之間的數字 |
| Math.floor()  | 無條件捨去 (小於指定數字的最大整數)  |
| Math.ceil()   | 無條件進位 (大於指定數字的最大整數)  |
| Math.round()  | 四捨五入                             |

```js
// 隨機產生 1-10

var num = Math.random() // 產生 0 - 1
num = num * 10 // 放大十倍 => 0 - 9.99
num = num + 1 // 1 - 10.99
Math.floor(num) // 無條件捨去

// 速寫
Math.floor(Math.random() * 10 + 1)
```

```js
// Math.ceil()

console.log(Math.ceil(0.95))
// expected output: 1

console.log(Math.ceil(4))
// expected output: 4

console.log(Math.ceil(7.004))
// expected output: 8

console.log(Math.ceil(-7.004))
// expected output: -7
```

```js
//  Math.floor()

console.log(Math.floor(5.95))
// expected output: 5

console.log(Math.floor(5.05))
// expected output: 5

console.log(Math.floor(5))
// expected output: 5

console.log(Math.floor(-5.05))
// expected output: -6
```
