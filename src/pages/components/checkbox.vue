<route lang="yaml">
name: Checkbox
meta:
  layout: full
</route>

<template>
  <DemoHeader
    edit-link="https://github.com/ubeac/ubeac-ui/tree/main/docs/components/primitive/checkbox.md"
    title="CheckBox"
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
      <div class="row">
        <div class="col">
          <h4>Model as array</h4>
           <pre> {{ foo }}</pre>
            <u-checkBox
              v-for="item in examples"
              :key="item"
              v-model="foo"
              :value="item.value"
              :text="item.text"
              name="foo"
              >
            </u-checkBox>
            <div class="my-3"></div>
        </div>
        <div class="col">
          <h4>Model as Boolean</h4>
           <pre> {{ bar }}</pre>
            <u-checkBox
              v-model="bar"
              text="foo"
              name="bar"
              >
            </u-checkBox>
            <div class="my-3"></div>
        </div>
        <div class="col">
         <h4>Disabled</h4>
           <pre> {{ baz }}</pre>
            <u-checkBox
              v-for="item in examples"
              :key="item"
              v-model="baz"
              :value="item.value"
              :text="item.text"
              :disabled="item.disabled"
              >
            </u-checkBox>
            <div class="my-3"></div>
        </div>
        <div class="col">
          <h4>Slot</h4>
          <pre> {{ qux }}</pre>
          <u-checkBox
             v-model="qux"
             value="qux"
             name="qux"
            >
            qux
          </u-checkBox>
            <div class="my-3"></div>
        </div>
          <div class="col">
          <h4>@change</h4>
          <pre> {{ quux }}</pre>
          <u-checkBox
             v-model="quux"
             @change="onChange"
             name="quux"
            >
            quux
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
<\/script>`
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
const foo = ref([])
const bar = ref(true)
const baz = ref([])
const qux = ref([])
const quux = ref(false)

const onChange = () => {
  alert("This is an Example for @change")
}
</script>
