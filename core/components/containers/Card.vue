<template>
  <div>
    <h5>{{title}}</h5>
    <slot />
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      default: "Card"
    },
  }
};
</script>