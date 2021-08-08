<route lang="yaml">
meta:
  layout: full 
</route>

<template>
  <div
    class="text-start">
  <h1>
    Components
  </h1>
  <ul class="list-group">
    <li
      v-for="item in sortByName()"
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
        need_document
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
    optionsRoute: '/components/button',
    playground: '/components/button?tab=playground',
    editor: '/components/button?tab=editor',
    is_inprogress: true,
    document_is_completed: true 
  },
  {
    name: 'Alert',
    optionsRoute: '/components/alert',
    playground: '/components/alert?tab=playground',
    editor: '/components/alert?tab=editor',
    is_inprogress: true,
    document_is_completed: true 
  },
  {
    name: 'Checkbox',
    optionsRoute: '/components/checkbox',
    playground: '/components/checkbox?tab=playground',
    editor: '/components/checkbox?tab=editor',
    is_inprogress: true,
    document_is_completed: true 
  },
  {
    name: 'Tabs',
    optionsRoute: '/components/tabs',
    playground: '/components/tabs?tab=playground',
    editor: '/components/tabs?tab=editor',
    is_inprogress: true,
    document_is_completed: false 
  },
  {
    name: 'Icon',
    optionsRoute: '/components/icon',
    playground: '/components/icon?tab=playground',
    editor: '/components/icon?tab=editor',
    is_inprogress: true,
    document_is_completed: false 
  },
  {
    name: 'Radio',
    optionsRoute: '/components/radio',
    playground: '/components/radio?tab=playground',
    editor: '/components/radio?tab=editor',
    is_inprogress: true,
    document_is_completed: true
  },
  {
    name: 'Input',
    optionsRoute: '/components/input',
    playground: '/components/input?tab=playground',
    editor: '/components/input?tab=editor',
    is_inprogress: true,
    document_is_completed: true
  },
  {
    name: 'Select',
    optionsRoute: '/components/select',
    playground: '/components/select?tab=playground',
    editor: '/components/select?tab=editor',
    is_inprogress: true,
    document_is_completed: true
  },
  {
    name: 'ColorPicker',
    optionsRoute: '/components/colorpicker',
    playground: '/components/colorpicker?tab=playground',
    editor: '/components/colorpicker?tab=editor',
    is_inprogress: true,
    document_is_completed: true
  }
]
 function sortByName () { 
    const sortedList = componentsList.sort((a, b) => b.name > a.name ? -1 : 1)
    return sortedList
 }
</script>
