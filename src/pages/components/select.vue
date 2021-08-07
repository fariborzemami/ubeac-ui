<route lang="yaml">
name: Select
meta:
  layout: full
</route>

<template>
  <h1>Select</h1>
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
            <u-select
               label="foo"
               >
            </u-select>
                <div class="my-3"></div>
          </div>
          <div class="col">
            <h4>Selected</h4>
            <u-select
               text="Default select"
               >
            </u-select>
                <div class="my-3"></div>
          </div>
          <div class="col">
            <h4>Disabled</h4>
              <u-select
                text=" Disable select"
                disabled
                >
              </u-select>
                <div class="my-3"></div>
          </div>
        </div>
      </div>
    </u-tab>
  </u-tabs>
</template>

<script setup>
import { reactive } from 'vue'
import { VueComponent } from '../../../docs/components/primitive/select.md'
const markdown = VueComponent
const code = reactive(
`
<template>
  <pre> {{ selectedExample1 }}</pre>
  <u-select
    v-model="selectedExample1"
    :items="items"
    label="foo"
    >
  </u-select>
  <hr>
  <pre> {{ selectedExample2 }}</pre>
  <u-select
    v-model="selectedExample2"
    label="bar"
    :items="items"
    >
  </u-select>
</template>
<script>
export default {
   data () {
     return {
        selectedExample1: null,
        selectedExample2: 'foo',
        items: [
          {   
            key: 'foo',
            value: 'foo'
          },
          {
            key: 'bar',
            value: 'bar'
          },
          {
            key: 'baz',
            value: 'baz'
          }
        ]
     }
   }
}
<\/script>
`
)

const doSomthing = () => {alert("Somthing");}
</script>
