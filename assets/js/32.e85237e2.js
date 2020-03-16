(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{359:function(_,v,t){"use strict";t.r(v);var a=t(0),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"xss-攻击"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xss-攻击","aria-hidden":"true"}},[_._v("#")]),_._v(" XSS 攻击")]),_._v(" "),t("h2",{attrs:{id:"_1-1-什么是-xss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-什么是-xss","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.1 什么是 XSS")]),_._v(" "),t("p",[_._v("Cross-Site Scripting（跨站脚本攻击）简称 XSS，是一种代码注入攻击。攻击者通过在目标网站上注入恶意脚本，使之在用户的浏览器上运行。利用这些恶意脚本，攻击者可获取用户的敏感信息如 Cookie、SessionID 等，进而危害数据安全。")]),_._v(" "),t("p",[_._v("为了和 CSS 区分，这里把攻击的第一个字母改成了 X，于是叫做 XSS。")]),_._v(" "),t("p",[_._v("XSS 的本质是：恶意代码未经过滤，与网站正常的代码混在一起；浏览器无法分辨哪些脚本是可信的，导致恶意脚本被执行。")]),_._v(" "),t("p",[_._v("而由于直接在用户的终端执行，恶意代码能够直接获取用户的信息，或者利用这些信息冒充用户向网站发起攻击者定义的请求。")]),_._v(" "),t("p",[_._v("在部分情况下，由于输入的限制，注入的恶意脚本比较短。但可以通过引入外部的脚本，并由浏览器执行，来完成比较复杂的攻击策略。")]),_._v(" "),t("p",[_._v("不仅仅是业务上的“用户原创内容”可以进行注入，包括 URL 上的参数等都可以是攻击的来源。在处理输入时，以下内容都不可信：")]),_._v(" "),t("blockquote",[t("p",[_._v("来自用户原创内容信息\n来自第三方的链接\nURL 参数\nPOST 参数\nReferer （可能来自不可信的来源）\nCookie （可能来自其他子域注入）")])]),_._v(" "),t("h2",{attrs:{id:"_1-2-xss-分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-xss-分类","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.2 XSS 分类")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("存储区(恶意代码存放的位置)")]),_._v(" "),t("th",[_._v("插入点(由谁取得恶意代码，并插入到网页上)")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("存储型 XSS")]),_._v(" "),t("td",[_._v("后端数据库")]),_._v(" "),t("td",[_._v("HTML")])]),_._v(" "),t("tr",[t("td",[_._v("反射型 XSS")]),_._v(" "),t("td",[_._v("URL")]),_._v(" "),t("td",[_._v("HTML")])]),_._v(" "),t("tr",[t("td",[_._v("DOM 型 XSS")]),_._v(" "),t("td",[_._v("后端数据库、前端存储、URL")]),_._v(" "),t("td",[_._v("前端 JavaScript")])])])]),_._v(" "),t("h3",{attrs:{id:"_1-2-1-存储型-xss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-存储型-xss","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.2.1 存储型 XSS")]),_._v(" "),t("p",[_._v("存储型 XSS 的攻击步骤：")]),_._v(" "),t("ol",[t("li",[_._v("攻击者将恶意代码提交到目标网站的数据库中。")]),_._v(" "),t("li",[_._v("用户打开目标网站时，网站服务端将恶意代码从数据库取出，拼接在 HTML 中返回给浏览器。")]),_._v(" "),t("li",[_._v("用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。")]),_._v(" "),t("li",[_._v("恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。")])]),_._v(" "),t("p",[_._v("这种攻击常见于带有用户保存数据的网站功能，如论坛发帖、商品评论、用户私信等。")]),_._v(" "),t("h3",{attrs:{id:"_1-2-2-反射型-xss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-反射型-xss","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.2.2 反射型 XSS")]),_._v(" "),t("p",[_._v("反射型 XSS 的攻击步骤：")]),_._v(" "),t("ol",[t("li",[_._v("攻击者构造出特殊的 URL，其中包含恶意代码。")]),_._v(" "),t("li",[_._v("用户打开带有恶意代码的 URL 时，网站服务端将恶意代码从 URL 中取出，拼接在 HTML 中返回给浏览器。")]),_._v(" "),t("li",[_._v("用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。")]),_._v(" "),t("li",[_._v("恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。")])]),_._v(" "),t("p",[_._v("反射型 XSS 跟存储型 XSS 的区别是：存储型 XSS 的恶意代码存在数据库里，反射型 XSS 的恶意代码存在 URL 里。")]),_._v(" "),t("p",[_._v("反射型 XSS 漏洞常见于通过 URL 传递参数的功能，如网站搜索、跳转等。")]),_._v(" "),t("p",[_._v("由于需要用户主动打开恶意的 URL 才能生效，攻击者往往会结合多种手段诱导用户点击。")]),_._v(" "),t("p",[_._v("POST 的内容也可以触发反射型 XSS，只不过其触发条件比较苛刻（需要构造表单提交页面，并引导用户点击），所以非常少见。")]),_._v(" "),t("h3",{attrs:{id:"_1-2-3-dom-型-xss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-dom-型-xss","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.2.3 DOM 型 XSS")]),_._v(" "),t("p",[_._v("DOM 型 XSS 的攻击步骤：")]),_._v(" "),t("ol",[t("li",[_._v("攻击者构造出特殊的 URL，其中包含恶意代码。")]),_._v(" "),t("li",[_._v("用户打开带有恶意代码的 URL。")]),_._v(" "),t("li",[_._v("用户浏览器接收到响应后解析执行，前端 JavaScript 取出 URL 中的恶意代码并执行。")]),_._v(" "),t("li",[_._v("恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。")])]),_._v(" "),t("p",[_._v("DOM 型 XSS 跟前两种 XSS 的区别：DOM 型 XSS 攻击中，取出和执行恶意代码由浏览器端完成，属于前端 JavaScript 自身的安全漏洞，而其他两种 XSS 都属于服务端的安全漏洞。")]),_._v(" "),t("h2",{attrs:{id:"_1-3-xss-攻击的预防"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-xss-攻击的预防","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.3 XSS 攻击的预防")]),_._v(" "),t("p",[_._v("XSS 攻击有两大要素：")]),_._v(" "),t("ol",[t("li",[_._v("攻击者提交恶意代码。")]),_._v(" "),t("li",[_._v("浏览器执行恶意代码。")])]),_._v(" "),t("h3",{attrs:{id:"_1-3-1-预防提交恶意代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-预防提交恶意代码","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.3.1 预防提交恶意代码")]),_._v(" "),t("p",[_._v("提交恶意代码是由于在浏览器端输入数据，比如评论内容、表单输入等。")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("前端在输入时过滤不可靠")]),_._v(" "),t("p",[_._v("由于攻击者可以绕过前端，直接通过API构造请求，所以前端过滤不可靠。")])]),_._v(" "),t("li",[t("p",[_._v("后端存储数据时过滤也是不可靠的")]),_._v(" "),t("p",[_._v("后端在写入数据库前对输入进行过滤也是不可靠的，可能会给前端造成乱码问题。")]),_._v(" "),t("p",[_._v("比如用户输入的"),t("code",[_._v("5 < 7")]),_._v(", 后端在写入数据库前转义成了"),t("code",[_._v("5 &lt; 7")]),_._v("。")]),_._v(" "),t("p",[_._v("如果此内容被用于HTML拼接时可以正常显示：")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("<div>5 &lt; 7</div>\n")])])]),t("div",[_._v("5 < 7")]),_._v(" "),t("p",[_._v("但是如果"),t("code",[_._v("5 &lt; 7")]),_._v("是通过Ajax返回，然后赋值给JS变量，这个内容不能直接用于Vue等模板的展示，也不能直接用于内容长度计算，不能用于标题、alert等。")])])]),_._v(" "),t("p",[_._v("对于明确的输入类型，例如数字、URL、电话号码、邮件地址等等内容，进行输入过滤还是必要的。")]),_._v(" "),t("h3",{attrs:{id:"_1-3-2-预防浏览器执行恶意代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-预防浏览器执行恶意代码","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.3.2 预防浏览器执行恶意代码")]),_._v(" "),t("ul",[t("li",[_._v("防止 HTML 中出现注入。")]),_._v(" "),t("li",[_._v("防止 JavaScript 执行时，执行恶意代码。")])]),_._v(" "),t("h3",{attrs:{id:"_1-3-3-预防存储型和反射型-xss-攻击"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-3-预防存储型和反射型-xss-攻击","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.3.3 预防存储型和反射型 XSS 攻击")]),_._v(" "),t("p",[_._v("存储型和反射型 XSS 都是在服务端取出恶意代码后，插入到响应 HTML 里的，攻击者刻意编写的“数据”被内嵌到“代码”中，被浏览器所执行。")]),_._v(" "),t("p",[_._v("预防这两种漏洞，有两种常见做法：")]),_._v(" "),t("ul",[t("li",[_._v("改成纯前端渲染，把代码和数据分隔开。")]),_._v(" "),t("li",[_._v("对 HTML 做充分转义。")])]),_._v(" "),t("h4",{attrs:{id:"_1-3-3-1-纯前端渲染"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-3-1-纯前端渲染","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.3.3.1 纯前端渲染")]),_._v(" "),t("p",[_._v("纯前端渲染的过程：")]),_._v(" "),t("ol",[t("li",[_._v("浏览器先加载一个静态 HTML，此 HTML 中不包含任何跟业务相关的数据。")]),_._v(" "),t("li",[_._v("然后浏览器执行 HTML 中的 JavaScript。")]),_._v(" "),t("li",[_._v("JavaScript 通过 Ajax 加载业务数据，调用 DOM API 更新到页面上。")])]),_._v(" "),t("p",[_._v("在纯前端渲染中，我们会明确的告诉浏览器：下面要设置的内容是文本（"),t("code",[_._v(".innerText")]),_._v("），还是属性（"),t("code",[_._v(".setAttribute")]),_._v("），还是样式（"),t("code",[_._v(".style")]),_._v("）等等。浏览器不会被轻易的被欺骗，执行预期外的代码了。")]),_._v(" "),t("p",[_._v("但纯前端渲染还需注意避免 DOM 型 XSS 漏洞（例如 "),t("code",[_._v("onload")]),_._v(" 事件和 "),t("code",[_._v("href")]),_._v(" 中的 "),t("code",[_._v("javascript:xxx")]),_._v(" 等，请参考下文”预防 DOM 型 XSS 攻击“部分）。")]),_._v(" "),t("p",[_._v("在很多内部、管理系统中，采用纯前端渲染是非常合适的。但对于性能要求高，或有 SEO 需求的页面，我们仍然要面对拼接 HTML 的问题。")]),_._v(" "),t("h4",{attrs:{id:"_1-3-3-2-转义-html"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-3-2-转义-html","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.3.3.2 转义 HTML")]),_._v(" "),t("p",[_._v("如果拼接 HTML 是必要的，就需要采用合适的转义库，对 HTML 模板各处插入点进行充分的转义。")]),_._v(" "),t("p",[_._v("常用的模板引擎，如 doT.js、ejs、FreeMarker 等，对于 HTML 转义通常只有一个规则，就是把 "),t("code",[_._v("& < > \" ' /")]),_._v(" 这几个字符转义掉，确实能起到一定的 XSS 防护作用，但并不完善：")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("XSS 安全漏洞")]),_._v(" "),t("th",[_._v("简单转义是否有防护作用")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("HTML 标签文字内容")]),_._v(" "),t("td",[_._v("有")])]),_._v(" "),t("tr",[t("td",[_._v("HTML 属性值")]),_._v(" "),t("td",[_._v("有")])]),_._v(" "),t("tr",[t("td",[_._v("CSS 内联样式")]),_._v(" "),t("td",[_._v("无")])]),_._v(" "),t("tr",[t("td",[_._v("内联 JavaScript")]),_._v(" "),t("td",[_._v("无")])]),_._v(" "),t("tr",[t("td",[_._v("内联 JSON")]),_._v(" "),t("td",[_._v("无")])]),_._v(" "),t("tr",[t("td",[_._v("跳转链接")]),_._v(" "),t("td",[_._v("无")])])])]),_._v(" "),t("p",[_._v("所以要完善 XSS 防护措施，我们要使用更完善更细致的转义策略。")]),_._v(" "),t("h3",{attrs:{id:"_1-3-4-预防-dom-型-xss-攻击"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-4-预防-dom-型-xss-攻击","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.3.4 预防 DOM 型 XSS 攻击")]),_._v(" "),t("p",[_._v("DOM 型 XSS 攻击，实际上就是网站前端 JavaScript 代码本身不够严谨，把不可信的数据当作代码执行了。")]),_._v(" "),t("p",[_._v("在使用 "),t("code",[_._v(".innerHTML")]),_._v("、"),t("code",[_._v(".outerHTML")]),_._v("、"),t("code",[_._v("document.write()")]),_._v(" 时要特别小心，不要把不可信的数据作为 HTML 插到页面上，而应尽量使用 "),t("code",[_._v(".textContent")]),_._v("、"),t("code",[_._v(".setAttribute()")]),_._v(" 等。")]),_._v(" "),t("p",[_._v("如果用 Vue/React 技术栈，并且不使用 "),t("code",[_._v("v-html")]),_._v("/"),t("code",[_._v("dangerouslySetInnerHTML")]),_._v(" 功能，就在前端 render 阶段避免 "),t("code",[_._v("innerHTML")]),_._v("、"),t("code",[_._v("outerHTML")]),_._v(" 的 XSS 隐患。")]),_._v(" "),t("p",[_._v("DOM 中的内联事件监听器，如 "),t("code",[_._v("location")]),_._v("、"),t("code",[_._v("onclick")]),_._v("、"),t("code",[_._v("onerror")]),_._v("、"),t("code",[_._v("onload")]),_._v("、"),t("code",[_._v("onmouseover")]),_._v(" 等，"),t("code",[_._v("<a>")]),_._v(" 标签的 "),t("code",[_._v("href")]),_._v(" 属性，JavaScript 的 "),t("code",[_._v("eval()")]),_._v("、"),t("code",[_._v("setTimeout()")]),_._v("、"),t("code",[_._v("setInterval()")]),_._v(" 等，都能把字符串作为代码运行。如果不可信的数据拼接到字符串中传递给这些 API，很容易产生安全隐患，请务必避免。")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v('\x3c!-- 内联事件监听器中包含恶意代码 --\x3e\n![](https://awps-assets.meituan.net/mit-x/blog-images-bundle-2018b/3e724ce0.data:image/png,)\n\n\x3c!-- 链接内包含恶意代码 --\x3e\n<a href="UNTRUSTED">1</a>\n\n<script>\n// setTimeout()/setInterval() 中调用恶意代码\nsetTimeout("UNTRUSTED")\nsetInterval("UNTRUSTED")\n\n// location 调用恶意代码\nlocation.href = \'UNTRUSTED\'\n\n// eval() 中调用恶意代码\neval("UNTRUSTED")\n<\/script>\n')])])]),t("p",[_._v("如果项目中有用到这些的话，一定要避免在字符串中拼接不可信数据。")]),_._v(" "),t("h3",{attrs:{id:"_1-3-5-其他xss防范措施"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-5-其他xss防范措施","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.3.5 其他XSS防范措施")]),_._v(" "),t("p",[_._v("在渲染页面和执行JavaScript是，通过谨慎的转义可以防止XSS的发生，但完全依靠开发的谨慎仍然是不够的。下面是一些通用的方案：")]),_._v(" "),t("p",[_._v("1、 Content Security Policy")]),_._v(" "),t("p",[_._v("严格的 CSP 在 XSS 的防范中可以起到以下的作用：")]),_._v(" "),t("ul",[t("li",[_._v("禁止加载外域代码，防止复杂的攻击逻辑。")]),_._v(" "),t("li",[_._v("禁止外域提交，网站被攻击后，用户的数据不会泄露到外域。")]),_._v(" "),t("li",[_._v("禁止内联脚本执行（规则较严格，目前发现 GitHub 使用）。")]),_._v(" "),t("li",[_._v("禁止未授权的脚本执行（新特性，Google Map 移动版在使用）。")]),_._v(" "),t("li",[_._v("合理使用上报可以及时发现 XSS，利于尽快修复问题。")])]),_._v(" "),t("p",[_._v("2、输入内容长度控制")]),_._v(" "),t("p",[_._v("对于不受信任的输入，都应该限定一个合理的长度。虽然无法完全防止 XSS 发生，但可以增加 XSS 攻击的难度。")]),_._v(" "),t("p",[_._v("3、其他安全措施")]),_._v(" "),t("ul",[t("li",[_._v("HTTP-only Cookie: 禁止 JavaScript 读取某些敏感 Cookie，攻击者完成 XSS 注入后也无法窃取此 Cookie。")]),_._v(" "),t("li",[_._v("验证码：防止脚本冒充用户提交危险操作。")])]),_._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[_._v("#")]),_._v(" 参考资料")]),_._v(" "),t("p",[_._v("XSS攻击介绍：https://tech.meituan.com/2018/09/27/fe-security.html")])])}],!1,null,null,null);e.options.__file="005-XSS攻击.md";v.default=e.exports}}]);