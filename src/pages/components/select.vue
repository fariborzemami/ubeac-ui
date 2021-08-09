<route lang="yaml">
name: Select
meta:
  layout: full
</route>

<template>
  <DemoHeader
    editLink="https://github.com/ubeac/ubeac-ui/tree/main/docs/components/primitive/select.md"
    title="Select"
  ></DemoHeader>
  <u-tabs>
    <u-tab
      :active="true"
      title="API">
      <p 
        class="mt-3 text-start document-section"
      >
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
               placeholder="Select"
               >
            </u-select>
                <div 
                  class="my-3"
                >
                </div>
          </div>
          <div 
            class="col"
            >
            <h4>Selected</h4>
            <u-select
               v-model="selectedExample2"
               :items="items"
               placeholder="Selected"
               >
            </u-select>
                <div 
                  class="my-3"
                >
                </div>
          </div>
          <div
            class="col"
            >
            <h4>Disabled</h4>
              <u-select
                placeholder=" Disable select"
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
import { reactive, ref } from 'vue'
import { VueComponent } from '../../../docs/components/primitive/select.md'
const markdown = VueComponent
const code = reactive(
`<template>
  <pre> {{ selectedExample1 }}</pre>
  <u-select
    model-value="selectedExample1"
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
        selectedExample2:{ key: 'foo', value: 'foo'},
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
const selectedExample1 = ref([])
const selectedExample2 = ref(2)

</script>
