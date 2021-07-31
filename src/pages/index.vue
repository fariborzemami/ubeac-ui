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
    <li
      v-for="item in componentsList"
      :key="item"
      @click="this.$router.push(item.optionsRoute)"
      class="list-group-item list-group-item-action p-3">
      <router-link 
        class="text-decoration-none text-dark h6"
        :to="item.optionsRoute">
        {{ item.name }}
      </router-link>
      <router-link 
        v-if="item.playground"
        class="ms-3 text-decoration-none text-dark"
        :to="item.playground">
        Playground
      </router-link>
      <router-link 
        v-if="item.editor"
        class="ms-3 text-decoration-none text-dark"
        :to="item.editor">
        Examples
      </router-link>
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

const componentsList = [
  {
    name: 'Button',
    optionsRoute: '/kitchen/button',
    playground: '/kitchen/button?tab=playground',
    editor: '/kitchen/button?tab=editor'
  },
  {
    name: 'Alert',
    optionsRoute: '/kitchen/alert',
    playground: '/kitchen/alert?tab=playground',
    editor: '/kitchen/alert?tab=editor'
  },
  {
    name: 'Checkbox',
    optionsRoute: '/kitchen/checkbox',
    playground: '/kitchen/checkbox?tab=playground',
    editor: '/kitchen/checkbox?tab=editor'
  }
]
</script>

<style lang="sass">
</style>
