<template>
  <div class="container-fluid min-vh-100 d-flex flex-column">
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="/">
        <img
          src="/ubeac-logo.svg"
          width="120"
          height="60"
          class="d-inline-block"
          alt=""
        />
        Header is here
      </a>
    </nav>
    <div class="row flex-grow-1">
      <div class="col-2 border bg-light">
        <u-sidebar :items="navigationItems.sidebar"></u-sidebar>
      </div>
      <div class="col-8">
        <u-breadcrumb />
        <router-view />
      </div>
      <div class="col-2 border bg-light">
        <u-profile-menu :items="navigationItems.profile"></u-profile-menu>
      </div>
    </div>
    <div class="row border bg-light">Footer is here</div>
  </div>
</template>
<script>
import nav from "@/config/nav";
export default {
  data() {
    return {
      navigationItems: {},
    };
  },
  mounted() {
    this.navigationItems = nav;
  },
};
</script>

