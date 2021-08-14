<template>
  <div
    v-show="visible"
    class="form-check"
  >
    <input 
      :id="id"
      v-model="isChecked"
      type="checkbox"
      :value="value"
      class="form-check-input" 
      :dir="dir"
      :name="name"
      :disabled="disabled"
      :autofocus="autofocus"
      @change="onChange"
    >
    <template 
      v-if="text"
    >
      <label 
        class="form-check-label" 
        :for="id"
      >
        {{ text }}
      </label>
    </template>
    <template 
      v-else
    >
      <label 
        class="form-check-label" 
        :for="id"
      >
        <slot />
      </label>
    </template>
  </div>
</template>

<script>
export default {
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
    id: {
      type: String,
      default () {
        // TODO: need id generator helper
        return 'checkboxGeneratedId' + Math.random().toString().split('.')[1]
      }
    },
    name: {
      type: String,
      default () {
        // TODO: need name generator helper
        return 'checkboxGeneratedName' + Math.random().toString().split('.')[1]
      }
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    dir: {
      type: String,
      default: "ltr"
    }
  },
  emits: ['update:modelValue', 'change'],
  data () {
    return {
      isChecked: this.modelValue
    }
  },
  watch: {
    modelValue () {
      this.isChecked = this.modelValue
    }
  },
  methods: {
    onChange(e) {
      this.$emit('update:modelValue', this.isChecked)
      this.$emit('change', e)
    }
  }
}
</script>

