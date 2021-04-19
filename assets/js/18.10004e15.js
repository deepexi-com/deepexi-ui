(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{981:function(e,t,n){"use strict";n.r(t);var r=n(5),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"prompt-form"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prompt-form"}},[e._v("#")]),e._v(" prompt-form")]),e._v(" "),n("p",[e._v("提供Vue.prototype.$promptDialog和Vue.prototype.$prompDrawer方法，用来向用户确认信息。\n类似于window.prompt方法，让用户在弹窗中填写相关信息。好处是，不需要写那么多HTML模板。")]),e._v(" "),n("h2",{attrs:{id:"arguments"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[e._v("#")]),e._v(" Arguments")]),e._v(" "),n("ul",[n("li",[e._v("[Array | Object] formOpt:\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/FEMessage/el-form-renderer",target:"_blank",rel:"noopener noreferrer"}},[e._v("el-form-renderer"),n("OutboundLink")],1),e._v("组件接受的属性content，")]),e._v(" "),n("li",[e._v("或者是el-form-render 可接受属性的对象。eg: { content: [], width: '170px'}")])])]),e._v(" "),n("li",[e._v("[String] title: 默认为'提示'")]),e._v(" "),n("li",[e._v("[Number] width: el-form-render的宽度， 默认是600")])]),e._v(" "),n("h2",{attrs:{id:"基本使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[e._v("#")]),e._v(" 基本使用")]),e._v(" "),n("no-ssr",[n("vue-live",{attrs:{layoutProps:{lang:"vue"},code:"<template>\n  <div>\n    <el-button @click=\"hleDialog\" type=\"primary\">dialog</el-button>\n    <el-button @click=\"hleDrawer\" type=\"primary\">drawer</el-button>\n  </div>\n</template>\n\n<script>\nconst alert = obj  => window.alert(JSON.stringify(obj, null, 2))\nconst basicContent = [\n  { \n    id: 'name', \n    label: '名称', \n    type: 'input', \n    rules: [{ required: true, message: '缺少名称', trigger: 'blur'}] \n  },\n  { \n    id: 'email', \n    label: '邮箱', \n    type: 'input', \n    rules: [{ pattern: /.+@.+/, message: '请填写正确的邮箱', trigger: 'blur'}]}\n]\nexport default {\n  methods: {\n    hleDialog(){\n      this.$promptDialog(basicContent, '请填写')\n        .then(form => alert(form))\n    },\n    hleDrawer(){\n      this.$promptDrawer(basicContent, '请填写')\n        .then(form => alert(form))\n    }\n  }\n}\n<\/script>\n",requires:{}}})],1),n("h2",{attrs:{id:"提交信息到服务器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#提交信息到服务器"}},[e._v("#")]),e._v(" 提交信息到服务器")]),e._v(" "),n("p",[e._v("可以指定弹窗关闭前调用的函数，这个函数需要返回一个Promise. 只有当该Promise resolve之后，弹窗才会关闭。\n你可以在这个函数提交信息到服务器。当然你也可以在关闭弹窗之后在后台提交到服务器，但是如果提交失败，用户就必须重新输入\n之前的表单信息了。")]),e._v(" "),n("no-ssr",[n("vue-live",{attrs:{layoutProps:{lang:"vue"},code:"<template>\n  <div>\n    <el-button @click=\"hleDialog\" type=\"primary\">提交到服务器</el-button>\n  </div>\n</template>\n\n<script>\nconst alert = obj  => window.alert(JSON.stringify(obj, null, 2))\nconst basicContent = [\n  { \n    id: 'name', \n    label: '名称', \n    type: 'input', \n    rules: [{ required: true, message: '缺少名称', trigger: 'blur'}] \n  },\n  { \n    id: 'email', \n    label: '邮箱', \n    type: 'input', \n    rules: [{ pattern: /.+@.+/, message: '请填写正确的邮箱', trigger: 'blur'}]}\n]\nexport default {\n  methods: {\n    submitTo(form){\n      return new Promise((resolve, reject) => {\n        setTimeout(() => {\n          console.log('form', form)\n          resolve(form)\n        }, 1000)\n      })\n    },\n    hleDialog(){\n      const opt = { content: basicContent, beforeClose: this.submitTo }\n      this.$promptDialog(opt, '请填写')\n        .then(form => alert('成功提交表单到服务器'))\n    },\n    \n  }\n}\n<\/script>\n",requires:{}}})],1)],1)}),[],!1,null,null,null);t.default=o.exports}}]);