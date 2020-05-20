import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('../views/index.vue'),
      children: [
        // Dashboard
        // {
        //   name: 'Dashboard',
        //   path: '',
        //   component: () => import('../views/dashboard.vue'),
        // },
        // Product
        {
          name: 'Product',
          path: '/product',
          component: () => import('../views/product.vue'),
        },
      ],
    },
  ],
});
