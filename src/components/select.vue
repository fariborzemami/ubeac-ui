<template>
  <div
    v-show="visible"
    :dir="dir"
    >
  <label 
    :for="id"
    >
      {{ label }}
  </label>
   <select 
      v-model="selectedItems"
      :multiple="multiple"
      class="form-select"
      :aria-label="placeholder"
      :disabled="disabled"
      :autofocus="autofocus"
      :id="id"
      @change="onChange"
      @load="onLoad"
      >
      <template
        v-for="i in items"
        :key="i"
      >
        <option 
          :value="i.value"
          >
          {{ i.key }}
        </option>
      </template>
    </select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedItems: this.modelValue
    }
  },
  props: {
    modelValue: {
      type: String
    },
    items: {
      type: [Array, Object],
      default: []
    },
    id: {
      type: String
    },
    label: {
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
    visible: {
      type: Boolean,
      default: true
    },
    name: {
      type: String,
      required: true
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'load'],
  methods: {
    onChange () {
      this.$emit('update:modelValue', this.selectedItems)
    },
    onLoad (e) {
      this.emit('load', e)
    }
  },
}
</script>

