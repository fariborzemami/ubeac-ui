<template>
  <header 
    class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap shadow"
    aria-label="Main navigation">
    <div 
      class="container-fluid">
      <router-link 
        class="navbar-brand" 
        to="/">
        {{ $t('application-name') }}
      </router-link>
    </div>
  </header>

  <div class="container-fluid">
    <div class="row">
      <nav 
         id="sidebarMenu" 
         class="col col-md-3 col-lg-2 d-md-block float-end bg-light">
        <div 
         class="position-sticky pt-3">
          <ul class="nav flex-column">
            <li 
              v-for="route in routesListSortedByName"
              class="nav-item ">
              <router-link
                :class="{active: $route.path === route.path }"
                class="nav-link"
                :to="route.path">
                {{route.name}}
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="col col-md-9 col-lg-10">
        <main >
        <router-view/>
      </main>
      </div>
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

<style lang="scss">
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
  font-size: 0.9em;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);

  .material-icons {
    color: inherit !important;
    font-size: 1.5em !important;
  }
  .nav-item {
    height: 38px;
  }
}

</style>
