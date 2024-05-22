(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{922:function(v,_,l){"use strict";l.r(_);var i=l(69),t=Object(i.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("p",[l("strong",[v._v("CPU 对比 GPU")])]),v._v(" "),l("p",[v._v("CPU ==== GPU")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("延迟容忍度： 低， 高")])]),v._v(" "),l("li",[l("p",[v._v("并行目标： 任务（Task），数据（Data）")])]),v._v(" "),l("li",[l("p",[v._v("核心架构：多线程核心，SIMT 核心")])]),v._v(" "),l("li",[l("p",[v._v("线程数量级别：10，10000")])]),v._v(" "),l("li",[l("p",[v._v("吞吐量：低，高")])]),v._v(" "),l("li",[l("p",[v._v("缓存需求量：高，低")])]),v._v(" "),l("li",[l("p",[v._v("线程独立性：低，高")])]),v._v(" "),l("li",[l("p",[v._v("它们之间的差异（缓存、核心数量、内存、线程数等）可用下图展示出来：")])])]),v._v(" "),l("h2",{attrs:{id:"渲染优化建议"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#渲染优化建议"}},[v._v("#")]),v._v(" 渲染优化建议")]),v._v(" "),l("p",[l("strong",[v._v("1.减少 CPU 和 GPU 的数据交换")])]),v._v(" "),l("p",[v._v("例如：glGetUniformLocation 会从 GPU 内存查询状态，耗费很多时间周期。")]),v._v(" "),l("ul",[l("li",[v._v("避免每帧设置、查询渲染状态，可在初始化时缓存状态。")]),v._v(" "),l("li",[v._v("CPU 版的粒子、动画会每帧修改、提交数据，可移至 GPU 端。")]),v._v(" "),l("li",[v._v("BVH")]),v._v(" "),l("li",[v._v("Portal")]),v._v(" "),l("li",[v._v("BSP")]),v._v(" "),l("li",[v._v("OSP")]),v._v(" "),l("li",[v._v("合批（Batch）")]),v._v(" "),l("li",[v._v("减少顶点数、三角形数")]),v._v(" "),l("li",[v._v("视锥裁剪")]),v._v(" "),l("li",[v._v("避免每帧提交 Buffer 数据")]),v._v(" "),l("li",[v._v("减少渲染状态设置和查询")]),v._v(" "),l("li",[v._v("启用 GPU Instance")]),v._v(" "),l("li",[v._v("开启 LOD")]),v._v(" "),l("li",[v._v("避免从显存读数据")])]),v._v(" "),l("p",[l("strong",[v._v("2.减少过绘制")])]),v._v(" "),l("ul",[l("li",[v._v("粒子数量多且面积小，由于像素块机制，会加剧过绘制情况;植物、沙石、毛发等也如此")]),v._v(" "),l("li",[v._v("背面裁剪")]),v._v(" "),l("li",[v._v("遮挡裁剪")]),v._v(" "),l("li",[v._v("视口裁剪")]),v._v(" "),l("li",[v._v("剪切矩形（scissor rectangle）")]),v._v(" "),l("li",[v._v("Early-Z")]),v._v(" "),l("li",[v._v("层次 Z 缓冲（Hierarchical Z-Buffering，HZB）")]),v._v(" "),l("li",[v._v("避免 Tex Kill 操作")]),v._v(" "),l("li",[v._v("避免 Alpha Test")]),v._v(" "),l("li",[v._v("避免 Alpha Blend")]),v._v(" "),l("li",[v._v("开启深度测试")]),v._v(" "),l("li",[v._v("开启裁剪：")]),v._v(" "),l("li",[v._v("控制物体数量")])]),v._v(" "),l("p",[l("strong",[v._v("3.Shader 优化")])]),v._v(" "),l("ul",[l("li",[v._v("避免 if、switch 分支语句")]),v._v(" "),l("li",[v._v("避免 for 循环语句，特别是循环次数可变的")]),v._v(" "),l("li",[v._v("减少纹理采样次数")]),v._v(" "),l("li",[v._v("禁用 clip 或 discard 操作")]),v._v(" "),l("li",[v._v("减少复杂数学函数调用")])]),v._v(" "),l("p",[v._v("https://cloud.tencent.com/developer/article/2016951?from=article.detail.1814898")])])}),[],!1,null,null,null);_.default=t.exports}}]);