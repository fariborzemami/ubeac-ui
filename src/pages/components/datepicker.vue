<route lang="yaml">
name: Datepicker 
meta:
  layout: full
</route>

<template>
  <DemoHeader
    edit-link="https://github.com/ubeac/ubeac-ui/tree/main/docs/components/primitive/dateTimePicker.md"
    title="Datepicker"
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
        <div class="col col-12">
         <pre>
          {{ selectedDate }}
         </pre>
        </div>
        <div class="col">
          <h4>
            Datepicker
          </h4>
          <u-datepicker
            v-model="selectedDate">
          </u-datepicker>
        </div>
        <div class="col">
          <h4>
            Timepicker
          </h4>
          <u-datepicker
            :timepicker="true"
            v-model="selectedDate">
          </u-datepicker>
        </div>
        <div class="col">
          <h4>
            Options (No Toolbox, No Infobox)
          </h4>
          <u-datepicker
            :options="{
              format: 'YYYY/MM/DD',        
              autoClose: true,
              toolbox: {
                enabled: false
              }, 
              infobox: {
                enabled: false
              } 
            }"
            v-model="selectedDate">
          </u-datepicker>
        </div>
      </div>
    </u-tab>
  </u-tabs>
</template>

<script>
export default {
  data () {
    return {
      selectedDate: new Date().valueOf()
    }
  }
}
</script>

<script setup>
import { reactive } from 'vue'
import { VueComponent } from '../../../docs/components/primitive/dateTimePicker.md'
const markdown = VueComponent
const code = reactive(
`<template>
<pre>{{ selectedDate }}</pre>
<u-datepicker
  class="mt-3"
  v-model="selectedDate">
</u-datepicker>
<u-datepicker
  :timepicker="true"
  class="mt-3"
  v-model="selectedDate">
</u-datepicker>
</template>
<script>
export default {
  data () {
    return {
      selectedDate: new Date().valueOf()
    }
  }
}
<\/script>`
)
</script>
