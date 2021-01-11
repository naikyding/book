---
title: STORE
date: 2020-12-30
sidebar: 'auto'
categories:
  - vue
  - vuecli
tags:
  - store
  - vuex
  - state
  - actions
  - mutations
  - mapState
  - mapActions
  - mapMutations
  - module
---

## VUEX 單向資料流

- **`mutations`：** 僅能操作 **同步行為** ，針對 `state` 做操作。
- **`acitons`：**
  可以操作 **非同步行為** 、與 **後端** 溝通，也在此。
  <img :src="$withBase('/img/vuexFlow.png')" >

## store 定義

store/index.js

```js
import Vue from 'vue'
import Vuex from 'vuex'

import list from './list'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true, // 開發中，請打開 嚴格模式
  modules: { list }, // 模組化的其它 store (如使用，需先引入 import module form './module')

  state: {
    // 數據狀態，類 data
    data: [], // { id: 1, name: 'naiky' }
  },
  mutations: {
    // 更改 數據狀態的唯一方式 (只能同步操作)
    SET_DATA(state, data) {
      // 第一個參數為 state
      state.data = data // { id: 1, name: 'naiky' }
    },
  },
  actions: {
    // 與 api 的互動，可以是非同步操作，提交 mutations 改變數據狀態(不可直接改)
    async get_data(context) {
      // 第一個參數為 vuex
      const { data } = await Vue.axios.get(url)
      context.commit('SET_DATA', data)
    },
  },
  getters: {
    // 計算數據，類 computed
    doneLIST: (state) => {
      return state.data.filter((item) => item.name === 'NICO')
    },
    // doneList: ({ data }) => data.filter(item => item.name === 'NICO')
  },
})
```

---

## store 操作

- ### state

  ```js
  // .vue
  this.$store.state.data.name // naiky ↑
  ```

- ### mutations

  ```js
  // store/index.js
  actions: {  // 與 api 的互動，可以是非同步操作，提交 mutations 改變數據狀態(不可直接改)
      async get_data(context){ // 第一個參數為 vuex
        const res = await Vue.axios.get(url)
        context.commit('SET_DATA', res.data)
      }
    },

  // 進階寫法
  actions: {
      async get_data({ commit }){
        const { data } = await Vue.axios.get(url)
        commit('SET_DATA', data)
      }
    },
  ```

  **特殊用法** view 可以直接 commit Mutations

  ```js
  // .vue
  this.$store.commit('SET_DATA', data)
  ```

- ### actions

  ```js
  // .vue
  this.$store.dispatch('get_data')
  ```

- ### getters

  這是在 `vuex` 中，類似 `computed` 的功能。

  ```js
  // .vue
  this.$store.getters.doneList
  ```

## 模組化

當專案起來越大的時候，`store` 單一單案會過於腫大、也不好分類；這時你可以使用 `模組` 來為你的 `store` 分類。

```js
const moduleA = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> `moduleA`'s state
store.state.b // -> `moduleB`'s state
```

### actions 操作

操作模組 `user` 裡的 `actions`

```js
this.$store.dispatch('user/login', userData)
```
