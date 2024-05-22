(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{811:function(o,_,v){"use strict";v.r(_);var e=v(69),s=Object(e.a)({},(function(){var o=this,_=o.$createElement,v=o._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[v("h2",{attrs:{id:"_1、cookie"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、cookie"}},[o._v("#")]),o._v(" 1、cookie")]),o._v(" "),v("p",[v("code",[o._v("cookie")]),o._v("存在于浏览器端，是客户端保存用户信息的一种机制，用来记录用户的一些信息。是通过扩展"),v("code",[o._v("HTTP")]),o._v("协议来实现的，服务器通过在"),v("code",[o._v("HTTP")]),o._v("的响应头加上一行特殊的指示("),v("code",[o._v("set-cookie")]),o._v(")以提示浏览器按照指示生成对应的"),v("code",[o._v("cookie")]),o._v("。主要用于以下三个方面。")]),o._v(" "),v("ul",[v("li",[o._v("1、会话状态管理（保存用户登录状态等需要记录的信息）")]),o._v(" "),v("li",[o._v("2、个性化设置（用户自定义主题、设置等）")]),o._v(" "),v("li",[o._v("3、浏览器行为跟踪（跟踪分析用户行为）")])]),o._v(" "),v("p",[v("strong",[o._v("cookie的原理：")])]),o._v(" "),v("ul",[v("li",[o._v("1、网络服务器用"),v("code",[o._v("HTTP")]),o._v("头向客户端发送"),v("code",[o._v("cookies")]),o._v(",在客户端，浏览器解析这"),v("code",[o._v("cookies")]),o._v("并将它们保存为一个文件。")]),o._v(" "),v("li",[o._v("2、当客户端向服务器请求数据时，会自动带上"),v("code",[o._v("cookie")]),o._v("发送到服务器。")])]),o._v(" "),v("p",[v("strong",[o._v("cookie的存活时间")])]),o._v(" "),v("p",[v("code",[o._v("cookie")]),o._v("的内容包括：名字、值、过期时间、路径和域。路径和域一起构成"),v("code",[o._v("cookie")]),o._v("的作用范围。如果不设置过期时间，则表示该"),v("code",[o._v("cookie")]),o._v("的生命周期为浏览器会话期间，关闭浏览器窗口，"),v("code",[o._v("cookie")]),o._v("就消失，一般保存在内存中（"),v("code",[o._v("会话cookie")]),o._v("），如果设置了过期时间，该"),v("code",[o._v("cookie")]),o._v("则会被保存到硬盘里("),v("code",[o._v("硬盘cookie")]),o._v(")。")]),o._v(" "),v("h2",{attrs:{id:"_2、sessionstorage"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、sessionstorage"}},[o._v("#")]),o._v(" 2、sessionStorage")]),o._v(" "),v("p",[o._v("  客户端的存储，基于"),v("code",[o._v("html5")]),o._v("，本地存储。可以将数据在当前会话中保存下来。"),v("strong",[o._v("刷新页面数据依然存在，但是关闭页面后，sessionStorage中的数据就会被清空。")])]),o._v(" "),v("h2",{attrs:{id:"_3、localstorage"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、localstorage"}},[o._v("#")]),o._v(" 3、localStorage")]),o._v(" "),v("p",[o._v("  是"),v("code",[o._v("HTML5")]),o._v("标准中新添加的技术。本地存储，存储在本地硬盘。除非手动清除，否则永久保存。")]),o._v(" "),v("h2",{attrs:{id:"_4、cookie-localstorage-与-sessionstorage的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4、cookie-localstorage-与-sessionstorage的区别"}},[o._v("#")]),o._v(" 4、Cookie, localStorage 与 sessionStorage的区别")]),o._v(" "),v("ul",[v("li",[o._v("1、数据的周期生命")])]),o._v(" "),v("p",[v("code",[o._v("cookie")]),o._v("可设置失效时间，"),v("strong",[o._v("默认是关闭浏览器后失效。")]),v("br"),o._v(" "),v("code",[o._v("localStorage")]),o._v("除非被手动清除，否则永久保存。"),v("br"),o._v(" "),v("code",[o._v("sessionStorage")]),o._v("仅在当前会话下有效，关闭页面或浏览器后被清除。"),v("br")]),o._v(" "),v("ul",[v("li",[o._v("2、存放数据大小")])]),o._v(" "),v("p",[o._v("  单个"),v("code",[o._v("cookie")]),o._v("一般4k左右。"),v("code",[o._v("localStorage")]),o._v("和"),v("code",[o._v("sessionStorage")]),o._v("一般5M左右。")]),o._v(" "),v("ul",[v("li",[o._v("3、与服务器通信")])]),o._v(" "),v("p",[v("code",[o._v("cookie")]),o._v("每次都会携带在"),v("code",[o._v("HTTP")]),o._v("头中，如果使用"),v("code",[o._v("cookie")]),o._v("保存过多数据会带来性能问题。"),v("br"),o._v(" "),v("code",[o._v("localStorage")]),o._v("和"),v("code",[o._v("sessionStorage")]),o._v("仅在客户端（即浏览器）中保存，不参与和服务器的通信")]),o._v(" "),v("ul",[v("li",[o._v("4、易用性")])]),o._v(" "),v("p",[v("code",[o._v("cookie")]),o._v("需要程序员自己封装，源生的"),v("code",[o._v("Cookie")]),o._v("接口不友好。"),v("code",[o._v("localStorage")]),o._v("和"),v("code",[o._v("sessionStorage")]),o._v("都有封装好的接口。")]),o._v(" "),v("h2",{attrs:{id:"_5、session"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5、session"}},[o._v("#")]),o._v(" 5、session")]),o._v(" "),v("p",[v("code",[o._v("session")]),o._v("存在于服务器端，依赖于"),v("code",[o._v("cookie")]),o._v("("),v("code",[o._v("cookie")]),o._v("可以被人为的禁止，所以有其他机制可以在"),v("code",[o._v("cookie")]),o._v("被禁用时，仍然能够把"),v("code",[o._v("sessionId")]),o._v("传递到服务器`)。是服务端保存的一个数据结构，用来跟踪用户的状态。可以保存在内存、数据库和文件中。"),v("br")]),o._v(" "),v("p",[v("strong",[o._v("session的原理：")])]),o._v(" "),v("ul",[v("li",[o._v("1、用户第一次请求服务器的时候，服务器根据用户提交的相关信息，创建一个对应的"),v("code",[o._v("session")]),o._v("对象，并向客户端响应了一个"),v("code",[o._v("cookie")]),o._v("，"),v("code",[o._v("cookie")]),o._v("里面保存了"),v("code",[o._v("sessionId")]),o._v("，这个时候会话才开始,（"),v("code",[o._v("关闭浏览器会话也不会结束")]),o._v("）并根据"),v("code",[o._v("sessionId")]),o._v("在"),v("code",[o._v("session")]),o._v("池中寻找有没有该"),v("code",[o._v("session")]),o._v("，没有则将之添加到"),v("code",[o._v("session")]),o._v("池。（"),v("code",[o._v("有一个默认存放时间，被取出时会重新设置默认存放时间")]),o._v("）。")]),o._v(" "),v("li",[o._v("2、用户第二次请求时，请求会自动判断此域名下是否存在 "),v("code",[o._v("Cookie")]),o._v(" 信息，如果存在会将 "),v("code",[o._v("cookie")]),o._v(" 信息也发送给服务器。服务器根据客户端中的 "),v("code",[o._v("cookie")]),o._v(" 中的 "),v("code",[o._v("sessionId")]),o._v(" 去"),v("code",[o._v("session")]),o._v(" 池中寻找会话。如果找到 "),v("code",[o._v("session")]),o._v(" 证明该用户已经登录并且可以执行后面的操作。")])]),o._v(" "),v("p",[v("strong",[o._v("cookie被禁用时的处理")])]),o._v(" "),v("ul",[v("li",[o._v("1、"),v("code",[o._v("URL")]),o._v("重写,把 "),v("code",[o._v("sessionId")]),o._v(" 直接附加在URL路径的后面。")]),o._v(" "),v("li",[o._v("2、表单隐藏域(表单隐藏字段"),v("code",[o._v('type="hidden"')]),o._v("),服务器会自动修改表单，添加一个隐藏字段，以便在表单提交时能够把 "),v("code",[o._v("sessionId")]),o._v(" 传递回服务器。")])]),o._v(" "),v("p",[v("strong",[o._v("session会话结束的两种情况：")])]),o._v(" "),v("ul",[v("li",[o._v("1、服务器端的 "),v("code",[o._v("session")]),o._v("超时。")]),o._v(" "),v("li",[o._v("2、用户将客户端的"),v("code",[o._v("cookie")]),o._v(" 给清除了("),v("code",[o._v("session依赖cookie")]),o._v(")。")])]),o._v(" "),v("h2",{attrs:{id:"_6、cookie和session的区别？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6、cookie和session的区别？"}},[o._v("#")]),o._v(" 6、cookie和session的区别？")]),o._v(" "),v("ul",[v("li",[v("strong",[o._v("1、存取方式的不同")])])]),o._v(" "),v("p",[v("code",[o._v("cookie")]),o._v("中只能保存"),v("code",[o._v("ASCII")]),o._v("字符串，如果需要存取"),v("code",[o._v("Unicode")]),o._v("字符或者二进制数据，需要先进行转码。"),v("br"),o._v(" "),v("code",[o._v("session")]),o._v("能够存取任何类型的数据，包括但不限于"),v("code",[o._v("String、Integer、List、Map")]),o._v("等。")]),o._v(" "),v("ul",[v("li",[v("strong",[o._v("2、隐私策略的不同")])])]),o._v(" "),v("p",[v("code",[o._v("cookie")]),o._v("存储在客户端中，对客户是可见的，客户端的一些程序可能会窥探、复制以至修正"),v("code",[o._v("cookie")]),o._v("中的内容。"),v("br"),o._v(" "),v("code",[o._v("session")]),o._v("存储在服务器上，对客户是透明的，不存在敏感信息泄露的风险。")]),o._v(" "),v("ul",[v("li",[v("strong",[o._v("3、有效期上的不同")])])]),o._v(" "),v("p",[v("code",[o._v("cookie")]),o._v("可以设置过期时间来保存用户信息在客户端保存的期限。"),v("br"),o._v(" "),v("code",[o._v("session")]),o._v("依赖"),v("code",[o._v("cookie")]),o._v("，一旦"),v("code",[o._v("cookie")]),o._v("被清除，"),v("code",[o._v("session")]),o._v("就会失效。或者当客户端关闭会话，"),v("code",[o._v("session")]),o._v("超时失效导致会话结束。")]),o._v(" "),v("ul",[v("li",[v("strong",[o._v("4、服务器压力的不同")])])]),o._v(" "),v("p",[v("code",[o._v("cookie")]),o._v("保管在客户端，不占用服务器资源。"),v("br"),o._v(" "),v("code",[o._v("session")]),o._v("是保管在服务器端的，每个用户都会产生一个"),v("code",[o._v("session")]),o._v("。加入并发的用户非常多，会产生大量的"),v("code",[o._v("session")]),o._v("，消耗大量的内存。")]),o._v(" "),v("ul",[v("li",[v("strong",[o._v("5、浏览器支持的不同")])])]),o._v(" "),v("p",[v("code",[o._v("cookie")]),o._v("是需要客户端支持的。假如客户端禁用了"),v("code",[o._v("cookie")]),o._v("或者不支持"),v("code",[o._v("cookie")]),o._v("，则会话跟踪会失效。"),v("br"),o._v("\n  假如客户端浏览器不支持"),v("code",[o._v("cookie")]),o._v("，则需要运用"),v("code",[o._v("session")]),o._v("及URL地址重写或者采用表单隐藏域。"),v("br"),o._v("\n  假如客户端支持"),v("code",[o._v("cookie")]),o._v("，则"),v("code",[o._v("cookie")]),o._v("可以设置为在本浏览器窗口以及子窗口内有效，也能够设为一切阅读器窗口内有效。但是"),v("code",[o._v("session")]),o._v("只能在本阅读器窗口及其子窗口内有效。假如两个浏览器窗口互不相干，它们将运用不同的"),v("code",[o._v("session")]),o._v("。")]),o._v(" "),v("ul",[v("li",[v("strong",[o._v("6、跨域支持上的不同")])])]),o._v(" "),v("p",[v("code",[o._v("cookie")]),o._v("支持跨域名访问。"),v("code",[o._v("session")]),o._v("不支持跨域名访问。仅在它所在的域名内有效。")]),o._v(" "),v("ul",[v("li",[v("strong",[o._v("7、存储大小的不同")])])]),o._v(" "),v("p",[o._v("  单个"),v("code",[o._v("cookie")]),o._v("保存的数据不能超过4k，"),v("code",[o._v("session")]),o._v("就没有这个限制。")]),o._v(" "),v("Valine")],1)}),[],!1,null,null,null);_.default=s.exports}}]);