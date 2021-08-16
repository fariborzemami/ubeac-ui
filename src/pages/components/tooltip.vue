<route lang="yaml">
name: Tooltip 
meta:
  layout: full
</route>

<template>
  <DemoHeader
    edit-link="https://github.com/ubeac/ubeac-ui/tree/main/docs/components/primitive/tabs.md"
    title="Tabs"
  />
  <u-tabs>
    <u-tab
      :active="true"
      title="API"
    >
    // NOTE: Zero version, created because of need to use in demo pages
    </u-tab>
    <u-tab
      title="Playground"
    >
      Need Document
      <u-live 
        :code="code"
      />
    </u-tab>
    <u-tab
      title="Examples"
    >
      <a 
        v-tooltip="'This is the tooltip text'"
        href="#" >
        Hover over me
      </a>
    </u-tab>
  </u-tabs>
</template>

<script setup>
import { reactive } from 'vue'
const code = reactive(
`<a 
  v-tooltip="'This is the tooltip text'"
  href="#" >
  Hover over me
</a>
`
)

</script>
