(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{644:function(t,s,a){t.exports=a.p+"assets/img/load-script.5f236cae.png"},832:function(t,s,a){"use strict";a.r(s);var n=a(69),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"_1、css资源的加载-异步加载的"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、css资源的加载-异步加载的"}},[t._v("#")]),t._v(" 1、CSS资源的加载(异步加载的)")]),t._v(" "),n("ul",[n("li",[t._v("遇到 "),n("code",[t._v("style")]),t._v(' 内联样式，"同步"交给'),n("code",[t._v("GUI")]),t._v(" 渲染线程解析。")]),t._v(" "),n("li",[t._v("遇到 "),n("code",[t._v("link")]),t._v(" 标签。\n"),n("ul",[n("li",[t._v('"异步" 开辟一个新的 '),n("code",[t._v("HTTP")]),t._v("网络请求线程。")]),t._v(" "),n("li",[t._v("不等待资源信息请求回来，"),n("code",[t._v("GUI")]),t._v(" 渲染线程继续向下渲染。")]),t._v(" "),n("li",[n("code",[t._v("GUI")]),t._v(" 渲染线程同步操作都处理完后，再把基于"),n("code",[t._v("HTTP")]),t._v(" 网络线程请求回来的资源文件进行解析渲染。")])])]),t._v(" "),n("li",[t._v("遇到 "),n("code",[t._v("@import")]),t._v(" 导入样式。同步开辟一个新的 "),n("code",[t._v("HTTP")]),t._v("网络请求线程 去请求资源文件。在资源文件没有请求回来之前，"),n("code",[t._v("GUI")]),t._v(' 渲染线程会被"阻塞",不允许其继续向下渲染。')])]),t._v(" "),n("h2",{attrs:{id:"_2、script-资源的加载-默认是同步加载的"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、script-资源的加载-默认是同步加载的"}},[t._v("#")]),t._v(" 2、script 资源的加载(默认是同步加载的)")]),t._v(" "),n("ul",[n("li",[t._v('默认是"同步"的：必须基于'),n("code",[t._v("HTTP")]),t._v(" 网络线程，把资源请求回来之后，并且交给"),n("code",[t._v("js")]),t._v(" 渲染线程解析完成后，"),n("code",[t._v("GUI")]),t._v(" 渲染线程才能继续向下渲染。"),n("code",[t._v("script")]),t._v("默认是阻碍"),n("code",[t._v("GUI")]),t._v("渲染的。")]),t._v(" "),n("li",[n("code",[t._v("async")]),t._v("属性：遇到 "),n("code",[t._v("<script async>")]),t._v("时，首先也是开辟一个"),n("code",[t._v("HTTP")]),t._v("网络线程去请求加载资源文件，与此同时"),n("code",[t._v("GUI")]),t._v('渲染线程继续向下渲染（吧默认的同步改为"异步"）,但是一旦资源请求回来后，会中断'),n("code",[t._v("GUI")]),t._v("的渲染，先把请求回来的"),n("code",[t._v("js")]),t._v("进行渲染解析。才会渲染解析请求回来的"),n("code",[t._v("js")]),t._v(" 代码。\n"),n("img",{attrs:{src:a(644),title:"暂无图片"}})])]),t._v(" "),n("h2",{attrs:{id:"_3、图片或者音频、视频资源"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、图片或者音频、视频资源"}},[t._v("#")]),t._v(" 3、图片或者音频、视频资源")]),t._v(" "),n("p",[t._v("  会发起新的"),n("code",[t._v("HTTP")]),t._v("网络请求，请求加载的资源文件，不会阻碍"),n("code",[t._v("GUI")]),t._v('的渲染("异步")。当'),n("code",[t._v("GUI")]),t._v(" 渲染完成后，才会把请求回来的资源信息进行渲染解析。")]),t._v(" "),n("h2",{attrs:{id:"_4、页面渲染的步骤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4、页面渲染的步骤"}},[t._v("#")]),t._v(" 4、页面渲染的步骤")]),t._v(" "),n("ul",[n("li",[t._v("生成"),n("code",[t._v("DOM TREE")]),t._v("("),n("code",[t._v("DOM")]),t._v("树)：自上而下渲染页面，整理好整个页面的"),n("code",[t._v("DOM")]),t._v("结构关系。")]),t._v(" "),n("li",[t._v("生成"),n("code",[t._v("CSSOM TREE")]),t._v("(样式树)：当把所有的样式资源请求加载回来后，按照引入"),n("code",[t._v("CSS")]),t._v("的顺序，依次渲染样式代码，生成样式树。")]),t._v(" "),n("li",[n("code",[t._v("RENDER TREE")]),t._v("(渲染树)：将"),n("code",[t._v("DOM TREE")]),t._v("和 "),n("code",[t._v("CSSOM TREE")]),t._v(" 合成渲染树（"),n("code",[t._v("display")]),t._v("为"),n("code",[t._v("none")]),t._v("的不会去渲染）。")]),t._v(" "),n("li",[n("code",[t._v("Layout")]),t._v(" 布局/回流/重绘：计算它们在设备视口("),n("code",[t._v("viewport")]),t._v(")内的确切位置和大小。")]),t._v(" "),n("li",[t._v("分层处理：按照层级定位分层处理，每一个层级都会详细规划处具体的绘制步骤。")]),t._v(" "),n("li",[n("code",[t._v("Painting")]),t._v(":按照每一个层级计算绘制的绘制步骤，开始绘制页面。")])]),t._v(" "),n("h2",{attrs:{id:"_5、前端性能优化（crp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5、前端性能优化（crp"}},[t._v("#")]),t._v(" 5、前端性能优化（CRP:")]),t._v(" "),n("ul",[n("li",[t._v("生成 "),n("code",[t._v("DOM TREE")]),t._v("阶段\n"),n("ul",[n("li",[t._v("减少"),n("code",[t._v("dom")]),t._v("层级嵌套")]),t._v(" "),n("li",[t._v("不要使用非标准标签。")])])]),t._v(" "),n("li",[t._v("生成 "),n("code",[t._v("CSSOM")]),t._v(" 树\n"),n("ul",[n("li",[t._v("尽可能不要使用"),n("code",[t._v("@import")]),t._v("（阻塞"),n("code",[t._v("GUI")]),t._v("渲染）")]),t._v(" "),n("li",[t._v("如果"),n("code",[t._v("CSS")]),t._v("代码较少，尽可能使用"),n("code",[t._v("style")]),t._v("内联样式")]),t._v(" "),n("li",[t._v("如果使用 "),n("code",[t._v("link")]),t._v("，尽可能把所有的样式资源合并成一个 "),n("code",[t._v("CSS")]),t._v("，且压缩(减少"),n("code",[t._v("HTTP")]),t._v(" 请求数量，同时在渲染 "),n("code",[t._v("CSS")]),t._v("的时候，也不需要在计算依赖关系)")]),t._v(" "),n("li",[n("code",[t._v("CSS")]),t._v("选择器链短一些("),n("code",[t._v("CSS")]),t._v("选择器渲染时从右到左的)")]),t._v(" "),n("li",[t._v("将"),n("code",[t._v("link")]),t._v("等导入"),n("code",[t._v("CSS")]),t._v("的操作放在"),n("code",[t._v("HEAD")]),t._v("中。")])])]),t._v(" "),n("li",[n("code",[t._v("script")]),t._v("资源的优化\n"),n("ul",[n("li",[n("code",[t._v("script")]),t._v("标签。尽量放在页面的底部。")]),t._v(" "),n("li",[t._v("使用"),n("code",[t._v("async")]),t._v("时，哪一个资源先获取到，就把这个资源代码渲染执行。")]),t._v(" "),n("li",[t._v("使用"),n("code",[t._v("defer")]),t._v("时，和"),n("code",[t._v("link")]),t._v("一样，等所有"),n("code",[t._v("<script defer>")]),t._v("都请求回来后，按照导入顺序/依赖关系依次先后渲染。")])])]),t._v(" "),n("li",[n("code",[t._v("img")]),t._v("资源的优化\n"),n("ul",[n("li",[t._v("懒加载：第一次加载页面的时候不要加载请求图片，哪怕是异步的，也会占据"),n("code",[t._v("HTTP")]),t._v("并发的数量,导致其他资源后加载。")]),t._v(" "),n("li",[t._v("图片的"),n("code",[t._v("BASE64")]),t._v("：不用去请求图片，"),n("code",[t._v("BASE64")]),t._v("码基本上代表的就是图片,而且页面渲染图片的时候速度很快(但是要慎用（编码后的代码量太大）,在"),n("code",[t._v("webpack")]),t._v("工程化中可以使用,因为它基于"),n("code",[t._v("file-loader")]),t._v("，可以自动"),n("code",[t._v("base64")]),t._v(")")])])]),t._v(" "),n("li",[n("code",[t._v("Layout/Painting")]),t._v(":减少"),n("code",[t._v("DOM")]),t._v('的"回流/重排"和重绘。 触发回流，必然会触发重绘；单纯的重绘，并不会引发回流。\n'),n("ul",[n("li",[n("p",[t._v("引发回流的操作：")]),t._v(" "),n("ul",[n("li",[t._v("元素在视口中的大小或者位置发生变化")]),t._v(" "),n("li",[t._v("元素的删减或者新增(或者基于"),n("code",[t._v("display")]),t._v("控制显示隐藏)。")]),t._v(" "),n("li",[t._v("浏览器视口发生变化。")]),t._v(" "),n("li",[t._v("内容发生变化(比如文本变化或者图片被另一个不同尺寸的图片所替代)")])])]),t._v(" "),n("li",[n("p",[t._v("避免"),n("code",[t._v("DOM")]),t._v("的回流的操作：")]),t._v(" "),n("ul",[n("li",[t._v("样式集中改变")]),t._v(" "),n("li",[t._v("分离读写操作")]),t._v(" "),n("li",[t._v("缓存布局信息")])]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//触发两次回流 两次样式读")]),t._v("\nbox"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("box"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetWidth"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"px"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbox"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("box"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetHeight"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"px"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//修改为")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" w"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("box"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetWidth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("h"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("box"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetHeight"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbox"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("w"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbox"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("h"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])]),n("ul",[n("li",[t._v("元素批量修改("),n("code",[t._v("createDocumentFragment")]),t._v(",模板字符串拼接)")]),t._v(" "),n("li",[t._v("动画效果等频繁样式修改的操作，应用到"),n("code",[t._v("position")]),t._v("属性为"),n("code",[t._v("absolute")]),t._v("或者"),n("code",[t._v("fixed")]),t._v("的元素上(脱离文档流,单独一层)。利用分层机制，如果只改变一个层面上的位置大小等消息，浏览器回流和重绘的速度会加快很多。")]),t._v(" "),n("li",[n("code",[t._v("CSS3")]),t._v("硬件加速("),n("code",[t._v("GPU")]),t._v("加速)。"),n("code",[t._v("transform、opacity、filters...")]),t._v("等属性会触发硬件加速，不会引发回流。但是过量使用会占用大量内存、性能消耗严重，有时候会导致字体模糊等。")]),t._v(" "),n("li",[t._v("避免"),n("code",[t._v("table")]),t._v("布局和使用"),n("code",[t._v("css")]),t._v("的"),n("code",[t._v("javascript")]),t._v("表达式。")])])]),t._v(" "),n("li",[n("p",[t._v("重绘：元素的颜色、透明度等不影响元素的大小及在视口中的位置的操作。("),n("code",[t._v("outline、visibility、background-color")]),t._v(")")])])])])]),t._v(" "),n("h2",{attrs:{id:"_6、当代浏览器的渲染队列机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6、当代浏览器的渲染队列机制"}},[t._v("#")]),t._v(" 6、当代浏览器的渲染队列机制")]),t._v(" "),n("p",[t._v('  在当前上下文操作当中，遇到一行修改样式的代码，并没有立即通知浏览器渲染，而是把其放置在渲染队列中，接下来看是否还有修改样式的代码，如果有继续放在渲染队列中...一直到再也没有修改样式的代码或者"遇到一行获取样式的操作"，这样都会刷新浏览器的渲染队列机制(也就是把现在队列中修改样式的操作，统一告诉浏览器渲染，这样只会引发一次回流。)。优化方式就是**分离读写。**或者样式集中修改'),n("code",[t._v('box.cssText="...."')]),t._v("。")]),t._v(" "),n("ul",[n("li",[t._v("分离读写的方式1")])]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//分离样式读和写")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这种写法这会引发两次回流")]),t._v("\nbox"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100px"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//样式写")]),t._v("\nbox"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'200px'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//样式写")]),t._v("\nbox"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetHeight"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//样式读")]),t._v("\nbox"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100px"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//样式写")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//改为")]),t._v("\nbox"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100px"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//样式写")]),t._v("\nbox"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'200px'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//样式写")]),t._v("\nbox"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100px"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//样式写")]),t._v("\nbox"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetHeight"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//样式读")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])]),n("ul",[n("li",[t._v("分离读写的方式2\n"),n("code",[t._v('box.style.cssText="width:100px;height:200px"')]),t._v(" "),n("strong",[t._v("注意")]),t._v(":有些操作可以利用样式的回流来实现一些想要的操作。")])]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 立即回到left:0的位置")]),t._v("\n    box"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transitionDuration "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0s'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    box"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 刷新渲染队列（会增加一次回流）")]),t._v("\n    box"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 回到开始位置后，再次运动到left:200位置(有动画)")]),t._v("\n    box"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transitionDuration "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0.5s'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    box"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'200px'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);