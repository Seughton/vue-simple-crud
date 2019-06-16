import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import EditPage from './views/EditPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/editpage/',
      name: 'EditPage',
      component: EditPage,
    },
  ],
});
