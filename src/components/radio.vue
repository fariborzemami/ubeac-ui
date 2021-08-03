<template>
  <div
    v-if="visible"
    class="form-check">
    <input 
       v-model="radio"
       class="form-check-input" 
       :class="cssClass"
       :type="type" 
       :value="value"
       :id="id"
       :name="name"
       :dir="dir"
       :lang="language"
       :checked="checked"
       :disabled="disabled"
       :autofocus="autofocus"
       >
    <template v-if="text">
      <label class="form-check-label" :for="id">
        {{ text }} 
      </label>
    </template>
    <template v-else>
      <label class="form-check-label" :for="id">
        <slot></slot>
      </label>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: null
    }
  },
  props: {
    text: {
      type: String,
      default: ''
    },
    value: {
      type: Number
    },
    // Must implement with bootstrap
    tooltip: {
      type: String
    },
    id: {
      type: String
    },
    // Ask about this prop
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
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "radio"
    },
    dir: {
      type: String,
      default: "ltr"
    },
    visible: {
      type: Boolean,
      default: true
    },
    language: {
      type: String,
      default: null
    },
    name: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

