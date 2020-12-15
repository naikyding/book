---
title: throw 例外處理定義
date: 2020-12-23
sidebar: 'auto'
categories:
  - js
tags:
  - throw
  - catch
---

[MDN 參考](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

## throw 例外的陳述定義

您可以拋出任何運算式，而不僅僅是特定類型的運算式。以下的程式碼會拋出一些不同類型的例外。

```js
throw 'Error2' // 字串形態
throw 42 // 數字形態
throw true // True/False
throw { error: '沒有內容' } // 物件
```

:::warning
您可以在拋出例外時指定物件。 然後，可以在 catch 區塊中引用對象的屬性。
:::

## axios 應用

最常使用的方式，就是你在 axios 的 **攔截器**，上定義，當送出請求時先預先驗證資料，若資料為空則 `throw` 定義`例外處理` 的內容。

- axios

```js {4,7,9}
_request.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    if (!config.data) throw { error: 'NODATA123' }
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)
```

- js 打 api
  這時，在`catch`中，就會發出 錯誤的信息，而內容 就是你在 axiox 攔載器，所定義的!

```js
async get_photo_list({ commit }) {
    try {
      const res = await getPhotoList()
      if (!res) return false
      commit('SET_PHOTO_LIST', res.data)
      return true
    } catch (err) {
      console.log(err.error)
    }
  },
```
