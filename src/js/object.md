---
title: Object
date: 2020-09-24
sidebar: 'auto'
categories:
  - js
tags:
  - array
  - object
---

透過可命名索引(key)、值(value)來建立資料。
與 array 很像，但物件是用來存放資料，非處理資料；所以原生功能較 array 少。

## 物件處理

| 方法          | 範例                                                             | 說明                                        |
| ------------- | ---------------------------------------------------------------- | ------------------------------------------- |
| for( in )     | **for(** `let index` **in** `object` **){** `object[index]`**}** | 解出 index ⇒ 可再用 index 帶出 value        |
| Object.keys() | **Object.keys(** `array` **)**                                   | 找出物件/陣列的所有索引值，索引放入陣列回傳 |
