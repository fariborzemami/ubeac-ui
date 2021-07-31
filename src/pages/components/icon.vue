<route lang="yaml">
name: Icon 
meta:
  layout: full
</route>

<template>
  <h1>Icon</h1>
  <u-tabs>
    <u-tab
      :active="true"
      title="options">
      <p 
      class="mt-3 text-start document-section">
      // NOTE: Zero version, created because of need to use in demo pages
      Need Document
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
        class="input-group">
        <div 
          class="form-outline">
          <input 
            placeholder="Search"
            type="search" 
            class="form-control" 
            v-model="iconSearchQuery" />
        </div>
      </div>

      <template
        v-for="iconKey in iconData">
        <div 
          class="card float-start m-2" 
          style="width: 8rem;height: 100px;">
          <div 
            class="card-body">
            <u-icon
              class="w-100 text-center"
              :icon="iconKey" >
            </u-icon>
            <span
              class="w-100 d-block text-center" >
              {{ iconKey }}
            </span>
          </div>
        </div>
      </template>
    </u-tab>
  </u-tabs>
</template>

<script>
import IconData from '../../assets/icons.json'
export default {
  data () {
    return {
      iconSearchQuery: '',
       code: 
      `
<u-icon
  size="small"
  style="float: left;"
  class="mx-2 float-start"
  icon="camera" 
  >
</u-icon>
      `
    }
  },
  computed: {
    iconData () {
      return Object.keys(IconData).filter((key) => {
        return key.indexOf(this.iconSearchQuery) >= 0
      })
    }
  }
}
</script>
