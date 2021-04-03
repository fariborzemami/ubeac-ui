<template>
  <table>
    <tr v-for="(item, index) in model" :key="index">
      <slot :model="item" />
    </tr>
  </table>
</template>
<script>
export default {
    props:["model"]
}
</script>