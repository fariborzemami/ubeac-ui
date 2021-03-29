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
    // // component: () => import('@/global/layouts/' + view.theme + '.vue'),
    // children:
    //   [
    //     {
    //       name: view.name,
    //       path: '',
    //       component: () => import('@/views/' + view.name + '.vue'),
    //     }
    //   ]
  })

})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

