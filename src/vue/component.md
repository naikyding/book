---
title: Component 組件
date: 2020-09-24
sidebar: 'auto'
categories:
  - vue
tags:
  - component
  - 組件
  - 元件
---

所有功能切分、分類、容器或重復使用的區塊，都可以使用 component 來組件化。

:::warning
component 內的 **data (資料)**，都必須使用 **函式** 來避免資料被其它父層使用時汙染!
:::

## 註冊方式

### 全域註冊

這會使得在打包時，產生比較大的容量，因為所有組件被打包。
也不需要被特別引入!

```js
Vue.component('組件名稱', {
  /* 屬性設置 */
})
```

[屬性設置](#屬性設置)

---

### 區域註冊

註冊必須要在連立實體(**new Vue({})**)之前，才可以使用

```js
const componentA = {
  /* 屬性設置 */
}
const componentB = {
  /* 屬性設置 */
}
const componentC = {
  /* 屬性設置 */
}
```

#### 使用方式：

```js {7}
import ComponentA from './ComponentA.vue' // 引入組件

new Vue({
  el: '#app',

  // 掛入實體
  components: {
    /* 組件名稱 */
    componentA,
    componentB,
  },
})
```

:::warning 注意
在實體要新增時組件，是使用 `compoennts` 要加`s`
:::

## 屬性設置

```js
Vue.component('組件名稱', {
  // 除了 el 與 data 之外，其他屬性與.vue的用法完全一樣。
  template: `<div>組件內容</div>`,

  data: () => ({}),
  computed: {},
  methods: {},
  // ...以及其他選項、各種 lifecycle hooks
})
```

## 組件模組化

你也可以將多個模組集合到一個模組輸出

```js
const componentA = {}
const componentB = {}
const componentC = {}

const componentD = {
  components: {
    componentA,
    componentB,
    componentC,
  },
}
```

## 資料傳遞

![](https://i.imgur.com/tMExXxt.png)

### Props 傳子

可以在組件的 **屬性** 給予一個值，當作要傳送到子組件的資料!
:::danger 注意
資訊屬性的命名規則，請使用 kebab-case 不要使用 camelcase(駱峰)
:::

#### 傳送方式

**父層**

```vue
// 靜態
<componentA data="這是我要傳送到組件的文字" />
// 動態
<componentA :data="userData" />
```

如果要傳送的資料是字串，屬性就一般文字命名
:::warning
如果要傳送的資料是**字串** 之外，命名都要加`:`
:::

#### 接收方式

- 不指定資料**驗證** `使用陣列`

```js {5}
// 子層
<script>
export default {
  name: "HelloWorld",
  props: ["msg", "data"],
};
</script>
```

- 指定資料(驗證)**型別** `使用物件`

```js {5,6}
<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    data: Number
  },
};
</script>
```

所有的資料**型別**

```js
props: {
  title: String,
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: Object,
  callback: Function,
  contactsPromise: Promise // or any other constructor
}
```

- **建議接收方式**

  指定**型別**(type)，指定 **必填項目**(required) 無填入會報錯。

```js {5-8}
<script>
export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true
    }
  },
};
</script>
```

:::danger 注意
Props 的接收驗証，是在`組件`被 created 的時候! 所以此時的 `data / computed` 都無法在驗證中使用!
:::

- 接收`布林值`
  當你接收的資料是`布林值`時，可以不帶`值`，只要資料 Attributes 有命名，就可以判斷!

```js
// Including the prop with no value will imply `true`.
<blog-post is-published></blog-post>
```

### Emit 傳父

## 非定義傳值的屬性

當屬性沒有被定義 Props，自然無法被當成資料傳到組件內部。
但組件內部的**根標籤** 是會承接下這個屬性!

### 屬性繼承

**範例**

<iframe src="https://codesandbox.io/embed/crimson-cdn-hkupy?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:150px; border:0; border-radius: 4px; overflow:hidden;"
     title="crimson-cdn-hkupy"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
假設組件的根標籤只有一個`<input type="checkbox">`，當父層在組件上定義屬性為 `checked` ，這個屬性將傳入 根標籤!

**組件**

```vue
<!-- Input.vue -->
<template>
  <input type="checkbox" />
</template>
```

**父層**

<iframe src="https://codesandbox.io/embed/crimson-cdn-hkupy?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:200px; border:0; border-radius: 4px; overflow:hidden;"
     title="crimson-cdn-hkupy"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
```vue
<Input checked />
```

### class 繼承

# component 組件動態切換

在`<component>`使用屬姓 `is="組件名稱"` 來切換想要顯示的 compontent 組件。
:::tip
當你使用 tab 想要可以即時切換顯示內容時，可以使用此方法。
:::

範例：

<iframe src="https://codesandbox.io/embed/modern-pine-6q3qj?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:200px; border:0; border-radius: 4px; overflow:hidden;"
     title="modern-pine-6q3qj"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

**父層**

```vue
<component :is="layout" />
```

```js
<script>
export default {
  name: "App",
  components: {
    HelloWorld,
    ContentA,
    ContentB
  },

  data: () => ({
    status: true
  }),

  computed: {
    layout() {
      if (this.status) return "ContentA";
      return "ContentB";
    }
  }
};
</script>
```
