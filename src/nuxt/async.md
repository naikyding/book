---
title: 取得資料
date: 2020-12-18
sidebar: 'auto'
categories:
  - vue
  - nxut
tags:
  - async
  - asyncData
  - fetch
---

## server 端，取得資數`hook`

需要在 `server` 端 **非同步取得資料** ，有兩個 `hook` 可以使用：

- ### `asyncData`

  :::danger

  只有在 `pages` 裡面才可以使用的 `hook`，在這裡面是沒有 `windows` 的 !!
  也沒有 `vue 實例`，**無法使用`this`**
  :::

  有點類以 vue3 的 `setup` 使用方式，在函式內部操作`非同步`取得資料後，直接 **retrun** 變數，就可以在**模板**中直接操作。

  範例：

  ```vue {3-4,14,19}
  <template>
    <div>
      <h1>{{ title }}</h1>
      <img v-for="item in data" :key="item.url" :src="item.url" />
    </div>
  </template>

  <script>
  import axios from 'axios'

  export default {
    const title = 'this is asyncData'

    async asyncData() {
      const { data } = await axios.get(
        'https://vue-lessons-api.herokuapp.com/photo/list'
      )

      return { title, data }
    },
  }
  </script>
  ```

  :::warning
  在 `created` 中 `mounted` 獲取資料，就算會 render 畫面出來，但 `server` 上還是不會有這個資料顯示在原始碼。
  :::
  :::danger
  `asyncData` 內容的變數，會直接覆蓋掉，`data` hook 內的**同名稱變數**!
  :::

---

- ### `fetch`

  與 `asyncData` 類似的使用方法，這個函式可以直接使用到 `this`，**所有 `.vue` 的組件都可以操作!**

  ```js
  async fetch() {
    const { data } = await axios.get("https://vue-lessons-api.herokuapp.com/photo/list");
    this.fetchPhoto = data;
  },

  data: ()=>({
    fetchPhoto: []
  })
  ```
