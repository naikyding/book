---
title: if 判斷式
date: 2020-09-19
sidebar: 'auto'
categories:
  - js
tags:
  - if
  - includes
  - return
---

## 判斷進入的條件

跳出函式

```js
function sayText(str){
  if(str === 123) return false // 符合即會跳出函式
  console.log(str)
}
```

## if 判斷式優化

當有多組判斷時，就會一直增加 || ....，太過於冗長...重覆字也多 (如下)

```js
if (res === 'apple' || res === 'orange' || res === 'water') {
  // todo
}
```

可以將判斷選項放入 array 讓程試更簡短明暸 (如下)
如果 data 裡有這個東西，就執行

```js
const data = ['apple', 'orange', 'water']

if (data.includes(res)) {
  // todo
}
```
