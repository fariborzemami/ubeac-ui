<route lang="yaml">
name: Radio
meta:
  layout: full
</route>

<template>
  <DemoHeader
    edit-link="https://github.com/ubeac/ubeac-ui/tree/main/docs/components/primitive/radio.md"
    title="Radio"
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
            <h4>Normal View</h4>
            <u-radioButton
              v-for="i in examples"
              :key="i"
              v-model="selectedRadioExample1"
              :text="i.text"
              :value="i.text"
              name="radioExample1"
            />
            <div class="my-3" />
          </div>
          <div class="col">
            <h4>Selected</h4>
            
            <u-radioButton
              v-for="i in examples"
              :key="i"
              v-model="selectedRadioExample2"
              :text="i.text"
              :value="i.text"
              name="radioExample2"
            />
            <div class="my-3" />
          </div>
          <div class="col">
            <h4>Disabled</h4>
            
            <u-radioButton
              v-for="i in examples"
              :key="i"
              v-model="selectedRadioExample3"
              :text="i.text"
              :disabled="i.disabled"
              :value="i.text"
              name="radioExample3"
            />
            <div class="my-3" />
          </div>
        </div>
      </div>
    </u-tab>
  </u-tabs>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { VueComponent } from '../../../docs/components/primitive/radio.md'
const markdown = VueComponent
const code = reactive(
`<template>
  <pre> selected: {{ selectedValue }} </pre>
  <u-radioButton
    text="foo"
    v-model="selectedValue"
    value="foo"
    name="radioBtnExample1"
    >
  </u-radioButton>
  <u-radioButton
    text="bar"
    v-model="selectedValue"
    value="bar"
    name="radioBtnExample1"
    >
  </u-radioButton>
  <hr>
  <pre> selected: {{ selectedValue2 }} </pre>
  <u-radioButton
    text="foo"
    v-model="selectedValue2"
    name="radioBtnExample2"
    value="foo"
    >
  </u-radioButton>
  <hr>
  <u-radioButton
    text="foo"
    v-model="selectedValue3"
    name="radioBtnExample3"
    value="foo"
    >
  </u-radioButton>
</template>

<script>
export default {
   data () {
     return {
        selectedValue: null,
        selectedValue2: 'foo',
        selectedValue3: ''
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
