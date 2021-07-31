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
      <div>
      </div>
      <router-link 
         style="width: 120px;"
         class="d-block float-start text-decoration-none text-dark"
         :to="item.optionsRoute">
        {{ item.name }}
      </router-link>
      <router-link 
        v-if="item.playground"
        style="width: 120px;"
        class="d-block float-start text-decoration-none text-dark"
        :to="item.playground">
        Playground
      </router-link>
      <router-link 
        v-if="item.editor"
        style="width: 120px;"
        class="d-block float-start text-decoration-none text-dark"
        :to="item.editor">
        Examples
      </router-link>
      <span 
        v-if="item.document_is_completed"    
        class="badge bg-success me-2">
        Document Completed
      </span>
      <span 
        v-else
        class="badge bg-danger me-2">
        need_docuemnt
      </span>
      <span 
        v-if="item.is_inprogress"    
        class="badge bg-warning text-dark">
        is_inprogress
      </span>
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
    editor: '/kitchen/button?tab=editor',
    is_inprogress: true,
    document_is_completed: true 
  },
  {
    name: 'Alert',
    optionsRoute: '/kitchen/alert',
    playground: '/kitchen/alert?tab=playground',
    editor: '/kitchen/alert?tab=editor',
    is_inprogress: true,
    document_is_completed: true 
  },
  {
    name: 'Checkbox',
    optionsRoute: '/kitchen/checkbox',
    playground: '/kitchen/checkbox?tab=playground',
    editor: '/kitchen/checkbox?tab=editor',
    is_inprogress: true,
    document_is_completed: true 
  },
  {
    name: 'Tabs',
    optionsRoute: '/kitchen/tabs',
    playground: '/kitchen/tabs?tab=playground',
    editor: '/kitchen/tabs?tab=editor',
    is_inprogress: true,
    document_is_completed: false 
  },
  {
    name: 'Icon',
    optionsRoute: '/kitchen/icon',
    playground: '/kitchen/icon?tab=playground',
    editor: '/kitchen/icon?tab=editor',
    is_inprogress: true,
    document_is_completed: false 
  }
]
</script>

<style lang="sass">
</style>
