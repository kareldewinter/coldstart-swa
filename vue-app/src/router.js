import { createApp } from 'vue';
import { createRouter, useRouter } from 'vue-router';
import App from './app.vue';
import PageNotFound from '@/components/page-not-found.vue';

const router = createRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/catalog',
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import(/* webpackChunkName: "catalog" */ './views/catalog/catalog.vue'),
    },
    {
      path: '*',
      component: PageNotFound,
    },
  ],
});
export default router;
const app = createApp(App);
app.use(useRouter(router));
app.use(PageNotFound);
app.mount('#app');
