import Vue from 'vue';
import Router from 'vue-router';
import Ping from './components/Ping.vue';
import Books from './components/Books.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/',
        name: 'Books',
        component: Books,
    },

    {
      path: '/ping',
      name: 'Ping',
      component: Ping,
    }
  ],
});
