import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Cart from '../views/Cart.vue';
import Checkout from '../views/Checkout.vue';

import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';

import Profile from '../views/Profile.vue';
import profileAbout from '../views/Profile/Profile_About.vue';
import profileAccount from '../views/Profile/Profile_Account.vue';
import profileOrderList from '../views/Profile/Profile_OrderList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',

    component: () => import('../views/About.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    children: [
      {
        path: '',
        name: 'about',
        component: profileAbout
      },
      {
        path: 'account',
        name: 'account',
        component: profileAccount
      },
      {
        path: 'order-list',
        name: 'order-list',
        component: profileOrderList
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
