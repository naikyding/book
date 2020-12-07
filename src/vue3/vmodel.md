---
title: v-model
date: 2020-12-07
sidebar: 'auto'
categories:
  - vue
  - vue3
tags:
  - model
  - 綁定
  - 雙向綁定
  - vmodel
---

## 組件 `v-model` 雙向綁定 與 客製事件

`vue 3.0` 支援多重的 `v-model` 雙向綁定，使其更簡潔更好使用。

[vue 2.X 多重雙向綁定 ](https://naikyding.github.io/book/vue/customEvent.html#%E9%9B%99%E5%90%91%E7%B6%81%E5%AE%9A-sync)

**父層**

```html
<ChildComponent v-model="pageTitle" />

<!-- 是以下的简写: -->

<ChildComponent
  :modelValue="pageTitle"
  @update:modelValue="pageTitle = $event"
/>
```

修改傳送的 `參數` 名稱

```html
<ChildComponent v-model:title="pageTitle" />

<!-- 是以下的简写: -->

<ChildComponent :title="pageTitle" @update:title="pageTitle = $event" />
```

與 `.sync` 一樣，定義多組 `v-model`

```html
<ChildComponent v-model:title="pageTitle" v-model:content="pageContent" />

<!-- 是以下的简写： -->

<ChildComponent
  :title="pageTitle"
  @update:title="pageTitle = $event"
  :content="pageContent"
  @update:content="pageContent = $event"
/>
```

**子層**
需要定義 `props`，不用定義客製化事件。

### **範例**

- 父層

```html
<List
  :list="list"
  @chg-text="changeText"
  :model="vmodel"
  @update:model="vmodel = $event"
/>
```

- 子層
  html

```html
<input
  type="text"
  :value="model"
  @input="(event) => $emit('update:model', event.target.value)"
/>
```

js

```js
  props: {
    model: {
      type: String,
      required: true,
    },
  },
```

### 在 `setup` 使用 `emit`

一般使用 `emit` 方式：

- 在 `attributes` 使用時

  ```html
  <p @click="$emit('chg-text', 'NIKI')">{{ list[0].name }}</p>
  ```

- vue 2.x JS 使用

  ```js
  this.$emit('chage-title', 'yourData')
  ```

- vue 3.0 `setup` 使用
  要帶入第一參數 `上下文對象`，再使用 `context.emit` 向父層傳送 **事件**
  ```js
    setup(props, context) {
      function chgText() {
        context.emit('update:model', '11111')
      }
      return { chgText }
    },
  ```

:::warning
必須確保 `prop` 名稱，與客製化事件 `update:<propName>`，兩個參數名稱是相同的!
:::
