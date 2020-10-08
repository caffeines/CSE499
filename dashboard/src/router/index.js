import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Dashboard from '../views/Home/Dashboard.vue';
import ManageUser from '../views/Home/ManageUser.vue';
import CreateUser from '../views/Home/CreateUser.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      { path: '', component: Dashboard },
      { path: 'manageUser', component: ManageUser },
      { path: 'createUser', component: CreateUser },
    ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
