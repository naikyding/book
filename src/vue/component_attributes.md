---
title: 屬性繼承
date: 2020-11-23
sidebar: 'auto'
categories:
  - vue
tags:
  - component
  - 組件
  - 元件
---

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

```vue
<Input checked />
```

### class 繼承

**父層** 寫入組件的 `class` 屬性，會直接加入組件的根標籤 `class`
:::warning 注意
如果組件本身也有`class`，那父層的`class`會被加入在組件 class 的後面!
:::

<iframe src="https://codesandbox.io/embed/crimson-cdn-hkupy?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:200px; border:0; border-radius: 4px; overflow:hidden;"
     title="crimson-cdn-hkupy"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

**父層**

```vue
<ComponentClass class="AAA" />
```

**組件**

```vue
<template>
  <div class="BBB" />
</template>
```

**渲染後**

```vue
<div class="BBB AAA" />
```

### 禁止繼承

如果你不希望组件的根元素继承 attribute，你可以在组件的选项中设置 `inheritAttrs: false`。例如：

```js {2}
Vue.component('my-component', {
  inheritAttrs: false,
  // ...
})
```

### 指定繼承

通常禁止繼承，是為了可以指定某一個標籤來繼承指定的屬性。
通常兩者會搭配使用。

```js {2,8}
Vue.component('base-input', {
  inheritAttrs: false,
  props: ['label', 'value'],
  template: `
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
    </label>
  `,
})
```

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
