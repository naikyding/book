---
title: for loop 迴圈
date: 2020-09-19
sidebar: 'auto'
categories:
  - js
tags:
  - for
---

> 讓程式做重複的事情

## for 迴圈

```js
// 初始值; 進入條件; 結束後變動

for( let i = 1; i <= 10: i++){
	console.log(i);
}
// 印出 1 ~ 10
```

:::tip
有初始條件、結束條件
:::

## while 廻圈

```js
var i = 1 // 初始值

while (i <= 10) {
  // 進入條件
  console.log(i)
  i++ // 結束變動
}
// 印出 1 ~ 10
```

:::warning
要記得結束的變動，否則會無限迴圈!
:::

## 應用

- ### break
  跳出迴圈

```js
for (let i = 1; i < 10; i++) {
  if (i == 3) break
  console.log(i)
}

// 1 2 退出
```

- ### continue
  略過此次執行，繼續下一迴圈

```js
for (let i = 1; i <= 10; i++) {
  if (i % 3 == 0) continue // 如果為 3 的倍數，就略過
  console.log(i)
}

// 1 2 4 5 7 8 10
```

:::tip for / while 的選擇

使用 for 要有明確的起始、條件，而 while 只需要有條件，就可以執行了。
:::
