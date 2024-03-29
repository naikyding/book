---
title: AXIOS
date: 2021-01-04
sidebar: 'auto'
categories:
  - axios
tags:
  - create
  - axios
  - interceptors
  - token
  - login
---

## 常用請求方法

---

```js
axios.get(url[, config])
axios.delete(url[, config])
axios.post(url[, data[, config]])
axios.put(url[, data[, config]])
axios.patch(url[, data[, config]])
```

## 創造一個實例

可以針對不同的 api 去創造，屬於它自已的請求實例，之後只要訪問這隻就可以了，
也可以針對不同的**實例** 來做**不同的`config`** 或 **攔截`interceptor`**

```js
// https://vue-lessons-api.herokuapp.com/photo/list 以此為例
import axios from 'axios'

const photoRequest = axios.create({
  baseURL: 'https://vue-lessons-api.herokuapp.com/',
})

export const getPhotoList = () => photoRequest.get('/photo/list')
```

## 設置配置檔

你可以設定**默認**的配置檔

### 全域默認

```js
axios.defaults.baseURL = 'https://api.example.com'
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'
```

### 客製化配置檔

```js
// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: 'https://api.example.com',
})

// Alter defaults after instance has been created
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN
```

## 請求攔截器

可以針對某一個請求的 **實例** 去攔載它 `request 送出前` 、 `response 接收前` ，所執行的動作。 [參考](https://github.com/axios/axios#interceptors)

```js {8-17}
import axios from 'axios'

const photoRequest = axios.create({
  baseURL: 'https://vue-lessons-api.herokuapp.com/',
})

// 請求前攔載
photoRequest.interceptors.request.use(
  (config) => {
    console.log('發送前')
    if (config.url === '/photo/list') throw '禁止提取'
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

export const getPhotoList = () => photoRequest.get('/photo/list')
```

### 錯誤處理方式

```js {9}
import { APIgetPhotoList } from '../../api'

export default {
  async get_photo_list() {
    try {
      const { data } = await APIgetPhotoList()
      if (data) return data
    } catch (err) {
      console.log(err) // 禁止提取
    }
  },
}
```

## 請求模組化 ∣ 統一管理

可以新增一個 `api` 資料夾，在底下設置一個 `index.js` API 請求入口的檔案，來整合所有的 api，方便 **後續追蹤** 與 **維護管理**

### 資料夾結構

```
  ├─ api
  │   ├─ index.js API 請求入口
  │   ├─ user.js
  │   ├─ phooto.js
  │   └─ record.js
```

### 設置入口 api 文件

可以在命名上加上，方便辨視的文字，比如這邊是在開頭加上 `API`，之後的 api 都統一由這個檔案來引入使用。

```js
// api/index
import { getPhotoList } from './photo'

export const APIgetPhotoList = getPhotoList
...
```

### 引入與使用 api

之後的 api 使用，就統一由 `api/index.js` 這隻來引入使用

```js
import { APIgetPhotoList } from '../../api'

export default {
  async get_photo_list() {
    try {
      const { data } = await APIgetPhotoList()
      if (data) return data
    } catch (err) {
      console.log(err)
    }
  },
}
```

### 默認設定檔

登入後的默認檔設定

```js
export const userTokenCheck = (token) => {
  user.defaults.headers.common['Authorization'] = token
  return user.post('/testToken')
}
```
