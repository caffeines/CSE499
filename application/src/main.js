import Vue from 'vue';
import VueCarousel from 'vue-carousel';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

// eslint-disable-next-line import/prefer-default-export
export const eventBus = new Vue();

Vue.config.productionTip = false;
Vue.use(VueCarousel);

new Vue({
  router,
  store,
  vuetify,
  VueCarousel,

  render: h => h(App)
}).$mount('#app');
