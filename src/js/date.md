---
title: Date 日期處理
date: 2020-09-19
sidebar: 'auto'
categories:
  - js
tags:
  - date
---

::: warning 外掛參考

### [moment js](https://momentjs.com/) 、 [date-fns](https://date-fns.org/)

:::

:::tip
建立一個 JavaScript Date 物件來指向某一個時間點。
Date 物件是基於世界標準時間（UTC） 1970 年 1 月 1 日開始的毫秒數值來儲存時間。
:::

## 日期處理

| 擷取                             | 設定                             | 說明                                                                                        |
| -------------------------------- | :------------------------------- | ------------------------------------------------------------------------------------------- |
| Date.prototype.getDate()         | Date.prototype.setDate()         | 回傳本地時間月份中的日期（1-31）。                                                          |
| Date.prototype.getDay()          |                                  | 回傳本地時間星期中的日子（0-6）。                                                           |
| Date.prototype.getFullYear()     | Date.prototype.setFullYear()     | 回傳本地時間的年份（ 以 4 位數表現）。                                                      |
| Date.prototype.getHours()        | Date.prototype.setHours()        | 回傳本地時間的小時（0-23）。                                                                |
| Date.prototype.getMilliseconds() | Date.prototype.setMilliseconds() | 回傳本地時間的毫秒數（0-999）。                                                             |
| Date.prototype.getMinutes()      | Date.prototype.setMinutes()      | 回傳本地時間的分鐘數（0-59）。                                                              |
| Date.prototype.getMonth()        | Date.prototype.setMonth()        | 回傳本地時間的月份（0-11）。                                                                |
| Date.prototype.getSeconds()      | Date.prototype.setSeconds()      | 回傳本地時間的秒數（0-59)                                                                   |
| Date.prototype.getTime()         | Date.prototype.setTime()         | 回傳由 1970-01-01 00:00:00 UTC 開始，到代表時間經過的毫秒數（以負值表示 1970 年之前的時間） |
