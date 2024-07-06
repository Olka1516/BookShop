<template>
  <div>
    <img src="/books.png" alt="" />

    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.auth;
</style>
