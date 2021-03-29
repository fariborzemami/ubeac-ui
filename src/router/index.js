import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Views from '@/config/views'

const routes = []
Views.forEach(view => {
  routes.push({
    path: view.path,  
    component: () => import('@/views/' + view.name + '.vue'), 
    meta: view
  })

})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

