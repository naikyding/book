---
title: Async Await
date: 2020-12-08
sidebar: 'auto'
categories:
  - js
  - vue
tags:
  - async
  - await
---

使用 async await 會使程式更簡單明白，一眼就可以判斷。

## aync await 擁有 catch 的方法

```js
const res = await axios
  .get(`http://vue-lessons-api.herokuapp.com/courses/${id}`)
  .catch((err) => console.log(err.response.status))

if (!res) return false
classItem.content = res.data.data[0]
teacher.data = res.data.data[0].teacher
```
