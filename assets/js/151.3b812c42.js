(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{851:function(v,_,o){"use strict";o.r(_);var e=o(69),d=Object(e.a)({},(function(){var v=this,_=v.$createElement,o=v._self._c||_;return o("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[o("h2",{attrs:{id:"_1、什么是虚拟dom？"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1、什么是虚拟dom？"}},[v._v("#")]),v._v(" 1、什么是虚拟dom？")]),v._v(" "),o("p",[v._v("用"),o("code",[v._v("javascript")]),v._v("对象来表示 "),o("code",[v._v("Dom")]),v._v(" 信息和结构，当状态变更的时候，重新渲染这个 "),o("code",[v._v("javascript")]),v._v(" 的对象结构。")]),v._v(" "),o("p",[o("code",[v._v("Virtual Dom")]),v._v(" 是一种编程概念。是一种由 "),o("code",[v._v("Javascript")]),v._v("类库基于浏览器"),o("code",[v._v("API")]),v._v("实现的概念。 "),o("code",[v._v("UI")]),v._v("以一种理想化的，或者说"),o("strong",[v._v("虚拟化")]),v._v("的变现形式被保存在内存中，并通过如 "),o("code",[v._v("ReactDom")]),v._v("等；类库使之与"),o("strong",[v._v("真实的")]),v._v(" "),o("code",[v._v("Dom")]),v._v(" 同步。这一过程称为"),o("strong",[v._v("协调")]),v._v("。")]),v._v(" "),o("p",[v._v("这种方式 赋予了 "),o("code",[v._v("React")]),v._v(" 声明式的 "),o("code",[v._v("API")]),v._v(":使得我们告诉 "),o("code",[v._v("React")]),v._v(" 希望让 "),o("code",[v._v("UI")]),v._v(" 是什么状态，"),o("code",[v._v("React")]),v._v(" 就确保 "),o("code",[v._v("Dom")]),v._v(" 匹配该状态，这使得我们可以从属性操作。事件处理和手动操作 "),o("code",[v._v("Dom")]),v._v(" 更新的这些构件应用程序的操作中解放出来。")]),v._v(" "),o("h2",{attrs:{id:"_2、为什么使用虚拟dom"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2、为什么使用虚拟dom"}},[v._v("#")]),v._v(" 2、为什么使用虚拟dom?")]),v._v(" "),o("p",[o("code",[v._v("Dom")]),v._v("操作很慢，轻微的操作都看呢过导致页面重新排版，非常耗性能。相对于 "),o("code",[v._v("Dom")]),v._v(" 对象,"),o("code",[v._v("js")]),v._v(" 对象处理起来更快，而且更简单。通过 "),o("code",[v._v("diff")]),v._v(" 算法对比新旧 "),o("code",[v._v("vdom")]),v._v("之间的差异，可以批量的最小化的执行 "),o("code",[v._v("dom")]),v._v(" 操作，从而提高性能。")]),v._v(" "),o("h2",{attrs:{id:"_3、在哪里用到了虚拟dom？"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3、在哪里用到了虚拟dom？"}},[v._v("#")]),v._v(" 3、在哪里用到了虚拟dom？")]),v._v(" "),o("p",[o("code",[v._v("React")]),v._v("中使用 "),o("code",[v._v("jsx")]),v._v(" 语法描述视图，通过 "),o("code",[v._v("babel-loader")]),v._v(" 转译后他们变成 "),o("code",[v._v("React.createElement(...)")]),v._v("形式，该函数将生成"),o("code",[v._v("vdom")]),v._v(" 来描述真实 "),o("code",[v._v("dom")]),v._v("。将来如果状态变化，"),o("code",[v._v("vdom")]),v._v("将作出相应变化，再通过"),o("code",[v._v("diff")]),v._v(" 算法来对比新老 "),o("code",[v._v("vdom")]),v._v(" 区别从而作出最终 "),o("code",[v._v("dom")]),v._v(" 操作。")])])}),[],!1,null,null,null);_.default=d.exports}}]);