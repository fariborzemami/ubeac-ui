<template>
  <header 
    class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap shadow"
    style="z-index: 1050;"
    aria-label="Main navigation"
  >
    <div 
      class="container-fluid"
    >
        <button
          class="btn me-3 btn-dark"
          type="button"
          @click="onClickDrawerBtn"
        >
         <u-icon
            class="w-100 text-center align-middle"
            color='white'
            icon="menu"
          />
        </button>
        <router-link 
          class="navbar-brand me-auto" 
          @click="onClickBrand"
          to="/"
        >
          {{ $t('application-name') }}
        </router-link>
        <!-- Teleport to header-end -->
        <div 
          class="ms-auto me-4 text-white"
          id="header-end"
        >
        </div>
    </div>
  </header>
  <div class="container-fluid">
    <div
      class="row vh-100">
     <transition name="slide-fade">
      <nav 
        id="sidebarMenu" 
        v-if="drawer" 
        class="col col-md-3 col-lg-2 float-start border-end"
        :class="isMobile ? 'position-absolute h-100 bg-white ' : ''"
      >
      <!-- Teleport Sidebar-top -->
        <div 
          id="sidebar-top"
          >
        </div>
        <div 
          class="position-sticky pt-3"
          :class="isMobile ? 'fixed-bottom fixed-top ' : ''"
        >
          <ul class="nav flex-column">
            <li 
              class="w-100 rounded"
              v-for="route in routesListSortedByName"
              :key="route"
            >
              <router-link
                :class="{active: $route.path === route.path }"
                class="nav-link list-group-item border-0"
                @click="onClickSidebarMenu"
                :to="route.path"
              >
                {{ route.name }}
              </router-link>
            </li>
          </ul>
          <!-- Teleport to Sidebar-bottom -->
          <div 
            id="sidebar-bottom"
          >
          </div>
        </div>
      </nav>
      </transition>

      <div 
        class="col col-md-9 col-lg-10 mx-auto px-4 pt-2"
        :class="isMobile && drawer ? 'd-none' : ''"
        >
        <main>
          <!-- Teleport to content-top -->
          <div 
          id="content-top"
          >
        </div>
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default { 
  data() {
    return {
      routesList: [],
      drawer: true,
      screenSize: null,
      isMobile: false
    }
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
  methods: {
    calculateScreenSize () {
      this.screenWidth = window.screen.width
      if (this.screenWidth > 768) {
        this.drawer = true
        this.isMobile = false
      } else {
        this.drawer = false
        this.isMobile = true
      }
    },
    onClickBrand () {
      if (this.isMobile) {
        this.drawer = false
      }
    },
    onClickDrawerBtn () {
      this.drawer = !this.drawer
    },
    onClickSidebarMenu () {
      if (this.isMobile) {
        this.drawer = !this.drawer
      } 
    }
  },
  created() {
    window.onresize = this.calculateScreenSize
    this.$router.options.routes.forEach(route => {
      if (route.children[0].name !== 'index') {
        this.routesList.push({
          name: route.children[0].name,
          path: route.path
        })
      }
    })
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
.slide-fade-enter-active {
  transition: all 100ms ease;
}

.slide-fade-leave-active {
  transition: all 100ms ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-40px);
  opacity: 0;
}
</style>
