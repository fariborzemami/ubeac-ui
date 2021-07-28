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
  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
    <li 
      class="nav-item" 
      role="presentation">
      <button 
        class="nav-link active" 
        id="pills-home-tab" 
        data-bs-toggle="pill" 
        data-bs-target="#pills-home" 
        type="button" 
        role="tab" 
        aria-controls="pills-home" 
        aria-selected="true">
        Options
      </button>
    </li>
  </ul>

  <div class="tab-content" id="pills-tabContent">
    <div 
      class="tab-pane fade show active" 
      id="pills-home" 
      role="tabpanel" 
      aria-labelledby="pills-home-tab">
      <p 
      class="mt-3 text-start">
      <markdown></markdown>
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { VueComponent } from '../../../docs/components/primitive/alert.md'
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
