<template>
  <div>
  <div class="container-fluid min-vh-100 d-flex flex-column">
    <div class="row border bg-light">NoSidebar layout!</div>
    <div class="row flex-grow-1">
      <div class="col-10" >
        <router-view />
      </div>
      <div class="col-2 border bg-light">
        <u-profile-menu :items="navigationItems.profile"></u-profile-menu>
      </div>
    </div>
    <div class="row border bg-light">Footer section is emprty!</div>
  </div>
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

