<route lang="yaml">
name: Input
meta:
  layout: full
</route>

<template>
  <DemoHeader
    edit-link="https://github.com/ubeac/ubeac-ui/tree/main/docs/components/primitive/input.md"
    title="Input"
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
          <h4>Default Value</h4>
          <u-input
            v-model="foo"
            name="foo"
          />
          <div class="my-3" />
          <h4>Mask (0-0-0)</h4>
          <u-input
            :mask="{mask: '0-0-0'}"
            v-model="foo"
            name="foo"
          />
          <div class="my-3" />
          <h4>Mask (a-0-0-0)</h4>
          <u-input
            :mask="{mask: 'a-0-0-0'}"
            v-model="foo"
            name="foo"
          />
          <div class="my-3" />
          <h4>pattern +980000000000</h4>
          <u-input
            :mask="{mask: '+{98}0000000000'}"
            v-model="mobileMaskInput"
            name="buzz"
          />
          <div class="my-3" />
        </div>
        <div class="col">
          <h4>Disable</h4>
          <u-input
            v-model="bar"
            name="bar"
            disabled
          />
          <div class="my-3" />
        </div>
        <div class="col">
          <h4>onClick trigger Alert</h4>
          <u-input
            v-model="baz"
            name="baz"
          />
          <div class="my-3" />
        </div>
        <div class="col">
          <h4>Placeholder</h4>
          <u-input
            v-model="qux"
            name="qux"
            placeholder="qux"
          />
          <div class="my-3" />
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
  <pre> text: {{ foo }} </pre>
  <u-input
    v-model="foo"
    name="foo"
    >
  </u-input>
  <br>
  <u-input
    v-model="foo"
    name="foo"
    >
  </u-input>
  <hr>
  <h6>Default Value</h6>
  <pre> text: {{ bar }} </pre>
  <u-input
    v-model="bar"
    type="text"
    name="bar"
    >
  </u-input>
  <hr>
  <h6>Number type</h6>
  <pre> text: {{ baz }} </pre>
  <u-input
    v-model="baz"
    type="number"
    name="baz"
    >
  </u-input>
</template>
<script>
export default {
   data () {
     return {
        foo: '',
        bar: "foo",
        baz: 123
     }
   }
 }
<\/script>`
)

const foo = ref('Default value')
const bar = ref('')
const baz = ref('')
const qux = ref('')
const mobileMaskInput = ref('+98')
</script>
