---
title: 響應轉換 toRef、toRefs
date: 2020-12-15
sidebar: 'auto'
categories:
  - vue
  - vue3
tags:
  - ref
  - reactive
  - toRef
  - toRefs
---

## `toRef`

### **reactive** 轉為 **ref**

可以將 `reactive` 對象轉為 `ref` ，與 `ref` 一樣可以被傳遞值與保持響應。

```js
const state = reactive({
  foo: 1,
  bar: 2,
})

const fooRef = toRef(state, 'foo')

fooRef.value++
console.log(state.foo) // 2

state.foo++
console.log(fooRef.value) // 3
```

如果要將 `props` 傳入 `setup` 的函式中 `toRef` 更好用

```js
export default {
  setup(props) {
    useSomeFeature(toRef(props, 'foo'))
  },
}
```

## `toRefs`

### 將**reactive** 響應代理，轉為 **ref**響應對象

每一個對象將會是一個 `ref`

```js
const state = reactive({
  foo: 1,
  bar: 2,
})

const stateAsRefs = toRefs(state)
/*
stateAsRefs 的类型如下:

{
  foo: Ref<number>,
  bar: Ref<number>
}
*/

// ref 对象 与 原属性的引用是 "链接" 上的
state.foo++
console.log(stateAsRefs.foo.value) // 2

stateAsRefs.foo.value++
console.log(state.foo) // 3
```

當你的函式方法是另外引入時，這時 你的響應對象 `return` 出來時，必須要使用 `toRefs` 來保持響應，而且在引入的 `setup` 也可以直接使用**解構**，是更好的作法。

```js {10,16}
function useFeatureX() {
  const state = reactive({
    foo: 1,
    bar: 2,
  })

  // 对 state 的逻辑操作

  // 返回时将属性都转为 ref
  return toRefs(state)
}

export default {
  setup() {
    // 可以解构，不会丢失响应性
    const { foo, bar } = useFeatureX()

    return {
      foo,
      bar,
    }
  },
}
```

:::danger
你寫在外面的**函式**，也可以直接 return `ref`，一樣是可以響應的。
但如果直接 return `reactive` ，就無法被解構!! 在 template 也要使用 `state.foo` `state.bar` 比較不簡潔。
:::
