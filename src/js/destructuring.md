---
title: 解構賦值
date: 2020-12-02
sidebar: 'auto'
categories:
  - js
tags:
  - arrow
  - Destructuring
---

## 解構賦值

可以從 `陣列` 、`物件` 、 `其它` 資料中，快速提取你所需要的 `值`

### 物件解構

```js
let user = { id: 1, name: 'naiky', age: 33 }
const { id, name, age } = user

console.log(id) // 1

console.log(user.id) // 1 這樣就不簡潔了
```

**當物件多重結構時**
提取物件裡的物件

```js
let user = { id: 1, name: { first: 'naiky', last: 'ding' }, age: 33 }

const {
  id,
  name: { first },
} = user

console.log(first) // naiky
```
