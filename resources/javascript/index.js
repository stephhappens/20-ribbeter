import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './routes/application.vue';
import Index from './routes/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
  base: '/app',
});

if (document.querySelector('.vue-app')) {
  const app = new Vue({ ...App, router }).$mount('.vue-app');
}

window.setTimeout(() => {
  // find elment with class alert
  const alert = document.querySelector('.alert');

  if (alert) {
    alert.remove();
  }
}, 4000);
