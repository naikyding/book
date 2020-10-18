---
title: Swagger openApi Doc
date: 2020-10-18
sidebar: 'auto'
categories:
  - swagger
tags:
  - yaml
  - yam
  - swagger
  - openApi2.0
---

## 編寫 api 文件

```yaml
swagger: '2.0'
# ----------------------------------- 說明區 ①
info:
  title: API Title # 標題
  description: 這是用來寫測試api文件 # 說明文字
  version: '1.0' # 版本號
host: 'localhost:3000' # domain name 網址
# basePath: / # 資料夾 ex /api (不要加最後/)
schemes: # 協定方式 http https
  - http
# ----------------------------------- 說明區 ①

tags: # 分類標籤
  - name: 讀取 # 標籤名稱
    description: 使用者資料 #說明
  - name: 新增
    description: 使用者資料

# ----------------------------------- api 路徑區 ③
paths:
  /user: # 路徑名稱
    get: # method 方法
      tags: # 標籤
        - 讀取 # 標籤名稱
      description: 讀取使用者列表 #說明文字
      responses: # 回應
        '200': # status code
          description: OK
          schema: # 回應內容型式
            $ref: '#/definitions/userList' # 指定定義的資料
        '500':
          description: Server Error
    post:
      tags:
        - 新增
      description: 新增使用者資料
      consumes: # request 發送 資料格式
        - application/json # json
      parameters: # 參數內容
        - in: body # 發送資料的位置
          name: body # 發送資料的名稱
          description: 使用者資料
          schema:
            $ref: '#/definitions/userData' # 指定定義的資料
      produces: # responses 產生 資料的格式
        - application/json
      responses:
        '201': # 新增成功的話
          description: 使用者新增成功
          schema:
            $ref: '#/definitions/user' # 指定定義的資料
  /user/{userId}: # 帶參數的路由
    get:
      tags:
        - 讀取接口
      parameters:
        - name: userId
          description: 使用者id
          in: path # 發送參數的位置
          type: integer # 型別數字
          required: true # 必填
      produces:
        - application/json
      responses:
        '200':
          description: OK
          schema:
            $ref: '#/definitions/user'
        '404':
          description: fail
    patch:
      tags:
        - 修改
      description: 修改使用者資料
      consumes:
        - application/json
      parameters:
        - in: path
          name: userId
          description: 使用者id
          type: integer
          required: true
        - in: body
          name: body
          description: 使用者資料
          schema:
            $ref: '#/definitions/userData'
      produces:
        - application/json
      responses:
        '200':
          description: 使用者新增成功
          schema:
            $ref: '#/definitions/user'
    delete:
      tags:
        - 刪除
      summary: 刪除使用者資料
      description: 刪除使用者資料
      parameters:
        - in: path
          name: userId
          type: integer
          required: true
      produces:
        - application/json
      responses:
        '200':
          description: OK
# ----------------------------------- api 路徑區 ③

# ----------------------------------- 資料定義區 ②
definitions:
  userList: # 定義資料的名稱
    type: array # 資料格式
    items: # 資料內容
      $ref: '#/definitions/user' # 資料連結
  user:
    description: 使用者資料庫資料
    type: object
    properties: # 資料參數
      id: # 參數名稱
        description: 使用者id # 參數說明
        type: integer # 參數格式
      name:
        description: 使用者名稱
        type: string
      age:
        type: integer # 格式數字
        description: 使用者年齡
  userData:
    description: 使用者輸入庫資料
    type: object
    required: # 參數裡必填的項目
      - name
      - age
    properties:
      name:
        description: 使用者名稱
        type: string
      age:
        type: integer
        description: 使用者年齡
# ----------------------------------- 資料定義區 ②
```
