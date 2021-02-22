---
title: Array
date: 2020-09-22
sidebar: 'auto'
categories:
  - js
tags:
  - array
  - object
---

## 陣列處理

| 方法                 |                      簡述                      | 範例                                                                    | 說明                                                                                    | 回傳                             |
| -------------------- | :--------------------------------------------: | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | -------------------------------- |
| .push()              |                  陣列末端新增                  | **array.push(** `val1, val2 ...valN` **)**                              | 從陣列最末新增 value(一個/多個)。                                                       | array 更新後長度                 |
| .pop()               |                  陣列末端刪除                  | **array.pop**()                                                         | 陣列中最後的 value 刪除                                                                 | 被刪除的值                       |
| .unshift()           |                  陣列首位新增                  | **array.unshift(** `val1, val2, val3...valN` **)**                      | 陣列首位新增 1(數個)數值                                                                | 新的陣列長度                     |
| .shift()             |                  陣列首位刪除                  | **array.shift()**                                                       | 陣列第一位的值刪除                                                                      | 被刪除的值                       |
| .sort()              |                  陣列重新排列                  | **array.sort()**                                                        | 重新排序陣列中的數值(依小到大)                                                          | 重新後的陣列                     |
| .splice()            |              陣列中刪除/新增元素               | **array.splice(** `start, deleteCount, addValue1, addValue2.....` **)** | 陣列中的第幾位開始, 取幾位, 要增加的項目(數個)。無指刪除幾個，將後面全刪除              | 刪除的項目                       |
| .indexOf()           |            判別 value 是否在陣列裡             | **array.indexOf(** `value` **)**                                        | 回傳數值在陣列中的**索引**，不存在 回傳 -1                                              | 回傳所在的索引位置 or -1(不存在) |
| Array.isArray()      |                 判斷是否為陣列                 | **Array.isArray(** `array` **)**                                        | typeof 無法判斷陣列，可以用此判別是否為陣列                                             | true or false                    |
| .includes()          |            判斷 value 是否在陣列裡             | **array.includes(** `value` **)**                                       | 確認是否存陣列之中                                                                      | true or false                    |
| .filter()            |              陣列中符合條件的項目              | **array.filter(** `(value)=>{ value === ? }` **)**                      | 符合條件之項目，集合到一個新的陣列回傳。                                                | 符合 true 的陣列                 |
| .find()              |       找到陣列中**第一個**符合條件的項目       | **array.find(** `(item) => {item.name === 'nike'}` **)**                | 方法會回傳第一個滿足所提供之測試函式的元素值。                                          | 符合條件的項目                   |
| Object.keys()        |              陣列所有 index 索引               | **Object.keys(** `array` **)**                                          | 找出物件/陣列的所有索引值                                                               | 陣列(索引放入陣列回)             |
| Object.fromEntries() | 二維陣列 `['item1', 'item2']` 轉換成 json 格式 | Object.fromEntries(`['item1','item2']`)                                 | --                                                                                      | --                               |
| Array.isArray()      |             判斷是否為陣列 `array`             | Array.isArray(`array`)                                                  | 以 js 來說， `陣列`、`物件` 都是 屬於 `object`，不過可以透過這個方式，判斷是否為 `陣列` | true/ false                      |

```js
// .splice() //
var array = [1, 2, 3, 4 ];
array.splice(1,2);  // 從索引 1 刪除 2 個數值
<- [2, 3] // 回傳被刪除的數值
array // [1, 4]

var lottery = [1, 2, 3, 4];
lottery.splice(2, 1, 'abc'); // 從索引 2 刪除 1 個數值, 同時新增 'abc'
<- [3] // 回傳被刪除
lottery // [1, 2, "abc", 4]
```

```js
// .indexOf() //
var lottery = [1, 2, 3, 4]
var index = lottery.indexOf(2)
console.log(index) // 1
```

```js
// .filter() //
var array = [1, 2, 3, 4]
const found = array.filter((val) => val > 2)
;(found) => [3, 4]
```

```js
// .find() //
var array = [1, 2, 3, 4]
const found = array.filter((val) => val > 2)
;(found) => 3
```

## 遍歷陣列 loop

| 方法        | 簡述           | 範例                                                               | 說明                                                           |
| ----------- | -------------- | ------------------------------------------------------------------ | -------------------------------------------------------------- |
| for( of )   | 遍歷出 value   | **for(** `let val` **of** `array` **){** `val` **}**               | 解出 value (也有拆解字串用法)                                  |
| for( in )   | 遍歷出 索引    | **for(** `let index` **in** `array` **){** `key / array[key]`**}** | 解出 index ⇒ 可再用 index 帶出 value                           |
| .forEach( ) | 迴圈出所有項目 | **array.forEach(** `( val, index [, array ] )⇒{ todo }` **)**      | 函式內將依序解出 val key array 再使用函式處理。                |
| .map()      | 加工為新陣列   | **array.map(** `( val )⇒{ val * 2 }` **)**                         | 回傳處理項目後的陣列，如果你想產生新的陣列，你可以使用這個方法 |
| .filter()   | 找符合的項目   | **array.filter(** `item ⇒ item.id == 1`**)**                       | 篩選出指定的條件回傳                                           |

## 基本觀念

主要為處理資料使用，由於陣列是 有順序性的集合 ，所以只能透過 [ ] 來存取。

::: warning
array 索引(key) != 字串，索引就僅能是數字而已。若要將索引變成字串，就要用(物件)的方式。
:::

::: danger
若索引為`變數`，請用[] 方法
:::

### 建立陣列

```js
//推薦方式
var num = [1, 2, 3, 4]
console.log(num[0]) //1

//函式寫入
var number = new Array(1, 2, 3, 4)
console.log(number[0]) //1
```

### 存入陣列

```js
num = [1, 2, 3, 4] // 宣告

num[1] = 9 // (指定存入)第二位存入9
// 此時 num [1,9,3,4]

num[5] = 'a' //---------------->>空索引會補上空白值
//此時，num[1,9,3,4,empty,'a']
```

#### 存入二維陣列

```js
num[0] = ['a', 'b', 'c'] //第一索引，存入一個陣列
//num [array(3),9]
console.log(num[0][0]) //a
```

### 陣列長度 ⇒ array.length;

```js
var ary = [1, 2, 3]
ary.length // 3
```
