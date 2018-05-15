webpackJsonp([0],{"4t25":function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var v=a("68wQ"),e=a("18Nq"),n=Object(e.a)(null,v.a,v.b,!1,null,null,null);t.default=n.exports},"68wQ":function(s,t,a){"use strict";a.d(t,"a",function(){return v}),a.d(t,"b",function(){return e});var v=function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},e=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("p",[s._v("{"),a("br"),s._v("  “title”: “Vue”,"),a("br"),s._v("  “tags”: “javascript vue tool”,"),a("br"),s._v("  “date”: “2018-05-13”"),a("br"),s._v("}")]),s._v(" "),a("p",[s._v("A Vue directive for occupying content places before the data has been loaded.")]),s._v(" "),a("p",[s._v("It’s good for user experiment improving.")]),s._v(" "),a("h1",{attrs:{id:"install"}},[s._v("Install")]),s._v(" "),a("p",[s._v("Using "),a("code",[s._v("yarn")]),s._v(" or "),a("code",[s._v("npm")]),s._v(" to install "),a("code",[s._v("vue-occupy")]),s._v(":")]),s._v(" "),a("pre",[a("code",[a("span",{staticClass:"hljs-comment"},[s._v("# yarn")]),s._v("\nyarn "),a("span",{staticClass:"hljs-keyword"},[s._v("add")]),a("span",{staticClass:"bash"},[s._v(" vue-occupy\n")]),s._v("\n"),a("span",{staticClass:"hljs-comment"},[s._v("# npm")]),s._v("\nnpm install vue-occupy\n")])]),s._v(" "),a("h1",{attrs:{id:"usage"}},[s._v("Usage")]),s._v(" "),a("p",[s._v("In your "),a("code",[s._v("main.js")]),s._v(" file:")]),s._v(" "),a("pre",[a("code",[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" VueOccupy "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'vue-occupy'")]),s._v("\n"),a("p",[s._v("Vue.use(VueOccupy)\n")])])]),a("p",[s._v("Now "),a("code",[s._v("vue-occupy")]),s._v(" is a global Vue directive, you can use "),a("code",[s._v("v-occupy")]),s._v(" in every "),a("code",[s._v(".vue")]),s._v(" file.")]),a("p"),s._v(" "),a("h1",{attrs:{id:"params"}},[s._v("Params")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("param")]),s._v(" "),a("th",[s._v("type")]),s._v(" "),a("th",[s._v("description")]),s._v(" "),a("th",[s._v("necessary")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("data")]),s._v(" "),a("td",[s._v("{Object}")]),s._v(" "),a("td",[s._v("the data you bind to the node")]),s._v(" "),a("td",[s._v("Yes")])]),s._v(" "),a("tr",[a("td",[s._v("config")]),s._v(" "),a("td",[s._v("{Object}")]),s._v(" "),a("td",[s._v("the color lump’s css config")]),s._v(" "),a("td",[s._v("No")])])])]),s._v(" "),a("p",[s._v("For example:")]),s._v(" "),a("pre",[a("code",[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("id")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"app"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"width:200px;height:50px;"')]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-occupy")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"{ data: content, config }"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),a("p",[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\ndata () {\n"),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n"),a("span",{staticClass:"hljs-attr"},[s._v("content")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("''")]),s._v(",\n"),a("span",{staticClass:"hljs-attr"},[s._v("config")]),s._v(": {\n"),a("span",{staticClass:"hljs-attr"},[s._v("width")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'200px'")]),s._v(",\n"),a("span",{staticClass:"hljs-attr"},[s._v("height")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'18px'")]),s._v(",\n"),a("span",{staticClass:"hljs-attr"},[s._v("background")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'#ddd'")]),s._v("\n}\n}\n},\nmounted () {\nfetch(url).then("),a("span",{staticClass:"hljs-function"},[s._v("("),a("span",{staticClass:"hljs-params"},[s._v("result")]),s._v(") =>")]),s._v(" {\n"),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".content = result\n})\n}\n}\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])]),a("p",[s._v("Before the "),a("code",[s._v("fetch")]),s._v(" method has requested the result data, the "),a("code",[s._v("div")]),s._v(" with "),a("code",[s._v('v-occupy="{ data: content, config }"')]),s._v(" would be occupying by a rectangle color lump. Once the data was loaded, the attribute "),a("code",[s._v("content")]),s._v(" would be updated and be rendered into the html.")]),a("p"),s._v(" "),a("p",[a("strong",[s._v("Note")]),s._v(": the default configuration of "),a("code",[s._v("vue-occupy")]),s._v(" looks like below:")]),s._v(" "),a("pre",[a("code",[s._v("{\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("width")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("100%")]),s._v("; \n  "),a("span",{staticClass:"hljs-attribute"},[s._v("height")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("100%")]),s._v("; \n  "),a("span",{staticClass:"hljs-attribute"},[s._v("background")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#eee")]),s._v("\n}\n")])]),a("p",[s._v("And the note with "),a("code",[s._v("v-occupy")]),s._v(" will be like this:")]),s._v(" "),a("pre",[a("code",[a("span",{staticClass:"hljs-section"},[s._v('<div v-occupy="{ data: content, config }">')]),s._v("\n  "),a("span",{staticClass:"hljs-section"},[s._v('<div style="width: 100%; height: 100%; background: #eee;>')]),a("span",{staticClass:"hljs-section"},[s._v("</div>")]),s._v("\n"),a("span",{staticClass:"hljs-section"},[s._v("</div>")]),s._v("\n")])]),a("p",[s._v("Which means your "),a("strong",[s._v("must")]),s._v(" set the exactly "),a("code",[s._v("width")]),s._v(" and "),a("code",[s._v("height")]),s._v(" attribute in the note with "),a("code",[s._v("v-occupy")]),s._v(", or overwrite the default configuration by binding "),a("code",[s._v("config")]),s._v(" attribute. What’s more, attributes like "),a("code",[s._v("marginTop")]),s._v(" or "),a("code",[s._v("paddingRight")]),s._v(" are illegal, you should write in "),a("code",[s._v("'margin-top': '10px'")]),s._v(" or "),a("code",[s._v("'padding-right': '10px'")]),s._v(" instead.")]),s._v(" "),a("h1",{attrs:{id:"lisence"}},[s._v("Lisence")]),s._v(" "),a("p",[s._v("MIT")])])}]},kxSx:function(s,t,a){s.exports=a("4t25")}});
//# sourceMappingURL=0.3c46f416be1c4fe771c9.js.map