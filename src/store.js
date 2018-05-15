import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import compileMarkdown from './utils/marked';

Vue.use(Vuex);

function formatArticles(articlesJson) {
  const articles = Object.keys(articlesJson).map((name) => {
    const { title, tags, date, content } = articlesJson[name];

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
    article.tags.split(' ').forEach(tag => {
      tags.add(tag);
    });
  });

  return tags;
}

function fetchArticles(options = {}) {
  return new Promise(function(resolve, reject) {
    const articlesJson = require('../articles/articles');
    const { tag, limit, start } = options;

    let articles = formatArticles(articlesJson);
    const tags = formatTags(articles);

    articles = tag ? articles.filter(article => article.tags.includes(tag)) : articles;
    const total = articles.length;

    resolve({
      articles: articles.slice(start, start + limit),
      tags: [...tags],
      total
    });
  });
};

const state = {
  total: 0,
  articles: [],
  tags: []
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
  }
};

const actions = {
  async getArticles({ commit }, tag) {
    try {
      const { articles, tags, total } = await fetchArticles(tag);
      commit('getTotal', total);
      commit('getArticles', articles);
      commit('getTags', tags);
    } catch (e) {
      console.log(e);
    }
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
