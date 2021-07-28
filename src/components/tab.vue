<template>
  <div 
    :data-title="title"
    :id="title"
    :class="{'show': active, 'active': active}"
    role="tabpanel"
    class="tab-pane fade">
    <slot></slot>
  </div>
</template>

<script setup>
// NOTE: Zero version, created because of need in demo pages
import { defineProps, computed, toRefs } from 'vue'

const props = defineProps({
  title: {
    type: [String],
    default: false
  },
  active: {
    type: [Boolean],
    default: false
  },
})

const { title, active } = toRefs(props);

</script>

