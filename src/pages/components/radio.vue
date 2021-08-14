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
            <h4>Default</h4>
            <u-radioButton
              v-for="i in examples"
              :key="i"
              v-model="foo"
              :text="i.text"
              :value="i.text"
              name="foo"
            />
            <div class="my-3" />
          </div>
          <div class="col">
            <h4>Selected</h4>
            
            <u-radioButton
              v-for="i in examples"
              :key="i"
              v-model="bar"
              :text="i.text"
              :value="i.text"
              name="bar"
            />
            <div class="my-3" />
          </div>
          <div class="col">
            <h4>Disabled</h4>
            
            <u-radioButton
              v-for="i in examples"
              :key="i"
              v-model="baz"
              :text="i.text"
              :disabled="i.disabled"
              :value="i.text"
              name="baz"
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
  <pre> selected: {{ foo }} </pre>
  <u-radioButton
    text="foo"
    v-model="foo"
    value="foo"
    name="foo"
    >
  </u-radioButton>
  <u-radioButton
    text="bar"
    v-model="foo"
    value="bar"
    name="foo"
    >
  </u-radioButton>
  <hr>
  <h6>
      Two way binding check
  </h6>
    <u-radioButton
    text="foo"
    v-model="foo"
    value="foo"
    >
  </u-radioButton>
  <u-radioButton
    text="bar"
    v-model="foo"
    value="bar"
    >
  </u-radioButton>
  <hr>
  <pre> selected: {{ bar }} </pre>
  <u-radioButton
    text="bar"
    v-model="bar"
    name="radioBtnExample2"
    value="bar"
    >
  </u-radioButton>
  <hr>
  <u-radioButton
    text="baz"
    v-model="baz"
    name="baz"
    value="baz"
    >
  </u-radioButton>
</template>

<script>
export default {
   data () {
     return {
        foo: null,
        bar: 'bar',
        baz: ''
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

const foo = ref('')
const bar = ref('bar')
const baz = ref('')
</script>
