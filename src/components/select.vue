<template>
  <div
    v-show="visible"
    >
  <v-select 
    v-model="selectedItems"
    :options="items" 
    :dir="dir"
    :clearable="clearable"
    :closeOnSelect="closeOnSelect"
    :disabled="disabled"
    :filterable="filterable"
    :inputId="id"
    :label="label"
    :multiple="multiple"
    :placeholder="placeholder"
    :searchable="searchable"
    :transition="transition"
    :value="value"
    @input="onChange"
    />
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
      type: [String, Array, Object],
      default: []
    },
    placeholder: {
      type: String
    },
    id: {
      type: String
    },
    label: {
      type: String
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
    },
    clearable: {
	    type: Boolean,
	    default: true
    },
     closeOnSelect: {
      type: Boolean,
      default: true
    },
    dir: {
      type: String,
      default: 'auto'
    },
    filterable: {
      type: Boolean,
      default: false
    },
    searchable: {
      type: Boolean,
      default: false
    },
    transition: {
	    type: String,
	    default: "fade"
    },
    value: {
      default: null
    }
  },
  emits: ['update:modelValue', 'change'],
  methods: {
    onChange (e) {
      this.$emit('update:modelValue', this.selectedItems)
      this.$emit('change', e)
    }
  },
}
</script>

