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
          <h4>Model as array</h4>
           <pre> {{ example1Model }}</pre>
            <u-checkBox
              v-for="item in examples"
              :key="item"
              v-model="example1Model"
              :value="item.value"
              :text="item.text"
              name="example1"
              >
            </u-checkBox>
            <div class="my-3"></div>
        </div>
        <div class="col">
          <h4>Model as Boolean</h4>
           <pre> {{ example2Model }}</pre>
            <u-checkBox
              v-model="example2Model"
              text="foo"
              name="example2"
              >
            </u-checkBox>
            <div class="my-3"></div>
        </div>
        <div class="col">
         <h4>Disabled</h4>
           <pre> {{ example3Model }}</pre>
            <u-checkBox
              v-for="item in examples"
              :key="item"
              v-model="example3Model"
              :value="item.value"
              :text="item.text"
              :disabled="item.disabled"
              >
            </u-checkBox>
            <div class="my-3"></div>
        </div>
        <div class="col">
          <h4>Slot</h4>
          <pre> {{ example4Model }}</pre>
          <u-checkBox
             v-model="example4Model"
             value="bar"
             @change="onChange"
             name="example4"
            >
            bar
          </u-checkBox>
            <div class="my-3"></div>
        </div>
          <div class="col">
          <h4>@change</h4>
          <pre> {{ example5Model }}</pre>
          <u-checkBox
             v-model="example5Model"
             @change="onChange"
             name="example5"
            >
            bar
          </u-checkBox>
            <div class="my-3"></div>
        </div>
      </div>
    </u-tab>
  </u-tabs>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { VueComponent } from '../../../docs/components/primitive/checkBox.md'
const markdown = VueComponent
const code = reactive(
`
<template>
  <h5>Array Model</h5>
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
  <hr>
  <h5>Boolean</h5>
  <pre> {{ isChecked1 }}</pre>
  <u-checkBox
    v-model="isChecked1"
    text="foo"
    >
  </u-checkBox>
  <hr>
  <h5>@change</h5>
  <pre> {{ isChecked2 }}</pre>
  <u-checkBox
     v-model="isChecked2"
     @change="onChange"
     name="example"
    >
    bar
  </u-checkBox>
  <hr>
  <h5>Slot</h5>
  <pre> {{ isChecked3 }}</pre>
  <u-checkBox
    v-model="isChecked3"
    >
    baz
  </u-checkBox>
</template>
<script>
export default {
   data () {
     return {
        checkList: [],
        isChecked1: true,
        isChecked2: false,
        isChecked3: false
     }
   }, 
   methods: {
     onChange () {
        alert("This is a test for @change")
     }
   }
}
<\/script>
`
)
const examples = [
  {
    text: 'foo',
    value: 'foo', 
    disabled: false
  },
  {
    text: 'bar', 
    value: 'bar', 
    disabled: true
  },
  {
    text: 'baz',
    value: 'baz', 
    disabled: false
  }
]
const doSomthing = () => {alert("Somthing");}
const example1Model = ref([])
const example2Model = ref(true)
const example3Model = ref([])
const example4Model = ref([])
const example5Model = ref(false)

const onChange = () => {
  alert("This is an Example for @change")
}
</script>
