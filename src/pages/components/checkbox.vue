<route lang="yaml">
name: Checkbox
meta:
  layout: full
</route>

<template>
  <DemoHeader
    editLink="https://github.com/ubeac/ubeac-ui/tree/main/docs/components/primitive/checkbox.md"
    title="CheckBox"
  ></DemoHeader>
  <u-tabs>
    <u-tab
      :active="true"
      title="API">
      <p
        class="mt-3 text-start document-section">
        <markdown></markdown>
      </p>
    </u-tab>
    <u-tab
      title="Playground">
      <u-live
        :code="code">
      </u-live>
    </u-tab>
    <u-tab
      title="Examples">
      <div class="row">
        <div class="col">
          <h4>Normal View</h4>
          <u-checkBox
            text="This is a checkbox"
            >
          </u-checkBox>
            <div class="my-3"></div>
        </div>
        <div class="col">
          <h4>Checked</h4>
          <u-checkBox
            text="This is a checked checkbox!"
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
`<template>
  <pre> {{ checkList }}</pre>
  <u-checkBox
    v-model="checkList"
    value="foo"
    text="foo"
    >
  </u-checkBox>
  <u-checkBox
    v-model="checkList"
    value="bar"
    text="bar"
    >
  </u-checkBox>
  <pre> {{ isChecked }}</pre>
  <u-checkBox
    v-model="isChecked"
    text="this is a checkbox!"
    >
  </u-checkBox>
</template>
<script>
export default {
   data () {
     return {
        checkList: [],
        isChecked: true
     }
   }
}
<\/script>`
)

const doSomthing = () => {alert("Somthing");}
</script>
