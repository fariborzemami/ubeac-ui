import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Pages from '@/config/pages'

const routes = []
Pages.forEach(page => {
  routes.push({
    path: view.path,    
    component: () => import('@/global/layouts/' + page.theme + '.vue'),
    children:
      [
        {
          name: view.name,
          path: '',
          component: () => import('@/pages/' + page.name + '.vue'),
        }
      ]
  })

})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

