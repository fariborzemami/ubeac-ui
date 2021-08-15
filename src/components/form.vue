<template>
  <form 
    @submit.stop.prevent="onSubmit">
    <div
      class="row mb-3">
        <div
          :class="`col-${cols}`"> 
          <slot />
        </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String
    },
    cols: {
      type: Number,
      default: 4
    },
    confirm: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    autosave: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: Boolean,
      default: false
    },
    layout: {
      type: String,
      default: 'horizental'
    }
  },
  created () {
    window.onload = this.onLoad()
  },
  data () {
    FormData: this.modelValue
  },
  methods: {
    onLoad (e) {
      this.$emit('onLoad', e)
    }
  }
}
</script>
