<template>
  <div>
    <h1>{{title}}</h1>
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