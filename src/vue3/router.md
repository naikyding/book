---
title: router
date: 2020-12-09
sidebar: 'auto'
categories:
  - vue
  - vue3
tags:
  - router
  - route
  - compositionApi
---

## `setup` 使用

因為 `setup` 是在 **vue 實例** 創建之前，所以沒有 `this` ，如果要使用 **Router** 就需要使用 `userRouer` 這個函式。

- `this.$router` ➡ `useRouter()`
- `this.$rute` ➡ `useRoute()`

```js {1,6-7}
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    // 先定義
    const router = useRouter() // this.$router
    const route = useRoute() // this.$route

    console.log(route.name) // 目前路由名稱

    function goHome() {
      router.push({ path: '/' }) // 操作目前路由
    }

    return {
      goHome,
    }
  },
}
```

## 監聽

由於 `router` 是一個 `reactive`的物件，你應該**直接選擇你要監聽的的部分**，避免監聽整個物件。

```js {9}
import { watch } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()

    watch(
      () => route.params,
      (newParams) => {
        console.log(newParams)
      }
    )

    return {}
  },
}
```

:::danger template 使用
由於原本的 `template` 還是可以使用原本的 `$router` 、 `$route`，所以沒有必要再另外將 `setup` 的 `router` 或 `route` `reture`出來
:::

## 導航守衛

由於 `setup` 就已經是在 **render** 之前了，所以大部分只針對 `beforeRouteUpdate` `beforeRouteLeave` 來操作。

- `beforeRouteUpdate` ➡ `onBeforeRouteUpdate`
- `beforeRouteLeave` ➡ `onBeforeRouteLeave`

```js
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

export default {
  setup() {
    // same as beforeRouteLeave option with no access to `this`
    onBeforeRouteLeave((to, from) => {
      const answer = window.confirm(
        'Do you really want to leave? you have unsaved changes!'
      )
      // cancel the navigation and stay on the same page
      if (!answer) return false
    })

    const userData = ref()

    // same as beforeRouteUpdate option with no access to `this`
    onBeforeRouteUpdate(async (to, from) => {
      // only fetch the user if the id changed as maybe only the query or the hash changed
      if (to.params.id !== from.params.id) {
        userData.value = await fetchUser(to.params.id)
      }
    })
  },
}
```
