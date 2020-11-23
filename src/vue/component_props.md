---
title: Props 資料傳遞
date: 2020-11-23
sidebar: 'auto'
categories:
  - vue
  - router
tags:
  - component
  - 組件
  - router
  - props
---

## 資料傳遞

![](https://i.imgur.com/tMExXxt.png)

:::tip
父層與組件之間，只可以 **單向資料流** 組件接收父層傳送的資料，但不可以直接修改!!
如果需要修改必須以 **事件** 傳回父層(資料的來源)做修改!
:::

---

### Props 傳子

可以在組件的 **屬性** 給予一個值，當作要傳送到子組件的資料!
:::danger 注意
`props`名稱的命名規則，請使用 kebab-case(烤肉串) 不要使用 camelcase(駱峰)
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

---
