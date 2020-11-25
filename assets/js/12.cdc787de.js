(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{976:function(t,e,a){"use strict";a.r(e);var n=a(5),v=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"list-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-container"}},[t._v("#")]),t._v(" list-container")]),t._v(" "),a("p",[t._v("简单易用的形式实现 "),a("code",[t._v("tab")]),t._v(" 点击切换效果，无论是配合动态组件渲染还是内容修改，都及其容易扩展!")]),t._v(" "),a("h2",{attrs:{id:"基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),a("no-ssr",[a("vue-live",{attrs:{layoutProps:{lang:"vue"},code:"<template>\n    <div>\n    <ClientOnly>\n      <list-container v-model=\"value\" :tabs=\"routes\" @change=\"handleChange\"/>\n    </ClientOnly>  \n      <div>\n        绑定的数据:\n        {{value}}\n      </div>\n    </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      value: \"/dashboard/edit/info\",\n      routes: [\n        {\n          label: '基本信息',\n          value: '/dashboard/edit/info',\n        },\n        {\n          label: '数据配置',\n          value: '/dashboard/edit/data',\n        },\n        {\n          label: '权限管理',\n          value: '/dashboard/edit/permission',\n        },\n      ],\n    };\n  },\n  methods: {\n    handleChange(value) {\n      console.log(value)\n    }\n  }\n};\n<\/script>\n",requires:{}}})],1),a("h2",{attrs:{id:"slot-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slot-header"}},[t._v("#")]),t._v(" slot header")]),t._v(" "),a("no-ssr",[a("vue-live",{attrs:{layoutProps:{lang:"vue"},code:"<template>\n    <div>\n    <ClientOnly>\n      <list-container v-model=\"value\" :tabs=\"tabs\" @change=\"handleChange\">\n        <div slot=\"header\">\n          this is header slot\n        </div>\n      </list-container>\n    </ClientOnly>\n      <div>\n        绑定的数据:\n        {{value}}\n      </div>\n    </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      value: \"/dashboard/edit/info\",\n      tabs: [\n        {\n          label: '基本信息',\n          value: '/dashboard/edit/info',\n        },\n        {\n          label: '数据配置',\n          value: '/dashboard/edit/data',\n        },\n        {\n          label: '权限管理',\n          value: '/dashboard/edit/permission',\n        },\n      ],\n    };\n  },\n  methods: {\n    handleChange(value) {\n      console.log(value)\n    }\n  }\n};\n<\/script>\n",requires:{}}})],1),a("h2",{attrs:{id:"props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" props")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Required")]),t._v(" "),a("th",[t._v("Default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("tabs")]),t._v(" "),a("td",[t._v("example [ { value: 0, label: '这是第一项'}, { value: 1, label: '这是第二项'} ]")]),t._v(" "),a("td",[a("code",[t._v("Array")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("[]")])]),t._v(" "),a("tr",[a("td",[t._v("animation")]),t._v(" "),a("td",[t._v("是否有动画效果")]),t._v(" "),a("td",[a("code",[t._v("Boolean")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("true")])]),t._v(" "),a("tr",[a("td",[t._v("value")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[a("code",[t._v("Number")]),t._v(" /  "),a("code",[t._v("String")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("-")])])])]),t._v(" "),a("h2",{attrs:{id:"slots"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slots"}},[t._v("#")]),t._v(" slots")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Default Slot Content")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("header")]),t._v(" "),a("td",[t._v("头部插槽")]),t._v(" "),a("td",[t._v("-")])])])]),t._v(" "),a("h2",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" events")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Event Name")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Parameters")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("input")]),t._v(" "),a("td",[t._v("选中的 tab 的值")]),t._v(" "),a("td",[t._v("value")])]),t._v(" "),a("tr",[a("td",[t._v("change")]),t._v(" "),a("td",[t._v("选中的 tab 对象")]),t._v(" "),a("td",[t._v("tab")])])])])],1)}),[],!1,null,null,null);e.default=v.exports}}]);