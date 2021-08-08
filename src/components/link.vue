<template>
  <a 
    :target="target"
    :href="route"
  >
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    route: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: ''
    }
  }
}
</script>

