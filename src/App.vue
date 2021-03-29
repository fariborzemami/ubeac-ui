<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
const default_layout = "Full";
export default {
  mounted() {
    console.log(this.$route);
  },
  computed: {
    layout() {
      return this.$route.meta.layout || default_layout;
    }
  }
};
</script>