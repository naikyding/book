(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{569:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"動態匹配路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#動態匹配路由"}},[t._v("#")]),t._v(" 動態匹配路由")]),t._v(" "),a("p",[t._v("當你希望路徑中，可以依名稱"),a("code",[t._v("動態變更")]),t._v("內容時，可以使用這個方式。")]),t._v(" "),a("h3",{attrs:{id:"使用方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[t._v("#")]),t._v(" 使用方式")]),t._v(" "),a("p",[t._v("在定義路由時，"),a("code",[t._v("動態名稱")]),t._v("前面加上 "),a("code",[t._v(":")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" User "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>User</div>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  routes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// dynamic segments start with a colon")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/user/:id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" User "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"配置說明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置說明"}},[t._v("#")]),t._v(" 配置說明")]),t._v(" "),a("p",[t._v("此時，你的 URL "),a("code",[t._v("/user/foo")]),t._v(" 或 "),a("code",[t._v("/user/bar")]),t._v(" 的時候，它將會有不同的對應在 "),a("code",[t._v("this.$route.params")]),t._v(" 而 "),a("code",[t._v("params")]),t._v(" 內的索引，就是定義時 "),a("code",[t._v(":名稱")]),t._v("。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("定義路由")]),t._v(" "),a("th",[t._v("URL 路徑")]),t._v(" "),a("th",[t._v("$route.params")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("/user/:username")]),t._v(" "),a("td",[t._v("/user/evan")]),t._v(" "),a("td",[a("code",[t._v("{ username: 'evan' }")])])]),t._v(" "),a("tr",[a("td",[t._v("/user/:username/post/:post_id")]),t._v(" "),a("td",[t._v("/user/evan/post/123")]),t._v(" "),a("td",[a("code",[t._v("{ username: 'evan', post_id: '123' }")])])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("除了 "),a("code",[t._v("$route.params")]),t._v(" 之外，"),a("code",[t._v("$route")]),t._v(" 還有其它的用法!\n比如，"),a("code",[t._v("$route.query")]),t._v(" 來讀取 url 的 "),a("code",[t._v("get ?do=select")]),t._v(" … "),a("a",{attrs:{href:"https://router.vuejs.org/api/#the-route-object",target:"_blank",rel:"noopener noreferrer"}},[t._v("其它 api"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"更新組件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新組件"}},[t._v("#")]),t._v(" 更新組件")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("當路由已經渲染，此時如果再修改 url 後面的"),a("code",[t._v("動態名稱")]),t._v("，"),a("code",[t._v("component")]),t._v(" "),a("strong",[t._v("不會再重新渲染")]),t._v("，這意謂著你無法再使用組件某些"),a("code",[t._v("hook")]),t._v("來進行些更新的動作!!")]),t._v(" "),a("p",[t._v("可以使用"),a("code",[t._v("組件")]),t._v("中，的 "),a("code",[t._v("watch")]),t._v("觀察目前的"),a("code",[t._v("route")]),t._v("變更，來執行你要的程式")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" User "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  watch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// react to route changes...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("or")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" User "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// react to route changes...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// don't forget to call next()")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("h2",{attrs:{id:"捕獲所有路徑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#捕獲所有路徑"}},[t._v("#")]),t._v(" 捕獲所有路徑")]),t._v(" "),a("p",[t._v("想要匹配"),a("strong",[t._v("所有")]),t._v("的路徑，可以使用 "),a("code",[t._v("*")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 会匹配所有路径")]),t._v("\n  path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 会匹配以 `/user-` 开头的任意路径")]),t._v("\n  path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/user-*'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("\b\b 當通過 "),a("code",[t._v("*")]),t._v(" 捕獲路徑時，在 "),a("code",[t._v("$route.params")]),t._v(" 會出多一個 "),a("code",[t._v("pathMatch")]),t._v(" 參數，可以來顯示目前捕獲的路徑名稱。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 當路徑為 { path: '/user-*' }")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/user-admin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pathMatch "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'admin'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 當路徑為 { path: '*' }")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/non-existing'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pathMatch "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// '/non-existing'")]),t._v("\n")])])]),a("h2",{attrs:{id:"路徑匹配的優先權"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路徑匹配的優先權"}},[t._v("#")]),t._v(" 路徑匹配的優先權")]),t._v(" "),a("p",[t._v("有時候，同一個路徑可以匹配多個路由，此時，匹配的優先級就按照路由的定義順序：誰先定義的，誰的優先級就最高。")]),t._v(" "),a("h2",{attrs:{id:"高級匹配模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高級匹配模式"}},[t._v("#")]),t._v(" 高級匹配模式")]),t._v(" "),a("p",[a("code",[t._v("vue-router")]),t._v(" 支援一個或數個的配配方式，甚至可以自定義"),a("code",[t._v("正則式")]),t._v("，以下舉一個高級的模式 "),a("a",{attrs:{href:"https://github.com/vuejs/vue-router/blob/dev/examples/route-matching/app.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("example"),a("OutboundLink")],1)]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("方式")]),t._v(" "),a("th",[t._v("簡述")]),t._v(" "),a("th",[t._v("說明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v(":params")])]),t._v(" "),a("td",[t._v("變數"),a("strong",[t._v("前")]),t._v(" + "),a("code",[t._v(":")])]),t._v(" "),a("td",[t._v("表示 params (參數)")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v(":params?")])]),t._v(" "),a("td",[t._v("參數"),a("strong",[t._v("後")]),t._v(" + "),a("code",[t._v("?")])]),t._v(" "),a("td",[t._v("這是"),a("strong",[t._v("非必填")]),t._v("的參數")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v(":id(\\\\d+)")])]),t._v(" "),a("td",[t._v("參數"),a("strong",[t._v("後")]),t._v(" + "),a("code",[t._v("(正則式)")])]),t._v(" "),a("td",[t._v("定義參數的格式，以下面的例子這個參數必須為 "),a("strong",[t._v("數字")]),t._v(" 才會匹配。")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("*")])]),t._v(" "),a("td",[t._v("在參數上填入"),a("code",[t._v("*")])]),t._v(" "),a("td",[t._v("任何東西，將被匹配成功。")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("(path/)?")])]),t._v(" "),a("td",[a("code",[t._v("(路徑名稱/)?")])]),t._v(" "),a("td",[t._v("非必填的"),a("strong",[t._v("路徑")])])])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("routes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// params are denoted with a colon ":"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/params/:foo/:bar'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// a param can be made optional by adding "?"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/optional-params/:foo?'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a param can be followed by a regex pattern in parens")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this route will only be matched if :id is all numbers")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/params-with-regex/:id(\\\\d+)'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// asterisk can match anything")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/asterisk/*'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// make part of the path optional by wrapping with parens and add "?"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/optional-group/(foo/)?bar'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);