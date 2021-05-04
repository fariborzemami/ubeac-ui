export default [
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
    layout: 'Blank',
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
  },
  {
    layout: 'Full',
    title: 'Add Team',
    route: '/teams/add',
    name: 'teams/Add.vue'
  },
  {
    layout: 'Full',
    title: 'Add Team New',
    route: '/teams/addnew',
    name: 'teams/AddNew.vue'
  }
]
