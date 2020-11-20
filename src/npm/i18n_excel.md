---
title: Excel Vue i18n
date: 2020-11-20
sidebar: 'auto'
categories:
  - i18n
tags:
  - i18n
  - excel
  - json
---

### [🔗 Excel Vue i18n](https://www.npmjs.com/package/excel-vue-i18n)

當語系國別過多且內容過深時，在專案上利用 json 較不容較管理，
而且，非工程人員也無法翻譯文件!!

這時 `Excel Vue i18n` 可以發揮很大的功效，將單一 excel 檔，分別依各國別輸出到專案的指定資料夾!!
<img :src="$withBase('/img/excel_vue_i18n.png')" />

## 安裝

```
npm i -g excel-vue-i18n
```

## 建立文件檔

在由此方式建立文件檔案 [參考](https://docs.google.com/spreadsheets/d/1qsOruRilqrmXKDr4lNp8hfDthyF9soBjAUTt3aH1DYI/edit#gid=0)
<img :src="$withBase('/img/i18n_excel.png')" />

## 操作

- 將指定**路徑**的 execl 檔，輸出為 josn 檔

  ```
  excelVueI18n -p <要轉換的檔案位置>/myLangFile.xlsx
  ```

  :::danger
  在沒有**指定輸出資料夾**時，預設會輸出在專案的最外層 `/locale`
  :::

- 指定輸出位置
  excelVueI18n -p `<excel 文件位置>` -f `<輸出json 位置>`

  ```
  excelVueI18n -p myLangFile.xlsx -f langFolder
  ```

## 參考

```
Usage: -p <name>
Usage: -f <name>
Usage: -s <name>
Usage: -o <name>

Options:
  --help                Show help                                      [boolean]
  --version             Show version number                            [boolean]
  -p, --path            Source excel file path               [string] [required]
  -f, --folder          The folder that the files will be created into it
                                                                        [string]
  -s, --singleFile      When entered as true just one locale file will be
                        created                                        [boolean]
  -o, --outputFileName  Output file name that will be named when single param
                        sent as true                                    [string]
```
