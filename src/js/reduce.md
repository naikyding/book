---
title: 陣列累加 reduce
date: 2021-01-13
sidebar: 'auto'
categories:
  - js
tags:
  - array
  - object
  - 累加
  - 資料
  - 資料重新定義
---

[說明影片](https://www.youtube.com/watch?v=g1C40tDP0Bk&t=4s)

`reduce()` 是將陣列中的每項的 `值` 做累加，**由左至右**，傳入 `callback` 中，將陣列轉化成單一值。

```js
const array1 = [1, 2, 3, 4]
const reducer = (accumulator, currentValue) => accumulator + currentValue

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer))
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5))
// expected output: 15
```

## 語法

<img :src="$withBase('/img/reduce.png')" alt="reduce">

### **arr.reduce(**callback[(`accumulator`, `currentValue`, `currentIndex`, `array`)],`initialValue`**)**

- callback 參數：

  > 用來處理陣列中每個項目的函式，可以傳入四個參數

  - **accumulator 累加器**

    > 用來累積回呼函式回傳值的累加器 `accumulator`或`initialValue`
    > 累加器是上一次呼叫後，所回傳的累加數值。

  - **currentValue 正在處理的項目**

    > 原陣列目前所迭代處理中的元素。

  - **currentIndex 項目的索引**

    > 處理項目的索引，**但如果有設置** `initialValue` 會是由 0 開始
    > 不然就會是由 1 開始；

  - array 原始陣列 [option]
    > 被 `reduce` 的原始陣列

- **initialValue 累加器的初始值** [option]
  > 於第一次呼叫 `callback` 時要傳入的**累加器初始值**。若沒有提供初始值，**則原陣列的第一個元素將會被當作初始的累加器**。

---

:::danger
假如於一個空陣列呼叫 reduce() 方法且沒有提供累加器初始值，將會發生錯誤。
:::

## 加總範例

- 範例

  ```js
  let num = [1, 2, 3, 4, 5]

  num.reduce((acc, cur, idx) => acc + cur) // 15
  ```

- 它的迭代理處流程：

  由於沒有設置 `initialValue` (初始值)，故會從**陣列** 第一位當第一個 `accumulator` (累加器)

  **`accumulator` (累加器)** + **`currentValue`(迭代項目)** = **下一次的 `accumulator` (累加器)**

  ```js
  // a = 1, c = 2 => a = 3
  // a = 3, c = 3 => a = 6
  // a = 6, c = 4 => a = 10
  // a = 10, c = 5 => a = 15
  ```

## 資料操作範例

- 範例

  ```js
  let res = {
    status: '1',
    data: [
      { id: 1, name: 'niki' },
      { id: 2, name: 'nico' },
      { id: 3, name: 'nike' },
    ],
  }

  res.data.reduce(
    (acc, cur, idx) =>
      (acc = { ...acc, [cur.name]: `index=> ${idx} / ID=> ${cur.id}` }),
    {}
  )
  // { niki: "index=> 0 / ID=> 1", nico: "index=> 1 / ID=> 2", nike: "index=> 2 / ID=> 3" }
  ```

- 說明

  `accumulator` (累加器) 先帶入 `{}`

  - round1

    `acc = {}`

    `cur = { id: 1, name: 'niki' }`

    `idx = 0`

  - round2

    `acc = { niki: "index=> 0 / ID=> 1" }`

    `cur = { id: 2, name: 'nico' }`

    `idx = 1`

  - round3

    `acc = { niki: "index=> 0 / ID=> 1", nico: "index=> 1 / ID=> 2" }`

    `cur = { id: 3, name: 'nike' }`

    `idx = 2`

  :::tip
  這個方法，可以很方便來處理來自 api 的資料，把它變成你需求的格式!
  :::
