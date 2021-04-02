import Vue from 'vue'
import VueRouter from 'vue-router'
import Pages from '@/runtime/pages'

Vue.use(VueRouter)

const routes = []

Pages.forEach(page => {
  routes.push({
    path: page.route,  
    component: () => import('@/pages/' + page.name), 
    meta: page
  })

})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

