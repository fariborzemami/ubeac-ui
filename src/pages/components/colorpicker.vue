<route lang="yaml">
name: ColorPicker
meta:
  layout: full
</route>

<template>
  <h1>ColorPicker</h1>
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
      <u-colorpicker 
        v-model="pickedColor">
      </u-colorpicker>
    </u-tab>
  </u-tabs>
</template>
<script>
export default {
  data () {
    return {
        pickedColor: '#0000ff'
    }
  }
}

</script>

<script setup>
import { reactive } from 'vue'
import { VueComponent } from '../../../docs/components/primitive/colorpicker.md'
const markdown = VueComponent
const code = reactive(
`
<template>
<div
  :style="{'background-color': pickedColor}"
  style="width: 100px;height: 100px;">
</div>
<br>
<u-colorpicker
  v-model="pickedColor"
  :disabled="false"
  :is-required="false"
  :autofocus="true"
  >
</u-colorpicker>
</template>
<script>
export default {
   data () {
     return {
        pickedColor: '#00ffff'
     }
   }
}
<\/script>
`
)
</script>
