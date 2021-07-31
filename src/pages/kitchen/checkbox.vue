<route lang="yaml">
name: Checkbox
meta:
  layout: full
</route>

<template>
  <h1>CheckBox</h1>
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
          <u-checkBox
            v-for="i in 5"
            :key="i"
            text="This is a checkbox"
            >
          </u-checkBox>
            <div class="my-3"></div>
        </div>
        <div class="col">
          <h4>Checked</h4>
          <u-checkBox
            text="This is a checked checkbox!"
            checked
            >
          </u-checkBox>
            <div class="my-3"></div>
        </div>
        <div class="col">
          <h4>Disable</h4>
          <u-checkBox
            text="This is a disable checkbox!"
            checked
            disabled
            >
          </u-checkBox>
            <div class="my-3"></div>
        </div>
        <div class="col">
          <h4>onChange trigger Alert</h4>
          <u-checkBox
            v-for="i in 5"
            :key="i"
            @click="doSomthing()"
            text="This is a checkbox"
            >
          </u-checkBox>
            <div class="my-3"></div>
        </div>
      </div>
    </u-tab>
  </u-tabs>
</template>

<script setup>
import { reactive } from 'vue'
import { VueComponent } from '../../../docs/components/primitive/checkBox.md'
const markdown = VueComponent
const code = reactive(
`
<u-checkBox
  text="this is a checkbox!"
  >
</u-checkBox>
`
)

const doSomthing = () => {alert("Somthing");}
</script>
