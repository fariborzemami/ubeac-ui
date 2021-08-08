<route lang="yaml">
meta:
  layout: full 
</route>

<template>
  <h1>
    Loader Test
  </h1>
  <h2>
    Change mode to v-model example
  </h2>
  <pre>{{ modelExample }}</pre>
  <u-input 
    model="modelExample">
  </u-input>
  <h2>
    Change i18n expersion
  </h2>
  <span>
    __application-name__
    __application-name__
  </span>
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
