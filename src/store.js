import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import compileMarkdown from './utils/marked';

Vue.use(Vuex);

const TAGS = ['html', 'css', 'javascript', 'vue', 'vuex', 'react', 'redux', 'http', 'ajax', 'webpack', 'gulp',
  'node', 'express', 'koa', 'mongodb', 'mongoose', 'redis', 'linux', 'leetcode', 'git', 'github',
  'photoshop', '数据结构', 'json', 'cors', 'markdown', 'hexo', 'atom', 'vscode', 'jquery'];

function formatArticles(articlesJson) {
  const articles = Object.keys(articlesJson).map((name) => {
    const { title, tags, date, content } = articlesJson[name];

    // if (typeof tags !== 'string') {
    //   tags.pop();
    // }
    return {
      title,
      tags,
      date,
      content,
      time: Number.parseInt(date.split('-').join(''), 10),
      name: name.replace(/\.md/, '')
    };
  });

  articles.sort((obj1, obj2) => {
    return obj2.time - obj1.time;
  });

  return articles;
}

function formatTags(articles) {
  const tags = new Set();

  articles.forEach(article => {
    article.tags.split(' ').concat(TAGS).forEach(tag => {
      tags.add(tag);
    });
  });

  return [...tags];
}

function fetchArticles(options = { limit: Infinity, start: 0 }) {
  return new Promise(function(resolve, reject) {
    const articlesJson = require('../articles/articles');
    const { tag, limit, start } = options;
    let articles = formatArticles(articlesJson);
    const tags = formatTags(articles);

    articles = tag ? articles.filter(article => article.tags.includes(tag)) : articles;
    const total = articles.length;

    resolve({
      articles: articles.slice(start, start + limit),
      tags,
      total
    });
  });
};

const state = {
  total: 0,
  articles: [],
  tags: [],
  archives: {}
};

const mutations = {
  getArticles(state, articles) {
    state.articles = articles;
  },
  getTags(state, tags) {
    state.tags = tags;
  },
  getTotal(state, total) {
    state.total = total;
  },
  getArchives(state, archives) {
    state.archives = archives;
  }
};

const actions = {
  async getArticles({ commit }, options) {
    try {
      const { articles, tags, total } = await fetchArticles(options);
      commit('getTotal', total);
      commit('getArticles', articles);
      commit('getTags', tags);
    } catch (e) {
      console.log(e);
    }
  },
  async getArchives({ commit }) {
    const { articles, total } = await fetchArticles();

    const archives = {};

    articles.forEach((article) => {
      const year = article.date.split('-')[0];
      if (!archives[year]) {
        archives[year] = [];
      }
      archives[year].push(article);
    });

    commit('getTotal', total);
    commit('getArchives', archives);
  }
};

const getters = {
  // compile markdown
  articles(state) {
    return state.articles.map((article) => {
      article.tags = article.tags.split(' ');
      return Object.assign(article, {
        content: compileMarkdown(article.content)
      });
    });
  },
  tags(state) {
    return state.tags;
  },
  total(state) {
    return state.total;
  },
  archives(state) {
    return state.archives;
  }
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins: process.env.NODE_ENV === 'production' ? [] : [
    createLogger()
  ]
});

export default store;
