<template>
  <div>
    Grid Columns
    <slot :model="item" />
  </div>
</template>

<script>
export default {
    props:["model"]
}
</script>