<template>
  <div class="container-fluid min-vh-100 d-flex flex-column">
    <div class="row border bg-light">Simple layout!</div>
    <div class="row flex-grow-1">
      <div class="col-12">
        <router-view />
      </div>
    </div>
    <div class="row border bg-light">Footer section is emprty!</div>
  </div>
</template>

