<template>
  <div
    v-show="visible"
    class="form-check">
    <input 
       type="checkbox"
       v-model="isChecked"
       :value="value"
       @change="onChange"
       class="form-check-input" 
       :class="cssClass"
       :id="id"
       :dir="dir"
       :disabled="disabled"
       :autofocus="autofocus"
       />
    <template 
      v-if="text">
      <label 
        class="form-check-label" 
        :for="id">
        {{ text }}
      </label>
    </template>
    <template 
      v-else>
      <label 
        class="form-check-label" 
        :for="id">
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
      type: [String, Boolean, Array]
    },
    text: {
      type: String,
      default: ''
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
      type: [String, Boolean],
      required: false
    },
    tooltip: {
      type: String
    },
    id: {
      type: String,
      default () {
        // TODO: need id generator helper
        return 'checkboxGeneratedId' + Math.random().toString().split('.')[1]
      }
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
    dir: {
      type: String,
      default: "ltr"
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  methods: {
    onChange() {
      this.$emit('update:modelValue', this.isChecked)
    }
  }
}
</script>

