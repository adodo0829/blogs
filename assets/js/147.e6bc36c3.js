(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{847:function(t,a,s){"use strict";s.r(a);var n=s(69),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("strong",[t._v("nginx是一款轻量级的HTTP服务器，采用事件驱动的异步非阻塞处理方式，时常用于服务器的反向代理和负载均衡。")]),t._v("\nnginx和node.js的对比。")]),t._v(" "),s("blockquote",[s("p",[t._v("nginx的优势：更擅长底层服务器端资源的处理。如静态资源处理转发，反向代理和负载均衡。\nnode更擅长上层具体业务逻辑的处理。")])]),t._v(" "),s("h2",{attrs:{id:"_1、什么是代理？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、什么是代理？"}},[t._v("#")]),t._v(" 1、什么是代理？")]),t._v(" "),s("p",[t._v("  代理其实就是在client端和server端之间增加一层提供特殊服务的服务器，及代理服务器。")]),t._v(" "),s("h2",{attrs:{id:"_2、代理的分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、代理的分类"}},[t._v("#")]),t._v(" 2、代理的分类")]),t._v(" "),s("h3",{attrs:{id:"_2-1-正向代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-正向代理"}},[t._v("#")]),t._v(" 2.1 正向代理")]),t._v(" "),s("p",[t._v("  代理服务器跟客户端处理同一个局域网（LAN）；代理对用户是非透明的，用户需要感自己知或者操作自己的请求被发送到代理服务器；然后代理服务器通过代理服务器的请求向域外服务器请求响应内容。我们常用的翻墙工具就是一个正向代理服务器，会把访问墙外服务器服务的的网络请求，代理到一个可以访问该网站的代理服务器proxy，这个代理服务器把墙外服务器上的资源获取，再转发给用户。如下图所示。\n"),s("img",{attrs:{alt:"nginx-proxy","data-width":"625","data-height":"467",src:"https://user-gold-cdn.xitu.io/2018/9/27/1661ac31c06b0681?imageView2/0/w/1280/h/960/format/webp/ignore-error/1"}})]),t._v(" "),s("h3",{attrs:{id:"_2-2-反向代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-反向代理"}},[t._v("#")]),t._v(" 2.2 反向代理")]),t._v(" "),s("p",[t._v('  代理服务器跟内部服务器之间可以互相访问，属于同一个局域网（LAN）；代理对用户是透明的，即无感知，即加不加这个代理，用户都会通过相同的请求进行的。且不需要任何额外的操作；代理服务器通过代理内部服务器接收域外客户端的请求，并将请求发送到对应的内部服务器上。反向代理的意思——代理服务器。\n<img alt="nginx-proxy-reverse"data-width="655" data-height="499" src="https://user-gold-cdn.xitu.io/2018/9/27/1661ac31c192d22f?imageView2/0/w/1280/h/960/format/webp/ignore-error/1">\n'),s("strong",[t._v("反向代理的好处？")])]),t._v(" "),s("ul",[s("li",[t._v("1、安全及权限。使用反向代理后，用户端将无法直接访问正真的内容服务器，而是通过Nginx将没有权限或者危险的请求内容过滤掉，从而保证服务器的安全。")]),t._v(" "),s("li",[t._v("2、负载均衡。一个网站上的内容可以部署到多态服务器上，形成一个集群。那么Nginx可以将接收到的客户端请求“均匀地”分配到这个集群中所有的服务器上（内部模块提供了多种负载均衡算法），从而实现服务器压力的负载均衡。同时Nginx还带有（服务器心跳检查功能），来检查服务器是否异常，从而保证客户端请求的稳定性。")])]),t._v(" "),s("h2",{attrs:{id:"_3、nginx是什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、nginx是什么？"}},[t._v("#")]),t._v(" 3、nginx是什么？")]),t._v(" "),s("p",[t._v("  Nginx是一个开源且高性能、可靠的HTTP中间件、代理服务器。")]),t._v(" "),s("h3",{attrs:{id:"_3-1常见的http服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1常见的http服务"}},[t._v("#")]),t._v(" 3.1常见的HTTP服务")]),t._v(" "),s("p",[t._v("  HTTPD-Apache基金会、IIS-微软、GWS-Google。")]),t._v(" "),s("h3",{attrs:{id:"_3-2-为什么选择nginx？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-为什么选择nginx？"}},[t._v("#")]),t._v(" 3.2 为什么选择Nginx？")]),t._v(" "),s("ul",[s("li",[t._v("1、IO多路复用epoll\nIO多路复用：多个描述符的I/O操作都能在一个线程内并发交替的顺序完成。这里的“复用”指的是复用同一个线程。\nIO多路复用的实现方式：select、poll、epoll\n1.1 什么是select？\n1.2 select的缺点？\n1、能够监视文件描述符的数量存在最大限制\n2、线性扫描效率低下\n2、epoll模型\n1、每当FD就绪，采用系统的回调函数之间将fd放入，效率更高。\n2、最大连接无限制。")]),t._v(" "),s("li",[t._v("2、轻量级\n1、功能模块少\n2、代码模块化")]),t._v(" "),s("li",[t._v("3、"),s("code",[t._v("CPU")]),t._v("亲和("),s("code",[t._v("affinity")]),t._v(")\n是一种把CPU核心和Nginx工作进程绑定的方式，把每个worker进程固定在一个CPU上执行，减少切换 "),s("code",[t._v("cpu")]),t._v(" 的 "),s("code",[t._v("cache miss")]),t._v("，获得更好的性能。")]),t._v(" "),s("li",[t._v("4、"),s("code",[t._v("sendfile")])])]),t._v(" "),s("h2",{attrs:{id:"_4、nginx反向代理可以做什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、nginx反向代理可以做什么？"}},[t._v("#")]),t._v(" 4、Nginx反向代理可以做什么？")]),t._v(" "),s("ul",[s("li",[t._v("1、快速实现简单的访问限制")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("    location "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        deny  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        allow "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".10")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        allow "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.110")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".50")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        deny  all"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("ul",[s("li",[t._v("2、解决跨域")]),t._v(" "),s("li",[t._v("3、适配PC与移动环境")]),t._v(" "),s("li",[t._v("4、合并请求")]),t._v(" "),s("li",[t._v("5、图片处理")]),t._v(" "),s("li",[t._v("6、页面内容修改")])])])}),[],!1,null,null,null);a.default=e.exports}}]);