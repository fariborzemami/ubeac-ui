<template>
  <div
    v-if="visible"
    class="form-check"
  >
    <input 
      :id="id"
      v-model="selectedRadio"
      type="radio" 
      class="form-check-input"
      :value="value"
      :disabled="disabled"
      :autofocus="autofocus"
      :name="name"
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
      type: [String, Boolean]
    },
    text: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Boolean],
      required: false,
    },
    id: {
      type: String,
      default () {
        // TODO: need id generator helper
        return 'radioGeneratedId' + Math.random().toString().split('.')[1]
      }
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: true
    },
    name: {
      type: String,
      default () {
        // TODO: need name generator helper
        return 'radioGeneratedName' + Math.random().toString().split('.')[1]
      }
    }
  },
  emits: ['update:modelValue'],
  data () {
    return {
      selectedRadio: this.modelValue
    }
  },
  methods: {
    onChange() {
      this.$emit('update:modelValue', this.selectedRadio)
    }
  }
}
</script>

