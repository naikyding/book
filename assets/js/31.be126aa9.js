(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{510:function(t,e,a){"use strict";a.r(e);var s=a(4),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://gitbook.tw/posts/2018-06-05-case-sensitive",target:"_blank",rel:"noopener noreferrer"}},[t._v("關於檔名的大小寫"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("在 Git 裡如果只有檔名大小寫改變而沒有改變內容的話，git status 指令不會感受到有任何的變化")])]),t._v(" "),a("p",[t._v("首先，這件事跟作業系統的檔案系統（File System）有關，以我自己的電腦（macOS High Sierra 10.13.4）來說，檔案系統是無視檔名大小寫的差別的（case insensitive），所以當我執行下面這個指令：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ rm CAT1.HTML\n")])])]),a("p",[t._v("雖然刪的是大寫檔名，但會把小寫檔名的 cat1.html 給刪掉。")]),t._v(" "),a("h2",{attrs:{id:"修改-git-設定檔"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-git-設定檔"}},[t._v("#")]),t._v(" 修改 git 設定檔")]),t._v(" "),a("p",[t._v("可以籍由修改設定檔來達到是否可以判別大小寫")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$  git config --local core.ignorecase false\n")])])]),a("p",[t._v("這樣一來就可以把該專案的「忽略大小寫」設定改成 true。如果想改成全域設定，只要把 --local 改成 --global 就行了。設定檔一改完立馬就有效果了：")])])}),[],!1,null,null,null);e.default=r.exports}}]);