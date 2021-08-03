<template>
  <div
    v-if="visible"
    class="form-check">
    <input 
       class="form-check-input" 
       :class="cssClass"
       :type="type" 
       :value="value"
       :id="id"
       :dir="dir"
       :lang="language"
       :checked="checked"
       :disabled="disabled"
       :autofocus="autofocus"
       @change="onChangeCheckbox"
       >
    <template v-if="text">
      <label class="form-check-label" for="flexCheckDefault">
        {{ text }}
      </label>
    </template>
    <template v-else>
      <label class="form-check-label" for="flexCheckDefault">
        <slot></slot>
      </label>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedCheckbox: null
    }
  },
  watch: {
    deep: true,
    value () {
      this.selectedCheckbox = this.value
    }
  },
  props: {
    text: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      default: true
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Number
    },
    tooltip: {
      type: String
    },
    id: {
      type: String
    },
    label: {
      type: String
    },
    cssClass: {
      type: String
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "checkbox"
    },
    dir: {
      type: String,
      default: "ltr"
    },
    readonly: {
      type: Boolean,
      default: false
    },
    language: {
      type: String,
      default: null
    }
  }, 
  methods: {
    onChangeCheckbox () {
    this.$emit('onChange', this.selectedCheckbox)
    }
  }
}
</script>

