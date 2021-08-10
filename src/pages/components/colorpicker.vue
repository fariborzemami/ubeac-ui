<route lang="yaml">
name: ColorPicker
meta:
  layout: full
</route>

<template>
  <DemoHeader
    edit-link="https://github.com/ubeac/ubeac-ui/tree/main/docs/components/primitive/colorpicker.md"
    title="ColorPicker"
  />
  <u-tabs>
    <u-tab
      :active="true"
      title="API"
    >
      <p
        class="mt-3 text-start document-section"
      >
        <markdown />
      </p>
    </u-tab>
    <u-tab
      title="Playground"
    >
      <u-live
        :code="code"
      />
    </u-tab>
    <u-tab
      title="Examples"
    >
      <u-colorpicker 
        v-model="pickedColor"
      />
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
`<template>
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
