<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">{{ title }}</div>
    </q-card-section>
    <q-separator />
    <q-card-actions>
      <slot />
    </q-card-actions>
  </q-card>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      default: "Card",
    },
  },
};
</script>