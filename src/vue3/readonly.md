---
title: readonly 唯讀
date: 2020-12-02
sidebar: 'auto'
categories:
  - vue
  - vue3
tags:
  - readonly
  - reactive
---

## `readonly`

接受 `參數` 是 `reactive` 或 `ref`，可以返回對象的內容，但只可以讀取，不能改寫

```vue {7,11}
<script>
const { reactive, readonly } = Vue

const App = {
  setup() {
    const obj = reactive({ count: 0 })
    const copyObj = readonly(obj)

    const plus = () => {
      obj.count++
      copyObj.count += 2 // FAIL!!! (read only)
    }

    // const copyObj =
    return {
      obj,
      plus,
      copyObj,
    }
  },
}

Vue.createApp(App).mount('#app')
</script>
```
