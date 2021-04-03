<template>
  <div class="content">
    <slot />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: "Container"
    },
  }
};
</script>

<style scoped>
.content::after {
  content: "";
  display: table;
  clear: both;
}
</style>