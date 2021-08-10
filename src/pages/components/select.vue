<route lang="yaml">
name: Select
meta:
  layout: full
</route>

<template>
  <DemoHeader
    edit-link="https://github.com/ubeac/ubeac-ui/tree/main/docs/components/primitive/select.md"
    title="Select"
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
      <div 
        class="container"
      >
        <div 
          class="row"
        >
          <div 
            class="col"
          >
            <h4>Normal View</h4>
            <u-select
              v-model="selectedExample1"
              :items="items"
              label="Select"
            />
            <div 
              class="my-3"
            />
          </div>
          <div 
            class="col"
          >
            <h4>Selected</h4>
            <u-select
              v-model="selectedExample2"
              :items="items"
              label="Selected"
            />
            <div 
              class="my-3"
            />
          </div>
          <div
            class="col"
          >
            <h4>Disabled</h4>
            <u-select
              label=" Disable select"
              disabled
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
import { VueComponent } from '../../../docs/components/primitive/select.md'
const markdown = VueComponent
const code = reactive(
`<template>
  <pre> {{ selectedExample1 }}</pre>
  <u-select
    v-model="selectedExample1"
    :items="items"
    label="Example1"
    >
  </u-select>
  <hr>
  <pre> {{ selectedExample2 }}</pre>
  <u-select
    v-model="selectedExample2"
    label="Example2"
    :items="items"
    >
  </u-select>
  <hr>
  <pre> {{ selectedExample3 }}</pre>
  <u-select
    v-model="selectedExample3"
    label="Example3"
    multiple
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
        selectedExample3: ['foo', 'baz'],
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
<\/script>`
)

const doSomthing = () => {alert("Somthing");}
const items = [
  {
    key: 'foo',
    value: 1
  },
  {
    key: 'bar',
    value: 2
  },
  {
    key: 'baz',
    value: 3
  }
]
const selectedExample1 = ref('')
const selectedExample2 = ref(2)

</script>
