<template>
<nav 
  class="navbar navbar-expand-lg fixed-top navbar-light bg-light" 
  aria-label="Main navigation">
  <div 
    class="container-fluid">
    <router-link 
      class="navbar-brand" 
      to="/">
      uBeac UI 
    </router-link>
    <button 
      class="navbar-toggler p-0 border-0" 
      type="button" 
      id="navbarSideCollapse" 
      aria-label="Toggle navigation">
      <span 
        class="navbar-toggler-icon">
      </span>
    </button>

    <div 
      class="navbar-collapse offcanvas-collapse" 
      id="navbarsExampleDefault">
      <ul 
        class="navbar-nav me-auto mb-2 mb-lg-0">
        <li 
          v-for="m in mainMenu"
          class="nav-item">
          <router-link 
            class="nav-link"
            :to="m.route">
            {{m.title}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>

<!--<div -->
  <!--class="nav-scroller bg-body shadow-sm">-->
  <!--<nav -->
    <!--class="nav nav-underline" -->
    <!--aria-label="Secondary navigation">-->
    <!--<a -->
      <!--class="nav-link active" -->
      <!--aria-current="page" -->
      <!--href="#doc">Doc</a>-->
    <!--<a -->
      <!--class="nav-link" -->
      <!--href="#preview">-->
      <!--Preview-->
      <!--<span -->
        <!--class="badge bg-light text-dark rounded-pill align-text-bottom">-->
        <!--27-->
      <!--</span>-->
    <!--</a>-->
    <!--<a -->
      <!--class="nav-link" -->
      <!--href="#playground">-->
      <!--Playground-->
    <!--</a>-->
  <!--</nav>-->
<!--</div>-->

<main 
  class="container pt-5 mt-2">
  <router-view/>
</main>
</template>

<script setup>
const mainMenu = [
  {
     title: 'Home',
     route: '/'
  }
]
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
    </style>
