import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import PageNotFoundPage from './pages/PageNotFoundPage.vue';

const FirstPage = () => import('./pages/FirstPage.vue');
const SecondPage = () => import('./pages/SecondPage.vue');

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0,
  }),
  routes: [
    {
      path: '/firstPage',
      component: FirstPage,
    },
    {
      path: '/secondPage',
      component: SecondPage,
    },
    {
      path: '*',
      component: PageNotFoundPage,
    },
  ],
});
