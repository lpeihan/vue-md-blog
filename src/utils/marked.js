const marked = require('marked');
const highlight = require('highlight.js');

// 为了兼容 webpack 打包
module.exports = function(markdown) {
  return marked(markdown, {
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: true,
    smartLists: true,
    smartypants: true,
    highlight: function (code) {
      return highlight.highlightAuto(code).value;
    }
  });
};
