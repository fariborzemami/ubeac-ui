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
               v-model="selectedExample1"
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
               v-model="selectedExample2"
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
            class="col"
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
                v-model="selectedExample2"
                :items="items"
                >
              </u-select>
                <div class="my-3"></div>
          </div>
          <div
            class="col-4"
            >
            <h4>Filterable</h4>
              <u-select
                searchable
                filterable
                v-model="selectedExample2"
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
                v-model="selectedExample2"
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
                v-model="selectedExample2"
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
                v-model="selectedExample2"
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
    >
  </u-select>
  <hr>
  <pre> {{ selectedExample2 }}</pre>
  <u-select
    v-model="selectedExample2"
    :items="items"
    >
  </u-select>
  <hr>
  <pre> {{ selectedExample3 }}</pre>
  <u-select
    v-model="selectedExample3"
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
        selectedExample2: {
          "label": "foo",
          "value": 1
        },
        selectedExample3: {
          "label": "bar",
          "value": 2
        },
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
const selectedExample1 = ref('')
const selectedExample2 = ref({
  label: 'baz',
  value: 3
})

</script>
