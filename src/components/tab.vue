<template>
  <div 
    :data-title="title"
    :data-active="active"
    :id="title"
    :class="{'show': active, 'active': active}"
    role="tabpanel"
    class="tab-pane fade">
    <slot></slot>
  </div>
</template>

<script>
// NOTE: Zero version, created because of need to use in demo pages
import { onMounted, ref, watchEffect } from 'vue'
export default {
  props: {
    title: {
      type: [String],
      default: false
    },
    active: {
      type: [Boolean],
      default: false
    },
  }
}
</script>
