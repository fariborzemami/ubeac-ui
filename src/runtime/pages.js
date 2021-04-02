import Vue from 'vue'
const pages = [
  {
    layout: 'Full',
    title: 'About Title',
    route: '/about',
    icon: 'test-icon',
    roles: 'ADMIN,UNKNWON',
    name: 'About.vue'
  },
  {
    layout: 'Full',
    title: 'Home Title',
    route: '/',
    icon: 'test-icon',
    roles: 'ADMIN,UNKNWON',
    name: 'Home.vue'
  },
  {
    layout: 'Simple',
    title: 'Login Title',
    route: '/login',
    icon: 'test-icon',
    roles: '?',
    name: 'Login.vue'
  },
  {
    layout: 'NoSidebar',
    title: 'Profile Title',
    route: '/profile',
    icon: 'test-icon',
    roles: '?',
    name: 'Profile.vue'
  },
  {
    layout: 'Blank',
    title: 'Register Title',
    route: '/register',
    icon: 'test-icon',
    roles: '?',
    name: 'Register.vue'
  }
]
Vue.mixin({
  data: function() {
    return {
      get pages() {
        return pages
      }
    }
  }
})

export default pages
