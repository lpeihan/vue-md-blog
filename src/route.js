import Vue from 'vue';
import Router from 'vue-router';
import ArticleList from './views/articles/article-list.vue';
import articles from '../articles/articles';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'ArticleList',
    component: ArticleList
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
         </div>`,
      data() {
        return {
          title: articles[article].title,
          date: articles[article].date
        };
      },
      components: {
        ArticleHeader: () => import(`./views/articles/article-header`),
        Markdown: () => import(`../articles/${article}`)
      }
    }
  });
});

export default new Router({
  routes
});
