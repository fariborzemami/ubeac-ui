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
            class="col-4"
            >
            <h4>Default</h4>
            <u-select
               v-model="foo"
               :items="items"
               >
            </u-select>
                <div 
                  class="my-3"
                >
                </div>
          </div>
          <div 
            class="col-4"
            >
            <h4>Selected</h4>
            <u-select
               v-model="bar"
               :items="items"
               >
            </u-select>
                <div 
                  class="my-3"
                >
                </div>
          </div>
          <div
            class="col-4"
            >
            <h4>Disabled</h4>
            <u-select
              label=" Disable select"
              disabled
            />
            <div class="my-3" />
          </div>
          <div
            class="col-4"
            >
            <h4>Clearable</h4>
              <u-select
                clearable
                :items="items"
                >
              </u-select>
                <div class="my-3"></div>
          </div>
          <div
            class="col-4"
            >
            <h4>Searchable</h4>
              <u-select
                searchable
                :items="items"
                >
              </u-select>
                <div class="my-3"></div>
          </div>
          <div
            class="col-4"
            >
            <h4>Not close on select</h4>
              <u-select
                :close-on-select="false"
                :items="items"
                >
              </u-select>
                <div class="my-3"></div>
          </div>
          <div
            class="col-4"
            >
            <h4>Rtl</h4>
              <u-select
                dir="rtl"
                :items="items"
                >
              </u-select>
                <div class="my-3"></div>
          </div>
          <div
            class="col-4"
            >
            <h4>Multiple</h4>
              <u-select
                multiple
                :items="items"
                >
              </u-select>
                <div class="my-3"></div>
          </div>
          <div
            class="col-4"
            >
            <h4>Placeholder</h4>
              <u-select
                placeholder="Please select an option"
                :items="items"
                >
              </u-select>
                <div class="my-3"></div>
          </div>
          <div
            class="col-4"
            >
            <h4>Loading</h4>
              <u-select
                loading
                :items="items"
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
  <pre> {{ foo }}</pre>
  <u-select
    v-model="foo"
    :items="items"
    >
  </u-select>
 <br>
  <u-select
    v-model="foo"
    :items="items"
    >
  </u-select>
  <hr>
  <pre> {{ bar }}</pre>
  <u-select
    v-model="bar"
    :items="items"
    >
  </u-select>
  <hr>
  <pre> {{ bar }}</pre>
  <u-select
    v-model="baz"
    multiple
    :items="items"
    >
  </u-select>
  <hr>
  <pre> {{ qux }}</pre>
  <u-select
    v-model="qux"
    searchable
    :items="items"
    >
  </u-select>
</template>
<script>
export default {
   data () {
     return {
        foo: null,
        bar: {
          "label": "foo",
          "value": 1
        },
        baz: {
          "label": "baz",
          "value": 3
        },
        qux: null,
        items: [
          {
            label: 'foo',
            value: 1
          },
          {
            label: 'bar',
            value: 2
          },
          {
            label: 'baz',
            value: 3
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
    label: 'foo',
    value: 1
  },
  {
    label: 'bar',
    value: 2
  },
  {
    label: 'baz',
    value: 3
  }
]
const foo = ref('')
const bar = ref({
    label: 'baz',
    value: 3
  })
</script>
