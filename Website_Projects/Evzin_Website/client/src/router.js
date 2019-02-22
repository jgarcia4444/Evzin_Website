import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Catering from './views/Catering.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/About',
      name: 'about',
      component: About,
    },
    {
      path: '/Catering',
      name: 'catering',
      component: Catering,
    },
  ],
});
