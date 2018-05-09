import Vue from 'vue';
import Router from 'vue-router';
import Hello from './views/hello.vue';
import articles from '../articles/articles';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'hello',
    component: Hello
  }
];

Object.keys(articles).forEach((article) => {
  routes.splice(1, 0, {
    path: `/${article.replace(/\.md/, '')}`,
    component: () => import(`../articles/${article}`)
  });
});

export default new Router({
  routes
});
