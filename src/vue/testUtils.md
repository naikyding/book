---
title: vue-test-utils
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

## 名詞說明

### 斷言

指的是對代碼行為的預期，並回傳一個 boolean 看是否符合預期；
一個測試中，可以同時存在多個斷言，但只要有一個斷言回傳 false 這個測試即 失敗。

## TDD 開發模式

指的是一種開發方法，由測試驅動開發，在開發前先攢寫測試程式，以確保程式碼的品質與符合驗收規格。

- 好處：

  以測試去思考程式如何實作。強調小步前進、快速且持續回饋、擁抱變化、動視溝通、滿足需求。

- 定律：

  - 測試之前不要寫任何程式代碼

  - 只編寫恰好能夠體現一個失敗情況的測試代碼。

  - 只編寫恰好能通過測試的功能代碼。

## 編寫測試

### `describe` 測試區塊

在此是寫入測式的區塊描述， describe 內可以寫入多個包含 it 的測試用例。

### `it` 測試項目

`it` 是真正運行測試的函式，第一個參數是 測試的描述、第二個參數是函式，裡面放著要測試的內容。

```js
describe('測試標題or範圍的描述', () => {
  it('測試內容', (done) => {
    // 進行測試
  })
})
```

---

## 測試操作

### `mount` 渲染組件

可以透過此來創建一個渲染後的包裏器

### `shallowMount` 淺渲染組件

只渲染測試的這個組件本身，不會對其子組件進行渲染，而 mount 是為真實的渲染所有子層的組件出來，這是兩者之間的差別。
:::tip
在 unit test 都盡量使用 `shallowMount` ，在做整個專案的 test 時，則是使用 `mount`。
:::

### `wrapper` 包裏器

一個包裝渲染後的模組，可以通過它來訪問元件內部的實例。

**`wrapper`的操作：**

- `.vm` 訪問 vue 實例
- `.setData()` 操作組件資料(state)
- `exists()` 判斷是否存在

  ```js
  expect(wrapper.exists()).to.equal(true)
  ```

- `is()` 判斷 `wrapper` dom 節點 或是 html 字符串

  ```jsx
  expect(wrapper.is('div')).toBe(true)
  ```

- `text()` 文字內容

  ```jsx
  expect(wrapper.find('.test').text()).to.equal('bar')
  ```
