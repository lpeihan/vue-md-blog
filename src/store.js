import Vue from 'vue';
import Vuex from 'vuex';
import compileMarkdown from './utils/marked';

Vue.use(Vuex);

function fetchArticles() {
  return new Promise(function(resolve, reject) {
    const articlesJson = require('../articles/articles');

    const articles = Object.keys(articlesJson).map((name) => {
      const { title, tags, date, content } = articlesJson[name];
      return {
        title,
        tags,
        date,
        content,
        name: name.replace(/\.md/, '')
      };
    });

    const tags = new Set();

    articles.forEach(article => {
      article.tags.split(' ').forEach(tag => {
        tags.add(tag);
      });
    });

    resolve({ articles, tags: [...tags] });
  });
}

const state = {
  articles: [],
  tags: []
};

const mutations = {
  getArticles(state, articles) {
    state.articles = articles;
  },
  getTags(state, tags) {
    state.tags = tags;
  }
};

const actions = {
  async getArticles({ commit }) {
    try {
      const { articles, tags } = await fetchArticles();
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
      return Object.assign(article, {
        content: compileMarkdown(article.content)
      });
    });
  },
  tags(state) {
    return state.tags;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
