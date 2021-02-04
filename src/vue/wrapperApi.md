---
title: Wrapper Api
date: 2021-02-03
sidebar: 'auto'
categories:
  - vue
  - test
  - jest
tags:
  - test
  - jest
  - utils
  - 測試
  - 單元測試
  - unittest
---

`Wrapper` 提供了很多操作方法，提供你的判斷與測試：

以下的操作都是以 `wrapper` 已經被渲染的前題之下

```js
import { shallowMount } from '@vue/test-utils' // 引入測試方法
import List from '@components/List.vue' // 引入組件

const wrapper = shallowMount(List)
```

## 方法

| 方法                    | 說明                                   | 範例                                        |
| ----------------------- | -------------------------------------- | ------------------------------------------- |
| vm                      | 組件當中 `Vue` 的實例                  | `wrapper.vm.title`                          |
| setData()               | 設置 `vm`(vue 實例) 的 data            | `wrapper.setData({ title: 'Hello world' })` |
| find( `querySelector` ) | DOM 選擇器 (找尋某個節點)              | `wrapper.find('#userAcc')`                  |
| exists()                | 是否存在                               | `wrapper.find('#userAcc').exists()`         |
| text()                  | 文字內容(純文字 非 html)               | `wrapper.find('span').text()`               |
| trigger(`event`)        | 操作 dom 的觸發事件 (搭配 async/await) | `wrapper.find('button').trigger('click')`   |

## 範例

### 元素是否存在 `.exists()`

```js
it('span 是否存在', () => {
  expect(wrapper.find('span').exists()).toBe(false)
})
```

### 判斷文字內容 `.text()`

```js
it('H2 標題文字預期符合 HELLO', () => {
  expect(wrapper.find('h2').text()).toBe('HELLO')
})
```

### 預期屬性 `.attributes()`

```js
it('h2 屬性 id 值是否相符', () => {
  expect(wrapper.find('h2').attributes('id')).toBe('h2Id')
})
```

### 點擊預期 `.trigger()`

需要 `async / await`

```js
it('擊點後，新增 h2 class', async () => {
  const button = wrapper.find('button')
  await button.trigger('click')
  expect(wrapper.find('#h2Id').attributes('class')).toBe('red')
})
```
