<route lang="yaml">
name: Button
meta:
  layout: full
</route>

<template>
  <h1>Button</h1>
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
      <div 
        class="row">
        <div class="col">
          <h4>Normal View</h4>
          <template
            v-for="s in buttonSizes">
            <template
              v-for="v in buttonVariants">
              <u-button
                :variant="v"
                @click="doSomthing()"
                text="this is button text"
                :disabled="false"
                :size="s"
                icon="camera"
                :autofocus="true"
                :loading="false">
              </u-button>
              <div class="my-3"></div>
            </template>
          </template>
        </div>
        <div class="col">
          <h4>Loading</h4>
          <template
            v-for="s in buttonSizes">
            <template
              v-for="v in buttonVariants">
              <u-button
                :variant="v"
                @click="doSomthing()"
                text="this is button text"
                :disabled="false"
                :size="s"
                icon="camera"
                :autofocus="true"
                :loading="true">
              </u-button>
              <div class="my-3"></div>
            </template>
          </template>
        </div>
        <div class="col">
          <h4>Disabled</h4>
          <template
            v-for="s in buttonSizes">
            <template
              v-for="v in buttonVariants">
              <u-button
                :variant="v"
                @click="doSomthing()"
                text="this is button text"
                :disabled="true"
                :size="s"
                icon="camera"
                :autofocus="true"
                :loading="false">
              </u-button>
              <div class="my-3"></div>
            </template>
          </template>
        </div>
        <div class="col">
          <h4>No Icon</h4>
          <template
            v-for="s in buttonSizes">
            <template
              v-for="v in buttonVariants">
              <u-button
                :variant="v"
                @click="doSomthing()"
                text="this is button text"
                :size="s"
                :loading="false">
              </u-button>
              <div class="my-3"></div>
            </template>
          </template>
        </div>
      </div>
    </u-tab>
  </u-tabs>
</template>

<script setup>
import { reactive } from 'vue'
import { VueComponent } from '../../../docs/components/primitive/button.md'
const markdown = VueComponent
const code = reactive(
`
<u-button
  variant="success"
  @click="doSomthing()"
  text="this is button text"
  size="lg"
  icon="camera">
</u-button>
`
)
const doSomthing = () => {alert("Somthing");}
const buttonSizes = ['lg', 'md', 'sm']
const buttonVariants = [
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
