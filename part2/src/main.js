import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import router from './router';
import store from './store';

import App from './App.vue';

sync(store, router);

new Vue({
  render: (h) => h(App),
  el: '#app',
  router,
  store,
});
