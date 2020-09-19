---
title: string 字串處理
date: 2020-09-19
sidebar: 'auto'
categories:
  - js
tags:
  - string
---

## var saying = 'Home sweet home ' ;

## 處理方式

| 方式                    | 範例                          | 說明                                                         | 回傳                          |
| ----------------------- | :---------------------------- | :----------------------------------------------------------- | :---------------------------- |
| length                  | saying.length                 | 取得字元數量(空格也算)                                       | 16                            |
| toUpperCase()           | saying.toUpperCase()          | 將字串轉為大寫                                               | HOME SWEET HOME               |
| toLowerCase()           | saying.toLowerCase()          | 將字串轉為小寫                                               | home sweet home               |
| charAt()                | saying.charAt( 12 )           | 找第幾個字(從 0 開始)                                        | o                             |
| indexOf()               | saying.indexOf( 'ee' )        | 找字的位置，先出現的位置                                     | 7 (找不到回傳 -1)             |
| lastIndexOf()           | saying.lastIndexOf( 'e' )     | 找字的位置，最後出現的位置                                   | 14 (找不到回傳 -1)            |
| split()                 | saying.split( ' ' )           | 切割字元，指定一個字元做為分割依據，被分割的結果回傳一個陣列 | ["Home", "sweet", "home", ""] |
| substr(開始, 取幾位)    | saying.substr( 5, 3 )         | 取字元 (相對位置)                                            | "swe"                         |
| 取字元 (絕對位置)       | substring(開始位置, 結束位置) | saying.substring( 5, 15 )                                    | "sweet home"                  |
| 移除字串 前、後空白     | trim()                        | saying.trim()                                                | "Home sweet home"             |
| replace(尋找字, 替代字) | saying.replace( 'me', 'w' )   | 文字替代功能(預設為取代第一個字)                             | "How sweet home "             |
| .endsWith(string)       | saying.endsWith( 'a' )        | 判斷最後一個字元是否相符                                     | false                         |
| .includes()             | saying.includes( 'X' )        | 字串內是否包含                                               | false                         |
