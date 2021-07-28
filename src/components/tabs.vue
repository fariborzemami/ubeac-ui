<template>
  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
    <li
      class="nav-item"
      role="presentation">
      <button
        class="nav-link active"
        id="pills-home-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-home"
        type="button"
        role="tab"
        aria-controls="pills-home"
        aria-selected="true">
        Options
      </button>
    </li>
  </ul>
  <slot/>
</template>

<script setup>
</script>
