(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{759:function(t,s,n){"use strict";n.r(s);var a=n(69),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[n("code",[t._v("DOM(Document Object Model)")]),t._v(" 文档对象模型。提供系列的属性和方法，让我们可以在"),n("code",[t._v("js")]),t._v("中操作页面中的元素。")]),t._v(" "),n("h4",{attrs:{id:"_1、获取dom元素的属性和方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、获取dom元素的属性和方法"}},[t._v("#")]),t._v(" 1、获取dom元素的属性和方法")]),t._v(" "),n("ul",[n("li",[n("p",[n("code",[t._v("document.getElementById(id)")])])]),t._v(" "),n("li",[n("p",[n("code",[t._v("[context].getElementByTagName(tagname)")])])]),t._v(" "),n("li",[n("p",[n("code",[t._v("[context].getElementByClassName(classname)")]),t._v(" 在"),n("code",[t._v("IE6-8")]),t._v("下不兼容。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("document.getElementByName(name)")]),t._v(" 在"),n("code",[t._v("IE")]),t._v("浏览器中只对表单元素的"),n("code",[t._v("name")]),t._v("有作用")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("[context].querySelector(selector)")]),t._v(" 在"),n("code",[t._v("IE6-8")]),t._v("下不兼容")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("[context].querySelectorAll(selector)")]),t._v("在"),n("code",[t._v("IE6-8")]),t._v("下不兼容")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("document.documentElement")]),t._v(" =>"),n("code",[t._v("html")]),t._v("元素")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("document.head")])])]),t._v(" "),n("li",[n("p",[n("code",[t._v("document.body")])])]),t._v(" "),n("li",[n("p",[n("code",[t._v("childNodes")]),t._v(" 获取所有子节点")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("children")]),t._v(" 获取所欲元素子节点 =>"),n("code",[t._v("IE6-8")]),t._v("中会把注释节点当做元素节点获取")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("parentNode")])])]),t._v(" "),n("li",[n("p",[n("code",[t._v("firstChild")]),t._v("/"),n("code",[t._v("firstElementChild")])])]),t._v(" "),n("li",[n("p",[n("code",[t._v("lastChild")]),t._v("/"),n("code",[t._v("lastElemntChild")])])]),t._v(" "),n("li",[n("p",[n("code",[t._v("previousSibling")]),t._v("/"),n("code",[t._v("previousElementSibling")]),t._v(" "),n("code",[t._v("nextSibling")]),t._v("/"),n("code",[t._v("nextElementSibling")]),t._v("\n//=>所有带"),n("code",[t._v("Element")]),t._v("的在"),n("code",[t._v("IE6-8")]),t._v("下都不兼容")])])]),t._v(" "),n("h4",{attrs:{id:"_2、dom的增删改查"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、dom的增删改查"}},[t._v("#")]),t._v(" 2、DOM的增删改查")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tagname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndocument"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTextNode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ninnerHTML"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("innerText \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newELe"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertBefore")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newEle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ele"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ele"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cloneNode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeChild")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ele"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置自定义属性(property)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ele"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xx"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("xxx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//删除自定义属性")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ele"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xx\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置元素属性")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ele"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ele"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAttribute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ele"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeAttribute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br")])]),n("h4",{attrs:{id:"_3、获取元素样式和操作样式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、获取元素样式和操作样式"}},[t._v("#")]),t._v(" 3、获取元素样式和操作样式")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=>修改元素样式")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ele"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xxx"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("xxx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//修改或者设置行内样式")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ele"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("className"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("xxx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=>获取元素的样式")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ele"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xxx\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);