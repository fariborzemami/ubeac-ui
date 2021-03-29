<template>
  <div>
    <u-header></u-header>
    <u-sidebar :items="navigationItems.sidebar"></u-sidebar>
    <u-profile-menu :items="navigationItems.profile"></u-profile-menu>
    <router-view/>
    <u-footer></u-footer>
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

