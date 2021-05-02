<template>
  <div class="card-body">
    <FormRow :columns="columns" :elements="$slots.default()">
      <slot />
    </FormRow>
  </div>
</template>
<script>
import FormRow from "./FormRow";
export default {
  components: { FormRow },
  props: {
    columns: {
      type: [String, Number],
      default: 2
    }
  }
};
</script>