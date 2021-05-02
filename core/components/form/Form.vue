<template>
  <form v-on:submit.prevent>
    <div class="card">
      <h5 class="card-header">{{title}}</h5>
      <slot> Form content is empty! </slot>
    </div>
  </form>
</template>
<script>
export default {
  inheritAttrs: true,
  props: {
    title: {
      type: String,
      default: "Form Title"
    }
  }
};
</script>