<route lang="yaml">
name: Input
meta:
  layout: full
</route>

<template>
  <DemoHeader
    editLink="https://github.com/ubeac/ubeac-ui/tree/main/docs/components/primitive/input.md"
    title="Input"
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
          <h4>Default Value</h4>
          <u-input
             v-model="inputExample1"
             name="inputExample1"
            >
          </u-input>
            <div class="my-3"></div>
        </div>
        <div class="col">
          <h4>Disable</h4>
          <u-input
             v-model="inputExample2"
             name="inputExample2"
             disabled
             >
          </u-input>
            <div class="my-3"></div>
        </div>
        <div class="col">
          <h4>onClick trigger Alert</h4>
          <u-input
            @click="doSomthing()"
            v-model="inputExample3"
            name="inputExample3"
            >
          </u-input>
            <div class="my-3"></div>
        </div>
        <div class="col">
          <h4>Placeholder</h4>
          <u-input
             v-model="inputExample4"
             name="inputExample4"
             placeholder="Example4"
             >
          </u-input>
            <div class="my-3"></div>
        </div>
      </div>
    </u-tab>
  </u-tabs>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { VueComponent } from '../../../docs/components/primitive/input.md'
const markdown = VueComponent
const code = reactive(
`<template>
  <h6>Placeholder</h6>
  <pre> text: {{ inputValue1 }} </pre>
  <u-input
    v-model="inputValue1"
    name="inputExample1"
    >
  </u-input>
  <hr>
  <h6>Default Value</h6>
  <pre> text: {{ inputValue2 }} </pre>
  <u-input
    v-model="inputValue2"
    type="text"
    name="inputExample2"
    >
  </u-input>
  <hr>
  <h6>Number type</h6>
  <pre> text: {{ inputValue3 }} </pre>
  <u-input
    v-model="inputValue3"
    type="number"
    name="inputExample3"
    >
  </u-input>
</template>
<script>
export default {
   data () {
     return {
        inputValue1: '',
        inputValue2: "foo",
        inputValue3: 123
     }
   }
 }
<\/script>`
)

const doSomthing = () => {alert("Somthing");}
const inputExample1 = ref('Default value')
const inputExample2 = ref('')
const inputExample3 = ref('')
const inputExample4 = ref('')
</script>
