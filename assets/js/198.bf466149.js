(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{916:function(t,s,a){"use strict";a.r(s);var n=a(69),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"问题来源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题来源"}},[t._v("#")]),t._v(" 问题来源")]),t._v(" "),a("p",[t._v("因为要绘制机器人动画, 所以开启了 requestAnimationFrame 渲染 loop;")]),t._v(" "),a("p",[t._v("目前采取的策略是每次重新计算所有机器人的最新位置, 调用 removeChildren 函数全量移除后;\n然后根据最新的数据 deviceMap 来重新创建精灵, 并添加到缓冲区进行渲染")]),t._v(" "),a("p",[t._v("现象是: 每次重新渲染, 内存都会增加, 虽然调用了 "),a("code",[t._v("deviceContaner")]),t._v("的 removeChildren 函数, 但是并没有销毁掉所有的设备精灵;")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Container.removeChildren(): 从此容器中删除在开始索引和结束索引内的所有子项")])]),t._v(" "),a("li",[a("p",[t._v("Render.destory 是清除事件, 但是并未清除缓冲区\n所以我们销毁的应该是 Container.destroy")])])]),t._v(" "),a("h2",{attrs:{id:"问题分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题分析"}},[t._v("#")]),t._v(" 问题分析")]),t._v(" "),a("p",[t._v("1.动态数据的渲染 来自于全量和增量推送, 由于全量数据每次推过来我们都处理, 并且会重新加载到缓冲区去渲染, 每次多推全量也会造成内存增加")]),t._v(" "),a("p",[t._v("2.目前渲染方案采用的是批量移除然后重新渲染, 这种方式在于移除图层子元素(精灵, 几何图形等)存在移除不干净的问题\n所以渲染更新元素的方案是不是只能去修改图层子元素, 而不是先删除在重新渲染")]),t._v(" "),a("h2",{attrs:{id:"问题解决方向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题解决方向"}},[t._v("#")]),t._v(" 问题解决方向")]),t._v(" "),a("p",[t._v("1.继续采用之前的方案, 重新绘制所有机器人精灵, 但是得完全销毁每个设备精灵,\n但是全量移除会影响其他操作, 因为我们选中元素是从 精灵数据里面取的, 移除在渲染会造成点击地图在做碰撞检测的时候找不到元素")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Destroy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 清除每个contaner容器下的buffer数据")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 清除帧回头函数")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 清除画布")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// PIXI")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("RemoveChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" removedChilds"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PIXI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DisplayObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeChildren")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  removedChilds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PIXI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DisplayObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      children"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      texture"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      baseTexture"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("p",[t._v("2.不清除缓冲区数据, 只去修改精灵的属性, 但是我们现在的数据都在 dataManager 里进行维护, 所以渲染数据需要进行一下映射,\n直接操作图层内部精灵属性")]),t._v(" "),a("h4",{attrs:{id:"方案-2-增量修改精灵的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案-2-增量修改精灵的方式"}},[t._v("#")]),t._v(" 方案 2, 增量修改精灵的方式")]),t._v(" "),a("p",[t._v("1.获取全量数据, 渲染初始机器人 2.接受增量数据, 处理增量数据, 更改变化机器人的属性")]),t._v(" "),a("ul",[a("li",[t._v("状态: 纹理")]),t._v(" "),a("li",[t._v("位置: position.xy")]),t._v(" "),a("li",[t._v("方向: rotation 3.调用引擎 render 方法")])]),t._v(" "),a("h2",{attrs:{id:"gl实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gl实例"}},[t._v("#")]),t._v(" gl实例")]),t._v(" "),a("p",[t._v("清空上下文")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("#engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("#engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isContextLost")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("#engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getExtension")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WEBGL_lose_context"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loseContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rootLayer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);