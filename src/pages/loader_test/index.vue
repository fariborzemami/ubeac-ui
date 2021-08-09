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
    model="modelExample"
  />
  <h2>
    Change i18n expersion
  </h2>
  <span>
    {{ $t('application-name') }}
    __application-name__
    __application-name__
    <u-input placeholder="__application-name__" />
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
