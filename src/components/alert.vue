<template>
  <div
    v-if="visible"
    :class="`alert alert-${ variant } ${ closable ? `alert-dismissible fade show` : `` } `"
    role="alert"
    >
    <template v-if="text">
      <div>
        {{ text }}
      </div>
    </template>
    <template v-else>
      <slot></slot>
    </template>
    <button
        v-if="closable"
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
    ></button>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: 'info',
      validator: (val) => ['success', 'info', 'warning', 'error', 'secondary', 'primary', 'danger'].includes(val)
    },
    visible: {
      type: Boolean,
      default: true
    },
    closable: {
      type: Boolean,
      default: false
    }
  }
}
</script>

