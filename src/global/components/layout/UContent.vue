<template>
  <div class="content">
    <slot>Content section is empty!</slot>
  </div>
</template>
<style scoped>
.content::after {
  content: "";
  display: table;
  clear: both;
}
</style>