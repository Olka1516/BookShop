<template>
  <div class="container">
    <div>
      <BasketProcess />
      <BasketTable />
    </div>
    <BasketOrder />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.basket;
</style>
