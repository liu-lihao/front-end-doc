(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{269:function(a,s,t){"use strict";t.r(s);var e=t(0),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"content"},[t("p",[a._v("[TOC]")]),a._v(" "),t("h2",{attrs:{id:"_1-md格式注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-md格式注意事项","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. md格式注意事项")]),a._v(" "),t("h3",{attrs:{id:"_1-1-md里面写html标签要注意，有时候会导致vuepress本地开发报错"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-md里面写html标签要注意，有时候会导致vuepress本地开发报错","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.1 md里面写HTML标签要注意，有时候会导致vuepress本地开发报错")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("aaa<span>1</ span>123 // 这样就会报错\n<span>1</ span> // 这样也会报错\n\n<span>1</span> // 这样就没有错误了，标签中不允许有空格\n")])])]),t("h3",{attrs:{id:"_1-2-开始和结束不要有标点符号，否则无效"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-开始和结束不要有标点符号，否则无效","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.2 "),t("code",[a._v("** **")]),a._v("开始和结束不要有标点符号，否则无效")]),a._v(" "),t("p",[a._v("加重的"),t("code",[a._v("**d**")]),a._v("开始和末尾不要有空格和标点符号")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("**不要在函数中调用 Hook** // 有效\n**不要在函数中调用 Hook。** // 有标点符号，无效\n**不要在 函数中调用 Hook ** // 末尾有空格，无效\n")])])]),t("p",[a._v("标点符号放在外面")])])}],!1,null,null,null);r.options.__file="vuepress文档注意事项.md";s.default=r.exports}}]);