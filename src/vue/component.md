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
:::tip
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

如果要傳送的資料是字串，屬性就一般文字
如果要傳送的資料是動態，命名就要加`:`

#### 接收方式

- 不指定資料格式 `使用陣列`

```js
// 子層
<script>
export default {
  name: "HelloWorld",
  props: ["msg", "data"],
};
</script>
```

- 指定資料格式 `使用物件`

```js
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

所有的資料格式

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

### Emit 傳父

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
