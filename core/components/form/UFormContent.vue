<template>
  <div class="card-body">
    <slot>
        Form content is empty!
    </slot>
  </div>
</template>
<script>
export default {
  props: {
    columns: {
      type: String,
      default: '1'
    }
  }
};
</script>