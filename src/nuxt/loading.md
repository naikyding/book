---
title: loading 載入中
date: 2020-12-21
sidebar: 'auto'
categories:
  - vue
  - nxut
tags:
  - loading
---

> **nuxt** 提供了全域的`載入` 轉場功能，可以使用預設的，或自訂。

## 使用預設 loading

這是預設的進度條樣式(條狀)，可以客製線修寬度與顏色。

```js
// nuxt.config.js
export default {
  loading: {
    color: 'blue',
    height: '5px',
  },
}
```

| Key         | Type    | Default | Description                                                                                                             |
| ----------- | ------- | ------- | ----------------------------------------------------------------------------------------------------------------------- |
| color       | String  | 'black' | CSS color of the progress bar                                                                                           |
| failedColor | String  | 'red'   | CSS color of the progress bar when an error appended while rendering the route (if data or fetch sent back an error for | example). |  |
| height      | String  |         |                                                                                                                         | '2px' | Height of the progress bar (used in the style property of the progress bar) |
| throttle    | Number  | 200     | In ms, wait for the specified time before displaying the progress bar. Useful for preventing the bar from flashing.     |
| duration    | Number  | 5000    | In ms, the maximum duration of the progress bar, Nuxt.js assumes that the route will be rendered before 5 seconds.      |
| continuous  | Boolean | false   | Keep animating progress bar when loading takes longer than duration.                                                    |
| css         | Boolean | true    | Set to false to remove default progress bar styles (and add your own).                                                  |
| rtl         | Boolean | false   | Set the direction of the progress bar from right to left.                                                               |

## 禁用 loading

```js
// nuxt.config.js
export default {
  loading: false,
}
```

## 指令操作 loading

```js
this.$nuxt.$loading.start() // loading

this.$nuxt.$loading.finish() // stop
```

## 客製化 loading [more](https://nuxtjs.org/docs/2.x/features/loading#using-a-custom-loading-component)

除了預設的之外，你也可以自訂自已的 loading

- ### 設置 component

  `components/LoadingBar.vue`

  ```vue {12-18}
  <template>
    <div v-if="loading" class="loading-page">
      <p>Loading...</p>
    </div>
  </template>

  <script>
  export default {
    data: () => ({
      loading: false,
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      },
    },
  }
  </script>

  <style scoped>
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding-top: 200px;
    font-size: 30px;
    font-family: sans-serif;
  }
  </style>
  ```

  :::danger
  要有基本的 `methods` 才會被 `nuxt` 觸發
  :::

- ### 掛載入 nuxt

  `nuxt.config.js`

  ```js
  export default {
    loading: '~/components/LoadingBar.vue',
  }
  ```
