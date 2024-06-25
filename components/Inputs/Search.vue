<template>
  <div class="search-container">
    <img src="/search.svg" alt="" />
    <input type="text" placeholder="Search" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.search;
</style>
