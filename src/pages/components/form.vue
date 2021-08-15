<route lang="yaml">
name: Form
meta:
  layout: full
</route>

<template>
  <DemoHeader
    edit-link="https://github.com/ubeac/ubeac-ui/blob/main/docs/components/form/form.new.md"
    title="Form"
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
      <div class="container">
        <div class="row">
          <div class="col">
            <h4>Default</h4>
              <u-form></u-form>
            <div class="my-3" />
          </div>
          <div class="col">
              <u-form></u-form>
            <div class="my-3" />
          </div>
          <div class="col">
            <h4>Disabled</h4>
              <u-form></u-form>
            <div class="my-3" />
          </div>
        </div>
      </div>
    </u-tab>
  </u-tabs>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { VueComponent } from '../../../docs/components/form/form.new.md'
const markdown = VueComponent
const code = reactive(
`<template>
  <u-form />
</template>

<script>
export default {
   data () {
     return {
        
     }
   }
 }
<\/script>`
)
const examples = [
  {
    text: 'foo', 
    disabled: false
  },
  {
    text: 'bar', 
    disabled: true
  },
  {
    text: 'baz',
    disabled: false
  }
      ]
const doSomthing = () => {alert("Somthing");}

const selectedRadioExample1 = ref('')
const selectedRadioExample2 = ref('bar')
const selectedRadioExample3 = ref('')
</script>
