---
title: SVG ICON
date: 2021-03-11
sidebar: 'auto'
categories:
  - svg
tags:
  - svg
  - vue
---

## 安裝

```bash
vue add @yzfe/svgicon
```

## 引入

```js
// main.js
import { VueSvgIcon } from '@yzfe/vue-svgicon'
import '@yzfe/svgicon/lib/svgicon.css'

Vue.component('Icon', VueSvgIcon)
```

## 配置設定

會在根目錄自動產生一個 `.vue-svgicon.config.js` 配置文件

```js {2}
const path = require('path')
const svgFilePaths = ['src/assets/icons'].map((v) => path.resolve(v))
const tagName = 'Icon'

module.exports = {
  tagName,
  svgFilePath: svgFilePaths,
  svgoConfig: {},
  pathAlias: {
    '@icon': svgFilePaths[0],
  },
  transformAssetUrls: {
    [tagName]: ['data'],
  },
}
```

- `svgFilePaths` 你的 `svg` 文件位置
- `pathAlias` 別名，當你使用 `@icon` 就是指向到 `svgFilePaths`

## 使用

```vue
<Icon data="@icon/bonus.svg" width="33px" height="32px" :color="iconClr" />
```

- 設置參數
  - `data` svg 圖標路徑
    > 此處的 `@icon` 預設是指向 `src/assets/icons`
  - `color` 顏色
  - `width` 寬度
  - `height` 高度

:::danger 注意
開發的時候可能會發生 `devtool` 工具的警示，找不到 `source-map`，雖不影響功能但你可以這樣來解決這個問題。

```js {3-5}
// vue.config.js
{
  chainWebpack(config) {
    config.devtool('source-map')
  },
}
```

:::
