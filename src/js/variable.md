---
title: variable 變數
date: 2020-12-02
sidebar: 'auto'
categories:
  - js
tags:
  - var
  - let
  - const
---

:::danger
變數沒有**型別**，值才有!!
:::

## 資料型別

- ### 基本型別

1. `string`
2. `number`
3. `boolean` ⇒ true || false
4. `null` ⇒ 明確給值 null
5. `undefined` ⇒ 已宣告，尚未給值、未定義
6. `symbol` ES6

```js
var str = 'string' //string
var number = 123 // number
var boolean = true // boolean
var state = null // null
var undefinde // undefined
```

- ### 物件型別

所有基本型別之外的類型，就是物件型別

```js
var obj = {}
var array = []
```

---

## 變數宣告 variable

- ### var 全域變數

  :::tip
  為正式宣告變數，可重覆宣告、可覆寫
  :::

  ```js
  //type1:
  var name = 'value' //字串
  var name = 123 //數字
  var 名稱 = true //布林值

  //type2:
  var price
  var quantity
  var total
  price = 5
  quantity = 14
  total = price * quantity

  //type3:
  var price = 5,
    quantity = 3,
    total = price * quantity

  //變數為匿名 function 型態
  var word = function() {
    console.log('hi')
  }

  //無宣告變數(暫時性):
  a = 1
  delete a //可以直接被刪除!
  ```

  **作用區域**

  `除了函式之外`，都可以被覆寫，。

  ```js {4-8,10-15,17-24}
  var a = 1 ;
  console.log(a);//1

  ------------------ 可被覆寫 >>
  if(1){
      var a = 999;
  }
  console.log(a);// 999

  ------------------可被覆寫>>
  for(i=1;i<10;i++){
      var a = 2;
      console.log(a); //2
  }
  console.log(a); // 此時 a = 2

  ------------------無法被覆寫>>
  function x(txt){
      var a = txt;
      console.log(a);
  }
  x(123);    // console.log(a) => 123

  console.log(a); //此時 a = 2
  ```

  :::warning
  任何地方可以被宣告使用，但**函式區塊內宣告，只能在 { } 內被認得!!**
  :::

- ### let 域區變數

  :::tip
  只能作用在宣告的區塊，**無法重覆宣告，但可以被覆寫**。

  ex: 透過 `{}` 界定使用範圍
  :::

  ```js
  let x = 1
  if (1) {
    let x = 2
    console.log(x) //2
  }
  console.log(x) //1
  ```

  :::warning
  建議`{}`區塊 內使用，全域使用 let，**變數將無法再被重覆宣告。windows.let 不會被找到!**
  :::

- ### const 區域\_常數變數

  :::tip
  具有區塊內使用的特性，**無法重覆宣告、無法更改指定值**!可以獨立存活在區塊內，出區塊即失效!

  ex: 透過 `{}` 界定使用範圍
  :::

  ```js
  const a = 111

  for (i = 1; i < 10; i++) {
    console.log(i)
    const a = 222
    console.log(a) //迴圈會印出 22222
  }

  console.log(a) // 印出 111
  ```

  :::warning
  與 let 一樣具在宣告後，只在當下區塊作用的特性。無法重覆宣告、覆寫。
  :::

## 型別判斷 **⇒ typeof variable**

```js
typeof true // 'boolean'
typeof 'Naiky' // string
typeof 123 // number
typeof {} // object
typeof [] // object

typeof window.alert // function
typeof null // object
```

- ### 基本型別

  ```js
  typeof true // 'boolean'
  typeof 'Naiky' // string
  typeof 123 // number
  ```

- ### NaN 判斷 `isNaN( variable )`

  不是數字 (Not a Number)

  ```js
  typeof NaN // 'number'
  NaN == NaN // false

  isNaN('str') // true
  isNaN(123) // false
  isNaN(NaN) // true
  ```

- ### 物件型別

  :::danger
  除了基本型之外，都會是 **Object 物件型別**，**但難以判斷是 Object 物件 || Array 陣列**
  :::

  ```js
  typeof [] // Object
  typeof {} // Object
  ```

  - ### 判斷 Array 陣列型別 `Array.isArray( array )`

  ```js
  Array.isArray([]) // true
  Array.isArray({}) // false
  ```

## 型別轉換

---

- ### 轉數字 `Number( <String> )`
- ### 轉字串 `String( <Number> )`
