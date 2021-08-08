<route lang="yaml">
meta:
  layout: full 
</route>

<template>
  <h1>Loader Test</h1>
  <pre>{{ modelExample }}</pre>
  <u-input 
    model="modelExample">
  </u-input>
</template>

<script>
export default {
  data () {
    return {
      modelExample: 'foo'
    }
  }
}
</script>
