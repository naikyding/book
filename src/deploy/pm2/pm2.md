---
title: PM2 node 程序管理器
date: 2021-02-05
sidebar: 'auto'
categories:
  - pm2
tags:
  - deploy
  - node
  - 部署
  - nuxt開發
  - node開發
  - aws
---

## 參考

[next.js、nuxt.js 等服务端渲染框架构建的项目部署到服务器，并用 PM2 守护程序](https://segmentfault.com/a/1190000012774650)

[vue、react 等单页面项目应该这样子部署到服务器](https://segmentfault.com/a/1190000012675012)

[PM2 NPM](https://www.npmjs.com/package/pm2)

[How to deploy using PM2 cluster mode?](https://nuxtjs.org/faq/deployment-pm2)

[利用 PM2 部署 Nuxt.js 專案](https://ken551113.github.io/2019/12/03/Using-PM2-To-Deploy-Nuxt.js-Project/)

[PM2 用法大全](https://tn710617.github.io/zh-tw/pm2/)

## install

```bash
npm install pm2 -g
```

## 啟動

```bash
pm2 start app.js
pm2 start app.js --name my-api       # 啟動的 server 名稱 --name projectName
pm2 start app.js -i 0                # 根据CPU核数启动进程个数
pm2 start app.js --watch             # 实时监控app.js的方式启动，当app.js文件有变动时，pm2会自动reload
```

## 停止

```bash
pm2 stop all                         #停止PM2列表中所有的进程
pm2 stop 0                           #停止PM2列表中进程为0的进程
```

## 刪除

```bash
pm2 delete 0                         #删除PM2列表中进程为0的进程
pm2 delete all                       #删除PM2列表中所有的进程
pm2 del [name]                       # 刪除指定進程
```

---

## 使用 pm2 開發 NUXT

- `package.json` 新增指令
  ```js {3}
    "scripts": {
      "dev": "nuxt",
      "pm2dev": "pm2 start npm --name 'nuxt-project' -i 8 --watch -- run dev",
      "build": "nuxt build",
      "start": "nuxt start"
    },
  ```
  - `--name [這個服務的名稱]` 你 APP 的名稱。
  - `-i [核心數]` 你想要這個服務，用幾個核心數來啟動。
  - `--watch` 檔案有變更時，會自動重新啟動
- 輸入指令 `npm run pm2dev` 開始享受開發吧!

---

## 使用 pm2 部署 nuxt [參考](https://nuxtjs.org/docs/2.x/deployment/deployment-pm2)

使用 PM2（Process Manager 2）進行部署是一種快速簡便的解決方案，用於將通用 Nuxt 應用程序託管在服務器或 VM 上。

- [安裝 `pm2`](#參考)

- 專案底下新增 `ecosystem.config.js`

  ```js
  module.exports = {
    apps: [
      {
        name: 'NuxtAppName',
        exec_mode: 'cluster',
        instances: 'max', // or a number of instances
        script: './node_modules/nuxt/bin/nuxt.js',
        args: 'start',
      },
    ],
  }
  ```

- 專案建構與啟動 serve
  - 建構 `npm run build`
  - 啟動服務 `pm2 start`
  - 查看狀態 `pm2 ls`
    你的應用程式正在服務中

:::tip
此解決方案保證該服務器上的應用程序不停機。您應該通過冗餘或高可用性雲解決方案來防止服務器發生故障。
:::
