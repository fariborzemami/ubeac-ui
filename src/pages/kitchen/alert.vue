<route lang="yaml">
name: Alert
meta:
  layout: full
</route>

<template>
  <h1>Alert</h1>
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
            <template
              v-for="v in alertVariants">
              <u-alert
                :variant="v"
                @click="doSomthing()"
                text="Alert text will be shown!"
                >
              </u-alert>
                <div class="my-3"></div>
            </template>
          </div>
          <div class="col">
            <h4>Closable</h4>
            <template
              v-for="v in alertVariants">
              <u-alert
                :variant="v"
                text="This is a closable alert!"
                :closable="true"
                >
              </u-alert>
                <div class="my-3"></div>
            </template>
          </div>
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
`
<u-alert
  variant="success"
  @click="doSomthing()"
  text="this is an alert!"
  closable
  >
</u-alert>
`
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
