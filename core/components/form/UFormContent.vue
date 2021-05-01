<template>
  <div class="card-body">
    <UFormRow :columns="columns" :elements="$slots.default()">
      <slot />
    </UFormRow>
  </div>
</template>
<script>
import UFormRow from "./UFormRow.vue";
export default {
  components: { UFormRow },
  props: {
    columns: {
      type: [String, Number],
      default: 2
    }
  }
};
</script>