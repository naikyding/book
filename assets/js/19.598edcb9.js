(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{498:function(t,a,s){"use strict";s.r(a);var e=s(4),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"使用-docker-搭建-vue-cli-專案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-docker-搭建-vue-cli-專案"}},[t._v("#")]),t._v(" 使用 docker 搭建 vue cli 專案")]),t._v(" "),s("h2",{attrs:{id:"建立專案-image-鏡像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#建立專案-image-鏡像"}},[t._v("#")]),t._v(" 建立專案 "),s("code",[t._v("image")]),t._v(" 鏡像")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("拉取 "),s("code",[t._v("node")]),t._v(" 環境")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("ocker pull node"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.20")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("buster\n")])])])]),t._v(" "),s("li",[s("p",[t._v("設置原代碼管理資料夾 (這邊是預設 "),s("code",[t._v("src")]),t._v(" )")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("mkdir src\n")])])])]),t._v(" "),s("li",[s("p",[t._v("設置 "),s("code",[t._v("Dockerfile")]),t._v(" 鏡像打包文件")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[t._v("FROM node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("12.20.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("buster   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 要使用的 Docker image 名稱")]),t._v("\nADD ./src /app             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 將本地的 src 複製到 Docker image 的 app 資料夾之下")]),t._v("\nWORKDIR /app               "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定 docker 執行起來時候的預設目錄位置")]),t._v("\nENV DEBCONF NOWARNING yes  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 用來設定本地環境變數")]),t._v("\nRUN apt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("get update "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("y "),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" \\ "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 放 Linux 指令，用來執行安裝和設定這個 Image 需要的東西")]),t._v("\n  apt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("get upgrade "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("y "),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" \\\n  apt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("get install "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("y \\\n  build"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("essential "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("y \\\n   curl \\\n   nmap \\\n   git \\\n   nano \\\n  "),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" rm "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("rf /var/lib/apt/lists/* "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 移除所有 指定路徑的檔案 (一旦容器生成後，就移除)")]),t._v("\nRUN npm install "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("g @vue/cli@4.4.6  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安裝 vue cli 開發工具")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"操作-image"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作-image"}},[t._v("#")]),t._v(" 操作 "),s("code",[t._v("image")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("打包專案 "),s("code",[t._v("image")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("docker build "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("t "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("鏡像文件名稱"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("版本號"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("運行成 "),s("code",[t._v("container")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("docker run "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("it "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("name vuecli"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("v "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("pwd")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("p "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("d naiky"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("vuecli"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("v1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])]),s("p",[t._v("雖然目前容器已經運行了，但目前還沒有什麼服務。")])]),t._v(" "),s("li",[s("p",[t._v("進入容器")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("docker exec "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("it vuecli"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" bash\n")])])])]),t._v(" "),s("li",[s("p",[t._v("安裝 vue cli (在容器內)")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("確認版本 "),s("code",[t._v("\bvue -V")])])]),t._v(" "),s("li",[s("p",[t._v("安裝 vue cli "),s("code",[t._v("vue create [project name]")])])])])]),t._v(" "),s("li",[s("p",[t._v("退出容器 "),s("code",[t._v("exit")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);