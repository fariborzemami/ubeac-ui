<route lang="yaml">
meta:
  layout: master
</route>

<template>
  <h1>CheckBox</h1>
  <hr>
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
        Playground
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
        Examples
      </button>
    </li>
  </ul>

  <div
    class="tab-content" 
    id="pills-tabContent">
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
      <u-live 
        :code="code">
      </u-live>
    </div>
    <div 
    class="tab-pane fade" 
    id="pills-contact" 
    role="tabpanel" 
    aria-labelledby="pills-contact-tab">
      <div class="container">
        <div class="row">
          <div class="col">
            <h4>Normal View</h4>
                <u-checkBox
                  v-for="i in 5"
                  :key="i"
                  text="This is a checkbox"
                  >
                </u-checkBox>
                <div class="my-3"></div>
          </div>
          <div class="col">
            <h4>Checked</h4>
                <u-checkBox
                  text="This is a checked checkbox!"
                  checked
                  >
                </u-checkBox>
                <div class="my-3"></div>
          </div>
          <div class="col">
            <h4>Disable</h4>
                <u-checkBox
                  text="This is a disable checkbox!"
                  checked
                  disabled
                  >
                </u-checkBox>
                <div class="my-3"></div>
          </div>
          <div class="col">
            <h4>onChange trigger Alert</h4>
                <u-checkBox
                  v-for="i in 5"
                  :key="i"
                  @click="doSomthing()"
                  text="This is a checkbox"
                  >
                </u-checkBox>
                <div class="my-3"></div>
          </div>
        </div>
      </div>
  </div>

</div>
</template>

<script setup>
import { reactive } from 'vue'
import { VueComponent } from '../../../docs/components/primitive/checkBox.md'
const markdown = VueComponent
const code = reactive(
`
<u-checkBox
  text="this is a checkbox!"
  >
</u-checkBox>
`
)

const doSomthing = () => {alert("Somthing");}
</script>
