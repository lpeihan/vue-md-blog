const fs = require('fs');
const chokidar = require('chokidar');

const { basename } = require('path');
const { resolve } = require('./utils');

const articlesJson = {};

function isMarkdown(filename) {
  return /.md$/.test(filename);
}

function getArticle(filename) {
  if (isMarkdown(filename)) {
    try {
      const article = fs.readFileSync(resolve(`articles/${filename}`)).toString();
      let articleInfo = '';

      article
        .replace(/[\n\r]/g, '')
        .replace(/\{(.*?)\}/, function(match) {
          articleInfo = JSON.parse(match);
          return '';
        });
      const content = article.split('<!-- lph -->')[0];

      articlesJson[filename] = Object.assign(articleInfo, { content });

      fs.writeFileSync(resolve('articles/articles.json'), JSON.stringify(articlesJson, null, 2));
    } catch (e) {
      console.log(' article\'s json is incorrect \n', e);
    }
  }
}

function deleteArticle(filename) {
  if (isMarkdown(filename)) {
    delete articlesJson[filename];

    fs.writeFileSync(resolve('articles/articles.json'), JSON.stringify(articlesJson, null, 2));
  }
}

module.exports = () => {
  const watcher = chokidar.watch(resolve('articles'));

  watcher
    .on('add', (path) => {
      getArticle(basename(path));
    })
    .on('change', (path) => {
      getArticle(basename(path));
    })
    .on('unlink', (path) => {
      deleteArticle(basename(path));
    });

  return watcher;
};
