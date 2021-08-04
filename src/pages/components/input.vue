<route lang="yaml">
name: Input
meta:
  layout: full
</route>

<template>
  <h1>input</h1>
  <u-tabs>
    <u-tab
      :active="true"
      title="options">
      <p
        class="mt-3 text-start document-section">
        <markdown></markdown>
      </p>
    </u-tab>
    <u-tab
      title="playground">
      <u-live
        :code="code">
      </u-live>
    </u-tab>
    <u-tab
      title="examples">
      <div class="row">
        <div class="col">
          <h4>Normal View</h4>
          <u-input
            text="This is a input"
            >
          </u-input>
            <div class="my-3"></div>
        </div>
        <div class="col">
          <h4>Disable</h4>
          <u-input
            text="This is a disable input!"
            checked
            disabled
            >
          </u-input>
            <div class="my-3"></div>
        </div>
        <div class="col">
          <h4>onChange trigger Alert</h4>
          <u-input
            @click="doSomthing()"
            text="This is a input"
            >
          </u-input>
            <div class="my-3"></div>
        </div>
      </div>
    </u-tab>
  </u-tabs>
</template>

<script setup>
import { reactive } from 'vue'
import { VueComponent } from '../../../docs/components/primitive/input.md'
const markdown = VueComponent
const code = reactive(
`
<u-input
  text="this is a input!"
  >
</u-input>
`
)

const doSomthing = () => {alert("Somthing");}
</script>
