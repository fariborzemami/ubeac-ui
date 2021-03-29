<template>
  <div id="main">
    <u-header></u-header>
    <u-sidebar :items="navigationItems.sidebar"></u-sidebar>
    <u-profile :items="navigationItems.profile"></u-profile>
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

