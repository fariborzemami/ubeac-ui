<route lang="yaml">
name: Icon 
meta:
  layout: full
</route>

<template>
  <h1>Icon</h1>
  <u-tabs>
    <u-tab
      :active="true"
      title="options">
      <p 
      class="mt-3 text-start document-section">
      // NOTE: Zero version, created because of need to use in demo pages
      Need Document
      </p>
    </u-tab>
    <u-tab
      title="playground">
      Need Document
      <u-live 
      :code="code">
      </u-live>
    </u-tab>
    <u-tab
      title="examples">
      Need Document
    </u-tab>
  </u-tabs>
</template>

<script setup>
import { reactive } from 'vue'
const code = reactive(
`
<u-icon
  size="small"
  style="float: left;"
  class="mx-2 float-start"
  icon="camera" 
  >
</u-icon>
`
)
</script>
