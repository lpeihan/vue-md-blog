import Vue from 'vue';
import Router from 'vue-router';
import ArticleList from './views/articles/article-list.vue';
import Tags from './views/tags/tags';
import Archives from './views/archives/archives';

import articles from '../articles/articles';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'home',
    component: ArticleList
  },
  {
    path: '/tags/:tag',
    name: 'tagsArticles',
    component: ArticleList
  },
  {
    path: '/tags',
    name: 'tags',
    component: Tags
  },
  {
    path: '/archives',
    name: 'archives',
    component: Archives
  }
];

Object.keys(articles).forEach((article) => {
  const name = `${article.replace(/\.md/, '')}`;
  routes.splice(1, 0, {
    path: `/${name}`,
    name,
    component: {
      template:
        `<div style="background: white">
          <article-header :title="title" :date="date"/>
          <markdown />
          <article-footer :article="article" :more-show="false"></article-footer>
         </div>`,
      data() {
        return {
          title: articles[article].title,
          date: articles[article].date,
          article: articles[article]
        };
      },
      components: {
        ArticleHeader: () => import(`./views/articles/article-header`),
        ArticleFooter: () => import(`./views/articles/article-footer`),
        Markdown: () => import(`../articles/${article}`)
      }
    }
  });
});

export default new Router({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
