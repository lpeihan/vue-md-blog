webpackJsonp([5],{OTfG:function(s,t,a){s.exports=a("qG+B")},"qG+B":function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("wISA"),l=a("18Nq"),v=Object(l.a)(null,n.a,n.b,!1,null,null,null);t.default=v.exports},wISA:function(s,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return l});var n=function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},l=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("p",[s._v("{"),a("br"),s._v("  “title”: “path模块”,"),a("br"),s._v("  “date”: “2017-12-22”,"),a("br"),s._v("  “tags”: “node”"),a("br"),s._v("}")]),s._v(" "),a("pre",[a("code",{staticClass:"lang-javascript"},[a("span",{staticClass:"hljs-comment"},[s._v("// 引入path模块")]),s._v("\n"),a("p",[a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" path = reuiqre("),a("span",{staticClass:"hljs-string"},[s._v("'path'")]),s._v(");\n")])])]),a("p"),s._v(" "),a("h3",{attrs:{id:"path-normalize-"}},[a("code",[s._v("path.normalize")]),s._v(" 路径整理")]),s._v(" "),a("pre",[a("code",{staticClass:"lang-javascript"},[s._v("// 对window系统，目录分隔为'"),a("span",{staticClass:"hljs-symbol"},[s._v("\\'")]),s._v(", 对于UNIX系统，分隔符为'/'\n// 针对'..'返回上一级\n// /与"),a("span",{staticClass:"hljs-symbol"},[s._v("\\\\")]),s._v("都被统一转换\n"),a("p",[s._v("const p = path.normalize(__dirname + '/test/a//b//../c/utilyou.mp3');\nconsole.log(p); //windows: E:"),a("span",{staticClass:"hljs-symbol"},[s._v("\\w")]),s._v("orkspace"),a("span",{staticClass:"hljs-symbol"},[s._v("\\N")]),s._v("odeJS"),a("span",{staticClass:"hljs-symbol"},[s._v("\\a")]),s._v("pp"),a("span",{staticClass:"hljs-symbol"},[s._v("\\f")]),s._v("s"),a("span",{staticClass:"hljs-symbol"},[s._v("\\t")]),s._v("est"),a("span",{staticClass:"hljs-symbol"},[s._v("\\a")]),a("span",{staticClass:"hljs-symbol"},[s._v("\\c")]),a("span",{staticClass:"hljs-symbol"},[s._v("\\u")]),s._v("tilyou.mp3\n")])])]),a("p"),s._v(" "),a("h3",{attrs:{id:"path-join-"}},[a("code",[s._v("path.join")]),s._v(" 拼接路径")]),s._v(" "),a("pre",[a("code",{staticClass:"lang-javascript"},[a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" path1 = "),a("span",{staticClass:"hljs-string"},[s._v("'path1'")]),s._v(";\n"),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" path2 = "),a("span",{staticClass:"hljs-string"},[s._v("'path2//pp\\\\'")]),s._v(";\n"),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" path3 = "),a("span",{staticClass:"hljs-string"},[s._v("'../path3'")]),s._v(";\n"),a("p",[a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" p = path."),a("span",{staticClass:"hljs-built_in"},[s._v("join")]),s._v("(path1, path2, path3);\nconsole."),a("span",{staticClass:"hljs-built_in"},[s._v("log")]),s._v("(p); "),a("span",{staticClass:"hljs-comment"},[s._v("// /path1\\path2\\path3")]),s._v("\n")])])]),a("p"),s._v(" "),a("h3",{attrs:{id:"path-resolve-"}},[a("code",[s._v("path.resolve")]),s._v(" 绝对路径")]),s._v(" "),a("pre",[a("code",{staticClass:"lang-javascript"},[a("span",{staticClass:"hljs-comment"},[s._v("// 以应用程序为起点，根据参数字符串解析出一个绝对路径")]),s._v("\n"),a("p",[a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" p = path.resolve("),a("span",{staticClass:"hljs-string"},[s._v("'path1'")]),s._v(", "),a("span",{staticClass:"hljs-string"},[s._v("'path2'")]),s._v(", "),a("span",{staticClass:"hljs-string"},[s._v("'a/b\\c/'")]),s._v(");\n"),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(p); "),a("span",{staticClass:"hljs-comment"},[s._v("// E:\\workspace\\NodeJS\\path1\\path2\\a\\b\\c")]),s._v("\n")])])]),a("p"),s._v(" "),a("h3",{attrs:{id:"path-relative-"}},[a("code",[s._v("path.relative")]),s._v(" 相对路径")]),s._v(" "),a("pre",[a("code",{staticClass:"lang-javascript"},[a("span",{staticClass:"hljs-comment"},[s._v("// 获取两路径之间的相对关系")]),s._v("\n"),a("p",[a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" = "),a("span",{staticClass:"hljs-string"},[s._v("'c:\\from\\a\\'")]),s._v(";\n"),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("to")]),s._v(" = "),a("span",{staticClass:"hljs-string"},[s._v("'c:/test/b'")]),s._v(";")]),s._v("\n"),a("p",[a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" p = path.relative("),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(", "),a("span",{staticClass:"hljs-keyword"},[s._v("to")]),s._v(");\nconsole.log(p); "),a("span",{staticClass:"hljs-comment"},[s._v("// ....\\test\\b")]),s._v("\n")])])]),a("p"),s._v(" "),a("h3",{attrs:{id:"path-dirname-"}},[a("code",[s._v("path.dirname")]),s._v(" 文件路径")]),s._v(" "),a("pre",[a("code",{staticClass:"lang-javascript"},[a("span",{staticClass:"hljs-comment"},[s._v("// 获取路径中目录名")]),s._v("\n"),a("p",[a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" p = path.dirname(__dirname + "),a("span",{staticClass:"hljs-string"},[s._v("'/test/util you.mp3'")]),s._v(");\n"),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(p);\n")])])]),a("p"),s._v(" "),a("h3",{attrs:{id:"path-basename-"}},[a("code",[s._v("path.basename")]),s._v(" 获取路径中的文件名")]),s._v(" "),a("pre",[a("code",{staticClass:"lang-javascript"},[a("span",{staticClass:"hljs-comment"},[s._v("// 获取路径中文件名,后缀是可选的，如果加，请使用'.ext'方式来匹配，则返回值中不包括后缀名；")]),s._v("\n"),a("p",[a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" p = path.basename(__dirname + "),a("span",{staticClass:"hljs-string"},[s._v("'/test/util you.mp3'")]),s._v(", "),a("span",{staticClass:"hljs-string"},[s._v("'.mp3'")]),s._v(");\n"),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(p); "),a("span",{staticClass:"hljs-comment"},[s._v("// util you")]),s._v("\n")])])]),a("p"),s._v(" "),a("h3",{attrs:{id:"path-extname-"}},[a("code",[s._v("path.extname")]),s._v(" 文件后缀")]),s._v(" "),a("pre",[a("code",{staticClass:"lang-javascript"},[a("span",{staticClass:"hljs-regexp"},[s._v("//")]),s._v(" 获取路径中的扩展名，如果没有"),a("span",{staticClass:"hljs-string"},[s._v("'.'")]),s._v("，则返回空\n")])]),s._v(" "),a("h3",{attrs:{id:"path-parse-"}},[a("code",[s._v("path.parse")]),s._v(" 解析路径")]),s._v(" "),a("pre",[a("code",{staticClass:"lang-javascript"},[a("span",{staticClass:"hljs-selector-tag"},[s._v("path")]),a("span",{staticClass:"hljs-selector-class"},[s._v(".parse")]),s._v("("),a("span",{staticClass:"hljs-string"},[s._v("'/home/user/dir/file.txt'")]),s._v(");\n"),a("span",{staticClass:"hljs-comment"},[s._v("// returns")]),s._v("\n{\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("root ")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"/"')]),s._v(",\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("dir ")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"/home/user/dir"')]),s._v(",\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("base ")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"file.txt"')]),s._v(",\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("ext ")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('".txt"')]),s._v(",\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("name ")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"file"')]),s._v("\n}\n"),a("p",[a("span",{staticClass:"hljs-comment"},[s._v("// windows")]),s._v("\n"),a("span",{staticClass:"hljs-selector-tag"},[s._v("path")]),a("span",{staticClass:"hljs-selector-class"},[s._v(".parse")]),s._v("("),a("span",{staticClass:"hljs-string"},[s._v("'C:\\path\\dir\\index.html'")]),s._v(")\n"),a("span",{staticClass:"hljs-comment"},[s._v("// returns")]),s._v("\n{\n"),a("span",{staticClass:"hljs-attribute"},[s._v("root ")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"C:\\"')]),s._v(",\n"),a("span",{staticClass:"hljs-attribute"},[s._v("dir ")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"C:\\path\\dir"')]),s._v(",\n"),a("span",{staticClass:"hljs-attribute"},[s._v("base ")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"index.html"')]),s._v(",\n"),a("span",{staticClass:"hljs-attribute"},[s._v("ext ")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('".html"')]),s._v(",\n"),a("span",{staticClass:"hljs-attribute"},[s._v("name ")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"index"')]),s._v("\n}\n")])])]),a("p"),s._v(" "),a("h3",{attrs:{id:"path-format-"}},[a("code",[s._v("path.format")]),s._v(" 生成路径")]),s._v(" "),a("pre",[a("code",{staticClass:"lang-javascript"},[s._v("path.format({\n  "),a("span",{staticClass:"hljs-string"},[s._v("root :")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v('"/"')]),s._v(",\n  "),a("span",{staticClass:"hljs-string"},[s._v("dir :")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v('"/home/user/dir"')]),s._v(",\n  "),a("span",{staticClass:"hljs-string"},[s._v("base :")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v('"file.txt"')]),s._v(",\n  "),a("span",{staticClass:"hljs-string"},[s._v("ext :")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v('".txt"')]),s._v(",\n  "),a("span",{staticClass:"hljs-string"},[s._v("name :")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v('"file"')]),s._v("\n})\n"),a("span",{staticClass:"hljs-comment"},[s._v("// returns")]),s._v("\n"),a("span",{staticClass:"hljs-string"},[s._v("'/home/user/dir/file.txt'")]),s._v("\n")])])])}]}});
//# sourceMappingURL=5.87f318a1b6d68ef8c38f.js.map