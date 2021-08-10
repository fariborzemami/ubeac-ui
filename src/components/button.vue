<template>
  <button 
    :disbaled="disabled"
    :autofocus="autofocus"
    type="button" 
    :class="`btn btn-${variant} btn-${size}`"
  >
    <u-icon
      v-if="icon && loading === false"
      :size="iconSizeMap"
      style="float: left;"
      class="mx-2 float-start"
      :icon="icon" 
    />
    <template
      v-if="loading"
    >
      <div 
        :class="`spinner-border spinner-border-${size}`"
        role="status"
      />
    </template>
    <template
      v-else
    >
      <template 
        v-if="text"
      >
        <span>
          {{ text }}
        </span>
      </template>
      <template 
        v-else
      >
        <slot />
      </template>
    </template>
  </button>
</template>

<script setup>
// https://getbootstrap.com/docs/5.0/components/buttons
// Native Props: disabled, autofocus
import { defineProps, computed, toRefs } from 'vue'

const iconSizeMap = computed(() => {
  const sizeMap = {'lg': 1.8, 'md': 1.4, 'sm':1.2}
  return sizeMap[size.value]
})

const props = defineProps({
  text: {
    type: [String, Boolean],
    default: false
  },
  size: {
    type: [String, Boolean],
    default: 'md' 
  },
  icon: {
    type: [String, Boolean],
    default: false 
  },
  autofocus: {
    type: Boolean,
    default: false 
  },
  disbaled: {
    type: Boolean,
    default: false 
  },
  loading: {
    type: Boolean,
    default: false 
  },
  variant: {
    type: String,
    default: 'primary'
  }
})

const { size, icon, variant, loading, disabled, autofocus } = toRefs(props);

</script>
