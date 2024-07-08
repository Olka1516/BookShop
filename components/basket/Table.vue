<template>
  <div>
    <h1>Shopping card items</h1>
    <div class="table">
      <div v-for="book in data" class="table-row">
        <BasketTableCard :book="book" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { data } from "~/mocks/mock";
</script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.basket-table;
</style>
