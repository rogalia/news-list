import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'NewsList',
    component: () => import('@/views/NewsList.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/index',
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
