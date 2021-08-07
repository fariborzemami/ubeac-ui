<route lang="yaml">
name: Radio
meta:
  layout: full
</route>

<template>
  <h1>Radio</h1>
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
      <div class="container">
        <div class="row">
          <div class="col">
            <h4>Normal View</h4>
            <pre>
              selected: {{ selectedRadioExample1 }}
            </pre>
            <u-radioButton
               v-model="selectedRadioExample1"
               v-for="i in examples"
               :text="i.text"
               :key="i"
               :value="i.text"
               name="radioExample1"
               >
            </u-radioButton>
                <div class="my-3"></div>
          </div>
          <div class="col">
            <h4>Selected</h4>
            <pre>
              selected: {{ selectedRadioExample2 }}
            </pre>
            <u-radioButton
               v-model="selectedRadioExample2"
               v-for="i in examples"
               :text="i.text"
               :key="i"
               :value="i.text"
               name="radioExample2"
               >
            </u-radioButton>
                <div class="my-3"></div>
          </div>
          <div class="col">
            <h4>Disabled</h4>
            <pre>
              selected: {{ selectedRadioExample3 }}
            </pre>
            <u-radioButton
               v-model="selectedRadioExample3"
               v-for="i in examples"
               :text="i.text"
               :key="i"
               :disabled="i.disabled"
               :value="i.text"
               name="radioExample3"
               >
            </u-radioButton>
                <div class="my-3"></div>
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
`
<template>
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
<\/script>
`
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
