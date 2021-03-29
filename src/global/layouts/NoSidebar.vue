<template>
  <div>
    <u-header></u-header>
    <u-profile-menu :items="navigationItems.profile"></u-profile-menu>
    <u-content><router-view/></u-content>
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

