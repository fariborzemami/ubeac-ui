<template>
  <div
    v-show="visible"
    >
    <v-select 
      v-model="selected"
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
      :value="value"
      @option:selected="onChange"
      />
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: this.modelValue
    }
  },
  props: {
    modelValue: {
      type: [String, Array, Object]
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
	    default: false
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
    value: {
      default: null
    }
  },
  emits: ['update:modelValue', 'change'],
  methods: {
    onChange (e) {
      this.$emit('update:modelValue', this.selected)
      this.$emit('change', e)
    }
  },
}
</script>

