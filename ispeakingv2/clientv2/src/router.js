import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Record from './components/AudioRecorder.vue';
// import axios from 'axios'; 
import axios from 'axios';

import AudioRecorder from 'vue-audio-recorder';

Vue.prototype.$http = axios;
Vue.use(Router);
Vue.use(AudioRecorder);


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      
    },

    {
        path: '/record',
        name: 'record',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Record,

     },

  ],
});
