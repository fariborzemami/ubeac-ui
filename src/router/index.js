import { createRouter, createWebHistory } from 'vue-router'
import Pages from '@/generated/pages';

const routes = [
  // add custom routes here
]

// adding auto generated routes
Pages.forEach(page => {
  routes.push({
    path: page.route,
    component: () => import('@/pages/' + page.name),
    meta: page
  })
})

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router