---
title: Arrow function
date: 2020-12-02
sidebar: 'auto'
categories:
  - js
tags:
  - arrow
  - funciton
---

## 基本語法

```js
(參數1, 參數2, …, 參數N) => { 陳述式; }

(參數1, 參數2, …, 參數N) => 表示式;
// 等相同(參數1, 參數2, …, 參數N) => { return 表示式; }

// 只有一個參數時,括號才能不加:
(單一參數) => { 陳述式; }
單一參數 => { 陳述式; }

//若無參數，就一定要加括號: () => { statements }
```

## 進階語法

```js
// 用大括號將內容括起來，返回一個物件字面值表示法：
params => ({foo: bar})
() => ({  })

export default {
	data: () => ({
		title: 'Hello word'
	})
}
// 等同
export default {
	data() {
		return {
			title: 'Hello word'
		}
	}
}
```

## 實務使用

在實務中，如果函式是直接操作內容，來產生畫面的話，都建議在`參數` 中帶入**預設置**!
避免當 `參數` 為空值，操作會是 **錯誤** (因為沒有東西就 undefined)啊!!

```js
// 如果沒有預設參，這段code 將會報錯!!

const aryToStr = (ary = [0, 0, 0]) => ary.map((item) => String(item))
console.log(aryToStr())
```
