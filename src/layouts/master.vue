<template>
<header 
  class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"
  aria-label="Main navigation">
  <div 
    class="container-fluid">
    <router-link 
      class="navbar-brand" 
      to="/">
      uBeac UI 
    </router-link>
  </div>
</header>

<div class="container-fluid">
  <div class="row">
    <nav 
      id="sidebarMenu" 
      class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div 
      class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li 
            v-for="route in routesListSortedByName"
            class="nav-item">
            <router-link
              class="nav-link active"
              :to="route.path">
              {{route.name}}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <main 
      class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <router-view/>
    </main>
  </div>
</div>
</template>

<script>
export default {
  created() {
    this.$router.options.routes.forEach(route => {
      if (route.children[0].name !== 'index') {
        this.routesList.push({
          name: route.children[0].name,
          path: route.path
        })
      }
    })
  },
  computed: {
    routesListSortedByName () {
      return this.routesList.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      })
    }
  }, 
  data() {
    return {
      routesList: []
    }
  }
}

</script>

<style>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
.sidebar {
  position: fixed;
  top: 0;
  /* rtl:raw:
  right: 0;
  */
  bottom: 0;
  /* rtl:remove */
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}
</style>
