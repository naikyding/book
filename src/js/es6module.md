---
title: ES Module 模組系統
date: 2020-12-02
sidebar: 'auto'
categories:
  - js
tags:
---

## 模組系統

當程式碼愈寫愈多，應用程式的規模愈來愈大時，我們需要一個用於組織與管理程式碼的方式，
module 這是發揮了很重要的功效，可以有效的分開各功能的程式，要用時 再各別引入，對於之後的維護也是非常的方便。

:::danger
IE 完全不支援
:::

- ### 建立 module 程式

使用`變數`來建立 `程式` 或 `資料`，再使用 `export default` 來將內容 **輸出**

```js
const sayHello = () => {
  console.log('Hello wrold!!')
}

export default sayHello
```

- ### 引入 module 方法

也需要使用到 es6 的 import 引入方式，將程式引入進這個主檔案。
import 進來的 `名稱` 是可以**自由命名的**!

```vue {1}
<script type="module">
import Hello from './hello.js' Hello()
</script>
```

:::danger
要使用 es6 的 `import` ，必須要在 `<script>` 加上 `type="module"` 不然是無法啟用的!!
:::

## 輸出方式

### export default

是這個 `.js` 的默認輸出內容，代表這隻 `js`，所以一個檔案 **只會有一個 `export default` **
且直指命名引入就可以了!

```js
const sayHello = () => {
  console.log('Hello wrold!!')
}

export default sayHello
```

```vue {1}
<script type="module">
import Hello from './hello.js' Hello()
</script>
```

### export

**可以匯出多個命名模組**

:::danger
要 export 都必須要使用 `變數` 來輸出 !!
:::

以下是一個 混合式的 module ，同時有 `export default` 與 `export`

```js
// module js
const hello = () => {
  console.log('HELLO WROLD')
}

export const name = 'naiky'

export const age = 33

export default hello
```

引入時，就必須使用 `解構` 來特別指定需要的程式

```vue {2}
<script type="module">
import Hello, { name, age } from './hello.js'

Hello()

console.log(name, age) // naiky 33
</script>
```
