<route lang="yaml">
name: Tabs 
meta:
  layout: full
</route>

<template>
  <DemoHeader
    editLink="https://github.com/ubeac/ubeac-ui/tree/main/docs/components/primitive/tabs.md"
    title="Tabs"
  ></DemoHeader>
  <u-tabs>
    <u-tab
      :active="true"
      title="API">
      <p 
      class="mt-3 text-start document-section">
      // NOTE: Zero version, created because of need to use in demo pages
      </p>
    </u-tab>
    <u-tab
      title="Playground">
      Need Document
      <u-live 
      :code="code">
      </u-live>
    </u-tab>
    <u-tab
      title="Examples">
      Need Document
    </u-tab>
  </u-tabs>
</template>

<script setup>
import { reactive } from 'vue'
import { VueComponent } from '../../../docs/components/primitive/button.md'
const markdown = VueComponent
const code = reactive(
`<u-tabs>
  <u-tab
    :active="true"
    title="tab 1">
    <p
    class="mt-3 text-start document-section">
    Sample Content 1
    </p>
  </u-tab>
  <u-tab
    title="tab 2">
    <p
    class="mt-3 text-start document-section">
    Sample Content 2
    </p>
  </u-tab>
  <u-tab
    title="tab 3">
    <p
    class="mt-3 text-start document-section">
    Sample Content 3
    </p>
  </u-tab>
</u-tabs>`
)
const doSomthing = () => {alert("Something");}
const buttonSizes = ['lg', 'md', 'sm']
const buttonVariants = [
  'primary', 
  'secondary', 
  'success', 
  'danger', 
  'warning', 
  'info', 
  'light',
  'dark'
]
</script>
