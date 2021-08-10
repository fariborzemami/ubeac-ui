<route lang="yaml">
name: Alert
meta:
  layout: full
</route>

<template>
  <DemoHeader
    edit-link="https://github.com/ubeac/ubeac-ui/tree/main/docs/components/primitive/alert.md"
    title="Alert"
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
          <h4>Normal View</h4>
          <template
            v-for="v in alertVariants"
          >
            <u-alert
              :variant="v"
              text="Alert text will be shown!"
          </template>
        </div>
        <div 
          class="col"
        >
          <h4>Closable</h4>
          <template
            v-for="v in alertVariants"
            :key="v">
            >
            <u-alert
              :variant="v"
              text="This is a closable alert!"
              :closable="true"
            />
            <div class="my-3" />
          </template>
        </div>
        <div class="col">
          <h4>Slot</h4>
          <template
            v-for="v in alertVariants"
            :key="v">
            <u-alert
              :variant="v"
              >
              This is a Test for slot
            </u-alert>
              <div class="my-3"></div>
          </template>
        </div>
      </div>
    </u-tab>
  </u-tabs>
</template>

<script setup>
import { reactive } from 'vue'
import { VueComponent } from '../../../docs/components/primitive/alert.md'
const markdown = VueComponent
const code = reactive(
`<u-alert
  variant="success"
  text="this is an alert!"
  closable
  >
</u-alert>`
)

const doSomthing = () => {alert("Somthing");}
const alertVariants = [
        'primary', 
        'secondary', 
        'success', 
        'danger', 
        'warning', 
        'info', 
        'light',
        'dark'
      ]
</script>
