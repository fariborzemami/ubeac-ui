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
    <li 
      class="nav-item" 
      role="presentation">
      <button 
        class="nav-link" 
        id="pills-profile-tab" 
        data-bs-toggle="pill" 
        data-bs-target="#pills-profile" 
        type="button" 
        role="tab" 
        aria-controls="pills-profile" 
        aria-selected="false">
        Examples
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button 
        class="nav-link" 
        id="pills-contact-tab" 
        data-bs-toggle="pill" 
        data-bs-target="#pills-contact" 
        type="button" 
        role="tab" 
        aria-controls="pills-contact" 
        aria-selected="false">
        PLayground
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
    <div 
      class="tab-pane fade" 
      id="pills-profile" 
      role="tabpanel" 
      aria-labelledby="pills-profile-tab">
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
    </div>
    <div 
      class="tab-pane fade" 
      id="pills-contact" 
      role="tabpanel" 
      aria-labelledby="pills-contact-tab">
      Play Ground
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
