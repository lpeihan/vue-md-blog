import marked from 'marked';
import highlight from 'highlight.js';

function compiledMarkdown(markdown) {
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
}

export default compiledMarkdown;
