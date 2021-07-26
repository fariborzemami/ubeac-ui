<route lang="yaml">
meta:
  layout: master 
</route>

<template>
  <div
    class="text-start">
  <h1>
    Components
  </h1>
  <ul class="list-group">
    <li class="list-group-item">
      <router-link to="/kitchen/button">Button</router-link>
    </li>
  </ul>
  </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>

<style lang="sass">
</style>
