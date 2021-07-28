<route lang="yaml">
meta:
  layout: master
</route>

<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/">Componenets</a></li>
      <li class="breadcrumb-item active" aria-current="page">Button</li>
    </ol>
  </nav>
  <p 
    class="mt-3 text-start">
    <markdown></markdown>
  </p>
  <h2
    class="mt-5 text-start">
    Live Editor
  </h2>
  <div class="container">
    <div class="row">
      <div class="col">
        <u-live 
          :code="code">
        </u-live>
      </div>
    </div>
  </div>
  <h2
    class="mt-5 text-start">
    Samples Preview
  </h2>
  <div class="container">
    <div class="row">
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
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { VueComponent } from '../../../docs/components/primitive/button.md'
const markdown = VueComponent
const code = reactive(
`
<u-button
  variant="primary"
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
