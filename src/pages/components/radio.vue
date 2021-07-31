<route lang="yaml">
name: Radio
meta:
  layout: full
</route>

<template>
  <h1>Radio</h1>
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
            <u-radioButton
               text="Default radio"
               >
            </u-radioButton>
                <div class="my-3"></div>
          </div>
          <div class="col">
            <h4>Selected</h4>
            <u-radioButton
               text="Default checked radio"
               checked
               >
            </u-radioButton>
                <div class="my-3"></div>
          </div>
          <div class="col">
            <h4>Disabled</h4>
              <u-radioButton
                text=" Default checked radio"
                disabled
                >
              </u-radioButton>
                <div class="my-3"></div>
          </div>
        </div>
      </div>
    </u-tab>
  </u-tabs>
</template>

<script setup>
import { reactive } from 'vue'
import { VueComponent } from '../../../docs/components/primitive/radio.md'
const markdown = VueComponent
const code = reactive(
`
<u-radioButton
  text="This is a Radio button!"
  name="radioButton"
  >
</u-radioButton>
`
)

const doSomthing = () => {alert("Somthing");}
</script>
