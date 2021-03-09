---
title: 全域共享 sass 變數
date: 2021-03-09
sidebar: 'auto'
categories:
  - vue
  - sass
  - scss
tags:
  - sass
  - scss
---

## 透過 sass-loader 全域加載 sass 變數

有時您可能想將選項傳遞給預處理器的 webpack 加載器。您可以使用 vue.config.js 中的 css.loaderOptions 選項執行此操作。例如，要將一些共享的全局變量傳遞給所有 Sass / Less 樣式：

```js {17-19}
// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      // pass options to sass-loader
      // @/ is an alias to src/
      // so this assumes you have a file named `src/variables.sass`
      // Note: this option is named as "prependData" in sass-loader v8
      sass: {
        additionalData: `@import "~@/variables.sass"`,
      },
      // by default the `sass` option will apply to both syntaxes
      // because `scss` syntax is also processed by sass-loader underlyingly
      // but when configuring the `prependData` option
      // `scss` syntax requires an semicolon at the end of a statement, while `sass` syntax requires none
      // in that case, we can target the `scss` syntax separately using the `scss` option
      scss: {
        additionalData: `@import "~@/variables.scss";`,
      },
      // pass Less.js Options to less-loader
      less: {
        // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
        // `primary` is global variables fields name
        globalVars: {
          primary: '#fff',
        },
      },
    },
  },
}
```

:::tip
加載 `scss` 時，必須要結尾加上 `;`
:::
