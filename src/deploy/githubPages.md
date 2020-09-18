---
title: GitHub Pages 部署
date: 2020-09-17
sidebar: 'auto'
categories:
  - github
tags:
  - action
  - github
  - githubpages
  - 部署
  - deploy
  - sh
  - vuepress
---

# 設定基本的 router
在 `.vuepress/config.js` 設置正確的 base。

如果你打算发布到 https://<USERNAME>.github.io/，则可以省略这一步，因为 base 默认即是 "/"

如果你打算发布到 https://< USERNAME >.github.io/< REPO >/（也就是说你的仓库在 https://github.com/< USERNAME >/< REPO >），则将 base 设置为 "/< REPO >/"。

```js
module.exports = {
  base: '/book/', // 默認為 '/'
}
```

## 設置部署腳本

在你的專案外層，建立一個 deploy.sh 腳本:

```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd src/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add .
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/naikyding/book.git master:gh-pages

cd -

git add .
git commit -m 'deployed'
```

## 執行指令
當想執行 sh 腳本時，輸入以下指令

```sh
sh ./deploy.sh
```