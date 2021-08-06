<template>
  <div
    v-show="visible"
    class="form-check">
    <input 
       v-model="isChecked"
       @change="onChangeCheckbox"
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
      isChecked: this.modelValue
    }
  },
  props: {
    modelValue: {
      type: String
    },
    text: {
      type: String,
      default: ''
    },
    checked: {
      type: [Boolean, String],
      default: false
    },
    visible: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      required: true
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
  emits: ['update:modelValue'],
  methods: {
    onChangeCheckbox(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

