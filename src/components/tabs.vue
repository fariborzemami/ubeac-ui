<template>
  <div>
    <ul 
      ref="tabheader"
      class="nav nav-pills mb-3" 
      role="tablist">
      <li 
      v-for="item in headerLink"
      class="nav-item " 
      role="presentation">
        <button 
          :class="{ 'active': item.active }"
          class="nav-link " 
          data-bs-toggle="pill"
          :data-bs-target="`#${item.id}`" 
          type="button" 
          role="tab" >
          {{ item.title }}
        </button>
      </li>
    </ul>
    <div
      ref="tabcontent"
      class="tab-content" 
      id="pills-tabContent">
      <slot />
    </div>
  </div>
</template>

<script>
// NOTE: Zero version, created because of need to use in demo pages
import { onMounted, ref, watchEffect } from 'vue'
export default {
  data () {
    return {
      headerLink: []
    }
  },
  mounted () {
    const content = this.$refs.tabcontent;
    let child;
    for(child of content.children) {
      console.log(child.getAttribute('data-active'))
      this.headerLink.push({
        active: child.getAttribute('data-active') === 'true',
        title: child.getAttribute('data-title'),
        id: child.getAttribute('id'),
      })
    }
  }
}
</script>
