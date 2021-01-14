---
title: components
date: 2020-01-14
sidebar: 'auto'
categories:
  - vue
  - nxut
tags:
  - components
  - 組件
  - 延遲加載
  - 動態載入
---

## 自動導入 components

在 `v2.13` 之後，NXUT 會透過 `nuxt.config.js`，加入 `components: true` 來自動導入所有的 `components`

```js
export default {
  components: true,
}
```

意思是，你只要在 `components` 創造 `組件`，就可以直接在 `.vue` 使用。

```
components/
  TheHeader.vue
  TheFooter.vue
```

```vue
<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>
```

## 嵌套目錄 Nested Directories

當你的 `component` 是在一個資料夾底下，比如

```{3}
components/
  base/
    Button.vue
```

```vue {3}
<template>
  <div>
    <Button />
  </div>
</template>
```

你會發現這樣還是可以使用，因為 `component` 組件，的名稱是依據本身的 **文件名稱**。不論他的目錄為何；
:::tip
所以，官方建議你可以這樣來命名你的 `組件`

```{3}
components/
  base/
    BaseButton.vue
```

:::

## 非同步取得資料 `fetch`

:::danger
在組件要取得 **非同步的資料** ，需要使用 **`fetch()` hook**
:::

可以從以下兩個狀態，來知道 **取得資料的狀態**：

- `$fetchState.pending` 取得的資料，正在等待加載時
- `$fetchState.error` 取得的資料，發生錯誤時

```vue {3-8,19-23}
<template>
  <div>
    <p v-if="$fetchState.pending">Loading....</p>
    <p v-else-if="$fetchState.error">Error while fetching mountains</p>
    <ul v-else>
      <li v-for="(mountain, index) in mountains" :key="index">
        {{ mountain.title }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mountains: [],
    }
  },
  async fetch() {
    this.mountains = await fetch(
      'https://api.nuxtjs.dev/mountains'
    ).then((res) => res.json())
  },
}
</script>
```

## 動態導入組件 js

要動態載入的 `組件`，你可以在 **模版上** 加上前綴字 `Lazy`，這樣的話，只有在`組件` 被加載進來的時候，才會載入 組件的 `js`。

```vue {5}
<template>
  <div>
    <TheHeader />
    <Nuxt />
    <LazyTheFooter />
  </div>
</template>
```

## 資料傳遞

與 [Props 資料傳遞](../vue/component_props.md) 相同
